"use strict";(self.webpackChunkjwher_blog=self.webpackChunkjwher_blog||[]).push([[6812],{3905:function(M,e,t){t.d(e,{Zo:function(){return a},kt:function(){return u}});var N=t(67294);function n(M,e,t){return e in M?Object.defineProperty(M,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):M[e]=t,M}function z(M,e){var t=Object.keys(M);if(Object.getOwnPropertySymbols){var N=Object.getOwnPropertySymbols(M);e&&(N=N.filter((function(e){return Object.getOwnPropertyDescriptor(M,e).enumerable}))),t.push.apply(t,N)}return t}function T(M){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?z(Object(t),!0).forEach((function(e){n(M,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(t)):z(Object(t)).forEach((function(e){Object.defineProperty(M,e,Object.getOwnPropertyDescriptor(t,e))}))}return M}function i(M,e){if(null==M)return{};var t,N,n=function(M,e){if(null==M)return{};var t,N,n={},z=Object.keys(M);for(N=0;N<z.length;N++)t=z[N],e.indexOf(t)>=0||(n[t]=M[t]);return n}(M,e);if(Object.getOwnPropertySymbols){var z=Object.getOwnPropertySymbols(M);for(N=0;N<z.length;N++)t=z[N],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(M,t)&&(n[t]=M[t])}return n}var r=N.createContext({}),l=function(M){var e=N.useContext(r),t=e;return M&&(t="function"==typeof M?M(e):T(T({},e),M)),t},a=function(M){var e=l(M.components);return N.createElement(r.Provider,{value:e},M.children)},c={inlineCode:"code",wrapper:function(M){var e=M.children;return N.createElement(N.Fragment,{},e)}},j=N.forwardRef((function(M,e){var t=M.components,n=M.mdxType,z=M.originalType,r=M.parentName,a=i(M,["components","mdxType","originalType","parentName"]),j=l(t),u=n,g=j["".concat(r,".").concat(u)]||j[u]||c[u]||z;return t?N.createElement(g,T(T({ref:e},a),{},{components:t})):N.createElement(g,T({ref:e},a))}));function u(M,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof M||n){var z=t.length,T=new Array(z);T[0]=j;var i={};for(var r in e)hasOwnProperty.call(e,r)&&(i[r]=e[r]);i.originalType=M,i.mdxType="string"==typeof M?M:n,T[1]=i;for(var l=2;l<z;l++)T[l]=t[l];return N.createElement.apply(null,T)}return N.createElement.apply(null,t)}j.displayName="MDXCreateElement"},14653:function(M,e,t){t.r(e),t.d(e,{assets:function(){return a},contentTitle:function(){return r},default:function(){return u},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var N=t(87462),n=t(63366),z=(t(67294),t(3905)),T=["components"],i={authors:["jwher"],description:"Helm: \ucfe0\ubc84\ub124\ud2f0\uc2a4 \ud328\ud0a4\uc9c0 \ub9e4\ub2c8\uc800",slug:"install-helm",tags:["tech","kubernetes"],title:"Install Helm"},r=void 0,l={permalink:"/posts/install-helm",editUrl:"https://github.com/jwher/jwher.github.io/posts/2021-07-21-install-helm/index.md",source:"@site/posts/2021-07-21-install-helm/index.md",title:"Install Helm",description:"Helm: \ucfe0\ubc84\ub124\ud2f0\uc2a4 \ud328\ud0a4\uc9c0 \ub9e4\ub2c8\uc800",date:"2021-07-21T00:00:00.000Z",formattedDate:"July 21, 2021",tags:[{label:"tech",permalink:"/posts/tags/tech"},{label:"kubernetes",permalink:"/posts/tags/kubernetes"}],readingTime:2.085,truncated:!0,authors:[{name:"Jeongwon Her",title:"MLOps Engineer",url:"https://github.com/jwher",imageURL:"https://github.com/jwher.png",key:"jwher"}],frontMatter:{authors:["jwher"],description:"Helm: \ucfe0\ubc84\ub124\ud2f0\uc2a4 \ud328\ud0a4\uc9c0 \ub9e4\ub2c8\uc800",slug:"install-helm",tags:["tech","kubernetes"],title:"Install Helm"},prevItem:{title:"Install Harbor",permalink:"/posts/install-harbor"},nextItem:{title:"Github Issue",permalink:"/posts/github-issue"}},a={authorsImageUrls:[void 0]},c=[{value:"Helm",id:"helm",level:2},{value:"\uc124\uce58\ud558\uae30",id:"\uc124\uce58\ud558\uae30",level:2},{value:"apt\ub85c \uc124\uce58\ud558\uae30",id:"apt\ub85c-\uc124\uce58\ud558\uae30",level:3},{value:"\uba85\ub839\uc5b4",id:"\uba85\ub839\uc5b4",level:2},{value:"Tips",id:"tips",level:2},{value:"Reference",id:"reference",level:3}],j={toc:c};function u(M){var e=M.components,i=(0,n.Z)(M,T);return(0,z.kt)("wrapper",(0,N.Z)({},j,i,{components:e,mdxType:"MDXLayout"}),(0,z.kt)("p",null,(0,z.kt)("img",{alt:"helm",src:t(79878).Z,width:"304",height:"351"}),"\n",(0,z.kt)("em",{parentName:"p"},"\ucfe0\ubc84\ub124\ud2f0\uc2a4 \ud328\ud0a4\uc9c0 \ub9e4\ub2c8\uc800"),"  "),(0,z.kt)("h1",{id:"\ubaa9\ucc28"},"\ubaa9\ucc28"),(0,z.kt)("ul",null,(0,z.kt)("li",{parentName:"ul"},(0,z.kt)("a",{parentName:"li",href:"#helm"},"Helm")),(0,z.kt)("li",{parentName:"ul"},(0,z.kt)("a",{parentName:"li",href:"#%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0"},"\uc124\uce58\ud558\uae30")),(0,z.kt)("li",{parentName:"ul"},(0,z.kt)("a",{parentName:"li",href:"#%EB%AA%85%EB%A0%B9%EC%96%B4"},"\uba85\ub839\uc5b4"))),(0,z.kt)("h2",{id:"helm"},"Helm"),(0,z.kt)("p",null,"\ud5ec\ub984\uc774\ub780?",(0,z.kt)("br",{parentName:"p"}),"\n","\ucfe0\ubc84\ub124\ud2f0\uc2a4 \ud328\ud0a4\uc9c0 \ub9e4\ub2c8\uc800\uc785\ub2c8\ub2e4.\n\ud5ec\ub984\uc740 \ucfe0\ubc84\ub124\ud2f0\uc2a4\uc6a9 \uc18c\ud504\ud2b8\uc6e8\uc5b4\ub97c \uac80\uc0c9\ud558\uac70\ub098, \uacf5\uc720\ud558\uace0 \uc0ac\uc6a9\ud558\uae30\uc5d0 \uac00\uc7a5 \uc88b\uc740 \ubc29\ubc95\uc785\ub2c8\ub2e4."),(0,z.kt)("ul",null,(0,z.kt)("li",{parentName:"ul"},"\ubcf5\uc7a1\uc131 \uad00\ub9ac: \ucc28\ud2b8\ub294 \ub9e4\uc6b0 \ubcf5\uc7a1\ud55c \uc571\ub3c4 \ud45c\ud604\ud558\uace0, \ubc18\ubcf5\uc801\uc778 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc124\uce58\ub97c \uc81c\uacf5\ud558\uba70, \ub2e8\uc77c \uad8c\ud55c\uc73c\ub85c \uc11c\ube44\uc2a4\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,z.kt)("li",{parentName:"ul"},"\uc26c\uc6b4 \uc5c5\ub370\uc774\ud2b8: \uc989\uc11d(in-place) \uc5c5\uadf8\ub808\uc774\ub4dc\uc640 \ucee4\uc2a4\ud140 \ud6c5\uc744 \ud1b5\ud574 \uc5c5\ub370\uc774\ud2b8\ud558\ub294 \uc218\uace0\ub97c \ub35c\uc5b4\uc90d\ub2c8\ub2e4."),(0,z.kt)("li",{parentName:"ul"},"\uac04\ub2e8\ud55c \uacf5\uc720: \ucc28\ud2b8\ub294 \ubc84\uc804 \uad00\ub9ac, \uacf5\uc720, \ud37c\ube14\ub9ad\uc774\ub098 \ud504\ub77c\uc774\ube57 \uc11c\ubc84 \ud638\uc2a4\ud305\uc774 \ud3b8\ub9ac\ud569\ub2c8\ub2e4."),(0,z.kt)("li",{parentName:"ul"},"\ub864\ubc31: helm rollback\uc744 \uc0ac\uc6a9\ud558\uc5ec \ub9b4\ub9ac\uc2a4\ub97c \uc608\uc804 \ubc84\uc804\uc73c\ub85c \uac04\ud3b8\ud558\uac8c \ub418\ub3cc\ub9ac\uc138\uc694.")),(0,z.kt)("p",null,(0,z.kt)("em",{parentName:"p"},"\uc774 \ub2e8\ub77d\uc740 \uacf5\uc2dd \ud648\ud398\uc774\uc9c0\uc758 \ub0b4\uc6a9\uc744 \uc778\uc6a9\ud588\uc2b5\ub2c8\ub2e4.")),(0,z.kt)("br",null),(0,z.kt)("h2",{id:"\uc124\uce58\ud558\uae30"},"\uc124\uce58\ud558\uae30"),(0,z.kt)("h3",{id:"apt\ub85c-\uc124\uce58\ud558\uae30"},"apt\ub85c \uc124\uce58\ud558\uae30"),(0,z.kt)("pre",null,(0,z.kt)("code",{parentName:"pre",className:"language-shell"},'curl https://baltocdn.com/helm/signing.asc | sudo apt-key add -\nsudo apt-get install apt-transport-https --yes\necho "deb https://baltocdn.com/helm/stable/debian/ all main" | sudo tee /etc/apt/sources.list.d/helm-stable-debian.list\nsudo apt-get update\nsudo apt-get install helm\n')),(0,z.kt)("br",null),(0,z.kt)("h2",{id:"\uba85\ub839\uc5b4"},"\uba85\ub839\uc5b4"),(0,z.kt)("pre",null,(0,z.kt)("code",{parentName:"pre",className:"language-shell"},"# \ucc28\ud2b8 \uc124\uce58\n$ helm install $name $chart [flags]\n\n# \uc5c5\uadf8\ub808\uc774\ub4dc\n$ helm upgrade $name $chart [flags]\n\n# \ub864\ubc31\n$ helm history $name\n$ helm rollback $name [revision] [flags]\n")),(0,z.kt)("br",null),(0,z.kt)("h2",{id:"tips"},"Tips"),(0,z.kt)("p",null,"\ud604\uc7ac \uac1c\ub150, \uc124\uce58, \uba85\ub839\uc5b4 \ud398\uc774\uc9c0\uac00 \ud558\ub098\uc785\ub2c8\ub2e4.\n\uc9c0\uc2dd\uc774 \ub298\uc5b4\ub098\uba74 \ubd84\ub9ac\uac00 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,z.kt)("h3",{id:"reference"},"Reference"),(0,z.kt)("p",null,(0,z.kt)("a",{parentName:"p",href:"https://helm.sh/ko/"},"[\uacf5\uc2dd]\ud5ec\ub984"),(0,z.kt)("br",{parentName:"p"}),"\n",(0,z.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"[\uacf5\uc2dd]Installing Helm"),(0,z.kt)("br",{parentName:"p"}),"\n",(0,z.kt)("a",{parentName:"p",href:"https://helm.sh/docs/helm/helm/"},"[\uacf5\uc2dd]Helm Commands")))}u.isMDXComponent=!0},79878:function(M,e){e.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBoZWlnaHQ9IjM1MSIgdmlld0JveD0iMCAwIDMwNCAzNTEiIHdpZHRoPSIzMDQiPgo8bWFzayBpZD0iYSIgZmlsbD0iI2ZmZiI+CjxwYXRoIGQ9Im0wIDBoMzEzLjMwMzE1NXYxNTkuODY0ODY1aC0zMTMuMzAzMTU1eiIgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIi8+CjwvbWFzaz4KPG1hc2sgaWQ9ImIiIGZpbGw9IiNmZmYiPgo8cGF0aCBkPSJtMCAwaDMxMy4zMDMxNTV2MTU5Ljg2NDg2NWgtMzEzLjMwMzE1NXoiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPgo8L21hc2s+CjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExIC01MSkiPgo8cGF0aCBkPSJtMTEuNjc4NTcxNCAxODloMTkuNzg1ODM1N3YyNi43ODloMjMuOTAzN3YtMjYuNzg5aDE5Ljc4NTgzNTh2NzUuMjVoLTE5Ljc4NTgzNTh2LTI4LjY5NTMzM2gtMjMuOTAzN3YyOC42OTUzMzNoLTE5Ljc4NTgzNTd6bTg2LjE3Mzg0MjkgNzUuMjV2LTc1LjI1aDQ2LjgwMzA0Mjd2MTYuMzU0MzMzaC0yNy4wMTcyMDd2MTIuMjQwNjY3aDIzLjkwMzd2MTYuNjU1MzMzaC0yMy45MDM3djEzLjg0NmgyNy4wMTcyMDd2MTYuMTUzNjY3em02OC40OTcxNTY3IDB2LTc1LjI1aDE5Ljc4NTgzNnY1NS4zODRoMjcuMTE3NjQzdjE5Ljg2NnptNzcuNTM2MzcyLTc1LjI1IDMwLjczMzMyOCAyNy44OTI2NjcgMzAuNjMyODkzLTI3Ljg5MjY2N2g4LjkzODc3OXY3NS4yNWgtMTkuODg2Mjcydi0zOC42MjgzMzNsLTE5LjY4NTQgMTcuOTU5NjY2LTE5Ljc4NTgzNS0xNy44NTkzMzN2MzguNTI4aC0xOS44ODYyNzJ2LTc1LjI1eiIgZmlsbD0iIzBmMTY4OSIvPgo8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAxMS45NTgxMzYgNDU1KSI+CjxnIGZpbGw9IiMwZjE2ODkiIG1hc2s9InVybCgjYSkiPgo8cGF0aCBkPSJtMjAzLjQ2MDY3NiA5NS42ODc1NDI1YzYuOTM2MzEgMCAxMi41NTkzMDEtMTQuODA5MjE5NCAxMi41NTkzMDEtMzMuMDc3MzE3MnMtNS42MjI5OTEtMzMuMDc3MzE3Mi0xMi41NTkzMDEtMzMuMDc3MzE3MmMtNi45MzYzMTEgMC0xMi41NTkzMDEgMTQuODA5MjE5NC0xMi41NTkzMDEgMzMuMDc3MzE3MnM1LjYyMjk5IDMzLjA3NzMxNzIgMTIuNTU5MzAxIDMzLjA3NzMxNzJ6IiB0cmFuc2Zvcm09Im1hdHJpeCguODE5MTUyMDQgLjU3MzU3NjQ0IC0uNTczNTc2NDQgLjgxOTE1MjA0IDExMS44NzAwOTEgLTUxLjcwNjU1NikiLz4KPHBhdGggZD0ibTMwLjE0MjMyMjMgOTUuNjg3NTQyNWM2LjkzNjMxMDQgMCAxMi41NTkzMDEtMTQuODA5MjE5NCAxMi41NTkzMDEtMzMuMDc3MzE3MnMtNS42MjI5OTA2LTMzLjA3NzMxNzItMTIuNTU5MzAxLTMzLjA3NzMxNzItMTIuNTU5MzAwOSAxNC44MDkyMTk0LTEyLjU1OTMwMDkgMzMuMDc3MzE3MiA1LjYyMjk5MDUgMzMuMDc3MzE3MiAxMi41NTkzMDA5IDMzLjA3NzMxNzJ6IiB0cmFuc2Zvcm09Im1hdHJpeCgtLjgxOTE1MjA0IC41NzM1NzY0NCAuNTczNTc2NDQgLjgxOTE1MjA0IDU4LjA4NDYxMSA0Ny43MDQ3NjgpIi8+CjxwYXRoIGQ9Im0xMTYuNzMyODE1IDY2LjI3NTI2NzZjNi45MzYzMTEgMCAxMi41NTkzMDEtMTQuODA5MjE5MyAxMi41NTkzMDEtMzMuMDc3MzE3MiAwLTE4LjI2ODA5NzgtNS42MjI5OS0zMy4wNzczMTcxMy0xMi41NTkzMDEtMzMuMDc3MzE3MTMtNi45MzYzMSAwLTEyLjU1OTMwMSAxNC44MDkyMTkzMy0xMi41NTkzMDEgMzMuMDc3MzE3MTMgMCAxOC4yNjgwOTc5IDUuNjIyOTkxIDMzLjA3NzMxNzIgMTIuNTU5MzAxIDMzLjA3NzMxNzJ6IiB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSAyNzIuNjI4NTI0IDUzLjY3MDc2MikiLz4KPC9nPgo8cGF0aCBkPSJtMjUxLjQ2NzAwNiAxNzMuMDk5ODQ5Yy0yMC4yMzAwNzYtMzMuNjA5OTY5LTU2Ljg4OTU2NS01Ni4wNjc5MDgtOTguNzU1Nzc2LTU2LjA2NzkwOC00MC43MjA3OTggMC03Ni41MTU4NzY2IDIxLjI0NTkwMS05Ny4wNTg2OTU5IDUzLjMzNDU4OG0yLjE5ODExMDcgMTI5LjE2OTUzNGMyMC44NDAzMDM2IDMwLjIzMjcwMSA1NS41NTU5MDQyIDUwLjAyNjU5MSA5NC44NjA1ODUyIDUwLjAyNjU5MSAzOS4zNzYwOTkgMCA3NC4xNDY0MjQtMTkuODY1ODg3IDk0Ljk3NDA0OS01MC4xOTE0OTUiIG1hc2s9InVybCgjYSkiIHN0cm9rZT0iIzBmMTY4OSIgc3Ryb2tlLXdpZHRoPSIyMCIvPgo8L2c+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExLjk1ODEzNikiPgo8ZyBmaWxsPSIjMGYxNjg5IiBtYXNrPSJ1cmwoI2IpIj4KPHBhdGggZD0ibTIwMy40NjA2NzYgOTUuNjg3NTQyNWM2LjkzNjMxIDAgMTIuNTU5MzAxLTE0LjgwOTIxOTQgMTIuNTU5MzAxLTMzLjA3NzMxNzJzLTUuNjIyOTkxLTMzLjA3NzMxNzItMTIuNTU5MzAxLTMzLjA3NzMxNzJjLTYuOTM2MzExIDAtMTIuNTU5MzAxIDE0LjgwOTIxOTQtMTIuNTU5MzAxIDMzLjA3NzMxNzJzNS42MjI5OSAzMy4wNzczMTcyIDEyLjU1OTMwMSAzMy4wNzczMTcyeiIgdHJhbnNmb3JtPSJtYXRyaXgoLjgxOTE1MjA0IC41NzM1NzY0NCAtLjU3MzU3NjQ0IC44MTkxNTIwNCAxMTEuODcwMDkxIC01NC4xNjYwMTYpIi8+CjxwYXRoIGQ9Im0zMC4xNDIzMjIzIDk1LjY4NzU0MjVjNi45MzYzMTA0IDAgMTIuNTU5MzAxLTE0LjgwOTIxOTQgMTIuNTU5MzAxLTMzLjA3NzMxNzJzLTUuNjIyOTkwNi0zMy4wNzczMTcyLTEyLjU1OTMwMS0zMy4wNzczMTcyLTEyLjU1OTMwMDkgMTQuODA5MjE5NC0xMi41NTkzMDA5IDMzLjA3NzMxNzIgNS42MjI5OTA1IDMzLjA3NzMxNzIgMTIuNTU5MzAwOSAzMy4wNzczMTcyeiIgdHJhbnNmb3JtPSJtYXRyaXgoLS44MTkxNTIwNCAuNTczNTc2NDQgLjU3MzU3NjQ0IC44MTkxNTIwNCA1OC4wODQ2MTEgNDUuMjQ1MzA4KSIvPgo8cGF0aCBkPSJtMTE2LjczMjgxNSA2Ni4yNzUyNjc2YzYuOTM2MzExIDAgMTIuNTU5MzAxLTE0LjgwOTIxOTMgMTIuNTU5MzAxLTMzLjA3NzMxNzIgMC0xOC4yNjgwOTc4LTUuNjIyOTktMzMuMDc3MzE3MTMtMTIuNTU5MzAxLTMzLjA3NzMxNzEzLTYuOTM2MzEgMC0xMi41NTkzMDEgMTQuODA5MjE5MzMtMTIuNTU5MzAxIDMzLjA3NzMxNzEzIDAgMTguMjY4MDk3OSA1LjYyMjk5MSAzMy4wNzczMTcyIDEyLjU1OTMwMSAzMy4wNzczMTcyeiIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgMjcyLjYyODUyNCA1MS4yMTEzMDIpIi8+CjwvZz4KPHBhdGggZD0ibTI1MS40NjcwMDYgMTcwLjY0MDM5Yy0yMC4yMzAwNzYtMzMuNjA5OTY5LTU2Ljg4OTU2NS01Ni4wNjc5MDgtOTguNzU1Nzc2LTU2LjA2NzkwOC00MC43MjA3OTggMC03Ni41MTU4NzY2IDIxLjI0NTktOTcuMDU4Njk1OSA1My4zMzQ1ODdtMi4xOTgxMTA3IDEyOS4xNjk1MzRjMjAuODQwMzAzNiAzMC4yMzI3MDIgNTUuNTU1OTA0MiA1MC4wMjY1OTEgOTQuODYwNTg1MiA1MC4wMjY1OTEgMzkuMzc2MDk5IDAgNzQuMTQ2NDI0LTE5Ljg2NTg4NiA5NC45NzQwNDktNTAuMTkxNDk0IiBtYXNrPSJ1cmwoI2IpIiBzdHJva2U9IiMwZjE2ODkiIHN0cm9rZS13aWR0aD0iMjAiLz4KPC9nPgo8L2c+Cjwvc3ZnPgo="}}]);