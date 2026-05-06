import React, { useEffect } from 'react';
import Layout from '@theme-original/Navbar/Layout';

/**
 * Navbar Layout wrapper that handles scroll-based styling.
 *
 * - Transparent navbar when scrolled < 150px (over hero)
 * - Solid background navbar when scrolled >= 150px
 * - Logo filter: white when over hero, natural color when scrolled (light mode)
 */
export default function LayoutWrapper(props) {
  useEffect(() => {
    const SCROLL_THRESHOLD = 150;
    const navbar = document.querySelector('.navbar');
    const root = document.documentElement;
    let wasAtTop = null; // track previous state to skip redundant updates

    const handleScroll = () => {
      const isAtTop = window.scrollY < SCROLL_THRESHOLD;
      if (isAtTop === wasAtTop) return; // no state change — skip
      wasAtTop = isAtTop;

      if (isAtTop) {
        root.style.setProperty('--navbar-bg-color', 'transparent');
        root.style.setProperty('--navbar-text-color', '#ffffff');
        navbar?.classList.add('navbar--over-hero');
      } else {
        root.style.setProperty('--navbar-bg-color', 'var(--ifm-background-color)');
        root.style.setProperty('--navbar-text-color', 'var(--ifm-navbar-link-color)');
        navbar?.classList.remove('navbar--over-hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <Layout {...props} />;
}
