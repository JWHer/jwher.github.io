import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.scss';
import AboutMe from '@site/src/components/AboutMe';
import CurriculumVitae from '../components/CurriculumVitae';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.title__header}>
      <div className={styles.filter}></div>
      <div className={styles.title__center}>
          <div className={styles.title__brand} onClick={() => {
            window.scrollTo({
              top: window.innerHeight - 60, // --ifm-navbar-height
              behavior: "smooth"
            })
          }}>
              <h1 className={styles.title__presentation__title}>JWHer Tech Blog</h1>
          </div>
          <h2 className={styles.title__presentation__subtitle}>
              허정원 기술블로그
          </h2>
          <h6 className={styles.title__presentation__copyright}>
              Copyright © 2022, JeongWon Her and/or its subsidiaries or affiliates.
          </h6>
          <div className={styles.title__moving__clouds}></div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`허정원 기술블로그`}
      description="JWHer Tech Blog">
      <HomepageHeader />
      <main>
        {/* <AboutMe /> */}
        <CurriculumVitae />
      </main>
      <span className={styles.arrowup} onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        })
      }}>
        ⌃
      </span>
      <div className="container" style={{padding: 0, maxWidth: "none"}}>
        <div className={styles.rainbow}>
          <div className={styles.rainbow__title}>
            Come unto me, all ye that labour and are heavy laden, and I will give you rest
          </div>
          <div className={styles.rainbow__text}>
            <br/><br/>
            세상엔 알지 못하는것이 참 많습니다.
            <br/>
            저는 죄인이였고 세상이라는 동굴에서 답을 찾아 헤멨습니다.
            <br/>
            어둠속에서 나왔을때,
            <br/>
            예수님은 저에게 더 큰 세상을 보여주셨습니다.
          </div>
        </div>
      </div>
    </Layout>
  );
}
