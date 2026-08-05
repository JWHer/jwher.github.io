import React, { useEffect, useRef, useState, useMemo } from 'react';
import ArtLayout from '@site/src/components/ArtLayout';

// ─── Constants ───────────────────────────────────────────────────────────────

const COLORS = {
  bg: 'rgb(37, 36, 35)',
  cyan: '#26f2d5',
  red: '#ff4b4b',
  white: '#ffffff',
  dimWhite: 'rgba(255, 255, 255, 0.08)',
};

const GRID_SIZE = 20;
const CELL_COUNT = GRID_SIZE * GRID_SIZE;
const TICK_COUNT = 192;

// SVG track path from the anime.js homepage
const TRACK_PATH =
  'M189.142857,4 C227.456875,4 248.420457,4.00974888 256.864191,4.00974888 C263.817211,4.00974888 271.61219,3.69583517 274.986231,6.63061513 C276.382736,7.84531176 279.193529,11.3814152 280.479499,13.4815847 C281.719344,15.5064248 284.841964,20.3571626 275.608629,20.3571626 C265.817756,20.3571626 247.262478,19.9013915 243.955117,19.9013915 C239.27946,19.9013915 235.350655,24.7304885 228.6344,24.7304885 C224.377263,24.7304885 219.472178,21.0304113 214.535324,21.0304113 C207.18393,21.0304113 200.882842,30.4798911 194.124187,30.4798911 C186.992968,30.4798911 182.652552,23.6245972 173.457298,23.6245972 C164.83277,23.6245972 157.191045,31.5424105 157.191045,39.1815359 C157.191045,48.466779 167.088672,63.6623005 166.666679,66.9065088 C166.378668,69.1206889 155.842137,79.2568633 151.508744,77.8570506 C145.044576,75.7689355 109.126667,61.6405346 98.7556561,52.9785141 C96.4766876,51.0750861 89.3680347,39.5769094 83.4195005,38.5221785 C80.6048001,38.0231057 73.0179337,38.7426555 74.4158694,42.6956376 C76.7088819,49.1796531 86.3280337,64.1214904 87.1781062,66.9065088 C88.191957,70.2280995 86.4690152,77.0567847 82.2060607,79.2503488 C79.2489435,80.7719756 73.1324132,82.8858479 64.7015706,83.0708761 C55.1604808,83.2802705 44.4254811,80.401884 39.1722168,80.401884 C25.7762119,80.401884 24.3280517,89.1260466 22.476679,94.4501705 C21.637667,96.8629767 20.4337535,108 33.2301959,108 C37.8976087,108 45.0757044,107.252595 53.4789069,103.876424 C61.8821095,100.500252 122.090049,78.119656 128.36127,75.3523302 C141.413669,69.5926477 151.190142,68.4987755 147.018529,52.0784879 C143.007818,36.291544 143.396957,23.4057975 145.221196,19.6589263 C146.450194,17.1346449 148.420955,14.8552817 153.206723,15.7880203 C155.175319,16.1716965 155.097637,15.0525421 156.757598,11.3860986 C158.417558,7.71965506 161.842736,4.00974888 167.736963,4.00974888 C177.205308,4.00974888 184.938832,4 189.142857,4 Z';

