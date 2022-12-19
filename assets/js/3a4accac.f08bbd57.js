"use strict";(self.webpackChunkjwher_blog=self.webpackChunkjwher_blog||[]).push([[7532],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),m=s(r),d=o,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||c;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var s=2;s<c;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7134:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return p}});var n=r(7462),o=r(3366),c=(r(7294),r(3905)),i=["components"],a={authors:["jwher"],description:"Seven Concurrency Models in Seven Weeks 2",slug:"concurrency-models-2",tags:["tech","distributed computing","java"],title:"7\uac00\uc9c0 \ub3d9\uc2dc\uc131 \ubaa8\ub378 2(\uc2a4\ub808\ub4dc\uc640 \ub77d)"},u=void 0,s={permalink:"/posts/concurrency-models-2",editUrl:"https://github.com/jwher/jwher.github.io/posts/2022-12-14-concurrency-models-2/index.md",source:"@site/posts/2022-12-14-concurrency-models-2/index.md",title:"7\uac00\uc9c0 \ub3d9\uc2dc\uc131 \ubaa8\ub378 2(\uc2a4\ub808\ub4dc\uc640 \ub77d)",description:"Seven Concurrency Models in Seven Weeks 2",date:"2022-12-14T00:00:00.000Z",formattedDate:"December 14, 2022",tags:[{label:"tech",permalink:"/posts/tags/tech"},{label:"distributed computing",permalink:"/posts/tags/distributed-computing"},{label:"java",permalink:"/posts/tags/java"}],readingTime:18.2,truncated:!0,authors:[{name:"Jeongwon Her",title:"MLOps Engineer",url:"https://github.com/jwher",imageURL:"https://github.com/jwher.png",key:"jwher"}],frontMatter:{authors:["jwher"],description:"Seven Concurrency Models in Seven Weeks 2",slug:"concurrency-models-2",tags:["tech","distributed computing","java"],title:"7\uac00\uc9c0 \ub3d9\uc2dc\uc131 \ubaa8\ub378 2(\uc2a4\ub808\ub4dc\uc640 \ub77d)"},prevItem:{title:"7\uac00\uc9c0 \ub3d9\uc2dc\uc131 \ubaa8\ub378 3(\uac1c\uc120\ub41c \ub77d)",permalink:"/posts/concurrency-models-3"},nextItem:{title:"7\uac00\uc9c0 \ub3d9\uc2dc\uc131 \ubaa8\ub378 1(\uc18c\uac1c)",permalink:"/posts/concurrency-models-1"}},l={authorsImageUrls:[void 0]},p=[],m={toc:p};function d(e){var t=e.components,a=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"concurrency",src:r(5065).Z,width:"540",height:"360"}),(0,c.kt)("br",{parentName:"p"}),"\n",(0,c.kt)("em",{parentName:"p"},"\uc774 \uae00\uc740 Paul Butcher\uc758 Seven Concurrency Models in Seven Weeks\uc744 \uc77d\uace0 \uc791\uc131\ud588\uc2b5\ub2c8\ub2e4"),"  "),(0,c.kt)("p",null,"Threads-and-locks programming is like a Ford Model T"))}d.isMDXComponent=!0},5065:function(e,t,r){t.Z=r.p+"assets/images/ford-model-t-48420c1c3827d5d9e882499e160fc44f.jpeg"}}]);