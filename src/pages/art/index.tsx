import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import SiteHero from '@site/src/components/SiteHero';
import styles from './index.module.scss';

const ARTWORKS = [
  {
    id: 'irworobongdo',
    title: '일월오봉도',
    titleEn: 'Sun Moon and Five Peaks',
    year: 2026,
    description: '조선 왕실 상징화. 흑백 선화, 인터랙티브.',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
  },
  {
    id: 'impression-sunrise',
    title: '인상, 해돋이',
    titleEn: 'Impression, Sunrise',
    year: 2026,
    description: 'Monet 1872. GLSL 시네마그래프.',
    gradient: 'linear-gradient(135deg, #2d3436 0%, #636e72 50%, #b2bec3 100%)',
  },
  {
    id: 'seoul',
    title: '서울',
    titleEn: 'Seoul City Layers',
    year: 2026,
    description: '서울 도시 데이터. 레이어 시각화.',
    gradient: 'linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #2d3436 100%)',
  },
  {
    id: 'machine',
    title: '기계',
    titleEn: 'Machine',
    year: 2026,
    description: 'CSS 3D perspective. anime.js 스크롤 애니메이션.',
    gradient: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #333333 100%)',
  },
];

export default function ArtGallery() {
  return (
    <Layout title="Art" description="미디어 아트 갤러리">
      <SiteHero
        bgImage="/img/art/art-header.webp"
        title="Art"
        subtitle="And Bezaleel made the ark of shittim wood."
      />

      {/* Gallery */}
      <main className={styles.main}>
        <div className={styles.grid}>
          {ARTWORKS.map((art) => (
            <Link key={art.id} to={`/art/${art.id}`} className={styles.card}>
              <div
                className={styles.cardThumb}
                style={{ background: art.gradient }}
              />
              <div className={styles.cardBody}>
                <div className={styles.cardTitle}>{art.title}</div>
                <div className={styles.cardTitleEn}>{art.titleEn}</div>
                <div className={styles.cardDesc}>{art.description}</div>
                <div className={styles.cardYear}>{art.year}</div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  );
}
