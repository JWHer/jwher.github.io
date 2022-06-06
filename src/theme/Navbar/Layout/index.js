import React, {useEffect} from 'react';
import Layout from '@theme-original/Navbar/Layout';

export default function LayoutWrapper(props) {
  useEffect(() => {
    // 브라우저 콘솔에만 로그가 남습니다. 서버 측 렌더링 중에는 아무것도 기록되지 않습니다.
    // console.log("I'm now in the browser");
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
  }, []);

  return (
    <>
      <Layout {...props} />
    </>
  );
}
