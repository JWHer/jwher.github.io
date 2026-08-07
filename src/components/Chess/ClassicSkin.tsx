import clsx from 'clsx';
import type { BoardSkinProps } from './BoardSkin';
import AnnotationBadge from './AnnotationBadge';
import styles from './ClassicSkin.module.scss';

const FILES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const RANKS = ['8', '7', '6', '5', '4', '3', '2', '1'];
const IDX = [0, 1, 2, 3, 4, 5, 6, 7];
const IDX_REV = [7, 6, 5, 4, 3, 2, 1, 0];

export default function ClassicSkin({
  chess,
  lastMove,
  highlightSquares = [],
  flipped = false,
  checkmateInfo,
  annotation,
  selectedSquare,
  destinationSquares = [],
  onSquareClick,
}: BoardSkinProps) {
  const board = chess.board();
  const lastFrom = lastMove?.from ?? null;
  const lastTo = lastMove?.to ?? null;

  const checkKing = checkmateInfo?.king ?? null;
  const checkAttackers = checkmateInfo?.attackers ?? [];
  const checkRays = checkmateInfo?.rays ?? [];

  const rankOrder = flipped ? IDX_REV : IDX;
  const fileOrder = flipped ? IDX_REV : IDX;

  return (
    <div className={styles.board} role="grid" aria-label="Chess board">
      {rankOrder.map((rankIdx, ri) =>
        fileOrder.map((fileIdx, fi) => {
          const file = FILES[fileIdx];
          const rank = RANKS[rankIdx];
          const square = `${file}${rank}`;
          const isDark = (rankIdx + fileIdx) % 2 === 1;
          const isLastFrom = square === lastFrom;
          const isLastTo = square === lastTo;
          const isHighlighted = highlightSquares.includes(square);
          const isSelected = square === selectedSquare;
          const isDestination = destinationSquares.includes(square);
          const isCheckKing = square === checkKing;
          const isCheckAttacker = checkAttackers.includes(square);
          const isCheckRay = checkRays.includes(square);
          const piece = board[rankIdx][fileIdx];

          return (
            <div
              key={square}
              className={clsx(
                styles.square,
                isDark ? styles.dark : styles.light,
                isLastFrom && styles.lastMoveFrom,
                isLastTo && styles.lastMoveTo,
                isHighlighted && styles.highlighted,
                isSelected && styles.selected,
                isCheckRay && styles.checkRay,
                isCheckAttacker && styles.checkAttacker,
                isCheckKing && styles.checkKing,
                onSquareClick && (piece || isDestination) && styles.clickable,
              )}
              role="gridcell"
              aria-label={square}
              onClick={onSquareClick ? () => onSquareClick(square) : undefined}
            >
              {piece && (
                <img
                  src={`/chess/pieces/${piece.color}${piece.type.toUpperCase()}.svg`}
                  alt={`${piece.color === 'w' ? 'White' : 'Black'} ${piece.type}`}
                  className={styles.piece}
                />
              )}
              {isDestination && (
                <span className={piece ? styles.destCapture : styles.destDot} />
              )}
              {isLastTo && annotation && (
                <AnnotationBadge type={annotation} className={styles.annotationBadge}/>
              )}
              {ri === 7 && (
                <span className={clsx(styles.coords, styles.file)}>{file}</span>
              )}
              {fi === 0 && (
                <span className={clsx(styles.coords, styles.rank)}>{rank}</span>
              )}
            </div>
          );
        })
      )}
    </div>
  );
}
