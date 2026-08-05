#!/usr/bin/env node
// Pre-fetch Lichess Opening Explorer data for all ECO positions.
// Produces:
//   static/chess/positions-offline.json  (browser offline fallback)
//   static/chess/positions.db            (SQLite, optional)
//
// Usage:
//   LICHESS_TOKEN=lip_xxx node scripts/prefetch-lichess-stats.js
//   node scripts/prefetch-lichess-stats.js [--throttle-ms 200] [--min-games 3]
//
// Token: get a free personal access token at https://lichess.org/account/oauth/token
//        (no special scopes needed — any token works for the opening explorer)
//
// Runtime: ~10-15 min for all 3,733 ECO positions (throttled to be polite).
// Re-running is safe: skips EPDs already in the output JSON.

const fs = require('fs');
const path = require('path');

const LICHESS_TOKEN = process.env.LICHESS_TOKEN || '';
if (!LICHESS_TOKEN) {
  console.error('Error: LICHESS_TOKEN env var is required.');
  console.error('  Get a free token at: https://lichess.org/account/oauth/token');
  console.error('  Usage: LICHESS_TOKEN=lip_xxx node scripts/prefetch-lichess-stats.js');
  process.exit(1);
}

const args = process.argv.slice(2);
const THROTTLE_MS = parseInt(args[args.indexOf('--throttle-ms') + 1] ?? '200', 10);
const MIN_GAMES = parseInt(args[args.indexOf('--min-games') + 1] ?? '3', 10);

const openingsPath = path.join(__dirname, '../static/chess/openings.json');
const outJsonPath = path.join(__dirname, '../static/chess/positions-offline.json');
const outDbPath = path.join(__dirname, '../static/chess/positions.db');

if (!fs.existsSync(openingsPath)) {
  console.error('Run generate-eco-data.js first to create openings.json');
  process.exit(1);
}

const openings = JSON.parse(fs.readFileSync(openingsPath, 'utf8'));

// Deduplicate EPDs — keep one entry per unique EPD
const epdMap = new Map(); // epd → { eco, name, pgn }
for (const o of openings) {
  if (!epdMap.has(o.epd)) epdMap.set(o.epd, o);
}
console.log(`${epdMap.size} unique EPDs from ${openings.length} openings`);