// Orbit ellipse paths from the anime.js homepage
const ORBIT_PATHS = [
  'M280.628269,280.62826 C204.719269,356.53726 121.518269,396.40626 94.791269,369.68026 C68.065269,342.95326 107.934269,259.75126 183.842269,183.84326 C259.750269,107.93526 342.952269,68.0652597 369.679269,94.7922597 C396.405269,121.51826 356.536269,204.72026 280.628269,280.62826 Z',
  'M265.160269,265.16026 C187.543269,342.77726 102.857269,383.93326 76.008269,357.08426 C49.160269,330.23626 90.316269,245.55026 167.932269,167.93426 C245.549269,90.3162597 330.235269,49.1602597 357.083269,76.0082597 C383.932269,102.85726 342.776269,187.54326 265.160269,265.15926 Z',
  'M249.692269,248.80926 C171.587269,326.91326 86.505269,368.46526 59.657269,341.61626 C32.808269,314.76826 74.360269,229.68626 152.464269,151.58126 C230.569269,73.4772597 315.651269,31.9252597 342.499269,58.7742597 C369.348269,85.6222597 327.796269,170.70426 249.692269,248.80926 Z',
  'M233.340269,233.34026 C155.723269,310.95826 71.037269,352.11426 44.189269,325.26626 C17.340269,298.41626 58.496269,213.73026 136.113269,136.11326 C213.729269,58.4972597 298.415269,17.3412597 325.263269,44.1902597 C352.113269,71.0382597 310.956269,155.72426 233.340269,233.34026 Z',
  'M217.430269,217.43026 C141.522269,293.34026 58.320269,333.20926 31.593269,306.48326 C4.86726902,279.75626 44.736269,196.55526 120.645269,120.64626 C196.553269,44.7382597 279.755269,4.86925972 306.481269,31.5962597 C333.208269,58.3222597 293.338269,141.52426 217.430269,217.43226 Z',
  'M201.520269,201.52026 C128.297269,274.74526 47.963269,313.13026 22.092269,287.25926 C-3.78073098,261.38626 34.605269,181.05326 107.828269,107.83026 C181.053269,34.6062597 261.384269,-3.77974028 287.257269,22.0922597 C313.129269,47.9652597 274.743269,128.29826 201.520269,201.52126 Z',
  'M185.610269,185.61026 C115.804269,255.41726 39.230269,292.02226 14.579269,267.37026 C-10.072731,242.71826 26.532269,166.14526 96.338269,96.3392597 C166.144269,26.5322597 242.718269,-10.0717403 267.369269,14.5792597 C292.021269,39.2312597 255.416269,115.80526 185.610269,185.61126 Z',
  'M169.700269,169.70126 C104.531269,234.87026 33.004269,269.00126 9.93826902,245.93626 C-13.126731,222.87126 21.004269,151.34326 86.173269,86.1742597 C151.342269,21.0052597 222.870269,-13.1257403 245.935269,9.93925972 C269.000269,33.0042597 234.869269,104.53226 169.700269,169.70126 Z',
  'M153.790269,153.79126 C93.991269,213.59126 28.498269,245.05126 7.50826902,224.06026 C-13.482731,203.07026 17.978269,137.57626 77.776269,77.7772597 C137.576269,17.9782597 203.068269,-13.4827403 224.059269,7.50825972 C245.049269,28.4992597 213.589269,93.9922597 153.790269,153.79126 Z',
  'M137.880269,137.88126 C84.671269,191.09126 26.302269,218.98926 7.50826902,200.19526 C-11.285731,181.40126 16.612269,123.03126 69.821269,69.8222597 C123.031269,16.6132597 181.401269,-11.2857403 200.194269,7.50825972 C218.988269,26.3022597 191.089269,84.6722597 137.880269,137.88126 Z',
  'M121.970269,121.97126 C77.060269,166.88126 27.594269,190.23026 11.485269,174.12126 C-4.62473098,158.01126 18.724269,108.54526 63.635269,63.6352597 C108.545269,18.7252597 158.010269,-4.62274028 174.120269,11.4852597 C190.229269,27.5952597 166.880269,77.0612597 121.970269,121.97126 Z',
  'M106.061269,106.06126 C70.181269,141.94126 30.806269,160.73826 18.114269,148.04626 C5.42226902,135.35426 24.219269,95.9792597 60.099269,60.0992597 C95.978269,24.2202597 135.353269,5.42325972 148.045269,18.1152597 C160.737269,30.8072597 141.940269,70.1822597 106.061269,106.06126 Z',
  'M90.151269,90.1522597 C65.743269,114.55926 39.031269,127.42026 30.488269,118.87826 C21.946269,110.33526 34.807269,83.6232597 59.215269,59.2162597 C83.622269,34.8082597 110.335269,21.9462597 118.877269,30.4892597 C127.420269,39.0322597 114.558269,65.7442597 90.151269,90.1522597 Z',
];

// ─── Utility ─────────────────────────────────────────────────────────────────

function clamp01(t: number): number {
  return Math.max(0, Math.min(1, t));
}

