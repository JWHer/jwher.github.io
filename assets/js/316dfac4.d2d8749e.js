"use strict";(self.webpackChunkjwher_blog=self.webpackChunkjwher_blog||[]).push([[5291],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<l;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8010:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var r=n(7462),o=n(3366),l=(n(7294),n(3905)),a=["components"],i={authors:["jwher"],description:"Ensemble Methods",slug:"ensemble-methods",tags:["math","ml"],title:"Ensemble Methods"},s=void 0,u={permalink:"/posts/ensemble-methods",editUrl:"https://github.com/jwher/jwher.github.io/posts/2022-02-13-ensemble-methods/index.md",source:"@site/posts/2022-02-13-ensemble-methods/index.md",title:"Ensemble Methods",description:"Ensemble Methods",date:"2022-02-13T00:00:00.000Z",formattedDate:"February 13, 2022",tags:[{label:"math",permalink:"/posts/tags/math"},{label:"ml",permalink:"/posts/tags/ml"}],readingTime:.775,truncated:!0,authors:[{name:"Jeongwon Her",title:"MLOps Engineer",url:"https://github.com/jwher",imageURL:"https://github.com/jwher.png",key:"jwher"}],frontMatter:{authors:["jwher"],description:"Ensemble Methods",slug:"ensemble-methods",tags:["math","ml"],title:"Ensemble Methods"},prevItem:{title:"First post with docusaurus",permalink:"/posts/first-post-with-docusaurus"},nextItem:{title:"Uncertainty Estimation",permalink:"/posts/uncertainty-estimation"}},p={authorsImageUrls:[void 0]},c=[{value:"Deep Ensemble",id:"deep-ensemble",level:2},{value:"Monte Carlo Drop out",id:"monte-carlo-drop-out",level:2},{value:"Batch Ensemble",id:"batch-ensemble",level:2},{value:"Tips",id:"tips",level:2},{value:"Reference",id:"reference",level:3}],m={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Ensemble Methods")),(0,l.kt)("h1",{id:"\ubaa9\ucc28"},"\ubaa9\ucc28"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#deep-ensemble"},"Deep Ensemble")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#monte-carlo-drop-out"},"Monte Carlo Drop out")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#batch-ensemble"},"Batch Ensemble"))),(0,l.kt)("h2",{id:"deep-ensemble"},"Deep Ensemble"),(0,l.kt)("p",null,"\ub3d9\uc77c\ud55c \ubaa8\ub378\uc744 \uc5ec\ub7ff \ud559\uc2b5\n\uc7a5\uc810: \uc131\ub2a5\uc774 \uac70\uc758 \ubcf4\uc7a5\ub428\n\ub2e8\uc810: N\ubc30\uc758 \ud559\uc2b5, \ucd94\ub860 \ube44\uc6a9"),(0,l.kt)("h2",{id:"monte-carlo-drop-out"},"Monte Carlo Drop out"),(0,l.kt)("p",null,"test\uc2dc stochastic\ud55c drop out\uc744 \uc0ac\uc6a9\ud574 ensemble\n\uc7a5\uc810: 1\ubc88\uc758 \ud559\uc2b5\n\ub2e8\uc810: N\ubc30\uc758 \ucd94\ub860 \ube44\uc6a9"),(0,l.kt)("h2",{id:"batch-ensemble"},"Batch Ensemble"),(0,l.kt)("p",null,"ensemble member\uac04 \ub300\ubd80\ubd84\uc758 weights\ub97c \uacf5\uc720\ud569\ub2c8\ub2e4.\n\uc5ec\uae30\uc5d0 rank-1 matrix\ub85c independency\ub97c \uac15\ud654\ud569\ub2c8\ub2e4.\n\uc7a5\uc810: Monte carlo drop out \ubcf4\ub2e4 \uc88b\uc740 \uc131\ub2a5\n\ub2e8\uc810: N\ubc30\uc758 \ucd94\ub860 \ube44\uc6a9"),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"tips"},"Tips"),(0,l.kt)("h3",{id:"reference"},"Reference"),(0,l.kt)("p",null,"2021 MIPAL"))}d.isMDXComponent=!0}}]);