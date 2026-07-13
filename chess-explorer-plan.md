# Chess Explorer — MVC 설계 (전면 재작성)

> 구현 참조는 `chess-explorer-context.md`. 이 문서는 설계 사양.

---

## 1. 아키텍처 개요

```
URL (단일 source of truth)
  │
  │  parseUrl()
  ▼
NavigationParams          ← Model Layer: 순수 파생, 부수효과 없음
  │  buildHistory()
  │  + PGN data
  ▼
MoveHistoryEntry[]
  │  + DB / Stockfish query
  ▼
PositionSnapshot + ContinuationEntry[]
  │
  ▼
View Components           ← View Layer: 렌더링만, 상태 소유 없음
  │  user action
  ▼
Controller Actions        ← Controller Layer: URL 갱신만
  │  routerHistory.replace()
  ▼
URL (다시 시작)
```

**핵심 원칙**: `moveHistory`는 `useState`가 아니다. URL이 변하면 `useMemo`로 재파생된다. Controller는 URL만 바꾼다. View는 URL을 직접 읽지 않는다.

**기존 설계의 근본 문제**:
- React state `moveHistory`와 URL이 동시에 source of truth를 주장
- URL sync effect와 restoration effect가 같은 렌더 사이클에서 경쟁
- PGN loading 중 URL이 지워지는 race condition → `O-O` castling URL에서 발현

---

## 2. URL 명세 (불변 계약)

| 상태 | URL |
|---|---|
| 자유 탐색 (초기) | `/art/chess` |
| 자유 탐색 중 | `/art/chess?game=free&move=e4+e5+Nf3` |
| 게임 선택 (시작) | `/art/chess?game=byrne-fischer-1956` |
| 게임 진행 | `/art/chess?game=byrne-fischer-1956&move=1.Nf3+1...Nf6+2.c4` |
| 게임 이탈 후 | `/art/chess?game=byrne-fischer-1956&move=1.Nf3+1...Nf6+2.c4+2...e5` |

**규칙:**
- `?game=free` 또는 `?game=<id>`. `null`을 의미하는 param 없음 = 자유 탐색
- `?move=` 내 수: 주석(`+`, `#`) 제거 후 URL 인코딩
  - 게임 모드: `1.e4+1...e5+2.Nf3` (이동번호 포함, 이탈 수 포함)
  - 자유 모드: `e4+e5+Nf3` (이동번호 없음)
- `URLSearchParams.toString()`이 공백을 `+`로 인코딩 → `e4 e5 Nf3` → `e4+e5+Nf3`
- 수 표기의 `+`(체크)는 URL 저장 전 반드시 제거 (혼동 방지)

**직렬화 함수:**
```ts
// moveSans: 주석 제거된 순수 SAN 배열 ["Nf3", "Nf6", "c4", "O-O"]
function serializeUrl(gameId: string | null, moveSans: string[]): string {
  const p = new URLSearchParams();
  if (gameId) p.set('game', gameId);
  else if (moveSans.length > 0) p.set('game', 'free');
  
  if (moveSans.length > 0) {
    if (gameId) {
      // 게임 모드: 이동번호 포함
      const seq = moveSans
        .map((san, i) => `${Math.floor(i/2)+1}${i%2===0 ? '.' : '...'}${san}`)
        .join(' ');
      p.set('move', seq);
    } else {
      p.set('move', moveSans.join(' '));
    }
  }
  return p.toString() ? `?${p.toString()}` : '';
}

// URL → { gameId, moveSans }
function parseUrl(search: string): NavigationParams {
  const p = new URLSearchParams(search);
  const raw = p.get('game');
  const gameId = (!raw || raw === 'free') ? null : raw;
  const moveStr = p.get('move') ?? p.get('moves') ?? '';  // 구버전 하위호환
  const moveSans = moveStr
    .split(/\s+/)
    .map(t => t.replace(/^\d+\.{1,3}/, '').trim())
    .map(stripAnnotations)
    .filter(Boolean);
  return { gameId, moveSans };
}
```

