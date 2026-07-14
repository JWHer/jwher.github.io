/**
 * Re-applies the saved typeface mode after hydration.
 *
 * The headTags inline script (docusaurus.config.js) sets `data-typeface`
 * before first paint, but Docusaurus/helmet reconciles <html> attributes
 * during hydration and strips attributes it does not manage. This module
 * restores it after every route render (including the initial one).
 */
import { applyTypeface, getTypeface } from '../utils/typeface';

if (typeof window !== 'undefined') {
  applyTypeface(getTypeface());
}

export function onRouteDidUpdate(): void {
  applyTypeface(getTypeface());
}
