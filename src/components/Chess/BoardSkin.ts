import type { Chess, Move } from 'chess.js';
import type { RefObject } from 'react';

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
}

export type BoardSkinType = 'classic' | 'canvas-anim';
