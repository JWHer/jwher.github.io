import { useState, useEffect } from 'react';
import type { OpeningInfo } from '@site/src/components/Chess/OpeningBadge';

interface Opening {
  eco: string;
  name: string;
  nameKo?: string;
  pgn: string;
  epd: string;
}

let cachedOpenings: Opening[] | null = null;

async function loadOpenings(): Promise<Opening[]> {
  if (cachedOpenings) return cachedOpenings;
  const res = await fetch('/chess/openings.json');
  cachedOpenings = await res.json();
  return cachedOpenings;
}

function fenToEpd(fen: string): string {
  return fen.split(' ').slice(0, 4).join(' ');
}

export function useOpening(fen: string): OpeningInfo | null {
  const [opening, setOpening] = useState<OpeningInfo | null>(null);

  useEffect(() => {
    const epd = fenToEpd(fen);
    loadOpenings().then((openings) => {
      // Find the most specific (last) opening matching this EPD
      let match: Opening | undefined;
      for (let i = openings.length - 1; i >= 0; i--) {
        if (openings[i].epd === epd) { match = openings[i]; break; }
      }
      setOpening(match ? { eco: match.eco, name: match.name, nameKo: match.nameKo } : null);
    });
  }, [fen]);

  return opening;
}