// Load existing output to allow resume
let existing = {};
if (fs.existsSync(outJsonPath)) {
  existing = JSON.parse(fs.readFileSync(outJsonPath, 'utf8'));
  console.log(`Resuming: ${Object.keys(existing).length} EPDs already fetched`);
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchMasters(epd) {
  // Reconstruct minimal FEN from EPD (add halfmove + fullmove)
  const fen = `${epd} 0 1`;
  const url =
    `https://explorer.lichess.ovh/masters?fen=${encodeURIComponent(fen)}` +
    `&topGames=0&recentGames=0`;
  const res = await fetch(url, {
    signal: AbortSignal.timeout(8000),
    headers: { 'Authorization': `Bearer ${LICHESS_TOKEN}` },
  });
  if (!res.ok) {
    if (res.status === 401) throw new Error('Invalid LICHESS_TOKEN — check your token at lichess.org');
    return null;
  }
  const data = await res.json();
  return data;
}

function fenToEpd(fen) {
  return fen.split(' ').slice(0, 4).join(' ');
}

async function fetchAndStore(epd) {
  const data = await fetchMasters(epd);
  const totalGames = (data?.white ?? 0) + (data?.draws ?? 0) + (data?.black ?? 0);

  if (data?.moves?.length && totalGames >= MIN_GAMES) {
    const movesEntry = {};
    for (const m of data.moves) {
      const total = m.white + m.draws + m.black;
      if (total >= MIN_GAMES) movesEntry[m.san] = [m.white, m.draws, m.black];
    }
    existing[epd] = Object.keys(movesEntry).length ? movesEntry : null;
  } else {
    existing[epd] = null;
  }
}

function buildSqlite(withData) {
  try {
    const Database = require('better-sqlite3');
    if (fs.existsSync(outDbPath)) fs.unlinkSync(outDbPath);
    const db = new Database(outDbPath);
    db.exec(`
      CREATE TABLE position_moves (
        epd TEXT NOT NULL,
        san TEXT NOT NULL,
        white INTEGER NOT NULL,
        draws INTEGER NOT NULL,
        black INTEGER NOT NULL,
        PRIMARY KEY (epd, san)
      );
      CREATE INDEX idx_epd ON position_moves (epd);
    `);
    const ins = db.prepare('INSERT INTO position_moves VALUES (?, ?, ?, ?, ?)');
    db.transaction(() => {
      for (const [epd, moves] of Object.entries(withData)) {
        for (const [san, [w, d, b]] of Object.entries(moves)) {
          ins.run(epd, san, w, d, b);
        }
      }
    })();
    db.close();
    const sizeMb = (fs.statSync(outDbPath).size / 1024 / 1024).toFixed(2);
    console.log(`SQLite written: ${outDbPath} (${sizeMb} MB)`);
  } catch (e) {
    console.log(`SQLite skipped: ${e.message}`);
  }
}

(async () => {
  // ── Phase 1: ECO openings ───────────────────────────────────────────────
  console.log('\nPhase 1: ECO openings');
  let fetched = 0, skipped = 0, errors = 0;
  const entries = [...epdMap.entries()];

  for (let i = 0; i < entries.length; i++) {
    const [epd] = entries[i];
    if (existing[epd] !== undefined) { skipped++; continue; }

    try {
      await fetchAndStore(epd);
      fetched++;
    } catch (e) {
      if (e.message.includes('Invalid LICHESS_TOKEN')) { console.error('\n' + e.message); process.exit(1); }
      existing[epd] = null;
      errors++;
    }

    if ((fetched + errors) % 100 === 0) {
      fs.writeFileSync(outJsonPath, JSON.stringify(existing));
      process.stdout.write(`\r  ${i + 1}/${entries.length} (${fetched} fetched, ${skipped} skipped, ${errors} err)...`);
    }
    await sleep(THROTTLE_MS);
  }
  fs.writeFileSync(outJsonPath, JSON.stringify(existing));
  console.log(`\nPhase 1 done: ${fetched} fetched, ${skipped} skipped, ${errors} errors`);

  // ── Phase 2: Positions from PGN game files ──────────────────────────────
  const gamesDir = path.join(__dirname, '../static/chess/games');
  const pgnFiles = fs.existsSync(gamesDir)
    ? fs.readdirSync(gamesDir).filter(f => f.endsWith('.pgn'))
    : [];

  if (pgnFiles.length > 0) {
    console.log(`\nPhase 2: ${pgnFiles.length} PGN files`);
    const { Chess } = await import('chess.js');

    const pgnEpds = new Set();
    for (const file of pgnFiles) {
      try {
        const pgnText = fs.readFileSync(path.join(gamesDir, file), 'utf8');
        const game = new Chess();
        game.loadPgn(pgnText);
        const replay = new Chess();
        pgnEpds.add(fenToEpd(replay.fen()));
        for (const m of game.history({ verbose: true })) {
          replay.move(m.san);
          pgnEpds.add(fenToEpd(replay.fen()));
        }
      } catch (e) {
        console.log(`  Skipped ${file}: ${e.message}`);
      }
    }

    const phase2 = [...pgnEpds].filter(epd => existing[epd] === undefined);
    console.log(`  ${pgnEpds.size} positions total, ${phase2.length} not yet fetched`);

    let p2f = 0, p2e = 0;
    for (let i = 0; i < phase2.length; i++) {
      try {
        await fetchAndStore(phase2[i]);
        p2f++;
      } catch {
        existing[phase2[i]] = null;
        p2e++;
      }
      if ((p2f + p2e) % 50 === 0) {
        fs.writeFileSync(outJsonPath, JSON.stringify(existing));
        process.stdout.write(`\r  ${i + 1}/${phase2.length} (${p2f} fetched, ${p2e} err)...`);
      }
      await sleep(THROTTLE_MS);
    }
    fs.writeFileSync(outJsonPath, JSON.stringify(existing));
    console.log(`\nPhase 2 done: ${p2f} positions fetched`);
  }

  // ── Final output ────────────────────────────────────────────────────────
  const withData = Object.fromEntries(Object.entries(existing).filter(([, v]) => v !== null));
  const posCount = Object.keys(withData).length;
  const moveCount = Object.values(withData).reduce((n, m) => n + Object.keys(m).length, 0);
  console.log(`\nTotal: ${posCount} positions, ${moveCount} moves`);

  // Keep a full copy for resume (includes nulls)
  const resumePath = outJsonPath.replace('.json', '-resume.json');
  fs.writeFileSync(resumePath, JSON.stringify(existing));

  // Final JSON (non-null only) — kept for reference / small deploys
  fs.writeFileSync(outJsonPath, JSON.stringify(withData));
  console.log(`JSON written: ${outJsonPath}`);

  // Build SQLite
  buildSqlite(withData);
})();
