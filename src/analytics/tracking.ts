declare function gtag(...args: unknown[]): void;

export function trackEvent(name: string, params: Record<string, unknown> = {}): void {
  if (typeof gtag === 'undefined') return;
  gtag('event', name, params);
}

let scrollDepthsFired: Set<number>;

function initScrollTracking(): void {
  scrollDepthsFired = new Set();
  const thresholds = [25, 50, 75, 100];

  function onScroll(): void {
    const el = document.documentElement;
    const scrolled = el.scrollTop + window.innerHeight;
    const total = el.scrollHeight;
    const pct = Math.floor((scrolled / total) * 100);

    for (const t of thresholds) {
      if (pct >= t && !scrollDepthsFired.has(t)) {
        scrollDepthsFired.add(t);
        trackEvent('scroll_depth', {
          depth: t,
          page_path: window.location.pathname,
        });
      }
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
}

function initOutboundTracking(): void {
  document.addEventListener('click', (e) => {
    const target = e.target as Element;
    const a = target.closest('a') as HTMLAnchorElement | null;
    if (a?.hostname && a.hostname !== window.location.hostname) {
      trackEvent('outbound_click', {
        url: a.href,
        source_page: window.location.pathname,
      });
    }
  });
}

export default function initTracking(): void {
  if (typeof window === 'undefined') return;
  initOutboundTracking();
  initScrollTracking();
}
