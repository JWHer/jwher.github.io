import { useRef, useState } from 'react';
import clsx from 'clsx';
import type { BoardSkinProps } from './BoardSkin';
import AnnotationBadge from './AnnotationBadge';
import styles from './ClassicSkin.module.scss';

const FILES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const RANKS = ['8', '7', '6', '5', '4', '3', '2', '1'];
const IDX = [0, 1, 2, 3, 4, 5, 6, 7];
const IDX_REV = [7, 6, 5, 4, 3, 2, 1, 0];

const DRAG_THRESHOLD_PX = 5;

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
  onSquareDrop,
}: BoardSkinProps) {
  const board = chess.board();
  const lastFrom = lastMove?.from ?? null;
  const lastTo = lastMove?.to ?? null;

  const checkKing = checkmateInfo?.king ?? null;
  const checkAttackers = checkmateInfo?.attackers ?? [];
  const checkRays = checkmateInfo?.rays ?? [];

  const rankOrder = flipped ? IDX_REV : IDX;
  const fileOrder = flipped ? IDX_REV : IDX;

  // ── Drag state ──
  // dragFrom re-renders (dims the original piece); ghost position is driven
  // by direct style writes on ghostRef to avoid re-rendering per pointermove.
  const boardRef = useRef<HTMLDivElement>(null);
  const ghostRef = useRef<HTMLImageElement>(null);
  const dragRef = useRef<{ from: string; startX: number; startY: number; dragging: boolean } | null>(null);
  const [dragFrom, setDragFrom] = useState<string | null>(null);

  const squareAt = (clientX: number, clientY: number): string | null => {
    const rect = boardRef.current?.getBoundingClientRect();
    if (!rect) return null;
    let f = Math.floor(((clientX - rect.left) / rect.width) * 8);
    let r = Math.floor(((clientY - rect.top) / rect.height) * 8);
    if (f < 0 || f > 7 || r < 0 || r > 7) return null;
    if (flipped) { f = 7 - f; r = 7 - r; }
    return `${FILES[f]}${RANKS[r]}`;
  };

  const moveGhost = (clientX: number, clientY: number) => {
    const ghost = ghostRef.current;
    const rect = boardRef.current?.getBoundingClientRect();
    if (!ghost || !rect) return;
    const size = rect.width / 8;
    ghost.style.left = `${clientX - rect.left - size / 2}px`;
    ghost.style.top = `${clientY - rect.top - size / 2}px`;
  };

  const endDrag = () => {
    dragRef.current = null;
    setDragFrom(null);
  };

  const handlePointerDown = (square: string, e: React.PointerEvent<HTMLDivElement>) => {
    if (!onSquareDrop) return;
    const piece = chess.get(square as never);
    if (!piece || piece.color !== chess.turn()) return;
    dragRef.current = { from: square, startX: e.clientX, startY: e.clientY, dragging: false };
    e.currentTarget.setPointerCapture(e.pointerId);
    // select immediately so destination dots show while dragging
    if (selectedSquare !== square) onSquareClick?.(square);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag) return;
    if (!drag.dragging) {
      const dist = Math.hypot(e.clientX - drag.startX, e.clientY - drag.startY);
      if (dist < DRAG_THRESHOLD_PX) return;
      drag.dragging = true;
      setDragFrom(drag.from);
    }
    moveGhost(e.clientX, e.clientY);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag) return;
    if (drag.dragging) {
      const target = squareAt(e.clientX, e.clientY);
      if (target && target !== drag.from) onSquareDrop?.(drag.from, target);
    }
    // non-drag release falls through to the normal click event
    endDrag();
  };

  const dragPiece = dragFrom ? chess.get(dragFrom as never) : null;

  return (
    <div
      ref={boardRef}
      className={styles.board}
      role="grid"
      aria-label="Chess board"
    >
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
              onPointerDown={(e) => handlePointerDown(square, e)}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={endDrag}
            >
              {piece && (
                <img
                  src={`/chess/pieces/${piece.color}${piece.type.toUpperCase()}.svg`}
                  alt={`${piece.color === 'w' ? 'White' : 'Black'} ${piece.type}`}
                  className={clsx(styles.piece, square === dragFrom && styles.pieceDragging)}
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
      {dragPiece && (
        <img
          ref={ghostRef}
          src={`/chess/pieces/${dragPiece.color}${dragPiece.type.toUpperCase()}.svg`}
          alt=""
          className={styles.ghostPiece}
        />
      )}
    </div>
  );
}
