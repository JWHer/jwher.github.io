import type { Move } from 'chess.js';
import type { MoveStats } from '../components/Chess/WinRateBar';

export interface NavigationParams {
  gameId: string | null;
  moveSans: string[];
}

export interface MoveHistoryEntry {
  san: string;
  fenAfter: string;
  move: Move;
  fromGame: boolean;
}

export interface ContinuationEntry {
  san: string;
  source: 'db' | 'stockfish' | 'pending' | null;
  winrate: number | null;
  stats: MoveStats | null;
  mateIn: number | null; // Stockfish forced mate distance (positive = current player mates in N)
}
