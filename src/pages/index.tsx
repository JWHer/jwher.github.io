import React, { useEffect, useRef, useState } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import { CONTENT_INDEX, ContentItem } from '@site/src/data/content-index';
import SiteHero from '@site/src/components/SiteHero';
import { kebabCase } from '@site/src/utils/kebabCase';
import styles from './index.module.scss';

// ── Art canvas placeholder ────────────────────────────────────────────────────

function ArtCanvas() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1100px)');
    setVisible(mq.matches);
    const handler = (e: MediaQueryListEvent) => setVisible(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  if (!visible) return null;
  return <canvas className={styles.canvas} aria-hidden />;
}

// ── Layout constants (Obenauer reference-based) ───────────────────────────────

const TEXT_ROW_HEIGHT = 130; // px — fixed height per text row
const IMG_HEIGHT      = 280; // px — image wrapper height for stacking algorithm
const IMG_GAP         =  24; // px — gap between images

// ── Stacking algorithm ────────────────────────────────────────────────────────

interface LayoutItem {
  item: ContentItem;
  textTop: number;
  imgTop: number | null;
  imgIndex: number;         // sequential index of placed images (for odd/even right offset)
}

function computeLayout(items: ContentItem[]): LayoutItem[] {
  const textListHeight = items.length * TEXT_ROW_HEIGHT;
  let prevImgBottom = 0;
  let imgIndex = 0;
  return items.map((item, index) => {
    const textTop = index * TEXT_ROW_HEIGHT;
    if (!item.image) return { item, textTop, imgTop: null, imgIndex: -1 };

    const neededImgTop = Math.max(textTop, prevImgBottom);
    // Don't show image if it would extend beyond the text list height
    if (neededImgTop + IMG_HEIGHT > textListHeight) {
      return { item, textTop, imgTop: null, imgIndex: -1 };
    }

    const idx = imgIndex++;
    prevImgBottom = neededImgTop + IMG_HEIGHT + IMG_GAP;
    return { item, textTop, imgTop: neededImgTop, imgIndex: idx };
  });
}

// ── Tag URL helper ────────────────────────────────────────────────────────────

function tagUrl(tag: string, itemPath: string): string {
  const slug = kebabCase(tag);
  return itemPath.startsWith('/blog/') ? `/blog/tags/${slug}` : `/docs/tags/${slug}`;
}

// ── Content sources ───────────────────────────────────────────────────────────

const RECENT_POSTS = CONTENT_INDEX
  .filter(item => item.path.startsWith('/blog/'))
  .slice(0, 7);

const FEATURED_DOCS = CONTENT_INDEX
  .filter(item => item.path.startsWith('/docs/'))
  .slice(0, 7);

// ── Two-column section ────────────────────────────────────────────────────────
// Left column: text items at fixed TEXT_ROW_HEIGHT each
// Right column: images absolutely positioned via stacking algorithm
// Connector: single SVG <path> per item — L-shaped, title→image border-left

interface ConnPos { titleRight: number; titleCenterY: number; imgLeft: number }

