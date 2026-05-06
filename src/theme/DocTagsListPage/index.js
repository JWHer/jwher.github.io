import React from 'react';
import DocTagsListPage from '@theme-original/DocTagsListPage';
import SiteHero from '@site/src/components/SiteHero';

export default function DocTagsListPageWrapper(props) {
  return (
    <>
      <SiteHero
        bgImage="/img/docs/category.jpg"
        title="Docs"
        subtitle="God shall bless us; and all the ends of the earth shall fear him."
      />
      <DocTagsListPage {...props} />
    </>
  );
}
