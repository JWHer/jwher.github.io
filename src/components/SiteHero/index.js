import React from 'react';
import styles from './styles.module.scss';

export default function SiteHero({ bgImage, title, subtitle, style, fixed }) {
  return (
    <div
      className={`${styles.header}${fixed ? ` ${styles.headerFixed}` : ''}`}
      style={{ backgroundImage: `url(${bgImage})`, ...style }}
      data-hero={fixed ? 'fixed' : 'static'}
    >
      <div className={styles.filter} />
      {fixed ? (
        <>
          <div className={styles.titleWrap}>
            <h2 className="presentation__title">{title}</h2>
            {subtitle && <h6 className="presentation__subtitle">{subtitle}</h6>}
          </div>
          <div className={styles.scrollChevron} aria-hidden />
        </>
      ) : (
        <>
          <h2 className="presentation__title">{title}</h2>
          {subtitle && <h6 className="presentation__subtitle">{subtitle}</h6>}
        </>
      )}
    </div>
  );
}