function TwoColSection({ items, heading }: { items: ContentItem[]; heading: string }) {
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const layout = computeLayout(items);
  const twoColRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [positions, setPositions] = useState<Map<string, ConnPos>>(new Map());

  const totalHeight = Math.max(
    items.length * TEXT_ROW_HEIGHT,
    layout.reduce((m, l) => l.imgTop != null ? Math.max(m, l.imgTop + IMG_HEIGHT) : m, 0),
  );

  const withImages = layout.filter(l => l.imgTop != null);

  useEffect(() => {
    const container = twoColRef.current;
    if (!container) return;

    const measure = () => {
      const rect = container.getBoundingClientRect();
      setContainerWidth(rect.width);
      const pos = new Map<string, ConnPos>();

      // Measure title right edges and vertical centers
      container.querySelectorAll<HTMLElement>('[data-conn-path]').forEach(el => {
        const path = el.dataset.connPath!;
        const elRect = el.getBoundingClientRect();
        const titleRight = elRect.right - rect.left;
        const titleCenterY = (elRect.top + elRect.bottom) / 2 - rect.top;
        pos.set(path, { titleRight, titleCenterY, imgLeft: 0 });
      });

      // Measure image left edges
      container.querySelectorAll<HTMLElement>('[data-img-path]').forEach(el => {
        const path = el.dataset.imgPath!;
        const imgLeft = el.getBoundingClientRect().left - rect.left;
        const existing = pos.get(path);
        if (existing) existing.imgLeft = imgLeft;
        else pos.set(path, { titleRight: 0, titleCenterY: 0, imgLeft });
      });

      setPositions(pos);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(container);
    window.addEventListener('resize', measure);
    return () => { ro.disconnect(); window.removeEventListener('resize', measure); };
  }, [layout]);

  return (
    <section className={styles.section}>
      <h2 className={styles.colHead}>{heading}</h2>
      <div className={styles.twoCol} style={{ minHeight: totalHeight }} ref={twoColRef}>

        {/* SVG connector overlay — spans entire twoCol */}
        {withImages.length > 0 && containerWidth > 0 && (
          <svg className={styles.connectorSvg} width={containerWidth} height={totalHeight} aria-hidden>
            {withImages.map(({ item, imgTop }) => {
              const pos = positions.get(item.path);
              if (!pos || !pos.imgLeft) return null;

              const startX = pos.titleRight + 10;  // 10px gap after title text
              const startY = pos.titleCenterY;      // vertical center of title element
              const endY = imgTop! + IMG_HEIGHT;    // bottom of image (replaces border-left)
              const isHovered = hoveredPath === item.path;
              const cls = `${styles.connPath}${isHovered ? ` ${styles.connPathHover}` : ''}`;

              // Horizontal from title → image left edge, then vertical DOWN to image bottom.
              // The vertical replaces itemThumb's border-left (only drawn from startY down,
              // never above the horizontal connection point).
              return <path key={item.path} d={`M ${startX},${startY} H ${pos.imgLeft} V ${endY}`} className={cls} />;
            })}
          </svg>
        )}

        {/* ── Left: text column ── */}
        <div className={styles.textCol}>
          {layout.map(({ item }) => (
            <div
              key={item.path}
              className={`${styles.textRow}${hoveredPath === item.path ? ` ${styles.isHovered}` : ''}`}
              onMouseEnter={() => setHoveredPath(item.path)}
              onMouseLeave={() => setHoveredPath(null)}
            >
              <div className={styles.itemTitleRow}>
                <Link to={item.path} className={styles.itemTitle} data-conn-path={item.path}>{item.title}</Link>
              </div>
              {item.date && (
                <div className={styles.itemMeta}>
                  <span className={styles.itemDate}>{item.date.slice(0, 10)}</span>
                </div>
              )}
              {item.description && item.description !== item.title && (
                <p className={styles.itemDesc}>{item.description}</p>
              )}
              {item.tags.length > 0 && (
                <div className={styles.itemTags}>
                  {item.tags.slice(0, 3).map(tag => (
                    <Link
                      key={tag}
                      to={tagUrl(tag, item.path)}
                      className={styles.itemTagBadge}
                      onClick={e => e.stopPropagation()}
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ── Right: image column (absolutely positioned) ── */}
        <div className={styles.imageCol}>
          {withImages.map(({ item, imgTop, imgIndex }) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${styles.imgWrap}${hoveredPath === item.path ? ` ${styles.isHovered}` : ''}`}
              style={{ top: imgTop!, right: imgIndex % 2 === 1 ? '24px' : '0px' }}
              data-img-path={item.path}
            >
              <div
                className={styles.itemThumb}
                onMouseEnter={() => setHoveredPath(item.path)}
                onMouseLeave={() => setHoveredPath(null)}
              >
                <img src={item.image!} alt={item.title} loading="lazy" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

// ── Botanical illustration (potted plant — Phosphor Icons, MIT license) ────────
// Source: https://phosphoricons.com/ — ph/potted-plant-light

function FlowerSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      aria-hidden
    >
      <path d="m124.24 140.24l21.09-21.09a58 58 0 0 0 26.49 6.79a47.55 47.55 0 0 0 24.85-6.94c23.07-14 35.42-46.53 33-87.09a6 6 0 0 0-5.64-5.64c-40.56-2.38-73.12 10-87.09 33c-9.22 15.22-9.2 33.71-.14 51.35L120 127.51l-14.64-14.63c6.32-13 6.15-26.6-.67-37.86C94.21 57.72 70 48.44 39.85 50.21a6 6 0 0 0-5.64 5.64C32.44 86 41.72 110.2 59 120.69A36.23 36.23 0 0 0 78 126a43.4 43.4 0 0 0 18.93-4.6l14.58 14.6l-10 10H56a6 6 0 0 0 0 12h11.18l13.57 61a13.91 13.91 0 0 0 13.67 11h67.17a13.91 13.91 0 0 0 13.66-11l13.57-61H200a6 6 0 0 0 0-12h-81.52zm23-74.7c11-18.22 37.24-28.33 70.72-27.5c.83 33.47-9.28 59.68-27.5 70.72c-12.3 7.44-27.09 6.92-41.79-1.43c-8.36-14.7-8.88-29.49-1.43-41.79m-53.66 44c-10 5.56-20 5.87-28.34.84C52.78 102.87 45.75 85 46 62c23-.29 40.88 6.78 48.42 19.24c5.03 8.3 4.72 18.32-.84 28.34ZM176.52 158l-13 58.43a2 2 0 0 1-1.95 1.57H94.42a2 2 0 0 1-2-1.57L79.48 158Z" />
    </svg>
  );
}

// ── Brief intro section ───────────────────────────────────────────────────────

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
          <a href="https://github.com/jwher"              className={styles.introSocialLink} target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/jwher"     className={styles.introSocialLink} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com/jwher96"     className={styles.introSocialLink} target="_blank" rel="noreferrer">Instagram</a>
          <a href="/files/jeongwon-her.pdf"               className={styles.introSocialLink}>CV</a>
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
  return (
    <Layout title="JWHer Tech Blog" description="허정원 기술블로그">
      <ArtCanvas />

      <SiteHero
        bgImage="/img/bamboo-road.jpg"
        title={<><span style={{fontSize: '0.45em', display: 'block', marginBottom: '-0.35em', letterSpacing: '0.08em'}}>JWHer</span>Tech Blog</>}
        subtitle={<>허정원 기술블로그<br /><span style={{fontWeight: 300, fontSize: '0.8em', opacity: 0.85}}>Copyright © 2021, JeongWon Her and/or its subsidiaries or affiliates.</span></>}
        style={{ paddingTop: '4rem' }}
      />

      {/* ── Content ── */}
      <div className={styles.page}>
        <div className={styles.col}>
          <TwoColSection items={RECENT_POSTS}  heading="Recent Posts" />
          <TwoColSection items={FEATURED_DOCS} heading="Featured Docs" />

          <nav className={styles.nav}>
            <Link to="/blog"   className={styles.navLink}>Blog</Link>
            <Link to="/docs"   className={styles.navLink}>Docs</Link>
            <Link to="/art"    className={styles.navLink}>Art</Link>
            <Link to="/search" className={styles.navLink}>Search</Link>
          </nav>
        </div>
      </div>

      {/* ── Intro ── */}
      <div className={styles.introWrap}>
        <div className={styles.col}>
          <BriefIntro />
        </div>
      </div>

    </Layout>
  );
}
