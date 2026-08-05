import { useEffect, useRef } from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import styles from './WordGraph.module.scss';

/**
 * Force-directed graph of the answer word and its nearest neighbors, shown on
 * solve/give-up. vis-network is heavy, so it's dynamically imported here — the
 * chunk loads only when this component mounts (i.e. the game is over).
 *
 * After the layout stabilizes, physics is turned off and node positions are
 * nudged every frame so nodes glide away from the cursor (a repulsion field
 * that follows the pointer) and ease back home when it leaves. Hover also
 * lights a node up via vis-network's built-in hover colors. Skipped entirely
 * under prefers-reduced-motion.
 */

interface Props {
  centerWord: string;
  neighbors: { word: string; sim: number }[];
}

type RGB = [number, number, number];
const mix = (a: RGB, b: RGB, t: number): string =>
  `rgb(${a.map((c, i) => Math.round(c * t + b[i] * (1 - t))).join(',')})`;

type Net = {
  destroy(): void;
  once(e: string, cb: () => void): void;
  setOptions(o: unknown): void;
  fit(): void;
  getScale(): number;
  moveTo(o: { scale: number }): void;
  getPositions(): Record<string, { x: number; y: number }>;
  moveNode(id: string, x: number, y: number): void;
  DOMtoCanvas(p: { x: number; y: number }): { x: number; y: number };
};

// Cursor repulsion tuning (from the interactive demo).
const RADIUS = 150;
const STRENGTH = 55;
const EASE = 0.05;
// `fit()` frames node centers, but labels overflow above/below the top and
// bottom nodes and get clipped. Zoom out a touch to leave room for them.
const FIT_MARGIN = 0.9;

export default function WordGraph({ centerWord, neighbors }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { colorMode } = useColorMode();

  useEffect(() => {
    const el = ref.current;
    if (!el || neighbors.length === 0) return undefined;

    let network: Net | null = null;
    let raf = 0;
    let cancelled = false;
    let removeListeners = () => {};

    (async () => {
      const { Network } = await import('vis-network/standalone');
      if (cancelled || !ref.current) return;

      const dark = colorMode === 'dark';
      const GREEN: RGB = dark ? [0x25, 0xc2, 0xa0] : [0x2e, 0x85, 0x55];
      const GRAY: RGB = dark ? [0x7e, 0x7e, 0x86] : [0xa8, 0xa4, 0x9c];
      const ink = dark ? '#dadadb' : '#1c1b1a';
      const centerBg = dark ? '#25c2a0' : '#2e8555';
      const face = 'Nanum Gothic Coding, Noto Sans Mono, monospace';

      const sims = neighbors.map((n) => n.sim);
      const lo = Math.min(...sims);
      const hi = Math.max(...sims);
      const norm = (s: number) => (hi > lo ? (s - lo) / (hi - lo) : 1);

      const nodes: Record<string, unknown>[] = [
        {
          id: 'center',
          label: centerWord,
          shape: 'dot',
          size: 34,
          color: { background: centerBg, border: centerBg, hover: { background: centerBg, border: centerBg } },
          font: { size: 26, color: ink, face, bold: true },
        },
      ];
      const edges: Record<string, unknown>[] = [];

      neighbors.forEach((nb, i) => {
        const id = `n${i}`;
        const t = norm(nb.sim);
        const col = mix(GREEN, GRAY, t);
        const hot = mix(GREEN, GRAY, Math.min(1, t + 0.35)); // brighter on hover
        nodes.push({
          id,
          label: nb.word,
          shape: 'dot',
          size: 6 + 16 * t,
          color: { background: col, border: col, hover: { background: hot, border: hot } },
          font: { size: 12 + 10 * t, color: col, face },
        });
        edges.push({
          from: 'center',
          to: id,
          color: { color: col, opacity: 0.22 + 0.4 * t, highlight: hot, hover: hot },
          width: 0.5 + 2 * t,
        });
      });

      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      network = new Network(
        ref.current,
        { nodes, edges },
        {
          physics: {
            solver: 'forceAtlas2Based',
            forceAtlas2Based: {
              gravitationalConstant: -60,
              centralGravity: 0.012,
              springLength: 110,
              springConstant: 0.08,
              avoidOverlap: 1,
            },
            stabilization: { iterations: reduce ? 1 : 240 },
            minVelocity: 0.5,
          },
          interaction: {
            hover: true,
            dragNodes: false,
            dragView: false,
            zoomView: false,
            selectable: false,
          },
          nodes: { borderWidth: 0, shadow: false },
          edges: { smooth: { enabled: true, type: 'continuous', roundness: 0.5 } },
        },
      ) as unknown as Net;

      network.once('stabilizationIterationsDone', () => {
        if (!network) return;
        network.setOptions({ physics: false });
        network.fit();
        network.moveTo({ scale: network.getScale() * FIT_MARGIN });
        if (reduce) return;

        // Snapshot the settled layout; the loop eases nodes between `home`
        // and a cursor-pushed target.
        const home = network.getPositions();
        const cur: Record<string, { x: number; y: number }> = {};
        for (const id in home) cur[id] = { ...home[id] };
        let pointer: { x: number; y: number } | null = null;

        const onMove = (e: MouseEvent) => {
          const r = el.getBoundingClientRect();
          pointer = network!.DOMtoCanvas({ x: e.clientX - r.left, y: e.clientY - r.top });
        };
        const onLeave = () => {
          pointer = null;
        };
        el.addEventListener('mousemove', onMove);
        el.addEventListener('mouseleave', onLeave);
        removeListeners = () => {
          el.removeEventListener('mousemove', onMove);
          el.removeEventListener('mouseleave', onLeave);
        };

        const loop = () => {
          for (const id in home) {
            const h = home[id];
            let tx = h.x;
            let ty = h.y;
            if (pointer) {
              const dx = h.x - pointer.x;
              const dy = h.y - pointer.y;
              const d = Math.hypot(dx, dy) || 1;
              if (d < RADIUS) {
                const f = STRENGTH * (1 - d / RADIUS);
                tx = h.x + (dx / d) * f;
                ty = h.y + (dy / d) * f;
              }
            }
            const c = cur[id];
            c.x += (tx - c.x) * EASE;
            c.y += (ty - c.y) * EASE;
            network!.moveNode(id, c.x, c.y);
          }
          raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
      });
    })();

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      removeListeners();
      if (network) network.destroy();
    };
  }, [centerWord, neighbors, colorMode]);

  if (neighbors.length === 0) return null;
  return <div className={styles.graph} ref={ref} aria-hidden="true" />;
}
