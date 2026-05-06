/** Matches Docusaurus's internal _.kebabCase for tag permalinks (m1 → m-1, c++ → c) */
export function kebabCase(str: string): string {
  return str
    .replace(/([a-z])([0-9])/g, '$1-$2')
    .replace(/([0-9])([a-zA-Z])/g, '$1-$2')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[^a-zA-Z0-9\s-]+/g, ' ')  // strip special chars (+ # . @ etc) like _.kebabCase
    .replace(/[\s_]+/g, '-')
    .toLowerCase()
    .replace(/^-+|-+$/g, '');
}
