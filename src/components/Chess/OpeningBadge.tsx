import styles from './OpeningBadge.module.scss';

export interface OpeningInfo {
  eco: string;
  name: string;
  nameKo?: string;
}

interface OpeningBadgeProps {
  opening: OpeningInfo | null;
}

export default function OpeningBadge({ opening }: OpeningBadgeProps) {
  if (!opening) return null;

  return (
    <div className={styles.badge}>
      <span className={styles.eco}>{opening.eco}</span>
      <span className={styles.name}>{opening.name}</span>
      {opening.nameKo && <span className={styles.ko}>({opening.nameKo})</span>}
    </div>
  );
}
