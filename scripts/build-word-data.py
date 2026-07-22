#!/usr/bin/env python3
"""Build static word-vector data for /art/word-questions from FastText cc.ko.300.vec.

Outputs (committed to git):
  static/word-questions/words-v1.json    -- JSON array of words; array index = word id
  static/word-questions/vecs-v1.bin      -- int8[N][300] row-major, row i = vector of word id i
  static/word-questions/secrets-v1.json  -- JSON array of word ids eligible as daily secrets

Word ids are frequency order (cc.ko.300.vec is sorted by corpus frequency).
Vectors are per-word symmetric int8 quantized (q = round(v / (max|v| / 127))).
No scale is stored: cosine similarity is invariant under per-vector positive scaling.

The guessable vocabulary is broad (Hangul tokens including particle-attached
forms and verbs) but pruned of crawl noise via kiwipiepy: tokens absent from
its dictionary (glued scraping fragments like "보기힐튼", "트립어드바이저") and
obscure proper nouns (single-token NNP ranked below the frequent band, e.g.
"박연차" — while common ones like "미국"/"서울" stay) are dropped. Daily secrets
are restricted to clean common nouns, curated via scripts/secret-words.txt (one
word per line, committed): when that file exists it IS the secret pool
(whitelist); when it doesn't, an automatic pick (kiwipiepy: single NNG morpheme
within the frequent band) generates both the pool and the file for human
review. To prune bad answers, delete lines from the file and re-run with
--secrets-only.

Usage:
  1. Download the source vectors (kept out of git, ~1.3GB gz / ~4.5GB unpacked):
       mkdir -p scripts/word-source
       curl -L -o scripts/word-source/cc.ko.300.vec.gz \
         https://dl.fbaipublicfiles.com/fasttext/vectors-crawl/cc.ko.300.vec.gz
       gunzip -k scripts/word-source/cc.ko.300.vec.gz
  2. pip install numpy kiwipiepy   (tested with numpy 1.26.4, kiwipiepy 0.23.2, Python 3.9)
  3. python3 scripts/build-word-data.py [--vec PATH] [--vocab 90000]
       [--secret-band 30000] [--nnp-cutoff 8000] [--verify]

Regenerate only secrets-v1.json after editing secret-words.txt (no .vec needed):
  python3 scripts/build-word-data.py --secrets-only
"""

import argparse
import json
import os
import re
import sys
import unicodedata

import numpy as np

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DEFAULT_VEC = os.path.join(ROOT, 'scripts', 'word-source', 'cc.ko.300.vec')
OUT_DIR = os.path.join(ROOT, 'static', 'word-questions')
WHITELIST = os.path.join(ROOT, 'scripts', 'secret-words.txt')
# Curated list of glued scraping fragments to drop (LLM-reviewed noun compounds
# that OOV/NNP rules can't catch, e.g. "호텔스닷컴", "일반지도위성지도"), one word
# per line. Optional: absent = no extra pruning.
BLOCKLIST = os.path.join(ROOT, 'scripts', 'vocab-blocklist.txt')
DIMS = 300
HANGUL_RE = re.compile(r'[가-힣]{2,}')
PROBE_WORDS = ['학교', '바다', '축구', '행복']


def parse_vec(path, vocab_size):
    """Stream the .vec file, keep the first vocab_size words passing the filter."""
    words = []
    seen = set()
    vecs = np.empty((vocab_size, DIMS), dtype=np.float32)
    scanned = 0
    with open(path, encoding='utf-8', errors='replace') as f:
        f.readline()  # header: "<count> <dims>"
        for line in f:
            scanned += 1
            token, _, rest = line.partition(' ')
            token = unicodedata.normalize('NFC', token)
            if not HANGUL_RE.fullmatch(token) or token in seen:
                continue
            values = rest.split()
            if len(values) != DIMS:
                continue
            seen.add(token)
            vecs[len(words)] = np.array(values, dtype=np.float32)
            words.append(token)
            if len(words) == vocab_size:
                break
    print(f'scanned {scanned:,} lines, accepted {len(words):,} words')
    return words, vecs[: len(words)]


# Kiwi assigns this morpheme id to out-of-vocabulary tokens it *guesses* to be
# nouns (crawl noise like "티드립"); registered dictionary nouns get real ids.
KIWI_UNK_ID = 2


