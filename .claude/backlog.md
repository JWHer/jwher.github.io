# Backlog

낮은 우선순위로 미뤄둔 작업들. 급하지 않지만 언젠가 정리하면 좋은 것들.

## 레포 분리 — 소스 비공개 + 공개엔 빌드 번들만

**상태:** 계획 완료, 미실행 — [.claude/repo-privacy-split.md](repo-privacy-split.md)

공개된 `jwher.github.io`에서 소스/커밋 히스토리를 제거하고, 소스는 별도 private
레포로 옮겨 CI가 cross-repo로 빌드 번들만 `gh-pages`에 push하도록 분리하는 런북.
fork 0·커스텀 도메인 없음이라 **무중단 in-place 정리** 방식으로 결정. 실행 전
private 레포 백업 검증이 선행 조건.

## 브레이크포인트 불일치 (799px vs 996px)

**상태:** deferred (중요도 낮음)

커스텀 스타일과 Docusaurus 기본 브레이크포인트가 어긋나 있음.

- **내 커스텀:** `$bp-mobile: 799px` — [src/css/_variables.scss:4](../src/css/_variables.scss)
- **Docusaurus/Infima:** `996px` 하드코딩 (config로 변경 불가)
  - CSS: `@media (max-width: 996px)` — Infima의 네비바 접힘 / 사이드바 전환
  - JS: `const DesktopBreakpoint = 996;` — `@docusaurus/theme-common`의 `useWindowSize` 훅

결과적으로 **800~996px 구간**에서 어긋남: Docusaurus는 아직 모바일(햄버거 메뉴 등)로 동작하는데, 커스텀 스타일은 이미 데스크톱으로 전환됨.

의도한 값은 아니고, 우연히 799px로 정해지면서 생긴 차이.

**정리 방향:**
- **방향 A — Docusaurus를 799px로 낮추기 (비추천):** Infima의 `996px` 미디어쿼리 오버라이드 + `useWindowSize` 훅을 `patch-package`/eject로 패치해야 함. CSS·JS 양쪽을 손대야 해서 취약.
- **방향 B — 커스텀을 996px로 올려 통일 (권장, 한 줄):** `_variables.scss`의 `$bp-mobile: 799px` → `996px`.