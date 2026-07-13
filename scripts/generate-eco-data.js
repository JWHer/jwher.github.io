#!/usr/bin/env node
// Converts lichess-org/chess-openings TSV to /static/chess/openings.json
// Run: node scripts/generate-eco-data.js

const fs = require('fs');
const path = require('path');
const { Chess } = require('chess.js');

const KO_NAMES = {
  'Ruy Lopez': '루이 로페즈',
  'Spanish Game': '스페인 게임',
  'Sicilian Defense': '시실리안 디펜스',
  'French Defense': '프렌치 디펜스',
  'Caro-Kann Defense': '카로-칸 디펜스',
  "King's Gambit": '킹스 갬빗',
  "Queen's Gambit": '퀸스 갬빗',
  "King's Indian Defense": '킹스 인디언 디펜스',
  "Queen's Indian Defense": '퀸스 인디언 디펜스',
  'Nimzo-Indian Defense': '님조-인디언 디펜스',
  'Grünfeld Defense': '그룬펠트 디펜스',
  "Alekhine's Defense": '알레킨 디펜스',
  'Dutch Defense': '더치 디펜스',
  'English Opening': '잉글리시 오프닝',
  "Réti Opening": '레티 오프닝',
  'Catalan Opening': '카탈란 오프닝',
  'Italian Game': '이탈리안 게임',
  'Scotch Game': '스코치 게임',
  "Petrov's Defense": '페트로프 디펜스',
  'Pirc Defense': '피르크 디펜스',
  'Modern Defense': '모던 디펜스',
  'Benoni Defense': '베노니 디펜스',
  'Benko Gambit': '벤코 갬빗',
  "Bird's Opening": '버드 오프닝',
  "King's Indian Attack": '킹스 인디언 어택',
  'London System': '런던 시스템',
};

function getKoName(name) {
  for (const [en, ko] of Object.entries(KO_NAMES)) {
    if (name.startsWith(en)) return ko;
  }
  return undefined;
}

function pgnToEpd(pgn) {
  const chess = new Chess();
  try {
    chess.loadPgn(pgn);
    const fen = chess.fen();
    return fen.split(' ').slice(0, 4).join(' ');
  } catch {
    return null;
  }
}

const tsvPath = path.join(__dirname, '../static/chess/eco_all.tsv');
const outPath = path.join(__dirname, '../static/chess/openings.json');

// Read all TSV volumes (pre-downloaded)
const raw = fs.readFileSync(tsvPath, 'utf8');
const lines = raw.split('\n').filter(l => l.trim() && !l.startsWith('eco\t'));

const openings = [];
let errors = 0;

for (const line of lines) {
  const [eco, name, pgn] = line.split('\t');
  if (!eco || !name || !pgn) continue;
  const epd = pgnToEpd(pgn.trim());
  if (!epd) { errors++; continue; }
  openings.push({ eco, name, nameKo: getKoName(name), pgn: pgn.trim(), epd });
}

fs.writeFileSync(outPath, JSON.stringify(openings));
console.log(`Generated ${openings.length} openings (${errors} errors) → ${outPath}`);
