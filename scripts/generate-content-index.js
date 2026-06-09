// AUTO-RUN by prebuild/prestart — DO NOT require manual execution
// Scans docs/ and blog/ to regenerate src/data/content-index.ts

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const ROOT = path.resolve(__dirname, '..');
const OUTPUT = path.join(ROOT, 'src/data/content-index.ts');

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Converts a file path segment into URL-friendly keywords.
 * e.g. "api-design-for-long-jobs" → ["api", "design", "for", "long", "jobs"]
 */
function segmentKeywords(seg) {
  return seg
    .replace(/^\d+\./, '')      // strip numeric prefixes like "4.note4"
    .split(/[-_.]/)
    .filter(Boolean)
    .map(s => s.toLowerCase());
}

/**
 * Walk a directory recursively, returning all .md file paths.
 */
function walkMd(dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walkMd(full));
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      results.push(full);
    }
  }
  return results;
}

/**
 * Derive the URL path for a docs file.
 * docs/development/web/ngrx/index.md → /docs/development/web/ngrx
 * docs/pl/4.note4.md                → /docs/pl/note4
 */
function docsPath(filePath) {
  const rel = path.relative(path.join(ROOT, 'docs'), filePath);
  let parts = rel.split(path.sep);

  // Replace index with parent folder (already included)
  if (parts[parts.length - 1] === 'index.md') {
    parts = parts.slice(0, -1);
  } else {
    // Strip extension and numeric prefix (dot or underscore: "4.note4" → "note4", "07_stream" → "stream")
    let last = parts[parts.length - 1].replace(/\.md$/, '').replace(/^\d+[._]/, '');
    // Docusaurus 3 treats {folder}/{folder}.md the same as {folder}/index.md
    // (category-index equivalent) — use the folder path to avoid duplicate segments
    const parentFolder = parts.length >= 2 ? parts[parts.length - 2] : '';
    if (last === parentFolder) {
      parts = parts.slice(0, -1);
    } else {
      parts = [...parts.slice(0, -1), last];
    }
  }

  return '/docs/' + parts.join('/');
}

/**
 * Derive the URL path for a blog file.
 * Docusaurus blog: uses `slug` from frontmatter if present,
 * otherwise strips date prefix from folder/filename.
 *   blog/2022-05-dockershim-removal/index.md + slug: dockershim-removal → /blog/dockershim-removal
 *   blog/2021-08-23-blog-tech-map/index.md (no slug) → /blog/blog-tech-map
 */
function blogPath(filePath, fm) {
  if (fm.slug) {
    return '/blog/' + fm.slug.replace(/^\//, '');
  }

  const rel = path.relative(path.join(ROOT, 'blog'), filePath);
  let parts = rel.split(path.sep);

  // Strip index.md / .md extension
  if (parts[parts.length - 1] === 'index.md') {
    parts = parts.slice(0, -1);
  } else {
    parts[parts.length - 1] = parts[parts.length - 1].replace(/\.md$/, '');
  }

  // Strip YYYY-MM-DD- or YYYY-MM- date prefix from top-level segment
  parts[0] = parts[0].replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/^\d{4}-\d{2}-/, '');

  return '/blog/' + parts.join('/');
}

/**
 * Extract a date string (YYYY-MM-DD or YYYY-MM) from frontmatter or folder name.
 */
function extractDate(filePath, fm) {
  if (fm.date) return String(fm.date).slice(0, 10);
  const rel = path.relative(path.join(ROOT, 'blog'), filePath);
  const topFolder = rel.split(path.sep)[0];
  const match = topFolder.match(/^(\d{4}-\d{2}(?:-\d{2})?)/);
  return match ? match[1] : null;
}

// ---------------------------------------------------------------------------
// Scan docs/
// ---------------------------------------------------------------------------
function scanDocs() {
  const items = [];
  const docsDir = path.join(ROOT, 'docs');

  for (const filePath of walkMd(docsDir)) {
    const raw = fs.readFileSync(filePath, 'utf8');
    const { data: fm } = matter(raw);

    if (!fm.title) continue; // skip files without a title
    if (fm.draft === true) continue;

    const urlPath = docsPath(filePath);
    const pathParts = urlPath.replace('/docs/', '').split('/');
    const keywords = [...new Set(pathParts.flatMap(segmentKeywords))];

    items.push({
      title: fm.title,
      path: urlPath,
      description: fm.description || fm.title,
      tags: Array.isArray(fm.tags) ? fm.tags : [],
      keywords,
      ...(fm.date ? { date: String(fm.date).slice(0, 10) } : {}),
      ...(fm.image && fm.image.startsWith('/') ? { image: fm.image } : {}),
    });
  }

  return items;
}

// ---------------------------------------------------------------------------
// Scan blog/
// ---------------------------------------------------------------------------
function scanBlog() {
  const items = [];
  const blogDir = path.join(ROOT, 'blog');

  for (const filePath of walkMd(blogDir)) {
    const raw = fs.readFileSync(filePath, 'utf8');
    const { data: fm } = matter(raw);

    if (!fm.title) continue;
    if (fm.draft === true) continue;

    const urlPath = blogPath(filePath, fm);
    const pathParts = urlPath.replace('/blog/', '').split('/');
    const keywords = [...new Set(pathParts.flatMap(segmentKeywords))];
    const date = extractDate(filePath, fm);

    items.push({
      title: fm.title,
      path: urlPath,
      description: fm.description || fm.title,
      tags: Array.isArray(fm.tags) ? fm.tags : [],
      keywords,
      ...(date ? { date } : {}),
      ...(fm.image && fm.image.startsWith('/') ? { image: fm.image } : {}),
    });
  }

  return items;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
const docsItems = scanDocs();
const blogItems = scanBlog();

// Both: newest first
blogItems.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
docsItems.sort((a, b) => (b.date || '').localeCompare(a.date || ''));

const allItems = [...blogItems, ...docsItems];

const tsOutput = `// AUTO-GENERATED by scripts/generate-content-index.js
// DO NOT EDIT MANUALLY — regenerated on every \`npm run build\` and \`npm run start\`

export type ContentItem = {
  title: string;
  path: string;
  description: string;
  tags: string[];
  keywords: string[];
  date?: string;
  image?: string;
};

export const CONTENT_INDEX: ContentItem[] = ${JSON.stringify(allItems, null, 2)};
`;

fs.writeFileSync(OUTPUT, tsOutput, 'utf8');
console.log(`[generate-content-index] ${allItems.length} items written to src/data/content-index.ts`);
console.log(`  docs: ${docsItems.length}, blog: ${blogItems.length}`);
