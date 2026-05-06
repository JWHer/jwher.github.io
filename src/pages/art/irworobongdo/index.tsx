import React, { useEffect, useRef, useCallback } from 'react';
import ArtLayout from '@site/src/components/ArtLayout';
import { PATHS, ASPECT_RATIO, type PathData } from './_paths';

// ─── Animation constants ────────────────────────────────────────────────────

const SUN_CYCLE = 8;        // seconds for sun color cycle
const PEAK_SWAY_AMP = 0.8;  // pixels
const PEAK_SWAY_PERIOD = 8;  // seconds
const PINE_SWAY_AMP = 0.5;  // pixels
const PINE_SWAY_PERIOD = 5;  // seconds
const WAVE_DRIFT_SPEED = 10; // pixels/second horizontal
const WAVE_BOB_AMP = 2;     // pixels vertical bobbing

// ─── Path2D cache builder ───────────────────────────────────────────────────

function buildPath2D(pts: PathData, scaleX: number, scaleY: number, offsetX = 0, offsetY = 0): Path2D {
  const p = new Path2D();
  if (pts.length < 2) return p;
  p.moveTo(pts[0][0] * scaleX + offsetX, pts[0][1] * scaleY + offsetY);
  for (let i = 1; i < pts.length; i++) {
    p.lineTo(pts[i][0] * scaleX + offsetX, pts[i][1] * scaleY + offsetY);
  }
  return p;
}

// Build Path2D with quadratic smoothing for cleaner curves
function buildSmoothPath2D(pts: PathData, scaleX: number, scaleY: number, offsetX = 0, offsetY = 0): Path2D {
  const p = new Path2D();
  if (pts.length < 2) return p;

  const sx = (pt: [number, number]) => pt[0] * scaleX + offsetX;
  const sy = (pt: [number, number]) => pt[1] * scaleY + offsetY;

  p.moveTo(sx(pts[0]), sy(pts[0]));

  if (pts.length === 2) {
    p.lineTo(sx(pts[1]), sy(pts[1]));
    return p;
  }

  // Use quadratic curves through midpoints for smooth rendering
  for (let i = 1; i < pts.length - 1; i++) {
    const midX = (sx(pts[i]) + sx(pts[i + 1])) / 2;
    const midY = (sy(pts[i]) + sy(pts[i + 1])) / 2;
    p.quadraticCurveTo(sx(pts[i]), sy(pts[i]), midX, midY);
  }
  // Final segment
  const last = pts[pts.length - 1];
  p.lineTo(sx(last), sy(last));
  return p;
}

// ─── Canvas component ───────────────────────────────────────────────────────

function IrworobongdoCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  // Cached Path2D objects and dimensions
  const cacheRef = useRef<{
    drawW: number;
    drawH: number;
    offsetX: number;
    offsetY: number;
    sun: Path2D[];
    moon: Path2D[];
    peaks: Path2D[];
    pine: Path2D[];
    waterfall: Path2D[];
    waves: Path2D[];
  } | null>(null);

  const buildCache = useCallback((canvasW: number, canvasH: number) => {
    // Compute letterboxed dimensions maintaining aspect ratio
    let drawW: number, drawH: number, offsetX: number, offsetY: number;

    if (canvasW / canvasH > ASPECT_RATIO) {
      // Canvas is wider than painting: fit height, letterbox sides
      drawH = canvasH;
      drawW = canvasH * ASPECT_RATIO;
      offsetX = (canvasW - drawW) / 2;
      offsetY = 0;
    } else {
      // Canvas is taller: fit width, letterbox top/bottom
      drawW = canvasW;
      drawH = canvasW / ASPECT_RATIO;
      offsetX = 0;
      offsetY = (canvasH - drawH) / 2;
    }

    // Build Path2D objects for each element group
    // Using smooth paths for larger shapes, linear for short line segments
    const buildPaths = (pathsArr: PathData[]) =>
      pathsArr.map(pts =>
        pts.length > 4
          ? buildSmoothPath2D(pts, drawW, drawH, offsetX, offsetY)
          : buildPath2D(pts, drawW, drawH, offsetX, offsetY)
      );

    cacheRef.current = {
      drawW,
      drawH,
      offsetX,
      offsetY,
      sun: buildPaths(PATHS.sun),
      moon: buildPaths(PATHS.moon),
      peaks: buildPaths(PATHS.peaks),
      pine: buildPaths(PATHS.pine),
      waterfall: buildPaths(PATHS.waterfall),
      waves: buildPaths(PATHS.waves),
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d', { alpha: false })!;
    ctx.imageSmoothingEnabled = true;

    let W = 0;
    let H = 0;

    const resize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildCache(W, H);
    };
    resize();
    window.addEventListener('resize', resize);

    let t0: number | null = null;

    const frame = (ts: number) => {
      if (!t0) t0 = ts;
      const t = (ts - t0) / 1000; // seconds elapsed
      const cache = cacheRef.current;
      if (!cache) {
        rafRef.current = requestAnimationFrame(frame);
        return;
      }

      const { drawW, drawH, offsetX, offsetY } = cache;

      // ── Clear to black ──
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, W, H);

      // ── Draw Moon (달) - static, white ──
      ctx.save();
      ctx.strokeStyle = 'rgba(255,255,255,0.75)';
      ctx.lineWidth = 1.0;
      for (let i = 0; i < cache.moon.length; i++) {
        // First path is outline (brighter), rest are inner details
        if (i === 0) {
          ctx.strokeStyle = 'rgba(255,255,255,0.80)';
          ctx.lineWidth = 1.2;
        } else {
          ctx.strokeStyle = 'rgba(255,255,255,0.30)';
          ctx.lineWidth = 0.6;
        }
        ctx.stroke(cache.moon[i]);
      }
      ctx.restore();

      // ── Draw Peaks (오봉) - subtle horizontal sway ──
      ctx.save();
      for (let i = 0; i < cache.peaks.length; i++) {
        // Determine which peak this path belongs to for staggered phase
        // Rough heuristic: alternate phase based on path index
        const peakGroup = Math.floor(i / 30) % 5;
        const sway = Math.sin(t * (2 * Math.PI / PEAK_SWAY_PERIOD) + peakGroup * 1.2) * PEAK_SWAY_AMP;

        ctx.save();
        ctx.translate(sway, 0);

        // Silhouettes brighter, internal detail dimmer
        const isMainSilhouette = (i % 30) < 3; // first 3 paths per peak are silhouettes
        if (isMainSilhouette) {
          ctx.strokeStyle = 'rgba(255,255,255,0.70)';
          ctx.lineWidth = 0.9;
        } else {
          const depth = 0.08 + 0.15 * Math.max(0, 1 - (i % 30) / 25);
          ctx.strokeStyle = `rgba(255,255,255,${depth.toFixed(2)})`;
          ctx.lineWidth = 0.4;
        }
        ctx.stroke(cache.peaks[i]);
        ctx.restore();
      }
      ctx.restore();

      // ── Draw Pine Trees (소나무) - wind sway on branch tips ──
      ctx.save();
      for (let i = 0; i < cache.pine.length; i++) {
        // Determine tree index for phase offset
        // Rough: each tree generates ~40 paths
        const treeIdx = Math.floor(i / 55);
        const pathInTree = i % 55;
        const windPhase = treeIdx * 1.4;

        // Trunk paths (first few per tree) have less sway
        // Branch/foliage paths have more sway
        const isTrunk = pathInTree < 5;
        const swayAmount = isTrunk
          ? Math.sin(t * (2 * Math.PI / PINE_SWAY_PERIOD) + windPhase) * PINE_SWAY_AMP * 0.2
          : Math.sin(t * (2 * Math.PI / PINE_SWAY_PERIOD) + windPhase + pathInTree * 0.3) * PINE_SWAY_AMP;

        ctx.save();
        ctx.translate(swayAmount, 0);

        if (isTrunk) {
          ctx.strokeStyle = 'rgba(255,255,255,0.60)';
          ctx.lineWidth = 0.8;
        } else if (pathInTree < 15) {
          // Bark texture
          ctx.strokeStyle = 'rgba(255,255,255,0.20)';
          ctx.lineWidth = 0.3;
        } else {
          // Branch and foliage
          ctx.strokeStyle = 'rgba(255,255,255,0.35)';
          ctx.lineWidth = 0.4;
        }
        ctx.stroke(cache.pine[i]);
        ctx.restore();
      }
      ctx.restore();

      // ── Draw Waterfalls (폭포) - vertical scroll animation ──
      ctx.save();

      for (let i = 0; i < PATHS.waterfall.length; i++) {
        const pts = PATHS.waterfall[i];

        // Check if this is a stream line (long vertical path) or a detail path
        const isStream = pts.length > 20;

        if (isStream) {
          // Draw with scroll offset for flowing effect
          // Render 3 vertically-offset copies for seamless looping
          ctx.strokeStyle = 'rgba(255,255,255,0.40)';
          ctx.lineWidth = 0.5;

          // Small repeating scroll displacement in pixels
          const scrollPx = (t * 8) % 20;

          ctx.save();
          // Clip to waterfall area
          ctx.beginPath();
          ctx.rect(offsetX, offsetY + drawH * 0.33, drawW, drawH * 0.36);
          ctx.clip();

          for (let offset = -1; offset <= 1; offset++) {
            const p = new Path2D();
            if (pts.length < 2) continue;
            const x0 = pts[0][0] * drawW + offsetX;
            const y0 = pts[0][1] * drawH + offsetY + scrollPx + offset * 20;
            p.moveTo(x0, y0);
            for (let j = 1; j < pts.length; j++) {
              const x = pts[j][0] * drawW + offsetX;
              const y = pts[j][1] * drawH + offsetY + scrollPx + offset * 20;
              p.lineTo(x, y);
            }
            ctx.stroke(p);
          }
          ctx.restore();
        } else {
          // Detail paths (splash, mist) - subtle animation
          const alpha = 0.15 + Math.sin(t * 2 + i) * 0.08;
          ctx.strokeStyle = `rgba(255,255,255,${alpha.toFixed(2)})`;
          ctx.lineWidth = 0.4;
          ctx.stroke(cache.waterfall[i]);
        }
      }
      ctx.restore();

      // ── Draw Waves (물결) - horizontal drift + vertical bobbing ──
      ctx.save();
      for (let i = 0; i < cache.waves.length; i++) {
        // Determine which wave row this belongs to for staggered animation
        // Rough grouping: each row generates many paths
        const rowIdx = Math.floor(i / 40) % 7;
        const pathInRow = i % 40;

        // Horizontal drift (faster for foreground rows)
        const driftSpeed = WAVE_DRIFT_SPEED * (0.3 + rowIdx * 0.12);
        const drift = Math.sin(t * 0.15 + rowIdx * 0.8) * driftSpeed * 0.1;

        // Vertical bobbing
        const bob = Math.sin(t * 1.2 + rowIdx * 0.7 + pathInRow * 0.15) * WAVE_BOB_AMP;

        ctx.save();
        ctx.translate(drift, bob);

        // Scallop outlines brighter, inner arcs dimmer
        const isScallopOutline = pathInRow % 5 === 0;
        const isRowLine = pathInRow >= 35;

        if (isRowLine) {
          ctx.strokeStyle = 'rgba(255,255,255,0.18)';
          ctx.lineWidth = 0.3;
        } else if (isScallopOutline) {
          ctx.strokeStyle = 'rgba(255,255,255,0.45)';
          ctx.lineWidth = 0.7;
        } else {
          const innerDepth = 0.12 + 0.08 * (1 - (pathInRow % 5) / 5);
          ctx.strokeStyle = `rgba(255,255,255,${innerDepth.toFixed(2)})`;
          ctx.lineWidth = 0.35;
        }
        ctx.stroke(cache.waves[i]);
        ctx.restore();
      }
      ctx.restore();

      // ── Draw Sun (해) - last (on top), with color cycle and corona pulse ──
      ctx.save();
      {
        // 8-second cycle: base white → bright red → back
        const cycle = (Math.sin(t * (2 * Math.PI / SUN_CYCLE)) + 1) / 2; // 0..1..0
        const red = 255;
        const green = Math.round(255 * (1 - cycle));
        const blue = Math.round(255 * (1 - cycle));
        const sunColor = `rgb(${red},${green},${blue})`;

        for (let i = 0; i < cache.sun.length; i++) {
          // First 2 paths are disc outlines
          if (i < 2) {
            ctx.strokeStyle = sunColor;
            ctx.lineWidth = i === 0 ? 1.2 : 0.6;
            ctx.globalAlpha = i === 0 ? 0.9 : 0.5;
          }
          // Main corona rays (16 rays, indices 2-17)
          else if (i < 18) {
            const rayIdx = i - 2;
            const pulse = 1 + Math.sin(t * 2.5 + rayIdx * 0.9) * 0.15;
            ctx.strokeStyle = sunColor;
            ctx.lineWidth = 0.6 * pulse;
            ctx.globalAlpha = 0.75 * pulse;
          }
          // Secondary rays (16 rays, indices 18-33)
          else if (i < 34) {
            const rayIdx = i - 18;
            const pulse = 1 + Math.sin(t * 2.5 + rayIdx * 0.9 + 0.5) * 0.1;
            ctx.strokeStyle = sunColor;
            ctx.lineWidth = 0.4 * pulse;
            ctx.globalAlpha = 0.5 * pulse;
          }
          // Tertiary fine rays
          else {
            const rayIdx = i - 34;
            const pulse = 1 + Math.sin(t * 3.0 + rayIdx * 0.6) * 0.08;
            ctx.strokeStyle = sunColor;
            ctx.lineWidth = 0.3;
            ctx.globalAlpha = 0.35 * pulse;
          }
          ctx.stroke(cache.sun[i]);
        }
        ctx.globalAlpha = 1;
      }
      ctx.restore();

      rafRef.current = requestAnimationFrame(frame);
    };

    rafRef.current = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [buildCache]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        display: 'block',
        cursor: 'crosshair',
        zIndex: 9999,
      }}
    />
  );
}

// ─── Page component ─────────────────────────────────────────────────────────

export default function Irworobongdo() {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  return (
    <ArtLayout title="일월오봉도" subtitle="Sun, Moon and Five Peaks" year={2026}>
      {mounted && <IrworobongdoCanvas />}
    </ArtLayout>
  );
}