def load_blocklist():
    """Curated glued-fragment words to drop (see BLOCKLIST); empty set if absent."""
    if not os.path.exists(BLOCKLIST):
        return set()
    with open(BLOCKLIST, encoding='utf-8') as f:
        block = {unicodedata.normalize('NFC', line.strip()) for line in f
                 if line.strip() and not line.startswith('#')}
    print(f'blocklist: {len(block):,} words from {BLOCKLIST}')
    return block


def semantic_filter(words, vecs_f32, nnp_cutoff, blocklist):
    """Drop crawl noise, keeping the original frequency order (dense reindex).

    Signals:
      - OOV: any morpheme is KIWI_UNK_ID (dictionary miss) -> glued scraping
        fragments ("보기힐튼", "트립어드바이저"), regardless of crawl frequency.
      - obscure proper noun: a single-token NNP whose frequency rank (index in
        `words`; cc.ko.300.vec is frequency-sorted) is >= nnp_cutoff -> names /
        brands like "박연차", "손흥민". Common NNPs ("미국", "서울") rank above
        the cutoff and stay.
      - blocklist: LLM-reviewed glued noun compounds that the above miss because
        every sub-morpheme is a real word ("호텔스닷컴", "일반지도위성지도").
    """
    from kiwipiepy import Kiwi

    kiwi = Kiwi()
    keep = []
    n_oov = n_nnp = n_block = 0
    for rank, (word, tokens) in enumerate(zip(words, kiwi.tokenize(words))):
        if word in blocklist:
            n_block += 1
            continue
        if any(t.id == KIWI_UNK_ID for t in tokens):
            n_oov += 1
            continue
        if len(tokens) == 1 and tokens[0].tag == 'NNP' and rank >= nnp_cutoff:
            n_nnp += 1
            continue
        keep.append(rank)
    print(f'semantic filter: removed {n_oov:,} OOV + {n_nnp:,} rare NNP '
          f'(cutoff {nnp_cutoff:,}) + {n_block:,} blocklist; kept {len(keep):,}')
    return [words[i] for i in keep], vecs_f32[np.array(keep)]


def pick_secrets(words, secret_band):
    """Ids of words usable as daily secrets: frequent, dictionary-registered single nouns."""
    from kiwipiepy import Kiwi

    kiwi = Kiwi()
    secrets = []
    for wid, word in enumerate(words[:secret_band]):
        if not 2 <= len(word) <= 4:
            continue
        tokens = kiwi.tokenize(word)
        if (
            len(tokens) == 1
            and tokens[0].tag == 'NNG'
            and tokens[0].form == word
            and tokens[0].id != KIWI_UNK_ID
        ):
            secrets.append(wid)
    print(f'secrets: {len(secrets):,} of first {secret_band:,} words')
    return secrets


def load_or_pick_secrets(words, secret_band):
    """secret-words.txt is the curated whitelist; auto-pick seeds it if absent."""
    word_to_id = {w: i for i, w in enumerate(words)}
    if os.path.exists(WHITELIST):
        with open(WHITELIST, encoding='utf-8') as f:
            listed = [line.strip() for line in f if line.strip() and not line.startswith('#')]
        missing = [w for w in listed if w not in word_to_id]
        if missing:
            print(f'warning: {len(missing)} whitelist words not in vocabulary, skipped: '
                  f'{" ".join(missing[:10])}{" ..." if len(missing) > 10 else ""}')
        secrets = [word_to_id[w] for w in listed if w in word_to_id]
        print(f'secrets: {len(secrets):,} from whitelist {WHITELIST}')
        return secrets

    secrets = pick_secrets(words, secret_band)
    with open(WHITELIST, 'w', encoding='utf-8') as f:
        f.write('\n'.join(words[i] for i in secrets) + '\n')
    print(f'wrote whitelist for review: {WHITELIST}')
    return secrets


def quantize(vecs):
    scales = np.abs(vecs).max(axis=1, keepdims=True)
    scales[scales == 0] = 1.0
    return np.clip(np.round(vecs / scales * 127), -127, 127).astype(np.int8)


