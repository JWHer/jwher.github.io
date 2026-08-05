import React, { useEffect, useRef } from 'react';
import ArtLayout from '@site/src/components/ArtLayout';

// ─── GLSL Shaders ────────────────────────────────────────────────────────────

const VERTEX = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

// The fragment shader applies region-based displacement driven by a mask
// texture.  R = water, G = mist/sky, B = sun + sun reflection.
const FRAGMENT = `
uniform sampler2D uTex;
uniform sampler2D uMask;
uniform float uTime;
varying vec2 vUv;

// Simple 2D hash noise (used for mist drift)
float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}
float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

// Boat region helper — returns 1 inside the rectangle, 0 outside,
// with a soft edge for smooth blending.
float boatBox(vec2 uv, vec2 lo, vec2 hi) {
  float sx = smoothstep(lo.x - 0.02, lo.x, uv.x) * smoothstep(hi.x + 0.02, hi.x, uv.x);
  float sy = smoothstep(lo.y - 0.02, lo.y, uv.y) * smoothstep(hi.y + 0.02, hi.y, uv.y);
  return sx * sy;
}

void main() {
  vec2 uv = vUv;

  // Sample mask texture
  vec4 mask = texture2D(uMask, vUv);
  float waterMask = mask.r;
  float mistMask  = mask.g;
  float sunMask   = mask.b;

  // ── Sun breathing: scale UV around sun center ──
  float sunBreath = 1.0 + sin(uTime * 0.6) * 0.015 * sunMask;
  vec2 sunCenter = vec2(0.48, 0.38);
  uv = sunCenter + (uv - sunCenter) * sunBreath;

  // ── Water ripple: horizontal sine displacement (strong) ──
  float ripple = sin(uv.y * 60.0 + uTime * 0.7) * 0.008
               + sin(uv.y * 30.0 - uTime * 0.4) * 0.005;
  uv.x += ripple * waterMask;

  // ── Water vertical wobble ──
  float wobble = sin(uv.x * 20.0 + uTime * 0.5) * 0.004;
  uv.y += wobble * waterMask;

  // ── Sun reflection shimmer (blue mask × water region) ──
  float shimmer = sin(uv.y * 80.0 + uTime * 1.2) * 0.008 * sunMask * waterMask;
  uv.x += shimmer;

  // ── Mist / fog drift: noise displacement (visible) ──
  float n = noise(vec2(uv.x * 3.0 + uTime * 0.08, uv.y * 2.0 + uTime * 0.05));
  uv.x += (n - 0.5) * 0.012 * mistMask;
  uv.y += (n - 0.5) * 0.006 * mistMask;

  // ── Boat bobbing ──
  float boat1 = boatBox(vUv, vec2(0.20, 0.55), vec2(0.35, 0.75));
  float boat2 = boatBox(vUv, vec2(0.55, 0.60), vec2(0.70, 0.75));
  float boatMask = max(boat1, boat2);
  uv.y += sin(uTime * 0.9) * 0.004 * boatMask;

  // ── Sun glow pulse (bright breathing) ──
  float pulse = 1.0 + sin(uTime * 0.8) * 0.15 * sunMask;

  vec4 color = texture2D(uTex, uv);
  color.rgb *= pulse;

  // ── Sun warm color tint (orange glow) ──
  float sunGlow = 0.5 + 0.5 * sin(uTime * 0.6);
  color.rgb += vec3(0.06, 0.02, -0.01) * sunMask * sunGlow;

  gl_FragColor = color;
}
`;

// ─── Three.js Canvas Component ───────────────────────────────────────────────

function ImpressionSunriseCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cleanupRef = useRef<() => void>(null);

  useEffect(() => {
    // Dynamic import to avoid SSR issues
    import('three').then((THREE) => {
      const container = containerRef.current;
      if (!container) return;

      // ── Scene setup ──
      const scene = new THREE.Scene();
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

      const renderer = new THREE.WebGLRenderer({ antialias: false });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderer.domElement);

      // ── Textures ──
      const loader = new THREE.TextureLoader();

      const texture = loader.load('/img/art/impression-sunrise.jpg');
      texture.minFilter = THREE.LinearFilter;

      const mask = loader.load('/img/art/impression-sunrise-mask.png');
      mask.minFilter = THREE.LinearFilter;

      // ── Shader Material ──
      const uniforms = {
        uTex: { value: texture },
        uMask: { value: mask },
        uTime: { value: 0 },
      };

      const material = new THREE.ShaderMaterial({
        vertexShader: VERTEX,
        fragmentShader: FRAGMENT,
        uniforms,
      });

      const geometry = new THREE.PlaneGeometry(2, 2);
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      // ── Resize handler ──
      const onResize = () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener('resize', onResize);

      // ── Animation loop ──
      let raf = 0;
      const clock = new THREE.Clock();
      const animate = () => {
        uniforms.uTime.value = clock.getElapsedTime();
        renderer.render(scene, camera);
        raf = requestAnimationFrame(animate);
      };
      raf = requestAnimationFrame(animate);

      // ── Cleanup ──
      cleanupRef.current = () => {
        cancelAnimationFrame(raf);
        window.removeEventListener('resize', onResize);
        renderer.dispose();
        material.dispose();
        geometry.dispose();
        texture.dispose();
        mask.dispose();
        container.removeChild(renderer.domElement);
      };
    });

    return () => {
      cleanupRef.current?.();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#1a1a2e',
      }}
    />
  );
}

// ─── Page Component ──────────────────────────────────────────────────────────

export default function ImpressionSunrise() {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  return (
    <ArtLayout
      artworkId="impression-sunrise"
      title="Impression, Sunrise — Claude Monet, 1872"
      subtitle="Cinemagraph"
      year={2026}
    >
      {mounted && <ImpressionSunriseCanvas />}
    </ArtLayout>
  );
}
