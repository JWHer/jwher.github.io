import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import { CONTENT_INDEX, ContentItem } from '@site/src/data/content-index';
import { GA_VIEWS, GA_UPDATED_AT } from '@site/src/data/ga-views';
import SiteHero from '@site/src/components/SiteHero';
import styles from './index.module.scss';

// ── Data ──────────────────────────────────────────────────────────────────────

const docsItems = CONTENT_INDEX.filter(i => i.path.startsWith('/docs'));
const blogItems = CONTENT_INDEX.filter(i => i.path.startsWith('/blog'));

function getTopReads(): ContentItem[] {
  if (GA_VIEWS.length > 0) {
    return GA_VIEWS.slice(0, 5)
      .map(v => CONTENT_INDEX.find(i => i.path === v.path))
      .filter((i): i is ContentItem => i != null);
  }
  return CONTENT_INDEX.slice(0, 5);
}

// ── Card 1: Featured docs ─────────────────────────────────────────────────────

function FeaturedCard({ item }: { item: ContentItem }) {
  return (
    <article className={styles.featured}>
      {item.tags[0] && (
        <span className={styles.category}>{item.tags[0].toUpperCase()}</span>
      )}
      <h2 className={styles.featuredTitle}>
        <Link to={item.path}>{item.title}</Link>
      </h2>
      {item.description !== item.title && (
        <p className={styles.featuredDesc}>{item.description}</p>
      )}
      <div className={styles.featuredMeta}>
        {item.date && <span className={styles.date}>{item.date.slice(0, 10)}</span>}
        <Link to={item.path} className={styles.readMore}>더 읽기 →</Link>
      </div>
    </article>
  );
}

// ── Card 2: Secondary docs ────────────────────────────────────────────────────

function SecondaryCard({ item }: { item: ContentItem }) {
  return (
    <article className={styles.secondary}>
      <div className={styles.secondaryMain}>
        {item.tags[0] && (
          <span className={styles.category}>{item.tags[0].toUpperCase()}</span>
        )}
        <h3 className={styles.secondaryTitle}>
          <Link to={item.path}>{item.title}</Link>
        </h3>
        {item.description !== item.title && (
          <p className={styles.secondaryDesc}>{item.description}</p>
        )}
      </div>
      {item.date && (
        <span className={`${styles.date} ${styles.secondaryDate}`}>{item.date.slice(0, 10)}</span>
      )}
    </article>
  );
}

// ── Card 3a: Blog card ────────────────────────────────────────────────────────

function BlogCard({ item }: { item: ContentItem }) {
  return (
    <article className={`${styles.blogCard}${!item.image ? ` ${styles.blogCardNoImage}` : ''}`}>
      {item.image && (
        <Link to={item.path} className={styles.blogCardThumb}>
          <img src={item.image} alt="" loading="lazy" />
        </Link>
      )}
      <div className={styles.blogCardBody}>
        <h4 className={styles.blogCardTitle}>
          <Link to={item.path}>{item.title}</Link>
        </h4>
        {item.description !== item.title && (
          <p className={styles.blogCardDesc}>{item.description}</p>
        )}
        {item.date && <span className={styles.date}>{item.date.slice(0, 10)}</span>}
      </div>
    </article>
  );
}

// ── Card 3b: Top read item ────────────────────────────────────────────────────

function TopReadItem({ item, rank }: { item: ContentItem; rank: number }) {
  return (
    <div className={styles.topReadItem}>
      <span className={styles.topReadRank}>{rank}</span>
      <div className={styles.topReadBody}>
        <Link to={item.path} className={styles.topReadTitle}>{item.title}</Link>
        {item.description !== item.title && (
          <p className={styles.topReadDesc}>{item.description}</p>
        )}
      </div>
    </div>
  );
}

// ── Botanical illustration (Phosphor Icons ph/potted-plant-light, MIT) ────────

