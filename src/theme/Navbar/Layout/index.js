import React, { useEffect } from 'react';
import Layout from '@theme-original/Navbar/Layout';

/**
 * Navbar Layout wrapper that handles scroll-based styling.
 *
 * This component adds a scroll listener that changes navbar background
 * and text colors based on scroll position:
 * - Transparent navbar when scrolled < 150px
 * - Solid background navbar when scrolled >= 150px
 *
 * Memory leak prevention: Event listener is properly cleaned up on unmount
 */
export default function LayoutWrapper(props) {
  useEffect(() => {
    const SCROLL_THRESHOLD = 150;

    const handleScroll = () => {
      const isAtTop = window.scrollY < SCROLL_THRESHOLD;

      if (isAtTop) {
        document.documentElement.style.setProperty(
          '--navbar-bg-color',
          'transparent'
        );
        document.documentElement.style.setProperty(
          '--navbar-text-color',
          '#e3e3e3'
        );
      } else {
        document.documentElement.style.setProperty(
          '--navbar-bg-color',
          'var(--ifm-background-surface-color)'
        );
        document.documentElement.style.setProperty(
          '--navbar-text-color',
          'var(--ifm-navbar-link-color)'
        );
      }
    };

    // Add scroll listener
    document.addEventListener('scroll', handleScroll);

    // Initial call to set correct state
    handleScroll();

    // Cleanup function to prevent memory leaks
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <Layout {...props} />;
}
