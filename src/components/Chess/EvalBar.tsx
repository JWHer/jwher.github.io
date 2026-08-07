import styles from './EvalBar.module.scss';

interface Props {
  whiteWinrate: number; // 0–1
  flipped?: boolean;
}

// Vertical win-probability bar (lichess-style): white area grows from
// white's side of the board (bottom, or top when flipped).
export default function EvalBar({ whiteWinrate, flipped = false }: Props) {
  const pct = Math.max(0, Math.min(100, whiteWinrate * 100));
  return (
    <div
      className={styles.bar}
      role="meter"
      aria-label="White win probability"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pct)}
    >
      <div
        className={styles.white}
        style={{ height: `${pct}%`, [flipped ? 'top' : 'bottom']: 0 }}
      />
    </div>
  );
}
