# 뜻밖에 (Word Questions) — 구현 노트

`/art/word-questions`. 정답 단어와의 **의미 유사도**(word2vec 코사인)로 오늘의
숨은 단어를 맞히는 낱말 게임. semantle / 꼬맨틀에서 영감.

> 파일명이 `_`로 시작하는 이유: Docusaurus `pages` 플러그인은 `_` 접두 파일을
> 라우트로 만들지 않는다. 이 문서가 공개 페이지가 되는 것을 막기 위함.

## 핵심 제약

**정적 사이트(GitHub Pages), 서버 없음.** 유사도·순위 계산을 전부 클라이언트에서
한다. semantle은 Flask 서버가 계산하지만 여기서는 전체 벡터를 브라우저로 내려받아
직접 계산한다.

## 데이터

빌드 타임 산출물(모두 git 커밋, `static/word-questions/`):

| 파일 | 내용 | 크기 |
|---|---|---|
| `words-v1.json` | 단어 배열, 인덱스 = 단어 id(빈도순) | ~1.2MB |
| `vecs-v1.bin` | id 순 int8[300] 연속 배열 | ~27MB |
| `secrets-v1.json` | 데일리 정답 후보 단어 id 목록 | ~35KB |

- 출처: FastText `cc.ko.300.vec`(공개, 빈도순). 상위 90,000단어를 `[가-힣]{2,}`
  필터 + NFC로 수락.
- 벡터는 단어별 int8 양자화(`q = round(v / (max|v|/127))`). 코사인은 양수 스케일에
  불변이라 scale은 저장하지 않는다.
- **정답 풀은 화이트리스트**(`scripts/secret-words.txt`)가 source of truth.
  파일이 있으면 그대로 쓰고, 없으면 kiwipiepy로 "사전 등재 일반명사(NNG)"만 자동
  추출해 파일을 생성한다. 큐레이션으로 어색한 단어(은어·미등재어)를 제거함.

### 파이프라인 — `scripts/build-word-data.py`

```
# 원본 다운로드(git 제외, scripts/word-source/)
curl -L -o scripts/word-source/cc.ko.300.vec.gz \
  https://dl.fbaipublicfiles.com/fasttext/vectors-crawl/cc.ko.300.vec.gz
gunzip -k scripts/word-source/cc.ko.300.vec.gz
pip install numpy kiwipiepy

python3 scripts/build-word-data.py --verify        # 전체 재생성
python3 scripts/build-word-data.py --secrets-only   # 화이트리스트만 반영(원본 불필요)
```

정답 풀 큐레이션: `scripts/secret-words.txt`에서 줄을 지우고 `--secrets-only` 재실행.

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

### 정답 선택

- **데일리**: `dailySecretIdx(seoulDateString(), 정답풀크기)` = `FNV-1a('YYYY-MM-DD:word-questions-v1') % N`. KST 자정에 바뀜.
- **커스텀**: `?word={전체 어휘 id}`. 범위 밖/비정수면 데일리로 폴백 + 안내.

### 유사도·순위·힌트

- 유사도 = 코사인 × 100(소수 2자리).
- 순위: 정답 기준 전체 정렬에서의 위치. 1,000위 안이면 "N위", 초과면 "1000위 이상",
  정답은 "정답!".
- 힌트 문구(semantle 참고): 가장 가까운(1위)/10번째/1,000번째 단어의 유사도 표시.
- 막대: 1,000위~2위 유사도 구간에서의 위치.

### 저장 (localStorage)

- 데일리: `wq:v1:daily` → `{ date, secretId, guessWords, solved, gaveUp, startedAt, solvedAt }`.
  복원 시 날짜 또는 secretId 불일치면 폐기(정답 풀이 바뀌면 자동 리셋).
- 커스텀: `wq:v1:custom:{id}` → 동일 구조(date 없음).
- 페이지를 열어둔 채 날짜가 바뀌면 `stale` 잠금 + 새로고침 안내.

### 캐시 정책 (중요)

- `words-v1.json` / `vecs-v1.bin`은 불변 → Cache Storage(`wq-v1`)에 저장, 재방문 즉시.
  **단어장/벡터를 다시 빌드하면 파일명을 `-v2`로 올려야 한다.**
- `secrets-v1.json`은 큐레이션으로 자주 바뀌므로 **항상 재검증**(`cache: 'no-cache'`)
  하고, 구버전이 캐시에 있으면 로드 시 삭제한다.

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
  radius 150 / strength 55 / ease 0.05) + hover 색 강조. vis-network는 **정답 순간에만
  dynamic import**(초기 27MB 로딩 보호). light/dark 테마 대응, `prefers-reduced-motion`
  시 반발 루프 생략. 이웃 목록은 `useWordGame.graphNeighbors`(어간 중복 제거).
  튜닝 데모: `_local/hover-demo.js`.
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
