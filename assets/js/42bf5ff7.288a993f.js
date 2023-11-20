"use strict";(self.webpackChunkjwher_blog=self.webpackChunkjwher_blog||[]).push([[363],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(r),m=l,k=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(k,o(o({ref:t},s),{},{components:r})):n.createElement(k,o({ref:t},s))}));function k(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:l,o[1]=i;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},52527:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(87462),l=(r(67294),r(3905));const a={authors:["jwher"],description:"Seven Concurrency Models in Seven Weeks - Chapter1",slug:"concurrency-models-1",tags:["tech","parallel computing","distributed computing"],title:"7\uac00\uc9c0 \ub3d9\uc2dc\uc131 \ubaa8\ub378(\uc18c\uac1c)"},o=void 0,i={permalink:"/posts/concurrency-models-1",editUrl:"https://github.com/jwher/jwher.github.io/tree/main/posts/2022-12-12-concurrency-models-1/index.md",source:"@site/posts/2022-12-12-concurrency-models-1/index.md",title:"7\uac00\uc9c0 \ub3d9\uc2dc\uc131 \ubaa8\ub378(\uc18c\uac1c)",description:"Seven Concurrency Models in Seven Weeks - Chapter1",date:"2022-12-12T00:00:00.000Z",formattedDate:"December 12, 2022",tags:[{label:"tech",permalink:"/posts/tags/tech"},{label:"parallel computing",permalink:"/posts/tags/parallel-computing"},{label:"distributed computing",permalink:"/posts/tags/distributed-computing"}],readingTime:5.72,hasTruncateMarker:!0,authors:[{name:"Jeongwon Her",title:"MLOps Engineer",url:"https://github.com/jwher",imageURL:"https://github.com/jwher.png",key:"jwher"}],frontMatter:{authors:["jwher"],description:"Seven Concurrency Models in Seven Weeks - Chapter1",slug:"concurrency-models-1",tags:["tech","parallel computing","distributed computing"],title:"7\uac00\uc9c0 \ub3d9\uc2dc\uc131 \ubaa8\ub378(\uc18c\uac1c)"},prevItem:{title:"7\uac00\uc9c0 \ub3d9\uc2dc\uc131 \ubaa8\ub378(\uc2a4\ub808\ub4dc\uc640 \ub77d) \uc0c1\ud638 \ubc30\uc81c\uc640 \uba54\ubaa8\ub9ac \ubaa8\ub378",permalink:"/posts/concurrency-models-2"},nextItem:{title:"\uc694\uad6c\uc0ac\ud56d\uc5d0 \uc0ac\uc6a9\ud558\ub294 RFC \ud0a4\uc6cc\ub4dc",permalink:"/posts/requirement-levels"}},u={authorsImageUrls:[void 0]},c=[{value:"Concurrent or Parallel?",id:"concurrent-or-parallel",level:2},{value:"\ubcd1\ub82c \uc544\ud0a4\ud14d\ucc98",id:"\ubcd1\ub82c-\uc544\ud0a4\ud14d\ucc98",level:2},{value:"\ube44\ud2b8 \ub808\ubca8",id:"\ube44\ud2b8-\ub808\ubca8",level:3},{value:"\uba85\ub839\uc5b4 \ub808\ubca8",id:"\uba85\ub839\uc5b4-\ub808\ubca8",level:3},{value:"\ub370\uc774\ud130 \ubcd1\ub82c\uc131",id:"\ub370\uc774\ud130-\ubcd1\ub82c\uc131",level:3},{value:"\uc791\uc5c5 \ub808\ubca8",id:"\uc791\uc5c5-\ub808\ubca8",level:3},{value:"\ub3d9\uc2dc\uc131",id:"\ub3d9\uc2dc\uc131",level:2},{value:"Concurrent Software for a Concurrent World",id:"concurrent-software-for-a-concurrent-world",level:3},{value:"Distributed Software for a Distributed World",id:"distributed-software-for-a-distributed-world",level:3},{value:"Resilient Software for an Unpredictable World",id:"resilient-software-for-an-unpredictable-world",level:3},{value:"Simple Software in a Complex World",id:"simple-software-in-a-complex-world",level:3},{value:"\uc77c\uacf1\uac1c\uc758 \ubaa8\ub378",id:"\uc77c\uacf1\uac1c\uc758-\ubaa8\ub378",level:2}],s={toc:c},p="wrapper";function d(e){let{components:t,...a}=e;return(0,l.kt)(p,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/posts/concurrency-models-1"},(0,l.kt)("img",{alt:"concurrency",src:r(24356).Z,width:"456",height:"706"})),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("em",{parentName:"p"},"\uc774 \uae00\uc740 Paul Butcher\uc758 Seven Concurrency Models in Seven Weeks\uc744 \uc77d\uace0 \uc791\uc131\ud588\uc2b5\ub2c8\ub2e4"),"  "),(0,l.kt)("p",null,"As Amdahl\u2019s law starts to eclipse Moore\u2019s law, a transition from object-oriented programming to concurrency-oriented programming is taking place."),(0,l.kt)("h1",{id:"ch1-introduction"},"ch1. introduction"),(0,l.kt)("h2",{id:"concurrent-or-parallel"},"Concurrent or Parallel?"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"\ud1b5\uc0c1 Concurrent\ub294 \ub3d9\uc2dc\uc131, Parallel\uc740 \ubcd1\ub82c\uc131\uc73c\ub85c \ud574\uc11d\ud569\ub2c8\ub2e4")),(0,l.kt)("p",null,"As Rob Pike puts it,"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Concurrency is about dealing with lots of things at once. Parallelism is about doing lots of things at once.")),(0,l.kt)("p",null,"concurrency\ub294 \uc5ec\ub7ec\uac1c\ub97c \ud55c\ubc88\uc5d0 \ub2e4\ub8e8\ub294\uac83, parallel\uc740 \uc5ec\ub7ec\uac1c\uac00 \ud55c\ub54c\uc5d0 \uc9c4\ud589\ub418\ub294 \uac83\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\uc218\uc5c5\uc5d0\uc11c \ud559\uc0dd\uc774 \uc77d\ub294\uac83\uc744 \ub4e4\uc73c\uba74\uc11c, \ubc18\uc744 \uc870\uc6a9\ud788\uc2dc\ud0a4\uace0, \uc9c8\ubb38\uc744 \ud558\ub294\uac83\uc740 concurrent \ud569\ub2c8\ub2e4.\n\ub9cc\uc57d, \ubcf4\uc870 \uc120\uc0dd\ub2d8\uc774 \ud55c\uba85 \ucd94\uac00\ub418\uc5b4 \uac19\uc740 \uc77c\uc744 \ud558\uba74 concurrent\ud558\uace0 parallel \ud558\ub2e4\uace0 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("p",null,"concurrency\ub098 parallelism\uc740 \uc804\ud1b5\uc801\uc778 threads\uc640 locks\uc774 \uc9c1\uc811\uc801\uc778 parallelism\uc744 \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uae30\ub54c\ubb38\uc5d0 \ub354 \ud5f7\uac08\ub9bd\ub2c8\ub2e4.\n\uba40\ud2f0\ucf54\uc5b4\ub97c \uc4f0\ub808\ub4dc\uc640 \ub77d\uc744 \uc0ac\uc6a9\ud558\uace0 \uc2f6\ub2e4\uba74, concurrent \ud504\ub85c\uadf8\ub7a8\uc744 \uc791\uc131\ud574 parallel \ud558\ub4dc\uc6e8\uc5b4\uc5d0\uc11c \ub3cc\ub9ac\ub294 \ubc29\ubc95\ub9cc \uc120\ud0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"concurrent \ud504\ub85c\uadf8\ub7a8\uc740 \uc885\uc885 ",(0,l.kt)("em",{parentName:"p"},"nondeterministic(\ube44\uacb0\uc815\uc801)"),"\ud558\uae30 \ub54c\ubb38\uc5d0 \ubd88\ud589\ud569\ub2c8\ub2e4.\n\ud558\uc9c0\ub9cc parallelism\uc740 \ube44\uacb0\uc815\uc801\uc778 \uac83\uc744 \ub3c4\uc785\ud558\uc9c0 \uc54a\uc544\ub3c4 \ub429\ub2c8\ub2e4. \uc608\ub97c\ub4e4\uc5b4, array\uac00 \uac00\uc9c4 \uc22b\uc790\uac00 \ub450\ubc30\uac00 \ub418\ub294\uac83\uc740 \ube44\uacb0\uc815\uc801\uc778 \uac83\uc774 \uc544\ub2d9\ub2c8\ub2e4. \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4\ub4e4\uc740 \ube44\uacb0\uc815\uc801\uc774\ub77c\ub294 \uacf5\ud3ec\ub97c \ub3c4\uc785\ud558\uc9c0 \uc54a\uc544\ub3c4 parallelism\uc744 \uc704\ud574 \ud2b9\ubcc4\ud55c \uc9c0\uc6d0\uc744 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"\ubcd1\ub82c-\uc544\ud0a4\ud14d\ucc98"},"\ubcd1\ub82c \uc544\ud0a4\ud14d\ucc98"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Pararell Architecture"),"  "),(0,l.kt)("p",null,"parallelism\uc744 \uba40\ud2f0 \ucf54\uc5b4\ub85c \uc0dd\uac01\ud560 \uc218 \uc788\uc9c0\ub9cc, \ud604\ub300 \ucef4\ud4e8\ud130\uc5d0\uc120 parallel\uc744 \ub2e4\uc591\ud55c \ub808\ubca8\uc5d0\uc11c \uc218\ud589\ud569\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"\ube44\ud2b8-\ub808\ubca8"},"\ube44\ud2b8 \ub808\ubca8"),(0,l.kt)("p",null,"32bit \ucef4\ud4e8\ud130\uac00 \uc65c 8bit \ubcf4\ub2e4 \ube60\ub97c\uae4c\uc694? 8bit \ucef4\ud4e8\ud130\uac00 32bit \uc22b\uc790 \ub450\uac1c\ub97c \ub354\ud560\ub824\uba74 8bit \uc5f0\uc0b0 \uc5f0\uc18d\uc774 \ud544\uc694\ud560 \uac83\uc785\ub2c8\ub2e4. \ubc18\ub300\ub85c, 32bit\uac00 8bit \uc22b\uc790 \ub450\uac1c\ub97c \ub354\ud558\ub824\uba74 32bit\uc5d0 \ud3ec\ud568\ub41c 4byte \uac01\uac01\uc73c\ub85c \uacc4\uc0b0\ud574 \ub3d9\uc2dc\uc5d0 \ucc98\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc774\ub807\uac8c 64bit \uc544\ud0a4\ud14d\uccd0\uae4c\uc9c0 \uc654\uc9c0\ub9cc, \uc774\ub7f0 \ubcd1\ub82c\uc131\uc5d4 \uc81c\ud55c\uc774 \uc788\uae30 \ub54c\ubb38\uc5d0 128bit \ucef4\ud4e8\ud130\ub97c \uc870\ub9cc\uac04 \ubcfc \uc21c \uc5c6\uc744\uac83\uc785\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"\uba85\ub839\uc5b4-\ub808\ubca8"},"\uba85\ub839\uc5b4 \ub808\ubca8"),(0,l.kt)("p",null,"pipelining, out-of-order execution, speculative excution\uc73c\ub85c \ud604\ub300 cpu\ub294 \ub192\uc740 \ubcd1\ub82c\uc131\uc744 \uc9c0\ub2d9\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"\ub370\uc774\ud130-\ubcd1\ub82c\uc131"},"\ub370\uc774\ud130 \ubcd1\ub82c\uc131"),(0,l.kt)("p",null,"SIMD, for \u201csingle instruction, multiple data\u201d\n\uc774\ubbf8\uc9c0 \ucc98\ub9ac\uc5d0\uc11c \ub9ce\uc774 \uc0ac\uc6a9, \ud604\ub300\uc758 GPU\ub294 \uc5c4\uccad\ub098\uac8c \uac15\ub825\ud55c data-parallel \ud504\ub85c\uc138\uc11c \uc785\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"\uc791\uc5c5-\ub808\ubca8"},"\uc791\uc5c5 \ub808\ubca8"),(0,l.kt)("p",null,"\uac00\uc7a5 \ub9ce\uc740 \uc0ac\ub78c\ub4e4\uc774 \uc0dd\uac01\ud558\ub294 \ubcd1\ub82c\ucc98\ub9ac \ub2e8\uacc4\uc785\ub2c8\ub2e4. \uba40\ud2f0 \ud504\ub85c\uc138\uc11c\ub85c \uc774\ub8e8\uc5b4\uc9d1\ub2c8\ub2e4.\n\ud504\ub85c\uadf8\ub798\uba38\uc758 \uad00\uc810\uc73c\ub85c \ubcf4\uba74, \uac00\uc7a5 \uad6c\ubd84\ub418\ub294 \ud2b9\uc9d5\uc740 \uba54\ubaa8\ub9ac \ubaa8\ub378\uc785\ub2c8\ub2e4.\n\uacf5\uc720 \uba54\ubaa8\ub9ac \uad6c\uc870\ub97c \uac00\uc9c0\ub294\uac00, \ubd84\uc0b0 \uba54\ubaa8\ub9ac \uad6c\uc870\ub97c \uac00\uc9c0\ub294\uac00\uc758 \ucc28\uc774\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"shared memory",src:r(92762).Z,width:"1314",height:"844"}),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("em",{parentName:"p"},"\uacf5\uc720\uba54\ubaa8\ub9ac\ub97c \ud1b5\ud55c \ubcd1\ub82c\uc131"),"  "),(0,l.kt)("br",null),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"distributed memory",src:r(18373).Z,width:"1302",height:"584"}),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("em",{parentName:"p"},"\ubd84\uc0b0\uba54\ubaa8\ub9ac\ub97c \ud1b5\ud55c \ubcd1\ub82c\uc131")),(0,l.kt)("h2",{id:"\ub3d9\uc2dc\uc131"},"\ub3d9\uc2dc\uc131"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Concurrency"),"  "),(0,l.kt)("p",null,"\ub3d9\uc2dc\uc131\uc744 \uc0ac\uc6a9\ud558\uba74 \ub354 responsive(\ubc18\uc751\uc801)\ud558\uace0, fault tolerant(\uc624\ub958 \ubb34\uacb0), efficient(\ud6a8\uc728\uc801), simple(\ub2e8\uc21c)\ud569\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"concurrent-software-for-a-concurrent-world"},"Concurrent Software for a Concurrent World"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Concurrency is the key to responsive systems."),"  "),(0,l.kt)("p",null,"The world is concurrent, and so should your software be if it wants to interact effectively."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"By downloading files in the background, you avoid frustrated users having to stare at an hourglass cursor.")),(0,l.kt)("h3",{id:"distributed-software-for-a-distributed-world"},"Distributed Software for a Distributed World"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"distributing software helps it handle failure."),"  "),(0,l.kt)("p",null,"Sometimes geographical distribution is a key element of the problem you\u2019re solving."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"}," You might locate half your servers in a data center in Europe and the others in the United States, so that a power outage at one site doesn\u2019t result in global downtime.")),(0,l.kt)("h3",{id:"resilient-software-for-an-unpredictable-world"},"Resilient Software for an Unpredictable World"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Concurrency enables resilient, or fault-tolerant"),"  "),(0,l.kt)("p",null,"Independence is important because a failure in one task should not be able to bring down another."),(0,l.kt)("h3",{id:"simple-software-in-a-complex-world"},"Simple Software in a Complex World"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"it might be hard to believe, but a concurrent solution can be simpler and clearer")),(0,l.kt)("p",null,"The extra work required to translate from the concurrent problem to its sequential solution clouds the issue.\nYou can avoid this extra work by creating a solution with the same structure as the problem:\nrather than a single complex thread that tries to handle multiple tasks when they need it, create one simple thread for each."),(0,l.kt)("h2",{id:"\uc77c\uacf1\uac1c\uc758-\ubaa8\ub378"},"\uc77c\uacf1\uac1c\uc758 \ubaa8\ub378"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"thread and locks"),(0,l.kt)("li",{parentName:"ul"},"functional programming"),(0,l.kt)("li",{parentName:"ul"},"the clojure way"),(0,l.kt)("li",{parentName:"ul"},"actors"),(0,l.kt)("li",{parentName:"ul"},"communicating sequential processes"),(0,l.kt)("li",{parentName:"ul"},"data parallelism"),(0,l.kt)("li",{parentName:"ul"},"the lambda architecture")),(0,l.kt)("p",null,"\uac01 \ubaa8\ub378\uc740 \ub2e4\ub978 \uc7a5\uc810\uc744 \uc9c0\ub2c8\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc55e\uc73c\ub85c\uc758 \ucc55\ud130\uc5d0\uc11c \ub2e4\uc74c \uc9c8\ubb38\uc744 \uae30\uc5b5\ud569\uc2dc\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ubaa8\ub378\uc774 \ub3d9\uc2dc\uc131 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\ub294\uc9c0, \ubcd1\ub82c\uc131 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\ub294\uc9c0, \ub458\ub2e4\uc778\uc9c0"),(0,l.kt)("li",{parentName:"ul"},"\uc5b4\ub5a4 \ubcd1\ub82c\uc131 \uc544\ud0a4\ud14d\ucc98\ub97c \ud0c0\uae43\uc73c\ub85c \ud558\ub294\uc9c0"),(0,l.kt)("li",{parentName:"ul"},"\ubaa8\ub378\uc774 \ud0c4\ub825\uc801\uc774\uac70\ub098 \uc9c0\ub9ac\ud559\uc801\uc73c\ub85c \ubd84\uc0b0\ub41c \ucf54\ub4dc \uc791\uc131\uc744 \uc81c\uacf5\ud558\ub294\uc9c0")))}d.isMDXComponent=!0},18373:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/distributed_memory-cd7729d3e35f3e36c635eaaa9c6a85b8.png"},24356:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/seven-plate-4b5359f57c5a2fed7996002037f5fcff.png"},92762:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/shared_memory-ccbb9e45ca6de69a80e677596262853f.png"}}]);