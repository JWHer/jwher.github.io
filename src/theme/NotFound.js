import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';
import { PageMetadata } from '@docusaurus/theme-common';
import { CONTENT_INDEX } from '@site/src/data/content-index';
import { trackEvent } from '@site/src/analytics/tracking';
import styles from './notfound.module.scss';

const JUNK_PATTERNS = [
  /\.(php|asp|aspx|env|xml|bak|cgi|pl|sh|sql|zip|tar|gz|rar|7z|exe|dll|ini|conf|cfg|log)$/i,
  /(wp-admin|wp-login|wp-content|phpmyadmin|\.git|xmlrpc|\/admin$|\.env|\.htaccess)/i,
  /\.\./,
  /%[0-9a-f]{2}/i,
  /^\/[0-9a-f]{16,}/,
  /\.(jpg|jpeg|png|gif|svg|ico|webp|css|js|woff|woff2|ttf|eot)$/i,
];

const STOPWORDS = new Set([
  'the', 'a', 'an', 'to', 'for', 'in', 'of', 'and', 'or', 'with',
  'docs', 'blog', 'www', 'http', 'https',
]);

function isJunkUrl(pathname) {
  return JUNK_PATTERNS.some((p) => p.test(pathname));
}

function getSuggestions(pathname) {
  if (isJunkUrl(pathname)) return [];

  const keywords = pathname
    .toLowerCase()
    .split(/[\/\-_.]+/)
    .filter((k) => k.length > 2 && !STOPWORDS.has(k) && !/^\d+$/.test(k));

  if (keywords.length === 0) return [];

  const scored = CONTENT_INDEX
    .map((item) => {
      const score = keywords.reduce((acc, k) => {
        const inKeywords = item.keywords.includes(k) ? 2 : 0;
        const inTitle = item.title.toLowerCase().includes(k) ? 1 : 0;
        const inDesc = item.description.toLowerCase().includes(k) ? 1 : 0;
        return acc + inKeywords + inTitle + inDesc;
      }, 0);
      return { ...item, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);

  return scored;
}

export default function NotFound() {
  const { pathname } = useLocation();
  const isJunk = isJunkUrl(pathname);
  const suggestions = getSuggestions(pathname);

  React.useEffect(() => {
    trackEvent('not_found', {
      attempted_path: pathname,
      is_junk_url: isJunk,
      suggestion_count: suggestions.length,
    });
  }, [pathname]);

  return (
    <>
      <PageMetadata title="페이지를 찾을 수 없습니다" />
      <Layout>
        <div className={styles.notfound__header} />
        <main className="container margin-vert--xl">
          <div className="row">
            <div className="col col--6 col--offset-3">
              <h1 className="hero__title">404</h1>
              {isJunk ? (
                <p>존재하지 않는 페이지입니다.</p>
              ) : (
                <>
                  <p>찾으시는 페이지가 이동했거나 삭제되었을 수 있습니다.</p>
                  {suggestions.length > 0 && (
                    <div>
                      <h2>관련 글</h2>
                      <ul>
                        {suggestions.map((item) => (
                          <li key={item.path}>
                            <Link
                              to={item.path}
                              onClick={() =>
                                trackEvent('suggestion_click', {
                                  from_path: pathname,
                                  to_path: item.path,
                                  score: item.score,
                                })
                              }
                            >
                              {item.title}
                            </Link>
                            {item.description && (
                              <span
                                style={{
                                  color: 'var(--ifm-color-secondary-darkest)',
                                  marginLeft: '0.5rem',
                                  fontSize: '0.875rem',
                                }}
                              >
                                — {item.description}
                              </span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <p>
                    <Link to="/blog">모든 블로그 글 보기</Link>
                    {' · '}
                    <Link to="/docs">문서 전체 보기</Link>
                  </p>
                </>
              )}
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
