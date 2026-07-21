import { useState, useEffect, useMemo, useCallback } from 'react';
import { useLocation } from '@docusaurus/router';
import { useWordData } from './useWordData';
import type { SimilarityIndex, WordData } from './useWordData';
import { seoulDateString, dailySecretIdx } from '@site/src/utils/dailyWord';

/**
 * Game state for /art/word-questions.
 *
 * The daily game draws its secret from the curated noun pool (secretIds);
 * `?word={id}` starts a custom game whose secret is the word with that
 * full-vocabulary id. Progress persists in localStorage — daily and custom
 * games under separate keys — and the game locks after solving or giving up.
 */

export interface Guess {
  n: number; // 1-based guess order
  word: string;
  sim: number; // cosine in [-1, 1]; the answer row uses 1
  rank: number; // 1-based similarity rank; 0 = the answer itself
}

export type GuessOutcome =
  | { type: 'correct' }
  | { type: 'ok' }
  | { type: 'duplicate'; index: number } // index into guesses[]
  | { type: 'unknown' }
  | { type: 'empty' };

interface StoredGame {
  date?: string; // daily games only
  secretId: number;
  guessWords: string[];
  solved: boolean;
  gaveUp: boolean;
  startedAt?: number; // epoch ms of the first guess
  solvedAt?: number; // epoch ms of the correct guess
}

function lsGet(key: string): StoredGame | null {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as StoredGame) : null;
  } catch {
    return null;
  }
}

function lsSet(key: string, value: StoredGame): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // localStorage unavailable — game degrades to non-persistent
  }
}

function makeGuess(n: number, word: string, id: number, secretId: number, sims: SimilarityIndex): Guess {
  const isAnswer = id === secretId;
  return {
    n,
    word,
    sim: isAnswer ? 1 : sims.simOf(id),
    rank: isAnswer ? 0 : sims.rankOf(id),
  };
}

