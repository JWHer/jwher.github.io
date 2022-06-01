import React from 'react';
import Layout from '@theme-original/Navbar/Layout';

export default function LayoutWrapper(props) {
  document.addEventListener('scroll',()=>{
    if(window.scrollY<150){
      document.documentElement.style.setProperty(
        '--navbar-bg-color', 'transparent'
      );
      document.documentElement.style.setProperty(
        '--navbar-text-color', '#e3e3e3'
      );
    }else{
      document.documentElement.style.setProperty(
        '--navbar-bg-color',
        'var(--ifm-background-surface-color)'
      );
      document.documentElement.style.setProperty(
        '--navbar-text-color',
        'var(--ifm-navbar-link-color)'
      );
    }
  });
  return (
    <>
      <Layout {...props} />
    </>
  );
}
