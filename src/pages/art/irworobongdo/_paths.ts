/**
 * Hand-crafted SVG path data for 일월오봉도 (Sun, Moon and Five Peaks)
 *
 * Based on visual analysis of static/img/art/irworobongdo-source.jpg (800x486)
 * All coordinates are normalized to [0, 1] range.
 * x: 0 = left edge, 1 = right edge
 * y: 0 = top edge, 1 = bottom edge
 *
 * Aspect ratio of source: 800:486 (1.6461)
 *
 * Run scripts/trace-irworobongdo.js with Node 20 to regenerate from image.
 */

export const ASPECT_RATIO = 1.646091;
export const SOURCE_WIDTH = 800;
export const SOURCE_HEIGHT = 486;

export type PathPoint = [number, number];
export type PathData = PathPoint[];

export interface ElementPaths {
  sun: PathData[];
  moon: PathData[];
  peaks: PathData[];
  pine: PathData[];
  waterfall: PathData[];
  waves: PathData[];
}

// ─── Sun (해) ────────────────────────────────────────────────────────────────
function generateSunPaths(): PathData[] {
  const paths: PathData[] = [];
  const cx = 0.835, cy = 0.138;
  // Sun radius in normalized coords: ~22px out of 800 wide = 0.0275
  // In y: ~22px out of 486 tall = 0.0453
  const rxS = 0.028;
  const ryS = 0.046;

  // Main disc outline
  const disc: PathData = [];
  for (let i = 0; i <= 72; i++) {
    const a = (i / 72) * Math.PI * 2;
    disc.push([cx + Math.cos(a) * rxS, cy + Math.sin(a) * ryS]);
  }
  paths.push(disc);

  // Inner disc
  const inner: PathData = [];
  for (let i = 0; i <= 48; i++) {
    const a = (i / 48) * Math.PI * 2;
    inner.push([cx + Math.cos(a) * rxS * 0.7, cy + Math.sin(a) * ryS * 0.7]);
  }
  paths.push(inner);

  // Corona rays - 16 main rays
  const rayCount = 16;
  for (let r = 0; r < rayCount; r++) {
    const a = (r / rayCount) * Math.PI * 2;
    const innerMult = 1.2;
    const outerMult = 1.7;
    paths.push([
      [cx + Math.cos(a) * rxS * innerMult, cy + Math.sin(a) * ryS * innerMult],
      [cx + Math.cos(a) * rxS * outerMult, cy + Math.sin(a) * ryS * outerMult],
    ]);
  }

  // Secondary rays between main rays
  for (let r = 0; r < rayCount; r++) {
    const a = ((r + 0.5) / rayCount) * Math.PI * 2;
    paths.push([
      [cx + Math.cos(a) * rxS * 1.15, cy + Math.sin(a) * ryS * 1.15],
      [cx + Math.cos(a) * rxS * 1.4, cy + Math.sin(a) * ryS * 1.4],
    ]);
  }

  // Tertiary fine rays
  for (let r = 0; r < 32; r++) {
    const a = ((r + 0.25) / 32) * Math.PI * 2;
    paths.push([
      [cx + Math.cos(a) * rxS * 1.1, cy + Math.sin(a) * ryS * 1.1],
      [cx + Math.cos(a) * rxS * 1.25, cy + Math.sin(a) * ryS * 1.25],
    ]);
  }

  return paths;
}

