import { useEffect, useReducer } from 'react';

/**
 * Word-vector data layer for /art/word-questions.
 *
 * Downloads the full vocabulary (words-v1.json) and int8 vectors (vecs-v1.bin)
 * once, caches them in Cache Storage for instant revisits, and computes
 * cosine similarities / ranks entirely client-side. Vectors are per-word
 * scaled int8 — cosine is invariant under that scaling, so no dequantization
 * factors are needed.
 */

const DIMS = 300;
// Internal Cache Storage bucket. Bump this (NOT the public -v1 filenames) when
// words/vecs are regenerated, so revisitors re-download instead of serving a
// stale vector set that no longer matches the freshly-fetched secrets.
const CACHE_NAME = 'wq-v1';
const STALE_CACHES = ['wq-v2', 'wq-v3'];
const WORDS_URL = '/word-questions/words-v1.json';
const VECS_URL = '/word-questions/vecs-v1.bin';
const SECRETS_URL = '/word-questions/secrets-v1.json';

// ── Similarity index (per secret word) ──────────────────────────────────────

export interface SimilarityIndex {
  secretId: number;
  /** Cosine similarity of word `id` to the secret, in [-1, 1]. */
  simOf(id: number): number;
  /** 1-based similarity rank of word `id` (1 = closest, secret itself = 0). */
  rankOf(id: number): number;
  /** Similarity of the word at 1-based `rank` (secret excluded). */
  simAtRank(rank: number): number;
  /** Word ids of the `n` closest words, similarity descending (secret excluded). */
  topNeighborIds(n: number): number[];
}

export interface WordData {
  numWords: number;
  /** Word ids eligible as daily secrets (clean common nouns; see build-word-data.py). */
  secretIds: number[];
  getWord(id: number): string;
  getWordId(word: string): number | undefined;
  computeSimilarities(secretId: number): SimilarityIndex;
}

function buildWordData(words: string[], secretIds: number[], vecs: Int8Array): WordData {
  const n = words.length;
  const wordToId = new Map<string, number>();
  for (let i = 0; i < n; i++) wordToId.set(words[i], i);

  const norms = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    let sq = 0;
    const base = i * DIMS;
    for (let d = 0; d < DIMS; d++) {
      const v = vecs[base + d];
      sq += v * v;
    }
    norms[i] = Math.sqrt(sq) || 1;
  }

  return {
    numWords: n,
    secretIds,
    getWord: (id) => words[id],
    getWordId: (word) => wordToId.get(word),
    computeSimilarities(secretId) {
      const sims = new Float32Array(n);
      const sBase = secretId * DIMS;
      for (let i = 0; i < n; i++) {
        let dot = 0;
        const base = i * DIMS;
        for (let d = 0; d < DIMS; d++) {
          dot += vecs[base + d] * vecs[sBase + d];
        }
        sims[i] = dot / (norms[i] * norms[secretId]);
      }

      // ids sorted by similarity desc, secret excluded
      const sorted = new Uint32Array(n - 1);
      for (let i = 0, j = 0; i < n; i++) {
        if (i !== secretId) sorted[j++] = i;
      }
      sorted.sort((a, b) => sims[b] - sims[a]);

      const ranks = new Int32Array(n);
      for (let r = 0; r < sorted.length; r++) ranks[sorted[r]] = r + 1;

      return {
        secretId,
        simOf: (id) => sims[id],
        rankOf: (id) => ranks[id],
        simAtRank: (rank) => sims[sorted[rank - 1]],
        topNeighborIds: (count) => Array.from(sorted.slice(0, count)),
      };
    },
  };
}

// ── Fetching with Cache Storage + download progress ─────────────────────────

