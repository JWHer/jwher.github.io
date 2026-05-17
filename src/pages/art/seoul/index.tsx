import React, { useEffect, useRef, useState, useCallback } from 'react';
import ArtLayout from '@site/src/components/ArtLayout';

// ─── Types ───────────────────────────────────────────────────────────────────

type Polyline = [number, number][];

interface LayerDef {
  key: string;
  file: string;
  label: string;
  lineWidth: number;
  darkColor: string;
  lightColor: string;
  shortcut: string;
}

interface ThemeColors {
  background: string;
  inactiveText: string;
  helpText: string;
  loadingText: string;
  loadingSubText: string;
  zoomText: string;
}

// ─── Theme color palettes ────────────────────────────────────────────────────

const DARK_COLORS: ThemeColors = {
  background: '#000',
  inactiveText: 'rgba(255,255,255,0.15)',
  helpText: 'rgba(255,255,255,0.12)',
  loadingText: 'rgba(255,255,255,0.4)',
  loadingSubText: 'rgba(255,255,255,0.25)',
  zoomText: 'rgba(255,255,255,0.25)',
};

const LIGHT_COLORS: ThemeColors = {
  background: '#F7F2E8',
  inactiveText: 'rgba(26,26,26,0.2)',
  helpText: 'rgba(26,26,26,0.18)',
  loadingText: 'rgba(26,26,26,0.4)',
  loadingSubText: 'rgba(26,26,26,0.25)',
  zoomText: 'rgba(26,26,26,0.3)',
};

// ─── Layer definitions ───────────────────────────────────────────────────────

const LAYERS: LayerDef[] = [
  {
    key: 'water',
    file: 'water.json',
    label: 'Water',
    lineWidth: 0.8,
    darkColor: 'rgba(60,140,200,0.6)',
    lightColor: 'rgba(60,120,180,0.6)',
    shortcut: '1',
  },
  {
    key: 'motorway',
    file: 'roads-motorway.json',
    label: 'Expressway',
    lineWidth: 1.8,
    darkColor: 'rgba(255,255,255,0.95)',
    lightColor: 'rgba(26,26,26,0.85)',
    shortcut: '2',
  },
  {
    key: 'primary',
    file: 'roads-primary.json',
    label: 'Major Road',
    lineWidth: 1.2,
    darkColor: 'rgba(255,255,255,0.75)',
    lightColor: 'rgba(26,26,26,0.65)',
    shortcut: '3',
  },
  {
    key: 'secondary',
    file: 'roads-secondary.json',
    label: 'Secondary',
    lineWidth: 0.6,
    darkColor: 'rgba(255,255,255,0.50)',
    lightColor: 'rgba(26,26,26,0.45)',
    shortcut: '4',
  },
  {
    key: 'residential',
    file: 'roads-residential.json',
    label: 'Residential',
    lineWidth: 0.3,
    darkColor: 'rgba(255,255,255,0.28)',
    lightColor: 'rgba(26,26,26,0.25)',
    shortcut: '5',
  },
  {
    key: 'railway',
    file: 'railways.json',
    label: 'Railway',
    lineWidth: 1.0,
    darkColor: 'rgba(0,200,255,0.65)',
    lightColor: 'rgba(180,60,60,0.65)',
    shortcut: '6',
  },
];

// ─── Geo projection: Mercator (Seoul bounding box) ──────────────────────────

const SEOUL_BBOX = { minLon: 126.764, maxLon: 127.183, minLat: 37.428, maxLat: 37.701 };

function project(lon: number, lat: number, w: number, h: number): [number, number] {
  const x = ((lon - SEOUL_BBOX.minLon) / (SEOUL_BBOX.maxLon - SEOUL_BBOX.minLon)) * w;
  // Mercator y: invert so north is up
  const latRad = (lat * Math.PI) / 180;
  const minLatRad = (SEOUL_BBOX.minLat * Math.PI) / 180;
  const maxLatRad = (SEOUL_BBOX.maxLat * Math.PI) / 180;
  const mercY = Math.log(Math.tan(Math.PI / 4 + latRad / 2));
  const mercMin = Math.log(Math.tan(Math.PI / 4 + minLatRad / 2));
  const mercMax = Math.log(Math.tan(Math.PI / 4 + maxLatRad / 2));
  const y = (1 - (mercY - mercMin) / (mercMax - mercMin)) * h;
  return [x, y];
}

