"use strict";(self.webpackChunkjwher_blog=self.webpackChunkjwher_blog||[]).push([[6824],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,g=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8645:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={authors:["jwher"],description:"Programming Massively Parallel Processors - Chapter 1",slug:"cudabook-1",tags:["tech"],title:"\ub300\uaddc\ubaa8 \ubcd1\ub82c\ud504\ub85c\uc138\uc11c \ud504\ub85c\uadf8\ub798\ubc0d(\uc18c\uac1c)"},c=void 0,l={permalink:"/posts/cudabook-1",editUrl:"https://github.com/jwher/jwher.github.io/posts/2023-02-09-programming-massively-parallel-processors/index.md",source:"@site/posts/2023-02-09-programming-massively-parallel-processors/index.md",title:"\ub300\uaddc\ubaa8 \ubcd1\ub82c\ud504\ub85c\uc138\uc11c \ud504\ub85c\uadf8\ub798\ubc0d(\uc18c\uac1c)",description:"Programming Massively Parallel Processors - Chapter 1",date:"2023-02-09T00:00:00.000Z",formattedDate:"February 9, 2023",tags:[{label:"tech",permalink:"/posts/tags/tech"}],readingTime:6.03,truncated:!0,authors:[{name:"Jeongwon Her",title:"MLOps Engineer",url:"https://github.com/jwher",imageURL:"https://github.com/jwher.png",key:"jwher"}],frontMatter:{authors:["jwher"],description:"Programming Massively Parallel Processors - Chapter 1",slug:"cudabook-1",tags:["tech"],title:"\ub300\uaddc\ubaa8 \ubcd1\ub82c\ud504\ub85c\uc138\uc11c \ud504\ub85c\uadf8\ub798\ubc0d(\uc18c\uac1c)"},prevItem:{title:"Pathways\ub97c \uc774\uc6a9\ud55c \uc5b8\uc5b4\ubaa8\ub378 \uc2a4\ucf00\uc77c\ub9c1",permalink:"/posts/palm"},nextItem:{title:"Attention \ub2e4\uc2dc\ubcf4\uae30",permalink:"/posts/attention-is-all-you-need"}},p={authorsImageUrls:[void 0]},u=[],m={toc:u};function f(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/posts/cudabook-1"},(0,a.kt)("img",{alt:"a100",src:r(5465).Z,width:"992",height:"682"})),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("em",{parentName:"p"},"\uc774 \uae00\uc740 David B. Kirk\uc758 Programming Massively Parallel Processors\ub97c \uc77d\uace0 \uc791\uc131\ud588\uc2b5\ub2c8\ub2e4."),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("em",{parentName:"p"},"\uacfc\uac70\uc758 \ub0b4\uc6a9\uc774\uc5ec\uc11c \ub9de\uc9c0 \uc54a\ub294 \ubd80\ubd84\uc740 \uc784\uc758\ub85c \uc218\uc815\ud558\uc600\uc2b5\ub2c8\ub2e4")))}f.isMDXComponent=!0},5465:function(e,t,r){t.Z=r.p+"assets/images/nvidia_a100-341d2137101485bc904e9aa47c1d6267.png"}}]);