import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import { CONTENT_INDEX } from '@site/src/data/content-index';
import { trackEvent } from '@site/src/analytics/tracking';
import styles from './styles.module.scss';

function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(hover: none)');
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return isMobile;
}

type PreviewProps = {
  text: string;
  /** Internal path to link to (new API) */
  to?: string;
  /** Internal path to link to (legacy API, same as `to`) */
  src?: string;
  /** Optional section ID to link to (appended as #id) */
  id?: string;
  /** Optional description override */
  description?: string;
};

export default function Preview({ text, to, src, id, description }: PreviewProps) {
  const [visible, setVisible] = useState(false);
  const isMobile = useIsMobile();

  const target = to || src || '#';
  const href = id ? `${target}#${id}` : target;

  const item = CONTENT_INDEX.find(
    (i) => i.path === target || i.path.endsWith(target),
  );
  const previewDesc = description || item?.description || '';

  if (isMobile) {
    return <Link to={href}>{text}</Link>;
  }

  return (
    <span
      style={{ position: 'relative', display: 'inline-block', cursor: 'pointer' }}
      onMouseEnter={() => {
        setVisible(true);
        trackEvent('preview_hover', { preview_target: href });
      }}
      onMouseLeave={() => setVisible(false)}
    >
      <Link to={href}>{text}</Link>
      {visible && (
        <div className={styles.preview}>
          {item && <strong>{item.title}</strong>}
          {previewDesc && <p style={{ margin: '0.25rem 0 0' }}>{previewDesc}</p>}
          {!item && !previewDesc && <p style={{ margin: 0 }}>설명을 찾을 수 없습니다.</p>}
        </div>
      )}
    </span>
  );
}
