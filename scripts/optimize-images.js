#!/usr/bin/env node
// Convert large JPEGs to WebP for hero/background images.
// Run manually after adding/replacing source images.

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const STATIC = path.join(__dirname, '..', 'static');

// Hero/background images used via CSS or SiteHero bgImage.
// quality: WebP quality (80 is a good balance for photographic hero images).
// maxWidth: cap width to avoid serving needlessly large hero images on mobile.
const TARGETS = [
  { src: 'img/blog/library.jpg',                quality: 80, maxWidth: 2400 },
  { src: 'img/docs/category.jpg',               quality: 80, maxWidth: 2400 },
  { src: 'img/about-me/sea-cave.jpg',           quality: 80, maxWidth: 2400 },
  { src: 'img/notfound/under-construction.jpg', quality: 82, maxWidth: 2000 },
  { src: 'img/bamboo-road.jpg',                 quality: 80, maxWidth: 2400 },
];

async function optimize({ src, quality, maxWidth }) {
  const srcPath = path.join(STATIC, src);
  const dstPath = srcPath.replace(/\.(jpe?g|png)$/i, '.webp');
  if (!fs.existsSync(srcPath)) {
    console.log(`SKIP ${src} (not found)`);
    return;
  }
  const beforeBytes = fs.statSync(srcPath).size;
  await sharp(srcPath)
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality })
    .toFile(dstPath);
  const afterBytes = fs.statSync(dstPath).size;
  const pct = ((1 - afterBytes / beforeBytes) * 100).toFixed(1);
  console.log(
    `OK   ${src.padEnd(45)} ${fmt(beforeBytes).padStart(8)} → ${fmt(afterBytes).padStart(8)} (-${pct}%)`
  );
}

function fmt(bytes) {
  if (bytes >= 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(1)}MB`;
  if (bytes >= 1024) return `${Math.round(bytes / 1024)}KB`;
  return `${bytes}B`;
}

(async () => {
  for (const t of TARGETS) {
    await optimize(t);
  }
})();
