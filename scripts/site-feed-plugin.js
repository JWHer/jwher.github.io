// Site-wide RSS/Atom feed covering ALL content (docs + blog), not just blog
// posts. The blog plugin's own feed is disabled (feedOptions.type = null) in
// docusaurus.config.js; this plugin emits /rss.xml and /atom.xml at build time
// from the auto-generated CONTENT_INDEX.
//
// CONTENT_INDEX lives in a .ts file we can't require() from Node, but its body
// is a plain JSON array — slice it out and parse.

const fs = require('fs');
const path = require('path');
const { Feed } = require('feed');

function loadContentIndex() {
  const src = fs.readFileSync(
    path.join(__dirname, '../src/data/content-index.ts'),
    'utf8',
  );
  // Start at the array literal in `CONTENT_INDEX: ContentItem[] = [ … ]`
  // (not the `[` inside the `string[]` type annotations above it).
  const marker = 'CONTENT_INDEX: ContentItem[] = ';
  const start = src.indexOf(marker) + marker.length;
  const json = src.slice(start, src.lastIndexOf(']') + 1);
  return JSON.parse(json);
}

module.exports = function siteFeedPlugin(context) {
  const { siteConfig } = context;
  return {
    name: 'site-feed',
    async postBuild({ outDir }) {
      const site = siteConfig.url; // https://jwher.github.io
      const year = new Date().getFullYear();

      const items = loadContentIndex()
        .filter((i) => i.date)
        .sort((a, b) => (a.date < b.date ? 1 : -1));

      const feed = new Feed({
        title: siteConfig.title,
        description: '허정원 기술블로그 — docs + blog 전체 글',
        id: `${site}/`,
        link: `${site}/`,
        language: 'ko',
        image: `${site}/img/bamboo-road.webp`,
        favicon: `${site}/img/logo.svg`,
        copyright: `Copyright © 2021 – ${year}, JeongWon Her`,
        updated: items[0] ? new Date(items[0].date) : undefined,
      });

      for (const it of items) {
        const url = site + it.path;
        feed.addItem({
          title: it.title,
          id: url,
          link: url,
          description: it.description,
          date: new Date(it.date),
          image: it.image ? site + it.image : undefined,
          category: (it.tags || []).map((name) => ({ name })),
        });
      }

      fs.writeFileSync(path.join(outDir, 'rss.xml'), feed.rss2());
      fs.writeFileSync(path.join(outDir, 'atom.xml'), feed.atom1());
    },
  };
};