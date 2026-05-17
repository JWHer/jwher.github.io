import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import SiteHero from '@site/src/components/SiteHero';
import { ARTWORKS } from '@site/src/data/artworks';
import styles from './index.module.scss';

export default function ArtGallery() {
  const visible = ARTWORKS.filter((a) => a.published);
  return (
    <Layout title="Art" description="미디어 아트 갤러리">
      <SiteHero
        bgImage="/img/art/art-header.webp"
        title="Art"
        subtitle="And Bezaleel made the ark of shittim wood."
      />

      {/* Gallery */}
      <main className={styles.main}>
        {visible.length === 0 && (
          <p className={styles.empty}>준비중입니다.</p>
        )}
        <div className={styles.grid}>
          {visible.map((art) => (
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
