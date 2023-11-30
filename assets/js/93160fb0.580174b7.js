"use strict";(self.webpackChunkjwher_blog=self.webpackChunkjwher_blog||[]).push([[6824],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(r),g=a,f=m["".concat(s,".").concat(g)]||m[g]||u[g]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},58645:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={authors:["jwher"],description:"Programming Massively Parallel Processors - Chapter 1",slug:"cudabook-1",tags:["tech","parallel computing"],title:"\ub300\uaddc\ubaa8 \ubcd1\ub82c\ud504\ub85c\uc138\uc11c \ud504\ub85c\uadf8\ub798\ubc0d(\uc18c\uac1c)"},l=void 0,i={permalink:"/posts/cudabook-1",editUrl:"https://github.com/jwher/jwher.github.io/tree/main/posts/2023-02-09-programming-massively-parallel-processors/index.md",source:"@site/posts/2023-02-09-programming-massively-parallel-processors/index.md",title:"\ub300\uaddc\ubaa8 \ubcd1\ub82c\ud504\ub85c\uc138\uc11c \ud504\ub85c\uadf8\ub798\ubc0d(\uc18c\uac1c)",description:"Programming Massively Parallel Processors - Chapter 1",date:"2023-02-09T00:00:00.000Z",formattedDate:"February 9, 2023",tags:[{label:"tech",permalink:"/posts/tags/tech"},{label:"parallel computing",permalink:"/posts/tags/parallel-computing"}],readingTime:6.03,hasTruncateMarker:!0,authors:[{name:"Jeongwon Her",title:"MLOps Engineer",url:"https://github.com/jwher",imageURL:"https://github.com/jwher.png",key:"jwher"}],frontMatter:{authors:["jwher"],description:"Programming Massively Parallel Processors - Chapter 1",slug:"cudabook-1",tags:["tech","parallel computing"],title:"\ub300\uaddc\ubaa8 \ubcd1\ub82c\ud504\ub85c\uc138\uc11c \ud504\ub85c\uadf8\ub798\ubc0d(\uc18c\uac1c)"},prevItem:{title:"Pathways\ub97c \uc774\uc6a9\ud55c \uc5b8\uc5b4\ubaa8\ub378 \uc2a4\ucf00\uc77c\ub9c1",permalink:"/posts/palm"},nextItem:{title:"Attention \ub2e4\uc2dc\ubcf4\uae30",permalink:"/posts/attention-is-all-you-need"}},s={authorsImageUrls:[void 0]},p=[],c={toc:p},m="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(m,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/posts/cudabook-1"},(0,a.kt)("img",{alt:"a100",src:r(85465).Z,width:"992",height:"682"})),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("em",{parentName:"p"},"\uc774 \uae00\uc740 David B. Kirk\uc758 Programming Massively Parallel Processors\ub97c \uc77d\uace0 \uc791\uc131\ud588\uc2b5\ub2c8\ub2e4."),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("em",{parentName:"p"},"\uacfc\uac70\uc758 \ub0b4\uc6a9\uc774\uc5ec\uc11c \ub9de\uc9c0 \uc54a\ub294 \ubd80\ubd84\uc740 \uc784\uc758\ub85c \uc218\uc815\ud558\uc600\uc2b5\ub2c8\ub2e4")))}u.isMDXComponent=!0},85465:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/nvidia_a100-341d2137101485bc904e9aa47c1d6267.png"}}]);