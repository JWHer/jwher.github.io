import { useState, useEffect } from 'react';
import { Chess } from 'chess.js';
import type { MoveStats } from '@site/src/components/Chess/WinRateBar';

// ── Singleton worker ──────────────────────────────────────────────────────

type SfState = 'idle' | 'loading' | 'ready' | 'failed';

let sfWorker: Worker | null = null;
let sfState: SfState = 'idle';
const sfReadyWaiters: Array<(ok: boolean) => void> = [];

let analysisGeneration = 0;

// Each 'stop' causes exactly one 'bestmove' from the engine.
// Commands for the next analysis must be deferred until the engine confirms
// idle via that bestmove — sending setoption/position/go while a stop is in
// flight causes a WASM unreachable trap inside Stockfish-18-lite.
let pendingStops = 0;

function initWorker(): void {
  if (sfState !== 'idle') return;
  sfState = 'loading';

  try {
    sfWorker = new Worker('/chess/engine/stockfish-18-lite-single.js');
  } catch {
    sfState = 'failed';
    sfReadyWaiters.splice(0).forEach((cb) => cb(false));
    return;
  }

  let uciokSeen = false;
  const onInit = (e: MessageEvent) => {
    const line = typeof e.data === 'string' ? e.data : String(e.data);
    if (line === 'uciok' && !uciokSeen) {
      uciokSeen = true;
      sfWorker!.postMessage('isready');
    } else if (line === 'readyok') {
      sfWorker!.removeEventListener('message', onInit);
      sfState = 'ready';
      sfReadyWaiters.splice(0).forEach((cb) => cb(true));
    }
  };

  sfWorker.addEventListener('message', onInit);
  sfWorker.postMessage('uci');
}

function getReadyWorker(): Promise<Worker | null> {
  if (sfState === 'ready' && sfWorker) return Promise.resolve(sfWorker);
  if (sfState === 'failed') return Promise.resolve(null);
  if (sfState === 'idle') initWorker();
  return new Promise((resolve) => {
    sfReadyWaiters.push((ok) => resolve(ok ? sfWorker : null));
  });
}

// ── Centipawn → MoveStats ─────────────────────────────────────────────────

function cpToStats(cp: number): MoveStats {
  const clamped = Math.max(-1000, Math.min(1000, cp));
  const winP = 1 / (1 + Math.exp(-0.00368208 * clamped));
  const lossP = 1 - winP;
  const drawP = Math.max(0, Math.min(winP, lossP) * 0.6);
  const scale = 1000;
  return {
    white: Math.round(winP * scale),
    draws: Math.round(drawP * scale),
    black: Math.round(lossP * scale),
  };
}

// ── Hook ─────────────────────────────────────────────────────────────────

export interface StockfishResult {
  moveStats: Record<string, MoveStats>;
  loading: boolean;
}

