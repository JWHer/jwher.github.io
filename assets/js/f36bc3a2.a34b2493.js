"use strict";(self.webpackChunkjwher_blog=self.webpackChunkjwher_blog||[]).push([[1341],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(h,l(l({ref:t},c),{},{components:r})):n.createElement(h,l({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},21723:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={authors:["jwher"],description:"Programming Massively Parallel Processors - Chapter 1",slug:"cudabook-1",tags:["tech","parallel computing"],title:"\ub300\uaddc\ubaa8 \ubcd1\ub82c\ud504\ub85c\uc138\uc11c \ud504\ub85c\uadf8\ub798\ubc0d(\uc18c\uac1c)"},l=void 0,i={permalink:"/posts/cudabook-1",editUrl:"https://github.com/jwher/jwher.github.io/posts/2023-02-09-programming-massively-parallel-processors/index.md",source:"@site/posts/2023-02-09-programming-massively-parallel-processors/index.md",title:"\ub300\uaddc\ubaa8 \ubcd1\ub82c\ud504\ub85c\uc138\uc11c \ud504\ub85c\uadf8\ub798\ubc0d(\uc18c\uac1c)",description:"Programming Massively Parallel Processors - Chapter 1",date:"2023-02-09T00:00:00.000Z",formattedDate:"February 9, 2023",tags:[{label:"tech",permalink:"/posts/tags/tech"},{label:"parallel computing",permalink:"/posts/tags/parallel-computing"}],readingTime:6.03,hasTruncateMarker:!0,authors:[{name:"Jeongwon Her",title:"MLOps Engineer",url:"https://github.com/jwher",imageURL:"https://github.com/jwher.png",key:"jwher"}],frontMatter:{authors:["jwher"],description:"Programming Massively Parallel Processors - Chapter 1",slug:"cudabook-1",tags:["tech","parallel computing"],title:"\ub300\uaddc\ubaa8 \ubcd1\ub82c\ud504\ub85c\uc138\uc11c \ud504\ub85c\uadf8\ub798\ubc0d(\uc18c\uac1c)"},prevItem:{title:"Pathways\ub97c \uc774\uc6a9\ud55c \uc5b8\uc5b4\ubaa8\ub378 \uc2a4\ucf00\uc77c\ub9c1",permalink:"/posts/palm"},nextItem:{title:"Attention \ub2e4\uc2dc\ubcf4\uae30",permalink:"/posts/attention-is-all-you-need"}},p={authorsImageUrls:[void 0]},s=[{value:"1.1 \uc774\uae30\uc885 \ubcd1\ub82c \ucef4\ud4e8\ud305",id:"11-\uc774\uae30\uc885-\ubcd1\ub82c-\ucef4\ud4e8\ud305",level:2},{value:"1.2 \ud604\ub300 GPU\uc758 \uc544\ud0a4\ud14d\ucc98",id:"12-\ud604\ub300-gpu\uc758-\uc544\ud0a4\ud14d\ucc98",level:2},{value:"1.3 \uc65c \ub354 \ube60\ub974\uac70\ub098 \ubcd1\ub82c\ud654\ub97c \ud574\uc57c\ud558\ub294\uac00?",id:"13-\uc65c-\ub354-\ube60\ub974\uac70\ub098-\ubcd1\ub82c\ud654\ub97c-\ud574\uc57c\ud558\ub294\uac00",level:2},{value:"1.4 \uc2e4\uc81c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uc18d\ub3c4 \ub192\uc774\uae30",id:"14-\uc2e4\uc81c-\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c-\uc18d\ub3c4-\ub192\uc774\uae30",level:2},{value:"1.5 \ubcd1\ub82c \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4\uc640 \ubaa8\ub378",id:"15-\ubcd1\ub82c-\ud504\ub85c\uadf8\ub798\ubc0d-\uc5b8\uc5b4\uc640-\ubaa8\ub378",level:2},{value:"References",id:"references",level:2},{value:"Software and the Concurrency Revolution",id:"software-and-the-concurrency-revolution",level:3}],c={toc:s},u="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/posts/cudabook-1"},(0,a.kt)("img",{alt:"a100",src:r(85465).Z,width:"992",height:"682"})),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("em",{parentName:"p"},"\uc774 \uae00\uc740 David B. Kirk\uc758 Programming Massively Parallel Processors\ub97c \uc77d\uace0 \uc791\uc131\ud588\uc2b5\ub2c8\ub2e4."),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("em",{parentName:"p"},"\uacfc\uac70\uc758 \ub0b4\uc6a9\uc774\uc5ec\uc11c \ub9de\uc9c0 \uc54a\ub294 \ubd80\ubd84\uc740 \uc784\uc758\ub85c \uc218\uc815\ud558\uc600\uc2b5\ub2c8\ub2e4"),"  "),(0,a.kt)("h1",{id:"1-\uc18c\uac1c"},"1. \uc18c\uac1c"),(0,a.kt)("p",null,"\ub9c8\uc774\ud06c\ub85c\ud504\ub85c\uc138\uc11c\ub294 \ud558\ub098\uc758 central processing unit(CPU), \uc778\ud154\uc774\ub098 AMD\uc758 \uac83\uc5d0 \uae30\ubc18\ud558\uace0\n\ube60\ub978 \uc131\ub2a5 \ud5a5\uc0c1\uacfc \uac12 \uac10\uc18c\ub97c 30\ub144\uac04 \uc774\ub04c\uc5c8\uc2b5\ub2c8\ub2e4.\n\uc774 \ub9c8\uc774\ud06c\ub85c\ud504\ub85c\uc138\uc11c\ub294 GFLOPS \ub610\ub294 \uae30\uac00(10^12) \ubd80\ub3d9\uc18c\uc218\uc810 \uc5f0\uc0b0\uc744 \ub370\uc2a4\ud06c\ud0d1\uc5d0\uc120 \ucd08\ub2f9 \uc218\ud589\ud558\uace0,\nTFLOPS \ub610\ub294 \ud14c\ub77c(10^15) \ubd80\ub3d9\uc18c\uc218\uc810 \uc5f0\uc0b0\uc744 \ud074\ub7ec\uc2a4\ud130 \uc11c\ubc84\uc5d0\uc11c \ucd08\ub2f9 \uc218\ud589\ud569\ub2c8\ub2e4.\n\uc774 \uc5c4\uaca9\ud55c \uc131\ub2a5 \ud5a5\uc0c1\uc740 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc18c\ud504\ud2b8\uc6e8\uc5b4\uac00 \ub354 \ub9ce\uc740 \uae30\ub2a5\uc744 \ud558\uace0,\n\ub354 \ub098\uc740 \uc0ac\uc6a9\uc790 \uacbd\ud5d8\uc744 \uc81c\uacf5\ud558\uba70, \ub354 \uc720\uc6a9\ud55c \uacb0\uacfc\ub97c \uc0dd\uc131\ud574 \ub0b4\uace0 \uc788\uc2b5\ub2c8\ub2e4.\n\uc0ac\uc6a9\uc790\ub294 \uc774\ub7f0 \uac1c\uc120\uc5d0 \uc775\uc219\ud55c \uc0c1\ud669\uc18d\uc5d0\uc11c \ub354 \ub098\uc740 \uac1c\uc120\uc744 \uc694\uad6c\ud558\uace0, \ucef4\ud4e8\ud130 \uc0b0\uc5c5\uacc4\uc5d0 \uae0d\uc815\uc801\uc778 \uc0ac\uc774\ud074\uc744 \ub9cc\ub4ed\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ud558\uc9c0\ub9cc \uc774 \ub3d9\uae30\ub294, 2003\ub144\ubd80\ud130 \uc5d0\ub108\uc9c0 \uc18c\ubaa8\uc640 \ubc29\uc5f4 \ubb38\uc81c\ub85c \ud074\ub7ed \uc8fc\uae30\uc5d0 \uc81c\ud55c\uc744 \uac78\uace0\n\ub2e8\uc77c cpu\uc5d0\uc11c \uac01 \ud074\ub77d\uc5d0 \uc218\ud589\ud560 \uc218 \uc788\ub294 \uc0dd\uc0b0\uc801\uc778 \uc218\uc900\uc744 \ub0ae\ucd94\uba74\uc11c \ub290\ub824\uc84c\uc2b5\ub2c8\ub2e4.\n\ub530\ub77c\uc11c \ubaa8\ub4e0 \ub9c8\uc774\ud06c\ub85c\ud504\ub85c\uc138\uc11c \ubca4\ub354\uac00 \ud504\ub85c\uc138\uc11c \ucf54\uc5b4\ub77c \ubd88\ub9ac\ub294 \uba40\ud2f0\ud504\ub85c\uc138\uc2f1 \uc720\ub2db\uc744 \uac00\uc9c4 \ubaa8\ub378\ub85c \uc804\ud658\ud558\uc600\uace0,\n\ucc98\ub9ac \ub2a5\ub825\uc744 \ub192\uc774\uae30 \uc704\ud574 \uac01 \uce69\uc5d0 \uc0ac\uc6a9\ub418\uc5c8\uc2b5\ub2c8\ub2e4.\n\uc774 \uc804\ud658\uc740 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uac1c\ubc1c\uc790 \ucee4\ubba4\ub2c8\ud2f0\uc5d0 \uc5c4\uccad\ub09c \uc601\ud5a5\uc744 \ubbf8\ucce4\uc2b5\ub2c8\ub2e4.\n",(0,a.kt)("a",{parentName:"p",href:"#software-and-the-concurrency-revolution"},"[Sutter2005]")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"No free cake")),(0,a.kt)("p",null,"\uc804\ud1b5\uc801\uc73c\ub85c, \ub300\ub2e4\uc218\uc758 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc751\uc6a9 \ud504\ub85c\uadf8\ub7a8\uc740 \ud3f0 \ub178\uc774\ub9cc\uc758 1945\ub144 \ubcf4\uace0\uc11c\uc5d0 \uc124\uba85\ud55c \uac83\ucc98\ub7fc \uc21c\ucc28\uc801 \ud504\ub85c\uadf8\ub7a8\uc73c\ub85c \uc791\uc131\ub418\uc5c8\uc2b5\ub2c8\ub2e4.\n\uc774\ub7ec\ud55c \ud504\ub85c\uadf8\ub7a8\uc758 \uc2e4\ud589\uc740 \uc0ac\ub78c\uc774 \uc21c\ucc28\uc801\uc73c\ub85c \ucf54\ub4dc \ub2e8\uacc4\ub97c \ub098\uc544\uac00\ub294 \uac83\uc73c\ub85c \uc774\ud574\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uc5ed\uc0ac\uc801\uc73c\ub85c, \ub300\ubd80\ubd84\uc758 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uac1c\ubc1c\uc790\ub294 \uc21c\ucc28\uc801 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uc18d\ub3c4\ub97c \ub192\uc774\uae30 \uc704\ud574\n\uc0c8\ub85c\uc6b4 \ud558\ub4dc\uc6e8\uc5b4 \ubc1c\uc804\uc5d0 \uc758\uc874\ud574 \uc654\uc2b5\ub2c8\ub2e4.\n\uc0c8\ub85c\uc6b4 \uc138\ub300\uc758 \ud504\ub85c\uc138\uc11c\uac00 \ub3c4\uc785\ub420 \ub54c\ub9c8\ub2e4 \uac19\uc740 \uc18c\ud504\ud2b8\uc6e8\uc5b4\ub294 \ub354 \ube68\ub9ac \uc2e4\ud589\ub42c\uc2b5\ub2c8\ub2e4.\n\ucef4\ud4e8\ud130 \uc0ac\uc6a9\uc790 \ub610\ud55c \uc0c8\ub85c\uc6b4 \uc138\ub300\uc758 \ub9c8\uc774\ud06c\ub85c\ud504\ub85c\uc138\uc11c\ub9c8\ub2e4 \ub354 \ube60\ub974\uac8c \uc2e4\ud589\ub418\ub294 \uae30\ub300\uc5d0 \uc775\uc219\ud574\uc84c\uc2b5\ub2c8\ub2e4.\n\uadf8\ub7ec\ud55c \uae30\ub300\ub294 \ub354\uc774\uc0c1 \uc720\ud6a8\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.\n\uc21c\ucc28\uc801 \ud504\ub85c\uadf8\ub7a8\uc740 \ud558\ub098\uc758 \ud504\ub85c\uc138\uc11c \ucf54\uc5b4\uc5d0\uc11c\ub9cc \uc791\ub3d9\ud558\uace0, \uc624\ub298\ub0a0 \uc0ac\uc6a9\uc911\uc778 \uac83\ubcf4\ub2e4 \ub354 \ube68\ub77c\uc9c0\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.\n\uc131\ub2a5 \uac1c\uc120\uc774 \uc5c6\ub2e4\uba74 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uac1c\ubc1c\uc790\ub4e4\uc740 \uc0c8\ub85c\uc6b4 \ub9c8\uc774\ud06c\ub85c\ud504\ub85c\uc138\uc11c\uac00 \ub3c4\uc785\ub420 \ub54c\ub9c8\ub2e4,\n\ub354\uc774\uc0c1 \uc0c8 \uae30\ub2a5\uacfc \ub2a5\ub825\uc744 \ub3c4\uc785\ud560 \uc218 \uc5c6\uc73c\uba70, \ucef4\ud4e8\ud130 \uc0b0\uc5c5\uc758 \uc131\uc7a5 \uae30\ud68c\ub97c \uc904\uc77c \uac83\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ub300\uc2e0\uc5d0, \uc0c8 \uc138\ub300\uc758 \ub9c8\uc774\ud06c\ub85c\ud504\ub85c\uc138\uc11c\ub9c8\ub2e4 \uc131\ub2a5 \ud5a5\uc0c1\uc744 \uafb8\uc900\ud788 \ub204\ub9b4\uc218 \uc788\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc18c\ud504\ud2b8\uc6e8\uc5b4\ub294,\n\ub2e4\uc911 \uc2a4\ub808\ub4dc\uac00 \uc791\uc5c5\uc744 \ub354 \ube68\ub9ac \ub05d\ub0b4\ub3c4\ub85d \ud611\uc5c5\ud558\ub294 \ubcd1\ub82c \ud504\ub85c\uadf8\ub7a8\uc774 \ub420 \uac83\uc785\ub2c8\ub2e4.\n\uc774 \uc0c8\ub86d\uace0 \uadf9\uc801\uc73c\ub85c \ud655\ub300\ub41c \ubcd1\ub82c \ud504\ub85c\uadf8\ub7a8 \uac1c\ubc1c\uc758 \uc778\uc13c\ud2f0\ube0c\ub294 \ub3d9\uc2dc\uc131 \ud601\uba85",(0,a.kt)("a",{parentName:"p",href:"#software-and-the-concurrency-revolution"},"[Sutter2005]"),"\uc774\ub77c\uace0 \ubd88\ub9bd\ub2c8\ub2e4.\n\ubcd1\ub82c \ud504\ub85c\uadf8\ub798\ubc0d\uc758 \uc2e4\uccb4\ub294 \uacb0\ucf54 \uc0c8\ub85c\uc6b4 \uac83\uc774 \uc544\ub2d9\ub2c8\ub2e4.\n\uace0\uc131\ub2a5 \ud504\ub85c\uadf8\ub798\ubc0d \ucee4\ubba4\ub2c8\ud2f0\ub294 \uc218\ub144\uac04 \ubcd1\ub82c\ud504\ub85c\uadf8\ub7a8\uc744 \uac1c\ubc1c\ud574 \uc654\uc2b5\ub2c8\ub2e4.\n\uc774 \ud504\ub85c\uadf8\ub7a8\uc740 \ub300\uaddc\ubaa8\uc758 \ube44\uc2fc \ucef4\ud4e8\ud130\uc5d0\uc11c \ub3d9\uc791\ud569\ub2c8\ub2e4.\n\ub2e8\uc9c0 \uba87\uac1c\uc758 \uc5d8\ub9ac\ud2b8 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\ub9cc \uc774 \ube44\uc2fc \ucef4\ud4e8\ud130\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uac8c \uc815\uc758\ub418\uc5c8\uace0,\n\ub530\ub77c\uc11c \uc801\uc740 \uc218\uc758 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uac1c\ubc1c\uc790\ub9cc \ubcd1\ub82c \ud504\ub85c\uadf8\ub798\ubc0d\uc744 \ud560 \uc218 \uc788\uac8c \uc81c\ud55c\ub418\uc5c8\uc2b5\ub2c8\ub2e4.\n\uc774\uc81c\ub294 \ubaa8\ub4e0 \uc0c8 \ub9c8\uc774\ud06c\ub85c\ud504\ub85c\uc138\uc11c\uac00 \ubcd1\ub82c \ucef4\ud4e8\ud130\uc784\uc73c\ub85c, \ubcd1\ub82c\uc801\uc73c\ub85c \uac1c\ubc1c\ub418\uc5b4\uc57c \ud558\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uae09\uaca9\ud788 \ub298\uc5c8\uc2b5\ub2c8\ub2e4.\n\uc774\uc81c\ub294 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uac1c\ubc1c\uc790\ub4e4\uc774 \ubcd1\ub82c \ud504\ub85c\uadf8\ub7a8\uc744 \uc5b4\ub5bb\uac8c \ud574\uc57c\ud560\uc9c0 \uac15\ud55c \ud544\uc694\uac00 \uc0dd\uacbc\uc2b5\ub2c8\ub2e4.\n\uc774 \ucc45\uc740 \uadf8 \ub0b4\uc6a9\uc5d0 \uc9d1\uc911\ud569\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"11-\uc774\uae30\uc885-\ubcd1\ub82c-\ucef4\ud4e8\ud305"},"1.1 \uc774\uae30\uc885 \ubcd1\ub82c \ucef4\ud4e8\ud305"),(0,a.kt)("h2",{id:"12-\ud604\ub300-gpu\uc758-\uc544\ud0a4\ud14d\ucc98"},"1.2 \ud604\ub300 GPU\uc758 \uc544\ud0a4\ud14d\ucc98"),(0,a.kt)("h2",{id:"13-\uc65c-\ub354-\ube60\ub974\uac70\ub098-\ubcd1\ub82c\ud654\ub97c-\ud574\uc57c\ud558\ub294\uac00"},"1.3 \uc65c \ub354 \ube60\ub974\uac70\ub098 \ubcd1\ub82c\ud654\ub97c \ud574\uc57c\ud558\ub294\uac00?"),(0,a.kt)("h2",{id:"14-\uc2e4\uc81c-\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c-\uc18d\ub3c4-\ub192\uc774\uae30"},"1.4 \uc2e4\uc81c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uc18d\ub3c4 \ub192\uc774\uae30"),(0,a.kt)("h2",{id:"15-\ubcd1\ub82c-\ud504\ub85c\uadf8\ub798\ubc0d-\uc5b8\uc5b4\uc640-\ubaa8\ub378"},"1.5 \ubcd1\ub82c \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4\uc640 \ubaa8\ub378"),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("h3",{id:"software-and-the-concurrency-revolution"},(0,a.kt)("a",{parentName:"h3",href:"https://dl.acm.org/doi/pdf/10.1145/1095408.1095421"},"Software and the Concurrency Revolution")))}m.isMDXComponent=!0},85465:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/nvidia_a100-341d2137101485bc904e9aa47c1d6267.png"}}]);