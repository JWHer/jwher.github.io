export interface Artwork {
  id: string;
  title: string;
  titleEn: string;
  year: number;
  description: string;
  /** Fallback card thumbnail when no `image` is set. */
  gradient: string;
  /** Card/OG thumbnail (light). Falls back to `gradient` when absent. */
  image?: string;
  /** Dark-theme variant of `image`. */
  imageDark?: string;
  /**
   * Whether this artwork is finished and should be visible in the gallery.
   * When false: hidden from /art listing, individual page shows "준비중" notice.
   */
  published: boolean;
}

export const ARTWORKS: Artwork[] = [
  {
    id: 'irworobongdo',
    title: '일월오봉도',
    titleEn: 'Sun Moon and Five Peaks',
    year: 2026,
    description: '조선 왕실 상징화. 흑백 선화, 인터랙티브.',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    published: false,
  },
  {
    id: 'impression-sunrise',
    title: '인상, 해돋이',
    titleEn: 'Impression, Sunrise',
    year: 2026,
    description: 'Monet 1872. GLSL 시네마그래프.',
    gradient: 'linear-gradient(135deg, #2d3436 0%, #636e72 50%, #b2bec3 100%)',
    published: false,
  },
  {
    id: 'seoul',
    title: '서울',
    titleEn: 'Seoul City Layers',
    year: 2026,
    description: '서울 도시 데이터. 레이어 시각화.',
    gradient: 'linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #2d3436 100%)',
    published: false,
  },
  {
    id: 'machine',
    title: '기계',
    titleEn: 'Machine',
    year: 2026,
    description: 'CSS 3D perspective. anime.js 스크롤 애니메이션.',
    gradient: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #333333 100%)',
    published: false,
  },
  {
    id: 'chess',
    title: '체스 기보',
    titleEn: 'Chess Explorer',
    year: 2026,
    description: '기보 탐색기. 오프닝 분류, 수순별 승률.',
    gradient: 'linear-gradient(135deg, #2c2c2c 0%, #4a3728 50%, #6b4c35 100%)',
    image: '/img/art/chess-og.webp',
    published: true,
  },
  {
    id: 'word-questions',
    title: '뜻밖에',
    titleEn: 'Word Questions',
    year: 2026,
    description: 'word2vec 의미 유사도로 오늘의 단어 맞히기.',
    gradient: 'linear-gradient(135deg, #1b3a2d 0%, #2e8555 50%, #25c2a0 100%)',
    image: '/img/art/wq-og-light.png',
    imageDark: '/img/art/wq-og-dark.png',
    published: true,
  },
  {
    id: 'arcade',
    title: '아케이드',
    titleEn: 'Arcade',
    year: 2026,
    description: 'EmulatorJS(WASM)로 바로 즐기는 클래식 아케이드 12선.',
    gradient: 'linear-gradient(135deg, #1d1e20 0%, #205d3b 50%, #25c2a0 100%)',
    image: '/img/art/arcade-og.webp',
    published: true,
  },
];

export function getArtwork(id: string): Artwork | undefined {
  return ARTWORKS.find((a) => a.id === id);
}