function mapRange(value: number, inMin: number, inMax: number): number {
  return clamp01((value - inMin) / (inMax - inMin));
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

// ─── Scroll Progress Bar ────────────────────────────────────────────────────

function ScrollProgressBar({ progress }: { progress: number }) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        width: '3px',
        height: '100vh',
        zIndex: 10001,
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          width: '100%',
          height: `${progress * 100}%`,
          background: `linear-gradient(to bottom, ${COLORS.cyan}, ${COLORS.red})`,
          transition: 'height 0.08s linear',
          boxShadow: `0 0 8px ${COLORS.cyan}40`,
        }}
      />
    </div>
  );
}

// ─── Section 1: Stagger Grid ────────────────────────────────────────────────

function StaggerGrid({ progress }: { progress: number }) {
  const gridRef = useRef<HTMLDivElement>(null);
  const cellRefs = useRef<(HTMLDivElement | null)[]>([]);
  const revealAnimRef = useRef<any>(null);

  const sectionProgress = mapRange(progress, 0, 0.20);
  const fadeOut = 1 - mapRange(progress, 0.18, 0.22);

  // Generate accent indices once
  const accentIndices = useMemo(() => {
    const set = new Set<number>();
    // Seed-based deterministic "random" accent distribution
    for (let i = 0; i < CELL_COUNT; i++) {
      const hash = ((i * 2654435761) >>> 0) % 100;
      if (hash < 8) set.add(i);
    }
    return set;
  }, []);

  // Initialize anime.js stagger animation
  useEffect(() => {
    let cancelled = false;

    const setup = async () => {
      const { animate, stagger } = await import('animejs');
      if (cancelled) return;

      const cells = cellRefs.current.filter(Boolean) as HTMLDivElement[];
      if (cells.length === 0) return;

      const revealAnim = animate(cells, {
        scale: [0, 1],
        opacity: [0, 1],
        delay: stagger(18, {
          grid: [GRID_SIZE, GRID_SIZE],
          from: 'center',
        }),
        duration: 800,
        ease: 'outQuad',
        autoplay: false,
        composition: 'none',
      });

      revealAnimRef.current = revealAnim;
    };

    setup();

    return () => {
      cancelled = true;
      if (revealAnimRef.current) {
        try {
          revealAnimRef.current.cancel();
        } catch (_) { /* ignore */ }
        revealAnimRef.current = null;
      }
    };
  }, []);

  // Sync animation to scroll
  useEffect(() => {
    const anim = revealAnimRef.current;
    if (!anim) return;
    try {
      const dur = anim.duration;
      if (dur > 0) {
        anim.seek(sectionProgress * dur, true);
      }
    } catch (_) { /* ignore */ }
  }, [sectionProgress]);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        perspective: '1200px',
        perspectiveOrigin: '50% 40%',
        opacity: fadeOut,
        transition: 'opacity 0.15s ease',
        pointerEvents: 'none',
      }}
    >
      <div
        ref={gridRef}
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${GRID_SIZE}, 18px)`,
          gap: '3px',
          transformStyle: 'preserve-3d',
          transform: `rotateX(55deg) rotateZ(-45deg) scale(${lerp(0.8, 1.2, sectionProgress)})`,
          willChange: 'transform',
        }}
      >
        {Array.from({ length: CELL_COUNT }, (_, i) => {
          const isAccent = accentIndices.has(i);
          return (
            <div
              key={i}
              ref={(el) => { cellRefs.current[i] = el; }}
              style={{
                width: 18,
                height: 18,
                borderRadius: '50%',
                border: `1px solid ${isAccent ? COLORS.cyan + '60' : COLORS.dimWhite}`,
                backgroundColor: isAccent ? COLORS.cyan + '10' : 'transparent',
                opacity: 0,
                transform: 'scale(0)',
                transformStyle: 'preserve-3d',
                willChange: 'transform, opacity',
              }}
            />
          );
        })}
      </div>

      {/* Ambient glow */}
      <div
        style={{
          position: 'absolute',
          width: 500,
          height: 500,
          background: `radial-gradient(ellipse at center, ${COLORS.cyan}08 0%, transparent 70%)`,
          pointerEvents: 'none',
          transform: 'rotateX(55deg) rotateZ(-45deg)',
        }}
      />
    </div>
  );
}

// ─── Section 2: SVG Track Draw ──────────────────────────────────────────────

function SvgTrackDraw({ progress }: { progress: number }) {
  const sectionProgress = mapRange(progress, 0.20, 0.40);
  const fadeIn = mapRange(progress, 0.19, 0.23);
  const fadeOut = 1 - mapRange(progress, 0.38, 0.42);
  const sectionOpacity = Math.min(fadeIn, fadeOut);

  // Calculate stroke-dasharray for the highlight path
  const drawLength = sectionProgress * 1000;
  const highlightDasharray = `${drawLength} ${1000 - drawLength}`;

  // Calculate car position along the path (approximate)
  // The car follows the draw progress
  const carProgress = sectionProgress;

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        perspective: '800px',
        perspectiveOrigin: '50% 30%',
        opacity: sectionOpacity,
        transition: 'opacity 0.1s ease',
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '600px',
          height: '300px',
          transformStyle: 'preserve-3d',
          transform: 'rotateX(90deg) rotateZ(6.174deg) scale(0.8)',
        }}
      >
        {/* Background track */}
        <svg
          viewBox="0 0 304 112"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            overflow: 'visible',
          }}
        >
          <g stroke="none" fill="none" fillRule="evenodd">
            <path
              d={TRACK_PATH}
              stroke={COLORS.cyan}
              strokeWidth="6"
              strokeOpacity="0.15"
              pathLength={1000}
              strokeDasharray="1000 0"
              strokeDashoffset="0"
            />
          </g>
        </svg>

        {/* Highlight track with draw animation */}
        <svg
          viewBox="0 0 304 112"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            overflow: 'visible',
          }}
        >
          <g stroke="none" fill="none" fillRule="evenodd">
            <path
              d={TRACK_PATH}
              stroke={COLORS.cyan}
              strokeWidth="2"
              pathLength={1000}
              strokeDasharray={highlightDasharray}
              strokeDashoffset="0"
              style={{
                filter: `drop-shadow(0 0 4px ${COLORS.cyan}80)`,
                transition: 'stroke-dasharray 0.05s linear',
              }}
            />
          </g>
        </svg>

        {/* Car element following the path */}
        <SvgCar pathData={TRACK_PATH} progress={carProgress} />
      </div>

      {/* Section label */}
      <div
        style={{
          position: 'absolute',
          bottom: '15%',
          left: '50%',
          transform: 'translateX(-50%)',
          color: COLORS.cyan,
          fontSize: '0.6rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          opacity: sectionProgress > 0.1 ? 0.4 : 0,
          transition: 'opacity 0.3s ease',
          fontFamily: '"SF Mono", "Fira Code", monospace',
        }}
      >
        DRAWABLE
      </div>
    </div>
  );
}

// ─── SVG Car component ──────────────────────────────────────────────────────

function SvgCar({ pathData, progress }: { pathData: string; progress: number }) {
  const pathRef = useRef<SVGPathElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!pathRef.current) return;
    const path = pathRef.current;
    const totalLength = path.getTotalLength();
    const point = path.getPointAtLength(progress * totalLength);
    setPos({ x: point.x, y: point.y });
  }, [progress, pathData]);

  return (
    <>
      {/* Hidden path for measurement */}
      <svg
        viewBox="0 0 304 112"
        style={{ position: 'absolute', inset: 0, width: 0, height: 0, overflow: 'hidden' }}
      >
        <path ref={pathRef} d={pathData} fill="none" />
      </svg>

      {/* Car dot */}
      <div
        style={{
          position: 'absolute',
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: COLORS.cyan,
          boxShadow: `0 0 12px ${COLORS.cyan}, 0 0 24px ${COLORS.cyan}60`,
          // Map SVG coords (304x112) to container coords
          left: `${(pos.x / 304) * 100}%`,
          top: `${(pos.y / 112) * 100}%`,
          transform: 'translate(-50%, -50%)',
          opacity: progress > 0.01 ? 1 : 0,
          transition: 'opacity 0.2s ease',
          zIndex: 10,
        }}
      />
    </>
  );
}

// ─── Section 3: Clock ───────────────────────────────────────────────────────

function ClockSection({ progress }: { progress: number }) {
  const sectionProgress = mapRange(progress, 0.40, 0.60);
  const fadeIn = mapRange(progress, 0.39, 0.43);
  const fadeOut = 1 - mapRange(progress, 0.58, 0.62);
  const sectionOpacity = Math.min(fadeIn, fadeOut);

  // How many ticks are visible
  const visibleTicks = Math.floor(sectionProgress * TICK_COUNT);
  // Playhead rotation
  const playheadRotation = sectionProgress * 360;

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: sectionOpacity,
        transition: 'opacity 0.1s ease',
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: 400,
          height: 400,
        }}
      >
        {/* Clock ticks */}
        {Array.from({ length: TICK_COUNT }, (_, i) => {
          const rotation = (i / TICK_COUNT) * 360;
          const isVisible = i < visibleTicks;
          const isMajor = i % 16 === 0;

          return (
            <div
              key={i}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: isMajor ? 3 : 1,
                height: isMajor ? 12 : 6,
                backgroundColor: COLORS.red,
                transform: `translate(-50%, -50%) rotate(${rotation}deg) translateY(-178px)`,
                opacity: isVisible ? (isMajor ? 0.9 : 0.5) : 0,
                transition: 'opacity 0.05s ease',
                borderRadius: '1px',
              }}
            />
          );
        })}

        {/* Playhead line */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: 2,
            height: 190,
            background: `linear-gradient(to top, ${COLORS.red}00, ${COLORS.red})`,
            transformOrigin: 'center bottom',
            transform: `translate(-50%, -100%) rotate(${playheadRotation}deg)`,
            opacity: sectionProgress > 0.02 ? 0.8 : 0,
            transition: 'opacity 0.2s ease',
          }}
        />

        {/* Center dot */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: COLORS.red,
            transform: 'translate(-50%, -50%)',
            boxShadow: `0 0 12px ${COLORS.red}80`,
            opacity: sectionProgress > 0.02 ? 1 : 0,
          }}
        />

        {/* SVG arc segments (decorative, from anime.js clock-grid) */}
        <svg
          width="400"
          height="400"
          viewBox="0 0 400 400"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          <g
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              opacity="1"
              transform="translate(18.9387, 18.9387)"
              stroke={COLORS.red}
              strokeLinecap="butt"
              strokeLinejoin="square"
              strokeWidth="5"
            >
              {/* 8 arc segments at 45-degree intervals */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => {
                const arcProgress = mapRange(sectionProgress, idx * 0.1, idx * 0.1 + 0.3);
                const dashLen = arcProgress * 1000;
                return (
                  <path
                    key={angle}
                    d="M287.120579,74.9885455 C259.976449,47.8478276 222.479216,31.0612724 181.061272,31.0612724"
                    pathLength={1000}
                    strokeDasharray={`${dashLen} ${1010 - dashLen}`}
                    strokeDashoffset="0"
                    style={{
                      opacity: arcProgress > 0 ? 0.15 + arcProgress * 0.3 : 0,
                      strokeWidth: '5px',
                      transform: angle === 0
                        ? undefined
                        : `rotate(${angle}deg)`,
                      transformOrigin: '181.06px 181.06px',
                    }}
                  />
                );
              })}
            </g>
          </g>
        </svg>
      </div>

      {/* Section label */}
      <div
        style={{
          position: 'absolute',
          bottom: '12%',
          left: '50%',
          transform: 'translateX(-50%)',
          color: COLORS.red,
          fontSize: '0.6rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          opacity: sectionProgress > 0.1 ? 0.4 : 0,
          transition: 'opacity 0.3s ease',
          fontFamily: '"SF Mono", "Fira Code", monospace',
        }}
      >
        TIMELINE
      </div>
    </div>
  );
}

// ─── Section 4: Sphere Orbits ───────────────────────────────────────────────

function SphereOrbits({ progress }: { progress: number }) {
  const sectionProgress = mapRange(progress, 0.60, 0.80);
  const fadeIn = mapRange(progress, 0.59, 0.63);
  const fadeOut = 1 - mapRange(progress, 0.78, 0.82);
  const sectionOpacity = Math.min(fadeIn, fadeOut);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: sectionOpacity,
        transition: 'opacity 0.1s ease',
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: 420,
          height: 420,
        }}
      >
        <svg
          viewBox="-20 -20 440 440"
          width="420"
          height="420"
          style={{
            overflow: 'visible',
          }}
        >
          <g
            stroke="none"
            fill="none"
            fillRule="evenodd"
          >
            <g
              opacity="1"
              transform="translate(18, 18)"
              stroke={COLORS.cyan}
            >
              {ORBIT_PATHS.map((d, idx) => {
                // Stagger each orbit's reveal
                const orbitDelay = idx * 0.06;
                const orbitProgress = mapRange(sectionProgress, orbitDelay, orbitDelay + 0.5);
                const dashLen = orbitProgress * 1000;
                // Varying stroke width (thicker for outer, thinner for inner)
                const strokeW = lerp(3.5, 1.5, idx / (ORBIT_PATHS.length - 1));
                // Slight translate offset for 3D depth feel
                const offset = lerp(-4, 4, idx / (ORBIT_PATHS.length - 1));

                return (
                  <path
                    key={idx}
                    d={d}
                    fillRule="nonzero"
                    pathLength={1000}
                    strokeDasharray={`${dashLen} ${1010 - dashLen}`}
                    strokeDashoffset="0"
                    strokeWidth={strokeW}
                    style={{
                      opacity: orbitProgress > 0 ? lerp(0.2, 0.7, orbitProgress) : 0,
                      transform: `translateX(${offset}px) translateY(${offset}px)`,
                      filter: orbitProgress > 0.5 ? `drop-shadow(0 0 2px ${COLORS.cyan}40)` : 'none',
                    }}
                  />
                );
              })}
            </g>
          </g>
        </svg>

        {/* Central glow */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: 60,
            height: 60,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${COLORS.cyan}20 0%, transparent 70%)`,
            transform: 'translate(-50%, -50%)',
            opacity: sectionProgress > 0.3 ? sectionProgress : 0,
          }}
        />
      </div>

      {/* Section label */}
      <div
        style={{
          position: 'absolute',
          bottom: '12%',
          left: '50%',
          transform: 'translateX(-50%)',
          color: COLORS.cyan,
          fontSize: '0.6rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          opacity: sectionProgress > 0.1 ? 0.4 : 0,
          transition: 'opacity 0.3s ease',
          fontFamily: '"SF Mono", "Fira Code", monospace',
        }}
      >
        SCOPE
      </div>
    </div>
  );
}

