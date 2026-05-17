#!/usr/bin/env node
// Build redirect mappings from references/uncommitted-files/redirects.json
// Maps old /posts/<slug> URLs to current /docs/<category>/<slug> paths.
// Verifies each target exists in docs/ before including.

const fs = require('fs');
const path = require('path');

const SOURCE = path.join(__dirname, '..', 'references', 'uncommitted-files', 'redirects.json');
const OUT = path.join(__dirname, '..', 'src', 'data', 'redirects.json');
const DOCS_ROOT = path.join(__dirname, '..', 'docs');
const BLOG_ROOT = path.join(__dirname, '..', 'blog');

const oldRedirects = JSON.parse(fs.readFileSync(SOURCE, 'utf8'));

// Build set of existing doc paths: relative to docs/, no extension, dirname for index.md
function walk(dir, out = new Set(), prefix = '') {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    const rel = prefix ? `${prefix}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      walk(full, out, rel);
    } else if (entry.name === 'index.md' || entry.name === 'index.mdx') {
      out.add(prefix);
    } else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) {
      out.add(rel.replace(/\.(md|mdx)$/, ''));
    }
  }
  return out;
}

const docPaths = walk(DOCS_ROOT);

// Build set of blog slugs (from frontmatter slug or folder name)
function listBlogSlugs() {
  const slugs = new Map(); // slug → published URL path
  for (const dir of fs.readdirSync(BLOG_ROOT, { withFileTypes: true })) {
    if (!dir.isDirectory()) continue;
    const indexPath = path.join(BLOG_ROOT, dir.name, 'index.md');
    if (!fs.existsSync(indexPath)) continue;
    const content = fs.readFileSync(indexPath, 'utf8');
    const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (!fmMatch) continue;
    const fm = fmMatch[1];
    if (/^draft:\s*true/m.test(fm)) continue;
    const slugMatch = fm.match(/^slug:\s*(.+)$/m);
    const slug = slugMatch ? slugMatch[1].trim().replace(/^['"]|['"]$/g, '') : dir.name.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/^\d{4}-\d{2}-/, '');
    // Docusaurus blog default URL: /blog/<slug>
    slugs.set(slug, `/blog/${slug}`);
  }
  return slugs;
}

const blogSlugs = listBlogSlugs();

const newRedirects = [];
const skipped = [];

for (const r of oldRedirects) {
  const fromSlug = r.from.replace(/^\/posts\//, '');
  // Extract category from old /categories/<cat>/<slug>/<slug>
  const oldTo = r.to.replace(/^\/categories\//, '');
  const parts = oldTo.split('/');
  const category = parts.slice(0, -2).join('/');
  const candidateDoc = `${category}/${fromSlug}`;

  if (docPaths.has(candidateDoc)) {
    newRedirects.push({ from: r.from, to: `/docs/${candidateDoc}` });
  } else if (blogSlugs.has(fromSlug)) {
    newRedirects.push({ from: r.from, to: blogSlugs.get(fromSlug) });
  } else {
    skipped.push({ ...r, candidateDoc, reason: 'no matching doc or blog' });
  }
}

fs.writeFileSync(OUT, JSON.stringify(newRedirects, null, 2));
console.log(`Wrote ${newRedirects.length} redirects to ${path.relative(process.cwd(), OUT)}`);
console.log(`Skipped ${skipped.length}:`);
for (const s of skipped) {
  console.log(`  ${s.from}  (looked for docs/${s.candidateDoc})`);
}