---

## 3. Model — Type System

```ts
// src/types/chess.ts

// URL에서 파싱된 내비게이션 파라미터 (직렬화 가능)
interface NavigationParams {
  gameId: string | null;   // null = 자유 탐색
  moveSans: string[];      // 주석 제거된 SAN 배열. 이동번호 없음.
}

// PGN + moveSans로 파생된 이동 이력 항목
interface MoveHistoryEntry {
  san: string;             // 표시용 SAN (chess.js 출력, 주석 포함 가능)
  fenAfter: string;        // 이 수를 두고 난 FEN
  move: Move;              // chess.js Move (보드 lastMove 하이라이트용)
  fromGame: boolean;       // true = PGN 수열과 일치
}

// 포지션 데이터 (DB + Stockfish 병합)
interface ContinuationEntry {
  san: string;
  source: 'db' | 'stockfish' | 'pending';
  // 'db'      = DB에 있는 수, totalGames 순 정렬
  // 'stockfish'= SF 분석 완료, winrate 순 정렬
  // 'pending'  = SF 분석 중 (shimmer)
  winrate: number | null;  // 0–1, 현재 플레이어 기준. pending이면 null.
  stats: MoveStats | null; // WinRateBar 렌더링용
}

// 체크메이트 상태 (View: ClassicSkin에서 사용)
interface CheckmateState {
  isCheckmate: boolean;
  kingSquare: Square | null;       // 체크메이트된 왕 위치
  attackerSquares: Square[];       // 공격 말 위치들
  // Level B (선택): attack path는 View에서 chess.js로 계산
}

// 현재 포지션의 스냅샷 (Model 출력)
interface PositionSnapshot {
  activeFen: string;
  lastMove: Move | null;
  deviationIndex: number;          // -1 = 이탈 없음
  isDeviated: boolean;
  gameMovesPlayed: number;         // 이탈 전 PGN 수 수
  gameNextMove: string | null;     // 다음 PGN 수 SAN (이탈 시 null)
  turnPrefix: string;              // "1." or "14..."
  checkmate: CheckmateState;
}
```

---

## 4. Hook 아키텍처

### 4-1. useChessModel (Model + Controller)

책임: URL ↔ 상태 동기화의 단일 진실점. `useState` 없음.

```ts
// src/hooks/useChessModel.ts
export function useChessModel() {
  const location = useLocation();
  const routerHistory = useHistory();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // 1. URL → NavigationParams (순수 파싱)
  const navParams = useMemo(
    () => parseUrl(location.search),
    [location.search]
  );

  // 2. PGN 로드 (gameId가 있을 때만)
  const game = CHESS_GAMES.find(g => g.id === navParams.gameId) ?? null;
  const pgn = usePgn(game?.pgnPath);

  // 3. navParams + PGN → MoveHistoryEntry[] (순수 파생)
  //    PGN 로딩 중에는 빈 배열 → "flash of wrong state" 없음
  const moveHistory = useMemo<MoveHistoryEntry[]>(
    () => {
      if (navParams.gameId && pgn.loading) return [];
      return buildHistory(navParams.moveSans, pgn.moves);
    },
    [navParams.moveSans, navParams.gameId, pgn.moves, pgn.loading]
  );

  // 4. 파생 상태
  const activeFen = moveHistory.at(-1)?.fenAfter ?? START_FEN;
  const deviationIndex = moveHistory.findIndex(h => !h.fromGame);
  const isDeviated = deviationIndex !== -1;
  const gameMovesPlayed = isDeviated ? deviationIndex : moveHistory.length;
  const gameNextMove = (!isDeviated && game)
    ? (pgn.moves[gameMovesPlayed]?.san ?? null)
    : null;

  // 5. Controller: URL 갱신만
  const replace = useCallback((gId: string | null, sans: string[]) => {
    routerHistory.replace({ search: serializeUrl(gId, sans) });
  }, [routerHistory]);

  return {
    // State
    mounted,
    game, gameId: navParams.gameId,
    moveHistory, activeFen,
    isDeviated, deviationIndex, gameMovesPlayed, gameNextMove,
    pgnLoading: pgn.loading,
    // Actions (Controller)
    selectGame:  (id: string | null)  => replace(id, []),
    selectMove:  (san: string)        => replace(navParams.gameId, [...navParams.moveSans, stripAnnotations(san)]),
    back:        ()                   => replace(navParams.gameId, navParams.moveSans.slice(0, -1)),
    reset:       ()                   => replace(navParams.gameId,
                                           isDeviated ? navParams.moveSans.slice(0, deviationIndex) : []),
  };
}
```