// ─── Section 5: Finale ──────────────────────────────────────────────────────

function Finale({ progress }: { progress: number }) {
  const sectionProgress = mapRange(progress, 0.80, 1.0);
  const fadeIn = mapRange(progress, 0.79, 0.83);

  // Scale converges inward
  const scale = lerp(1.2, 0.6, sectionProgress);
  const textOpacity = mapRange(sectionProgress, 0.15, 0.4);
  const textBlur = lerp(8, 0, mapRange(sectionProgress, 0.1, 0.5));

  // Finale radial lines
  const lineCount = 48;

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: fadeIn,
        transition: 'opacity 0.1s ease',
        pointerEvents: 'none',
      }}
    >
      {/* Radial converging lines */}
      <div
        style={{
          position: 'relative',
          width: 400,
          height: 400,
          transform: `scale(${scale})`,
          willChange: 'transform',
        }}
      >
        {Array.from({ length: lineCount }, (_, i) => {
          const angle = (i / lineCount) * 360;
          const lineProgress = mapRange(sectionProgress, 0, 0.6);
          const lineLength = lerp(200, 20, lineProgress);
          const isCyan = i % 3 === 0;

          return (
            <div
              key={i}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: 1,
                height: lineLength,
                background: `linear-gradient(to top, transparent, ${isCyan ? COLORS.cyan : COLORS.red}${isCyan ? '60' : '40'})`,
                transformOrigin: 'center bottom',
                transform: `translate(-50%, -100%) rotate(${angle}deg)`,
                opacity: lineProgress > 0 ? lerp(0.6, 0.1, lineProgress) : 0,
              }}
            />
          );
        })}

        {/* Center dot */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: lerp(4, 16, sectionProgress),
            height: lerp(4, 16, sectionProgress),
            borderRadius: '50%',
            background: COLORS.cyan,
            transform: 'translate(-50%, -50%)',
            boxShadow: `0 0 ${lerp(8, 40, sectionProgress)}px ${COLORS.cyan}80`,
            opacity: sectionProgress > 0.1 ? 1 : 0,
          }}
        />
      </div>

      {/* Title text */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          opacity: textOpacity,
          filter: `blur(${textBlur}px)`,
          transition: 'filter 0.1s ease',
        }}
      >
        <div
          style={{
            fontSize: '2.5rem',
            fontWeight: 100,
            letterSpacing: '0.3em',
            color: COLORS.white,
            fontFamily: '"SF Mono", "Fira Code", monospace',
            marginBottom: '0.5rem',
          }}
        >
          MACHINE
        </div>
        <div
          style={{
            fontSize: '0.65rem',
            letterSpacing: '0.25em',
            color: `${COLORS.cyan}80`,
            fontFamily: '"SF Mono", "Fira Code", monospace',
          }}
        >
          ANIME.JS SHOWCASE
        </div>
      </div>
    </div>
  );
}

