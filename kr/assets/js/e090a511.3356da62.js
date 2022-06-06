"use strict";(self.webpackChunkjwher_blog=self.webpackChunkjwher_blog||[]).push([[8897],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=c(n),f=o,d=m["".concat(u,".").concat(f)]||m[f]||s[f]||l;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2638:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return s}});var r=n(7462),o=n(3366),l=(n(7294),n(3905)),i=["components"],a={authors:["jwher"],description:"\ucfe0\ubc84\ub124\ud2f0\uc2a4 \ub204\ud074\ub9ac\uc624\uc5d0 ML \ubaa8\ub378 \ubc30\ud3ec\ud558\uae30",slug:"deploying-ml-model-on-kubernetes-nuclio",tags:["tech","kubernetes","docker","nuclio"],title:"Deploying Ml Model On Kubernetes Nuclio"},u=void 0,c={permalink:"/kr/posts/deploying-ml-model-on-kubernetes-nuclio",editUrl:"https://github.com/jwher/jwher.github.io/posts/2021-06-23-deploying-ml-model-on-kubernetes-nuclio/index.md",source:"@site/posts/2021-06-23-deploying-ml-model-on-kubernetes-nuclio/index.md",title:"Deploying Ml Model On Kubernetes Nuclio",description:"\ucfe0\ubc84\ub124\ud2f0\uc2a4 \ub204\ud074\ub9ac\uc624\uc5d0 ML \ubaa8\ub378 \ubc30\ud3ec\ud558\uae30",date:"2021-06-23T00:00:00.000Z",formattedDate:"June 23, 2021",tags:[{label:"tech",permalink:"/kr/posts/tags/tech"},{label:"kubernetes",permalink:"/kr/posts/tags/kubernetes"},{label:"docker",permalink:"/kr/posts/tags/docker"},{label:"nuclio",permalink:"/kr/posts/tags/nuclio"}],readingTime:11.52,truncated:!0,authors:[{name:"Jeongwon Her",title:"MLOps Engineer",url:"https://github.com/jwher",imageURL:"https://github.com/jwher.png",key:"jwher"}],frontMatter:{authors:["jwher"],description:"\ucfe0\ubc84\ub124\ud2f0\uc2a4 \ub204\ud074\ub9ac\uc624\uc5d0 ML \ubaa8\ub378 \ubc30\ud3ec\ud558\uae30",slug:"deploying-ml-model-on-kubernetes-nuclio",tags:["tech","kubernetes","docker","nuclio"],title:"Deploying Ml Model On Kubernetes Nuclio"},prevItem:{title:"Uuid",permalink:"/kr/posts/uuid"},nextItem:{title:"Kubeflow Visualization 2",permalink:"/kr/posts/kubeflow-visualization-2"}},p={authorsImageUrls:[void 0]},s=[],m={toc:s};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/nuclio-superman.png",alt:"Alt",title:"nuclio superman"}),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("em",{parentName:"p"},"\ucfe0\ubc84\ub124\ud2f0\uc2a4 \ub204\ud074\ub9ac\uc624\uc5d0 ML \ubaa8\ub378 \ubc30\ud3ec\ud558\uae30"),"  "),(0,l.kt)("h1",{id:"\ubaa9\ucc28"},"\ubaa9\ucc28"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#nuctl"},"nuctl")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%EB%88%84%ED%81%B4%EB%A6%AC%EC%98%A4-%EC%84%A4%EC%B9%98"},"\ub204\ud074\ub9ac\uc624 \uc124\uce58")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%EB%AA%A8%EB%8D%B8-%EB%B0%B0%ED%8F%AC%ED%95%98%EA%B8%B0"},"\ubaa8\ub378 \ubc30\ud3ec\ud558\uae30"))))}f.isMDXComponent=!0}}]);