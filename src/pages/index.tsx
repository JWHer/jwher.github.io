import React, { useEffect } from 'react';
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

// ── Brief intro ───────────────────────────────────────────────────────────────

function BriefIntro() {
  return (
    <section className={styles.intro}>
      <div className={styles.introBio}>
        <h2 className={styles.introName}>Jeongwon Her</h2>
        <p className={styles.introText}>
          AI engineer with a focus on model inference optimization and parallel
          programming. From embedded devices to large-scale distributed systems.
        </p>
        <div className={styles.introLinks}>
          <a href="https://github.com/jwher"           className={styles.introSocialLink} target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/jwher"  className={styles.introSocialLink} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com/jwher96"  className={styles.introSocialLink} target="_blank" rel="noreferrer">Instagram</a>
          <a href="/files/jeongwon-her.pdf"            className={styles.introSocialLink}>CV</a>
        </div>
        <Link to='/cave' className={styles.introCave}>&gt; Why I believe in Jesus</Link>
      </div>
      <div className={styles.introIllustration}>
        <Link to='/cave'>
          <img src='img/about-me/jeongwon-her2.png' alt='Jeongwon Her' />
        </Link>
      </div>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  const [latestDoc, secondDoc] = docsItems;
  const recentBlog = blogItems.slice(0, 3);
  const topReads = getTopReads();

  // Scope the proximity scroll-snap (see .snapRoot) to the home page only —
  // it lives on <html>, the document scroll container, so it must be removed
  // when navigating away.
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add(styles.snapRoot);
    return () => root.classList.remove(styles.snapRoot);
  }, []);

  return (
    <Layout title="JWHer Tech Blog" description="허정원 기술블로그">
      <Head>
        <meta property="og:image" content="https://jwher.github.io/img/bamboo-road.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:description" content="허정원 기술블로그 - AI Engineer, from inference kernels to the user" />
        <meta name="twitter:image" content="https://jwher.github.io/img/bamboo-road.webp" />
      </Head>

      <SiteHero
        bgImage="/img/bamboo-road.webp"
        title={<><span style={{fontSize: '0.45em', display: 'block', marginBottom: '-0.35em', letterSpacing: '0.08em'}}>JWHer</span>Tech Blog</>}
        subtitle={<>허정원 기술블로그<br /><span style={{fontWeight: 300, fontSize: '0.8em', opacity: 0.85}}>Copyright © 2021 – {new Date().getFullYear()}, JeongWon Her</span></>}
        fixed
      />

      <div className={styles.page}>
        <div className={styles.col}>

          {/* Card 1: latest docs */}
          <h3 className={styles.sectionHead}>최신 문서</h3>
          {latestDoc && <FeaturedCard item={latestDoc} />}

          {/* Card 2: second latest docs */}
          {secondDoc && <SecondaryCard item={secondDoc} />}

          <hr className={styles.divider} />

          {/* Card 3: blog posts + top reads */}
          <div className={styles.bottomGrid}>
            <section>
              <h3 className={styles.sectionHead}>최신 포스트</h3>
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
