export interface Artwork {
  id: string;
  title: string;
  titleEn: string;
  year: number;
  description: string;
  gradient: string;
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
    published: true,
  },
];

export function getArtwork(id: string): Artwork | undefined {
  return ARTWORKS.find((a) => a.id === id);
}
