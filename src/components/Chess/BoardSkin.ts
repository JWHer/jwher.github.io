import type { Chess, Move } from 'chess.js';
import type { RefObject } from 'react';
import type { AnnotationType } from './AnnotationBadge';

export interface CheckmateInfo {
  king: string;
  attackers: string[];
  rays: string[];
}

export interface BoardSkinProps {
  chess: Chess;
  lastMove: Move | null;
  highlightSquares?: string[];
  containerRef: RefObject<HTMLDivElement>;
  flipped?: boolean;
  checkmateInfo?: CheckmateInfo | null;
  annotation?: AnnotationType | null;
  selectedSquare?: string | null;
  destinationSquares?: string[];
  onSquareClick?: (square: string) => void;
}

export type BoardSkinType = 'classic' | 'canvas-anim';
