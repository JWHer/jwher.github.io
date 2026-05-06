// MANUAL SCRIPT — run once to populate `image:` frontmatter from post content
// Usage: node scripts/update-frontmatter-images.js
//
// For each post in posts/:
//   1. Find the first markdown image ![alt](path) before <!-- truncate -->
//   2. Add/update `image:` in frontmatter (renames `images:` plural if present)

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const ROOT = path.resolve(__dirname, '..');
const POSTS_DIR = path.join(ROOT, 'posts');

const IMG_RE = /!\[.*?\]\((.+?)\)/;

function processPost(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const parsed = matter(raw);
  const fm = parsed.data;
  const content = parsed.content;

  // Rename images: (plural) → image: if present
  let changed = false;
  if (fm.images && !fm.image) {
    fm.image = fm.images;
    delete fm.images;
    changed = true;
    console.log(`  [renamed] images → image: ${fm.image}`);
  }

  // Only look for image if not already set
  if (!fm.image) {
    const beforeTruncate = content.includes('<!-- truncate -->')
      ? content.split('<!-- truncate -->')[0]
      : content;

    const match = IMG_RE.exec(beforeTruncate);
    if (match) {
      fm.image = match[1];
      changed = true;
      console.log(`  [added] image: ${fm.image}`);
    }
  }

  if (changed) {
    const updated = matter.stringify(parsed.content, fm);
    fs.writeFileSync(filePath, updated, 'utf8');
  }

  return changed;
}

function walkPosts(dir) {
  let updated = 0;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      updated += walkPosts(full);
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      const rel = path.relative(ROOT, full);
      process.stdout.write(`${rel} ... `);
      const changed = processPost(full);
      if (!changed) console.log('(no change)');
    }
  }
  return updated;
}

console.log('Scanning posts/ for frontmatter image fields...\n');
walkPosts(POSTS_DIR);
console.log('\nDone. Re-run `npm run build` to regenerate content-index.');
