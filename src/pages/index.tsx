import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.scss';
import AboutMe from '@site/src/components/AboutMe';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.title__header}>
      <div className={styles.filter}></div>
      <div className={styles.title__center}>
          <div className={styles.title__brand}>
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
        <AboutMe />
      </main>
    </Layout>
  );
}
