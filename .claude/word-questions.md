# 뜻밖에 (Word Questions) — 구현 노트

`/art/word-questions`. 정답 단어와의 **의미 유사도**(word2vec 코사인)로 오늘의
숨은 단어를 맞히는 낱말 게임. semantle / 꼬맨틀에서 영감.

## 핵심 제약

**정적 사이트(GitHub Pages), 서버 없음.** 유사도·순위 계산을 전부 클라이언트에서
한다. semantle은 Flask 서버가 계산하지만 여기서는 전체 벡터를 브라우저로 내려받아
직접 계산한다.

## 데이터

빌드 타임 산출물(모두 git 커밋, `static/word-questions/`):

| 파일 | 내용 | 크기 |
|---|---|---|
| `words-v1.json` | 단어 배열, 인덱스 = 단어 id(빈도순) | ~0.1MB |
| `vecs-v1.bin` | id 순 int8[300] 연속 배열 | ~4MB |
| `secrets-v1.json` | 데일리 정답 후보 단어 id 목록 | ~35KB |

- 출처: FastText `cc.ko.300.vec`(공개, 빈도순). 상위 90,000단어를 `[가-힣]{2,}`
  필터 + NFC로 수락한 뒤, 클린 표제어만 남겨 **~13,800단어**로 축소(아래 의미 필터).
- 벡터는 단어별 int8 양자화(`q = round(v / (max|v|/127))`). 코사인은 양수 스케일에
  불변이라 scale은 저장하지 않는다.
- **정답 풀은 화이트리스트**(`scripts/secret-words.txt`)가 source of truth.
  파일이 있으면 그대로 쓰고, 없으면 kiwipiepy로 "사전 등재 일반명사(NNG)"만 자동
  추출해 파일을 생성한다. 큐레이션으로 어색한 단어(은어·미등재어)를 제거함.

### 의미 필터 (`semantic_filter`, 클린 표제어)

**단일 표제어만 남긴다**: kiwipiepy가 단어를 **사전 등재된 단일 형태소**(`id!=2`)이며
**내용 품사**(`CLEAN_POS` = NNG/NNP/MAG/XR/NR)로 분석해야 통과. 이 한 규칙이 크롤
노이즈를 통째로 걷어낸다:

- **다중토큰** 전부 제거 — 붙은말·조사꼬리·활용형(`인증별도의`, `게시되면`,
  `교직원수`, `호텔스닷컴`, `보기컴포트`). (~65k)
- **OOV 단일토큰** — 사전 미등재(`보기힐튼`, `트립어드바이저`). (~2.5k)
- **비내용 단일토큰** — 조사·어미·관형사 등. (~0.3k)
- **희귀 고유명사** — 단일 NNP 중 빈도순위 `--nnp-cutoff`(기본 8,000) 이상.
  `박연차`·`손흥민`은 빠지고 `미국`·`서울`은 남는다. (~7.6k)

빈도(wordfreq)는 한국어 zipf 분포가 양극단이라 정상어까지 날려 **쓰지 않는다**.
동사·형용사는 표제어(원형)가 다중토큰이라 함께 빠진다 — 추측 어휘는 명사 위주가 된다.

### 파이프라인 — `scripts/build-word-data.py`

```
# 원본 다운로드(git 제외, scripts/word-source/)
curl -L -o scripts/word-source/cc.ko.300.vec.gz \
  https://dl.fbaipublicfiles.com/fasttext/vectors-crawl/cc.ko.300.vec.gz
gunzip -k scripts/word-source/cc.ko.300.vec.gz
pip install numpy kiwipiepy

python3 scripts/build-word-data.py --verify        # 전체 재생성(의미 필터 포함)
python3 scripts/build-word-data.py --secrets-only   # 화이트리스트만 반영(원본 불필요)
```

- 정답 풀 큐레이션: `scripts/secret-words.txt`에서 줄을 지우고 `--secrets-only` 재실행.
- 어휘를 다시 빌드하면 벡터가 바뀌므로 아래 캐시 정책대로 `CACHE_NAME`을 올려야 한다.

## 클라이언트 구조

| 파일 | 역할 |
|---|---|
| `src/utils/dailyWord.ts` | KST 날짜 문자열 + FNV-1a 해시 → 정답 idx (순수 함수) |
| `src/hooks/useWordData.ts` | 벡터 로드 + Cache Storage + word→id Map + 코사인/순위 계산 |
| `src/hooks/useWordGame.ts` | 게임 상태 + localStorage + 경과 시간 + 포기/정답 잠금 |
| `src/pages/art/word-questions/index.tsx` | 페이지(`<Layout>` + mounted 게이트) |
| `src/components/WordQuestions/GuessForm.tsx` | 입력폼(IME 조합 중 Enter 가드) |
| `src/components/WordQuestions/GuessTable.tsx` | 추측 표 + 유사도 막대 |
| `src/components/WordQuestions/ResultBanner.tsx` | 정답/포기 배너 |

### 정답 선택 — 정답 풀 인덱스(poolIdx)로 통일

정답은 **정답 풀 인덱스**(secretIds 안에서의 위치 = `secret-words.txt` 순서)로 식별한다.
이 인덱스는 **재빌드와 무관하게 고정**(전체 어휘 id는 필터/빌드마다 바뀜)이고 항상 명사다.

- **데일리**: `dailySecretIdx(seoulDateString(), 정답풀크기)` = `FNV-1a('YYYY-MM-DD:word-questions-v1') % N`. KST 자정에 바뀜.
- **커스텀/공유**: `?word={poolIdx}` (0 ~ 정답풀크기-1). 범위 밖/비정수면 데일리로 폴백 + 안내.
  커스텀도 정답 풀에서만 뽑히므로 비명사가 정답이 되지 않는다.

