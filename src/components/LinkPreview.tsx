import React from 'react';
import styles from './styles.module.scss';

function isYouTubeUrl(url: string): boolean {
  return url.includes('youtube.com') || url.includes('youtu.be');
}

function extractYouTubeVideoId(url: string): string | null {
  const match = url.match(
    /(?:\/embed\/|\/watch\?v=|youtu\.be\/|\/v\/|watch\?.*v=)([^&?#]+)/,
  );
  return match ? match[1] : null;
}

type LinkPreviewProps = {
  url: string;
  title?: string;
};

export default function LinkPreview({ url, title }: LinkPreviewProps) {
  if (isYouTubeUrl(url)) {
    const videoId = extractYouTubeVideoId(url);
    if (videoId) {
      return (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkPreview}
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title || 'YouTube video'}
            style={{ width: '100%', borderRadius: '4px' }}
          />
          {title && <span className={styles.linkPreviewTitle}>{title}</span>}
        </a>
      );
    }
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.linkPreviewExternal}
    >
      🔗 {title || url}
    </a>
  );
}
