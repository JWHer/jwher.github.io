import React from 'react';
import Link from '@docusaurus/Link';
import { kebabCase } from '@site/src/utils/kebabCase';
import styles from './styles.module.scss';

export default function ContentCard({ title, path, date, description, tags = [], image, tagsBaseUrl }) {
  return (
    <article className="margin-bottom--xl">
      <header>
        {image && (
          <Link to={path} className={styles.imageLink}>
            <img src={image} alt={title} loading="lazy" className={styles.image} />
          </Link>
        )}
        <h2 className={styles.title}>
          <Link to={path}>{title}</Link>
        </h2>
        {date && (
          <div className={`${styles.info} margin-vert--md`}>
            <time dateTime={date}>{date.slice(0, 10)}</time>
          </div>
        )}
      </header>

      {description && (
        <div className="markdown">
          <p className={styles.desc}>{description}</p>
        </div>
      )}

      <footer className="row docusaurus-mt-lg">
        {tags.length > 0 && (
          <div className="col col--9">
            <div className={styles.tags}>
              {tags.map(tag => (
                <Link key={tag} to={`${tagsBaseUrl}/${kebabCase(tag)}`} className={styles.tag}>
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        )}
        <div className={`col text--right${tags.length > 0 ? ' col--3' : ''}`}>
          <Link to={path}><b>Read More</b></Link>
        </div>
      </footer>
    </article>
  );
}
