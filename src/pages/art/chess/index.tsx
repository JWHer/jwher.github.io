import { useState, useMemo } from 'react';
import { Chess } from 'chess.js';
import Layout from '@theme/Layout';
import { useChessModel } from '@site/src/hooks/useChessModel';
import { usePositionData } from '@site/src/hooks/usePositionData';
import { useOpening } from '@site/src/hooks/useOpening';
import ChessBoard from '@site/src/components/Chess/ChessBoard';
import MoveList from '@site/src/components/Chess/MoveList';
import GameSidebar from '@site/src/components/Chess/GameSidebar';
import OpeningBadge from '@site/src/components/Chess/OpeningBadge';
import type { OpeningInfo } from '@site/src/components/Chess/OpeningBadge';
import { CHESS_GAMES } from '@site/src/data/chess-games';
import clsx from 'clsx';
import type { CheckmateInfo } from '@site/src/components/Chess/BoardSkin';
import styles from './chess.module.scss';

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
  const { entries: continuations, loading: posLoading } = usePositionData(activeFen, mounted && pgnReady);
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

  return (
    <Layout title="Chess Explorer" description="Chess game explorer">
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
                <ChessBoard
                  chess={boardChess}
                  lastMove={lastMove}
                  skin="classic"
                  flipped={flipped}
                  checkmateInfo={checkmateInfo}
                />
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
                >↻</button>
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
