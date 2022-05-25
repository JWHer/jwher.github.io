import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles['page-header']}>
      <div className={styles.filter}></div>
        <div className={styles['content-center']}>
            <div className={styles['title-brand']}>
                <h1 className={styles['presentation-title']}>JWHer Tech Blog</h1>
            </div>
            <h2 className={styles['presentation-subtitle']}>
                허정원 기술블로그
            </h2>
            <h6 className={styles['presentation-copyright']}>
                Copyright © 2022, JeongWon Her and/or its subsidiaries or affiliates.
            </h6>
            <div className={styles['moving-clouds']}></div>
        </div>
      {/* <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div> */}
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
