"use strict";(self.webpackChunkjwher_blog=self.webpackChunkjwher_blog||[]).push([[2670],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",N={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=i(r),d=s,m=u["".concat(l,".").concat(d)]||u[d]||N[d]||a;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:s,o[1]=c;for(var i=2;i<a;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},74447:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>N,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var n=r(87462),s=(r(67294),r(3905));const a={authors:["jwher"],description:"NGRX",slug:"ngrx",tags:["web","typescript"],title:"NGRX \ubc18\uc751\ud615 \uc6f9\uc744 \uc704\ud55c \uc0c1\ud0dc \uad00\ub9ac"},o=void 0,c={permalink:"/posts/ngrx",editUrl:"https://github.com/jwher/jwher.github.io/tree/main/posts/2022-08-17-ngrx/index.md",source:"@site/posts/2022-08-17-ngrx/index.md",title:"NGRX \ubc18\uc751\ud615 \uc6f9\uc744 \uc704\ud55c \uc0c1\ud0dc \uad00\ub9ac",description:"NGRX",date:"2022-08-17T00:00:00.000Z",formattedDate:"August 17, 2022",tags:[{label:"web",permalink:"/posts/tags/web"},{label:"typescript",permalink:"/posts/tags/typescript"}],readingTime:13.675,hasTruncateMarker:!0,authors:[{name:"Jeongwon Her",title:"MLOps Engineer",url:"https://github.com/jwher",imageURL:"https://github.com/jwher.png",key:"jwher"}],frontMatter:{authors:["jwher"],description:"NGRX",slug:"ngrx",tags:["web","typescript"],title:"NGRX \ubc18\uc751\ud615 \uc6f9\uc744 \uc704\ud55c \uc0c1\ud0dc \uad00\ub9ac"},prevItem:{title:"\ud559\uc2b5\uc5d0 \uc911\uc694\ud55c \ub370\uc774\ud130 \ucc3e\uae30",permalink:"/posts/deep-learning-on-a-data-diet"},nextItem:{title:"\ub2e4\uc591\ud55c \uae09\uc218",permalink:"/posts/power-series"}},l={authorsImageUrls:[void 0]},i=[{value:"ngrx",id:"ngrx",level:2},{value:"TL;DR",id:"tldr",level:3},{value:"\uad6c\ud604",id:"\uad6c\ud604",level:2},{value:"Store",id:"store",level:2},{value:"Model",id:"model",level:3},{value:"Actions",id:"actions",level:3},{value:"Reducers",id:"reducers",level:3},{value:"Selectors",id:"selectors",level:3},{value:"Store Devtools",id:"store-devtools",level:3},{value:"Effects",id:"effects",level:2},{value:"References",id:"references",level:2}],p={toc:i},u="wrapper";function N(e){let{components:t,...a}=e;return(0,s.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/posts/ngrx"},(0,s.kt)("img",{alt:"ngrx",src:r(44752).Z,width:"1000",height:"1000"})),(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("em",{parentName:"p"},"NGRX \ubc18\uc751\ud615 \uc6f9\uc744 \uc704\ud55c \uc0c1\ud0dc \uad00\ub9ac")),(0,s.kt)("h2",{id:"ngrx"},"ngrx"),(0,s.kt)("p",null,"ngrx\ub294 \uc575\uade4\ub7ec\ub97c \uc704\ud55c \ubc18\uc751\ud615 \uc6f9\uc744 \ub9cc\ub4e4\uae30 \uc704\ud55c \ud504\ub808\uc784\uc6cc\ud06c\uc785\ub2c8\ub2e4.\n\uc0c1\ud0dc(state) \uad00\ub9ac, \uc0ac\uc774\ub4dc \uc774\ud399\ud2b8\uc758 \uaca9\ub9ac(isolation), \uc5d4\ud2f0\ud2f0 \ucf5c\ub809\uc158 \uad00\ub9ac, \ub77c\uc6b0\ud130 \ubc14\uc778\ub529, \ucf54\ub4dc \uc0dd\uc131,\n\uac1c\ubc1c\uc790 \ub3c4\uad6c \uc9c0\uc6d0\uc744 \ud1b5\ud574 \ub9ce\uc740 \ub2e4\ub978 \ud0c0\uc785\uc758 \uc571\uc744 \ub9cc\ub4e4\ub54c \uac1c\ubc1c\uc790 \uacbd\ud5d8\uc744 \ud5a5\uc0c1\uc2dc\ud0b5\ub2c8\ub2e4."),(0,s.kt)("p",null,"\ud575\uc2ec \uc6d0\uce59\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\uc0c1\ud0dc\ub294 \ud558\ub098\uc758 \ubd88\ubcc0\ud558\ub294(immutable) \ub370\uc774\ud130 \uad6c\uc870\uc785\ub2c8\ub2e4"),(0,s.kt)("li",{parentName:"ul"},"\ucef4\ud3ec\ub10c\ud2b8\ub294 \uaca9\ub9ac\ub418\uc5b4 \ucc98\ub9ac\ub418\ub294 \uc0ac\uc774\ub4dc \uc774\ud399\ud2b8\uc5d0 \ucc45\uc784\uc744 \uc704\uc784(delegate)\ud569\ub2c8\ub2e4"),(0,s.kt)("li",{parentName:"ul"},"\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc0ac\uc6a9\ud574 \ud0c0\uc785 \uc548\uc815\uc131\uc744 \ucd94\uad6c\ud569\ub2c8\ub2e4"),(0,s.kt)("li",{parentName:"ul"},"\uc561\uc158(actions)\uacfc \uc0c1\ud0dc(state)\ub294 \uc9c1\ub82c\ud654(serializable) \uac00\ub2a5\ud574 \uc0c1\ud0dc\ub97c \uc800\uc7a5\ud558\uace0, \uc555\ucd95 \ud574\uc81c(rehydrated), \uc7ac\ud604\uac00\ub2a5\ud558\uac8c \ub9cc\ub4ed\ub2c8\ub2e4"),(0,s.kt)("li",{parentName:"ul"},"\ubc18\uc751\ud615 \uc6f9\uc744 \ub9cc\ub4e4\uae30 \uc704\ud55c \ud568\uc218\ud615 \ud504\ub85c\uadf8\ub798\ubc0d\uc744 \ucd94\uad6c\ud569\ub2c8\ub2e4"),(0,s.kt)("li",{parentName:"ul"},"\uae30\ub2a5(functionality) \uac80\uc99d\uc744 \uc704\ud574 \uac04\ub2e8\ud55c \ud14c\uc2a4\ud305 \uc804\ub7b5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4")),(0,s.kt)("p",null,"\ud3ec\ud568\ub41c \ud328\ud0a4\uc9c0\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4"),(0,s.kt)("p",null,"\uc0c1\ud0dc(State)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#store"},"\uc2a4\ud1a0\uc5b4(Store)"),": RxJS\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \uc575\uade4\ub7ec \uc571\uc744 \uc704\ud55c \uc0c1\ud0dc \uad00\ub9ac \ubc29\ubc95\uc785\ub2c8\ub2e4. Redux\uc5d0\uc11c \uc601\uac10\uc744 \uc5bb\uc5c8\uc2b5\ub2c8\ub2e4",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#actions"},"\uc561\uc158(Actions)"),"\uc740 \ucef4\ud3ec\ub10c\ud2b8\uc640 \uc11c\ube44\uc2a4\uc5d0\uc11c \uc804\ub2ec(dispathed)\ub418\ub294 \uace0\uc720\ud55c \uc774\ubca4\ud2b8\uc785\ub2c8\ub2e4"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#reducers"},"\ub9ac\ub4c0\uc11c(Reducers)"),"\ub294 \ud604\uc7ac \uc0c1\ud0dc\uc640 \uac00\uc7a5 \ub9c8\uc9c0\ub9c9\uc5d0 \uc218\ud589\ub41c \uc561\uc158\uc73c\ub85c \uc0c8\ub85c\uc6b4 \uc0c1\ud0dc\ub97c \uacc4\uc0b0\ud558\ub294 \uc21c\uc218 \ud568\uc218\uc785\ub2c8\ub2e4"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#selectors"},"\uc140\ub809\ud130(Selectors)"),"\ub294 \uc0c1\ud0dc\uc758 \uc77c\ubd80\ub97c \uc120\ud0dd\ud558\uace0(select), \ud30c\uc0dd\ud558\uace0(derive), \uc870\ud569\ud558\ub294(compose) \uc21c\uc218 \ud568\uc218\uc785\ub2c8\ub2e4"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#effects"},"\uc774\ud399\ud2b8(Effects)"),": \uc2a4\ud1a0\uc5b4\ub97c \uc704\ud55c \uc0ac\uc774\ub4dc \uc774\ud399\ud2b8 \ubaa8\ub378\uc785\ub2c8\ub2e4"),(0,s.kt)("li",{parentName:"ul"},"\ub77c\uc6b0\ud130 \uc2a4\ud1a0\uc5b4: \uc575\uade4\ub7ec \ub77c\uc6b0\ud130\uc640 \uc2a4\ud1a0\uc5b4\uac04 \ubc14\uc778\ub529\uc785\ub2c8\ub2e4"),(0,s.kt)("li",{parentName:"ul"},"\uc5d4\ud2f0\ud2f0(Entity): \uae30\ub85d\ub41c \ucf5c\ub809\uc158\uc744 \uad00\ub9ac\ud558\uae30 \uc704\ud55c \uc5d4\ud2f0\ud2f0 \uc0c1\ud0dc\uc785\ub2c8\ub2e4"),(0,s.kt)("li",{parentName:"ul"},"ComponentStore: local/component \uc0c1\ud0dc\ub97c \uad00\ub9ac\ud558\uae30 \uc704\ud55c \ub3c5\ub9bd \ub77c\uc774\ube0c\ub7ec\ub9ac \uc785\ub2c8\ub2e4.")),(0,s.kt)("p",null,"\ub370\uc774\ud130"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Data: \uc5d4\ud2f0\ud2f0 \ub370\uc774\ud130 \uad00\ub9ac\ub97c \uc704\ud574 \uac04\uc18c\ud654\ub41c \ud655\uc7a5\uc785\ub2c8\ub2e4.")),(0,s.kt)("p",null,"\uac1c\ubc1c\uc790 \ub3c4\uad6c  "),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#store-devtools"},"Store Devtools")),(0,s.kt)("li",{parentName:"ul"},"Schematics: \uc575\uade4\ub7ec\uc5d0\uc11c NgRx \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0ac\uc6a9\ud558\uae30 \uc704\ud55c \ube44\uacc4(Scaffolding)\uc785\ub2c8\ub2e4"),(0,s.kt)("li",{parentName:"ul"},"ESLint Plugin")),(0,s.kt)("h3",{id:"tldr"},"TL;DR"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"ngrx-state-management-lifecycle",src:r(92363).Z,width:"1920",height:"1080"}),(0,s.kt)("br",{parentName:"p"}),"\n","NgRx\ub294 \ubc18\uc751\ud615 \uc6f9\uc744 \uc704\ud574\uc11c Redux\uc5d0\uc11c \uc601\uac10\uc744 \ubc1b\uc740 ",(0,s.kt)("strong",{parentName:"p"},"\uc2a4\ud1a0\uc5b4(Store)"),"\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4.",(0,s.kt)("br",{parentName:"p"}),"\n","\ud06c\uac8c ",(0,s.kt)("strong",{parentName:"p"},"\uc561\uc158(Action)"),", ",(0,s.kt)("strong",{parentName:"p"},"\ub9ac\ub4c0\uc11c(Reducer)"),", ",(0,s.kt)("strong",{parentName:"p"},"\uc140\ub809\ud130(Selector)")," \ud750\ub984\uc73c\ub85c \uc774\ub8e8\uc5b4\uc9c4 \uc2a4\ud1a0\uc5b4\uc640,\n\uc2a4\ud1a0\uc5b4\uc640 \uc678\ubd80 \uc0c1\ud638 \uc791\uc6a9\uc744 \ud558\ub294(API \ud638\ucd9c \ub4f1) ",(0,s.kt)("strong",{parentName:"p"},"\uc774\ud399\ud2b8(Effects)"),"\ub85c \uc774\ub8e8\uc5b4\uc9d1\ub2c8\ub2e4."),(0,s.kt)("p",null,"\uc774\ud399\ud2b8\uc5d0 \ucc45\uc784\uc744 \uc704\uc784\ud558\ub294 \uaca9\ub9ac\ub41c \uad6c\uc870\ub85c \uac04\ub2e8\ud55c \uc0c1\ud0dc \uad00\ub9ac\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,s.kt)("h2",{id:"\uad6c\ud604"},"\uad6c\ud604"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"\uc5ec\uae30\uc5d0\uc11c\ub294 \ud070 \uaddc\ubaa8\uc5d0 \uc801\ud569\ud55c \uacc4\uce35\uc801\uc73c\ub85c \uad6c\uc870\ud654\ub41c \uc2a4\ud1a0\uc5b4\ub97c \uc124\uba85\ud569\ub2c8\ub2e4."),"\n",(0,s.kt)("em",{parentName:"p"},"\uacf5\uc2dd ",(0,s.kt)("a",{parentName:"em",href:"https://ngrx.io/guide/store/walkthrough"},"\uac00\uc774\ub4dc"),"\ub97c \ub530\ub77c\ud574 \ubcf4\ub294\uac83\ub3c4 \uc88b\uc2b5\ub2c8\ub2e4")),(0,s.kt)("p",null,"\uc124\uba85\ub9cc\uc73c\ub85c\ub294 \uc9c1\uad00\uc801\uc73c\ub85c \uc774\ud574\uac00 \uc548\ub418\ub2c8, \uc9c1\uc811 \ud574 \ubd05\uc2dc\ub2e4.\n\ub300\ud45c\uc801\uc73c\ub85c \ub2e4\uc74c\uacfc \uac19\uc740 \ud3f4\ub354 \uad6c\uc870\ub97c \uac00\uc9d1\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"src\n\u2514app\n  \u251ccomponents\n  \u251cservice\n  \u2514store\n    \u2514<name>\n      \u251c<name>.actions.ts\n      \u251c<name>.effects.ts\n      \u251c<name>.model.ts\n      \u251c<name>.reducer.ts\n      \u251c<name>.selector.ts\n      \u251c<name>.store.module.ts\n      \u2514index.ts\n    index.ts\n    root-store.module.ts\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"components\ub294 \uc0ac\uc6a9\uc790\uc5d0\uac8c \ubcf4\uc5ec\uc9c8 \ud398\uc774\uc9c0 \ubaa8\uc74c\uc785\ub2c8\ub2e4"),(0,s.kt)("li",{parentName:"ul"},"service\ub294 \uc2e4\uc81c api endpoint\ub97c \ud638\ucd9c\ud558\ub294 \ucf54\ub4dc\uc785\ub2c8\ub2e4"),(0,s.kt)("li",{parentName:"ul"},"store\ub294 ngrx \uc2a4\ud1a0\uc5b4 \ubaa8\uc74c\uc785\ub2c8\ub2e4"),(0,s.kt)("li",{parentName:"ul"},"model\uc740 ngrx\uc5d0 \uc5c6\uc9c0\ub9cc store\uc758 type\uc744 \uc9c0\uc815\ud558\uae30 \uc704\ud574 \ucd94\uac00\ud55c \uc778\ud130\ud398\uc774\uc2a4\uc785\ub2c8\ub2e4")),(0,s.kt)("br",null),(0,s.kt)("details",null,(0,s.kt)("summary",null,"\ucde8\ud5a5\uc5d0 \ub530\ub77c"),(0,s.kt)("p",null,"\uaddc\ubaa8\uac00 \uc791\uc740 \uc571\uc5d0\uc11c\ub294 \ub2e4\uc74c \uad6c\uc870\ub97c \uac00\uc9c0\uae30\ub3c4 \ud569\ub2c8\ub2e4.",(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/38560992"},"What is the best structure for app using ngrx?")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"src\n\u2514app\n  \u251ccomponents\n  \u251cservice\n  \u2514store\n    \u251cactions\n    \u251ceffects\n    \u251cmodels\n    \u251creducers\n    \u2514selectors\n    index.ts\n"))),(0,s.kt)("p",null,"\uc5ec\uae30\uc5d0\uc11c\ub294 \uc0c1\ub2e8\uc5d0 \uae30\uc220\ub41c \uad6c\uc870\ub85c \uc791\uc131\ud569\ub2c8\ub2e4."),(0,s.kt)("h2",{id:"store"},"Store"),(0,s.kt)("p",null,"\uc9c1\uc811 \uc2a4\ud1a0\uc5b4\ub97c \uc0dd\uc131\ud574 \ubcfc\uae4c\uc694?  "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"export name='storeName'\n\n# store.module\nng g m store/${name}/${name}.store --flat\n# actions\nng g @ngrx/schematics:action store/${name}/${name} --defaults  \n# effects\nng g @ngrx/schematics:effect store/${name}/${name} --skip-tests --module store/${name}/${name}.store.module.ts --defaults  \n# reducer\nng g @ngrx/schematics:reducer store/${name}/${name} --skip-tests --defaults  \n# selector\nng g @ngrx/schematics:selector store/${name}/${name} --skip-tests  \n\n# model\uc740 \uc9c1\uc811 \uc0dd\uc131\ud569\ub2c8\ub2e4\n")),(0,s.kt)("p",null,"\uc5ec\uae30\uc5d0\uc11c\ub294 ",(0,s.kt)("inlineCode",{parentName:"p"},"name=user")," \ub85c user \uc815\ubcf4\uc5d0 \ub300\ud55c \uc2a4\ud1a0\uc5b4\ub97c \ub9cc\ub4e4\uc5b4 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4.  "),(0,s.kt)("h3",{id:"model"},"Model"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"src/app/store/user/user.model.ts")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"export interface UserCreate {\n    name: string;\n    user_id: string;\n    user_pw: string;\n}\n\nexport interface UserUpdate {\n    name: string;\n    user_id: string;\n    user_pw: string;\n}\n\nexport interface User {\n    id: string;\n    name: string;\n    user_id: string;\n    user_pw: string;\n    updated: Date;\n    created: Date;\n}\n")),(0,s.kt)("p",null,"\uac01\uac01 ",(0,s.kt)("inlineCode",{parentName:"p"},"post")," ",(0,s.kt)("inlineCode",{parentName:"p"},"put")," ",(0,s.kt)("inlineCode",{parentName:"p"},"read"),"\uc5d0 \ud544\uc694\ud55c \uc778\ud130\ud398\uc774\uc2a4\ub97c \ub9cc\ub4e4\uc5c8\uc2b5\ub2c8\ub2e4.\n(",(0,s.kt)("inlineCode",{parentName:"p"},"delete"),"\ub294 \ub530\ub85c \ub9cc\ub4e4\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4.)"),(0,s.kt)("h3",{id:"actions"},"Actions"),(0,s.kt)("p",null,"\uc561\uc158\uc740 \uc2a4\ud1a0\uc5b4\uc5d0 \uc791\uc6a9\ud560 \uc218 \uc788\ub294 \uace0\uc720\ud55c \uc774\ubca4\ud2b8\uc785\ub2c8\ub2e4.  "),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"src/app/store/user/user.actions.ts")," \uc77c\ubd80"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import { createAction, props } from '@ngrx/store';\nimport { Update } from '@ngrx/entity';\nimport { User, UserCreate, UserUpdate } from './user.model'\n\nexport const loadUser = createAction(\n    '[User/API] Load User',\n    props<{ id: string }>()\n);\nexport const loadUserSuccess = createAction(\n    '[User/API] Load User Success',\n    props<{ user: User }>()\n);\nexport const loadUserFailure = createAction(\n    '[User/API] Load User Failure'\n);\n\n... \ud6c4\ub7b5 ...\n")),(0,s.kt)("p",null,"user\ub97c \ubd88\ub7ec\uc624\ub294 \uc561\uc158 ",(0,s.kt)("inlineCode",{parentName:"p"},"loadUser"),"\ub97c \ub9cc\ub4ed\ub2c8\ub2e4.  "),(0,s.kt)("p",null,"\uc0ac\uc774\ub4dc \uc774\ud399\ud2b8 \ucc98\ub9ac\ub97c \uc704\ud55c success, failure \uc561\uc158\ub3c4 \ub9cc\ub4e4\uc5b4 \uc90d\uc2dc\ub2e4."),(0,s.kt)("details",null,(0,s.kt)("summary",null,"\uc804\uccb4 \ucf54\ub4dc"),(0,s.kt)("p",null,"CRUD\uc5d0 \ub300\uc751\ud558\ub294 \uc561\uc158\uc744 \uc804\ubd80 \ub9cc\ub4e4\uc5b4 \uc90d\uc2dc\ub2e4.  "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import { createAction, props } from '@ngrx/store';\nimport { Update } from '@ngrx/entity';\nimport { User, UserCreate, UserUpdate } from './user.model'\n\nexport const loadUser = createAction(\n    '[User/API] Load User',\n    props<{ id: string }>()\n);\nexport const loadUserSuccess = createAction(\n    '[User/API] Load User Success',\n    props<{ user: User }>()\n);\nexport const loadUserFailure = createAction(\n    '[User/API] Load User Failure'\n);\n\nexport const createUser = createAction(\n    '[User/API] Create User',\n    props<{ create: UserCreate }>()\n);\nexport const createUserSuccess = createAction(\n    '[User/API] Create User Success',\n    props<{ user: User }>()\n);\nexport const createUserFailure = createAction(\n    '[User/API] Create User Failure'\n);\n\nexport const updateUser = createAction(\n    '[User/API] Update User',\n    props<{ id: string; update: UserUpdate }>()\n);\nexport const updateUserSuccess = createAction(\n    '[User/API] Update User Success',\n    props<{ user: Update<User> }>()\n);\nexport const updateUserFailure = createAction(\n    '[User/API] Update User Failure'\n);\n\nexport const deleteUser = createAction(\n    '[User/API] Delete User',\n    props<{ id: string }>()\n);\nexport const deleteUserSuccess = createAction(\n    '[User/API] Delete User Success',\n    props<{ user: User }>()\n);\nexport const deleteUserFailure = createAction(\n    '[User/API] Delete User Failure'\n);\n"))),(0,s.kt)("br",null),(0,s.kt)("h3",{id:"reducers"},"Reducers"),(0,s.kt)("p",null,"\ud604\uc7ac \uc0c1\ud0dc\uc640 \ub9c8\uc9c0\ub9c9\uc5d0 \uc2e4\ud589\ub41c \uc561\uc158\uc73c\ub85c \uc0c8\ub85c\uc6b4 \uc0c1\ud0dc\ub97c \ub9cc\ub4e4\uc5b4 \uc90d\ub2c8\ub2e4."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"src/app/store/user/user.reducer.ts")," import \ubd80\ubd84  "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';\nimport { Action, createReducer, on } from '@ngrx/store';\nimport * as UserActions from './user.actions';\nimport { User } from './user.model';\n")),(0,s.kt)("p",null,"user.actions.ts\uc640 user.model.ts\ub97c \uac00\uc838\uc635\ub2c8\ub2e4."),(0,s.kt)("br",null),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"src/app/store/user/user.reducer.ts")," adapter \ubd80\ubd84  "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"export const userFeatureKey = 'user';\n\nexport interface State extends EntityState<User> {\n\n}\n\nexport const adapter: EntityAdapter<User> = createEntityAdapter<User>();\n\nexport const initialState: State = adapter.getInitialState({\n\n});\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"User")," \uc778\ud130\ud398\uc774\uc2a4\uc5d0 EntityState\ub97c \ub9cc\ub4e4\uace0, \ucd94\uac00\uc801\uc73c\ub85c \ud544\uc694\ud55c \uc5d4\ud2f0\ud2f0\ub97c \uc791\uc131\ud560 \uc218 \uc788\ub294 \uc0c1\ud0dc(State)\ub97c \ub9cc\ub4e4\uc5b4 \uc90d\ub2c8\ub2e4.\n\uc774 \uc5d4\ud2f0\ud2f0 \uc0c1\ud0dc\ub97c \ubcc0\uacbd\ud560 \uc218 \uc788\ub294 ",(0,s.kt)("inlineCode",{parentName:"p"},"User"),"\uc5d0 \ub300\ud55c EntityAdapter\ub97c \ub9cc\ub4e4\uace0,\n\ucd08\uae30 \uc0c1\ud0dc\ub97c \uac00\uc838\uc635\ub2c8\ub2e4."),(0,s.kt)("br",null),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"src/app/store/user/user.reducer.ts")," reducer \ubd80\ubd84  "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"export const reducer = createReducer(\n    initialState,\n    on(UserActions.loadUserSuccess, (state, action) =>\n        adapter.setOne(action.user, state)\n    ),\n    on(UserActions.createUserSuccess, (state, action) =>\n        adapter.addOne(action.user, state)\n    ),\n    on(UserActions.updateUserSuccess, (state, action) =>\n        adapter.updateOne(action.user, state)\n    ),\n    on(UserActions.deleteUserSuccess, (state, action) =>\n        adapter.removeOne(action.user.id, state)\n    )\n);\n")),(0,s.kt)("p",null,"\ub9ac\ub4c0\uc11c\ub294 initialState\uc640 action \ubc1c\uc0dd\uc2dc \uc218\ud589\ud560 \uc791\uc5c5\uc744 \uae30\uc220\ud569\ub2c8\ub2e4.\n\uc55e\uc5d0\uc11c \uc791\uc131\ud55c \uc561\uc158 \uc911 \uc131\uacf5\ud588\uc744\ub54c\ub9cc \uc0c1\ud0dc\ub97c \ubc14\uafc0 \uac83\uc774\uae30 \ub54c\ubb38\uc5d0 \ub2e4\uc74c\uacfc \uac19\uc774 \uc791\uc131\ud574\uc90d\ub2c8\ub2e4."),(0,s.kt)("br",null),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"src/app/store/user/user.reducer.ts")," getSelectors \ubd80\ubd84  "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"export const { selectIds, selectEntities, selectAll, selectTotal }\n    = adapter.getSelectors();\n")),(0,s.kt)("p",null,"\uc140\ub809\ud130\uc5d0\uc11c \uc0c1\ud0dc\ub97c \uc811\uadfc\ud560 \uc218 \uc788\uac8c export \ud574 \uc90d\ub2c8\ub2e4."),(0,s.kt)("br",null),(0,s.kt)("details",null,(0,s.kt)("summary",null,"\uc804\uccb4 \ucf54\ub4dc"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';\nimport { Action, createReducer, on } from '@ngrx/store';\nimport * as UserActions from './user.actions';\nimport { User } from './user.model';\n\n\nexport const userFeatureKey = 'user';\n\nexport interface State extends EntityState<User> {\n\n}\n\nexport const adapter: EntityAdapter<User> = createEntityAdapter<User>();\n\nexport const initialState: State = adapter.getInitialState({\n\n});\n\nexport const reducer = createReducer(\n    initialState,\n    on(UserActions.loadUsersSuccess, (state, action) =>\n        adapter.setAll(action.users, state)\n    ),\n\n    on(UserActions.loadUserSuccess, (state, action) =>\n        adapter.setOne(action.user, state)\n    ),\n\n    on(UserActions.createUserSuccess, (state, action) =>\n        adapter.addOne(action.user, state)\n    ),\n\n    on(UserActions.updateUserSuccess, (state, action) =>\n        adapter.updateOne(action.user, state)\n    ),\n\n    on(UserActions.deleteUserSuccess, (state, action) =>\n        adapter.removeOne(action.user.id, state)\n    )\n);\n\nexport const { selectIds, selectEntities, selectAll, selectTotal }\n    = adapter.getSelectors();\n\n"))),(0,s.kt)("br",null),(0,s.kt)("h3",{id:"selectors"},"Selectors"),(0,s.kt)("p",null,"\uc0c1\ud0dc\ub97c \uc120\ud0dd, \ud30c\uc0dd, \uc870\ud569\ud558\ub294 \ubd80\ubd84\uc785\ub2c8\ub2e4. sql query\uc640 \ube44\uc2b7\ud55c \uac1c\ub150\uc73c\ub85c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"src/app/store/user/user.selectors.ts"),"  "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import { createFeatureSelector, createSelector } from '@ngrx/store';\n\nimport * as fromUser from './user.reducer';\nimport { UserState } from '.';\n\nexport const getUserState = createFeatureSelector<UserState.State>(\n    fromUser.userFeatureKey\n);\n\nexport const selectAllUsers = createSelector(\n    getUserState,\n    fromUser.selectAll\n);\n\nexport const getAdminUsers = createSelector(\n    selectAllUsers,\n    (users) => users.find((user) => user.name == \"admin\" )\n);\n")),(0,s.kt)("p",null,"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc758 \ubc30\uc5f4 \uba54\uc2a4\ub4dc ",(0,s.kt)("inlineCode",{parentName:"p"},"map")," ",(0,s.kt)("inlineCode",{parentName:"p"},"filter")," ",(0,s.kt)("inlineCode",{parentName:"p"},"find")," ",(0,s.kt)("inlineCode",{parentName:"p"},"reduce")," \ub97c \uc0ac\uc6a9\ud558\uac70\ub098,\n\uc870\uac74\ubb38 \uc0bd\uc785, \ub2e4\ub978 \uc678\ubd80 \uc140\ub7ed\ud130\uc640 \uc870\ud569\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,s.kt)("br",null),(0,s.kt)("h3",{id:"store-devtools"},"Store Devtools"),(0,s.kt)("p",null,"\ud30c\uc77c\uc744 \uc0dd\uc131\ud588\uc73c\uba74 \ubaa8\ub4c8\uc5d0 \ub4f1\ub85d\ud574 \uc8fc\uc5b4\uc57c\ub429\ub2c8\ub2e4.  "),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"src/app/store/user/user.store.module.ts"),"  "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import { CommonModule } from '@angular/common';\nimport { EffectsModule } from '@ngrx/effects';\nimport { NgModule } from '@angular/core';\nimport { StoreModule } from '@ngrx/store';\n\nimport * as fromUser from './user.reducer';\nimport { UserEffects } from './user.effects';\n\n@NgModule({\n    declarations: [],\n    imports: [\n        CommonModule,\n        StoreModule.forFeature(fromUser.userFeatureKey, fromUser.reducer),\n        EffectsModule.forFeature([UserEffects])\n    ]\n})\nexport class UserStoreModule { }\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"src/app/store/index.ts"),"  "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'import { ActionReducerMap, MetaReducer } from "@ngrx/store";\nimport { UserState } from "./User";\n\nexport interface RootState {\n    Users: UserState.State;\n};\n\nexport const reducers: ActionReducerMap<RootState> = {\n    Users: UserState.reducer,\n};\n\nexport const metaReducers: MetaReducer<RootState>[] = [];\n')),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"src/app/store/root-store.module.ts"),"  "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { EffectsModule } from '@ngrx/effects';\nimport { StoreModule } from '@ngrx/store';\nimport { StoreDevtoolsModule } from '@ngrx/store-devtools';\n\nimport { reducers, metaReducers } from './index';\nimport { UserStoreModule } from './user';\nimport { UserEffects } from './user/user.effects';\n\n@NgModule({\n  declarations: [],\n  imports: [\n    CommonModule,\n    StoreModule.forRoot(reducers, {metaReducers}),\n    StoreDevtoolsModule.instrument(),\n    EffectsModule.forRoot([UserEffects, ]),\n\n    UserStoreModule,\n  ]\n})\nexport class RootStoreModule { }\n")),(0,s.kt)("p",null,"\uc5ec\uae30\uc5d0\uc11c, StoreDevtoolsModule.instrument()\ub97c import \ud574\uc8fc\uc5b4\uc57c debugging\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,s.kt)("br",null),(0,s.kt)("h2",{id:"effects"},"Effects"),(0,s.kt)("p",null,"\uc774\ud399\ud2b8\ub294 RxJS\uc5d0\uc11c \uc791\ub3d9\ud558\ub294 \uc2a4\ud1a0\uc5b4\uc6a9 \uc0ac\uc774\ub4dc \uc774\ud399\ud2b8 \ubaa8\ub378\uc785\ub2c8\ub2e4.\n\uc774\ud399\ud2b8\ub294 \uc2a4\ud2b8\ub9bc(stream)\uc744 \uc0ac\uc6a9\ud558\uc5ec \ub124\ud2b8\uc6cc\ud06c \uc694\uccad, \uc6f9 \uc18c\ucf13 \uba54\uc2dc\uc9c0, \uc2dc\uac04 \uae30\ubc18 \uc774\ubca4\ud2b8\n\uac19\uc740 \uc678\ubd80 \uc0c1\ud638 \uc791\uc6a9\uc758 \uc0c1\ud0dc\ub97c \uc904\uc774\uae30(reduce) \uc704\ud55c \uc0c8\ub85c\uc6b4 \uc561\uc158 \uc18c\uc2a4\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"src/app/store/user/user.effects.ts")," \uc77c\ubd80  "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Injectable } from '@angular/core';\nimport { Actions, createEffect } from '@ngrx/effects';\n\n@Injectable()\nexport class UserEffects {\n    constructor(\n        private actions$: Actions,\n        private UserService: UserService,\n    ) { }\n\n    loadUser$ = createEffect(() =>\n        this.actions$.pipe(\n            ofType(UserActions.loadUser),\n            mergeMap(({ id }) =>\n                this.userService.loadUser(id).pipe(\n                    map((data) => UserActions.loadUserSuccess({ user: data })),\n                    catchError((error) => UserActions.loadUserFailure)\n                ))\n        )\n    );\n... \ud6c4\ub7b5 ...\n}\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"loadUser")," \uc561\uc158\uc774 \ubd88\ub9ac\uba74,\n",(0,s.kt)("inlineCode",{parentName:"p"},"mergeMap"),"\uc73c\ub85c userService\uc5d0\uc11c \uc2e4\uc81c API endpoint\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4.\n\uc774\ub54c ",(0,s.kt)("inlineCode",{parentName:"p"},"pipe"),"\ub85c \uc131\uacf5\ud558\ub294 \uacbd\uc6b0 ",(0,s.kt)("inlineCode",{parentName:"p"},"loadUserSuccess")," \uc561\uc158\uc744 \ubd80\ub974\uace0,\n\uc5d0\ub7ec \ubc1c\uc0dd \uc2dc ",(0,s.kt)("inlineCode",{parentName:"p"},"loadUserFailure")," \uc561\uc158\uc744 \uc2e4\ud589\uc2dc\ud0b5\ub2c8\ub2e4."),(0,s.kt)("p",null,"\uc774\ub7f0 \uad6c\ud604\uc73c\ub85c, \uaca9\ub9ac\ub41c \uc774\ud399\ud2b8\uc5d0\uc11c \uc2a4\ud1a0\uc5b4 \uc0ac\uc774\ub4dc \uc774\ud399\ud2b8\ub97c \ucc98\ub9ac\ud558\ub294 \ucc45\uc784\uc744 \uc9c0\uac8c \ub429\ub2c8\ub2e4."),(0,s.kt)("details",null,(0,s.kt)("summary",null,"\uc804\uccb4 \ucf54\ub4dc"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Injectable } from '@angular/core';\nimport { Actions, createEffect } from '@ngrx/effects';\n\n@Injectable()\nexport class UserEffects {\n    constructor(\n        private actions$: Actions,\n        private UserService: UserService,\n    ) { }\n\n    loadUser$ = createEffect(() =>\n        this.actions$.pipe(\n            ofType(UserActions.loadUser),\n            mergeMap(({ id }) =>\n                this.userService.loadUser(id).pipe(\n                    map((data) => UserActions.loadUserSuccess({ user: data })),\n                    catchError((error) => UserActions.loadUserFailure)\n                ))\n        )\n    );\n\n    createUser$ = createEffect(() =>\n        this.actions$.pipe(\n            ofType(UserActions.createUser),\n            mergeMap(({ create }) =>\n                this.userService.createUser(create).pipe(\n                    map((data) => UserActions.createUserSuccess({ user: data })),\n                    catchError((error) => UserActions.createUserFailure)\n                ))\n        )\n    );\n\n    updateUser$ = createEffect(() =>\n        this.actions$.pipe(\n            ofType(UserActions.updateUser),\n            mergeMap(({ id, update }) =>\n                this.userService.updateUser(id, update).pipe(\n                    map((data) => UserActions.updateUserSuccess({ user: data })),\n                    catchError((error) => UserActions.updateUserFailure)\n                ))\n        )\n    );\n\n    deleteUser$ = createEffect(() =>\n        this.actions$.pipe(\n            ofType(UserActions.deleteUser),\n            mergeMap(({ id }) =>\n                this.userService.deleteUser(id).pipe(\n                    map((data) => UserActions.deleteUserSuccess({ user: data })),\n                    catchError((error) => UserActions.deleteUserFailure)\n                ))\n        )\n    );\n}\n"))),(0,s.kt)("br",null),(0,s.kt)("h2",{id:"references"},"References"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://ngrx.io/docs"},"[\uacf5\uc2dd]What is NgRx"),(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("a",{parentName:"p",href:"https://ngrx.io/guide/store/walkthrough"},"[\uacf5\uc2dd]Tutorial")))}N.isMDXComponent=!0},44752:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTAwMHB4IiBoZWlnaHQ9IjEwMDBweCIgdmlld0JveD0iMCAwIDEwMDAgMTAwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTEuMSAoNTc1MDEpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPmJhZGdlPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9ImJhZGdlIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cG9seWdvbiBpZD0iUGF0aC0yIiBmaWxsPSIjNDEyODQ2IiBwb2ludHM9IjUwMC45NjI1MiAxMSA0NCAxNjkuNjE5NTAzIDEwOS40MTkwMDkgNzc1Ljg2MzYwOSA1MDAuOTYyNTIgOTg5LjE0NzUxOCI+PC9wb2x5Z29uPgogICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoLTIiIGZpbGw9IiM0QjMxNEYiIHBvaW50cz0iNDk5IDExIDk1NS45NjI1MiAxNjkuNjE5NTAzIDg5MC41NDM1MTEgNzc1Ljg2MzYwOSA0OTkgOTg5LjE0NzUxOCI+PC9wb2x5Z29uPgogICAgICAgIDxwYXRoIGQ9Ik03MjcuNzQ4MDQyLDM0NS43MTIzMDYgTDcyNy42NjYzNCwzNDUuNDUyOTQ4IEM3NDguNTMxNDEsMzY4LjY3NTc0MyA3NTkuMjQ4NjU1LDM5Ni4yNTA5NTUgNzU5LjgxODA3Nyw0MjguMTc4NTgzIEM3NjAuMzg3NDk5LDQ2MC4xMDYyMSA3NDkuNjcwMjUzLDQ5My43ODU1NTMgNzI3LjQxOTM2Miw1MjkuMTEzNzAyIEM3NDQuMDQ5MjE2LDUxNi4xODYyMzEgNzYzLjI1NDA0NCw0ODguMjgwNTcyIDc4NC45NzA3NTQsNDQ1LjcyMDk5MyBDNzk0LjM1MjQ4OSw1MzEuOTczNDk3IDc1OS40OTY0MDYsNTk3LjQ4ODgyMiA2ODAuMDc2NzYsNjQyLjM1ODI3NCBDNzA1LjQzMzE3MSw2NDAuMDE5OTg3IDczOS4wOTgyMjEsNjIzLjMyNjEwMiA3ODAuODUyMzczLDU5Mi4yMTgzMDQgQzczNi4yOTUyMDQsNjk5LjQ5MjMxNiA2NTQuMzY4MjQ2LDc1Ni4wOTE0NDggNTM1LjA3MTQ5OSw3NjIuMDE1NyBDNDE5Ljc3OTA2Niw3NjEuOTg0ODI4IDM0NS4wOTA1MDksNjkyLjcwMDYzIDM0NS4xNDkzNDcsNjkyLjc0NDYyMyBDMjk3Ljc0OTAwMyw2NTUuODUzNDIyIDI2NS4xMzYyOTQsNjA5LjM1NjAwNiAyNDcuNDIwNjU3LDU1My40NjExOTQgQzIxOS4wNzEzNTIsNTIyLjUwMTQ2OCAyMTguNzg4Njg3LDUxOS4xODE0MTIgMjE1Ljg2NDM5OSw1MDYuODEwMjEzIEMyMTIuOTQwMTEsNDk0LjQzOTAxNSAyMTcuNzExNTg5LDQ5MC45ODMwMzggMjI2LjAxNjIyNSw0NzguODc3Njg0IEMyMzEuNTUyNjQ5LDQ3MC44MDc0NDggMjMyLjg1NzI4OCw0NTkuMTk4MzM3IDIzMC4wMTI3NTQsNDQ0LjI1NzY1NyBDMjIyLjk1NTAxMyw0MzQuNDcwMDA5IDIxOC44OTA2NDMsNDE5LjE0MDg2NiAyMTcuODE5NjQyLDM5OC4yNzAyMjkgQzIxNy44MTk2NDIsMzg4LjE4NDE0OSAyMjQuNTUwOTM3LDM3Ny41NDIzNjkgMjM4LjAxMzUyNiwzNjYuMzQ0ODg4IEMyNTEuNDc2MTE2LDM1NS4xNDc0MDcgMjU5LjczNTU4NywzNDYuNTM1NzY0IDI2Mi43Mjc4NzcsMzQwLjYwNjcyIEMyNjUuMDEwMTM3LDMzNy4zNzQyODEgMjY1Ljg5MTkxMywzMjMuMzYwODk3IDI2NS4zNzMyMDQsMjk4LjU2NjU3IEMyNjUuMjMzODQxLDI3NC4yMTM2NTkgMjc4Ljc1NTMxNywyNjAuOTY0MzE2IDMwNS45Mzc2MywyNTguODE4NTQzIEMzNDYuNzExMSwyNTUuNTk5ODgzIDM2OS43MDU5ODYsMjI0LjkzNDUyOSAzODIuNTE2MjU2LDIxMC45ODg4NDYgQzM5MS4wNTY0MzYsMjAxLjY5MTcyNCA0MDMuNjk1MTk0LDE5Ny4xNzI5NDEgNDE5LjYzNjcxMSwxOTcuMDg2MDQxIEM0NDIuMDc5Njk2LDE5Ni4wMzQwOTggNDYyLjQ5OTk3NywyMDQuNjM3MTY2IDQ4MC4wOTE0NDUsMjIyLjM5MDk5OSBDNTIzLjkwNjAzMywyMjAuMTI0NzQ2IDU2OC43ODY4NTgsMjMxLjk0MDgxNiA2MTQuMjYyMjYsMjU3LjUzOTA2IEM2NzguODg2NDUzLDI5NS45Mjc1MTkgNzE0LjE1NTE0NCwzMzcuNTAwMDAyIDcyMC4wNjgzMzUsMzgyLjA0Njg2IEM3MTMuMTQxNTE2LDQ0MC42NzIxMjYgNjM0LjM4ODkxMSw0MzkuMTM5NTM5IDQ4NC4xNTgwMDcsMzc3LjQzNDg4OCBDNDA1LjU0MDg1NCwzOTkuNzAzNzQxIDM2Ni44OTA0NjIsNDQ3Ljk1OTkzMyAzNjguMTc0Mzc5LDUyMi4yMDM0NjIgQzM2OC4xMjA2MzgsNTkwLjMzMTY2NiA0MDEuMDkzOTIxLDYzOS44Mzc2MTIgNDY2Ljg2NzQ0OCw2NzAuNjcxMzI1IEM0MzQuODA5NDcxLDYzOS4xOTc2MzQgNDIxLjE1Njg2MSw2MTIuNzQzOTY2IDQyNS43NTQ1NjMsNTkwLjgzNTkxMyBDNDkyLjQzNDA1Nyw2NjkuODAyNTY1IDU2OC4zODcyMzQsNjk5LjMxNzU4MyA2NTMuNDgxMiw2NzkuMzg3MDg1IEM2MTUuOTY0ODg3LDY4MC42OTY5MDggNTg2LjI0ODQ0NSw2NjguNjI1MjAyIDU2My44ODM0MzksNjQyLjk5MDU5IEM2MjEuNDAwNzk2LDY0MS41OTI2OTQgNjc1LjY5Nzg0OCw2MTQuODkyNDYgNzI2LjgyODQ5Nyw1NjIuNjE4MjcgQzY5Ny4zMTI3NDMsNTg2LjEwNTU5OCA2NjYuNDI3MzUyLDU5NC45OTk0NzggNjMzLjcyNjg5NCw1ODkuNDA0OTg3IEM3MjIuMjk0NDIyLDUxOS43NzM4MTEgNzUzLjYzNDgwNCw0MzguNTQyOTE4IDcyNy43NDgwNDIsMzQ1LjcxMjMwNiBaIE01NjcsMzM1IEM1NzQuMTc5NzAyLDMzNSA1ODAsMzI5LjE3OTcwMiA1ODAsMzIyIEM1ODAsMzE0LjgyMDI5OCA1NzQuMTc5NzAyLDMwOSA1NjcsMzA5IEM1NTkuODIwMjk4LDMwOSA1NTQsMzE0LjgyMDI5OCA1NTQsMzIyIEM1NTQsMzI5LjE3OTcwMiA1NTkuODIwMjk4LDMzNSA1NjcsMzM1IFoiIGlkPSJDb21iaW5lZC1TaGFwZSIgZmlsbD0iI0JBMkJEMiI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4="},92363:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/state-management-lifecycle-21cd35a8817f6c11ee57c5e5e1df02e5.png"}}]);