### 유사도·순위·힌트

- 유사도 = 코사인 × 100(소수 2자리).
- 순위: 정답 기준 전체 정렬에서의 위치. 1,000위 안이면 "N위", 초과면 "1000위 이상",
  정답은 "정답!".
- 힌트 문구(semantle 참고): 가장 가까운(1위)/10번째/1,000번째 단어의 유사도 표시.
- 막대: 1,000위~2위 유사도 구간에서의 위치.

### 저장 (localStorage)

- 데일리: `wq:v1:daily` → `{ date, secret, guessWords, solved, gaveUp, startedAt, solvedAt }`.
  복원 시 날짜 또는 정답 **단어**(`secret`) 불일치면 폐기. 단어로 검증하므로 어휘를
  재빌드해도(전체 어휘 id가 바뀌어도) 기록이 유지된다.
- 커스텀: `wq:v1:custom:{poolIdx}` → 동일 구조(date 없음).
- 페이지를 열어둔 채 날짜가 바뀌면 `stale` 잠금 + 새로고침 안내.

### 캐시 정책 (중요)

- `words-v1.json` / `vecs-v1.bin`은 한 세대 안에서 불변 → Cache Storage에 저장, 재방문
  즉시. **단어장/벡터를 다시 빌드하면 `useWordData.ts`의 `CACHE_NAME`을 올려야 한다**
  (`wq-v1`→`wq-v2`…). 공개 파일명(`-v1`)은 그대로 두고 내부 캐시 버킷 이름만 올리며,
  로드 시 `STALE_CACHES`의 옛 버킷을 삭제해 재방문자가 새 벡터를 다시 받게 한다.
  (파일명을 바꾸지 않으므로 재빌드 시 캐시된 옛 벡터가 새 secrets 인덱스와 어긋나는
  것을 이 승격으로 막는다.)
- `secrets-v1.json`은 큐레이션으로 자주 바뀌므로 **항상 재검증**(`cache: 'no-cache'`)
  하고, 캐시 버킷을 통째로 비울 때 함께 삭제된다.

## 기능 (구현 완료)

- 추측 → 유사도/순위/막대. 없는 단어·중복 처리.
- 새로고침 상태 복원, 정답/포기 후 입력 잠금.
- **공유**: 항상 `?word={index}` 링크로 고정(날짜 무관 동일 문제). 데스크톱=클립보드
  복사, 모바일=네이티브 공유 시트. 정답 시 `추측 횟수` + `소요 시간`(첫 추측→정답),
  미정답 시 초대 문구. 이름은 `〈뜻밖에〉`.
- **다른 문제 풀기**: 정답 풀에서 무작위 이동.
- 표 컬럼 비율 1:4:2:5(`table-layout: fixed`, monospace 12분할 리듬). 페이지 폭은
  블로그 글 너비(container col--7 ≈ 665px, `42rem`)에 맞춤.
- **정답/포기 시 이웃 그래프**: `WordGraph`(vis-network)가 정답 단어 중심의 최근접
  이웃을 force-directed로 표시. 안정화 후 physics를 끄고 **커서 반발 필드**(포인터
  주변 노드가 밀려났다 제자리로 복귀, `moveNode`로 매 프레임 위치를 직접 이징 —
  radius 150 / strength 55 / ease 0.05) + hover 색 강조. `fit()` 후 스케일을 살짝
  줄여(`FIT_MARGIN`) 노드 라벨이 위아래로 잘리지 않게 여백 확보. vis-network는
  **정답 순간에만 dynamic import**(초기 27MB 로딩 보호). light/dark 테마 대응,
  `prefers-reduced-motion` 시 반발 루프 생략. 이웃 목록은
  `useWordGame.graphNeighbors`(어간 중복 제거). 튜닝 데모: `_local/hover-demo.js`.
- **OG/카드 이미지**: `static/img/art/wq-og-{light,dark}.png`(1200×630). 세로 워드마크
  "뜻/밖/에" + 세로 부제 + 우주 이웃 그래프. `Artwork.image`/`imageDark`로 `/art` 카드
  썸네일(테마별 전환), 페이지에 `og:image` + `twitter:card` 메타. `_local/make-og.js`로
  재생성(`node _local/make-og.js <중심단어>`).

## 디자인

`.claude/styling-guide.md` 준수. `--jw-*`/`--ifm-*` 토큰, 799px 단일 브레이크포인트.
게임은 첫 뷰포트(100vh) 안에, 설명은 그 아래. 시그니처 요소 = 순위 막대.

## 남은 아이디어

- 힌트 버튼(단어 공개)은 semantle에 있으나 **도입 보류**(난이도·공유 지표 영향, semantle은 광고형).
- 정답 시 100vh 게임 영역의 tableWrap이 추측이 적을 때 버튼 위 여백을 만듦 — 필요 시 정답 상태에서 여백 축소.

## 로컬 실험/생성 도구 (`_local/`, git 제외)

- `make-og.js` — OG/카드 이미지 생성(vis-network + 워드마크, light/dark). 실제 배포 에셋 생성용.
- `word-graph-pyvis.py` — pyvis 기반 그래프 탐색용. `python3 _local/word-graph-pyvis.py <중심단어>`
- `preview-neighbors.py` — 후보 단어들의 이웃 미리보기(중심 단어 고를 때)

## 의존성

`vis-network` + `vis-data`(정답 그래프). 그 외 새 런타임 의존성 없음.
