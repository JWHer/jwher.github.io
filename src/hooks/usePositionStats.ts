import { useState, useEffect, useRef } from 'react';
import type { MoveStats } from '@site/src/components/Chess/WinRateBar';

// ── Types ──────────────────────────────────────────────────────────────────

export interface PositionStats {
  moves: Record<string, MoveStats>; // keyed by SAN of the next move
  loading: boolean;
  ready: boolean; // true = DB query complete (hit or miss); false = query in flight
}

// ── localStorage cache ─────────────────────────────────────────────────────

const LS_PREFIX = 'chess:pos:';
const LS_MAX_ENTRIES = 2000;

function lsGet(epd: string): Record<string, MoveStats> | null {
  try {
    const raw = localStorage.getItem(LS_PREFIX + epd);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function lsSet(epd: string, data: Record<string, MoveStats>): void {
  try {
    const keys = Object.keys(localStorage).filter((k) => k.startsWith(LS_PREFIX));
    if (keys.length >= LS_MAX_ENTRIES) {
      localStorage.removeItem(keys[0]);
    }
    localStorage.setItem(LS_PREFIX + epd, JSON.stringify(data));
  } catch {
    // quota exceeded
  }
}

// ── sql.js-httpvfs SQLite worker (singleton) ───────────────────────────────

type DbWorker = {
  db: {
    exec(sql: string, params?: (string | number | null)[]): Promise<Array<{ columns: string[]; values: unknown[][] }>>;
  };
};

let dbWorker: DbWorker | null = null;
let dbWorkerState: 'idle' | 'loading' | 'ready' | 'failed' = 'idle';
const dbWorkerWaiters: Array<(w: DbWorker | null) => void> = [];

async function getSqliteWorker(): Promise<DbWorker | null> {
  if (dbWorkerState === 'ready') return dbWorker;
  if (dbWorkerState === 'failed') return null;

  if (dbWorkerState === 'loading') {
    return new Promise((resolve) => {
      dbWorkerWaiters.push(resolve);
    });
  }

  dbWorkerState = 'loading';

  try {
    const { createDbWorker } = await import('sql.js-httpvfs');
    dbWorker = await createDbWorker(
      [{ from: 'inline', config: {
        serverMode: 'full',
        url: '/chess/positions.db',
        requestChunkSize: 4096,
      }}],
      '/wasm/sqlite.worker.js',
      '/wasm/sql-wasm.wasm',
    ) as unknown as DbWorker;
    dbWorkerState = 'ready';
    dbWorkerWaiters.splice(0).forEach((cb) => cb(dbWorker));
    return dbWorker;
  } catch {
    dbWorkerState = 'failed';
    dbWorkerWaiters.splice(0).forEach((cb) => cb(null));
    return null;
  }
}

async function sqliteQuery(epd: string): Promise<Record<string, MoveStats> | null> {
  const worker = await getSqliteWorker();
  if (!worker) return null;

  try {
    const result = await worker.db.exec(
      'SELECT san, white, draws, black FROM position_moves WHERE epd = ?',
      [epd],
    );
    if (!result[0]?.values?.length) return null;

    const moves: Record<string, MoveStats> = {};
    for (const row of result[0].values) {
      const [san, white, draws, black] = row as [string, number, number, number];
      moves[san] = { white, draws, black };
    }
    return moves;
  } catch {
    return null;
  }
}

// ── EPD helper ─────────────────────────────────────────────────────────────

function fenToEpd(fen: string): string {
  return fen.split(' ').slice(0, 4).join(' ');
}

// ── Hook ───────────────────────────────────────────────────────────────────

export function usePositionStats(fen: string): PositionStats {
  const [moves, setMoves] = useState<Record<string, MoveStats>>({});
  const [loading, setLoading] = useState(false);
  const [ready, setReady] = useState(false);
  const activeFen = useRef<string>('');

  useEffect(() => {
    if (!fen || fen === activeFen.current) return;
    activeFen.current = fen;

    let cancelled = false;
    const epd = fenToEpd(fen);

    // Reset ready for this new position
    setReady(false);

    // 1. localStorage cache (instant)
    const cached = lsGet(epd);
    if (cached) {
      setMoves(cached);
      setLoading(false);
      setReady(true);
      return;
    }

    setLoading(true);
    setMoves({});

    (async () => {
      // 2. SQLite (sql.js-httpvfs, lazy loaded)
      try {
        const sqlData = await sqliteQuery(epd);
        if (sqlData && !cancelled) {
          lsSet(epd, sqlData);
          setMoves(sqlData);
          setLoading(false);
          setReady(true);
          return;
        }
      } catch {
        // db unavailable
      }

      // 3. No data found
      if (!cancelled) {
        setMoves({});
        setLoading(false);
        setReady(true);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [fen]);

  return { moves, loading, ready };
}