// ─── Moon (달) ───────────────────────────────────────────────────────────────
function generateMoonPaths(): PathData[] {
  const paths: PathData[] = [];
  const cx = 0.165, cy = 0.128;
  const rxM = 0.026;
  const ryM = 0.043;

  // Main disc
  const disc: PathData = [];
  for (let i = 0; i <= 64; i++) {
    const a = (i / 64) * Math.PI * 2;
    disc.push([cx + Math.cos(a) * rxM, cy + Math.sin(a) * ryM]);
  }
  paths.push(disc);

  // Inner highlight ring
  const inner: PathData = [];
  for (let i = 0; i <= 48; i++) {
    const a = (i / 48) * Math.PI * 2;
    inner.push([cx + Math.cos(a) * rxM * 0.6, cy + Math.sin(a) * ryM * 0.6]);
  }
  paths.push(inner);

  // Subtle surface detail
  const detail: PathData = [];
  for (let i = 0; i <= 32; i++) {
    const a = (i / 32) * Math.PI * 2;
    const rMod = 0.35 + Math.sin(a * 3) * 0.08;
    detail.push([cx + Math.cos(a) * rxM * rMod, cy + Math.sin(a) * ryM * rMod]);
  }
  paths.push(detail);

  return paths;
}

// ─── Five Peaks (오봉) ──────────────────────────────────────────────────────
function generatePeakPaths(): PathData[] {
  const paths: PathData[] = [];

  // Peak definitions based on source image analysis
  // [cx, peakY, baseY, widthLeft, widthRight]
  const peakDefs = [
    { cx: 0.175, peakY: 0.29, baseY: 0.68, wL: 0.095, wR: 0.095 },
    { cx: 0.33,  peakY: 0.19, baseY: 0.68, wL: 0.115, wR: 0.105 },
    { cx: 0.50,  peakY: 0.09, baseY: 0.68, wL: 0.135, wR: 0.135 },
    { cx: 0.67,  peakY: 0.19, baseY: 0.68, wL: 0.105, wR: 0.115 },
    { cx: 0.825, peakY: 0.29, baseY: 0.68, wL: 0.095, wR: 0.095 },
  ];

  for (let pi = 0; pi < peakDefs.length; pi++) {
    const pk = peakDefs[pi];

    // ── Main silhouette with jagged ridgeline ──
    const silhouette: PathData = [];
    const numPts = 50;
    for (let i = 0; i <= numPts; i++) {
      const t = i / numPts;
      let x: number, y: number;
      if (t <= 0.5) {
        const f = t / 0.5;
        x = pk.cx - pk.wL * (1 - f);
        const mainCurve = Math.pow(f, 0.65);
        const subBump = Math.sin(f * Math.PI * 6) * 0.018 * (1 - Math.pow(f, 2));
        y = pk.baseY + (pk.peakY - pk.baseY) * (mainCurve + subBump);
      } else {
        const f = (t - 0.5) / 0.5;
        x = pk.cx + pk.wR * f;
        const mainCurve = Math.pow(1 - f, 0.65);
        const subBump = Math.sin((1 - f) * Math.PI * 6) * 0.018 * (1 - Math.pow(1 - f, 2));
        y = pk.baseY + (pk.peakY - pk.baseY) * (mainCurve + subBump);
      }
      silhouette.push([x, y]);
    }
    paths.push(silhouette);

    // ── Secondary silhouette (depth offset) ──
    const sil2: PathData = [];
    for (let i = 0; i <= 40; i++) {
      const t = i / 40;
      let x: number, y: number;
      if (t <= 0.5) {
        const f = t / 0.5;
        x = pk.cx - pk.wL * 0.85 * (1 - f) + 0.006;
        y = (pk.baseY - 0.01) + ((pk.peakY + 0.025) - (pk.baseY - 0.01)) * Math.pow(f, 0.7);
      } else {
        const f = (t - 0.5) / 0.5;
        x = pk.cx + pk.wR * 0.85 * f + 0.006;
        y = (pk.baseY - 0.01) + ((pk.peakY + 0.025) - (pk.baseY - 0.01)) * Math.pow(1 - f, 0.7);
      }
      sil2.push([x, y]);
    }
    paths.push(sil2);

    // ── Tertiary silhouette (more depth) ──
    const sil3: PathData = [];
    for (let i = 0; i <= 36; i++) {
      const t = i / 36;
      let x: number, y: number;
      if (t <= 0.5) {
        const f = t / 0.5;
        x = pk.cx - pk.wL * 0.72 * (1 - f) - 0.004;
        y = (pk.baseY - 0.02) + ((pk.peakY + 0.05) - (pk.baseY - 0.02)) * Math.pow(f, 0.72);
      } else {
        const f = (t - 0.5) / 0.5;
        x = pk.cx + pk.wR * 0.72 * f - 0.004;
        y = (pk.baseY - 0.02) + ((pk.peakY + 0.05) - (pk.baseY - 0.02)) * Math.pow(1 - f, 0.72);
      }
      sil3.push([x, y]);
    }
    paths.push(sil3);

    // ── Chevron/V-shaped ridge lines (characteristic 일월오봉도 texture) ──
    // These radiate from the peak downward in a V-pattern
    const ridgeCount = 10;
    for (let r = 0; r < ridgeCount; r++) {
      const level = 0.10 + (r / ridgeCount) * 0.80;
      const levelY = pk.peakY + (pk.baseY - pk.peakY) * level;
      const halfW = ((pk.wL + pk.wR) / 2) * level * 0.82;

      // V-shaped ridge
      const ridge: PathData = [];
      const rPts = 28;
      for (let i = 0; i <= rPts; i++) {
        const t = i / rPts;
        const x = pk.cx - halfW + halfW * 2 * t;
        const centerDist = Math.abs(t - 0.5) * 2;
        const vDip = (1 - centerDist) * (pk.baseY - pk.peakY) * 0.045;
        const wave = Math.sin(t * Math.PI * (7 + r * 0.7)) * (pk.baseY - pk.peakY) * 0.012;
        const y = levelY - vDip + wave;
        ridge.push([x, y]);
      }
      paths.push(ridge);
    }

    // ── Diagonal fold lines radiating from peak ──
    const foldCount = 8;
    for (let f = 0; f < foldCount; f++) {
      const angle = -0.45 + (f / (foldCount - 1)) * 0.9;
      const fold: PathData = [];
      const startLevel = 0.03;
      const endLevel = 0.65 + (f % 3) * 0.12;
      for (let i = 0; i <= 12; i++) {
        const t = startLevel + (endLevel - startLevel) * (i / 12);
        const dx = Math.sin(angle) * t * Math.max(pk.wL, pk.wR) * 1.5;
        const dy = t * (pk.baseY - pk.peakY);
        const wiggle = Math.sin(t * 10 + f * 2.5) * 0.003;
        fold.push([pk.cx + dx + wiggle, pk.peakY + dy]);
      }
      paths.push(fold);
    }

    // ── Vertical texture strokes (grain lines on mountain face) ──
    const vertCount = 14;
    for (let v = 0; v < vertCount; v++) {
      const t = (v + 0.5) / vertCount;
      const x = pk.cx - pk.wL * 0.75 + (pk.wL + pk.wR) * 0.75 * t;
      const distFromPeak = Math.abs(x - pk.cx) / Math.max(pk.wL, pk.wR);
      const topY = pk.peakY + (pk.baseY - pk.peakY) * distFromPeak * 0.45;
      const botY = pk.baseY - (pk.baseY - pk.peakY) * 0.04;

      const stroke: PathData = [];
      const sPts = 18;
      for (let i = 0; i <= sPts; i++) {
        const f = i / sPts;
        const sy = topY + (botY - topY) * f;
        const sx = x + Math.sin(f * Math.PI * 4 + v * 1.7) * 0.0035;
        stroke.push([sx, sy]);
      }
      paths.push(stroke);
    }

    // ── Horizontal contour lines (elevation bands) ──
    for (let c = 0; c < 4; c++) {
      const level = 0.25 + c * 0.17;
      const contourY = pk.peakY + (pk.baseY - pk.peakY) * level;
      const halfW = ((pk.wL + pk.wR) / 2) * level * 0.78;
      const contour: PathData = [];
      for (let i = 0; i <= 20; i++) {
        const t = i / 20;
        const x = pk.cx - halfW + halfW * 2 * t;
        const wobble = Math.sin(t * Math.PI * 5 + c * 2) * (pk.baseY - pk.peakY) * 0.008;
        contour.push([x, contourY + wobble]);
      }
      paths.push(contour);
    }
  }

  // ── Mountain base connecting line (scalloped) ──
  const baseLine: PathData = [];
  for (let i = 0; i <= 120; i++) {
    const x = i / 120;
    const scallop = Math.sin(x * Math.PI * 12) * 0.004;
    baseLine.push([x, 0.685 + scallop]);
  }
  paths.push(baseLine);

  // ── Inter-peak saddle lines ──
  const saddles = [[0.25, 0.45], [0.415, 0.35], [0.585, 0.35], [0.75, 0.45]];
  for (const [sx, sy] of saddles) {
    const saddle: PathData = [];
    for (let i = 0; i <= 16; i++) {
      const t = i / 16;
      const x = sx - 0.03 + 0.06 * t;
      const y = sy + Math.sin(t * Math.PI) * 0.02;
      saddle.push([x, y]);
    }
    paths.push(saddle);
  }

  return paths;
}

