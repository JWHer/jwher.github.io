import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import { useColorMode } from '@docusaurus/theme-common';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client';
import BlogPostItemContainer from '@theme/BlogPostItem/Container';
import BlogPostItemHeader from '@theme/BlogPostItem/Header';
import BlogPostItemContent from '@theme/BlogPostItem/Content';
import BlogPostItemFooter from '@theme/BlogPostItem/Footer';

const UTTERANCES_SELECTOR = 'iframe.utterances-frame';
const UTTERANCES_REPO = 'JWHer/JWHer';

/**
 * Apply a bottom margin in list view
 */
function useContainerClassName() {
  const { isBlogPostPage } = useBlogPost();
  return !isBlogPostPage ? 'margin-bottom--xl' : undefined;
}

/**
 * Custom BlogPostItem component with Utterances comments integration.
 *
 * Features:
 * - Utterances comment system that syncs with dark/light theme
 * - Buy Me a Coffee button on blog post pages
 * - Proper theme message posting to existing Utterances iframe
 */
export default function BlogPostItem({ children, className }) {
  const containerClassName = useContainerClassName();
  const { isBlogPostPage = false } = useBlogPost();
  const { colorMode } = useColorMode();
  const utterancesTheme = colorMode === 'dark' ? 'github-dark' : 'github-light';
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isBlogPostPage) return;

    const utterancesEl = containerRef.current?.querySelector(
      UTTERANCES_SELECTOR
    );

    const createUtterancesEl = () => {
      const script = document.createElement('script');

      script.src = 'https://utteranc.es/client.js';
      script.setAttribute('repo', UTTERANCES_REPO);
      script.setAttribute('issue-term', 'title');
      script.setAttribute('label', 'comment');
      script.setAttribute('theme', utterancesTheme);
      script.crossOrigin = 'anonymous';
      script.async = true;

      containerRef.current?.appendChild(script);
    };

    const postThemeMessage = () => {
      const message = {
        type: 'set-theme',
        theme: utterancesTheme,
      };

      utterancesEl?.contentWindow?.postMessage(
        message,
        'https://utteranc.es'
      );
    };

    utterancesEl ? postThemeMessage() : createUtterancesEl();
  }, [utterancesTheme, isBlogPostPage]);

  return (
    <BlogPostItemContainer className={clsx(containerClassName, className)}>
      <BlogPostItemHeader />
      <BlogPostItemContent>{children}</BlogPostItemContent>
      {isBlogPostPage && (
        <a href="https://www.buymeacoffee.com/jwher">
          <img
            style={{ margin: '20px 0' }}
            src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=jwher&button_colour=40DCA5&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00"
            alt="Buy Me a Coffee"
          />
        </a>
      )}
      <BlogPostItemFooter />
      {isBlogPostPage && <div ref={containerRef} />}
    </BlogPostItemContainer>
  );
}