### 4-2. buildHistory (순수 함수)

```ts
// URL moveSans와 PGN 수열을 비교해 MoveHistoryEntry[] 파생
function buildHistory(
  moveSans: string[],
  pgnMoves: ParsedMove[],
): MoveHistoryEntry[] {
  const result: MoveHistoryEntry[] = [];
  let deviated = false;

  for (let i = 0; i < moveSans.length; i++) {
    const san = moveSans[i]; // 주석 없는 SAN

    // PGN 수열과 비교 (주석 제거 후)
    if (!deviated && i < pgnMoves.length) {
      const pgnSan = stripAnnotations(pgnMoves[i].san);
      if (pgnSan === san) {
        result.push({ ...pgnMoves[i], fromGame: true });
        continue;
      }
    }

    // 이탈 또는 자유 탐색
    deviated = true;
    const currentFen = result.at(-1)?.fenAfter ?? START_FEN;
    try {
      const c = new Chess(currentFen);
      const m = c.move(san);
      result.push({ san: m.san, fenAfter: c.fen(), move: m, fromGame: false });
    } catch {
      break; // 유효하지 않은 수, 이후 무시
    }
  }

  return result;
}
```

**왜 이 구조가 race condition을 제거하는가**:
- `moveHistory`가 `useState`가 아니므로 "state가 URL보다 늦게 반영"되는 상황 없음
- URL이 바뀌면 → 다음 render에서 `useMemo`가 즉시 재계산
- restoration effect, URL sync effect가 필요 없음 → 경쟁 없음
- PGN 로딩 중에는 `history = []` → 보드는 초기 포지션 표시 (정상)

### 4-3. usePositionData (Position Model)

책임: 현재 FEN의 가능한 수 목록 (DB + Stockfish 병합).

```ts
// src/hooks/usePositionData.ts
export function usePositionData(fen: string, enabled: boolean) {
  const posStats = usePositionStats(fen);
  // posStats.ready = DB 쿼리 완료 신호. false→true→false 사이클 방지.
  const sfResult = useStockfish(fen, enabled && posStats.ready);

  const entries = useMemo<ContinuationEntry[]>(() => {
    const turn = fen.split(' ')[1] ?? 'w';

    // DB 항목: 선택 빈도(totalGames) 내림차순
    const fromDb: ContinuationEntry[] = Object.entries(posStats.moves)
      .map(([san, stats]) => {
        const total = stats.white + stats.draws + stats.black;
        const winrate = total > 0
          ? (turn === 'w' ? stats.white / total : stats.black / total)
          : 0;
        return { san, source: 'db' as const, winrate, stats, _total: total };
      })
      .sort((a, b) => b._total - a._total)
      .map(({ _total: _, ...e }) => e);

    const dbSans = new Set(fromDb.map(e => e.san));

    // DB에 없는 legal moves → SF로 채움
    const legalMoves = (() => {
      try { return new Chess(fen).moves(); } catch { return [] as string[]; }
    })();

    const sfPending = !posStats.ready || sfResult.loading;

    // SF 항목: 승률 내림차순 (계산 전이면 pending)
    const fromSf: ContinuationEntry[] = legalMoves
      .filter(san => !dbSans.has(san))
      .map(san => {
        if (sfPending) {
          return { san, source: 'pending' as const, winrate: null, stats: null };
        }
        const sfStat = sfResult.moveStats[san];
        const winrate = sfStat
          ? (turn === 'w' ? sfStat.white / 1000 : sfStat.black / 1000)
          : null;
        return {
          san,
          source: sfStat ? 'stockfish' as const : ('pending' as const),
          winrate,
          stats: sfStat ?? null,
        };
      })
      .sort((a, b) => (b.winrate ?? -1) - (a.winrate ?? -1));

    // DB 먼저, SF는 뒤에. 무한 스크롤로 k=10씩 소비.
    return [...fromDb, ...fromSf];
  }, [posStats.moves, posStats.ready, sfResult.moveStats, sfResult.loading, fen]);

  return {
    entries,           // 전체 정렬된 목록 (View에서 k=10씩 소비)
    dbLoading: posStats.loading,
    sfLoading: sfResult.loading,
  };
}
```

