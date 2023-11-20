"use strict";(self.webpackChunkjwher_blog=self.webpackChunkjwher_blog||[]).push([[9465],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},k=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,c=s["".concat(o,".").concat(d)]||s[d]||m[d]||l;return n?a.createElement(c,p(p({ref:t},k),{},{components:n})):a.createElement(c,p({ref:t},k))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[s]="string"==typeof e?e:r,p[1]=i;for(var u=2;u<l;u++)p[u]=n[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46199:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={authors:["jwher"],description:"Kubernetes Architecture",slug:"kubernetes-architecture",tags:["tech","kubernetes","linux"],title:"\ucfe0\ubc84\ub124\ud2f0\uc2a4 \uc544\ud0a4\ud14d\ucc98"},p=void 0,i={permalink:"/posts/kubernetes-architecture",editUrl:"https://github.com/jwher/jwher.github.io/tree/main/posts/2021-09-01-kubernetes-architecture/index.md",source:"@site/posts/2021-09-01-kubernetes-architecture/index.md",title:"\ucfe0\ubc84\ub124\ud2f0\uc2a4 \uc544\ud0a4\ud14d\ucc98",description:"Kubernetes Architecture",date:"2021-09-01T00:00:00.000Z",formattedDate:"September 1, 2021",tags:[{label:"tech",permalink:"/posts/tags/tech"},{label:"kubernetes",permalink:"/posts/tags/kubernetes"},{label:"linux",permalink:"/posts/tags/linux"}],readingTime:17.61,hasTruncateMarker:!0,authors:[{name:"Jeongwon Her",title:"MLOps Engineer",url:"https://github.com/jwher",imageURL:"https://github.com/jwher.png",key:"jwher"}],frontMatter:{authors:["jwher"],description:"Kubernetes Architecture",slug:"kubernetes-architecture",tags:["tech","kubernetes","linux"],title:"\ucfe0\ubc84\ub124\ud2f0\uc2a4 \uc544\ud0a4\ud14d\ucc98"},prevItem:{title:"Intelligent Computer Vision 1",permalink:"/posts/Intelligent-Computer-Vision-1"},nextItem:{title:"Kubeflow Guide",permalink:"/posts/kubeflow-guide"}},o={authorsImageUrls:[void 0]},u=[{value:"\ub178\ub4dc",id:"\ub178\ub4dc",level:2},{value:"\ud30c\ub4dc",id:"\ud30c\ub4dc",level:2},{value:"\uc11c\ube44\uc2a4",id:"\uc11c\ube44\uc2a4",level:2},{value:"\uc790\uccb4 IP \uc8fc\uc18c",id:"\uc790\uccb4-ip-\uc8fc\uc18c",level:3},{value:"\ucfe0\ubc84\ub124\ud2f0\uc2a4 \ud074\ub7ec\uc2a4\ud130 DNS",id:"\ucfe0\ubc84\ub124\ud2f0\uc2a4-\ud074\ub7ec\uc2a4\ud130-dns",level:3},{value:"\ub85c\ub4dc \ubc38\ub7f0\uc2f1 \uaddc\uce59",id:"\ub85c\ub4dc-\ubc38\ub7f0\uc2f1-\uaddc\uce59",level:3},{value:"\uc2a4\ud1a0\ub9ac\uc9c0",id:"\uc2a4\ud1a0\ub9ac\uc9c0",level:2},{value:"\ud37c\uc2dc\uc2a4\ud134\ud2b8 \ubcfc\ub968",id:"\ud37c\uc2dc\uc2a4\ud134\ud2b8-\ubcfc\ub968",level:3},{value:"\ucee8\ud53c\uadf8\ub9f5",id:"\ucee8\ud53c\uadf8\ub9f5",level:3},{value:"\uc2dc\ud06c\ub9bf",id:"\uc2dc\ud06c\ub9bf",level:3},{value:"\uc778\uadf8\ub808\uc2a4",id:"\uc778\uadf8\ub808\uc2a4",level:2},{value:"\ub808\ud50c\ub9ac\uce74\uc14b",id:"\ub808\ud50c\ub9ac\uce74\uc14b",level:2},{value:"\ub514\ud50c\ub85c\uc774\uba3c\ud2b8",id:"\ub514\ud50c\ub85c\uc774\uba3c\ud2b8",level:2},{value:"\uc2a4\ud14c\uc774\ud2b8\ud480\uc14b",id:"\uc2a4\ud14c\uc774\ud2b8\ud480\uc14b",level:2},{value:"\ub124\uc784\uc2a4\ud398\uc774\uc2a4",id:"\ub124\uc784\uc2a4\ud398\uc774\uc2a4",level:2},{value:"\ub808\uc774\ube14",id:"\ub808\uc774\ube14",level:2},{value:"\uc5b4\ub178\ud14c\uc774\uc158",id:"\uc5b4\ub178\ud14c\uc774\uc158",level:2},{value:"etcd",id:"etcd",level:2},{value:"api \uc11c\ubc84",id:"api-\uc11c\ubc84",level:2},{value:"\uc2a4\ucf00\uc904\ub7ec",id:"\uc2a4\ucf00\uc904\ub7ec",level:2},{value:"\ucee8\ud2b8\ub864\ub7ec \uad00\ub9ac\uc790",id:"\ucee8\ud2b8\ub864\ub7ec-\uad00\ub9ac\uc790",level:2},{value:"\ucfe0\ube14\ub81b",id:"\ucfe0\ube14\ub81b",level:2},{value:"kube-proxy",id:"kube-proxy",level:2},{value:"Tips",id:"tips",level:2},{value:"References",id:"references",level:2}],k={toc:u},s="wrapper";function m(e){let{components:t,...l}=e;return(0,r.kt)(s,(0,a.Z)({},k,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kubernetes",src:n(91635).Z,width:"723",height:"702"}),"\n",(0,r.kt)("em",{parentName:"p"},"\ucfe0\ubc84\ub124\ud2f0\uc2a4 \uc544\ud0a4\ud14d\ucc98"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("em",{parentName:"p"},"\uc774 \uae00\uc740 \ucfe0\ubc84\ub124\ud2f0\uc2a4\uc758 \ucc3d\uc2dc\uc790 \uc911 \ud55c\uba85\uc778 \ube0c\ub80c\ub358 \ubc88\uc2a4\uc758 \ub9e4\ub2c8\uc9d5 \ucfe0\ubc84\ub124\ud2f0\uc2a4\ub97c \ucc38\uace0\ud574 \uc791\uc131\ud588\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("h1",{id:"\uae30\ubcf8-\uac1c\ub150"},"\uae30\ubcf8 \uac1c\ub150"),(0,r.kt)("p",null,"\uc774 \ub2e8\ub77d\uc5d0\uc11c\ub294 \ucfe0\ubc84\ub124\ud2f0\uc2a4\uc758 \uae30\ubcf8 \uad6c\uc131 \uc694\uc18c\uc778 \ub178\ub4dc(node), \ud30c\ub4dc(pod), \uc11c\ube44\uc2a4(Service), \ud37c\uc2dc\uc2a4\ud134\ud2b8 \ubcfc\ub968(Persistent Volume), \ucee8\ud53c\uadf8\ub9f5(ConfigMap), \uc2dc\ud06c\ub9bf(Secret)\uc744 \uc124\uba85\ud569\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"\ub178\ub4dc"},"\ub178\ub4dc"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Node"),(0,r.kt)("br",{parentName:"p"}),"\n","Docker \ub370\ubaac\uc774 \ub3d9\uc791\ud558\ub294 \ud638\uc2a4\ud2b8\ub85c \uac00\uc0c1(virtual) \ub610\ub294 \ubb3c\ub9ac(physical) \uba38\uc2e0\uc744 \ub9d0\ud569\ub2c8\ub2e4.\n\ucfe0\ubc84\ub124\ud2f0\uc2a4\ub294 \ud558\ub098 \uc774\uc0c1\uc758 \ub9c8\uc2a4\ud130\uc640 \uc6cc\ucee4(\uc2ac\ub808\uc774\ube0c, \ubbf8\ub2c8\uc5b8) \ub178\ub4dc\ub85c \uad6c\uc131\ub429\ub2c8\ub2e4.\n\uc774\uc911 \ud074\ub7ec\uc2a4\ud130 \uc81c\uc5b4\uc6a9 \ud504\ub85c\uadf8\ub7a8\uc774 \ub3d9\uc791(API)\ud558\ub294 \ub178\ub4dc\uac00 \ub9c8\uc2a4\ud130 \ub178\ub4dc\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub178\ub4dc taint\ub97c \uc81c\uac70\ud574 \ub9c8\uc2a4\ud130/\uc6cc\ucee4(\ubbf8\ub2c8\uc5b8)\uc744 \uacb8\uc6a9 \uac00\ub2a5\ud558\ub098 \uc77c\ubc18\uc801\uc73c\ub85c \uadf8\ub807\uac8c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"\ud30c\ub4dc"},"\ud30c\ub4dc"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"pod\ub294 \uace0\ub798 \ub5bc\ub97c \ub9d0\ud569\ub2c8\ub2e4"),(0,r.kt)("br",{parentName:"p"}),"\n","\ud30c\ub4dc\ub294 \ucfe0\ubc84\ub124\ud2f0\uc2a4\uc758 \uac00\uc7a5 \uc791\uc740 \ub2e8\uc704\uc774\uc790 \ucee8\ud14c\uc774\ub108\uc758 \ucd94\uc131\uc73c\ub85c ",(0,r.kt)("strong",{parentName:"p"},"\ud558\ub098")," \ub610\ub294 \uae34\ubc00\ud558\uac8c \uc5f0\uacc4\ub418\ub294 ",(0,r.kt)("strong",{parentName:"p"},"\ucee8\ud14c\uc774\ub108 \uc138\ud2b8"),"\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\ud30c\ub4dc\ub294 \uac01\uac01 \ud558\ub098\uc758 \uc0ac\uc124 ip\ub97c \ud560\ub2f9\ubc1b\uace0, \uac19\uc740 \ud30c\ub4dc \uc548\uc758 \ucee8\ud14c\uc774\ub108\ub294 \ub8e8\ud504\ubc31 \ub124\ud2b8\uc6cc\ud06c(localhost)\ub85c \ud1b5\uc2e0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\ub610\ud55c \ud504\ub85c\uc138\uc2a4, IPC\uc640 \ub124\uc784\uc2a4\ud398\uc774\uc2a4\ub97c \uacf5\uc720\ud558\uace0 \uc788\uc5b4 \uacf5\uc720 \uba54\ubaa8\ub9ac\ub098 \uc2dc\uadf8\ub110\ub9c1 \ud234\uc744 \uc0ac\uc6a9\ud574\n\ud30c\ub4dc\uc758 \uc5ec\ub7ec \ud504\ub85c\uc138\uc2a4\ub97c \uc81c\uc5b4\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ud30c\ub4dc\ub294 \ud558\ub098\uc758 \ucee8\ud14c\uc774\ub108\uc77c \uc218\ub3c4, \ud55c \uc2dc\uc2a4\ud15c\uc77c \uc218\ub3c4 \uc788\uc5b4 \ud5f7\uac08\ub9b4 \uc218 \uc788\uc2b5\ub2c8\ub2e4\n(\uc77c\ubc18\uc801\uc73c\ub85c \ud558\ub098\uc758 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\ub9cc \uc0ac\uc6a9\ud569\ub2c8\ub2e4).\n\ucfe0\ubc84\ub124\ud2f0\uc2a4\uc5d0\uc11c \ud30c\ub4dc\ub294 \uc2a4\ucf00\uc77c\ub9c1\uacfc \ubcf5\uc81c\uc758 \ub2e8\uc704\uc785\ub2c8\ub2e4.\n\ud30c\ub4dc\ub294 \ub514\ud50c\ub85c\uc774\uba3c\ud2b8\uc5d0 \uae30\uc220\ud574 \uc0c1\ud0dc\uc640 \ub808\ud50c\ub9ac\uce74\ub97c \uad00\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc8fc\uc758\ud574\uc57c\ud560 \uc810\uc740, \ud30c\ub4dc\ub294 \ub2e8\uba85(ephemeral) \ud558\ub294 \ud2b9\uc9d5\uc744 \uc9c0\ub154\ub2e4\ub294 \uac83\uc785\ub2c8\ub2e4.\n\uc774\ub294 \ub178\ub4dc\uc5d0 \ubb38\uc81c\uac00 \uc0dd\uae30\uac70\ub098, \uc790\uc6d0\uc774 \ubaa8\uc790\ub77c\uba74 \ucfe0\ubc84\ub124\ud2f0\uc2a4\uac00 \ud30c\ub4dc\ub97c \ub2e4\ub978 \uacf3\uc5d0 \ud560\ub2f9\ud560 \uc218 \uc788\ub2e4\ub294 \ub73b\uc785\ub2c8\ub2e4.\n\uc774\ub54c \uc0ac\uc6a9\ud558\ub358 \ub370\uc774\ud130\uc640 \ud560\ub2f9\ub41c \uc0ac\uc124 IP\uac00 \ubc14\ub00c\uace0 \ud30c\ub4dc\uac04 \ud1b5\uc2e0\uc5d0 \ubb38\uc81c\uac00 \uc0dd\uae38 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\ub2e4\uc74c \ub2e8\ub77d\uc5d0\uc11c \uc774 \ubb38\uc81c\ub97c \uc5b4\ub5bb\uac8c \ud574\uacb0\ud558\ub294\uc9c0 \ud655\uc778\ud574 \ubd05\uc2dc\ub2e4."),(0,r.kt)("h2",{id:"\uc11c\ube44\uc2a4"},"\uc11c\ube44\uc2a4"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Service"),(0,r.kt)("br",{parentName:"p"}),"\n","\uc11c\ube44\uc2a4\ub294 \uac01 \ud30c\ub4dc\uc5d0 \uace0\uc815 IP \uc8fc\uc18c\ub97c \ubd99\uc77c \uc218 \uc788\ub294 \uc694\uc18c\uc785\ub2c8\ub2e4.\n\ud30c\ub4dc\uc640 \uc11c\ube44\uc2a4\uc758 \uc0dd\uba85\uc8fc\uae30\ub294 \uc5f0\uacb0\ub418\uc9c0 \uc54a\uae30\ub54c\ubb38\uc5d0, \ud30c\ub4dc\uc758 \ubcc0\uacbd\uc5d0\ub3c4 \uc11c\ube44\uc2a4\ub294 \uace0\uc815\ub41c \uc8fc\uc18c\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4.\n\uc815\ud655\ud788\ub294 ",(0,r.kt)("a",{parentName:"p",href:"#%EB%A0%88%ED%94%8C%EB%A6%AC%EC%B9%B4%EC%85%8B"},(0,r.kt)("em",{parentName:"a"},"\ub808\ud50c\ub9ac\uce74\uc14b")),"\uc73c\ub85c \uc0dd\uc131\ub41c \ub85c\ub4dc\ubc38\ub7f0\uc11c\uc758 \uc5d4\ub4dc\ud3ec\uc778\ud2b8\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub610\ud55c, \uc11c\ube44\uc2a4\ub294 TCP/UDP\uc5d0 \uc5c6\ub294 \ub2e4\uc74c \uc138\uac00\uc9c0\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\uc790\uccb4-ip-\uc8fc\uc18c"},"\uc790\uccb4 IP \uc8fc\uc18c"),(0,r.kt)("p",null,"\uac00\uc0c1 IP \uc8fc\uc18c\ub85c \ub124\ud2b8\uc6cc\ud06c \uc778\ud130\ud398\uc774\uc2a4\uc640 \uc77c\uce58\ud558\uc9c0\ub294 \uc54a\uc2b5\ub2c8\ub2e4.\n\ub300\uc2e0 \ub85c\ub4dc \ubc38\ub7f0\uc2f1\ub420 IP \uc8fc\uc18c\ub85c \ub124\ud2b8\uc6cc\ud06c \ud328\ube0c\ub9ad\uc5d0 \ud504\ub85c\uadf8\ub798\ubc0d \ub429\ub2c8\ub2e4.\n\ub124\ud2b8\uc6cc\ud06c \ud328\ube0c\ub9ad\uc740 \ub808\ud50c\ub9ac\uce74\uc14b\uc5d0 \ub530\ub77c \ub3d9\uc801\uc73c\ub85c \uc7ac\ud504\ub85c\uadf8\ub798\ubc0d \ub429\ub2c8\ub2e4.\n\uc989, Service IP \uc8fc\uc18c \uc5f0\uacb0\uc740 \uc2e0\ub8b0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\ucfe0\ubc84\ub124\ud2f0\uc2a4-\ud074\ub7ec\uc2a4\ud130-dns"},"\ucfe0\ubc84\ub124\ud2f0\uc2a4 \ud074\ub7ec\uc2a4\ud130 DNS"),(0,r.kt)("p",null,"\ud074\ub7ec\uc2a4\ud130\uc758 \ub2e4\ub978 \ucee8\ud14c\uc774\ub108\uac00 ",(0,r.kt)("inlineCode",{parentName:"p"},"name.namespace.svc"),"\ub85c DNS\ub97c \uc774\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\ub85c\ub4dc-\ubc38\ub7f0\uc2f1-\uaddc\uce59"},"\ub85c\ub4dc \ubc38\ub7f0\uc2f1 \uaddc\uce59"),(0,r.kt)("p",null,"\uaddc\uce59\uc744 \uc815\ud558\uc9c0 \uc54a\uc73c\uba74 \ub77c\uc6b4\ub4dc \ub85c\ube48\uc774\ub098 \ub300\uc0c1 IP \uc8fc\uc18c \ud29c\ud50c\uc5d0 \uae30\ubc18\ud574 \uacb0\uc815\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"overview",src:n(36761).Z,width:"896",height:"856"}),"\n",(0,r.kt)("em",{parentName:"p"},"\ucfe0\ubc84\ub124\ud2f0\uc2a4 \uad6c\uc131 \uc694\uc18c \ubb18\uc0ac"),"  "),(0,r.kt)("h2",{id:"\uc2a4\ud1a0\ub9ac\uc9c0"},"\uc2a4\ud1a0\ub9ac\uc9c0"),(0,r.kt)("p",null,"\ucd08\uae30 \ubcfc\ub968 \uc778\ud130\ud398\uc774\uc2a4\ub294 \ucf54\ub4dc\ub97c \uc791\uc131\ud574 \ud655\uc7a5\uc774 \uac00\ub2a5\ud588\uc2b5\ub2c8\ub2e4.\n\uc774\uc81c\ub294 \ucfe0\ubc84\ub124\ud2f0\uc2a4 \uc678\ubd80\uc5d0\uc11c \uac1c\ubc1c\ud574 \ucee8\ud14c\uc774\ub108 \uc2a4\ud1a0\ub9ac\uc9c0 \uc778\ud130\ud398\uc774\uc2a4(CSI)\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4.\n\uc774\ub294 \uc774\uc2dd\uc131\uacfc \uc790\ub3d9 \ubcfc\ub968 \uc0dd\uc131\uc744 \ubaa8\ub450 \uac00\ub2a5\ud558\uac8c \ud569\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\ud37c\uc2dc\uc2a4\ud134\ud2b8-\ubcfc\ub968"},"\ud37c\uc2dc\uc2a4\ud134\ud2b8 \ubcfc\ub968"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"persistent volume"),(0,r.kt)("br",{parentName:"p"}),"\n","\uad6c\uccb4\uc801\uc778 \uc81c\uacf5\uc790\ub97c \uc9c0\uc815\ud558\uc9c0 \uc54a\uace0 \uc77c\ubc18\uc801\uc778 \uc2a4\ud1a0\ub9ac\uc9c0\ub97c \uc694\uccad\ud558\ub294 \uacbd\uc6b0,\n\ud30c\ub4dc \uc815\uc758\uac00 \ud544\uc694\ud569\ub2c8\ub2e4. \uc774\ub97c \uc704\ud574 pv\uc640 pvc(persistent volume claim)\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc2a4\ud1a0\ub9ac\uc9c0\ub294 \uac19\uc740 \ud658\uacbd(local) \ubfd0\ub9cc \uc544\ub2c8\ub77c, \ud074\ub7ec\uc2a4\ud130 \ubc16\uc758 \uc678\ubd80 \uc2a4\ud1a0\ub9ac\uc9c0\ub3c4 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uc8fc\uc758\ud560\uc810\uc740, \ucfe0\ubc84\ub124\ud2f0\uc2a4\ub294 \uc774\ub4e4\uc744 \uad00\ub9ac\ud558\uc9c0 \uc54a\ub294\ub2e4\ub294 \uac83\uc785\ub2c8\ub2e4. "),(0,r.kt)("h3",{id:"\ucee8\ud53c\uadf8\ub9f5"},(0,r.kt)("a",{parentName:"h3",href:"/posts/k8s-tip-configmap"},"\ucee8\ud53c\uadf8\ub9f5")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"ConfigMap"),(0,r.kt)("br",{parentName:"p"}),"\n","\ucee8\ud53c\uadf8\ub9f5\uc740 \uc678\ubd80 \uc124\uc815(External Configuration)\uc758 \ubaa8\uc74c\uc744 \ub098\ud0c0\ub0c5\ub2c8\ub2e4.\n\ud30c\ub4dc\uc5d0 \ucee8\ud53c\uadf8\ub9f5 \uae30\ubc18 \ubcfc\ub968\uc744 \ucd94\uac00\ud558\uba74 \uc2e4\ud589\uc911\uc778 \ucee8\ud14c\uc774\ub108\uc758 \uc9c0\uc815\ub41c \ub514\ub809\ud130\ub9ac\uc5d0 \ub098\ud0c0\ub0a9\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\uc2dc\ud06c\ub9bf"},"\uc2dc\ud06c\ub9bf"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Secret"),(0,r.kt)("br",{parentName:"p"}),"\n","\uc2dc\ud06c\ub9bf\uc740 \ubcfc\ub968 \ucee8\ud14d\uc2a4\ud2b8 \uc548\uc5d0\uc11c \ucee8\ud53c\uadf8\ub9f5\uacfc \ub3d9\uc77c\ud569\ub2c8\ub2e4.\n\ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc554\ud638 \ubc0f \uc778\uc99d\uc11c\uc640 \uac19\uc740 \ubcf4\uc548 \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud569\ub2c8\ub2e4."),(0,r.kt)("hr",null),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("h1",{id:"\uace0\uae09-\uac1c\ub150"},"\uace0\uae09 \uac1c\ub150"),(0,r.kt)("p",null,"\uc774 \ub2e8\ub77d\uc5d0\uc11c\ub294 \uc778\uadf8\ub808\uc2a4(Ingress), \ub808\ud50c\ub9ac\uce74\uc14b(Replicaset), \ub514\ud50c\ub85c\uc774\uba3c\ud2b8(Deployment), \uc2a4\ud14c\uc774\ud2b8\ud480\uc14b(StatefulSet)\uc744 \uc124\uba85\ud569\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"\uc778\uadf8\ub808\uc2a4"},"\uc778\uadf8\ub808\uc2a4"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Ingress"),(0,r.kt)("br",{parentName:"p"}),"\n","\uc11c\ube44\uc2a4\ub85c \uac04\ub2e8\ud55c TCP \uc218\uc900\uc758 \ub85c\ub4dc \ubc38\ub7f0\uc2f1\uacfc \ub178\ub4dc \ud3ec\ud2b8\ub97c \uc9c0\uc815\ud574 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ub178\ucd9c\uc2dc\ud0ac \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uc774\ub294 \ub0b4\ubd80 \uc11c\ube44\uc2a4\uc5d0\uc11c \ud655\uc778\ud558\uae30 \uc720\uc6a9\ud560 \uc218 \uc788\uc9c0\ub9cc,\n\uac01 \ub178\ub4dc\uc758 IP \uc8fc\uc18c\uc640 \ud3ec\ud2b8\ub97c \uc0ac\uc6a9\ud558\ub294\uac83\uc740 \uc678\ubd80 \uc11c\ube44\uc2a4\uc5d0 \ubd80\uc801\ud569\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub300\ubd80\ubd84 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc740 HTTP \uc6f9 \uae30\ubc18\uc774\uae30 \ub54c\ubb38\uc5d0 HTTP \ub85c\ub4dc \ubc38\ub7f0\uc11c\uac00 \ud544\uc694\ud569\ub2c8\ub2e4.\n\uc778\uadf8\ub808\uc2a4\ub294 \uac00\uc0c1 IP \uc8fc\uc18c\ub97c \ubc1b\uc544 HTTP \uc694\uccad \ub0b4\uc6a9\uc744 \ud655\uc778\ud574 \uc11c\ube44\uc2a4\ub85c \ub77c\uc6b0\ud305 \ud574\uc8fc\ub294 \uc5ed\ud560\uc744 \ud569\ub2c8\ub2e4."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"example-ingress.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: extensions/v1beta1\nkind: Ingress\nmetadata:\n  annotations:\n    ingress.kubernetes.io/proxy-body-size: "0"\n    ingress.kubernetes.io/ssl-redirect: "true"\n    meta.helm.sh/release-name: harbor\n    meta.helm.sh/release-namespace: harbor\n    nginx.ingress.kubernetes.io/proxy-body-size: "0"\n    nginx.ingress.kubernetes.io/ssl-redirect: "true"\n  generation: 1\n  labels:\n    app: harbor\n    app.kubernetes.io/managed-by: Helm\n    chart: harbor\n    heritage: Helm\n    release: harbor\n  name: harbor-ingress\n  namespace: harbor\n  resourceVersion: "9589535"\n  selfLink: /apis/extensions/v1beta1/namespaces/harbor/ingresses/harbor-ingress\n  uid: 02d7bb0c-12e0-44fc-9a38-1ec2f921b675\nspec:\n  rules:\n  - host: core.harbor.192.168.1.161.nip.io\n    http:\n      paths:\n      - backend:\n          serviceName: harbor-portal\n          servicePort: 80\n        path: /\n      - backend:\n          serviceName: harbor-core\n          servicePort: 80\n        path: /api/\n      - backend:\n          serviceName: harbor-core\n          servicePort: 80\n        path: /service/\n      - backend:\n          serviceName: harbor-core\n          servicePort: 80\n        path: /v2\n      - backend:\n          serviceName: harbor-core\n          servicePort: 80\n        path: /chartrepo/\n      - backend:\n          serviceName: harbor-core\n          servicePort: 80\n        path: /c/\nstatus:\n  loadBalancer:\n    ingress:\n    - ip: 192.168.1.161\n'))),(0,r.kt)("h2",{id:"\ub808\ud50c\ub9ac\uce74\uc14b"},"\ub808\ud50c\ub9ac\uce74\uc14b"),(0,r.kt)("p",null,"\uc218\ud3c9\uc801 \ud655\uc7a5(\uc2a4\ucf00\uc77c \uc544\uc6c3)\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.\n\uacfc\uac70 \ubc84\uc804\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"Replication Controller"),"\ub97c \uc0ac\uc6a9\ud558\uc600\uace0 \ud558\uc704 \ud638\ud658\uc131\uc744 \uc704\ud574 \uc874\uc7ac\ud558\ub098,\n\ud604\uc7ac\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"Replica Set"),"\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4.\n\ub808\ud50c\ub9ac\uce74\ub294 \ub2e4\ub978 \ub808\ud50c\ub9ac\uce74\uc640 \uad6c\ubcc4\ub418\ub294 \uace0\uc720\ud55c ID\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.\n\ub808\ud50c\ub9ac\uce74\uc14b\uc740 \ubcf5\uc81c\ub41c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uad6c\ubd84\ud558\ub294 \ubc29\ubc95\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"\ub514\ud50c\ub85c\uc774\uba3c\ud2b8"},"\ub514\ud50c\ub85c\uc774\uba3c\ud2b8"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Deployment"),(0,r.kt)("br",{parentName:"p"}),"\n","\ud30c\ub4dc\uc640 \uac19\uc740 \uad6c\uc131\uc694\uc18c \ubc30\ud3ec \ub0b4\uc6a9\uc5d0 \ub300\ud55c \uccad\uc0ac\uc9c4\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.\n\ub514\ud50c\ub85c\uc774\uba3c\ud2b8\ub97c \ud1b5\ud574 \uc0ac\uc6a9\ubd88\uac00\ub2a5\ud55c \ud30c\ub4dc\ub294 \ub2e4\ub978 \ub178\ub4dc\uc5d0 \uc2a4\ucf00\uc904\ub9c1 \ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\ub610\ud55c \uc5ec\ub7ec \ub178\ub4dc\uc5d0 \ub808\ud50c\ub9ac\uce74\ub97c \uc0dd\uc131\ud574 \uc2a4\ucf00\uc77c \ub2e4\uc6b4\uacfc \uc5c5\uc744 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub808\ud50c\ub9ac\uce74\uc14b \ubc84\uc804\uc758 \uc548\uc804\ud55c \ub864\uc544\uc6c3\uc744 \uc9c0\uc6d0\ud558\uae30 \uc704\ud574 \ucd94\uac00\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"example-deployment.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  annotations:\n  labels:\n    app: myapp\n  name: myapp\n  namespace: mynamespace\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: myapp\n  template:\n    metadata:\n      labels:\n        app: myapp\n    spec:\n      containers:\n        image: jwher/myapp\n        imagePullPolicy: IfNotPresent\n        name: server\n        ports:\n        - containerPort: 5000\n          protocol: TCP\n"))),(0,r.kt)("h2",{id:"\uc2a4\ud14c\uc774\ud2b8\ud480\uc14b"},"\uc2a4\ud14c\uc774\ud2b8\ud480\uc14b"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Stateful Set"),(0,r.kt)("br",{parentName:"p"}),"\n","\ud558\uc9c0\ub9cc, \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc640 \uac19\uc774 \uc800\uc7a5\ub41c \ub370\uc774\ud130 ",(0,r.kt)("strong",{parentName:"p"},"\uc0c1\ud0dc"),"\uac00 \ud544\uc694\ud55c \ud30c\ub4dc\uac00 \uc788\uc2b5\ub2c8\ub2e4.\n\uc774\ub54c \ub370\uc774\ud130 \ubd80\uc815\ud569\uc744 \ubc29\uc9c0\ud558\uae30 \uc704\ud574 \uc2a4\ud1a0\ub9ac\uc9c0\uc5d0 \uc5b4\ub5a4 \ud30c\ub4dc\uac00 \uc4f0\uae30\uac00 \uac00\ub2a5\ud55c\uc9c0 \uacb0\uc815\ud574\uc918\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub808\ud50c\ub9ac\uce74\uc14b\uc73c\ub85c \ud45c\ud604\ud560 \uc218 \uc788\uc9c0\ub9cc, \ucd5c\uc885 \uc0ac\uc6a9\uc790\uc5d0\uac8c \ubcf5\uc7a1\ud558\uace0, \uc624\ub958\uac00 \ub098\uae30 \uc26c\uc6b0\uba70, \ubc18\ubcf5\uc801\uc785\ub2c8\ub2e4.\n\uc2a4\ud14c\uc774\ud2b8\ud480 \uc14b\uc740 \ucee8\ud14c\uc774\ub108\ub97c \ub9cc\ub4e4\uace0 \uc0ad\uc81c\ud558\ub294 \ubc29\uc2dd\uc774 \ub354 \ud655\uc2e4\ud569\ub2c8\ub2e4."),(0,r.kt)("hr",null),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("h1",{id:"\uad00\ub9ac-\uac1c\ub150"},"\uad00\ub9ac \uac1c\ub150"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\ucef4\ud3ec\ub10c\ud2b8\ub97c \uc704\ud55c \ucef4\ud3ec\ub10c\ud2b8"),(0,r.kt)("br",{parentName:"p"}),"\n","\uc774 \ub2e8\ub77d\uc5d0\uc11c\ub294 \ub124\uc784\uc2a4\ud398\uc774\uc2a4(namespace), \ub808\uc774\ube14(label), \uc5b4\ub178\ud14c\uc774\uc158(annotation)\uc744 \uc124\uba85\ud569\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"\ub124\uc784\uc2a4\ud398\uc774\uc2a4"},"\ub124\uc784\uc2a4\ud398\uc774\uc2a4"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Namespace"),(0,r.kt)("br",{parentName:"p"}),"\n","\ucfe0\ubc84\ub124\ud2f0\uc2a4 API \uc624\ube0c\uc81d\ud2b8\ub97c \uad6c\ubd84\ud558\uae30 \uc704\ud55c \uac1c\ub150\uc785\ub2c8\ub2e4.\nRBAC \uaddc\uce59 \ubc94\uc704\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4.\n\uc0ad\uc81c\uc2dc \ud558\uc704 \uc624\ube0c\uc81d\ud2b8\uac00 \uc900\ubd80 \uc0ad\uc81c\ub429\ub2c8\ub2e4.\n\ub124\uc784\uc2a4\ud398\uc774\uc2a4\ub97c \uc9c0\uc815\ud558\uc9c0 \uc54a\uc740 \uc624\ube0c\uc81d\ud2b8\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," \ub124\uc784\uc2a4\ud398\uc774\uc2a4\uac00 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"\ub808\uc774\ube14"},"\ub808\uc774\ube14"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Label"),(0,r.kt)("br",{parentName:"p"}),"\n","\ucfe0\ubc84\ub124\ud2f0\uc2a4\uc758 \ubaa8\ub4e0 \uc624\ube0c\uc81d\ud2b8\ub294 \uc5f0\uad00\ub41c \uc784\uc758\uc758 \ub808\uc774\ube14 \uc9d1\ud569\uc744 \uac00\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\nAPI \uc11c\ubc84\uc5d0 ",(0,r.kt)("strong",{parentName:"p"},"\ub808\uc774\ube14 \ucffc\ub9ac"),", ",(0,r.kt)("strong",{parentName:"p"},"\ub808\uc774\ube14 \uc124\ub809\ud130"),"\ub97c \ubcf4\ub0b4 \uc870\ud68c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\ub9ce\uc740 \uc624\ube0c\uc81d\ud2b8\ub294 \ub808\uc774\ube14 \uc124\ub809\ud130\ub97c \uc0ac\uc6a9\ud574 \ub2e4\ub978 \uc624\ube0c\uc81d\ud2b8 \uc9d1\ud569\uc744 \uc2dd\ubcc4\ud569\ub2c8\ub2e4.\n\uc608\ub97c\ub4e4\uc5b4 \ud30c\ub4dc\uc758 ",(0,r.kt)("a",{parentName:"p",href:"https://jwher.github.io/k8s-tip-nodeselector"},"\ub178\ub4dc \uc140\ub809\ud130")," ,\n\uc11c\ube44\uc2a4\uc758 \ud30c\ub4dc \uc124\ub809\ud130\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"\uc5b4\ub178\ud14c\uc774\uc158"},"\uc5b4\ub178\ud14c\uc774\uc158"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Annotation"),(0,r.kt)("br",{parentName:"p"}),"\n","API \uc624\ube0c\uc81d\ud2b8\uac00 \uc804\ubd80 \uc815\ubcf4 \uc2dd\ubcc4\uc6a9\uc740 \uc544\ub2d9\ub2c8\ub2e4.\n\uc77c\ubd80\ub294 \ub2e8\uc21c ",(0,r.kt)("strong",{parentName:"p"},"\uc8fc\uc11d"),"(\uc5b4\ub178\ud14c\uc774\uc158)\uc785\ub2c8\ub2e4."),(0,r.kt)("hr",null),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("h1",{id:"\uc544\ud0a4\ud14d\ucc98-\uad6c\uc131\uc694\uc18c"},"\uc544\ud0a4\ud14d\ucc98 \uad6c\uc131\uc694\uc18c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Docker"),(0,r.kt)("li",{parentName:"ul"},"kubelet"),(0,r.kt)("li",{parentName:"ul"},"etcd"),(0,r.kt)("li",{parentName:"ul"},"kube-proxy"),(0,r.kt)("li",{parentName:"ul"},"kube-apiserver"),(0,r.kt)("li",{parentName:"ul"},"kube-controller-manager"),(0,r.kt)("li",{parentName:"ul"},"kube-scheduler"),(0,r.kt)("li",{parentName:"ul"},"kube-proxy")),(0,r.kt)("h2",{id:"etcd"},"etcd"),(0,r.kt)("p",null,"\ud0a4/\uac12 \uc800\uc7a5\uc18c\ub85c \ucfe0\ubc84\ub124\ud2f0\uc2a4 \ud074\ub7ec\uc2a4\ud130\uc758 \ud575\uc2ec\uc785\ub2c8\ub2e4.\netcd \uc11c\ubc84\ub294 \ubd84\uc0b0\ub41c \ud569\uc758 \uc54c\uace0\ub9ac\uc998\uc778 \ub798\ud504\ud2b8\ub97c \uad6c\ud604\ud574, \uc7a5\uc560 \uadf9\ubcf5\uacfc \ub370\uc774\ud130 \ubcf5\uad6c\uac00 \uac00\ub2a5\ud569\ub2c8\ub2e4.\n(\ub099\uad00\uc801 \ub3d9\uc2dc\uc131, \ube44\uad50 \ud6c4 \uad50\ud658(CAS, compare and swap), \uc6cc\uce58 \ud504\ub85c\ud1a0\ucf5c)"),(0,r.kt)("p",null,"\ub124\uc784\uc2a4\ud398\uc774\uc2a4\uc758 \ubaa8\ub4e0 \uc624\ube0c\uc81d\ud2b8\ub294 etcd \ub514\ub809\ud130\ub9ac\uc5d0 \uc800\uc7a5\ub429\ub2c8\ub2e4.\n\uc6cc\uce58 \ud504\ub85c\ud1a0\ucf5c\uc744 \uc0ac\uc6a9\ud574 \uc804\uccb4 \ud0a4/\uac12 \uc800\uc7a5\uc18c\uc758 \ubcc0\uacbd\uc0ac\ud56d\uc744 \ud6a8\uc728\uc801\uc73c\ub85c \uac10\uc2dc\ud569\ub2c8\ub2e4.\n\ud074\ub77c\uc774\uc5b8\ud2b8\uac00 \uc9c0\uc18d\uc801\uc73c\ub85c \ud3f4\ub9c1\ud558\uc9c0 \uc54a\uc544\ub3c4 \ub429\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"api-\uc11c\ubc84"},"api \uc11c\ubc84"),(0,r.kt)("p",null,"\uc911\uc694!"),(0,r.kt)("h2",{id:"\uc2a4\ucf00\uc904\ub7ec"},"\uc2a4\ucf00\uc904\ub7ec"),(0,r.kt)("p",null,"\ud30c\ub4dc\uac00 \uc2e4\ud589\ub420 \uc704\uce58\ub97c \ucc3e\uc544\uc90d\ub2c8\ub2e4.  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"schedule(pod): string\n    nodes := getAllHealthyNodes()\n    viableNodes := []\n    for node in nodes:\n        for predicate in predicates:\n            if predicate(node, pod):\n                viableNodes.append(node)\n\n    scoredNodes := PriorityQueue<score, Node[]>\n    priorities := GetPriorityFunctions()\n    for node in viableNodes:\n        score = CalculateCombinedPriority(node, pod, priorities)\n        scoredNodes[score].push(node)\n\n    bestScore := scoredNodes.top().score\n    selectedNodes.append(scoredNodes.pop())\n\n    node := selectAtRandom(selectedNodes)\n    return node.Name\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\ud604\uc7ac\ub294 \ub85c\uc9c1\uc774 \ubc14\ub00c\uc5c8\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("h2",{id:"\ucee8\ud2b8\ub864\ub7ec-\uad00\ub9ac\uc790"},"\ucee8\ud2b8\ub864\ub7ec \uad00\ub9ac\uc790"),(0,r.kt)("p",null,"\uc2a4\ucf00\uc904\ub7ec \uba85\ub839\uc744 \uc2e4\uc81c \uc2e4\ud589\ud558\ub294 \uc870\uc815 \uc81c\uc5b4 \ub8e8\ud504\ub97c \uad00\ub9ac\ud569\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"\ucfe0\ube14\ub81b"},"\ucfe0\ube14\ub81b"),(0,r.kt)("p",null,"\ucfe0\ubc84\ub124\ud2f0\uc2a4 \ud074\ub7ec\uc2a4\ud130\uc5d0 \ud3ec\ud568\ub418\ub294 \ubaa8\ub4e0 \uc2dc\uc2a4\ud15c\uc758 \ub178\ub4dc \ub370\ubaac\uc785\ub2c8\ub2e4.\n\uc0ac\uc6a9\uac00\ub2a5\ud55c cpu, \ub514\uc2a4\ud06c, \ub178\ub4dc\ub97c \ucfe0\ubc84\ub124\ud2f0\uc2a4 \ud074\ub7ec\uc2a4\ud130\uc5d0 \uc5f0\uacb0\ud558\ub294 \ub2e4\ub9ac\uc785\ub2c8\ub2e4.\n\uc774\ub7f0 \uc0c1\ud0dc\ub97c API \uc11c\ubc84\uc5d0 \uc804\ub2ec\ud574 \ub2e4\ub978 \uc870\uc815 \uc81c\uc5b4 \ub8e8\ud504\uac00 \ucee8\ud14c\uc774\ub108 \uc0c1\ud0dc\ub97c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub610\ud55c, \uc2e4\ud589\ub420 \uac83\uc73c\ub85c \uc608\uc0c1\ub418\ub294 \ucee8\ud14c\uc774\ub108\uc758 \uc0c1\ud0dc\ub97c \ud655\uc778\ud558\uace0 \ub2e4\uc2dc \uc2dc\uc791\ud569\ub2c8\ub2e4.\n\ud558\uc9c0\ub9cc \ubaa8\ub4e0 \uc0c1\ud0dc \uc815\ubcf4\ub97c API \uc11c\ubc84\uc5d0 \uc804\ub2ec\ud558\ub294 \uac83\uc740 \ube44\ud6a8\uc728\uc801\uc774\uae30 \ub54c\ubb38\uc5d0\n\uc870\uc815 \ub8e8\ud504\ub97c \uc7ac\uc2e4\ud589\ud558\uace0, \uc0c1\ud0dc\uc640 \uc7ac\uc2dc\uc791 \uc815\ubcf4\ub9cc API \uc11c\ubc84\uc5d0 \uc804\ub2ec\ud569\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"kube-proxy"},"kube-proxy"),(0,r.kt)("p",null,"\uc11c\ube44\uc2a4\uc758 \ub85c\ub4dc \ubc38\ub7f0\uc11c \ub124\ud2b8\uc6cc\ud0b9 \ubaa8\ub378\uc744 \ub2f4\ub2f4\ud569\ub2c8\ub2e4."),(0,r.kt)("hr",null),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("br",null),"# \ub178\ub4dc\uac04 \ud1b5\uc2e0",(0,r.kt)("p",null,"\uc11c\ube44\uc2a4 \ub514\uc2a4\ucee4\ubc84\ub9ac(flannel)"),(0,r.kt)("br",null),(0,r.kt)("h1",{id:"\uae30\ub2a5-\ubc94\uc704"},"\uae30\ub2a5 \ubc94\uc704"),(0,r.kt)("p",null,"\uacf5\uc2dd\ubb38\uc11c\uc5d0\uc11c \ucfe0\ubc84\ub124\ud2f0\uc2a4\uac00 \uc81c\uacf5\ud558\ub294\uac83/\ucfe0\ubc84\ub124\ud2f0\uc2a4\uac00 \uc544\ub2cc \uac83\uc744 \ub2e4\uc74c\uacfc \uac19\uc774 \uc124\uba85\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.  "),(0,r.kt)("p",null,"\uc81c\uacf5\ud558\ub294\uac83"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc11c\ube44\uc2a4 \ub514\uc2a4\ucee4\ubc84\ub9ac\uc640 \ub85c\ub4dc \ubc38\ub7f0\uc2f1"),(0,r.kt)("li",{parentName:"ul"},"\uc2a4\ud1a0\ub9ac\uc9c0 \uc624\ucf00\uc2a4\ud2b8\ub808\uc774\uc158"),(0,r.kt)("li",{parentName:"ul"},"\uc790\ub3d9\ud654\ub41c \ub864\uc544\uc6c3\uacfc \ub864\ubc31"),(0,r.kt)("li",{parentName:"ul"},"\uc790\ub3d9\ud654\ub41c \ube48 \ud328\ud0b9"),(0,r.kt)("li",{parentName:"ul"},"\uc790\ub3d9\ud654\ub41c \ubcf5\uad6c"),(0,r.kt)("li",{parentName:"ul"},"\uc2dc\ud06c\ub9bf\uacfc \uad6c\uc131 \uad00\ub9ac")),(0,r.kt)("p",null,"\ucfe0\ubc84\ub124\ud2f0\uc2a4\uac00 \uc544\ub2cc \uac83"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc720\ud615 \uc81c\uc57d"),(0,r.kt)("li",{parentName:"ul"},"\uc18c\uc2a4 \ucf54\ub4dc \ube4c\ub4dc/\ubc30\ud3ec"),(0,r.kt)("li",{parentName:"ul"},"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ub808\ubca8\uc758 \uc11c\ube44\uc2a4"),(0,r.kt)("li",{parentName:"ul"},"\ub85c\uae45/\ubaa8\ub2c8\ud130\ub9c1(\uc77c\ubd80 \uba54\ud2b8\ub9ad \uc218\uc9d1 \uc81c\uacf5)"),(0,r.kt)("li",{parentName:"ul"},"\uae30\ubcf8 \uc124\uc815 \uc5b8\uc5b4(PL) \uc81c\uc57d",(0,r.kt)("br",{parentName:"li"}),"\u21d2\uc120\uc5b8\uc801 API\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4")),(0,r.kt)("p",null,"\uc138\ubd80\uc801\uc778 \ub0b4\uc6a9\uc744 \uc0b4\ud3b4\ubcf4\uba74 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\uae30\ub2a5"),(0,r.kt)("th",{parentName:"tr",align:null},"\uc81c\uacf5\uc5ec\ubd80"),(0,r.kt)("th",{parentName:"tr",align:null},"\ube44\uace0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\ucee8\ud14c\uc774\ub108\uac00 \uc815\uc9c0\uc2dc \uc7ac\uc2e4\ud589"),(0,r.kt)("td",{parentName:"tr",align:null},"\u25cb"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\ub178\ub4dc \uc815\uc9c0\uc2dc \uc7ac\uc2e4\ud589"),(0,r.kt)("td",{parentName:"tr",align:null},"\xd7"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\ub178\ub4dc \uc815\uc9c0\uc2dc, \ub2e4\ub978 \ub178\ub4dc\uc5d0\uc11c \ubd80\uc871\ud55c \ub9cc\ud07c \ucee8\ud14c\uc774\ub108 \uc2e4\ud589"),(0,r.kt)("td",{parentName:"tr",align:null},"\xd7"),(0,r.kt)("td",{parentName:"tr",align:null},"\ucfe0\ubc84\ub124\ud2f0\uc2a4\ub9cc\uc73c\ub85c \ubd88\uac00\ub2a5\ud569\ub2c8\ub2e4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\ub178\ub4dc \ubd80\ud558\uc5d0 \ub530\ub77c \ucee8\ud14c\uc774\ub108\uc218 \uc99d\uac00"),(0,r.kt)("td",{parentName:"tr",align:null},"\xd7"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\ub178\ub4dc \ubd80\ud558\uc5d0 \ub530\ub77c \ub178\ub4dc\uc218(?!) \uc99d\uac00"),(0,r.kt)("td",{parentName:"tr",align:null},"\xd7"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\uad00\ub9ac\uc790\uac00 \uc9c0\uc815\ud55c \uc218\uc758 \ucee8\ud14c\uc774\ub108 \uc2e4\ud589"),(0,r.kt)("td",{parentName:"tr",align:null},"\u25cb"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\uc601\uad6c \uc2a4\ud1a0\ub9ac\uc9c0\ub97c \uc81c\uacf5"),(0,r.kt)("td",{parentName:"tr",align:null},"\u25b3"),(0,r.kt)("td",{parentName:"tr",align:null},"NFS, EBS, GCP \ub4f1\uc744 \ucd94\uc0c1\ud654\ud574 \uc81c\uacf5\ud569\ub2c8\ub2e4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\uc624\ube0c\uc81d\ud2b8 \uc2a4\ud1a0\ub9ac\uc9c0\ub97c \uc81c\uacf5"),(0,r.kt)("td",{parentName:"tr",align:null},"\xd7"),(0,r.kt)("td",{parentName:"tr",align:null},"S3, Cloud Storage \uc0ac\uc6a9\ud569\ub2c8\ub2e4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\ub178\ub4dc\uac04 \ub3c4\ucee4 \ub124\ud2b8\uc6cc\ud06c \uc811\uc18d"),(0,r.kt)("td",{parentName:"tr",align:null},"\xd7"),(0,r.kt)("td",{parentName:"tr",align:null},"flannel, calico \ub4f1\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\uc5d4\ub4dc\ud3ec\uc778\ud2b8\uc5d0\uc11c \ucee8\ud14c\uc774\ub108\ub85c \ubd80\ud558\ubd84\uc0b0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u25cb"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\uac01 \ub178\ub4dc\ub85c \ud2b8\ub798\ud53d \ubd84\uc0b0"),(0,r.kt)("td",{parentName:"tr",align:null},"\xd7"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("hr",null),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"tips"},"Tips"),(0,r.kt)("p",null,"\uc0c1\ub2f9\ud788 \ub9ce\uc740 \uae00\uacfc \uc6b4\uc601 \uac80\ud610\uc73c\ub85c \uc791\uc131\ud588\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/ko/docs/concepts/overview/what-is-kubernetes/"},"[\uacf5\uc2dd]What is kubernetes"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/components/"},"[\uacf5\uc2dd]Kubernetes Components")))}m.isMDXComponent=!0},36761:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/overview-af5bdb4d3f81aad895422e6e8818e3fa.png"},91635:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kubernetes-f91022b1deed067a9393dd3c42381ab7.svg"}}]);