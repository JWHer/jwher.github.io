import React, { useEffect, useRef, useState } from 'react';
import Layout from '@theme/Layout';
import styles from './cave.module.scss';

// Three-stage story over a fixed cave background:
//   stage 0 — bare cave (no text)
//   stage 1 — scripture
//   stage 2 — personal words
//
// Native CSS scroll-snap (see cave.module.scss) drives the scroll and, via
// `scroll-snap-stop: always`, guarantees one section per flick. This observer
// only reads which section is in view so the fixed text layers crossfade.
const STAGE_COUNT = 3;

export default function Cave() {
  const [stage, setStage] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);

  // Keep the navbar transparent over the dark cave for the whole page.
  useEffect(() => {
    const root = document.documentElement;
    const navbar = document.querySelector('.navbar');
    const prevBodyOverflow = document.body.style.overflow;
    root.style.setProperty('--navbar-bg-color', 'transparent');
    root.style.setProperty('--navbar-text-color', '#ffffff');
    navbar?.classList.add('navbar--over-hero');
    document.body.style.overflow = 'hidden'; // only the snap container scrolls
    return () => {
      root.style.setProperty('--navbar-bg-color', 'var(--ifm-background-color)');
      root.style.setProperty('--navbar-text-color', 'var(--ifm-navbar-link-color)');
      navbar?.classList.remove('navbar--over-hero');
      document.body.style.overflow = prevBodyOverflow;
    };
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const sections = Array.from(scroller.querySelectorAll<HTMLElement>('[data-stage]'));
    const ratios = new Map<Element, number>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => ratios.set(e.target, e.intersectionRatio));
        // Whichever section is most in view is the current stage.
        let best = 0;
        let bestRatio = -1;
        sections.forEach((s) => {
          const r = ratios.get(s) ?? 0;
          if (r > bestRatio) { bestRatio = r; best = Number(s.dataset.stage); }
        });
        setStage(best);
      },
      { root: scroller, threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <Layout title="Cave" description="세상이라는 동굴에서" noFooter>
      <div className={styles.scroller} ref={scrollerRef}>
        <div className={styles.bg} />

        <div className={styles.stages}>
          <p className={`${styles.text} ${styles.verse} ${stage === 1 ? styles.show : ''}`}>
            <span className={styles.balance}>
              Come to me, all you who are weary and burdened, and I will give you rest
            </span>
          </p>

          <div className={`${styles.text} ${styles.words} ${stage === 2 ? styles.show : ''}`}>
            세상엔 알지 못하는것이 참 많습니다.
            <br />
            저는 죄인이였고 세상이라는 동굴에서 답을 찾아 헤멨습니다.
            <br />
            어둠속에서 나왔을때,
            <br />
            예수님은 저에게 더 큰 세상을 보여주셨습니다.
          </div>
        </div>

        {/* Transparent full-height snap sections drive the scroll. */}
        <section className={styles.snap} data-stage="0" />
        <section className={styles.snap} data-stage="1" />
        <section className={styles.snap} data-stage="2" />

        <div
          className={[
            styles.chevron,
            stage < STAGE_COUNT - 1 ? styles.chevronShow : '',
            stage === 0 ? styles.chevronDouble : '',
          ].filter(Boolean).join(' ')}
          aria-hidden
        />
      </div>
    </Layout>
  );
}
