"use strict";(self.webpackChunkjwher_blog=self.webpackChunkjwher_blog||[]).push([[2052],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(g,c(c({ref:t},p),{},{components:r})):n.createElement(g,c({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4822:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={authors:["jwher"],description:"Seven Concurrency Models in Seven Weeks - Chapter2 Day3",slug:"concurrency-models-4",tags:["tech","parallel computing","distributed computing","java"],title:"7\uac00\uc9c0 \ub3d9\uc2dc\uc131 \ubaa8\ub378(\uc2a4\ub808\ub4dc\uc640 \ub77d) \uac70\uc778\uc758 \uc5b4\uae68 \uc704\uc5d0\uc11c"},c=void 0,i={permalink:"/posts/concurrency-models-4",editUrl:"https://github.com/jwher/jwher.github.io/posts/2022-12-28-concurrency-models-4/index.md",source:"@site/posts/2022-12-28-concurrency-models-4/index.md",title:"7\uac00\uc9c0 \ub3d9\uc2dc\uc131 \ubaa8\ub378(\uc2a4\ub808\ub4dc\uc640 \ub77d) \uac70\uc778\uc758 \uc5b4\uae68 \uc704\uc5d0\uc11c",description:"Seven Concurrency Models in Seven Weeks - Chapter2 Day3",date:"2022-12-28T00:00:00.000Z",formattedDate:"December 28, 2022",tags:[{label:"tech",permalink:"/posts/tags/tech"},{label:"parallel computing",permalink:"/posts/tags/parallel-computing"},{label:"distributed computing",permalink:"/posts/tags/distributed-computing"},{label:"java",permalink:"/posts/tags/java"}],readingTime:29.555,hasTruncateMarker:!0,authors:[{name:"Jeongwon Her",title:"MLOps Engineer",url:"https://github.com/jwher",imageURL:"https://github.com/jwher.png",key:"jwher"}],frontMatter:{authors:["jwher"],description:"Seven Concurrency Models in Seven Weeks - Chapter2 Day3",slug:"concurrency-models-4",tags:["tech","parallel computing","distributed computing","java"],title:"7\uac00\uc9c0 \ub3d9\uc2dc\uc131 \ubaa8\ub378(\uc2a4\ub808\ub4dc\uc640 \ub77d) \uac70\uc778\uc758 \uc5b4\uae68 \uc704\uc5d0\uc11c"},prevItem:{title:"Attention \ub2e4\uc2dc\ubcf4\uae30",permalink:"/posts/attention-is-all-you-need"},nextItem:{title:"7\uac00\uc9c0 \ub3d9\uc2dc\uc131 \ubaa8\ub378(\uc2a4\ub808\ub4dc\uc640 \ub77d) \uace0\uc720 \ub77d \uac1c\uc120\ud558\uae30",permalink:"/posts/concurrency-models-3"}},l={authorsImageUrls:[void 0]},s=[],p={toc:s},u="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/posts/concurrency-models-4"},(0,o.kt)("img",{alt:"concurrency",src:r(85309).Z,width:"849",height:"1024"})),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("em",{parentName:"p"},"\uc774 \uae00\uc740 Paul Butcher\uc758 Seven Concurrency Models in Seven Weeks\uc744 \uc77d\uace0 \uc791\uc131\ud588\uc2b5\ub2c8\ub2e4"),"  "),(0,o.kt)("p",null,"Nanos gigantum humeris insidentes"))}m.isMDXComponent=!0},85309:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/giant-742f13317c6cb330164833f4e2d540cd.jpeg"}}]);