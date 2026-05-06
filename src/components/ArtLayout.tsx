import React from 'react';

interface ArtLayoutProps {
  title: string;
  subtitle?: string;
  year?: number;
  children: React.ReactNode;
}

/**
 * Shared layout for full-screen art pages.
 * Hides navbar/footer, shows back link and title overlay.
 */
export default function ArtLayout({ title, subtitle, year, children }: ArtLayoutProps) {
  return (
    <>
      <style>{`
        .navbar, footer.footer { display: none !important; }
        #__docusaurus { background: #000; }
      `}</style>

      <a
        href="/art"
        style={{
          position: 'fixed',
          top: '1.4rem',
          left: '1.6rem',
          color: '#fff',
          fontSize: '0.7rem',
          letterSpacing: '0.12em',
          textDecoration: 'none',
          textTransform: 'uppercase',
          zIndex: 10000,
          background: 'rgba(0,0,0,0.5)',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
          padding: '0.4rem 0.8rem',
          borderRadius: '4px',
        }}
      >
        &larr; Art
      </a>

      <div
        style={{
          position: 'fixed',
          bottom: '1.4rem',
          left: '1.6rem',
          color: '#fff',
          fontSize: '0.65rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          zIndex: 10000,
          lineHeight: 1.8,
          background: 'rgba(0,0,0,0.5)',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
          padding: '0.5rem 0.8rem',
          borderRadius: '4px',
        }}
      >
        <div>{title}</div>
        {subtitle && <div style={{ opacity: 0.6 }}>{subtitle}</div>}
        {year && <div style={{ opacity: 0.6 }}>{year}</div>}
      </div>

      {children}
    </>
  );
}
