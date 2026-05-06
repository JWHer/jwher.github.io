# Style Guide

Design reference for jwher.github.io (Docusaurus 3.x).

---

## Color System

PaperMod-inspired values, integrated into Infima CSS variables in `src/css/_variables.scss`.
Do **not** add a separate `--pm-*` namespace — use the `--ifm-*` variables directly.

| Variable | Light | Dark | Purpose |
|---|---|---|---|
| `--ifm-background-color` | `#faf8f4` | `#1d1e20` | Body background (cream / near-black) |
| `--ifm-background-surface-color` | `#f0ece4` | `#2e2e33` | Cards, sidebars, raised surfaces |
| `--ifm-font-color-base` | `#1c1b1a` | `#dadadb` | Primary text |
| `--ifm-color-content-secondary` | `#777` | `#9b9c9d` | Secondary text, tags, labels |
| `--ifm-hr-border-color` | `rgb(0 0 0 / 9%)` | `rgb(255 255 255 / 9%)` | Dividers, borders |
| `--ifm-color-primary` | `#2e8555` | `#25c2a0` | Links, interactive elements |

---

## Typography Scale

Font family: **Noto Serif KR** (300, 400, 700 weights) — set in `docusaurus.config.js` stylesheets and applied via `font-family` in page-level SCSS modules.

| Role | Size | Weight | Letter-spacing | Transform |
|---|---|---|---|---|
| Site title (masthead) | `clamp(1.4rem, 2.5vw, 2rem)` | 300 | `0.22em` | — |
| Masthead sub-label | `0.65rem` | 400 | `0.2em` | uppercase |
| Section head | `0.65rem` | 400 | `0.15em` | uppercase |
| List link | `0.88rem` | 400 | — | — |
| Tag | `0.7rem` | 400 | `0.08em` | — |
| Nav links | `0.68rem` | 400 | `0.18em` | uppercase |
| Footer copyright | `0.75rem` | 400 | — | — |

---

## Layout

### Main page (Obenauer-style)

- **Canvas**: `position: fixed; inset: 0; z-index: 0; pointer-events: none`
  Empty transparent canvas, shows Three.js art scenes when present.
  Rendered only when `matchMedia('(min-width: 1100px)')` is true — no wasted render on mobile.

- **Content column**: `max-width: 660px; margin: 0 auto; padding: 0 1.5rem`
  z-index 1, floats over the canvas. Body background color visible in left/right margins.

- **Sections**: stacked vertically, `gap: 2rem`

- **Mobile** (< 768 px): padding reduced to `0 1rem`, column fills viewport width.

### Global pages

Standard Docusaurus layout — navbar, content, footer.

---

## Navbar

Transparent by default (`--navbar-bg-color: transparent`).
Text color adapts per theme: dark in light mode (`#1c1b1a`), light in dark mode (`#dadadb`).

Scroll behavior controlled by `src/theme/Navbar/Layout/index.js`:
listens to `window` scroll with `{ passive: true }`.

---

## Footer

Global Docusaurus footer, restyled in `src/css/_footer.scss`:

- Background: `var(--ifm-background-color)` (overrides `footer--dark` built-in)
- Border-top: `1px solid var(--ifm-hr-border-color)`
- Padding: `1.5rem 0`
- Copyright text: `0.75rem`, `var(--ifm-color-content-secondary)`
- Heart icon: absolute, red `♥`, `heathing` keyframe animation

---

## Adding a Three.js Art Scene

1. Create a scene file in `src/art/scenes/` (export a setup/teardown pair).
2. In `src/pages/index.tsx`, the `<canvas>` element is the placeholder target.
   Pass `canvasRef.current` to your scene's setup function.
3. The canvas is conditionally mounted (viewport ≥ 1100 px); scenes must handle `null` gracefully.

Current state: canvas is empty (transparent) — no scene is active.
