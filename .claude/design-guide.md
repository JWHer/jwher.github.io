---
title: 블로그 디자인 가이드
description: jwher.github.io 디자인 시스템 — 색상, 타이포그래피, 반응형 레이아웃
tags:
  - design
  - css
---

> 출처: `src/css/_variables.scss`, Docusaurus IFM 변수 시스템  
> 목표: 사이트 전반에 색상·간격·반응형을 일관되게 적용

---

## 1. Color System

### Primary (Green / Teal 계열)

Light mode 기본값은 Forest Green. Dark mode는 Teal로 전환.

| 단계 | Light Mode | Dark Mode | 비고 |
|------|-----------|-----------|------|
| **Base** | **`#2e8555`** | **`#25c2a0`** | Primary |
| dark | `#29784c` | `#21af90` | |
| darker | `#277148` | `#1fa588` | |
| darkest | `#205d3b` | `#1a8870` | |
| light | `#33925d` | `#29d5b0` | |
| lighter | `#359962` | `#32d8b4` | |
| lightest | `#3cad6e` | `#4fddbf` | |

### Secondary (Red 계열)

강조 · 경고 · 포인트 컬러.

| 단계 | Light Mode | Dark Mode |
|------|-----------|-----------|
| **Base** | **`#c43d4a`** | **`#f74c5d`** |
| dark | `#b13642` | `#f62d41` |
| darker | `#a8333e` | `#f51e33` |
| darkest | `#8a2a33` | `#d80a1e` |
| light | `#ca515c` | `#f86b79` |
| lighter | `#cd5b66` | `#f97a87` |
| lightest | `#d67881` | `#fba9b1` |

### Surface / Background

| 용도 | Light Mode | Dark Mode |
|------|-----------|-----------|
| 페이지 배경 | `#faf8f4` (Obenauer Cream) | `#1d1e20` |
| 카드 / 패널 배경 | `#f0ece4` | `#2e2e33` |

### Text

| 용도 | Light Mode | Dark Mode |
|------|-----------|-----------|
| 기본 텍스트 | `#1c1b1a` | `#dadadb` |
| 보조 텍스트 | `#777777` | `#9b9c9d` |
| 링크 (Primary 상속) | `#2e8555` | `#25c2a0` |

### Border

| 용도 | Light Mode | Dark Mode |
|------|-----------|-----------|
| HR / 구분선 | `rgb(0 0 0 / 9%)` | `rgb(255 255 255 / 9%)` |

### Navbar / Header (커스텀)

| 변수 | Light Mode | Dark Mode |
|------|-----------|-----------|
| `--navbar-bg-color` | `transparent` | (상속) |
| `--navbar-text-color` | `#1c1b1a` | `#dadadb` |
| `--header-text-color` | `#ffffff` | `#ffffff` |
| `--header-text-dark-color` | `#777777` | — |

---

## 2. Typography

현재 적용된 폰트 기준 (`docusaurus.config.js` → Google Fonts 링크).

| 용도 | Font | Weight | 비고 |
|------|------|--------|------|
| 본문 | Noto Serif KR | 300 / 400 / 700 | 한글 최적화 |
| 코드 | 시스템 monospace | — | IFM 기본값 |
| 코드 크기 | — | — | `95%` (`--ifm-code-font-size`) |

### 반응형 타이포그래피 스케일

모바일(≤799px)에서 아래 비율로 크기를 줄인다. **이 5단계 외 다른 크기 추가 금지.**

| 역할 | Desktop | Mobile (≤799px) |
|------|---------|-----------------|
| 메인 타이틀 | 48px | 28px |
| 섹션 타이틀 | 40px | 22px |
| 본문 (기본) | 18px | 16px |
| 추가 설명 | 16px | 14px |
| 보조 안내 | 14px | 13px |

---

## 3. Responsive Breakpoints

**2단계 구조.** 블로그 특성상 모바일/데스크톱으로 단순 구분.

| SCSS 변수 | 값 | 범위 |
|----------|----|------|
| `$bp-mobile` | `799px` | ≤799px = 모바일 |
| (기본) | — | ≥800px = 데스크톱 |

`$bp-mobile`은 `src/css/_variables.scss`에 정의되어 있음.

**SCSS 사용법:**

```scss
@media (max-width: $bp-mobile) {
  // 모바일 전용 스타일
}
```

**기존 파일 통일 대상** (추후 `$bp-mobile`로 교체):

| 파일 | 기존 값 |
|------|---------|
| `_presentation.scss` | `767px` |
| `index.module.scss` | `480px`, `800px` |
| `search.module.scss` | `800px` |
| `AboutMe/styles.module.scss` | `767px`, `996px` |
| `CurriculumVitae/styles.module.scss` | `810px` |

---

## 4. CSS 작성 원칙

### 최소한의 미디어 쿼리

미디어 쿼리 안에서는 **크기 관련 속성만** 재정의한다. 색상·font-family 등 변하지 않는 속성은 반복하지 않는다.

```scss
// ✅ 올바른 예
.section-title {
  font-size: 40px;
  font-weight: 600;
  color: var(--ifm-font-color-base);
}
@media (max-width: $bp-mobile) {
  .section-title {
    font-size: 22px; // 크기만 재정의
  }
}

// ❌ 잘못된 예
@media (max-width: $bp-mobile) {
  .section-title {
    font-size: 22px;
    font-weight: 600;                    // 변하지 않으므로 중복
    color: var(--ifm-font-color-base);   // 변하지 않으므로 중복
  }
}
```

### 레이아웃 원칙

- **텍스트 크기 5단계만 사용** — 위 타이포그래피 스케일 표 기준 준수
- **불필요한 줄바꿈 금지** — 모바일에서 wrapping이 이상하게 처리됨
- **타이틀은 간결하게** — 줄글이 되면 요약 후 body로 이동
- **컬럼 이미지 설명은 이미지 하단** — 모바일에서 컬럼이 세로로 쌓일 때 연결성 유지
- **불필요한 박싱 금지** — 박싱은 여백을 늘려 스크롤을 길게 만듦
- **이미지는 원본 업로드 후 CSS로 모양 조정** — 나중에 수정할 때 재업로드 불필요

---

## 5. CSS 변수 파일 위치

| 파일 | 역할 |
|------|------|
| `src/css/_variables.scss` | 색상 · 텍스트 · 코드 · Navbar 변수 |
| `src/css/_layout.scss` | 전역 레이아웃 (main-wrapper, article heading) |
| `src/css/_navbar.scss` | Navbar 컴포넌트 스타일 |
| `src/css/_footer.scss` | 푸터 스타일 |
| `src/css/_presentation.scss` | 프레젠테이션 페이지 전용 |
| `src/css/custom.scss` | 위 파일들을 `@import` 로 묶는 진입점 |
| `src/pages/index.module.scss` | 홈페이지 전용 (breakpoint 포함) |
