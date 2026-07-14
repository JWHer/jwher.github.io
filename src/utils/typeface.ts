/**
 * Site-wide typeface mode: 'sans' (default) ↔ 'serif'.
 *
 * localStorage['typeface'] is the single source of truth.
 * The attribute `data-typeface` on <html> drives all CSS tokens
 * (see src/css/_typography.scss). A headTags inline script in
 * docusaurus.config.js applies it before first paint, and the
 * client module src/clientModules/typeface.ts re-applies it after
 * hydration (Docusaurus/helmet resets <html> attributes).
 */

const KEY = 'typeface';

export type Typeface = 'sans' | 'serif';

export function getTypeface(): Typeface {
  if (typeof window === 'undefined') return 'sans';
  try {
    return window.localStorage.getItem(KEY) === 'serif' ? 'serif' : 'sans';
  } catch {
    return 'sans';
  }
}

export function applyTypeface(mode: Typeface): void {
  if (typeof document === 'undefined') return;
  if (mode === 'serif') {
    document.documentElement.dataset.typeface = 'serif';
  } else {
    delete document.documentElement.dataset.typeface;
  }
}

export function setTypeface(mode: Typeface): void {
  if (typeof window === 'undefined') return;
  try {
    if (mode === 'serif') {
      window.localStorage.setItem(KEY, 'serif');
    } else {
      window.localStorage.removeItem(KEY);
    }
  } catch {
    // localStorage unavailable — apply for this page view only
  }
  applyTypeface(mode);
}

export function toggleTypeface(): Typeface {
  const next = getTypeface() === 'serif' ? 'sans' : 'serif';
  setTypeface(next);
  return next;
}

// Console helper: window.__typeface()
if (typeof window !== 'undefined') {
  (window as unknown as { __typeface: () => Typeface }).__typeface = toggleTypeface;
}
