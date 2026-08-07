import { useState, useMemo, useRef, useEffect } from 'react';
import { Chess } from 'chess.js';
import type { Move, Square } from 'chess.js';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useChessModel } from '@site/src/hooks/useChessModel';
import { usePositionData } from '@site/src/hooks/usePositionData';
import { useOpening } from '@site/src/hooks/useOpening';
import ChessBoard from '@site/src/components/Chess/ChessBoard';
import EvalBar from '@site/src/components/Chess/EvalBar';
import MoveList from '@site/src/components/Chess/MoveList';
import GameSidebar from '@site/src/components/Chess/GameSidebar';
import OpeningBadge from '@site/src/components/Chess/OpeningBadge';
import type { OpeningInfo } from '@site/src/components/Chess/OpeningBadge';
import { CHESS_GAMES } from '@site/src/data/chess-games';
import clsx from 'clsx';
import type { CheckmateInfo } from '@site/src/components/Chess/BoardSkin';
import type { ContinuationEntry } from '@site/src/types/chess';
import type { AnnotationType } from '@site/src/components/Chess/AnnotationBadge';
import { evaluatePlayedMove } from '@site/src/lib/annotationEngine';
import type { PlayedMoveEval } from '@site/src/lib/annotationEngine';
import styles from './chess.module.scss';

const START_FEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

// ── Move classification (chess.com game-review rules) ────────────────────
// drop = (best SF move's winrate) − (played move's winrate), both 0–1.
// Thresholds follow chess.com's expected-points model (community-derived —
// chess.com doesn't publish exact numbers):
//   https://support.chess.com/en/articles/8572705
//   https://www.chess.com/blog/FunPooler/every-chess-move-icon-explained
//
//   book       DB에 있는 수 (최우선)
//   forced     합법수가 1개뿐
//   blunder    drop > 0.20
//   miss       ① drop 0.05–0.20 + 상대 직전 수가 실수(drop ≥ 0.10) — 응징 실패
//              ② 포스드 메이트를 두지 않았지만 여전히 이기는 중 (missed win)
//   mistake    drop 0.10–0.20
//   inaccuracy drop 0.05–0.10
//   brilliant  rank-1 + 희생수(근사) + 두고 나서도 winrate ≥ 0.45
//   great      rank-1 + 유일하게 살리는 수 (2등 수는 지고, 이 수는 버팀)
//   best       rank-1 (SF 1등 수, drop ≤ 0 동점 포함)
//   excellent  drop ≤ 0.02 (rank-1 아님)
//   good       drop 0.02–0.05
//
// 결정난 포지션 가드 (vietan0/chess-game-review의 cp 티어를 winrate로 이식):
// 크게 이기고 있고 여전히 이기는 중이거나, 어차피 진 포지션이면 최대 inaccuracy.
//
// byrne-fischer-1956 기보를 chess.com game review와 비교해 보정함
// (희생수 조건 강화, great 조건 강화, 동점 best 처리, ucinewgame, depth 18).

const PIECE_VALUE: Record<string, number> = { p: 1, n: 3, b: 3, r: 5, q: 9, k: 0 };