// ─── Pine Trees (소나무) ────────────────────────────────────────────────────
function generatePinePaths(): PathData[] {
  const paths: PathData[] = [];

  // Tree definitions based on source image
  // Left side: 3 trees with red trunks, green foliage clusters
  const treeDefs = [
    // Left trees
    { baseX: 0.06, baseY: 0.72, height: 0.38, lean: 0.015, side: 'left' },
    { baseX: 0.12, baseY: 0.70, height: 0.42, lean: -0.008, side: 'left' },
    { baseX: 0.18, baseY: 0.72, height: 0.34, lean: 0.020, side: 'left' },
    // Right trees
    { baseX: 0.82, baseY: 0.72, height: 0.34, lean: -0.020, side: 'right' },
    { baseX: 0.88, baseY: 0.70, height: 0.42, lean: 0.008, side: 'right' },
    { baseX: 0.94, baseY: 0.72, height: 0.38, lean: -0.015, side: 'right' },
  ];

  for (const tree of treeDefs) {
    // ── Trunk (gnarled Korean pine trunk) ──
    const trunk: PathData = [];
    const trunkPts = 24;
    for (let i = 0; i <= trunkPts; i++) {
      const t = i / trunkPts;
      const x = tree.baseX + tree.lean * t
        + Math.sin(t * Math.PI * 3.5 + tree.baseX * 25) * 0.007
        + Math.sin(t * Math.PI * 7 + tree.baseX * 40) * 0.003;
      const y = tree.baseY - tree.height * t;
      trunk.push([x, y]);
    }
    paths.push(trunk);

    // ── Trunk left edge ──
    const trunkL: PathData = [];
    const trunkWidth = 0.008;
    for (let i = 0; i <= trunkPts; i++) {
      const t = i / trunkPts;
      const w = trunkWidth * (1 - t * 0.6); // tapers
      const x = tree.baseX + tree.lean * t
        + Math.sin(t * Math.PI * 3.5 + tree.baseX * 25) * 0.007 - w;
      const y = tree.baseY - tree.height * t;
      trunkL.push([x, y]);
    }
    paths.push(trunkL);

    // ── Trunk right edge ──
    const trunkR: PathData = [];
    for (let i = 0; i <= trunkPts; i++) {
      const t = i / trunkPts;
      const w = trunkWidth * (1 - t * 0.6);
      const x = tree.baseX + tree.lean * t
        + Math.sin(t * Math.PI * 3.5 + tree.baseX * 25) * 0.007 + w;
      const y = tree.baseY - tree.height * t;
      trunkR.push([x, y]);
    }
    paths.push(trunkR);

    // ── Bark texture (horizontal lines across trunk) ──
    for (let b = 0; b < 10; b++) {
      const t = 0.08 + (b / 10) * 0.82;
      const cx = tree.baseX + tree.lean * t + Math.sin(t * Math.PI * 3.5 + tree.baseX * 25) * 0.007;
      const cy = tree.baseY - tree.height * t;
      const w = trunkWidth * (1 - t * 0.6) * 1.1;
      paths.push([[cx - w, cy], [cx + w, cy]]);
      // Additional bark detail - slightly curved
      if (b % 2 === 0) {
        const bark: PathData = [];
        for (let j = 0; j <= 6; j++) {
          const f = j / 6;
          bark.push([
            cx - w + w * 2 * f,
            cy + Math.sin(f * Math.PI) * 0.003,
          ]);
        }
        paths.push(bark);
      }
    }

    // ── Branches with foliage ──
    const branchCount = 8;
    for (let b = 0; b < branchCount; b++) {
      const t = 0.28 + (b / branchCount) * 0.65;
      const bx = tree.baseX + tree.lean * t + Math.sin(t * Math.PI * 3.5 + tree.baseX * 25) * 0.007;
      const by = tree.baseY - tree.height * t;
      const side = (b % 2 === 0) ? -1 : 1;
      const bLen = 0.035 + Math.sin(b * 2.3) * 0.012;

      // Branch curve
      const endX = bx + side * bLen;
      const endY = by - bLen * 0.35;
      const branch: PathData = [];
      for (let i = 0; i <= 10; i++) {
        const f = i / 10;
        branch.push([
          bx + (endX - bx) * f + Math.sin(f * Math.PI) * side * 0.004,
          by + (endY - by) * f - Math.sin(f * Math.PI) * bLen * 0.2,
        ]);
      }
      paths.push(branch);

      // Foliage cluster - cloud-like shape (traditional Korean pine canopy)
      // Multiple overlapping arcs
      const canopyR = 0.020 + b * 0.001;
      for (let layer = 0; layer < 3; layer++) {
        const offsetX = (layer - 1) * canopyR * 0.4;
        const offsetY = -layer * canopyR * 0.25;
        const canopy: PathData = [];
        for (let i = 0; i <= 24; i++) {
          const a = Math.PI + (i / 24) * Math.PI;
          const rMod = 1 + Math.sin(a * (4 + layer)) * 0.15;
          canopy.push([
            endX + offsetX + Math.cos(a) * canopyR * rMod,
            endY + offsetY + Math.sin(a) * canopyR * 0.65 * rMod,
          ]);
        }
        paths.push(canopy);
      }

      // Needle clusters radiating from branch end
      const needleCount = 16;
      for (let n = 0; n < needleCount; n++) {
        const angle = -Math.PI * 0.85 + (n / needleCount) * Math.PI * 1.7;
        const nLen = 0.014 + Math.sin(n * 1.5 + b * 0.7) * 0.005;
        paths.push([
          [endX, endY],
          [endX + Math.cos(angle) * nLen, endY + Math.sin(angle) * nLen * 0.75],
        ]);
      }
    }

    // ── Crown (top canopy) ──
    const topX = tree.baseX + tree.lean;
    const topY = tree.baseY - tree.height;
    const crownR = 0.028;

    // Crown outline - bumpy cloud shape
    const crown: PathData = [];
    for (let i = 0; i <= 40; i++) {
      const a = (i / 40) * Math.PI * 2;
      const r = crownR * (1 + Math.sin(a * 6) * 0.18 + Math.sin(a * 3) * 0.1);
      crown.push([
        topX + Math.cos(a) * r,
        topY + Math.sin(a) * r * 0.55 - crownR * 0.35,
      ]);
    }
    paths.push(crown);

    // Crown inner structure
    const crownInner: PathData = [];
    for (let i = 0; i <= 30; i++) {
      const a = (i / 30) * Math.PI * 2;
      const r = crownR * 0.6 * (1 + Math.sin(a * 5) * 0.15);
      crownInner.push([
        topX + Math.cos(a) * r,
        topY + Math.sin(a) * r * 0.55 - crownR * 0.35,
      ]);
    }
    paths.push(crownInner);

    // Crown needle rays
    for (let n = 0; n < 22; n++) {
      const a = (n / 22) * Math.PI * 2;
      const nLen = 0.012 + Math.sin(n * 1.9) * 0.004;
      paths.push([
        [topX, topY - crownR * 0.25],
        [topX + Math.cos(a) * nLen, topY + Math.sin(a) * nLen * 0.65 - crownR * 0.35],
      ]);
    }

    // ── Root flare at base ──
    for (let r = 0; r < 3; r++) {
      const angle = -0.4 + r * 0.4;
      const rootLen = 0.015;
      const root: PathData = [];
      for (let i = 0; i <= 6; i++) {
        const f = i / 6;
        root.push([
          tree.baseX + Math.sin(angle) * rootLen * f,
          tree.baseY + f * 0.008,
        ]);
      }
      paths.push(root);
    }
  }

  return paths;
}

