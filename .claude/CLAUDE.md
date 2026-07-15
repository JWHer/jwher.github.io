# CLAUDE.md

Project guide for **jwher.github.io** — a Docusaurus-based personal blog/docs
site. This file stays short on purpose: it points to the detailed docs under
`.claude/` so you can pull in more context only when a task needs it.

General working style (think before coding, simplicity first, surgical changes,
goal-driven execution) lives in the user's global `~/.claude/CLAUDE.md` and
applies here too — not repeated below.

## Layout

- **Blog:** `blog/` — post slugs use Korean-friendly URLs
- **Docs:** `docs/` — organized under `ml/`, `cs/`, `development/`, etc.
- **Styles:** `src/css/` (global SCSS partials) + co-located `*.module.scss`
- **Redirects:** `redirects.json` — old URL → new URL mappings
- **Deploy:** GitHub Pages via `docusaurus.config.js`

## Commands

- `npm start` — dev server (hot reload)
- `npm run build` — production build (static site in `build/`)
- `npm run typecheck` — TypeScript check
- `npx stylelint "src/**/*.scss" --fix` — lint/fix styles

## Design & styling

Before designing or restyling any page, read
[.claude/styling-guide.md](.claude/styling-guide.md) — it covers the two-mode
typography system, color tokens, breakpoints, CSS authoring rules, and the
site's design philosophy (grounded in the
[`frontend-design`](https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md)
skill). Reuse existing `--jw-*` / `--ifm-*` tokens; don't invent per-page fonts
or colors.

## Writing content

Before writing or editing a blog post or doc, read
[.claude/writing-guide.md](.claude/writing-guide.md) — front matter conventions,
the recommended article structure, tone (impactful, explain hard ideas with
analogies), and the blog-vs-docs distinction.

## Reference docs (read when relevant)

| Doc | Read it when… |
|---|---|
| [.claude/writing-guide.md](.claude/writing-guide.md) | writing/editing a blog post or doc — front matter, structure, tone |
| [.claude/styling-guide.md](.claude/styling-guide.md) | styling, typography, colors, layout, or designing a new page |
| [.claude/seo-runbook.md](.claude/seo-runbook.md) | SEO tasks — sitemaps, metadata, search console |
| [.claude/ga4-setup.md](.claude/ga4-setup.md) | the GA4 "popular posts" pipeline / analytics automation |
| [.claude/chess-explorer.md](.claude/chess-explorer.md) | working on `/art/chess` — architecture, data flow, remaining work |
