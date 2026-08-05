# Styling Guide

This document explains the styling architecture and customizations in this Docusaurus blog.

## Table of Contents

- [Architecture Overview](#architecture-overview)
- [Design Philosophy](#design-philosophy)
- [Typography Modes](#typography-modes)
- [Color System](#color-system)
- [Responsive Breakpoints](#responsive-breakpoints)
- [CSS Authoring Principles](#css-authoring-principles)
- [Style File Organization](#style-file-organization)
- [Custom Components](#custom-components)
- [Development Workflow](#development-workflow)
- [Linting](#linting)

## Architecture Overview

The blog uses a modular SCSS architecture with:

- **Global styles**: CSS variables and theme configurations
- **Typography modes**: Two site-wide typography systems switched by one attribute
- **Component styles**: Scoped styles for specific components
- **Swizzled components**: Customized Docusaurus components with enhanced functionality

## Design Philosophy

New pages and components should be *designed*, not assembled from defaults. This
follows the [`frontend-design`](https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md)
skill's principles, tailored to this site:

- **Ground in the subject.** Pull structure, vocabulary, and texture from the
  page's actual topic — its materials, instruments, artifacts — not a generic
  template. (See [/art/chess](src/pages) and [/cave](src/pages/cave) for
  examples that commit to a subject.)
- **Typography carries personality.** This site already commits to that: the
  two typeface modes (terminal-monospace / proportional-serif) *are* the brand.
  Reuse the `--jw-*` tokens; don't introduce ad-hoc fonts or sizes.
- **Structure encodes meaning.** Devices like the `§ ` h1 marker or numbered
  sequences should appear only when they say something true about the content —
  never as decoration.
- **Spend boldness once.** Give a page a single signature element; keep the rest
  quiet and disciplined.
- **Motion is deliberate.** One orchestrated moment beats scattered effects.
- **Copy is functional.** Words exist to aid understanding — active voice,
  specific over clever, consistent vocabulary.

Avoid the three AI-default looks: cream + serif + terracotta, near-black + neon
accent, and generic broadsheet hairlines. The palette and type system below are
the deliberate choice — extend them, don't replace them per-page.

**Process for a new page:** sketch a plan (color, type, layout, signature
element), critique it against the page's single purpose, *then* write code.

## Typography Modes

The site has two typography modes, driven entirely by CSS custom properties
(`--jw-*` tokens in [src/css/_typography.scss](src/css/_typography.scss)):

| | **sans (default)** | **serif (hidden toggle)** |
|---|---|---|
| Source rules | [The Monospace Web](https://owickstrom.github.io/the-monospace-web/) | [The Proportional Web](https://owickstrom.github.io/the-proportional-web/) |
| Body font | Noto Sans Mono + Nanum Gothic Coding (Hangul) | Noto Serif KR |
| Prose measure | 80ch | 66ch |
| Text align | left | justify + hyphens |
| Paragraphs | 1-rhythm gap | no gap, `p + p` 3ch indent |
| Headings | uppercase | small-caps + tracking |
| Numerals | tabular, lining | oldstyle |
| Borders | 2px | 1.5px |

Korean adjustments (ref: [daleui](https://github.com/DaleStudy/daleui)): rhythm
unit is 1.6rem (originals use 1.2rem) and prose uses `word-break: keep-all`.

**How it switches**: `data-typeface="serif"` on `<html>` overrides the tokens.
`localStorage['typeface']` is the single source of truth.

- **Toggle trigger**: clicking the heart (♥) icon in the footer
  ([src/theme/Footer/Layout/index.js](src/theme/Footer/Layout/index.js)), or
  `window.__typeface()` in the console
- **State/API**: [src/utils/typeface.ts](src/utils/typeface.ts)
- **Persistence across reloads**:
  [src/clientModules/typeface.ts](src/clientModules/typeface.ts) re-applies the
  attribute after hydration (Docusaurus strips unmanaged `<html>` attributes);
  an inline `headTags` script in `docusaurus.config.js` applies it before first
  paint to avoid FOUC
- **Infima bridge**: `--ifm-font-family-base` etc. alias the `--jw-*` tokens, so
  all Docusaurus components follow the mode without per-component changes
- Color mode (`data-theme`) is orthogonal and unaffected

**Prose rules** apply to `.markdown` containers (blog posts, docs body). Page
chrome (cards, labels, hero) keeps its own scale but inherits fonts via the
bridge.

### In-Article Heading Hierarchy

The post title is an h1 *outside* `.markdown`, so inside the body **h2 is the
de-facto top level**. The scale reflects that:

- **h1 (rare in body)**: 2rem + `§ ` prefix (`::before`) — marks an
  exceptional top-level division; without the marker it would be
  indistinguishable from h2 at the same size
- **h2**: 2rem — sized like h1 because it does h1's job in the body; 2rem sits
  on exactly 2 grid lines (no fractional rows, unlike e.g. 1.5rem)
- **h3–h6**: body size (1rem) — hierarchy by style (uppercase in sans,
  italic h3 in serif), per the originals' philosophy

All of this is scoped to `.markdown` on purpose: these rules describe a
*flowing document*, while page chrome (hero, cards) manages its own spacing —
global heading margins would break card layouts, and `§ ` on hero/post titles
is semantically wrong (a title is not a section).

**Considered alternative for the marker (not applied)**: mode-split via a
token — e.g. `--jw-h1-marker: '# '` in sans (markdown syntax, terminal
aesthetic) and `'§ '` in serif, with `content: var(--jw-h1-marker)`. Notes:

- A single `# ` is preferred over matching the markdown level (`#`/`##`/`###`)
  — level-matched markers get noisy and draw attention to the flat scale.
- Docusaurus already appends a `#` anchor link *after* each heading on hover
  (`.hash-link`), so a leading `#` would mirror it — symmetry or duplication,
  depending on taste. `§ ` avoids the collision entirely.

## Color System

Defined as CSS custom properties in
[src/css/_variables.scss](src/css/_variables.scss) (Infima `--ifm-*` tokens).
Light mode uses forest green; dark mode shifts to teal. Color mode
(`data-theme`) is orthogonal to typeface mode.

### Primary (green / teal)

| Step | Light | Dark |
|---|---|---|
| **base** | `#2e8555` | `#25c2a0` |
| dark | `#29784c` | `#21af90` |
| darker | `#277148` | `#1fa588` |
| darkest | `#205d3b` | `#1a8870` |
| light | `#33925d` | `#29d5b0` |
| lighter | `#359962` | `#32d8b4` |
| lightest | `#3cad6e` | `#4fddbf` |

### Secondary (red — accent / warning)

| Step | Light | Dark |
|---|---|---|
| **base** | `#c43d4a` | `#f74c5d` |
| dark | `#b13642` | `#f62d41` |
| darker | `#a8333e` | `#f51e33` |
| darkest | `#8a2a33` | `#d80a1e` |
| light | `#ca515c` | `#f86b79` |
| lighter | `#cd5b66` | `#f97a87` |
| lightest | `#d67881` | `#fba9b1` |

### Surface, text, border

| Role | Light | Dark |
|---|---|---|
| Page background (Obenauer cream) | `#faf8f4` | `#1d1e20` |
| Card / panel surface | `#f0ece4` | `#2e2e33` |
| Base text | `#1c1b1a` | `#dadadb` |
| Secondary text | `#777` | `#9b9c9d` |
| HR / border | `rgb(0 0 0 / 9%)` | `rgb(255 255 255 / 9%)` |

Navbar/header tokens (`--navbar-*`, `--header-text-*`) are rewritten at runtime
by the scroll-aware navbar — see [Navbar Layout](#navbar-layout).

## Responsive Breakpoints

Two-tier by design — a blog only needs mobile vs. desktop. The single SCSS
variable lives in [src/css/_variables.scss](src/css/_variables.scss):

| Variable | Value | Range |
|---|---|---|
| `$bp-mobile` | `799px` | ≤799px = mobile |
| (default) | — | ≥800px = desktop |

```scss
@media (max-width: $bp-mobile) {
  // mobile-only overrides
}
```

## CSS Authoring Principles

- **Override only size inside media queries.** Don't repeat color, font-family,
  or other properties that don't change across breakpoints.
- **Prefer tokens over literals.** Use `--jw-*` typography tokens and `--ifm-*`
  color tokens; avoid hard-coded fonts, sizes, or hexes in component styles.
- **Co-locate component styles** as CSS modules (`*.module.scss`); keep global
  rules in `src/css/`.
- **Don't over-box.** Extra wrappers add whitespace and lengthen scroll.
- **Upload images at native size, shape them in CSS** — avoids re-uploading to
  tweak later.

```scss
// Good — the media query redefines size only
.section-title {
  font-size: 40px;
  font-weight: 600;
  color: var(--ifm-font-color-base);
}
@media (max-width: $bp-mobile) {
  .section-title { font-size: 22px; }
}
```

## Style File Organization

### Main Entry Point

**File**: [src/css/custom.scss](src/css/custom.scss)

This is the main stylesheet imported by Docusaurus. It imports all partial SCSS files:

```scss
@import 'variables';
@import 'typography';
@import 'navbar';
@import 'footer';
@import 'presentation';
```

`_mixins.scss` is not imported globally — component modules that need shared
mixins (e.g. `title-link`) import it directly.

### Style Modules

#### 1. Variables (`src/css/_variables.scss`)

Defines all CSS custom properties (variables) used throughout the site:

- **Color schemes**: Primary, secondary colors for light/dark themes
- **Layout variables**: Custom navbar and header text colors
- **Code styling**: Code block colors and highlighting

**Key Variables**:
```scss
--ifm-color-primary: #2e8555;
--header-text-color: #e3e3e3;
--navbar-bg-color: transparent;
```

#### 2. Typography (`src/css/_typography.scss`)

Holds the whole typeface system (see [Typography Modes](#typography-modes)):

- **`--jw-*` tokens**: the two-mode source of truth (fonts, measure, rhythm)
- **Prose rules**: `.markdown` body styling — paragraphs, lists, code, `hr`
- **Article heading margins**: in multiples of `--jw-rhythm` (e.g. h2 gets
  `calc(var(--jw-rhythm) * 2)` top margin)

There is no separate `_layout.scss`; the negative-margin overlay for the fixed
transparent navbar lives in `_navbar.scss`.

#### 3. Navbar (`src/css/_navbar.scss`)

Handles navigation bar styling:

- **Dynamic colors**: Uses CSS variables that change on scroll (see [Navbar Component](#navbar-layout))
- **Social icons**: Uses SVG masks for color-adaptable icons

**Icon Implementation**:
```scss
%icon {
  // Shared icon styles using mask-image
  mask-size: cover;
  background-color: currentcolor;
}

.icon-github::after {
  @extend %icon;
  mask-image: url('/static/img/github-brands.svg');
}
```

#### 4. Footer (`src/css/_footer.scss`)

Footer styling with animated elements:

- **Heart animation**: Pulsing heart icon using `@keyframes heathing`
- **Copyright section**: Styled copyright text

#### 5. Presentation (`src/css/_presentation.scss`)

Styles for the presentation/hero sections:

- **Title styling**: Large, centered titles with responsive font sizes
- **Responsive design**: Adjusts font sizes for mobile (`max-width: 767px`)

## Custom Components

### Navbar Layout

**File**: [src/theme/Navbar/Layout/index.js](src/theme/Navbar/Layout/index.js)

**Purpose**: Creates a transparent navbar that becomes solid on scroll.

**How it works**:

1. Listens to scroll events
2. Changes CSS variables based on scroll position:
   - `scrollY < 150px`: Transparent navbar with light text
   - `scrollY >= 150px`: Solid background with theme-appropriate colors

**Memory Safety**:
- Properly removes event listener on component unmount
- Prevents memory leaks from multiple listeners

**Code Example**:
```javascript
const handleScroll = () => {
  const isAtTop = window.scrollY < SCROLL_THRESHOLD;

  if (isAtTop) {
    document.documentElement.style.setProperty(
      '--navbar-bg-color', 'transparent'
    );
  } else {
    document.documentElement.style.setProperty(
      '--navbar-bg-color', 'var(--ifm-background-surface-color)'
    );
  }
};

// Cleanup on unmount
return () => {
  document.removeEventListener('scroll', handleScroll);
};
```

### Blog Post Item

**File**: [src/theme/BlogPostItem/index.js](src/theme/BlogPostItem/index.js)

**Purpose**: Adds Utterances comments and Buy Me a Coffee button to blog posts.

**Features**:

1. **Utterances Integration**:
   - Dynamically loads Utterances comment widget
   - Syncs theme (dark/light) with site theme
   - Updates existing comments when theme changes

2. **Buy Me a Coffee**:
   - Shows support button only on full blog post pages
   - Hidden in blog list view

**Key Logic**:
```javascript
useEffect(() => {
  if (!isBlogPostPage) return;

  const utterancesEl = containerRef.current?.querySelector(
    'iframe.utterances-frame'
  );

  // Create or update Utterances widget
  utterancesEl ? postThemeMessage() : createUtterancesEl();
}, [utterancesTheme, isBlogPostPage]);
```

## Development Workflow

### Prerequisites

```bash
npm install
```

### Running Development Server

```bash
npm start
```

This starts a local development server with hot reload.

### Building for Production

```bash
npm run build
```

Builds a static site in the `build` directory.

### Type Checking

```bash
npm run typecheck
```

Runs TypeScript type checking on the codebase.

## Linting

### Stylelint

Ensures SCSS code quality and consistency.

**Configuration**: [.stylelintrc.json](.stylelintrc.json)

**Run linting**:
```bash
npx stylelint "src/**/*.scss"
```

**Auto-fix issues**:
```bash
npx stylelint "src/**/*.scss" --fix
```

**Rules**:
- Enforces kebab-case for keyframe names
- Requires spacing around operators
- Follows SCSS best practices

### ESLint

Ensures JavaScript/React code quality.

**Configuration**: [eslint.config.mjs](eslint.config.mjs)

**Run linting**:
```bash
npx eslint "src/**/*.js"
```

**Auto-fix issues**:
```bash
npx eslint "src/**/*.js" --fix
```

**Rules**:
- React best practices
- No unused variables (warnings)
- Modern ES6+ syntax

### Prettier

Code formatting tool (optional but recommended).

**Configuration**: [.prettierrc.json](.prettierrc.json)

**Format code**:
```bash
npx prettier --write "src/**/*.{js,jsx,scss,css}"
```

## File Structure

```
src/
├── css/
│   ├── custom.scss           # Main entry point
│   ├── _variables.scss       # CSS custom properties (colors)
│   ├── _typography.scss      # Typeface mode tokens + prose rules
│   ├── _mixins.scss          # Shared mixins (title-link)
│   ├── _navbar.scss          # Navbar styles
│   ├── _footer.scss          # Footer styles
│   └── _presentation.scss    # Hero/presentation styles
├── clientModules/
│   └── typeface.ts           # Re-applies typeface mode after hydration
├── utils/
│   └── typeface.ts           # Typeface mode state (localStorage SSOT)
├── theme/
│   ├── Navbar/
│   │   └── Layout/
│   │       └── index.js      # Scroll-based navbar
│   ├── Footer/
│   │   └── Layout/
│   │       └── index.js      # Hidden typeface toggle (heart icon)
│   └── BlogPostItem/
│       └── index.js          # Utterances + support button
└── pages/
    └── index.module.scss     # Homepage specific styles
```

## Migration Notes

### Upgrading from Docusaurus 2 to 3

Key breaking changes addressed:

1. **prism-react-renderer**: Changed import from individual theme files to themes object
   ```javascript
   // Old (v2)
   const lightTheme = require('prism-react-renderer/themes/github');

   // New (v3)
   const {themes} = require('prism-react-renderer');
   const lightTheme = themes.github;
   ```

2. **React 18**: Updated from React 17 to 18
3. **MDX 3**: Updated MDX parser (more strict - some markdown files may need fixes)
4. **Dependencies**: All Docusaurus packages updated to 3.9.2

## Best Practices

1. **Use CSS Variables**: For colors and theme-specific values
2. **Modular SCSS**: Keep styles organized in separate files
3. **Component Co-location**: Component-specific styles should use CSS modules
4. **Responsive Design**: Always test on mobile viewports
5. **Performance**: Minimize CSS, use efficient selectors
6. **Accessibility**: Maintain color contrast ratios
7. **Memory Management**: Clean up event listeners in React components

## Troubleshooting

### Styles Not Updating

1. Clear Docusaurus cache: `npm run clear`
2. Restart dev server: `npm start`

### Linting Errors

1. Run auto-fix: `npx stylelint "src/**/*.scss" --fix`
2. Check [.stylelintrc.json](.stylelintrc.json) for custom rules

### Build Errors

1. Check for MDX syntax errors in markdown files
2. Run type check: `npm run typecheck`
3. Verify all imports are correct

## Additional Resources

- [Docusaurus Documentation](https://docusaurus.io/)
- [Infima CSS Framework](https://infima.dev/)
- [SCSS Documentation](https://sass-lang.com/documentation)
- [Stylelint Rules](https://stylelint.io/user-guide/rules/list)
- [ESLint Rules](https://eslint.org/docs/latest/rules/)
