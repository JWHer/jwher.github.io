import React from 'react';
import Layout from '@theme/Layout';
import SiteHero from '@site/src/components/SiteHero';
import ContentCard from '@site/src/components/ContentCard';
import {kebabCase} from '@site/src/utils/kebabCase';
import {CONTENT_INDEX} from '@site/src/data/content-index';

export default function DocTagDocListPage({tag}) {
  const tagItems = CONTENT_INDEX.filter(ci =>
    ci.path.startsWith('/docs/') &&
    ci.tags.some(t => kebabCase(t) === kebabCase(tag.label))
  );

  return (
    <Layout title={`${tag.label} — Docs`}>
      <SiteHero
        bgImage="/img/docs/category.webp"
        title="Docs"
        subtitle="God shall bless us; and all the ends of the earth shall fear him."
      />
      <div className="container margin-vert--lg">
        <h1>태그: <code>{tag.label}</code></h1>
        {tagItems.map(item => (
          <ContentCard
            key={item.path}
            title={item.title}
            path={item.path}
            date={item.date}
            description={item.description}
            tags={item.tags}
            image={item.image}
            tagsBaseUrl="/docs/tags"
          />
        ))}
      </div>
    </Layout>
  );
}
