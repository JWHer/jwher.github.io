import { useMemo } from 'react';
import { Chess } from 'chess.js';
import { usePositionStats } from './usePositionStats';
import { useStockfish } from './useStockfish';
import type { ContinuationEntry } from '@site/src/types/chess';

// Combines DB stats and Stockfish evaluation into a sorted ContinuationEntry list.
// DB entries come first (sorted by selection frequency descending).
// SF entries fill remaining slots (sorted by win rate descending).
export function usePositionData(fen: string, enabled: boolean) {
  const posStats = usePositionStats(fen);
  const sfResult = useStockfish(fen, enabled);

  const entries = useMemo<ContinuationEntry[]>(() => {
    const turn = fen.split(' ')[1] ?? 'w';

    const fromDb: ContinuationEntry[] = Object.entries(posStats.moves)
      .map(([san, stats]) => {
        const total = stats.white + stats.draws + stats.black;
        const winrate =
          total > 0 ? (turn === 'w' ? stats.white / total : stats.black / total) : 0;
        return { san, source: 'db' as const, winrate, stats, mateIn: null, _total: total };
      })
      .sort((a, b) => b._total - a._total)
      .map(({ _total: _, ...e }) => e);

    const dbSans = new Set(fromDb.map((e) => e.san));

    const legalMoves = (() => {
      try { return new Chess(fen).moves(); } catch { return [] as string[]; }
    })();

    const sfPending = posStats.loading || sfResult.loading;

    // Sort order (highest priority first):
    //   1. DB 선택순  — fromDb, sorted by game frequency (above)
    //   2. Stockfish 승률순 — fromSf, sorted by win rate
    //   3. Checkmate 빠른순 — within fromSf, mate moves bubble up by distance (mate in 1 > 2 > ...)
    const fromSf: ContinuationEntry[] = legalMoves
      .filter((san) => !dbSans.has(san))
      .map((san) => {
        if (sfPending) {
          return { san, source: 'pending' as const, winrate: null, stats: null, mateIn: null };
        }
        const sfStat = sfResult.moveStats[san];
        const mateIn = sfStat?.mateIn ?? null;
        const winrate = sfStat
          ? (turn === 'w' ? sfStat.white / 1000 : sfStat.black / 1000)
          : null;
        return {
          san,
          source: sfStat ? ('stockfish' as const) : ('pending' as const),
          winrate,
          stats: sfStat ?? null,
          mateIn,
        };
      })
      .sort((a, b) => {
        const aMate = a.mateIn ?? Infinity;
        const bMate = b.mateIn ?? Infinity;
        if (aMate !== bMate) return aMate - bMate;      // faster mate first
        return (b.winrate ?? -1) - (a.winrate ?? -1);   // then by win rate
      });

    return [...fromDb, ...fromSf];
  }, [posStats.moves, posStats.ready, sfResult.moveStats, sfResult.loading, fen]);

  return { entries, loading: posStats.loading };
}