// ─── Waterfalls (폭포) ──────────────────────────────────────────────────────
function generateWaterfallPaths(): PathData[] {
  const paths: PathData[] = [];

  const falls = [
    { x: 0.415, topY: 0.34, bottomY: 0.67, width: 0.012 },
    { x: 0.585, topY: 0.34, bottomY: 0.67, width: 0.012 },
  ];

  for (const wf of falls) {
    // Main stream lines (5 parallel wavy lines per waterfall)
    for (let s = -2; s <= 2; s++) {
      const stream: PathData = [];
      const streamPts = 50;
      for (let i = 0; i <= streamPts; i++) {
        const t = i / streamPts;
        const y = wf.topY + (wf.bottomY - wf.topY) * t;
        const wave = Math.sin(t * Math.PI * 10 + s * 1.8) * 0.0025
          + Math.sin(t * Math.PI * 18 + s * 3.2) * 0.001;
        stream.push([wf.x + s * wf.width * 0.35 + wave, y]);
      }
      paths.push(stream);
    }

    // Top emergence (wider spray where water emerges)
    for (let sp = 0; sp < 7; sp++) {
      const angle = -0.6 + (sp / 6) * 1.2;
      const len = 0.008 + sp * 0.001;
      paths.push([
        [wf.x + Math.sin(angle) * 0.008, wf.topY],
        [wf.x + Math.sin(angle) * len, wf.topY - 0.008],
      ]);
    }

    // Bottom splash radiating lines
    for (let sp = 0; sp < 9; sp++) {
      const angle = -Math.PI * 0.4 + (sp / 8) * Math.PI * 0.8;
      const len = 0.008 + (sp % 3) * 0.003;
      paths.push([
        [wf.x + Math.cos(angle) * 0.004, wf.bottomY],
        [wf.x + Math.cos(angle) * len, wf.bottomY + Math.abs(Math.sin(angle)) * len * 0.6 + 0.005],
      ]);
    }

    // Mist cloud at bottom
    const mist: PathData = [];
    for (let i = 0; i <= 30; i++) {
      const t = i / 30;
      const x = wf.x - 0.035 + 0.07 * t;
      const y = wf.bottomY + 0.005
        + Math.sin(t * Math.PI * 5) * 0.003
        + Math.sin(t * Math.PI * 9) * 0.001;
      mist.push([x, y]);
    }
    paths.push(mist);

    // Mist cloud second layer
    const mist2: PathData = [];
    for (let i = 0; i <= 24; i++) {
      const t = i / 24;
      const x = wf.x - 0.025 + 0.05 * t;
      const y = wf.bottomY + 0.010
        + Math.sin(t * Math.PI * 4 + 1) * 0.002;
      mist2.push([x, y]);
    }
    paths.push(mist2);

    // Vertical side spray
    for (const side of [-1, 1]) {
      const spray: PathData = [];
      for (let i = 0; i <= 15; i++) {
        const t = i / 15;
        spray.push([
          wf.x + side * wf.width * 0.8 + Math.sin(t * Math.PI * 6) * 0.002 * side,
          wf.bottomY - (wf.bottomY - wf.topY) * 0.3 * t + Math.sin(t * 8) * 0.002,
        ]);
      }
      paths.push(spray);
    }
  }

  return paths;
}

