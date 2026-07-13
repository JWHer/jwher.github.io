import { useState, useEffect, useMemo } from 'react';
import { Chess } from 'chess.js';
import type { Move } from 'chess.js';

export interface ParsedMove {
  san: string;
  fenAfter: string;
  move: Move;
}

export interface PgnData {
  moves: ParsedMove[];
  loading: boolean;
  error: string | null;
}

export function usePgn(pgnPath: string | undefined): PgnData {
  const [rawPgn, setRawPgn] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!pgnPath) {
      setRawPgn(null);
      return;
    }
    setLoading(true);
    setError(null);
    fetch(pgnPath)
      .then((r) => {
        if (!r.ok) throw new Error(`Failed to fetch PGN: ${r.status}`);
        return r.text();
      })
      .then((text) => setRawPgn(text))
      .catch((e) => setError(String(e)))
      .finally(() => setLoading(false));
  }, [pgnPath]);

  const moves = useMemo<ParsedMove[]>(() => {
    if (!rawPgn) return [];
    try {
      const game = new Chess();
      game.loadPgn(rawPgn);
      const hist = game.history({ verbose: true }) as Move[];
      const result: ParsedMove[] = [];
      const replay = new Chess();
      for (const m of hist) {
        const move = replay.move(m.san);
        result.push({ san: m.san, fenAfter: replay.fen(), move });
      }
      return result;
    } catch {
      return [];
    }
  }, [rawPgn]);

  return { moves, loading, error };
}