### 4-4. 기존 훅 (변경 없음)

| 훅 | 역할 | 변경 |
|---|---|---|
| `usePgn` | PGN fetch + 파싱 → `ParsedMove[]` | 없음 |
| `useOpening` | FEN → ECO 오프닝명 | 없음 |
| `usePositionStats` | localStorage → SQLite, `ready` 플래그 | 없음 |
| `useStockfish` | UCI 분석, generation counter | 없음 |

---

## 5. 페이지네이션 설계

**동작 규칙** (k=10):
1. `usePositionData`가 전체 `entries[]` 반환 (DB 선택빈도순 + SF 승률순 병합)
2. `MoveList` 컴포넌트가 `visibleCount = k` 상태 보유
3. `entries.slice(0, visibleCount)` 렌더링
4. `hasMore`이면 "더 보기" 버튼 표시 → 클릭 시 `visibleCount += k`

**결과**: 첫 페이지(0-9)에 DB가 5개면 0-4는 DB, 5-9는 SF(또는 pending). DB가 15개면 0-9 전부 DB. "더 보기"로 추가 노출.

> `PAGE_SIZE = 10` 상수로 선언해 변경 용이.

---

## 6. Use Cases → 상태 전이

### UC-A. 게임 선택

```
User: 좌패널에서 "Kasparov's Immortal" 클릭
Controller: selectGame("kasparov-topalov-1999")
URL: /art/chess?game=kasparov-topalov-1999
Model: gameId="kasparov-topalov-1999", moveSans=[]
       pgn 로드 중 → history=[]
       pgn 완료 → history=[] (수 없음)
View: 초기 포지션 표시, gameNextMove = pgn.moves[0].san (초록 하이라이트)
```

### UC-B-1. 기보 수 선택

```
User: MoveList에서 "Nf3" 클릭 (= pgn.moves[0])
Controller: selectMove("Nf3")
  → stripAnnotations("Nf3") = "Nf3"
  → replace("kasparov-topalov-1999", ["Nf3"])
URL: ?game=kasparov-topalov-1999&move=1.Nf3
Model: moveSans=["Nf3"]
  → buildHistory: moveSans[0]="Nf3" vs pgnMoves[0].san="Nf3" → match
  → history[0] = { ...pgnMoves[0], fromGame: true }
  → isDeviated = false
View: gameNextMove = pgn.moves[1].san
```

### UC-B-2. 이탈 수 선택

```
User: MoveList에서 "c5" 클릭 (pgn 다음 수는 "e5")
Controller: selectMove("c5")
  → replace("kasparov-topalov-1999", [...moveSans, "c5"])
URL: ?game=kasparov-topalov-1999&move=1.Nf3+1...c5
Model: moveSans=["Nf3","c5"]
  → buildHistory: "Nf3"=match, "c5"≠"e5" → deviated=true
  → history[1] = { san:"c5", fromGame:false, ... }
  → isDeviated=true, deviationIndex=1
View: gameNextMove=null (이탈), OpeningBadge = "Kasparov's Immortal — 자유 탐색중"
```

