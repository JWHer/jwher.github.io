import React, { useState } from 'react';
import Layout from '@theme/Layout';
import { CONTENT_INDEX } from '@site/src/data/content-index';
import SiteHero from '@site/src/components/SiteHero';
import ContentCard from '@site/src/components/ContentCard';

import styles from './search.module.scss';

// Compute popular tags from CONTENT_INDEX (sorted by frequency)
const TAG_COUNTS: Record<string, number> = {};
CONTENT_INDEX.forEach(item =>
  item.tags.forEach(t => { TAG_COUNTS[t] = (TAG_COUNTS[t] || 0) + 1; })
);
const POPULAR_TAGS = Object.entries(TAG_COUNTS)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 24)
  .map(([tag]) => tag);

function itemTagsBase(path: string): string {
  return path.startsWith('/blog/') ? '/blog/tags' : '/docs/tags';
}

export default function SearchPage() {
  const [query, setQuery] = useState('');

  const q = query.toLowerCase().trim();
  const results = q.length > 1
    ? CONTENT_INDEX.filter(item =>
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.keywords.some(k => k.includes(q)) ||
        item.tags.some(t => t.includes(q))
      ).slice(0, 20)
    : [];

  return (
    <Layout title="검색" description="블로그 콘텐츠 검색">
      <SiteHero
        bgImage="/img/about-me/sea-cave.jpg"
        title="Search"
        subtitle="It is the glory of God to conceal a thing: but the honour of kings is to search out a matter."
      />

      {/* ── Search UI ── */}
      <div className={styles.container}>
        <input
          className={styles.input}
          autoFocus
          placeholder="검색어를 입력하세요..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          aria-label="검색어"
        />

        {/* Popular tags (shown when no query) */}
        {q.length <= 1 && (
          <div className={styles.popularTags}>
            <p className={styles.popularTagsLabel}>인기 태그</p>
            <div className={styles.popularTagsRow}>
              {POPULAR_TAGS.map(tag => (
                <button
                  key={tag}
                  type="button"
                  className={styles.popularTag}
                  onClick={() => setQuery(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}

        {q.length > 1 && (
          <p className={styles.count}>
            {results.length > 0 ? `${results.length}개 결과` : '검색 결과가 없습니다.'}
          </p>
        )}

        <div className={styles.results}>
          {results.map(item => (
            <ContentCard
              key={item.path}
              title={item.title}
              path={item.path}
              date={item.date}
              description={item.description}
              tags={item.tags}
              image={item.image}
              tagsBaseUrl={itemTagsBase(item.path)}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