export function useWordGame(active: boolean) {
  const location = useLocation();
  const { status: dataStatus, progress, data } = useWordData(active);

  // Date is fixed at mount; rollover is detected and surfaced via `stale`.
  const [dateStr] = useState(() => seoulDateString());
  const [stale, setStale] = useState(false);
  const [guesses, setGuesses] = useState<Guess[]>([]);
  const [solved, setSolved] = useState(false);
  const [gaveUp, setGaveUp] = useState(false);
  const [startedAt, setStartedAt] = useState<number | null>(null);
  const [solvedAt, setSolvedAt] = useState<number | null>(null);

  const customParam = useMemo(() => {
    return new URLSearchParams(location.search).get('word');
  }, [location.search]);

  const game = useMemo(() => {
    if (!data) return null;
    if (customParam !== null) {
      const v = Number(customParam);
      if (Number.isInteger(v) && v >= 0 && v < data.numWords) {
        return { secretId: v, isCustom: true, invalidCustom: false };
      }
    }
    const poolIdx = dailySecretIdx(dateStr, data.secretIds.length);
    return {
      secretId: data.secretIds[poolIdx],
      isCustom: false,
      invalidCustom: customParam !== null,
    };
  }, [data, customParam, dateStr]);

  // ~80ms one-time scan over all 90k vectors; recomputed only when the secret changes.
  const sims = useMemo(
    () => (data && game ? data.computeSimilarities(game.secretId) : null),
    [data, game],
  );

  // Nearest words to the answer for the reveal graph. Inflected/derived forms
  // that share a stem (with the center or each other) are dropped so the graph
  // shows distinct related words. Cheap + memoized; only rendered once solved.
  const graphNeighbors = useMemo(() => {
    if (!data || !game || !sims) return [];
    const center = data.getWord(game.secretId);
    const out: { word: string; sim: number }[] = [];
    for (const id of sims.topNeighborIds(200)) {
      const w = data.getWord(id);
      if (center.includes(w) || w.includes(center)) continue;
      if (out.some((o) => o.word.includes(w) || w.includes(o.word))) continue;
      out.push({ word: w, sim: sims.simOf(id) });
      if (out.length === 22) break;
    }
    return out;
  }, [data, game, sims]);

  const storageKey = game
    ? game.isCustom
      ? `wq:v1:custom:${game.secretId}`
      : 'wq:v1:daily'
    : null;

  // Reset + restore whenever the secret (i.e. storageKey) becomes available or changes.
  useEffect(() => {
    if (!data || !game || !sims || !storageKey) return;
    setGuesses([]);
    setSolved(false);
    setGaveUp(false);
    setStale(false);
    setStartedAt(null);
    setSolvedAt(null);

    const stored = lsGet(storageKey);
    if (!stored || stored.secretId !== game.secretId) return;
    if (!game.isCustom && stored.date !== dateStr) return;

    const restored: Guess[] = [];
    for (const w of stored.guessWords) {
      const id = data.getWordId(w);
      if (id === undefined) continue; // vocabulary changed since save
      restored.push(makeGuess(restored.length + 1, w, id, game.secretId, sims));
    }
    setGuesses(restored);
    setSolved(stored.solved);
    setGaveUp(stored.gaveUp);
    setStartedAt(stored.startedAt ?? null);
    setSolvedAt(stored.solvedAt ?? null);
  }, [data, game, sims, storageKey, dateStr]);

  const persist = useCallback(
    (next: {
      guesses: Guess[];
      solved: boolean;
      gaveUp: boolean;
      startedAt: number | null;
      solvedAt: number | null;
    }) => {
      if (!game || !storageKey) return;
      lsSet(storageKey, {
        ...(game.isCustom ? {} : { date: dateStr }),
        secretId: game.secretId,
        guessWords: next.guesses.map((g) => g.word),
        solved: next.solved,
        gaveUp: next.gaveUp,
        ...(next.startedAt !== null ? { startedAt: next.startedAt } : {}),
        ...(next.solvedAt !== null ? { solvedAt: next.solvedAt } : {}),
      });
    },
    [game, storageKey, dateStr],
  );

  // Detect KST date rollover while the page stays open (daily games only).
  const isDaily = game !== null && !game.isCustom;
  useEffect(() => {
    if (!isDaily) return undefined;
    const check = () => {
      if (seoulDateString() !== dateStr) setStale(true);
    };
    window.addEventListener('focus', check);
    document.addEventListener('visibilitychange', check);
    return () => {
      window.removeEventListener('focus', check);
      document.removeEventListener('visibilitychange', check);
    };
  }, [isDaily, dateStr]);

  const locked = solved || gaveUp || stale;

  const submitGuess = useCallback(
    (raw: string): GuessOutcome => {
      if (!data || !game || !sims || locked) return { type: 'empty' };
      if (!game.isCustom && seoulDateString() !== dateStr) {
        setStale(true);
        return { type: 'empty' };
      }
      const word = raw.trim().normalize('NFC');
      if (!word) return { type: 'empty' };

      const dupIndex = guesses.findIndex((g) => g.word === word);
      if (dupIndex !== -1) return { type: 'duplicate', index: dupIndex };

      const id = data.getWordId(word);
      if (id === undefined) return { type: 'unknown' };

      const now = Date.now();
      const guess = makeGuess(guesses.length + 1, word, id, game.secretId, sims);
      const next = [...guesses, guess];
      const correct = guess.rank === 0;
      const nextStartedAt = startedAt ?? now; // first guess starts the clock
      const nextSolvedAt = correct ? now : solvedAt;
      setGuesses(next);
      if (startedAt === null) setStartedAt(nextStartedAt);
      if (correct) {
        setSolved(true);
        setSolvedAt(now);
      }
      persist({
        guesses: next,
        solved: correct || solved,
        gaveUp,
        startedAt: nextStartedAt,
        solvedAt: nextSolvedAt,
      });
      return correct ? { type: 'correct' } : { type: 'ok' };
    },
    [data, game, sims, locked, dateStr, guesses, solved, gaveUp, startedAt, solvedAt, persist],
  );

  const giveUp = useCallback(() => {
    if (locked) return;
    setGaveUp(true);
    persist({ guesses, solved, gaveUp: true, startedAt, solvedAt });
  }, [locked, guesses, solved, startedAt, solvedAt, persist]);

  /** Full-vocab id of a random secret-pool word, for the "다른 문제 풀기" link. */
  const randomGameId = useCallback(() => {
    if (!data) return null;
    const pool = data.secretIds;
    let id = pool[Math.floor(Math.random() * pool.length)];
    if (game && id === game.secretId) {
      id = pool[(pool.indexOf(id) + 1) % pool.length];
    }
    return id;
  }, [data, game]);

  return {
    status: (dataStatus === 'ready' && sims ? 'ready' : dataStatus) as
      | 'idle'
      | 'loading'
      | 'ready'
      | 'error',
    progress,
    dateStr,
    isCustom: game?.isCustom ?? false,
    invalidCustom: game?.invalidCustom ?? false,
    secretId: game?.secretId ?? null,
    hint: sims
      ? { sim1: sims.simAtRank(1), sim10: sims.simAtRank(10), sim1000: sims.simAtRank(1000) }
      : null,
    barRange: sims ? { min: sims.simAtRank(1000), max: sims.simAtRank(2) } : null,
    guesses,
    solved,
    gaveUp,
    stale,
    locked,
    // Wall-clock time from first guess to solve; null unless solved with both stamps.
    elapsedMs:
      solved && startedAt !== null && solvedAt !== null ? solvedAt - startedAt : null,
    answer: solved || gaveUp ? (data && game ? data.getWord(game.secretId) : null) : null,
    graphNeighbors,
    submitGuess,
    giveUp,
    randomGameId,
  };
}

export type WordGame = ReturnType<typeof useWordGame>;
export type { WordData };
