import React, { useEffect } from 'react';
import Layout from '@theme-original/Navbar/Layout';

/**
 * Transparent navbar while the fixed hero is visible.
 * Switches to solid when scroll reaches the bottom of the hero
 * (hero height = 100vh - navbar height).
 */
export default function LayoutWrapper(props) {
  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    const root = document.documentElement;
    let wasAtTop = null;

    const handleScroll = () => {
      const navbarH = navbar?.offsetHeight || 60;
      // Trigger earlier: when content covers ~50% of navbar height past the hero
      const isAtTop = window.scrollY < (window.innerHeight - navbarH * 1.5);
      if (isAtTop === wasAtTop) return;
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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <Layout {...props} />;
}
