import clsx from 'clsx';
import type { Guess } from '@site/src/hooks/useWordGame';
import styles from './GuessTable.module.scss';

interface Props {
  guesses: Guess[];
  /** Similarity range of the bar: min = 1,000th place, max = 2nd place. */
  barRange: { min: number; max: number } | null;
  /** Word of an already-guessed duplicate to flash; nonce retriggers the animation. */
  highlightWord: string | null;
  highlightNonce: number;
}

function formatSim(sim: number): string {
  return (sim * 100).toFixed(2);
}

function formatRank(rank: number): string {
  if (rank === 0) return '정답!';
  if (rank <= 1000) return `${rank.toLocaleString('ko-KR')}위`;
  return '1000위 이상';
}

function barWidth(guess: Guess, barRange: { min: number; max: number }): number {
  if (guess.rank === 0) return 100;
  const { min, max } = barRange;
  const ratio = (guess.sim - min) / (max - min || 1);
  return Math.max(0, Math.min(1, ratio)) * 100;
}

export default function GuessTable({ guesses, barRange, highlightWord, highlightNonce }: Props) {
  if (guesses.length === 0 || !barRange) return null;

  // Latest guess pinned on top; the rest sorted by similarity descending.
  const latest = guesses[guesses.length - 1];
  const rest = guesses
    .slice(0, -1)
    .sort((a, b) => b.sim - a.sim);

  const renderRow = (guess: Guess, pinned: boolean) => (
    <tr
      key={pinned ? `latest-${guess.n}` : guess.n}
      className={clsx(
        pinned && styles.latest,
        guess.rank === 0 && styles.answer,
        guess.word === highlightWord && styles.flash,
      )}
      data-nonce={guess.word === highlightWord ? highlightNonce : undefined}
    >
      <td className={styles.order}>{guess.n}</td>
      <td className={styles.word}>{guess.word}</td>
      <td className={styles.sim}>{formatSim(guess.sim)}</td>
      <td className={styles.rank}>
        <span className={clsx(styles.rankLabel, guess.rank > 1000 && styles.rankFar)}>
          {formatRank(guess.rank)}
        </span>
        <span className={styles.bar} aria-hidden="true">
          <span className={styles.barFill} style={{ width: `${barWidth(guess, barRange)}%` }} />
        </span>
      </td>
    </tr>
  );

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.order}>#</th>
          <th className={styles.word}>추측한 단어</th>
          <th className={styles.sim}>유사도</th>
          <th className={styles.rank}>유사도 순위</th>
        </tr>
      </thead>
      <tbody>
        {renderRow(latest, true)}
        {rest.map((g) => renderRow(g, false))}
      </tbody>
    </table>
  );
}
