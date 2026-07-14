import { useEffect } from 'react';
import Layout from '@theme-original/Footer/Layout';
import { toggleTypeface } from '@site/src/utils/typeface';

/**
 * Hidden serif↔sans typeface toggle: clicking the heart icon in the
 * footer copyright flips the site-wide typography mode.
 * The copyright HTML is injected from docusaurus.config.js, so we
 * attach the handler via event delegation on the footer.
 */
export default function FooterLayoutWrapper(props) {
  useEffect(() => {
    const footer = document.querySelector('footer.footer');
    if (!footer) return undefined;
    const onClick = (e) => {
      if (e.target.closest('.heart-icon')) toggleTypeface();
    };
    footer.addEventListener('click', onClick);
    return () => footer.removeEventListener('click', onClick);
  }, []);

  return <Layout {...props} />;
}
