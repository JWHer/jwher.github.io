/**
 * Daily secret-word selection for /art/word-questions.
 *
 * The secret index is a pure function of the KST calendar date, so every
 * visitor gets the same word on the same day (idempotent), while the hash
 * makes tomorrow's word non-obvious from today's index.
 */

const SALT = 'word-questions-v1';

/** Current calendar date in Asia/Seoul as 'YYYY-MM-DD'. */
export function seoulDateString(now: Date = new Date()): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Seoul' }).format(now);
}

/** FNV-1a 32-bit hash of the date string (+salt), reduced to [0, numWords). */
export function dailySecretIdx(dateStr: string, numWords: number): number {
  const s = `${dateStr}:${SALT}`;
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return (h >>> 0) % numWords;
}
