import { useEffect, useState, useRef } from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import { ARCADE_GAMES, type ArcadeGame } from '@site/src/data/arcade-games';
import styles from './play.module.scss';

// 검증된 EmulatorJS 설정/동작만 재사용. 레이아웃/스타일은 사이트 토큰으로 구성.
export default function ArcadePlay() {
  const romsBase = useBaseUrl('/arcade/roms/');
  const listUrl = useBaseUrl('/art/arcade');
  const [game, setGame] = useState<ArcadeGame | null>(null);
  const [padOn, setPadOn] = useState(false);
  const [barOn, setBarOn] = useState(false);
  const bootedRef = useRef(false);

  useEffect(() => {
    if (bootedRef.current) return;
    bootedRef.current = true;

    const rom = (new URLSearchParams(window.location.search).get('rom') || '')
      .replace(/[^a-zA-Z0-9_.-]/g, '');
    const g = ARCADE_GAMES.find((x) => x.rom === rom);
    if (!g) return;
    setGame(g);
    document.title = `${g.title} — Arcade`;

    const w = window as any;
    w.EJS_player = '#ejs-game';
    w.EJS_gameUrl = romsBase + rom;
    w.EJS_core = 'mame2003_plus';
    w.EJS_pathtodata = 'https://cdn.emulatorjs.org/stable/data/';
    w.EJS_startOnLoaded = true;
    w.EJS_language = 'en-US';
    w.EJS_disableAutoLang = false;
    w.EJS_color = '#25c2a0';
    // retropad 통일: 가상패드(방향+버튼) 완전 동작. 키보드는 EJS 기본키.
    w.EJS_defaultOptions = { 'mame2003-plus_input_interface': 'retropad' };

    const script = document.createElement('script');
    script.src = 'https://cdn.emulatorjs.org/stable/data/loader.js';
    document.body.appendChild(script);

    // 모바일(≤799px)이면 가상패드 기본 표시
    const small = window.matchMedia('(max-width:799px)').matches;
    let tries = 0;
    const timer = window.setInterval(() => {
      if (w.EJS_emulator?.toggleVirtualGamepad) {
        window.clearInterval(timer);
        if (small) { w.EJS_emulator.toggleVirtualGamepad(true); setPadOn(true); }
      } else if (++tries > 40) window.clearInterval(timer);
    }, 400);

    return () => {
      window.clearInterval(timer);
      try { w.EJS_emulator?.pause?.(); } catch (_) {}
    };
  }, [romsBase]);

  const togglePad = () => {
    const next = !padOn;
    (window as any).EJS_emulator?.toggleVirtualGamepad?.(next);
    setPadOn(next);
  };

  return (
    <Layout title={game ? `${game.title} — Arcade` : 'Arcade'} description="클래식 아케이드 플레이">
      <div className={clsx(styles.wrap, barOn && styles.showBar)}>
        {/* 네비바 + 에뮬레이터 = 100vh. 컨트롤은 프레임 위 오버레이(높이 차지 안 함) */}
        <div className={styles.playArea}>
          <div className={styles.controls}>
            <a className={styles.back} href={listUrl}>← 목록</a>
            <span className={styles.spacer} />
            <button
              className={clsx(styles.toggle, padOn && styles.on)}
              onClick={togglePad}
              title="가상 게임패드 표시/숨김"
            >🕹 가상패드</button>
            <button
              className={clsx(styles.toggle, barOn && styles.on)}
              onClick={() => setBarOn((v) => !v)}
              title="EmulatorJS 메뉴(세이브·설정) 표시/숨김"
            >⚙ 메뉴</button>
          </div>
          <div className={styles.frame}>
            <div id="ejs-game" className={styles.game} />
          </div>
        </div>

        {/* 아래로 스크롤: 게임 소개/팁 → 공용 조작키 */}
        <section className={styles.below}>
          <div className={styles.about}>
            <h1 className={styles.gameTitle}>{game?.title ?? 'Arcade'}</h1>
            {game && (
              <div className={styles.aboutMeta}>
                <span>{game.genre}</span>
                <span className={styles.dot}>·</span>
                <span>{game.maker} {game.year}</span>
              </div>
            )}
            {game && <p className={styles.blurb}>{game.blurb}</p>}
            {game && (
              <ul className={styles.tips}>
                {game.tips.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            )}
          </div>

          <div className={styles.guide}>
            <h2 className={styles.guideTitle}>조작키</h2>
            <div className={styles.cols}>
              <div>
                <h3 className={styles.colHead}>키보드</h3>
                <table className={styles.keys}>
                  <tbody>
                    <tr><td className={styles.k}><kbd>← ↑ ↓ →</kbd></td><td>이동</td></tr>
                    <tr><td className={styles.k}><kbd>V</kbd> / <kbd>Enter</kbd></td><td>코인 / 스타트</td></tr>
                    <tr><td className={styles.k}><kbd>Z</kbd> <kbd>X</kbd> <kbd>A</kbd> <kbd>S</kbd></td><td>버튼 (발사 등)</td></tr>
                    <tr><td className={styles.k}><kbd>Q</kbd> <kbd>E</kbd></td><td>숄더 L · R</td></tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h3 className={styles.colHead}>가상패드 🕹 (터치)</h3>
                <table className={styles.keys}>
                  <tbody>
                    <tr><td className={styles.k}>조이스틱</td><td>이동</td></tr>
                    <tr><td className={styles.k}>A / B / X / Y</td><td>버튼</td></tr>
                    <tr><td className={styles.k}>Select / Start</td><td>코인 / 스타트</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <p className={styles.note}>
              상단 <b>🕹 가상패드</b>로 화면 컨트롤 표시(모바일/터치용, 폭 좁으면 자동).
              세이브스테이트·화면설정은 <b>⚙ 메뉴</b>에서.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}