export function useStockfish(fen: string, enabled: boolean): StockfishResult {
  const [moveStats, setMoveStats] = useState<Record<string, MoveStats>>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const myGen = ++analysisGeneration;

    if (!enabled) {
      setMoveStats({});
      setLoading(false);
      return;
    }

    setLoading(true);
    setMoveStats({});

    const isBlackTurn = fen.split(' ')[1] === 'b';
    let listenerCleanup: (() => void) | null = null;
    let goSent = false;

    getReadyWorker().then((worker) => {
      if (myGen !== analysisGeneration || !worker) {
        if (myGen === analysisGeneration) setLoading(false);
        return;
      }

      const legalMoves = new Chess(fen).moves();
      // Positions with 0 or 1 legal moves are terminal/forced — skip analysis.
      if (legalMoves.length <= 1) {
        setLoading(false);
        return;
      }
      // MultiPV must be strictly less than legal move count to avoid a WASM
      // bounds-check failure inside Stockfish-18-lite.
      const multiPV = Math.max(1, Math.min(legalMoves.length - 1, 30));

      type PerMoveResult = { cp: number; mateIn: number | null };
      const perMoveResults = new Map<string, PerMoveResult>();

      const onMessage = (e: MessageEvent) => {
        if (myGen !== analysisGeneration) {
          worker.removeEventListener('message', onMessage);
          listenerCleanup = null;
          return;
        }

        const line = typeof e.data === 'string' ? e.data : String(e.data);

        if (line.includes(' multipv ') && line.includes(' score ') && line.includes(' pv ')) {
          const pvMatch = line.match(/ pv ([a-h][1-8][a-h][1-8][qrbnQRBN]?)/);
          if (pvMatch) {
            const cpMatch = line.match(/score cp (-?\d+)/);
            const mateMatch = line.match(/score mate (-?\d+)/);
            if (cpMatch) {
              perMoveResults.set(pvMatch[1], { cp: parseInt(cpMatch[1], 10), mateIn: null });
            } else if (mateMatch) {
              const mate = parseInt(mateMatch[1], 10);
              // cp: winning mates ranked above any non-mate; faster mate = higher cp
              const cp = mate > 0 ? (10000 - mate) : (-10000 - mate);
              perMoveResults.set(pvMatch[1], { cp, mateIn: mate > 0 ? mate : null });
            }
          }
        }

        if (line.startsWith('bestmove')) {
          worker.removeEventListener('message', onMessage);
          listenerCleanup = null;
          goSent = false;

          if (myGen !== analysisGeneration) return;

          const chess = new Chess(fen);
          const result: Record<string, MoveStats> = {};
          for (const [uci, { cp: cpSideToMove, mateIn }] of Array.from(perMoveResults.entries())) {
            try {
              const m = chess.move({
                from: uci.slice(0, 2),
                to: uci.slice(2, 4),
                promotion: uci[4] || undefined,
              });
              if (m) {
                const cpWhite = isBlackTurn ? -cpSideToMove : cpSideToMove;
                result[m.san] = { ...cpToStats(cpWhite), mateIn };
                chess.undo();
              }
            } catch { /* ignore illegal */ }
          }
          setMoveStats(result);
          setLoading(false);
        }
      };

      // Send analysis commands when the engine is confirmed idle.
      // Called either immediately (if no stop is pending) or after all pending
      // stops are acknowledged by bestmove responses.
      const startAnalysis = () => {
        if (myGen !== analysisGeneration) return;
        goSent = true;
        listenerCleanup = () => worker.removeEventListener('message', onMessage);
        worker.addEventListener('message', onMessage);
        // setoption and position+go are sent when the engine is idle, so the
        // ordering is guaranteed safe — no ucinewgame needed.
        worker.postMessage(`setoption name MultiPV value ${multiPV}`);
        worker.postMessage(`position fen ${fen}`);
        worker.postMessage(`go depth 14`);
      };

      if (pendingStops === 0) {
        startAnalysis();
      } else {
        // Defer: wait for bestmove(s) confirming all stops were processed,
        // then start. This prevents setoption/go from racing with a stop
        // that is still in flight inside the engine.
        const onWaitStop = (e: MessageEvent) => {
          const line = typeof e.data === 'string' ? e.data : String(e.data);
          if (!line.startsWith('bestmove')) return;
          if (pendingStops > 0) pendingStops--;
          if (pendingStops === 0) {
            worker.removeEventListener('message', onWaitStop);
            listenerCleanup = null;
            startAnalysis();
          }
        };
        listenerCleanup = () => worker.removeEventListener('message', onWaitStop);
        worker.addEventListener('message', onWaitStop);
      }
    });

    return () => {
      if (sfState === 'ready' && sfWorker && goSent) {
        sfWorker.postMessage('stop');
        pendingStops++;
      }
      listenerCleanup?.();
      listenerCleanup = null;
    };
  }, [fen, enabled]);

  return { moveStats, loading };
}