// ─── Zoom/pan constants ─────────────────────────────────────────────────────

const MIN_SCALE = 0.5;
const MAX_SCALE = 10;
const ZOOM_FACTOR = 1.15;

// ─── Theme detection helper ─────────────────────────────────────────────────

function detectTheme(): 'dark' | 'light' {
  if (typeof document === 'undefined') return 'dark';
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

// ─── Canvas renderer ─────────────────────────────────────────────────────────

function SeoulCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const layerDataRef = useRef<Map<string, Polyline[]>>(new Map());
  const visibleRef = useRef<Set<string>>(new Set(LAYERS.map((l) => l.key)));
  const [controlsVisible, setControlsVisible] = useState(true);
  const [loading, setLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState('');
  const rafRef = useRef(0);

  // Zoom/pan state stored in refs for performance (no re-render on every frame)
  const scaleRef = useRef(1);
  const offsetXRef = useRef(0);
  const offsetYRef = useRef(0);

  // Mouse drag state
  const isDraggingRef = useRef(false);
  const lastMouseRef = useRef({ x: 0, y: 0 });

  // Theme state
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const themeRef = useRef<'dark' | 'light'>('dark');

  // Force re-render for control UI
  const [, forceUpdate] = useState(0);

  // Zoom display state
  const [zoomDisplay, setZoomDisplay] = useState('1.0');

  // ─── Theme detection ────────────────────────────────────────────────────

  useEffect(() => {
    const currentTheme = detectTheme();
    setTheme(currentTheme);
    themeRef.current = currentTheme;

    const observer = new MutationObserver(() => {
      const newTheme = detectTheme();
      setTheme(newTheme);
      themeRef.current = newTheme;
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => observer.disconnect();
  }, []);

  // ─── Load data ──────────────────────────────────────────────────────────

  useEffect(() => {
    let cancelled = false;
    async function loadAll() {
      for (let i = 0; i < LAYERS.length; i++) {
        const layer = LAYERS[i];
        setLoadProgress(`${layer.label} (${i + 1}/${LAYERS.length})`);
        try {
          const res = await fetch(`/data/seoul/${layer.file}`);
          if (res.ok) {
            const data = await res.json();
            if (!cancelled) layerDataRef.current.set(layer.key, data);
          }
        } catch {
          // Layer not yet available — skip silently
        }
      }
      if (!cancelled) {
        setLoading(false);
        setLoadProgress('');
      }
    }
    loadAll();
    return () => {
      cancelled = true;
    };
  }, []);

  // ─── Keyboard handler ──────────────────────────────────────────────────

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const layer = LAYERS.find((l) => l.shortcut === e.key);
      if (layer) {
        const vis = visibleRef.current;
        if (vis.has(layer.key)) vis.delete(layer.key);
        else vis.add(layer.key);
        forceUpdate((n) => n + 1);
      }
      if (e.key === 'h' || e.key === 'H') setControlsVisible((v) => !v);
      if (e.key === 'r' || e.key === 'R') {
        scaleRef.current = 1;
        offsetXRef.current = 0;
        offsetYRef.current = 0;
        setZoomDisplay('1.0');
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // ─── Mouse zoom/pan handlers ───────────────────────────────────────────

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Wheel zoom — zoom towards cursor position
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const oldScale = scaleRef.current;
      const direction = e.deltaY < 0 ? 1 : -1;
      const newScale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, oldScale * (direction > 0 ? ZOOM_FACTOR : 1 / ZOOM_FACTOR)));

      // Zoom towards cursor: adjust offset so the point under the cursor stays fixed
      const scaleFactor = newScale / oldScale;
      offsetXRef.current = mouseX - scaleFactor * (mouseX - offsetXRef.current);
      offsetYRef.current = mouseY - scaleFactor * (mouseY - offsetYRef.current);

      scaleRef.current = newScale;
      setZoomDisplay(newScale.toFixed(1));
    };

    // Double-click zoom in 2x towards click position
    const onDblClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const oldScale = scaleRef.current;
      const newScale = Math.min(MAX_SCALE, oldScale * 2);
      const scaleFactor = newScale / oldScale;

      offsetXRef.current = mouseX - scaleFactor * (mouseX - offsetXRef.current);
      offsetYRef.current = mouseY - scaleFactor * (mouseY - offsetYRef.current);

      scaleRef.current = newScale;
      setZoomDisplay(newScale.toFixed(1));
    };

    // Mouse drag for panning
    const onMouseDown = (e: MouseEvent) => {
      if (e.button !== 0) return; // left button only
      isDraggingRef.current = true;
      lastMouseRef.current = { x: e.clientX, y: e.clientY };
      canvas.style.cursor = 'grabbing';
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const dx = e.clientX - lastMouseRef.current.x;
      const dy = e.clientY - lastMouseRef.current.y;
      offsetXRef.current += dx;
      offsetYRef.current += dy;
      lastMouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDraggingRef.current = false;
      canvas.style.cursor = 'grab';
    };

    canvas.addEventListener('wheel', onWheel, { passive: false });
    canvas.addEventListener('dblclick', onDblClick);
    canvas.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      canvas.removeEventListener('wheel', onWheel);
      canvas.removeEventListener('dblclick', onDblClick);
      canvas.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  // ─── Draw loop ─────────────────────────────────────────────────────────

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    let t0: number | null = null;
    const draw = (ts: number) => {
      if (!t0) t0 = ts;
      const t = (ts - t0) / 1000;
      const W = canvas.width;
      const H = canvas.height;
      const isDark = themeRef.current === 'dark';

      // Clear with theme-appropriate background
      ctx.fillStyle = isDark ? '#000' : '#F7F2E8';
      ctx.fillRect(0, 0, W, H);

      // Breathing opacity
      const breathe = 0.92 + Math.sin(t * 0.3) * 0.08;

      // Compute padding to center Seoul with correct aspect ratio
      const bboxAspect =
        (SEOUL_BBOX.maxLon - SEOUL_BBOX.minLon) /
        ((SEOUL_BBOX.maxLat - SEOUL_BBOX.minLat) * 1.3); // ~Mercator stretch
      const screenAspect = W / H;

      let drawW = W;
      let drawH = H;
      let baseOffsetX = 0;
      let baseOffsetY = 0;

      if (screenAspect > bboxAspect) {
        drawW = H * bboxAspect;
        baseOffsetX = (W - drawW) / 2;
      } else {
        drawH = W / bboxAspect;
        baseOffsetY = (H - drawH) / 2;
      }

      const scale = scaleRef.current;

      ctx.save();
      // Apply zoom/pan transform: first user offset, then scale
      ctx.translate(offsetXRef.current, offsetYRef.current);
      ctx.scale(scale, scale);
      // Then the base centering offset
      ctx.translate(baseOffsetX, baseOffsetY);
      ctx.globalAlpha = breathe;

      // Draw each visible layer
      for (const layerDef of LAYERS) {
        if (!visibleRef.current.has(layerDef.key)) continue;

        // Hide residential at low zoom for performance
        if (layerDef.key === 'residential' && scale < 1.5) continue;

        const data = layerDataRef.current.get(layerDef.key);
        if (!data) continue;

        ctx.strokeStyle = isDark ? layerDef.darkColor : layerDef.lightColor;

        // At high zoom, divide lineWidth by scale to keep lines visually consistent
        const lw = scale > 3 ? layerDef.lineWidth / scale : layerDef.lineWidth;
        ctx.lineWidth = lw;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        for (const poly of data) {
          if (poly.length < 2) continue;
          ctx.beginPath();
          const [x0, y0] = project(poly[0][0], poly[0][1], drawW, drawH);
          ctx.moveTo(x0, y0);
          for (let i = 1; i < poly.length; i++) {
            const [x, y] = project(poly[i][0], poly[i][1], drawW, drawH);
            ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
      }

      ctx.restore();
      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const toggleLayer = useCallback((key: string) => {
    const vis = visibleRef.current;
    if (vis.has(key)) vis.delete(key);
    else vis.add(key);
    forceUpdate((n) => n + 1);
  }, []);

  const isDark = theme === 'dark';
  const colors = isDark ? DARK_COLORS : LIGHT_COLORS;

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{ position: 'fixed', inset: 0, display: 'block', zIndex: 9999, cursor: 'grab' }}
      />

      {/* Loading indicator */}
      {loading && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: colors.loadingText,
            fontSize: '0.7rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            zIndex: 10001,
            textAlign: 'center',
          }}
        >
          <div>Loading</div>
          <div style={{ marginTop: '0.5rem', color: colors.loadingSubText }}>
            {loadProgress}
          </div>
        </div>
      )}

      {/* Zoom level display — top right */}
      {!loading && (
        <div
          style={{
            position: 'fixed',
            top: '1.4rem',
            right: '1.6rem',
            zIndex: 10001,
            fontFamily: 'monospace',
            fontSize: '0.78rem',
            letterSpacing: '0.10em',
            color: colors.zoomText,
            userSelect: 'none',
          }}
        >
          &times;{zoomDisplay}
        </div>
      )}

      {/* Layer controls — stop wheel/pointer events from reaching the canvas */}
      {controlsVisible && !loading && (
        <div
          onWheel={(e) => e.stopPropagation()}
          onPointerDown={(e) => e.stopPropagation()}
          style={{
            position: 'fixed',
            bottom: '1.4rem',
            right: '1.6rem',
            zIndex: 10001,
            fontFamily: 'monospace',
            fontSize: '0.78rem',
            letterSpacing: '0.10em',
            lineHeight: 2.5,
            background: 'rgba(0,0,0,0.4)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
            padding: '0.6rem 1rem',
            borderRadius: '4px',
          }}
        >
          {LAYERS.map((l) => {
            const active = visibleRef.current.has(l.key);
            const layerColor = isDark ? l.darkColor : l.lightColor;
            return (
              <div
                key={l.key}
                onClick={() => toggleLayer(l.key)}
                style={{
                  cursor: 'pointer',
                  color: active ? layerColor : colors.inactiveText,
                  userSelect: 'none',
                  textAlign: 'right',
                }}
              >
                [{l.shortcut}] {l.label}
              </div>
            );
          })}
          <div
            style={{
              color: colors.helpText,
              marginTop: '0.6rem',
              textAlign: 'right',
            }}
          >
            H hide
          </div>
          <div
            style={{
              color: colors.helpText,
              textAlign: 'right',
            }}
          >
            Scroll zoom &middot; Drag pan &middot; R reset
          </div>
        </div>
      )}
    </>
  );
}

// ─── Page Component ──────────────────────────────────────────────────────────

export default function Seoul() {
  const [mounted, setMounted] = React.useState(false);
  const [theme, setTheme] = React.useState<'dark' | 'light'>('dark');

  React.useEffect(() => {
    setMounted(true);
    setTheme(detectTheme());

    const observer = new MutationObserver(() => {
      setTheme(detectTheme());
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => observer.disconnect();
  }, []);

  const bgColor = theme === 'dark' ? '#000' : '#F7F2E8';

  return (
    <ArtLayout artworkId="seoul" title="서울 Seoul" year={2026}>
      {/* Override ArtLayout's hardcoded dark background for light mode */}
      <style>{`
        #__docusaurus { background: ${bgColor}; }
      `}</style>
      {mounted && <SeoulCanvas />}
    </ArtLayout>
  );
}