async function cachedFetch(
  url: string,
  onProgress?: (loaded: number, total: number) => void,
): Promise<ArrayBuffer> {
  let cache: Cache | null = null;
  try {
    cache = await caches.open(CACHE_NAME);
    const hit = await cache.match(url);
    if (hit) return await hit.arrayBuffer();
  } catch {
    cache = null; // Cache Storage unavailable — plain fetch below
  }

  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url}: HTTP ${res.status}`);

  let buffer: ArrayBuffer;
  // Content-Length is the COMPRESSED size when the server gzips the response
  // (GitHub Pages does), but the reader yields decoded bytes. So accumulate
  // chunks and size the buffer from the actual decoded length — never
  // preallocate to Content-Length (that overflows under gzip). Content-Length
  // is still a fine progress denominator (may briefly exceed 100%; clamped).
  const total = Number(res.headers.get('Content-Length')) || 0;
  if (onProgress && total > 0 && res.body) {
    const reader = res.body.getReader();
    const chunks: Uint8Array[] = [];
    let loaded = 0;
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      chunks.push(value);
      loaded += value.length;
      onProgress(loaded, total);
    }
    const bytes = new Uint8Array(loaded);
    let offset = 0;
    for (const chunk of chunks) {
      bytes.set(chunk, offset);
      offset += chunk.length;
    }
    buffer = bytes.buffer;
  } else {
    buffer = await res.arrayBuffer();
  }

  if (cache) {
    try {
      await cache.put(url, new Response(buffer.slice(0)));
    } catch {
      // quota exceeded — next visit re-downloads
    }
  }
  return buffer;
}

// ── Module-level singleton load state ───────────────────────────────────────

export type WordDataStatus = 'idle' | 'loading' | 'ready' | 'error';

interface LoadState {
  status: WordDataStatus;
  /** Download progress 0–100 (vector file dominates). */
  progress: number;
  data: WordData | null;
}

let state: LoadState = { status: 'idle', progress: 0, data: null };
const listeners = new Set<() => void>();

function setState(next: Partial<LoadState>): void {
  state = { ...state, ...next };
  listeners.forEach((l) => l());
}

async function startLoad(): Promise<void> {
  setState({ status: 'loading', progress: 0 });
  try {
    // Evict word/vector sets cached by superseded builds (see CACHE_NAME).
    try {
      await Promise.all(STALE_CACHES.map((name) => caches.delete(name)));
    } catch {
      // Cache Storage unavailable
    }
    // The secret pool is curated over time (scripts/secret-words.txt), so it
    // must NOT go through Cache Storage — fetch with revalidation every visit.
    // words/vecs are immutable within a CACHE_NAME generation; regenerating
    // them means bumping CACHE_NAME (public -v1 filenames stay put).
    const [wordsBuf, secretsBuf] = await Promise.all([
      cachedFetch(WORDS_URL),
      fetch(SECRETS_URL, { cache: 'no-cache' }).then((res) => {
        if (!res.ok) throw new Error(`${SECRETS_URL}: HTTP ${res.status}`);
        return res.arrayBuffer();
      }),
    ]);
    const words = JSON.parse(new TextDecoder().decode(wordsBuf)) as string[];
    const secretIds = JSON.parse(new TextDecoder().decode(secretsBuf)) as number[];
    const vecsBuf = await cachedFetch(VECS_URL, (loaded, total) => {
      setState({ progress: Math.min(100, Math.round((loaded / total) * 100)) });
    });
    setState({
      status: 'ready',
      progress: 100,
      data: buildWordData(words, secretIds, new Int8Array(vecsBuf)),
    });
  } catch (e) {
    console.error('[wq] word data load failed:', e);
    setState({ status: 'error' });
  }
}

/** Loads word data once per session (shared across mounts); `active` gates the start. */
export function useWordData(active: boolean): LoadState {
  const [, force] = useReducer((x: number) => x + 1, 0);

  useEffect(() => {
    if (!active) return undefined;
    listeners.add(force);
    if (state.status === 'idle') void startLoad();
    return () => {
      listeners.delete(force);
    };
  }, [active]);

  return state;
}