function FlowerSVG() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" aria-hidden>
      <path d="m124.24 140.24l21.09-21.09a58 58 0 0 0 26.49 6.79a47.55 47.55 0 0 0 24.85-6.94c23.07-14 35.42-46.53 33-87.09a6 6 0 0 0-5.64-5.64c-40.56-2.38-73.12 10-87.09 33c-9.22 15.22-9.2 33.71-.14 51.35L120 127.51l-14.64-14.63c6.32-13 6.15-26.6-.67-37.86C94.21 57.72 70 48.44 39.85 50.21a6 6 0 0 0-5.64 5.64C32.44 86 41.72 110.2 59 120.69A36.23 36.23 0 0 0 78 126a43.4 43.4 0 0 0 18.93-4.6l14.58 14.6l-10 10H56a6 6 0 0 0 0 12h11.18l13.57 61a13.91 13.91 0 0 0 13.67 11h67.17a13.91 13.91 0 0 0 13.66-11l13.57-61H200a6 6 0 0 0 0-12h-81.52zm23-74.7c11-18.22 37.24-28.33 70.72-27.5c.83 33.47-9.28 59.68-27.5 70.72c-12.3 7.44-27.09 6.92-41.79-1.43c-8.36-14.7-8.88-29.49-1.43-41.79m-53.66 44c-10 5.56-20 5.87-28.34.84C52.78 102.87 45.75 85 46 62c23-.29 40.88 6.78 48.42 19.24c5.03 8.3 4.72 18.32-.84 28.34ZM176.52 158l-13 58.43a2 2 0 0 1-1.95 1.57H94.42a2 2 0 0 1-2-1.57L79.48 158Z" />
    </svg>
  );
}

// ── Brief intro ───────────────────────────────────────────────────────────────

function BriefIntro() {
  return (
    <section className={styles.intro}>
      <div className={styles.introBio}>
        <h2 className={styles.introName}>Jeongwon Her</h2>
        <p className={styles.introText}>
          Software engineer with a focus on MLOps, parallel programming, and HPC.
          From embedded devices to large-scale distributed systems.
        </p>
        <div className={styles.introLinks}>
          <a href="https://github.com/jwher"           className={styles.introSocialLink} target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/jwher"  className={styles.introSocialLink} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com/jwher96"  className={styles.introSocialLink} target="_blank" rel="noreferrer">Instagram</a>
          <a href="/files/jeongwon-her.pdf"            className={styles.introSocialLink}>CV</a>
        </div>
      </div>
      <div className={styles.introIllustration}>
        <FlowerSVG />
      </div>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  const [latestDoc, secondDoc] = docsItems;
  const recentBlog = blogItems.slice(0, 3);
  const topReads = getTopReads();

  return (
    <Layout title="JWHer Tech Blog" description="허정원 기술블로그">
      <Head>
        <meta property="og:image" content="https://jwher.github.io/img/bamboo-road.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:description" content="허정원 기술블로그 — MLOps, 병렬 프로그래밍, HPC" />
        <meta name="twitter:image" content="https://jwher.github.io/img/bamboo-road.webp" />
      </Head>

      <SiteHero
        bgImage="/img/bamboo-road.webp"
        title={<><span style={{fontSize: '0.45em', display: 'block', marginBottom: '-0.35em', letterSpacing: '0.08em'}}>JWHer</span>Tech Blog</>}
        subtitle={<>허정원 기술블로그<br /><span style={{fontWeight: 300, fontSize: '0.8em', opacity: 0.85}}>Copyright © 2021, JeongWon Her and/or its subsidiaries or affiliates.</span></>}
        fixed
      />

      <div className={styles.page}>
        <div className={styles.col}>

          {/* Card 1: latest docs */}
          {latestDoc && <FeaturedCard item={latestDoc} />}

          {/* Card 2: second latest docs */}
          {secondDoc && <SecondaryCard item={secondDoc} />}

          <hr className={styles.divider} />

          {/* Card 3: blog posts + top reads */}
          <div className={styles.bottomGrid}>
            <section>
              <h3 className={styles.sectionHead}>최근 포스트</h3>
              {recentBlog.map(item => <BlogCard key={item.path} item={item} />)}
            </section>
            <aside className={styles.topReads}>
              <h3 className={styles.sectionHead}>
                인기 글
                {GA_UPDATED_AT && <span className={styles.sectionMeta}>{GA_UPDATED_AT} 기준</span>}
              </h3>
              {topReads.map((item, i) => (
                <TopReadItem key={item.path} item={item} rank={i + 1} />
              ))}
            </aside>
          </div>

          {/* Nav */}
          <nav className={styles.nav}>
            <Link to="/blog"   className={styles.navLink}>Blog</Link>
            <Link to="/docs"   className={styles.navLink}>Docs</Link>
            <Link to="/art"    className={styles.navLink}>Art</Link>
            <Link to="/search" className={styles.navLink}>Search</Link>
          </nav>

        </div>
      </div>

      {/* Intro */}
      <div className={styles.introWrap}>
        <div className={styles.col}>
          <BriefIntro />
        </div>
      </div>
    </Layout>
  );
}
