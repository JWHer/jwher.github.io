"use strict";(self.webpackChunkjwher_blog=self.webpackChunkjwher_blog||[]).push([[8330],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),k=i,h=u["".concat(s,".").concat(k)]||u[k]||m[k]||a;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},8254:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(87462),i=(r(67294),r(3905));const a={authors:["jwher"],description:"Istio: \uc11c\ube44\uc2a4 \uba54\uc2dc",slug:"istio",tags:["tech","kubernetes","docker","istio"],title:"Istio"},o=void 0,l={permalink:"/posts/istio",editUrl:"https://github.com/jwher/jwher.github.io/tree/main/posts/2021-08-20-istio/index.md",source:"@site/posts/2021-08-20-istio/index.md",title:"Istio",description:"Istio: \uc11c\ube44\uc2a4 \uba54\uc2dc",date:"2021-08-20T00:00:00.000Z",formattedDate:"August 20, 2021",tags:[{label:"tech",permalink:"/posts/tags/tech"},{label:"kubernetes",permalink:"/posts/tags/kubernetes"},{label:"docker",permalink:"/posts/tags/docker"},{label:"istio",permalink:"/posts/tags/istio"}],readingTime:5.005,hasTruncateMarker:!0,authors:[{name:"Jeongwon Her",title:"MLOps Engineer",url:"https://github.com/jwher",imageURL:"https://github.com/jwher.png",key:"jwher"}],frontMatter:{authors:["jwher"],description:"Istio: \uc11c\ube44\uc2a4 \uba54\uc2dc",slug:"istio",tags:["tech","kubernetes","docker","istio"],title:"Istio"},prevItem:{title:"Envoy",permalink:"/posts/envoy"},nextItem:{title:"Dex",permalink:"/posts/dex"}},s={authorsImageUrls:[void 0]},p=[{value:"\uc11c\ube44\uc2a4 \uba54\uc2dc",id:"\uc11c\ube44\uc2a4-\uba54\uc2dc",level:2},{value:"Istio",id:"istio",level:2},{value:"\uc791\ub3d9\uc6d0\ub9ac",id:"\uc791\ub3d9\uc6d0\ub9ac",level:3},{value:"Tips",id:"tips",level:2},{value:"Reference",id:"reference",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"istio",src:r(10432).Z,width:"160",height:"240"}),"\n",(0,i.kt)("em",{parentName:"p"},"Istio \uc11c\ube44\uc2a4 \uba54\uc2dc"),"  "),(0,i.kt)("h1",{id:"\ubaa9\ucc28"},"\ubaa9\ucc28"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#%EC%84%9C%EB%B9%84%EC%8A%A4-%EB%A9%94%EC%8B%9C"},"\uc11c\ube44\uc2a4 \uba54\uc2dc")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#istio"},"Istio")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#envoy"},"Envoy"))),(0,i.kt)("h2",{id:"\uc11c\ube44\uc2a4-\uba54\uc2dc"},"\uc11c\ube44\uc2a4 \uba54\uc2dc"),(0,i.kt)("p",null,"\ucd5c\uc2e0 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc740 \ubd84\uc0b0\ub41c ",(0,i.kt)("a",{parentName:"p",href:"https://microservices.io/"},"\ub9c8\uc774\ud06c\ub85c\uc11c\ube44\uc2a4")," \ubaa8\uc74c\uc73c\ub85c \uc124\uacc4\ub418\uace0,\n\uac01 \ub9c8\uc774\ud06c\ub85c\uc11c\ube44\uc2a4 \ubaa8\uc74c\uc740 \ub098\ub20c \uc218 \uc788\ub294(discrete) \ube44\uc988\ub2c8\uc2a4 \uae30\ub2a5\uc744 \uc218\ud589\ud569\ub2c8\ub2e4.(MSA)\n",(0,i.kt)("strong",{parentName:"p"},"\uc11c\ube44\uc2a4 \uba54\uc2dc"),"\ub294 MSA\ub97c \uad6c\ud604\ud558\ub294\ub370 \uc0ac\uc6a9\ud558\ub294 \uc18c\ud504\ud2b8\uc6e8\uc5b4\uc640 \uc774\ub97c \uc0dd\uc131\ud560 \ub54c \uc0ac\uc6a9\ud558\ub294 \ubcf4\uc548,\n\ub124\ud2b8\uc6cc\ud06c \ub3c4\uba54\uc778\uc744 \ubaa8\ub450 \ub9d0\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"\ucfe0\ubc84\ub124\ud2f0\uc2a4\uc640 \uac19\uc740 \ubd84\uc0b0 \uc2dc\uc2a4\ud15c\uc5d0\uc11c \uc2dc\uc2a4\ud15c \ud06c\uae30\uc640 \ubcf5\uc7a1\uc131\uc774 \uc99d\uac00\ud568\uc5d0 \ub530\ub77c \uad00\ub9ac\uac00 \uc5b4\ub824\uc6cc\uc9d1\ub2c8\ub2e4.\n\uad00\ub9ac\uac00 \ud544\uc694\ud55c \ub300\uc0c1\uc73c\ub85c \ud0d0\uc0c9(discovery), \ub85c\ub4dc\ubc38\ub7f0\uc2f1, \uc7ac\ud574\ubcf5\uad6c(failure recovery), \ubaa8\ub2c8\ud130\ub9c1\uc774 \ud3ec\ud568\ub429\ub2c8\ub2e4.\n\ub610\ud55c, \uc11c\ube44\uc2a4 \uba54\uc2dc\ub294 A/B \ud14c\uc2a4\ud2b8, \uce74\ub098\ub9ac\uc544(canary) \ubc30\ud3ec, \uc131\ub2a5 \uc81c\ud55c(rate limit), \uc554\ud638\ud654,\n\uc885\ub2e8(end to end) \uc778\uc99d \ubc29\ubc95\ub3c4 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,i.kt)("h2",{id:"istio"},"Istio"),(0,i.kt)("p",null,"Istio(\uc774\uc2a4\ud2f0\uc624)\ub294 \uc624\ud508 \uc18c\uc2a4 \uc11c\ube44\uc2a4 \uba54\uc2dc\uc785\ub2c8\ub2e4.  "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"/assets/img/istio/sail.jpeg"}),(0,i.kt)("br",null),"\uadf8\ub9ac\uc2a4\uc5b4\ub85c ",(0,i.kt)("a",{href:"https://istio.io/latest/about/faq/"},"\ud56d\ud574"),"\ub97c \ub73b\ud569\ub2c8\ub2e4")),(0,i.kt)("p",null,"\uc774\uc2a4\ud2f0\uc624\ub294 \uc11c\ube44\uc2a4 \ubcf4\ud638, \uc5f0\uacb0, \ubaa8\ub2c8\ud130\ub9c1\uc5d0 \uade0\uc77c\ud558\uace0 \ud6a8\uc728\uc801\uc778 \ubc29\ubc95\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.\n\uc774\uc2a4\ud2f0\uc624\ub294 \uc11c\ube44\uc2a4 \ucf54\ub4dc \ubcc0\uacbd\uc774 \uac70\uc758 \ub610\ub294 \uc804\ud600 \uc5c6\uc774 \ub85c\ub4dc\ubca8\ub7f0\uc2f1, \uc78a\ub2a5, \ubaa8\ub2c8\ud130\ub9c1 \uae30\ub2a5\uc744 \uc218\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\ucee8\ud2b8\ub864 \ud50c\ub808\uc778 \uc8fc\uc694 \uae30\ub2a5\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"TLS \uc554\ud638\ud654\ub97c \ud1b5\ud55c \uc11c\ube44\uc2a4 \ub300 \uc11c\ube44\uc2a4 \ud1b5\uc2e0"),(0,i.kt)("li",{parentName:"ul"},"HTTP, gRPC, WebSocket \ubc0f TCP \ud2b8\ub798\ud53d\uc5d0 \ub300\ud55c \uc790\ub3d9 \ub85c\ub4dc\ubc38\ub7f0\uc2f1"),(0,i.kt)("li",{parentName:"ul"},"\ub2e4\uc591\ud55c \ub77c\uc6b0\ud305 \uaddc\uce59, \uc7ac\uc2dc\ub3c4, \uc7a5\uc560\uadf9\ubcf5(failovers), \uacb0\ud568 \uc8fc\uc785 \ud14c\uc2a4\ud2b8(fault injection)\ub97c \ud1b5\ud55c \uc138\ubc00\ud55c(fine-grained) \uc81c\uc5b4"),(0,i.kt)("li",{parentName:"ul"},"\uc811\uadfc \uc81c\uc5b4, \uc131\ub2a5 \uc81c\ud55c\uacfc \ucffc\ud130\ub97c \uc9c0\uc6d0\ud558\ub294 \ud50c\ub7ec\uadf8\ud615 \uc815\ucc45 \ub808\uc774\uc5b4\uc640 Configuration API"),(0,i.kt)("li",{parentName:"ul"},"\uc790\ub3d9\ud654\ub41c \uba54\ud2b8\ub9ad, \ub85c\uadf8, \ud074\ub7ec\uc2a4\ud130 \uc1a1\uc218\uc2e0\uc744 \ud3ec\ud568\ud55c \ubaa8\ub4e0 \ub0b4\ubd80 \ud2b8\ub798\ud53d\uc758 \ucd94\uc801")),(0,i.kt)("p",null,"\uc774\uc2a4\ud2f0\uc624\ub294 \ud655\uc7a5\uc131\uc744 \uace0\ub824\ud574 \uc124\uacc4\ub418\uc5c8\uc73c\uba70 \ubc30\ud3ec\uc5d0 \ud544\uc694\ud55c \ub2e4\uc591\ud55c \uc694\uad6c\ub97c \ucc98\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\ud074\ub7ec\uc2a4\ud130\uc5d0 \ubc30\ud3ec\ub41c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uba54\uc2dc\uc5d0 \ucd94\uac00\ud558\uac70\ub098 \uba54\uc2dc\ub97c \ub2e4\ub978 \ud074\ub7ec\uc2a4\ud130\ub85c \ud655\uc7a5\ud558\uac70\ub098\n\ucfe0\ubc84\ub124\ud2f0\uc2a4 \uc678\ubd80\uc5d0\uc11c \uc2e4\ud589\ub418\ub294 VM \ub610\ub294 \uae30\ud0c0 \uc5d4\ub4dc\ud3ec\uc778\ud2b8\ub97c \uc5f0\uacb0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"\uc791\ub3d9\uc6d0\ub9ac"},"\uc791\ub3d9\uc6d0\ub9ac"),(0,i.kt)("p",null,"\uc774\uc2a4\ud2f0\uc624\ub294 \ub370\uc774\ud130 \ud50c\ub808\uc778\uacfc \ucee8\ud2b8\ub864 \ud50c\ub808\uc778 \ub450 \uc694\uc18c\ub85c \uc774\ub8e8\uc5b4\uc9d1\ub2c8\ub2e4."),(0,i.kt)("p",null,"\ub370\uc774\ud130 \ud50c\ub808\uc778\uc740 \ub450 \uc11c\ube44\uc2a4\uac04\uc758 \ud1b5\uc2e0(communication)\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4.\n\uc11c\ube44\uc2a4 \uba54\uc2dc \uc5c6\uc774 \ub124\ud2b8\uc6cc\ud06c\ub294 \ud2b8\ub798\ud53d\uc774 \ubcf4\ub0b4\uc84c\ub294\uc9c0, \uc5b4\ub5a4 \uc885\ub958\uc600\ub294\uc9c0, \ub204\uac00 \uc5b4\ub514\ub85c \ubcf4\ub0b4\ub294\uc9c0 \uc54c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n\uc11c\ube44\uc2a4 \uba54\uc2dc\ub294 \ubaa8\ub4e0 \ub124\ud2b8\uc6cc\ud06c \ud2b8\ub798\ud53d\uc744 \uac00\ub85c\ucc44\uae30 \uc704\ud574 \ud504\ub85d\uc2dc\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4.\n\uc774\uc2a4\ud2f0\uc624\ub294 \uac01 \uc11c\ube44\uc2a4\uc640 \ud568\uaed8 \ubc30\ud3ec\ub418\ub294 Envoy \ud504\ub85d\uc2dc\ub97c \uc0ac\uc6a9\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\ucee8\ud2b8\ub864 \ud50c\ub808\uc778\uc740 \uc6d0\ud558\ub294 \uad6c\uc131\uacfc \uc11c\ube44\uc2a4 \ubdf0, \ud504\ub85d\uc2dc \uc11c\ubc84\uc758 \ub3d9\uc801 \ud504\ub85c\uadf8\ub798\ubc0d, \ud658\uacbd \ubcc0\ud654\uc5d0 \ub530\ub978 \uaddc\uce59 \uc5c5\ub370\uc774\ud2b8\ub97c \uc218\ud589\ud569\ub2c8\ub2e4."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"/assets/img/istio/istio-plane.png"})),(0,i.kt)("details",{markdown:"1"},(0,i.kt)("summary",null,"TMI"),(0,i.kt)("p",null,"\uc2e4\uc81c\ub85c \ucfe0\ubc84\ub124\ud2f0\uc2a4 \ud30c\ub4dc\uc5d0 \uc790\ub3d9\uc73c\ub85c sidecar\uac00 inject \ub429\ub2c8\ub2e4.\n\uc774\ub97c \ubc29\uc9c0\ud558\uae30 \uc704\ud574\uc11c\ub294 \ub2e4\uc74c\uacfc \uac19\uc774 \uc124\uc815\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'annotations:\n  sidecar.istio.io/inject: "false"\n'))),(0,i.kt)("h2",{id:"tips"},"Tips"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://jwher.github.io/welcome-to-kubernetes"},"\ucfe0\ubc84\ub124\ud2f0\uc2a4"),", ",(0,i.kt)("a",{parentName:"p",href:"https://www.nomadproject.io/"},"\ub178\ub9c8\ub4dc"),", \ucf58\uc194(?)\uc5d0\uc11c \uc0ac\uc6a9\uac00\ub2a5 \ud569\ub2c8\ub2e4.\n\uc5ec\uae30\uc5d0\uc11c\ub294 \ucfe0\ubc84\ub124\ud2f0\uc2a4\ub85c \uac00\uc815\ud558\uace0 \uc124\uba85\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://jwher.github.io/envoy"},"Envoy proxy")),(0,i.kt)("h3",{id:"reference"},"Reference"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://istio.io/latest/about/service-mesh/"},"[\uacf5\uc2dd]service mesh"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://bcho.tistory.com/1293"},"[\uc870\ub300\ud611]Istio #1 - \ub9c8\uc774\ud06c\ub85c \uc11c\ube44\uc2a4\uc640 \uc11c\ube44\uc2a4 \ub9e4\uc26c"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=1iyFq2VaL5Y"},"[IBM]What is Istio?"),"  "))}m.isMDXComponent=!0},10432:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE2MCAyNDAiPjxnIGlkPSJsb2dvIiBmaWxsPSIjNDY2QkIwIj48cG9seWdvbiBpZD0iaHVsbCIgcG9pbnRzPSIwIDIxMCAxNjAgMjEwIDYwIDI0MCIvPjxwb2x5Z29uIGlkPSJtYWluc2FpbCIgcG9pbnRzPSIwIDIwMCA2MCAxOTAgNjAgODAiLz48cG9seWdvbiBpZD0iaGVhZHNhaWwiIHBvaW50cz0iNzAgMTkwIDE2MCAyMDAgNzAgMCIvPjwvZz48L3N2Zz4="}}]);