// ─── Waves (물결) ───────────────────────────────────────────────────────────
function generateWavePaths(): PathData[] {
  const paths: PathData[] = [];

  const waveTop = 0.695;
  const waveBottom = 0.99;
  const waveZone = waveBottom - waveTop;

  // ── Scalloped wave rows (traditional Korean 파도 pattern) ──
  // The source image shows overlapping dark green semicircular scallops
  const rowCount = 7;
  for (let row = 0; row < rowCount; row++) {
    const rowY = waveTop + (row / rowCount) * waveZone;
    const scallopsPerRow = 6 + row;
    const scW = 1.0 / scallopsPerRow;
    const offset = (row % 2) * scW * 0.5;

    for (let s = -1; s <= scallopsPerRow + 1; s++) {
      const cx = offset + s * scW + scW / 2;
      const cy = rowY + waveZone / rowCount * 0.55;
      const rx = scW * 0.52;
      const ry = waveZone / rowCount * 0.48;

      // Main scallop arc (semicircle on top)
      const scallop: PathData = [];
      for (let i = 0; i <= 28; i++) {
        const a = Math.PI + (i / 28) * Math.PI;
        const rMod = 1 + Math.sin(a * 4) * 0.04;
        scallop.push([
          cx + Math.cos(a) * rx * rMod,
          cy + Math.sin(a) * ry * rMod,
        ]);
      }
      paths.push(scallop);

      // Inner concentric arcs (2-3 per scallop)
      for (let c = 1; c <= 3; c++) {
        const scale = 1 - c * 0.22;
        if (scale <= 0.1) continue;
        const innerArc: PathData = [];
        for (let i = 0; i <= 20; i++) {
          const a = Math.PI + (i / 20) * Math.PI;
          innerArc.push([
            cx + Math.cos(a) * rx * scale,
            cy + Math.sin(a) * ry * scale,
          ]);
        }
        paths.push(innerArc);
      }

      // Highlight arc at the very top of scallop
      const highlight: PathData = [];
      for (let i = 0; i <= 12; i++) {
        const a = Math.PI * 1.2 + (i / 12) * Math.PI * 0.6;
        highlight.push([
          cx + Math.cos(a) * rx * 1.02,
          cy + Math.sin(a) * ry * 1.02,
        ]);
      }
      paths.push(highlight);
    }

    // Row connecting horizontal line
    const rowLine: PathData = [];
    for (let i = 0; i <= 80; i++) {
      const x = i / 80;
      const wobble = Math.sin(x * Math.PI * 16 + row * 2.3) * 0.002;
      rowLine.push([x, rowY + wobble]);
    }
    paths.push(rowLine);
  }

  // ── Foam/mist transition at top (between mountains and waves) ──
  for (let f = 0; f < 4; f++) {
    const foamLine: PathData = [];
    const y = waveTop - 0.012 + f * 0.007;
    for (let i = 0; i <= 100; i++) {
      const x = i / 100;
      const foam = Math.sin(x * Math.PI * 14 + f * 1.9) * 0.0035
        + Math.sin(x * Math.PI * 23 + f * 3.5) * 0.0015;
      foamLine.push([x, y + foam]);
    }
    paths.push(foamLine);
  }

  // ── Bottom edge undulation ──
  for (let b = 0; b < 2; b++) {
    const bottomLine: PathData = [];
    const y = waveBottom - 0.02 + b * 0.01;
    for (let i = 0; i <= 60; i++) {
      const x = i / 60;
      bottomLine.push([x, y + Math.sin(x * Math.PI * 10 + b * 3) * 0.001]);
    }
    paths.push(bottomLine);
  }

  return paths;
}

// ─── Build and export ────────────────────────────────────────────────────────

export const PATHS: ElementPaths = {
  sun: generateSunPaths(),
  moon: generateMoonPaths(),
  peaks: generatePeakPaths(),
  pine: generatePinePaths(),
  waterfall: generateWaterfallPaths(),
  waves: generateWavePaths(),
};
