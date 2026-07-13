import clsx from 'clsx';
import type { ChessGame } from '@site/src/data/chess-games';
import styles from './GameSidebar.module.scss';

interface GameSidebarProps {
  games: ChessGame[];
  activeId: string | null;
  onSelect: (id: string | null) => void;
}

export default function GameSidebar({ games, activeId, onSelect }: GameSidebarProps) {
  return (
    <nav className={styles.sidebar} aria-label="Game list">
      <div className={styles.list}>
        {/* Default: free exploration mode */}
        <div
          key="__none__"
          className={clsx(styles.item, activeId === null && styles.active)}
          onClick={() => onSelect(null)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && onSelect(null)}
        >
          <div className={styles.title}>Free Explore</div>
          <div className={styles.meta}><span>Position explorer</span></div>
        </div>

        {games.map((game) => (
          <div
            key={game.id}
            className={clsx(styles.item, game.id === activeId && styles.active)}
            onClick={() => onSelect(game.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onSelect(game.id)}
          >
            <div className={styles.title}>{game.title}</div>
            <div className={styles.meta}>
              <span>{game.white} vs {game.black}</span>
              <span>{game.year}</span>
              <span className={clsx(
                styles.result,
                game.result === '1-0' ? styles.white :
                game.result === '0-1' ? styles.black : styles.draw
              )}>
                {game.result}
              </span>
              {!game.pgnPath && <span className={styles.noPgn}>No PGN</span>}
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
}
