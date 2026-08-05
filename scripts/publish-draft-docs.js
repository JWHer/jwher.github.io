#!/usr/bin/env node
/**
 * publish-draft-docs.js
 *
 * Removes `draft: true` from docs pages that have substantial content (100+ words).
 * Stub pages (< 100 words) remain draft.
 *
 * Usage:
 *   node scripts/publish-draft-docs.js          # dry-run (shows what would change)
 *   node scripts/publish-draft-docs.js --apply  # apply changes
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const DOCS_DIR = path.join(__dirname, '..', 'docs');
const MIN_WORDS = 100;
const DRY_RUN = !process.argv.includes('--apply');

if (DRY_RUN) {
  console.log('DRY RUN — pass --apply to write changes\n');
}

function findDraftFiles(dir) {
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findDraftFiles(full));
    } else if (entry.name.endsWith('.md')) {
      const content = fs.readFileSync(full, 'utf8');
      if (/^draft:\s*true/m.test(content)) {
        results.push({ file: full, content });
      }
    }
  }
  return results;
}

function bodyWordCount(content) {
  // Strip YAML frontmatter (between first and second ---)
  const parts = content.split(/^---\s*$/m);
  if (parts.length < 3) return 0;
  const body = parts.slice(2).join('---');
  return body.trim().split(/\s+/).filter(w => w.length > 0).length;
}

const drafts = findDraftFiles(DOCS_DIR);
let published = 0;
let skipped = 0;

for (const { file, content } of drafts) {
  const words = bodyWordCount(content);
  const rel = path.relative(process.cwd(), file);

  if (words >= MIN_WORDS) {
    if (!DRY_RUN) {
      const updated = content.replace(/^draft:\s*true\n/m, '');
      fs.writeFileSync(file, updated, 'utf8');
    }
    console.log(`✓ publish  [${String(words).padStart(4)}w]  ${rel}`);
    published++;
  } else {
    console.log(`  skip     [${String(words).padStart(4)}w]  ${rel}`);
    skipped++;
  }
}

console.log(`\n${DRY_RUN ? '[DRY RUN] would publish' : 'Published'} ${published} files, skipped ${skipped} stubs`);
