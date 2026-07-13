#!/usr/bin/env node
// Build /static/chess/positions.db from PGN files.
//
// Usage:
//   node scripts/build-position-stats.js [--pgn-dir <dir>] [--max-ply <n>]
//
// Reads PGN files from --pgn-dir (default: scripts/pgn-source/) and writes
// a SQLite database to static/chess/positions.db.
//
// Schema:
//   positions(epd TEXT PK, white INT, draws INT, black INT)
//   position_moves(epd TEXT, san TEXT, white INT, draws INT, black INT, PK(epd,san))
//
// Steps:
//   1. Download PGN files from pgnmentor.com (see README or do manually)
//   2. Place them under scripts/pgn-source/
//   3. Run this script

const fs = require('fs');
const path = require('path');
const { Chess } = require('chess.js');
const Database = require('better-sqlite3');

const args = process.argv.slice(2);
const pgnDir = args[args.indexOf('--pgn-dir') + 1] ?? path.join(__dirname, 'pgn-source');
const maxPly = parseInt(args[args.indexOf('--max-ply') + 1] ?? '40', 10);
const outPath = path.join(__dirname, '../static/chess/positions.db');

if (!fs.existsSync(pgnDir)) {
  console.error(`PGN source dir not found: ${pgnDir}`);
  console.error('Create the directory and add PGN files from pgnmentor.com');
  process.exit(1);
}

const pgnFiles = fs.readdirSync(pgnDir).filter((f) => f.endsWith('.pgn'));
console.log(`Found ${pgnFiles.length} PGN files in ${pgnDir}`);

// In-memory accumulator: { epd → { white, draws, black, moves: { san → {w,d,b} } } }
const stats = new Map();

function getOrCreate(epd) {
  if (!stats.has(epd)) stats.set(epd, { white: 0, draws: 0, black: 0, moves: new Map() });
  return stats.get(epd);
}

function fenToEpd(fen) {
  return fen.split(' ').slice(0, 4).join(' ');
}

function outcomeKey(result) {
  if (result === '1-0') return 'white';
  if (result === '0-1') return 'black';
  return 'draws';
}

let totalGames = 0;
let errorGames = 0;

for (const file of pgnFiles) {
  const raw = fs.readFileSync(path.join(pgnDir, file), 'utf8');
  // Split on double newline followed by '[' (multi-game PGN)
  const games = raw.split(/\n\n(?=\[)/);

  for (const gamePgn of games) {
    if (!gamePgn.trim()) continue;
    try {
      const chess = new Chess();
      chess.loadPgn(gamePgn);
      const result = chess.header().Result ?? '*';
      if (result === '*') continue; // skip unfinished games

      const key = outcomeKey(result);
      const history = chess.history({ verbose: true });

      const replay = new Chess();
      let ply = 0;

      while (ply < Math.min(history.length, maxPly)) {
        const epd = fenToEpd(replay.fen());
        const pos = getOrCreate(epd);
        pos[key]++;

        const move = history[ply];
        const moveStat = pos.moves.get(move.san) ?? { white: 0, draws: 0, black: 0 };
        moveStat[key]++;
        pos.moves.set(move.san, moveStat);

        replay.move(move.san);
        ply++;
      }

      totalGames++;
      if (totalGames % 10000 === 0) process.stdout.write(`\r  Processed ${totalGames} games, ${stats.size} positions...`);
    } catch {
      errorGames++;
    }
  }
}

console.log(`\nProcessed ${totalGames} games (${errorGames} errors), ${stats.size} unique positions`);

// Write SQLite DB
if (fs.existsSync(outPath)) fs.unlinkSync(outPath);
const db = new Database(outPath);

db.exec(`
  CREATE TABLE positions (
    epd TEXT PRIMARY KEY,
    white INTEGER NOT NULL,
    draws INTEGER NOT NULL,
    black INTEGER NOT NULL
  );
  CREATE TABLE position_moves (
    epd TEXT NOT NULL,
    san TEXT NOT NULL,
    white INTEGER NOT NULL,
    draws INTEGER NOT NULL,
    black INTEGER NOT NULL,
    PRIMARY KEY (epd, san)
  );
`);

const insertPos = db.prepare('INSERT INTO positions VALUES (?, ?, ?, ?)');
const insertMove = db.prepare('INSERT INTO position_moves VALUES (?, ?, ?, ?, ?)');

const insertAll = db.transaction(() => {
  for (const [epd, data] of stats) {
    insertPos.run(epd, data.white, data.draws, data.black);
    for (const [san, mv] of data.moves) {
      insertMove.run(epd, san, mv.white, mv.draws, mv.black);
    }
  }
});

insertAll();
db.close();

const size = (fs.statSync(outPath).size / 1024 / 1024).toFixed(1);
console.log(`Written: ${outPath} (${size} MB)`);
