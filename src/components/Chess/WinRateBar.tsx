import clsx from 'clsx';
import styles from './WinRateBar.module.scss';

export interface MoveStats {
  white: number;
  draws: number;
  black: number;
  mateIn?: number | null; // positive = current player has forced mate in N moves
}

interface WinRateBarProps {
  stats: MoveStats | null;
  loading?: boolean;    // shimmer — Stockfish calculating
  aiEstimate?: boolean; // rainbow border — Stockfish result (approximate)
}

export default function WinRateBar({ stats, loading, aiEstimate }: WinRateBarProps) {
  if (loading) {
    return (
      <span className={styles.container} title="AI 분석 중...">
        <span className={styles.bar}>
          <span className={styles.rainbow} />
        </span>
      </span>
    );
  }

  if (!stats) return null;

  if (stats.mateIn != null && stats.mateIn > 0) {
    return (
      <span className={styles.container}>
        <span className={styles.mateBadge}>#{stats.mateIn === 1 ? 'M' : `M${stats.mateIn}`}</span>
      </span>
    );
  }

  const total = stats.white + stats.draws + stats.black;
  if (total === 0) return null;

  const wPct = Math.round((stats.white / total) * 100);
  const dPct = Math.round((stats.draws / total) * 100);
  const bPct = 100 - wPct - dPct;
  const count = total >= 1000 ? `${(total / 1000).toFixed(1)}k` : `${total}`;

  const title = `White ${wPct}% · Draw ${dPct}% · Black ${bPct}%${aiEstimate ? ' (AI estimate)' : ''}`;

  return (
    <span className={styles.container} title={title}>
      <span className={clsx(styles.barInner, aiEstimate && styles.rainbowBorder)}>
        <span className={styles.bar}>
          <span className={styles.white} style={{ width: `${wPct}%` }}>
            <span className={styles.pct}>{wPct}%</span>
          </span>
          <span className={styles.draw} style={{ width: `${dPct}%` }}>
            <span className={styles.pct}>{dPct}%</span>
          </span>
          <span className={styles.black} style={{ width: `${bPct}%` }}>
            <span className={styles.pct}>{bPct}%</span>
          </span>
        </span>
      </span>
      <span className={styles.count} style={aiEstimate ? { visibility: 'hidden' } : undefined}>{count}</span>
    </span>
  );
}
