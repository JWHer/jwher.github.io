import { Chess } from 'chess.js';

// Dedicated Stockfish worker for late move-annotation analysis.
// Separate from the useStockfish singleton so a targeted search on the
// previous position can run while the main engine analyzes the new one.
//
// Instead of the main engine's MultiPV-30 sweep, this runs two narrow
// searches (MultiPV 2 for best/second, then `searchmoves` for the played
// move only), which is fast enough to afford a deeper depth.

// depth 18: catches 18.Bxb6 as blunder (0.7s fresh-hash); depth 20+ takes
// 15s+ on complex positions — too slow for a board badge.
const DEPTH = 18;

type SfState = 'idle' | 'loading' | 'ready' | 'failed';

let worker: Worker | null = null;
let state: SfState = 'idle';
const readyWaiters: Array<(w: Worker | null) => void> = [];

function initWorker(): void {
  if (state !== 'idle') return;
  state = 'loading';
  try {
    worker = new Worker('/chess/engine/stockfish-18-lite-single.js');
  } catch {
    state = 'failed';
    readyWaiters.splice(0).forEach((cb) => cb(null));
    return;
  }
  let uciokSeen = false;
  const onInit = (e: MessageEvent) => {
    const line = typeof e.data === 'string' ? e.data : String(e.data);
    if (line === 'uciok' && !uciokSeen) {
      uciokSeen = true;
      worker!.postMessage('isready');
    } else if (line === 'readyok') {
      worker!.removeEventListener('message', onInit);
      state = 'ready';
      readyWaiters.splice(0).forEach((cb) => cb(worker));
    }
  };
  worker.addEventListener('message', onInit);
  worker.postMessage('uci');
}

function getWorker(): Promise<Worker | null> {
  if (state === 'ready' && worker) return Promise.resolve(worker);
  if (state === 'failed') return Promise.resolve(null);
  if (state === 'idle') initWorker();
  return new Promise((resolve) => readyWaiters.push(resolve));
}

// If the engine wedges and never answers, resolve empty instead of hanging
// the job chain forever — the badge is simply skipped.
const REPLY_TIMEOUT_MS = 20000;

// Clear the hash table before each job — leftover entries from earlier
// searches otherwise poison shallow re-searches (verified: 11.Bg5 in
// byrne-fischer-1956 evaluates as excellent with a warm hash, mistake fresh).
function newGame(w: Worker): Promise<void> {
  return new Promise((resolve) => {
    const onMessage = (e: MessageEvent) => {
      const line = typeof e.data === 'string' ? e.data : String(e.data);
      if (line === 'readyok') {
        clearTimeout(timer);
        w.removeEventListener('message', onMessage);
        resolve();
      }
    };
    const timer = setTimeout(() => {
      w.removeEventListener('message', onMessage);
      resolve();
    }, REPLY_TIMEOUT_MS);
    w.addEventListener('message', onMessage);
    w.postMessage('ucinewgame');
    w.postMessage('isready');
  });
}

// cp (side-to-move perspective) → mover win probability, same curve as useStockfish.
function cpToWinrate(cp: number): number {
  const clamped = Math.max(-1000, Math.min(1000, cp));
  return 1 / (1 + Math.exp(-0.00368208 * clamped));
}

interface PvScore {
  uci: string;
  cp: number;
  mateIn: number | null; // moves to mate when this line forces mate for the mover
}

// Runs one `go depth` search and resolves with the final cp per multipv rank.
function search(w: Worker, fen: string, multiPV: number, searchMoves?: string): Promise<PvScore[]> {
  return new Promise((resolve) => {
    const byRank = new Map<number, PvScore>();
    const onMessage = (e: MessageEvent) => {
      const line = typeof e.data === 'string' ? e.data : String(e.data);
      if (line.includes(' multipv ') && line.includes(' score ') && line.includes(' pv ')) {
        const rankMatch = line.match(/ multipv (\d+)/);
        const pvMatch = line.match(/ pv ([a-h][1-8][a-h][1-8][qrbnQRBN]?)/);
        if (rankMatch && pvMatch) {
          const cpMatch = line.match(/score cp (-?\d+)/);
          const mateMatch = line.match(/score mate (-?\d+)/);
          let cp: number | null = null;
          let mateIn: number | null = null;
          if (cpMatch) {
            cp = parseInt(cpMatch[1], 10);
          } else if (mateMatch) {
            const mate = parseInt(mateMatch[1], 10);
            cp = mate > 0 ? 10000 - mate : -10000 - mate;
            mateIn = mate > 0 ? mate : null;
          }
          if (cp !== null) byRank.set(parseInt(rankMatch[1], 10), { uci: pvMatch[1], cp, mateIn });
        }
      }
      if (line.startsWith('bestmove')) {
        clearTimeout(timer);
        w.removeEventListener('message', onMessage);
        resolve(
          Array.from(byRank.entries())
            .sort((a, b) => a[0] - b[0])
            .map(([, v]) => v),
        );
      }
    };
    const timer = setTimeout(() => {
      w.removeEventListener('message', onMessage);
      resolve([]);
    }, REPLY_TIMEOUT_MS);
    w.addEventListener('message', onMessage);
    w.postMessage(`setoption name MultiPV value ${multiPV}`);
    w.postMessage(`position fen ${fen}`);
    w.postMessage(`go depth ${DEPTH}${searchMoves ? ` searchmoves ${searchMoves}` : ''}`);
  });
}

export interface PlayedMoveEval {
  bestSan: string;
  bestWinrate: number;
  secondWinrate: number | null;
  playedWinrate: number;
  bestMateIn: number | null;
  playedMateIn: number | null;
}

// Serialize jobs; when moves come in faster than analysis, stale queued jobs
// are skipped (only the newest request runs).
let jobGen = 0;
let chain: Promise<unknown> = Promise.resolve();

export function evaluatePlayedMove(fen: string, playedUci: string): Promise<PlayedMoveEval | null> {
  const myGen = ++jobGen;
  const job = chain.then(async (): Promise<PlayedMoveEval | null> => {
    if (myGen !== jobGen) return null; // superseded while queued
    const w = await getWorker();
    if (!w) return null;

    const legalCount = (() => {
      try { return new Chess(fen).moves().length; } catch { return 0; }
    })();
    if (legalCount <= 1) return null;

    await newGame(w);
    const top = await search(w, fen, 2);
    if (top.length === 0) return null;

    const bestSan = (() => {
      try {
        return new Chess(fen).move({
          from: top[0].uci.slice(0, 2),
          to: top[0].uci.slice(2, 4),
          promotion: top[0].uci[4] || undefined,
        }).san;
      } catch {
        return null;
      }
    })();
    if (!bestSan) return null;

    let playedScore: PvScore;
    if (top[0].uci === playedUci) {
      playedScore = top[0];
    } else if (top[1]?.uci === playedUci) {
      playedScore = top[1];
    } else {
      const played = await search(w, fen, 1, playedUci);
      if (played.length === 0) return null;
      playedScore = played[0];
    }

    return {
      bestSan,
      bestWinrate: cpToWinrate(top[0].cp),
      secondWinrate: top[1] ? cpToWinrate(top[1].cp) : null,
      playedWinrate: cpToWinrate(playedScore.cp),
      bestMateIn: top[0].mateIn,
      playedMateIn: playedScore.mateIn,
    };
  });
  chain = job.catch(() => null);
  return job;
}