def cosine_matrix(q, query):
    """Cosine of every row of q against one int8 query row (both dequantized as-is)."""
    qf = q.astype(np.float32)
    query = query.astype(np.float32)
    norms = np.linalg.norm(qf, axis=1) * np.linalg.norm(query)
    norms[norms == 0] = 1.0
    return (qf @ query) / norms


def verify(words, vecs_f32, q):
    rng = np.random.default_rng(42)
    idx = rng.integers(0, len(words), size=(200, 2))
    max_err = 0.0
    for a, b in idx:
        fa, fb = vecs_f32[a], vecs_f32[b]
        cos_f = float(fa @ fb / (np.linalg.norm(fa) * np.linalg.norm(fb)))
        qa, qb = q[a].astype(np.float32), q[b].astype(np.float32)
        cos_q = float(qa @ qb / (np.linalg.norm(qa) * np.linalg.norm(qb)))
        max_err = max(max_err, abs(cos_f - cos_q))
    print(f'quantization: max |cos_f32 - cos_int8| over 200 pairs = {max_err:.5f}')
    assert max_err < 0.005, 'quantization error too large'

    word_to_id = {w: i for i, w in enumerate(words)}
    for probe in PROBE_WORDS:
        if probe not in word_to_id:
            print(f'probe {probe!r}: NOT IN VOCAB')
            continue
        sims = cosine_matrix(q, q[word_to_id[probe]])
        top = np.argsort(-sims)[1:11]
        pairs = ', '.join(f'{words[i]}({sims[i] * 100:.1f})' for i in top)
        print(f'top-10 of {probe}: {pairs}')

    print('\nfrequency-band samples (every band: 30 words):')
    for start in (0, 1000, 10000, 30000, 60000, len(words) - 1000):
        band = words[start : start + 30]
        print(f'  [{start:>6}] {" ".join(band)}')


def verify_secrets(words, secrets):
    rng = np.random.default_rng(7)
    sample = sorted(rng.choice(len(secrets), size=60, replace=False))
    print('secret-pool samples:', ' '.join(words[secrets[i]] for i in sample))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--vec', default=DEFAULT_VEC)
    ap.add_argument('--vocab', type=int, default=90000)
    ap.add_argument('--secret-band', type=int, default=30000)
    ap.add_argument('--nnp-cutoff', type=int, default=8000,
                    help='drop single-token proper nouns ranked at/after this index')
    ap.add_argument('--secrets-only', action='store_true',
                    help='rebuild secrets-v1.json from existing words-v1.json (no .vec needed)')
    ap.add_argument('--verify', action='store_true')
    args = ap.parse_args()

    words_path = os.path.join(OUT_DIR, 'words-v1.json')
    vecs_path = os.path.join(OUT_DIR, 'vecs-v1.bin')
    secrets_path = os.path.join(OUT_DIR, 'secrets-v1.json')

    if args.secrets_only:
        with open(words_path, encoding='utf-8') as f:
            words = json.load(f)
        secrets = load_or_pick_secrets(words, args.secret_band)
        with open(secrets_path, 'w', encoding='utf-8') as f:
            json.dump(secrets, f, separators=(',', ':'))
        print(f'{secrets_path}: {os.path.getsize(secrets_path) / 1e6:.1f} MB')
        if args.verify:
            verify_secrets(words, secrets)
        return

    if not os.path.exists(args.vec):
        sys.exit(f'source not found: {args.vec}\nsee usage in the header of this script')

    words, vecs_f32 = parse_vec(args.vec, args.vocab)
    words, vecs_f32 = semantic_filter(words, vecs_f32, args.nnp_cutoff, load_blocklist())
    q = quantize(vecs_f32)
    secrets = load_or_pick_secrets(words, args.secret_band)

    os.makedirs(OUT_DIR, exist_ok=True)
    with open(words_path, 'w', encoding='utf-8') as f:
        json.dump(words, f, ensure_ascii=False, separators=(',', ':'))
    q.tofile(vecs_path)
    with open(secrets_path, 'w', encoding='utf-8') as f:
        json.dump(secrets, f, separators=(',', ':'))
    for p in (words_path, vecs_path, secrets_path):
        print(f'{p}: {os.path.getsize(p) / 1e6:.1f} MB')

    if args.verify:
        verify(words, vecs_f32, q)
        verify_secrets(words, secrets)


if __name__ == '__main__':
    main()
