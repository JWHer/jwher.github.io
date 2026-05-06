import React from 'react';
import styles from './styles.module.scss';

export default function SiteHero({ bgImage, title, subtitle, style }) {
  return (
    <div className={styles.header} style={{ backgroundImage: `url(${bgImage})`, ...style }}>
      <div className={styles.filter} />
      <h2 className="presentation__title">{title}</h2>
      {subtitle && <h6 className="presentation__subtitle">{subtitle}</h6>}
    </div>
  );
}
