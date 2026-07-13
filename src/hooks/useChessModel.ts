import { useState, useEffect, useMemo, useCallback } from 'react';
import { Chess } from 'chess.js';
import { useLocation, useHistory } from '@docusaurus/router';
import { CHESS_GAMES } from '@site/src/data/chess-games';
import { usePgn } from './usePgn';
import type { ParsedMove } from './usePgn';
import type { NavigationParams, MoveHistoryEntry } from '@site/src/types/chess';

const START_FEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

function stripAnnotations(san: string): string {
  return san.replace(/[+#]/g, '');
}

function parseUrl(search: string): NavigationParams {
  const p = new URLSearchParams(search);
  const raw = p.get('game');
  const gameId = !raw || raw === 'free' ? null : raw;
  const moveStr = p.get('move') ?? p.get('moves') ?? '';
  const moveSans = moveStr
    .split(/\s+/)
    .map((t) => stripAnnotations(t.replace(/^\d+\.{1,3}/, '').trim()))
    .filter(Boolean);
  return { gameId, moveSans };
}

function serializeUrl(gameId: string | null, moveSans: string[]): string {
  const p = new URLSearchParams();
  if (gameId) {
    p.set('game', gameId);
  } else if (moveSans.length > 0) {
    p.set('game', 'free');
  }
  if (moveSans.length > 0) {
    if (gameId) {
      const seq = moveSans
        .map((san, i) => `${Math.floor(i / 2) + 1}${i % 2 === 0 ? '.' : '...'}${san}`)
        .join(' ');
      p.set('move', seq);
    } else {
      p.set('move', moveSans.join(' '));
    }
  }
  return p.toString() ? `?${p.toString()}` : '';
}

// Pure function: URL moveSans + PGN → MoveHistoryEntry[].
// No side effects, safe to call in useMemo.
function buildHistory(moveSans: string[], pgnMoves: ParsedMove[]): MoveHistoryEntry[] {
  const result: MoveHistoryEntry[] = [];
  let deviated = false;

  for (let i = 0; i < moveSans.length; i++) {
    const san = moveSans[i];

    if (!deviated && i < pgnMoves.length) {
      if (stripAnnotations(pgnMoves[i].san) === san) {
        result.push({ ...pgnMoves[i], fromGame: true });
        continue;
      }
    }

    deviated = true;
    const currentFen = result.at(-1)?.fenAfter ?? START_FEN;
    try {
      const c = new Chess(currentFen);
      const m = c.move(san);
      result.push({ san: m.san, fenAfter: c.fen(), move: m, fromGame: false });
    } catch {
      break;
    }
  }

  return result;
}

export function useChessModel() {
  const location = useLocation();
  const routerHistory = useHistory();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // URL is the single source of truth for navigation.
  // navParams is derived from URL, never stored in useState.
  const navParams = useMemo(() => parseUrl(location.search), [location.search]);

  const game = CHESS_GAMES.find((g) => g.id === navParams.gameId) ?? null;
  const pgn = usePgn(game?.pgnPath);

  // PGN is "ready" when no game is selected (free mode), or game PGN has loaded.
  // usePgn initializes loading=false before the fetch useEffect fires, so we guard
  // on moves.length instead of loading to prevent a flash of wrong state on first render.
  const pgnReady = !navParams.gameId || pgn.moves.length > 0;

  // Derive move history from URL + PGN. No restoration effects, no race conditions.
  const moveHistory = useMemo<MoveHistoryEntry[]>(
    () => {
      if (!pgnReady) return [];
      return buildHistory(navParams.moveSans, pgn.moves);
    },
    [pgnReady, navParams, pgn.moves],
  );

  const activeFen = moveHistory.at(-1)?.fenAfter ?? START_FEN;
  const lastMove = moveHistory.at(-1)?.move ?? null;
  const deviationIndex = moveHistory.findIndex((h) => !h.fromGame);
  const isDeviated = deviationIndex !== -1;
  const gameMovesPlayed = isDeviated ? deviationIndex : moveHistory.length;
  const gameNextMove =
    !isDeviated && game ? (pgn.moves[gameMovesPlayed]?.san ?? null) : null;

  const replace = useCallback(
    (gId: string | null, sans: string[]) => {
      routerHistory.replace({ search: serializeUrl(gId, sans) });
    },
    [routerHistory],
  );

  return {
    mounted,
    pgnReady,
    game,
    gameId: navParams.gameId,
    moveHistory,
    activeFen,
    lastMove,
    isDeviated,
    deviationIndex,
    gameMovesPlayed,
    gameNextMove,
    pgnMoves: pgn.moves,
    pgnLoading: pgn.loading,
    selectGame:  (id: string | null) => replace(id, []),
    selectMove:  (san: string)       => replace(navParams.gameId, [...navParams.moveSans, stripAnnotations(san)]),
    back:        ()                   => replace(navParams.gameId, navParams.moveSans.slice(0, -1)),
    reset:       ()                   => replace(
                                           navParams.gameId,
                                           isDeviated ? navParams.moveSans.slice(0, deviationIndex) : [],
                                         ),
  };
}
