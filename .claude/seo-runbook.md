# SEO Runbook

재현 가능한 SEO 관리 절차. 새 기기에서도 동일하게 재현 가능.

---

## 현재 SEO 설정 개요

| 항목 | 설정 위치 | 상태 |
|------|-----------|------|
| Open Graph 기본값 | `docusaurus.config.js` → `themeConfig.image` | `img/bamboo-road.webp` |
| Twitter Card | `docusaurus.config.js` → `themeConfig.metadata` | `summary_large_image` |
| 홈페이지 OG 태그 | `src/pages/index.tsx` `<Head>` | 명시적 설정 |
| 블로그 포스트 OG | frontmatter `image:` 필드 → 자동 매핑 | 자동 |
| sitemap.xml | Docusaurus preset-classic 내장 | 빌드마다 자동 생성 |
| Google Search Console | `static/google2f0d0a0c841af853.html` | 인증 완료 |
| sitemap Google 제출 | `.github/workflows/deploy.yml` | 배포 후 자동 ping |

---

## 1. 새 블로그 포스트 SEO 체크리스트

새 포스트 작성 시 frontmatter에 반드시 포함:

```yaml
---
authors:
  - jwher
title: 제목 (60자 이하 권장)
description: 설명 (50~160자) ← og:description, 검색 결과 요약문
slug: url-slug-here          ← 영문 kebab-case
tags:
  - tag1
  - tag2
image: ./cover.webp          ← og:image (없으면 bamboo-road.webp가 기본값)
---
```

**image 파일 최적화:**
```bash
node scripts/optimize-images.js   # JPEG → WebP 변환
```

---

## 2. Docs 페이지 공개 (draft 해제)

내용이 충분히 작성된 draft docs를 검색 엔진에 노출시키는 절차:

```bash
# 공개 예정 파일 미리보기 (100단어 이상 기준)
node scripts/publish-draft-docs.js

# 실제 적용
node scripts/publish-draft-docs.js --apply
```

기준 변경 시 `scripts/publish-draft-docs.js`의 `MIN_WORDS` 상수를 수정.

---

## 3. sitemap 확인

```bash
npm run build
grep -o "<loc>" build/sitemap.xml | wc -l   # URL 수 확인
```

배포 후 Google이 자동으로 ping을 받지만, 수동 재제출이 필요하면:
1. [Google Search Console](https://search.google.com/search-console) 접속
2. Sitemaps → `https://jwher.github.io/sitemap.xml` 제출

---

## 4. OG 태그 검증

**빌드 후 확인:**
```bash
python3 -c "
import re
with open('build/blog/<slug>/index.html') as f:
    c = f.read()
for t in re.findall(r'<meta[^>]+>', c):
    if 'og:' in t or 'twitter' in t:
        print(t)
"
```

**온라인 검증:**
- [metatags.io](https://metatags.io) — 미리보기 확인
- [cards-dev.twitter.com/validator](https://cards-dev.twitter.com/validator) — Twitter Card
- [developers.facebook.com/tools/debug](https://developers.facebook.com/tools/debug) — Facebook OG

---

## 5. 핵심 설정 파일 위치

```
docusaurus.config.js          ← 전역 OG/Twitter 기본값, sitemap 설정
src/pages/index.tsx           ← 홈페이지 <Head> OG 태그
.github/workflows/deploy.yml  ← sitemap 검증 + Google ping
scripts/publish-draft-docs.js ← draft 해제 자동화
scripts/optimize-images.js    ← 이미지 최적화
static/robots.txt             ← 크롤러 허용 범위
```

---

## 6. 알려진 미적용 항목

- **JSON-LD 구조화 데이터**: 현재 Microdata만 있음. Docusaurus `swizzle`로 BlogPostPage를 커스터마이징해 JSON-LD 삽입 가능하지만 Docusaurus 업그레이드 시 유지보수 필요 → 필요 시 진행.
- **Docs 페이지 이미지**: 현재 docs에는 `image:` 필드 없음 → OG 이미지가 기본값(bamboo-road.webp) 사용.