const cleanSan = (s: string) => s.replace(/[+#]/g, '');

// SF-evaluated entries, best-first (usePositionData already sorts them).
function sfEvaluated(entries: ContinuationEntry[]) {
  return entries.filter((e) => e.source === 'stockfish' && e.winrate !== null);
}

// Winrate drop of playedSan vs the best SF move; null if SF eval unavailable.
function computeDrop(entries: ContinuationEntry[], playedSan: string): number | null {
  const played = entries.find((e) => cleanSan(e.san) === cleanSan(playedSan));
  if (!played || played.source !== 'stockfish' || played.winrate === null) return null;
  const sf = sfEvaluated(entries);
  if (sf.length === 0) return null;
  return sf[0].winrate! - played.winrate;
}

// Negative tiers (blunder/miss/mistake/inaccuracy) with decided-position
// guards; returns null when the drop isn't punishable (≤ 0.05).
function classifyDrop(
  bestWr: number,
  playedWr: number,
  opponentDrop: number | null,
): AnnotationType | null {
  const drop = bestWr - playedWr;
  if (drop <= 0.05) return null;
  // still completely winning, or was lost anyway → at most inaccuracy
  if ((bestWr >= 0.92 && playedWr >= 0.81) || bestWr <= 0.10) return 'inaccuracy';
  if (drop > 0.20) return 'blunder';
  if (opponentDrop !== null && opponentDrop >= 0.10) return 'miss';
  return drop > 0.10 ? 'mistake' : 'inaccuracy';
}

// Approximate sacrifice: a minor piece or better moves (without capturing
// equal-or-greater material) to a square where the opponent genuinely wins
// material — a cheaper piece can take it, or it hangs undefended.
function isSacrifice(move: Move, fenAfter: string): boolean {
  const moved = PIECE_VALUE[move.piece] ?? 0;
  const captured = move.captured ? PIECE_VALUE[move.captured] ?? 0 : 0;
  if (moved < 3 || captured >= moved) return false;
  try {
    const after = new Chess(fenAfter);
    const opponent = after.turn();
    const attackers = after.attackers(move.to as Square, opponent);
    if (attackers.length === 0) return false;
    // king counts as expensive: it can only safely take undefended pieces
    const cheapest = Math.min(
      ...attackers.map((sq) => PIECE_VALUE[after.get(sq)?.type ?? 'k'] || 99),
    );
    if (cheapest < moved) return true;
    const mover = opponent === 'w' ? 'b' : 'w';
    return after.attackers(move.to as Square, mover).length === 0;
  } catch {
    return false;
  }
}

function computeAnnotation(
  entries: ContinuationEntry[],
  move: Move,
  fenAfter: string,
  opponentDrop: number | null,
): AnnotationType | null {
  const played = entries.find((e) => cleanSan(e.san) === cleanSan(move.san));
  if (!played || played.winrate === null) return null;
  if (played.source === 'db') return 'book';

  const sf = sfEvaluated(entries);
  if (sf.length === 0) return null;
  const best = sf[0];
  const drop = best.winrate! - played.winrate;

  // Missed win: a forced mate was available, the played move isn't one, but
  // the position is still fine. Throwing the win away entirely falls through
  // to mistake/blunder below.
  if (best.mateIn !== null && played.mateIn === null && played.winrate >= 0.45) return 'miss';

  const negative = classifyDrop(best.winrate!, played.winrate, opponentDrop);
  if (negative) return negative;

  if (drop <= 0 || cleanSan(best.san) === cleanSan(move.san)) {
    if (played.winrate >= 0.45 && isSacrifice(move, fenAfter)) return 'brilliant';
    // great = the only move that holds: alternatives lose, this one doesn't
    const second = sf[1];
    if (
      second?.winrate != null &&
      best.winrate! - second.winrate > 0.15 &&
      played.winrate >= 0.45 &&
      second.winrate < 0.45
    ) {
      return 'great';
    }
    return 'best';
  }

  return drop <= 0.02 ? 'excellent' : 'good';
}

// Same classification, but from a targeted late analysis (annotationEngine)
// instead of the cached MultiPV sweep. No miss detection — the opponent's
// previous drop isn't available on this path.
function annotationFromEval(r: PlayedMoveEval, move: Move, fenAfter: string): AnnotationType {
  const drop = r.bestWinrate - r.playedWinrate;
  if (r.bestMateIn !== null && r.playedMateIn === null && r.playedWinrate >= 0.45) return 'miss';
  const negative = classifyDrop(r.bestWinrate, r.playedWinrate, null);
  if (negative) return negative;
  if (drop <= 0 || cleanSan(r.bestSan) === cleanSan(move.san)) {
    if (r.playedWinrate >= 0.45 && isSacrifice(move, fenAfter)) return 'brilliant';
    if (
      r.secondWinrate !== null &&
      r.bestWinrate - r.secondWinrate > 0.15 &&
      r.playedWinrate >= 0.45 &&
      r.secondWinrate < 0.45
    ) {
      return 'great';
    }
    return 'best';
  }
  return drop <= 0.02 ? 'excellent' : 'good';
}

// Returns intermediate squares on a rank/file/diagonal between two squares (exclusive).
// Returns [] for knights, pawns, or adjacent squares (no intermediate squares).
function computeRay(from: string, to: string): string[] {
  const f1 = from.charCodeAt(0) - 97;
  const r1 = parseInt(from[1]) - 1;
  const f2 = to.charCodeAt(0) - 97;
  const r2 = parseInt(to[1]) - 1;
  const df = Math.sign(f2 - f1);
  const dr = Math.sign(r2 - r1);
  if (df === 0 && dr === 0) return [];
  const isRankOrFile = df === 0 || dr === 0;
  const isDiagonal = Math.abs(f2 - f1) === Math.abs(r2 - r1);
  if (!isRankOrFile && !isDiagonal) return []; // knight or pawn
  const squares: string[] = [];
  let f = f1 + df;
  let r = r1 + dr;
  while (f !== f2 || r !== r2) {
    squares.push(String.fromCharCode(97 + f) + (r + 1));
    f += df;
    r += dr;
  }
  return squares;
}

export default function ChessExplorer() {
  const {
    mounted,
    pgnReady,
    game,
    gameId,
    moveHistory,
    activeFen,
    lastMove,
    isDeviated,
    deviationIndex,
    gameMovesPlayed,
    gameNextMove,
    pgnMoves,
    selectGame,
    selectMove,
    back,
    reset,
  } = useChessModel();

  const [flipped, setFlipped] = useState(false);

  // Delay DB/SF queries until PGN is ready to avoid spurious FEN changes that restart Stockfish.
  const { entries: continuations, loading: posLoading, sfLoading } = usePositionData(activeFen, mounted && pgnReady);

  // Cache completed SF results per FEN so we can annotate the move just played.
  const sfCacheRef = useRef<Map<string, ContinuationEntry[]>>(new Map());
  useEffect(() => {
    if (!posLoading) {
      sfCacheRef.current.set(activeFen, continuations);
      if (sfCacheRef.current.size > 30) {
        sfCacheRef.current.delete(sfCacheRef.current.keys().next().value!);
      }
    }
  }, [sfLoading, posLoading, activeFen, continuations]);

  const moveAnnotation = useMemo<AnnotationType | null>(() => {
    if (!lastMove) return null;
    const n = moveHistory.length;
    const prevFen = moveHistory[n - 2]?.fenAfter ?? START_FEN;

    // Only legal move — no engine needed.
    try {
      if (new Chess(prevFen).moves().length === 1) return 'forced';
    } catch { /* fall through */ }

    const cached = sfCacheRef.current.get(prevFen);
    if (!cached || cached.length === 0) return null;

    // Opponent's previous move drop — needed for miss detection.
    let opponentDrop: number | null = null;
    const oppMove = moveHistory[n - 2];
    if (oppMove) {
      const prevPrevFen = moveHistory[n - 3]?.fenAfter ?? START_FEN;
      const prevCached = sfCacheRef.current.get(prevPrevFen);
      if (prevCached) opponentDrop = computeDrop(prevCached, oppMove.san);
    }

    return computeAnnotation(cached, lastMove, moveHistory[n - 1].fenAfter, opponentDrop);
  }, [lastMove, moveHistory]);

  // Late annotation: when a move was played before the main engine finished
  // the previous position (cache miss → moveAnnotation null), run a targeted
  // analysis of just that move on the dedicated annotation worker and attach
  // the badge when it lands.
  const [lateAnnotation, setLateAnnotation] = useState<{ fen: string; type: AnnotationType } | null>(null);
  useEffect(() => {
    if (moveAnnotation !== null || !lastMove) return;
    const n = moveHistory.length;
    const prevFen = moveHistory[n - 2]?.fenAfter ?? START_FEN;
    const fenAfter = moveHistory[n - 1].fenAfter;
    const targetFen = activeFen;
    const uci = `${lastMove.from}${lastMove.to}${lastMove.promotion ?? ''}`;
    let cancelled = false;
    evaluatePlayedMove(prevFen, uci).then((r) => {
      if (!r || cancelled) return;
      setLateAnnotation({ fen: targetFen, type: annotationFromEval(r, lastMove, fenAfter) });
    });
    return () => { cancelled = true; };
  }, [moveAnnotation, lastMove, moveHistory, activeFen]);

  const boardAnnotation =
    moveAnnotation ?? (lateAnnotation?.fen === activeFen ? lateAnnotation.type : null);

  const opening = useOpening(activeFen);

  const boardChess = useMemo(() => {
    try { return new Chess(activeFen); } catch { return new Chess(); }
  }, [activeFen]);

  const fenParts = activeFen.split(' ');
  const fullMove = parseInt(fenParts[5] ?? '1', 10);
  const turnPrefix = fenParts[1] === 'b' ? `${fullMove}...` : `${fullMove}.`;

  const canBack = moveHistory.length > 0;

  const checkmateInfo = useMemo((): CheckmateInfo | null => {
    if (!boardChess.isCheckmate()) return null;
    const matedColor = boardChess.turn();
    let king = '';
    outer: for (const row of boardChess.board()) {
      for (const cell of row) {
        if (cell?.type === 'k' && cell.color === matedColor) {
          king = cell.square;
          break outer;
        }
      }
    }
    if (!king) return null;
    const attacker = lastMove?.to ?? null;
    const rays = attacker ? computeRay(attacker, king) : [];
    return { king, attackers: attacker ? [attacker] : [], rays };
  }, [boardChess, lastMove]);

  const gameOver = useMemo(() => {
    if (boardChess.isCheckmate()) {
      const winner = boardChess.turn() === 'w' ? 'Black wins' : 'White wins';
      return { type: 'checkmate', title: '# Checkmate', sub: winner };
    }
    if (boardChess.isStalemate()) {
      return { type: 'stalemate', title: '½ Stalemate', sub: 'Draw by stalemate' };
    }
    if (boardChess.isDraw()) {
      return { type: 'draw', title: '½ Draw', sub: null };
    }
    return null;
  }, [boardChess]);

  // ── Eval bar: white win probability, keeps last value while SF recomputes ──
  const [whiteWinrate, setWhiteWinrate] = useState(0.5);
  useEffect(() => {
    if (gameOver) {
      setWhiteWinrate(gameOver.type === 'checkmate' ? (boardChess.turn() === 'w' ? 0 : 1) : 0.5);
      return;
    }
    const sf = sfEvaluated(continuations);
    if (sf.length === 0) return; // SF pending — keep previous value
    const best = sf[0].winrate!;
    setWhiteWinrate(activeFen.split(' ')[1] === 'w' ? best : 1 - best);
  }, [continuations, activeFen, gameOver, boardChess]);

  // ── Click-to-move (selection is pre-commit UI state; confirmed moves go through selectMove → URL) ──
  const [selectedSquare, setSelectedSquare] = useState<string | null>(null);
  const [pendingPromotion, setPendingPromotion] = useState<{ from: string; to: string } | null>(null);

  useEffect(() => {
    setSelectedSquare(null);
    setPendingPromotion(null);
  }, [activeFen]);

  const destinationSquares = useMemo(() => {
    if (!selectedSquare) return [];
    return boardChess
      .moves({ square: selectedSquare as Square, verbose: true })
      .map((m) => m.to as string);
  }, [boardChess, selectedSquare]);

  const playMove = (from: string, to: string, promotion?: string) => {
    try {
      const san = new Chess(activeFen).move({ from, to, promotion }).san;
      selectMove(san);
    } catch {
      /* illegal — ignore */
    }
  };

  const handleSquareClick = (square: string) => {
    if (gameOver) return;
    if (pendingPromotion) {
      setPendingPromotion(null);
      return;
    }
    const piece = boardChess.get(square as Square);
    if (selectedSquare && destinationSquares.includes(square)) {
      const moving = boardChess.get(selectedSquare as Square);
      if (moving?.type === 'p' && (square[1] === '8' || square[1] === '1')) {
        setPendingPromotion({ from: selectedSquare, to: square });
      } else {
        playMove(selectedSquare, square);
      }
      setSelectedSquare(null);
      return;
    }
    setSelectedSquare(piece && piece.color === boardChess.turn() ? square : null);
  };

  const confirmPromotion = (piece: 'q' | 'r' | 'b' | 'n') => {
    if (!pendingPromotion) return;
    playMove(pendingPromotion.from, pendingPromotion.to, piece);
    setPendingPromotion(null);
  };

  const gameMoveDisplay =
    gameId && gameMovesPlayed > 0 && pgnMoves.length > 0
      ? (() => {
          const idx = gameMovesPlayed - 1;
          const num = Math.floor(idx / 2) + 1;
          const dot = idx % 2 === 0 ? '.' : '...';
          return {
            label: `${num}${dot}${moveHistory[idx].san}`,
            idx,
            total: pgnMoves.length,
          };
        })()
      : null;

  const openingDisplay: OpeningInfo | null =
    isDeviated && game
      ? { eco: '→', name: `${game.title} — 자유 탐색중` }
      : opening;

  const ogImage = useBaseUrl('/img/art/chess-og.webp', { absolute: true });

  return (
    <Layout title="Chess Explorer" description="Chess game explorer">
      <Head>
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        {/* Photo: Aatu Dorochenko, CC BY-SA 4.0, via Wikimedia Commons */}
      </Head>
      <div className={styles.page}>
      {mounted && (
        <>
          {openingDisplay ? (
            <div className={styles.openingRow}>
              <OpeningBadge opening={openingDisplay} />
            </div>
          ) : (
            <div className={styles.openingEmpty} />
          )}

          <div className={styles.grid}>
            <aside className={styles.sidebarCol}>
              <div className={styles.panelHeader}>Games</div>
              <GameSidebar games={CHESS_GAMES} activeId={gameId} onSelect={selectGame} />
            </aside>

            <main className={styles.boardCol}>
              <div className={styles.boardWrapper}>
                <EvalBar whiteWinrate={whiteWinrate} flipped={flipped} />
                <div className={styles.boardMain}>
                  <ChessBoard
                    chess={boardChess}
                    lastMove={lastMove}
                    skin="classic"
                    flipped={flipped}
                    checkmateInfo={checkmateInfo}
                    annotation={boardAnnotation}
                    selectedSquare={selectedSquare}
                    destinationSquares={destinationSquares}
                    onSquareClick={handleSquareClick}
                  />
                  {pendingPromotion && (() => {
                    const fileIdx = pendingPromotion.to.charCodeAt(0) - 97;
                    const left = (flipped ? 7 - fileIdx : fileIdx) * 12.5;
                    const fromTop = (pendingPromotion.to[1] === '8') !== flipped;
                    const color = boardChess.turn();
                    return (
                      <div className={styles.promoOverlay} onClick={() => setPendingPromotion(null)}>
                        <div
                          className={styles.promoStrip}
                          style={{ left: `${left}%`, [fromTop ? 'top' : 'bottom']: 0 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          {(['q', 'r', 'b', 'n'] as const).map((p) => (
                            <button key={p} className={styles.promoBtn} onClick={() => confirmPromotion(p)}>
                              <img src={`/chess/pieces/${color}${p.toUpperCase()}.svg`} alt={p} />
                            </button>
                          ))}
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </div>
            </main>

            <section className={styles.moveCol}>
              <div className={styles.controlRow}>
                <button
                  className={styles.controlBtn}
                  onClick={reset}
                  disabled={!canBack}
                  title={isDeviated ? '기보로' : 'Reset'}
                >«</button>
                <button
                  className={styles.controlBtn}
                  onClick={back}
                  disabled={!canBack}
                  title="Back"
                >‹</button>
                <div className={styles.controlSpacer} />
                <button
                  className={styles.controlBtn}
                  onClick={() => setFlipped((f) => !f)}
                  title="Flip board"
                >⇅</button>
              </div>

              {gameMoveDisplay && (
                <div className={styles.currentMoveBadge}>
                  <span className={styles.currentMoveSan}>{gameMoveDisplay.label}</span>
                  <span className={styles.currentMoveNum}>
                    {gameMoveDisplay.idx + 1}/{gameMoveDisplay.total}
                  </span>
                </div>
              )}

              {game && (
                <div className={styles.gameInfo}>
                  <h3>{game.title}</h3>
                  <p>{game.white} vs {game.black} · {game.year}</p>
                  {game.description && <p>{game.description}</p>}
                </div>
              )}

              {gameOver ? (
                <div className={clsx(styles.gameOverBanner, styles[gameOver.type])}>
                  <span className={styles.gameOverTitle}>{gameOver.title}</span>
                  {gameOver.sub && <span className={styles.gameOverSub}>{gameOver.sub}</span>}
                </div>
              ) : (
                <>
                  <div className={styles.panelHeader}>Moves & Win Rate</div>
                  <MoveList
                    key={activeFen}
                    entries={continuations}
                    loading={posLoading}
                    sfLoading={sfLoading}
                    turnPrefix={turnPrefix}
                    gameNextMove={gameNextMove}
                    onMoveSelect={selectMove}
                  />
                </>
              )}
            </section>
          </div>
        </>
      )}
      </div>
    </Layout>
  );
}
