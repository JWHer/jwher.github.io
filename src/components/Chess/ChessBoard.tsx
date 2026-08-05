import { useRef } from 'react';
import type { Chess, Move } from 'chess.js';
import type { BoardSkinType, CheckmateInfo } from './BoardSkin';
import ClassicSkin from './ClassicSkin';

interface ChessBoardProps {
  chess: Chess;
  lastMove: Move | null;
  skin?: BoardSkinType;
  highlightSquares?: string[];
  flipped?: boolean;
  checkmateInfo?: CheckmateInfo | null;
}

export default function ChessBoard({
  chess,
  lastMove,
  skin = 'classic',
  highlightSquares,
  flipped = false,
  checkmateInfo,
}: ChessBoardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const props = { chess, lastMove, highlightSquares: highlightSquares ?? [], containerRef, flipped, checkmateInfo };

  return (
    <div ref={containerRef} style={{ width: '100%' }}>
      {skin === 'classic' && <ClassicSkin {...props} />}
      {/* canvas-anim skin: future implementation */}
    </div>
  );
}
