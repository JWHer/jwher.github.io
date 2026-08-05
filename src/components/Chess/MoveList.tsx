import { useState } from 'react';
import clsx from 'clsx';
import WinRateBar from './WinRateBar';
import styles from './MoveList.module.scss';
import type { ContinuationEntry } from '@site/src/types/chess';

export type { ContinuationEntry };

interface MoveListProps {
  entries: ContinuationEntry[];
  loading: boolean;
  sfLoading?: boolean;
  turnPrefix: string;
  gameNextMove?: string | null;
  onMoveSelect: (san: string) => void;
}

const PAGE_SIZE = 10;

function stripAnnotations(san: string): string {
  return san.replace(/[+#]/g, '');
}

export default function MoveList({
  entries,
  loading,
  sfLoading = false,
  turnPrefix,
  gameNextMove,
  onMoveSelect,
}: MoveListProps) {
  const [page, setPage] = useState(0);

  // Promote game's next move to position 0
  const gameNextStripped = gameNextMove ? stripAnnotations(gameNextMove) : null;
  const sortedEntries = gameNextStripped
    ? [
        ...entries.filter((e) => stripAnnotations(e.san) === gameNextStripped),
        ...entries.filter((e) => stripAnnotations(e.san) !== gameNextStripped),
      ]
    : entries;

  const totalPages = Math.max(1, Math.ceil(sortedEntries.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages - 1);
  const visible = sortedEntries.slice(currentPage * PAGE_SIZE, (currentPage + 1) * PAGE_SIZE);
  const visibleDb      = visible.filter((e) => e.source !== 'pending');
  const visiblePending = visible.filter((e) => e.source === 'pending');

  function renderRow(entry: ContinuationEntry) {
    const isGameMove = gameNextStripped !== null && stripAnnotations(entry.san) === gameNextStripped;
    const barAiEstimate = entry.source === 'stockfish';
    return (
      <div
        key={entry.san}
        className={clsx(styles.row, isGameMove && styles.gameRow)}
        onClick={() => onMoveSelect(entry.san)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onMoveSelect(entry.san)}
      >
        <span className={styles.san}>{turnPrefix}{entry.san}</span>
        <div className={styles.barWrap}>
          <WinRateBar stats={entry.stats} aiEstimate={barAiEstimate} />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.panel}>
      {!loading && sortedEntries.length === 0 && (
        <div className={styles.empty}>No data for this position</div>
      )}

      <div className={styles.list}>
        {visibleDb.map(renderRow)}

        {visiblePending.length > 0 && (
          <div className={styles.pendingSection}>
            {visiblePending.map(renderRow)}
            {sfLoading && (
              <div className={styles.irisOverlay}>
                <span className={styles.spinner} />
              </div>
            )}
          </div>
        )}
      </div>

      {totalPages > 1 && (
        <div className={styles.pageNav}>
          <button
            className={styles.pageBtn}
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={currentPage === 0}
          >‹</button>
          <span className={styles.pageLabel}>{currentPage + 1}/{totalPages}</span>
          <button
            className={styles.pageBtn}
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={currentPage === totalPages - 1}
          >›</button>
        </div>
      )}
    </div>
  );
}