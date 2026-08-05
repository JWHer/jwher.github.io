import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { ARCADE_GAMES } from '@site/src/data/arcade-games';
import styles from './arcade.module.scss';

export default function ArcadePage() {
  const playBase = useBaseUrl('/art/arcade/play');
  const thumbBase = useBaseUrl('/arcade/thumbs/');
  return (
    <Layout title="Arcade" description="EmulatorJS(WASM)로 바로 즐기는 클래식 아케이드 12선.">
      <Head>
        <meta property="og:title" content="Arcade — 클래식 아케이드 12선" />
        <meta property="og:image" content="https://jwher.github.io/img/art/arcade-og.webp" />
        <meta name="twitter:image" content="https://jwher.github.io/img/art/arcade-og.webp" />
      </Head>
      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.h1}>Arcade</h1>
          <p className={styles.sub}>
            <a href="https://emulatorjs.org" target="_blank" rel="noreferrer">EmulatorJS</a>(WASM)로 바로 즐기는 클래식 아케이드 12선.
          </p>
        </header>

        <div className={styles.grid}>
          {ARCADE_GAMES.map((g) => (
            <a key={g.rom} className={styles.card} href={`${playBase}?rom=${g.rom}`}>
              <img
                className={styles.bg}
                src={`${thumbBase}${g.rom.replace('.zip', '')}.webp`}
                alt={g.title}
                loading="lazy"
              />
              {/* 기본: 이미지 위 제목 */}
              <div className={styles.label}>
                <span className={styles.title}>{g.title}</span>
                <span className={styles.year}>{g.year}</span>
              </div>
              {/* 호버: 다크 오버레이 + 설명 (페이드) */}
              <div className={styles.overlay}>
                <div className={styles.cardTop}>
                  <span className={styles.title}>{g.title}</span>
                  <span className={styles.year}>{g.year}</span>
                </div>
                <div className={styles.meta}>{g.genre} · {g.maker}</div>
                <p className={styles.blurb}>{g.blurb}</p>
              </div>
            </a>
          ))}
        </div>

        <p className={styles.disclaimer}>
          게임 데이터(ROM)의 저작권은 각 원저작권자(또는 승계자)에게 있습니다. 개인 소장 목적의 데모입니다.
        </p>
      </main>
    </Layout>
  );
}
