import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.scss';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HomepageHeader() {
  document.addEventListener('scroll',()=>{
    if(window.scrollY<150){
      document.documentElement.style.setProperty(
        '--navbar-bg-color', 'transparent'
      );
      document.documentElement.style.setProperty(
        '--navbar-text-color', '#e3e3e3'
      );
    }else{
      document.documentElement.style.setProperty(
        '--navbar-bg-color',
        'var(--ifm-background-surface-color)'
      );
      document.documentElement.style.setProperty(
        '--navbar-text-color',
        'var(--ifm-navbar-link-color)'
      );
    }
  });
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
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