// ─── Machine Canvas (scroll container) ──────────────────────────────────────

function MachineCanvas() {
  const [progress, setProgress] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const scrollTop = container.scrollTop;
        const scrollHeight = container.scrollHeight - container.clientHeight;
        const p = scrollHeight > 0 ? Math.max(0, Math.min(1, scrollTop / scrollHeight)) : 0;
        setProgress(p);
      });
    };

    container.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      container.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <ScrollProgressBar progress={progress} />

      <div
        ref={scrollRef}
        style={{
          position: 'fixed',
          inset: 0,
          overflowY: 'auto',
          zIndex: 9999,
          background: COLORS.bg,
        }}
      >
        {/* Sticky viewport */}
        <div
          style={{
            position: 'sticky',
            top: 0,
            width: '100vw',
            height: '100vh',
            overflow: 'hidden',
          }}
        >
          {/* Section 1: Stagger Grid (0-20%) */}
          <StaggerGrid progress={progress} />

          {/* Section 2: SVG Track Draw (20-40%) */}
          <SvgTrackDraw progress={progress} />

          {/* Section 3: Clock (40-60%) */}
          <ClockSection progress={progress} />

          {/* Section 4: Sphere Orbits (60-80%) */}
          <SphereOrbits progress={progress} />

          {/* Section 5: Finale (80-100%) */}
          <Finale progress={progress} />

          {/* Scroll hint at bottom */}
          <div
            style={{
              position: 'absolute',
              bottom: '2rem',
              left: '50%',
              transform: 'translateX(-50%)',
              color: `${COLORS.white}40`,
              fontSize: '0.55rem',
              letterSpacing: '0.15em',
              fontFamily: '"SF Mono", "Fira Code", monospace',
              textTransform: 'uppercase',
              opacity: progress < 0.05 ? 1 : Math.max(0, 1 - progress * 10),
              transition: 'opacity 0.3s ease',
              animation: 'machineScrollPulse 2s ease-in-out infinite',
            }}
          >
            &#x2193; scroll to explore
          </div>
        </div>

        {/* Scroll spacer */}
        <div style={{ height: '500vh' }} />
      </div>

      {/* Keyframe for scroll hint pulse */}
      <style>{`
        @keyframes machineScrollPulse {
          0%, 100% { opacity: 0.4; transform: translateX(-50%) translateY(0); }
          50% { opacity: 0.7; transform: translateX(-50%) translateY(4px); }
        }
      `}</style>
    </>
  );
}

// ─── Page Component ──────────────────────────────────────────────────────────

export default function Machine() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <ArtLayout artworkId="machine" title="Machine" year={2026}>
      {mounted && <MachineCanvas />}
    </ArtLayout>
  );
}