### UC-B-3. 자유 탐색

```
User: 게임 미선택 상태에서 "e4" 클릭
Controller: selectMove("e4")
  → replace(null, ["e4"])
URL: ?game=free&move=e4
Model: gameId=null, moveSans=["e4"]
  → buildHistory(["e4"], []) → pgnMoves=[], deviated=true from start
  → history[0] = { san:"e4", fromGame:false, ... }
```

### UC-C. ‹ 버튼 (뒤로)

```
Controller: back()
  → replace(gameId, moveSans.slice(0,-1))
URL: move param에서 마지막 수 제거
Model: moveSans 1개 감소 → buildHistory 재계산
결과: fromGame 여부 무관 안전 (이전 버그 수정됨)
```

### UC-D. « 버튼 (리셋)

```
이탈 상태:
  → replace(gameId, moveSans.slice(0, deviationIndex))
  → 기보 수만 남음

완전 초기화:
  → replace(gameId, [])
```

### UC-E. 체크메이트

```
Model: chess.js isCheckmate() → CheckmateState 계산
View (ClassicSkin): 
  Level A: 공격 말 + 왕 하이라이트
  Level B: 공격 경로 화살표 (chess.js attacks() 활용)
```

---

## 7. 파일 구조 (전면 재작성 대상)

```
src/
  types/
    chess.ts                ← [신규] 모든 타입 정의

  hooks/
    useChessModel.ts        ← [신규] Model + Controller (URL ↔ state)
    usePositionData.ts      ← [대체] usePositionMoves → usePositionData
    usePgn.ts               ← [유지]
    useOpening.ts           ← [유지]
    usePositionStats.ts     ← [유지]
    useStockfish.ts         ← [유지]

  pages/art/chess/
    index.tsx               ← [재작성] useChessModel 사용, View 연결
    chess.module.scss       ← [유지]

  components/Chess/
    MoveList.tsx            ← [View: 별도 에이전트]
    WinRateBar.tsx          ← [View: 별도 에이전트]
    ChessBoard.tsx          ← [View: 별도 에이전트]
    ClassicSkin.tsx         ← [View: 별도 에이전트]
    GameSidebar.tsx         ← [View: 별도 에이전트]
    OpeningBadge.tsx        ← [View: 별도 에이전트]
```

---

## 8. 구현 순서

| 단계 | 파일 | 검증 |
|---|---|---|
| 1 | `src/types/chess.ts` | TypeScript 컴파일 통과 |
| 2 | `src/hooks/useChessModel.ts` | `npm run build` 성공, URL ↔ state 왕복 확인 |
| 3 | `src/hooks/usePositionData.ts` | DB + SF 병합, pending 표시 확인 |
| 4 | `src/pages/art/chess/index.tsx` | 기존 View 컴포넌트 그대로 연결 |
| 5 | View 컴포넌트 | 별도 에이전트 담당 |

---

## 9. 객체지향 설계 원칙 요약

| 원칙 | 적용 |
|---|---|
| **SRP** | `useChessModel`: 내비게이션만. `usePositionData`: 포지션 데이터만. View: 렌더링만. |
| **OCP** | `ContinuationEntry.source` 확장 가능. 새 데이터 소스 추가 시 View 변경 최소. |
| **DIP** | `useChessModel`이 URL에 의존 (추상화). `usePositionData`가 `posStats.ready`에 의존 (추상화). |
| **단방향 데이터 흐름** | URL → Model → View. View → Controller → URL. 역방향 없음. |
| **불변 파생** | `moveHistory`, `activeFen`, `isDeviated` 전부 `useMemo` 파생. `setState` 없음. |