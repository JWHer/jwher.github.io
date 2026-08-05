#!/usr/bin/env node
/**
 * add-docs-dates.js
 *
 * Adds `date:` frontmatter to docs .md files that don't already have one.
 * Date = first (oldest) git commit date for that file.
 * Skips: draft files, files without title, files with no git history.
 *
 * Usage:
 *   node scripts/add-docs-dates.js          # dry-run
 *   node scripts/add-docs-dates.js --apply  # write changes
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const matter = require('gray-matter');

const DOCS_DIR = path.join(__dirname, '..', 'docs');
const DRY_RUN = !process.argv.includes('--apply');

function walkMd(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results.push(...walkMd(full));
    else if (entry.isFile() && entry.name.endsWith('.md')) results.push(full);
  }
  return results;
}

function getFirstCommitDate(filePath) {
  try {
    const out = execSync(
      `git log --follow --format="%ai" -- "${filePath}"`,
      { encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] }
    ).trim();
    if (!out) return null;
    const lines = out.split('\n').filter(Boolean);
    return lines[lines.length - 1].slice(0, 10); // YYYY-MM-DD
  } catch {
    return null;
  }
}

let changed = 0, skipped = 0;

for (const filePath of walkMd(DOCS_DIR)) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const { data: fm, content } = matter(raw);

  if (!fm.title) { skipped++; continue; }
  if (fm.draft === true) { skipped++; continue; }
  if (fm.date) { skipped++; continue; }

  const date = getFirstCommitDate(filePath);
  if (!date) { skipped++; continue; }

  changed++;
  const rel = path.relative(process.cwd(), filePath);
  console.log(`${DRY_RUN ? '[dry]' : '[add]'} ${rel} → date: ${date}`);

  if (!DRY_RUN) {
    const newFm = { ...fm, date };
    const out = matter.stringify(content, newFm);
    fs.writeFileSync(filePath, out, 'utf8');
  }
}

console.log(`\n${DRY_RUN ? 'Would add' : 'Added'} date to ${changed} files, skipped ${skipped}.`);
if (DRY_RUN) console.log('Run with --apply to apply changes.');
