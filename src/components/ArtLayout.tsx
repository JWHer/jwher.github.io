import React from 'react';
import { getArtwork } from '@site/src/data/artworks';

interface ArtLayoutProps {
  /**
   * Artwork id (matches ARTWORKS entries in src/data/artworks.ts).
   * When provided, the layout consults the artwork's `published` flag and
   * renders a "준비중" notice instead of children if false.
   */
  artworkId?: string;
  title: string;
  subtitle?: string;
  year?: number;
  children: React.ReactNode;
}

/**
 * Shared layout for full-screen art pages.
 * Hides navbar/footer, shows back link and title overlay.
 */
export default function ArtLayout({ artworkId, title, subtitle, year, children }: ArtLayoutProps) {
  const artwork = artworkId ? getArtwork(artworkId) : undefined;
  const isUnpublished = artwork ? !artwork.published : false;

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

      {isUnpublished ? <ComingSoon /> : children}
    </>
  );
}

function ComingSoon() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        background: '#000',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      <div style={{ fontSize: '2rem', letterSpacing: '0.2em', marginBottom: '0.6rem' }}>
        COMING SOON
      </div>
      <div style={{ fontSize: '0.85rem', opacity: 0.6, letterSpacing: '0.05em' }}>
        준비중입니다.
      </div>
    </div>
  );
}
