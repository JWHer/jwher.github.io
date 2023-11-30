"use strict";(self.webpackChunkjwher_blog=self.webpackChunkjwher_blog||[]).push([[7145],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(g,r(r({ref:t},u),{},{components:n})):a.createElement(g,r({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:i,r[1]=o;for(var s=2;s<l;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},40673:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const l={authors:["jwher"],description:"LLaMA: Open and Efficient Foundation Language Models",slug:"llama-open-and-efficient-foundation-language-models",tags:["ml","paper"],title:"LLaMa \uacf5\uac1c\ub41c \ud6a8\uc728\uc801\uc778 \uc5b8\uc5b4 \ubaa8\ub378"},r=void 0,o={permalink:"/en/posts/llama-open-and-efficient-foundation-language-models",editUrl:"https://github.com/jwher/jwher.github.io/tree/main/posts/2023-05-30-llama-open-and-efficient-foundation-language-models/index.md",source:"@site/posts/2023-05-30-llama-open-and-efficient-foundation-language-models/index.md",title:"LLaMa \uacf5\uac1c\ub41c \ud6a8\uc728\uc801\uc778 \uc5b8\uc5b4 \ubaa8\ub378",description:"LLaMA: Open and Efficient Foundation Language Models",date:"2023-05-30T00:00:00.000Z",formattedDate:"May 30, 2023",tags:[{label:"ml",permalink:"/en/posts/tags/ml"},{label:"paper",permalink:"/en/posts/tags/paper"}],readingTime:15.38,hasTruncateMarker:!0,authors:[{name:"Jeongwon Her",title:"MLOps Engineer",url:"https://github.com/jwher",imageURL:"https://github.com/jwher.png",key:"jwher"}],frontMatter:{authors:["jwher"],description:"LLaMA: Open and Efficient Foundation Language Models",slug:"llama-open-and-efficient-foundation-language-models",tags:["ml","paper"],title:"LLaMa \uacf5\uac1c\ub41c \ud6a8\uc728\uc801\uc778 \uc5b8\uc5b4 \ubaa8\ub378"},prevItem:{title:"RISC \ucef4\ud4e8\ud130\ub97c \uc704\ud55c \uc0ac\ub840",permalink:"/en/posts/the-case-for-the-reduced-instruction-set-computer"},nextItem:{title:"\uc720\ud074\ub9ac\ub4dc \ud638\uc81c\ubc95",permalink:"/en/posts/euclidean-algorithm"}},p={authorsImageUrls:[void 0]},s=[{value:"2.1 Pre-training Data",id:"21-pre-training-data",level:2},{value:"English CommonCrawl 67%",id:"english-commoncrawl-67",level:3},{value:"C4 15%",id:"c4-15",level:3},{value:"Github 4.5%",id:"github-45",level:3},{value:"Wikipedia 4.5%",id:"wikipedia-45",level:3},{value:"Gutenberg and Books3 4.5%",id:"gutenberg-and-books3-45",level:3},{value:"ArXiv 2.5%",id:"arxiv-25",level:3},{value:"Stack Exchange 2%",id:"stack-exchange-2",level:3},{value:"2.2 Architecture",id:"22-architecture",level:2},{value:"Pre-normalization GPT3",id:"pre-normalization-gpt3",level:3},{value:"SwiGLU activation function PaLM",id:"swiglu-activation-function-palm",level:3},{value:"Rotary Embeddings GPTNeo",id:"rotary-embeddings-gptneo",level:3},{value:"2.3 Optimizer",id:"23-optimizer",level:2},{value:"2.4 Efficient implementation",id:"24-efficient-implementation",level:2},{value:"3.1 Common Sense Reasoning",id:"31-common-sense-reasoning",level:2},{value:"3.2 Closed-book Question Answering",id:"32-closed-book-question-answering",level:2},{value:"3.3 Reading Comprehension",id:"33-reading-comprehension",level:2},{value:"3.4 Mathematical reasoning",id:"34-mathematical-reasoning",level:2},{value:"3.5 Code generation",id:"35-code-generation",level:2},{value:"3.6 Massive Multitask Language Understanding",id:"36-massive-multitask-language-understanding",level:2},{value:"3.7 Evolution of performance during training",id:"37-evolution-of-performance-during-training",level:2}],u={toc:s},d="wrapper";function c(e){let{components:t,...l}=e;return(0,i.kt)(d,(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/posts/llama-open-and-efficient-foundation-language-models"},(0,i.kt)("img",{alt:"llama",src:n(65477).Z,width:"1200",height:"1198"})),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("em",{parentName:"p"},"\ucd5c\ub300\ud55c \ubc88\uc5ed\ub41c \ub2e8\uc5b4\ub97c \ud1b5\uc77c\ud558\uc600\uc73c\ub098 \uc6d0\ubb38\uc744 \ubcf4\ub294\uac83\uc744 \uad8c\uc7a5\ud569\ub2c8\ub2e4."),"  "),(0,i.kt)("h1",{id:"1-\uc18c\uac1c"},"1. \uc18c\uac1c"),(0,i.kt)("p",null,"LLMs(Large Languages Models)\ub294 \ub9ce\uc740 \ud14d\uc2a4\ud2b8 \ub9d0\ubb49\uce58\ub97c \ud1b5\ud574 \ud559\uc2b5\ud568\uc73c\ub85c\uc368 \ud14d\uc2a4\ud2b8 \uba85\ub839 \ub610\ub294 few examples\uc5d0\uc11c \uc0c8\ub85c\uc6b4 \ub2a5\ub825\uc744 \ubcf4\uc5ec\uc8fc\uc5c8\uc2b5\ub2c8\ub2e4. (",(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/2005.14165.pdf"},"Brown et al."),")"),(0,i.kt)("p",null,"few-shot \uc694\uc18c\ub4e4\uc740 \ubaa8\ub378\uc744 \ucda9\ubd84\ud55c \ud06c\uae30\ub85c \ud0a4\uc6b0\ub294\ub370\uc11c \ucc98\uc74c \ub098\ud0c0\ub0ac\uace0(Kaplan et al., 2020), \ubaa8\ub378\uc744 \ub354 \ud0a4\uc6b0\ub294 \uc5f0\uad6c\uc120\uc0c1\uc744 \ub9cc\ub4ed\ub2c8\ub2e4. (",(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/2204.02311.pdf"},"Chowdhery et al."),", 2022; Rae et al., 2021)"),(0,i.kt)("p",null,"\uc774 \ub178\ub825\uc740 \ub354 \ub9ce\uc740 \ud30c\ub77c\ubbf8\ud130\uac00 \ub354 \ub098\uc740 \uc131\ub2a5\uc744 \uc774\ub04c\uac70\ub77c\ub294 \uac00\uc815\ud558\uc5d0 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub098 ",(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/2203.15556.pdf"},"Hoffman et al.")," \uc758 \ucd5c\uadfc \uc5f0\uad6c\ub294 \uc8fc\uc5b4\uc9c4 \ucef4\ud4e8\ud305 \uc608\uc0b0\uc5d0 \ud070 \ubaa8\ub378\uc774 \ucd5c\uace0\uc758 \uc131\ub2a5\uc5d0 \ub3c4\ub2ec\ud558\uc9c0 \ubabb\ud588\uace0, \ub354 \ub9ce\uc740 \ub370\uc774\ud130\ub85c \ud559\uc2b5\ud55c \uc791\uc740 \ubaa8\ub378\uc774\ub780 \uac83\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."),(0,i.kt)("p",null,"Hoffmann et al.\uc758 \uc2a4\ucf00\uc77c\ub9c1 \ubc95\uce59\uc758 \ubaa9\uc801\uc740 \ud2b9\uc815 \ud559\uc2b5\uc744 \uc704\ud55c \ucef4\ud4e8\ud305 \uc608\uc0b0\uc744 \uc704\ud574 \ub370\uc774\ud130\uc14b\uacfc \ubaa8\ub378 \ud06c\uae30\ub97c \uac00\uc7a5 \uc798 \ud655\uc7a5\ud558\ub294 \ubc29\ubc95\uc744 \uacb0\uc815\ud558\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uadf8\ub7ec\ub098 \uc774 \ubaa9\uc801\uc740 \uc5b8\uc5b4 \ubaa8\ub378\uc744 \uc2a4\ucf00\uc77c\ub9c1 \ud560 \ub54c \uce58\uba85\uc801\uc73c\ub85c \uc791\uc6a9\ud558\ub294, \ucd94\ub860 \uc608\uc0b0\uc744 \uace0\ub824\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc131\ub2a5 \ud0c0\uae43 \ub808\ubca8\uc774 \uc8fc\uc5b4\uc9c4\ub2e4\ub294 \ub9e5\ub77d\uc5d0\uc11c, \uc120\ud638\ub418\ub294 \ubaa8\ub378\uc740 \ud559\uc2b5\uc5d0 \ube60\ub978 \uac83\uc774 \uc544\ub2c8\ub77c \ucd94\ub860\uc5d0 \ube60\ub978 \uac83\uc774\uace0, \ube44\ub85d \ud2b9\uc815\ud55c \uc131\ub2a5\uc5d0 \ub3c4\ub2ec\ud558\uae30 \uc704\ud574 large model\uc744 \ud559\uc2b5\ud558\ub294\uac8c \ub354 \uc800\ub834\ud560 \uc218 \uc788\uc73c\ub098, \uc791\uc740 \uac83\uc774 \uad81\uadf9\uc801\uc73c\ub85c\ub294 \ucd94\ub860\ud560 \ub54c \uc800\ub834\ud560 \uac83\uc785\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4, Hoffmann et al.\uc774 10B \ubaa8\ub378\uc744 200B \ud1a0\ud070\uc73c\ub85c \ud559\uc2b5\uc2dc\ud0ac \uac83\uc744 \ucd94\ucc9c\ud588\uc73c\ub098, \uc6b0\ub9ac\ub294 7B \ubaa8\ub378\uc774 1T \ud1a0\ud070 \uc774\ud6c4\uc5d0\ub3c4 \uc9c0\uc18d\uc801\uc73c\ub85c \uc131\ub2a5\uc774 \uc99d\uac00\ud558\ub294 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc774 \uc791\uc5c5\uc774 \uc9d1\uc911\ud558\ub294 \uac83\uc740 \uc77c\ubc18\uc801\uc73c\ub85c \uc0ac\uc6a9\ub41c \ud1a0\ud070\ubcf4\ub2e4 \ub354 \ub9ce\uc740 \ud1a0\ud070\uc73c\ub85c \ud559\uc2b5\uc2dc\ud0a4\uba74\uc11c \ub2e4\uc591\ud55c \ucd94\ub860 \uc608\uc0b0\uc5d0\uc11c \ucd5c\uc801\uc758(best possible) \uc131\ub2a5\uc744 \ub2ec\uc131\ud558\ub294 \uc5b8\uc5b4 \ubaa8\ub378 \uc2dc\ub9ac\uc988 \ud559\uc2b5\uc785\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uacb0\uacfc\ub85c \ub098\uc628 \ubaa8\ub378\uc740, LLaMA\ub85c \ubd88\ub9ac\uba70, 7B~65B \ud30c\ub77c\ubbf8\ud130\ub97c \uac00\uc9c0\uace0 \ud604\uc874\ud558\ub294 LLM\ub4e4\uacfc \uacbd\uc7c1\uc801\uc778 \uc131\ub2a5\uc744 \ub0c5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4 LLaMa-13B\ub294, GPT-3\ubcf4\ub2e4 10\ubc30 \uc791\uc9c0\ub9cc \ub300\ubd80\ubd84 \ubca4\uce58\ub9c8\ud06c\ub97c \uc0c1\ud68c\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc774 \ubaa8\ub378\uc774 \ub2e8\uc77c GPU\uc5d0\uc11c \uc2e4\ud589\ud560 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0, LLMs\uc5d0 \uc811\uadfc\uacfc \uc5f0\uad6c\uc758 \ubbfc\uc8fc\ud654(democratize)\uc5d0 \ub3c4\uc6c0\uc774 \ub420 \uac83\uc73c\ub85c \ubbff\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\ud655\uc7a5\uc758 \ucd5c\uace0\uc810\uc778 65B \ud30c\ub77c\ubbf8\ud130 \ubaa8\ub378\uc740 Chinchilla \ub610\ub294 PaLM-540B\uc640 \uac19\uc740 \ucd5c\uace0 LLMs\uc640 \uacbd\uc7c1\uc801\uc785\ub2c8\ub2e4."),(0,i.kt)("p",null,"Chinchilla, PaLM, GPT-3\uacfc \ub2ec\ub9ac, \uacf5\uac1c\uc801\uc73c\ub85c \uc0ac\uc6a9\ub41c \ub370\uc774\ud130\ub9cc \uc0ac\uc6a9\ud588\uace0, \uc624\ud508 \uc18c\uc2a4\uc640 \ud638\ud658\ub418\ub294 \ubc18\uba74, \ub300\ubd80\ubd84\uc758 \ubaa8\ub378\uc774 \uacf5\uac1c\uc801\uc73c\ub85c \uc0ac\uc6a9 \uac00\ub2a5\ud558\uc9c0 \uc54a\uac70\ub098 \ubb38\uc11c\ud654\ub418\uc9c0 \uc54a\uc740 \ub370\uc774\ud130\uc5d0 \uc758\uc874\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc5ec\uae30\uc5d4 \uba87 \uc608\uc678\uac00 \uc788\uc2b5\ub2c8\ub2e4, OPT(Zhang et al.), GPT-NeoX(Black et al.), BLOOM(Scaoet et all.) and GLM(Zeng et al.), \uadf8\ub7ec\ub098 \uc5b4\ub5a4 \uac83\ub3c4 PaLM-62B \ub610\ub294 Chinchilla\uc640 \ube44\uad50\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc774 \ub17c\ubb38\uc5d0 \ub098\uba38\uc9c0\ub294, transformer(Vaswani et al) \uc544\ud0a4\ud14d\ucc98\uc5d0 \uc218\ud589\ud55c \ubcc0\uacbd\uacfc, \ud559\uc2b5 \uba54\uc18c\ub4dc\ub97c \uc18c\uac1c\ud569\ub2c8\ub2e4. \ub2e4\uc74c\uc5d0\ub294 \ubaa8\ub378\uc758 \uc131\ub2a5\uacfc \ub2e4\ub978 LLMs\ub97c \ud45c\uc900 \ubca4\uce58\ub9c8\ud06c\ub97c \uc0ac\uc6a9\ud574 \ube44\uad50\ud569\ub2c8\ub2e4. \ucd5c\uc885\uc801\uc73c\ub85c, \ubbff\uc744\ub9cc\ud55c AI \ucee4\ubba4\ub2c8\ud2f0\uc5d0\uc11c \ub098\uc628 \uac00\uc7a5 \ucd5c\uc2e0\uc758 \ubca4\uce58\ub9c8\ud06c \uc77c\ubd80\ub97c \uc0ac\uc6a9\ud574\uc11c \ud3b8\uacac\uacfc \ub3c5\uc131\uc774 \ubaa8\ub378\uc5d0 \uc778\ucf54\ub529 \ub418\uc5c8\ub294\uc9c0 \ub178\ucd9c\ud569\ub2c8\ub2e4."),(0,i.kt)("h1",{id:"2-\uc811\uadfc\ubc95"},"2. \uc811\uadfc\ubc95"),(0,i.kt)("p",null,"\ud559\uc2b5 \uc811\uadfc\ubc95\uc740 \uc774\uc804 \uc791\uc5c5 (Brown et al., 2020; Chowdhery et al., 2022), \uacfc Chinchilla scaling laws (Hoffmann et al., 2022) \uc5d0\uc11c \uc601\uac10\uc744 \ubc1b\uc558\uc2b5\ub2c8\ub2e4. \ud070 transformers\ub97c \ud070 \ud14d\uc2a4\ud2b8 \ub370\uc774\ud130\ub85c \ud45c\uc900 optimizer\ub97c \uc0ac\uc6a9\ud574 \ud559\uc2b5\ud588\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h2",{id:"21-pre-training-data"},"2.1 Pre-training Data"),(0,i.kt)("p",null,"\ud559\uc2b5\uc5d0 \uc0ac\uc6a9\ub41c \ub370\uc774\ud130\uc14b\uc740 Table 1\uc5d0 \ubcf4\uace0\ud55c \uac83\uacfc \uac19\uc774 \uc5ec\ub7ec \uc18c\uc2a4\uc758 \ud63c\ud569\uc774\uace0, \ub2e4\uc591\ud55c \ub3c4\uba54\uc778\uc744 \ub2e4\ub8f9\ub2c8\ub2e4."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Table 1: Pre-training data. \uc0ac\uc804 \ud559\uc2b5\uc5d0 \uc0ac\uc6a9\ub41c \ub370\uc774\ud130 \ud63c\ud569\uc73c\ub85c, \uac01 \ud558\uc704\uc9d1\ud569\uc5d0 \uc0d8\ud50c\ub9c1 \ube44\uc728, \ud558\uc704 \uc9d1\ud569\uc744 1.4T \ud1a0\ud070\uc744 \ud559\uc2b5\ud560 \ub54c \uc218\ud589\ub41c epochs \uc218, \ub514\uc2a4\ud06c \ud06c\uae30\ub97c \ub098\uc5f4\ud569\ub2c8\ub2e4. 1T \ud1a0\ud070\uc73c\ub85c \uc0ac\uc804 \ud559\uc2b5\ud55c \uac83\ub3c4 \ub3d9\uc77c\ud55c \uc0d8\ud50c\ub9c1 \ube44\uc728\uc744 \uac00\uc9d1\ub2c8\ub2e4."),(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{parentName:"p",src:"https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cc03535f-860b-492e-918b-f972a1bfd2da/Untitled.png",alt:"Untitled"}))),(0,i.kt)("p",null,"\ub300\ubd80\ubd84 \ubd84\uc57c\uc5d0\uc11c,  \ub300\uc911\uc5d0 \uacf5\uac1c\ub41c \ub370\uc774\ud130\uc640, \uc624\ud508 \uc18c\uc2a4 \uc791\uc5c5 \ud638\ud658\uc131\uc744 \uc704\ud55c \ub370\uc774\ud130\ub9cc \uc0ac\uc6a9\ud55c \uc81c\ud55c\uacfc \ud568\uaed8, \ub2e4\ub978 LLM\uc744 \ud559\uc2b5\uc2dc\ud0a4\ub294\ub370 \uc0ac\uc6a9\ud55c \ub370\uc774\ud130 \uc18c\uc2a4\ub97c \uc7ac\ud65c\uc6a9\ud588\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc774\uac83\uc740 \uc774\uc5b4\uc9c0\ub294 \ub370\uc774\ud130 \ud63c\ud569\uacfc \ud559\uc2b5 \uc14b\uc5d0\uc11c \ub098\ud0c0\ub098\ub294 \ud37c\uc13c\ud14c\uc774\uc9c0\ub97c \ub3c4\ucd9c\ud569\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"english-commoncrawl-67"},"English CommonCrawl ","[67%]"),(0,i.kt)("p",null,"5\uac1c\uc758 CCNet pipeline (Wenzek et al., 2020)\uc73c\ub85c 2017~2020\ub144 \uc0ac\uc774\uc758 CommonCrawl \ub364\ud504\ub97c \uc804\ucc98\ub9ac\ud588\uc2b5\ub2c8\ub2e4. \uc774 \uc791\uc5c5\uc740 \ud589 \uc218\uc900\uc5d0\uc11c \ub370\uc774\ud130 \uc911\ubcf5\uc744 \uc81c\uac70\ud558\uace0, fastText \uc120\ud615 \ubd84\ub958\uae30\ub85c \ube44\uc601\uc5b4 \ud398\uc774\uc9c0\uc640 \uc800\ud488\uc9c8\uc758 \ucf58\ud150\uce20\ub97c n-gram \uc5b8\uc5b4 \ubaa8\ub378\uc744 \uc0ac\uc6a9\ud574 \uc81c\uac70\ud558\ub294 \uc5b8\uc5b4 \uc778\uc2dd\uc744 \uc218\ud589\ud569\ub2c8\ub2e4. \ucd94\uac00\uc801\uc73c\ub85c, Wikipedia\uc5d0 \ucc38\uc870\ub41c \ud398\uc774\uc9c0 vs \uc784\uc758\ub85c \uc0d8\ud50c\ub41c \ud398\uc774\uc9c0\uc640 \ucc38\uc870\ub85c \ubd84\ub958\ub418\uc9c0 \uc54a\uc740 \ubc84\ub824\uc9c4 \ud398\uc774\uc9c0\ub97c \ubd84\ub958\ud558\uae30 \uc704\ud574 \uc120\ud615 \ubaa8\ub378\uc744 \ud559\uc2b5\uc2dc\ucf30\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"c4-15"},"C4 ","[15%]"),(0,i.kt)("h3",{id:"github-45"},"Github ","[4.5%]"),(0,i.kt)("h3",{id:"wikipedia-45"},"Wikipedia ","[4.5%]"),(0,i.kt)("h3",{id:"gutenberg-and-books3-45"},"Gutenberg and Books3 ","[4.5%]"),(0,i.kt)("h3",{id:"arxiv-25"},"ArXiv ","[2.5%]"),(0,i.kt)("h3",{id:"stack-exchange-2"},"Stack Exchange ","[2%]"),(0,i.kt)("p",null,"\uc885\ud569\ud574\uc11c, \uc804\uccb4 \ud559\uc2b5 \ub370\uc774\ud130\uc14b\uc740 \ud1a0\ud070\ud654 \uc774\ud6c4 \ub300\ub7b5 1.4T \ud1a0\ud070\uc744 \uac00\uc9d1\ub2c8\ub2e4. Wikipedia\uc640 Books \ub3c4\uba54\uc778\uc5d0\uc11c \ub300\ub7b5 2 epochs\ub97c \uc218\ud589\ud55c \uac83\uc744 \uc81c\uc678\ud558\uace0, \ub300\ubd80\ubd84\uc758 \ud559\uc2b5 \ub370\uc774\ud130\uc5d0\uc11c, \uac01 \ud1a0\ud070\uc740 \ud559\uc2b5\ud560\ub54c \ud55c\ubc88\ub9cc \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),(0,i.kt)("h2",{id:"22-architecture"},"2.2 Architecture"),(0,i.kt)("p",null,"\ucd5c\uadfc LLM \uc791\uc5c5\uc744 \ub530\ub77c \ub124\ud2b8\uc6cc\ud06c\ub294 transformer architecture\ub97c \ub530\ub985\ub2c8\ub2e4. \ud6c4\uc18d\uc5d0 \uc81c\uc548\ub418\uace0 PaLM\uacfc \uac19\uc740 \ub2e4\ub978 \ubaa8\ub378\uc5d0\uc11c \uc0ac\uc6a9\ub41c \ub2e4\uc591\ud55c \uac1c\uc120\uc0ac\ud56d\uc744 \ud65c\uc6a9\ud569\ub2c8\ub2e4. \uc5ec\uae30\uc5d0\uc11c \uc6d0\ub798 \uc544\ud0a4\ud14d\ucc98\uc640 \uc8fc\ub41c \ub2e4\ub978\uc810\uc744 \ub2e4\ub8e8\uace0, \uc5b4\ub514\uc5d0\uc11c \ubcc0\uacbd\uc5d0 \ub300\ud55c \uc601\uac10\uc744 \ucc3e\uc558\ub294\uc9c0 ","[\uad04\ud638\uc5d0]"," \ud45c\uc2dc\ud569\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"pre-normalization-gpt3"},"Pre-normalization ","[GPT3]"),(0,i.kt)("p",null,"\ud559\uc2b5 \uc548\uc815\uc131\uc744 \uac1c\uc120\ud558\uae30 \uc704\ud574 \ucd9c\ub825\uc744 normalize \ud558\ub294 \ub300\uc2e0, \uac01 transformer\uc758 sub-layer\uc758 \uc785\ub825\uc744 normalize \ud588\uc2b5\ub2c8\ub2e4. Zhang and Sennrich\uac00 \ub3c4\uc785\ud55c RMSNorm\uc744 normalizing \ud568\uc218\ub85c \uc0ac\uc6a9\ud588\uc2b5\ub2c8\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"transformer input/output \uc124\uba85"),(0,i.kt)("li",{parentName:"ul"},"RMSNorm \uc124\uba85")),(0,i.kt)("h3",{id:"swiglu-activation-function-palm"},"SwiGLU activation function ","[PaLM]"),(0,i.kt)("p",null,"ReLU\uc758 \ube44\uc120\ud615\uc131\uc744 Shazeer\uac00 \uc131\ub2a5 \ud5a5\uc0c1\uc744 \uc704\ud574 \ub3c4\uc785\ud55c SwiGLU activation function\uc73c\ub85c \ubc14\uafb8\uc5c8\uc2b5\ub2c8\ub2e4. 2/3 4d \ucc28\uc6d0\uc744 PaLM\uc758 4d \ub300\uc2e0 \uc0ac\uc6a9\ud588\uc2b5\ub2c8\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ReLU \uc124\uba85"),(0,i.kt)("li",{parentName:"ul"},"SwiGLU \uc124\uba85")),(0,i.kt)("h3",{id:"rotary-embeddings-gptneo"},"Rotary Embeddings ","[GPTNeo]"),(0,i.kt)("p",null,"absolute positional embedding\uc744 \uc81c\uac70\ud558\uace0 \uac01 \ub124\ud2b8\uc6cc\ud06c\uc758 \ub808\uc774\uc5b4\uc5d0\uc11c Su et al\uc774 \ub3c4\uc785\ud55c rotary positional embeddings(RoPE)\ub97c \uc0ac\uc6a9\ud588\uc2b5\ub2c8\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Absolute Positional Embedding \uc124\uba85"),(0,i.kt)("li",{parentName:"ul"},"RoPE \uc124\uba85")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d6554f37-cf9f-4a1c-bef9-0a90ebac959b/Untitled.png",alt:"Untitled"})),(0,i.kt)("p",null,"\ubcc0\uacbd\ud55c \ubaa8\ub378\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ud558\uc774\ud37c\ud30c\ub77c\ubbf8\ud130\ub294 \ud45c2\uc5d0 \uc8fc\uc5b4\uc9d1\ub2c8\ub2e4."),(0,i.kt)("h2",{id:"23-optimizer"},"2.3 Optimizer"),(0,i.kt)("p",null,"\u03b21 = 0.9, \u03b22 = 0.95\uc758 \ud558\uc774\ud37c\ud30c\ub77c\ubbf8\ud130\ub85c, AdamW optimizer (Loshchilov and Hutter, 2017)\ub97c \uc0ac\uc6a9\ud574 \ubaa8\ub378\uc744 \ud559\uc2b5\ud588\uc2b5\ub2c8\ub2e4. \ub9c8\uc9c0\ub9c9 learning rate\uac00 10%\uc758 \ucd5c\uace0 learning rate\ub97c \uac00\uc9c0\uac8c \ub418\ub294 \ucf54\uc0ac\uc778 learning rate schedule\uc744 \uc0ac\uc6a9\ud588\uc2b5\ub2c8\ub2e4. Weight decay\ub97c 0.1, Gradient clipping 1.0\uc744 \uc0ac\uc6a9\ud588\uc2b5\ub2c8\ub2e4. 2000 \uc608\uc5f4 \ub2e8\uacc4\ub97c \uac70\uce58\uace0, \ubaa8\ub378 \ud06c\uae30\uc5d0 \ub530\ub77c learning rate\uc640 \ubc30\uce58 \ud06c\uae30\ub97c \uc870\uc808\ud569\ub2c8\ub2e4."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Table 2: \ubaa8\ub378 \ud06c\uae30, \uad6c\uc870, \ud558\uc774\ud37c \ud30c\ub77c\ubbf8\ud130\uc758 \ucd5c\uc801\ud654"),(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{parentName:"p",src:"https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8994f833-e6f5-4163-864c-43b8922fef95/Untitled.png",alt:"Untitled"}))),(0,i.kt)("h2",{id:"24-efficient-implementation"},"2.4 Efficient implementation"),(0,i.kt)("p",null,"\ubaa8\ub378\uc758 \ud559\uc2b5 \uc18d\ub3c4\ub97c \uac1c\uc120\ud558\uae30 \uc704\ud574 \uba87 \ucd5c\uc801\ud654\ub97c \ub9cc\ub4e4\uc5c8\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uccab\uc9f8,  \uc2e4\ud589\uc2dc\uac04 \uba54\ubaa8\ub9ac \uc0ac\uc6a9\ub7c9\uc744 \uc904\uc774\ub3c4\ub85d \ud6a8\uc728\uc801\uc778 causal multi-head attention\uc758 \ud6a8\uc728\uc801\uc778 \uad6c\ud604\uc744 \uc0ac\uc6a9\ud588\uc2b5\ub2c8\ub2e4. Xformers \ub77c\uc774\ube0c\ub7ec\ub9ac2\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uc774 \uad6c\ud604\uc740 Rabe and Staats\uc5d0\uc11c \uc601\uac10\uc744 \uc5bb\uc5c8\uc73c\uba70 Dao et al.\uc758 backward\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. (2022). \uc774\uac83\uc740 attention \uac00\uc911\uce58\ub97c \uc800\uc7a5\ud558\uc9c0 \uc54a\uace0 \uc5b8\uc5b4 \ubaa8\ub378\ub9c1 \uc791\uc5c5\uc758 \uc778\uacfc\uc801 \ud2b9\uc131\uc73c\ub85c \uc778\ud574 \uac00\ub824\uc9c4 \ud0a4/\ucffc\ub9ac \uc810\uc218\ub97c \ub123\uc9c0 \uc54a\uc74c\uc73c\ub85c \ub2ec\uc131\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"\ud559\uc2b5 \ud6a8\uc728\uc744 \ub354 \ud5a5\uc0c1\uc2dc\ud0a4\uae30 \uc704\ud574, \uccb4\ud06c\ud3ec\uc778\ud305\uc744 \ud558\ub294 backward pass\ub3d9\uc548 \uc7ac\uacc4\uc0b0\ub418\ub294 activations\uc758 \uc591\uc744 \uc904\uc600\uc2b5\ub2c8\ub2e4. \ub354 \uc815\ud655\ud558\uac8c, \uc120\ud615 \uacc4\uce35\uc758 \ucd9c\ub825\uac19\uc740 \uacc4\uc0b0\ube44\uc6a9\uc774 \ube44\uc2fc activations\ub97c \uc808\uc57d\ud588\uc2b5\ub2c8\ub2e4. \uc774\uac83\uc740 PyTorch autograd\uc5d0 \uc758\uc874\ud558\ub294 \ub300\uc2e0 transformer \ub808\uc774\uc5b4\uc758 backward function\uc744 \uc218\ub3d9\uc73c\ub85c \uad6c\ud604\ud568\uc73c\ub85c\uc368 \ub2ec\uc131\ud569\ub2c8\ub2e4. \uc774 \ucd5c\uc801\ud654\uc5d0\uc11c \ucd5c\ub300\ud55c\uc758 \uc7a5\uc810\uc744 \uc5bb\uc73c\ub824\uba74, Korthikani\uac00 \uae30\uc220\ud55c \ubaa8\ub378\uacfc \uc2dc\ud000\uc2a4 \ubcd1\ub82c\uc5d0 \uc0ac\uc6a9\ub418\ub294 \uba54\ubaa8\ub9ac\ub97c \uc904\uc5ec\uc57c \ud588\uc2b5\ub2c8\ub2e4. \uac8c\ub2e4\uac00, \uc6b0\ub9ac\ub294 \ub610\ud55c \uac00\ub2a5\ud55c \ud55c (all_reduce \uc791\uc5c5\uc73c\ub85c \uc778\ud574) \ub124\ud2b8\uc6cc\ud06c\ub97c \ud1b5\ud55c GPU \uac04\uc758 activation \uacc4\uc0b0\uacfc \ud1b5\uc2e0\uc744 \uc624\ubc84\ub7a9\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"65B-\ud30c\ub77c\ubbf8\ud130 \ubaa8\ub378\uc744 \ud6c8\ub828\ud560 \ub54c, \uc6b0\ub9ac\uc758 \ucf54\ub4dc\ub294 80GB\uc758 RAM\uc774 \uc788\ub294 2048 A100 GPU\uc5d0\uc11c \uc57d 380\uac1c\uc758 \ud1a0\ud070/\ucd08/GPU\ub97c \ucc98\ub9ac\ud569\ub2c8\ub2e4. \uc774\uac83\uc740 1.4T \ud1a0\ud070\uc774 \ud3ec\ud568\ub41c \ub370\uc774\ud130 \uc138\ud2b8\uc5d0 \ub300\ud55c \ud6c8\ub828\uc774 \uc57d 21\uc77c\uc774 \uac78\ub9b0\ub2e4\ub294 \uac83\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."),(0,i.kt)("h1",{id:"3-\uc8fc\uc694-\uc131\uacfc"},"3. \uc8fc\uc694 \uc131\uacfc"),(0,i.kt)("p",null,"\uc774\uc804 \uc791\uc5c5 (Brown et al., 2020)\uc744 \uc774\uc5b4\uc11c zero-shot\uacfc few-shot\uc791\uc5c5\uc744 \uace0\ub824\ud574 20\uac1c\uc758 \ubca4\uce58\ub9c8\ud06c \uacb0\uacfc\ub97c \ubcf4\uace0\ud569\ub2c8\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Zero-shot: task\uc640 test example\uc5d0 \ub300\ud55c \ud14d\uc2a4\ud2b8 \uc124\uba85\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. \ubaa8\ub378\uc740 open-ended generation \ub610\ub294 \uc81c\uc548\ub41c \ub2f5\ubcc0\uc758 \uc21c\uc704\ub97c \ub9e4\uaca8 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"Few-shot: 1~64 \uc0ac\uc774\uc758 \uba87\uac1c\uc758 task \uc608\uc81c\uc640 \ud14c\uc2a4\ud2b8 \uc608\uc81c\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4. \ubaa8\ub378\uc740\uc774 \ud14d\uc2a4\ud2b8\ub97c \uc785\ub825\uc73c\ub85c \ubc1b\uace0 \ub2f5\ubcc0\uc744 \uc0dd\uc131\ud558\uace0\ub098 \ub2e4\ub978 \uc635\uc158\uc758 \uc21c\uc704\ub97c \ub9e4\uae41\ub2c8\ub2e4.")),(0,i.kt)("p",null,"\ub300\uc911\uc774 \uc0ac\uc6a9\uac00\ub2a5\ud558\uc9c0 \uc54a\uc740 \uc5b8\uc5b4 \ubaa8\ub378 GPT-3, Gopher, Chinchilla \uadf8\ub9ac\uace0 PaLM\uacfc, open-sourced OPT \ubaa8\ub378 GPT-J, GPT-Neo\uc640 \uac19\uc740 \ub2e4\ub978 \uc7ac\ub2e8\uc758 \ubaa8\ub378\uacfc LLaMA\ub97c \ube44\uad50\ud569\ub2c8\ub2e4. \uc139\uc1584\uc5d0\uc11c OPT-IML\uacfc Flan-PaLM\uacfc \uac19\uc740 \uba85\ub839\uc5b4 \ud29c\ub2dd\ub41c \ubaa8\ub378\uacfc \uac04\ub2e8\ud55c \ube44\uad50\ub97c \ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,'free-form \uc0dd\uc131 \uc791\uc5c5\uacfc \uac1d\uad00\uc2dd(multiple choice) \uc791\uc5c5\uc5d0 \ub300\ud574 LLaMA\ub97c \ud3c9\uac00\ud569\ub2c8\ub2e4. \uac1d\uad00\uc2dd \uc791\uc5c5\uc5d0\uc11c, \ubaa9\ud45c\ub294 \uc81c\uacf5\ub41c \ub9e5\ub77d\uc5d0 \ub530\ub77c \uc8fc\uc5b4\uc9c4 \uc77c\ub828\uc758 \uc791\uc5c5 \uc911\uc5d0\uc11c \uac00\uc7a5 \uc801\uc808\ud55c \uc644\uc131\uc744 \uc120\ud0dd\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. \uc81c\uacf5\ub41c \ub9e5\ub77d\uc744 \uac10\uc548\ud560 \ub54c \uac00\uc7a5 \ub192\uc740 \uac00\ub2a5\uc131\uc758 \uc644\uc131\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4. Gao et al.\uc744 \ub530\ub974\uace0 Brown et al.\uc744 \ub530\ub974\ub294 \ud2b9\uc815 \ub370\uc774\ud130 \uc138\ud2b8(OpenBookQA, BoolQ)\ub97c \uc81c\uc678\ud558\uace0 \uc644\uc131\uc5d0 \ud544\uc694\ud55c \ubb38\uc790 \uc218\uc5d0 \uc758\ud574 normalized\ub41c \uac00\ub2a5\uc131\uc744 \uc0ac\uc6a9\ud558\uace0, \u3141\ubb38\ub9e5\uc73c\ub85c "Answer:" \uc8fc\uc5b4\uc9c4 \uc644\uc131\uc5d0 \uac00\ub2a5\uc131\uc774 \ub192\uc740 normalized\ub41c \uac00\ub2a5\uc131\uc5d0 \ub530\ub77c \uc644\uc131\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4.'),(0,i.kt)("h2",{id:"31-common-sense-reasoning"},"3.1 Common Sense Reasoning"),(0,i.kt)("h2",{id:"32-closed-book-question-answering"},"3.2 Closed-book Question Answering"),(0,i.kt)("h2",{id:"33-reading-comprehension"},"3.3 Reading Comprehension"),(0,i.kt)("h2",{id:"34-mathematical-reasoning"},"3.4 Mathematical reasoning"),(0,i.kt)("h2",{id:"35-code-generation"},"3.5 Code generation"),(0,i.kt)("h2",{id:"36-massive-multitask-language-understanding"},"3.6 Massive Multitask Language Understanding"),(0,i.kt)("h2",{id:"37-evolution-of-performance-during-training"},"3.7 Evolution of performance during training"),(0,i.kt)("h1",{id:"4-\uba85\ub839\uc5b4-\ud30c\uc778\ud29c\ub2dd"},"4. \uba85\ub839\uc5b4 \ud30c\uc778\ud29c\ub2dd"),(0,i.kt)("h1",{id:"5-\ud3b8\uacac-\ub3c5\uc131\uacfc-\uc798\ubabb\ub41c-\uc815\ubcf4"},"5. \ud3b8\uacac, \ub3c5\uc131\uacfc \uc798\ubabb\ub41c \uc815\ubcf4"),(0,i.kt)("h1",{id:"6-\ud0c4\uc18c\ubc1c\uc790\uad6d"},"6. \ud0c4\uc18c\ubc1c\uc790\uad6d"),(0,i.kt)("h1",{id:"7-\uad00\ub828-\uc5f0\uad6c"},"7. \uad00\ub828 \uc5f0\uad6c"),(0,i.kt)("h1",{id:"8-\uacb0\ub860"},"8. \uacb0\ub860"),(0,i.kt)("p",null,"\uc774 \ub17c\ubb38\uc5d0\uc11c, \uc790\uc720\ub86d\uac8c \uacf5\uac1c\ub41c \uc5b8\uc5b4 \ubaa8\ub378\uc758 \ub098\uc5f4\uacfc, state-of-the-art \uc7ac\ub2e8 \ubaa8\ub378\uc758 \uacbd\uc7c1\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4. \uac00\uc7a5 \uc8fc\ubaa9\ud560\uac83\uc740, LLaMA-13B\ub294 GPT-3\ubcf4\ub2e4 10x \uc791\uc73c\uba70 \ub2a5\uac00\ud558\ub294 \uc131\ub2a5\uc744 \ubcf4\uc600\ub2e4\ub294 \uac83\uacfc, LLaMA-65B\ub294 Chinchilla-70B\uc640 PaLM-540B\uacfc \uacbd\uc7c1\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc774\uc804 \uc5f0\uad6c\uc640\ub294 \ub2e4\ub974\uac8c, \ub3c5\uc810\uc801\uc778 \ub370\uc774\ud130\uc14b\uc5d0 \uc758\uc874\ud558\uc9c0 \uc54a\uace0, \ub300\uc911\uc5d0 \uacf5\uac1c\ub41c \ub370\uc774\ud130\ub9cc \uc0ac\uc6a9\ud574 sota \uc131\ub2a5\uc744 \ub2ec\uc131\ud558\ub294\uac8c \uac00\ub2a5\ud558\ub2e8 \uac83\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4. \uc774 \ubaa8\ub378\uc744 \uc5f0\uad6c \ucee4\ubba4\ub2c8\ud2f0\uc5d0 \uacf5\uac1c\ud558\ub294\uac8c LLM \uac1c\ubc1c\uc744 \uac00\uc18d\ud654\ud558\uace0, \uac15\uac74\ud568\uc744 \uc99d\uac00\uc2dc\ud0a4\uace0 \uc54c\ub824\uc9c4 \ub3c5\uc131\uacfc \ud3b8\uacac\uc744 \uc644\ud654\uc2dc\ud0a4\ub294\ub370 \uae30\uc5ec\ud558\uae38 \ubc14\ub78d\ub2c8\ub2e4. \ucd94\uac00\uc801\uc73c\ub85c, Chung et al. (2022)\uc758 \uc9c0\uce68\uc5d0 \ub530\ub77c \uc774 \ubaa8\ub378\uc744 \ubbf8\uc138 \uc870\uc815\ud558\uba74 \uc720\ub9dd\ud55c \uacb0\uacfc\ub97c \uc5bb\uc744 \uc218 \uc788\ub2e4\ub294\uac83\uc744 \ubcf4\uc558\uace0, \ud6c4\uc18d \uc5f0\uad6c\uc5d0\uc11c \ub354 \uc790\uc138\ud788 \uc870\uc0ac\ud560 \uc608\uc815\uc785\ub2c8\ub2e4. \ucd5c\uc885\uc801\uc73c\ub85c, \uc2a4\ucf00\uc77c\ub9c1\uc5d0\uc11c \uc9c0\uc18d\uc801\uc778 \ud5a5\uc0c1\uc744 \ubcfc \uc218 \uc788\ub294 \ud55c, \ud070 \ub9d0\ubb49\uce58\ub85c \ud559\uc2b5\ud55c \ub354 \ud070 \ubaa8\ub378\uc744 \ud5a5\ud6c4\uc5d0 \uacf5\uac1c\ud560 \uc608\uc815\uc785\ub2c8\ub2e4."))}c.isMDXComponent=!0},65477:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/llama-fd6ebe179d7441254555c0a0614b3551.jpeg"}}]);