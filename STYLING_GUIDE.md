# Styling Guide

This document explains the styling architecture and customizations in this Docusaurus blog.

## Table of Contents

- [Architecture Overview](#architecture-overview)
- [Style File Organization](#style-file-organization)
- [Custom Components](#custom-components)
- [Development Workflow](#development-workflow)
- [Linting](#linting)

## Architecture Overview

The blog uses a modular SCSS architecture with:

- **Global styles**: CSS variables and theme configurations
- **Component styles**: Scoped styles for specific components
- **Swizzled components**: Customized Docusaurus components with enhanced functionality

## Style File Organization

### Main Entry Point

**File**: [src/css/custom.scss](src/css/custom.scss)

This is the main stylesheet imported by Docusaurus. It imports all partial SCSS files:

```scss
@import 'variables';
@import 'layout';
@import 'navbar';
@import 'footer';
@import 'presentation';
```

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

#### 2. Layout (`src/css/_layout.scss`)

Controls the main page layout:

- **Main wrapper**: Adjusts for fixed navbar with negative top margin
- **Article spacing**: Sets consistent heading margins (h2: 5rem, h3: 3rem)

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
│   ├── _variables.scss       # CSS custom properties
│   ├── _layout.scss          # Layout styles
│   ├── _navbar.scss          # Navbar styles
│   ├── _footer.scss          # Footer styles
│   └── _presentation.scss    # Hero/presentation styles
├── theme/
│   ├── Navbar/
│   │   └── Layout/
│   │       └── index.js      # Scroll-based navbar
│   ├── BlogPostItem/
│   │   └── index.js          # Utterances + support button
│   └── pages/
│       ├── main.scss         # (Legacy - will be migrated)
│       ├── navbar.scss       # (Legacy - will be migrated)
│       ├── footer.scss       # (Legacy - will be migrated)
│       └── presentation.scss # (Legacy - will be migrated)
└── pages/
    └── index.module.scss     # Homepage specific styles
```

## Migration Notes

### Legacy Style Files

The following files in `src/theme/pages/` are legacy and should be considered deprecated:
- `main.scss`
- `navbar.scss`
- `footer.scss`
- `presentation.scss`

New modular files in `src/css/` should be used instead. The legacy files are kept temporarily for backward compatibility but will be removed in future cleanup.

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
