"use strict";(self.webpackChunkjwher_blog=self.webpackChunkjwher_blog||[]).push([[7850],{3905:function(M,e,t){t.d(e,{Zo:function(){return I},kt:function(){return a}});var n=t(67294);function g(M,e,t){return e in M?Object.defineProperty(M,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):M[e]=t,M}function i(M,e){var t=Object.keys(M);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(M);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(M,e).enumerable}))),t.push.apply(t,n)}return t}function N(M){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){g(M,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(M,e,Object.getOwnPropertyDescriptor(t,e))}))}return M}function u(M,e){if(null==M)return{};var t,n,g=function(M,e){if(null==M)return{};var t,n,g={},i=Object.keys(M);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||(g[t]=M[t]);return g}(M,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(M);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(M,t)&&(g[t]=M[t])}return g}var j=n.createContext({}),l=function(M){var e=n.useContext(j),t=e;return M&&(t="function"==typeof M?M(e):N(N({},e),M)),t},I=function(M){var e=l(M.components);return n.createElement(j.Provider,{value:e},M.children)},L={inlineCode:"code",wrapper:function(M){var e=M.children;return n.createElement(n.Fragment,{},e)}},o=n.forwardRef((function(M,e){var t=M.components,g=M.mdxType,i=M.originalType,j=M.parentName,I=u(M,["components","mdxType","originalType","parentName"]),o=l(t),a=g,D=o["".concat(j,".").concat(a)]||o[a]||L[a]||i;return t?n.createElement(D,N(N({ref:e},I),{},{components:t})):n.createElement(D,N({ref:e},I))}));function a(M,e){var t=arguments,g=e&&e.mdxType;if("string"==typeof M||g){var i=t.length,N=new Array(i);N[0]=o;var u={};for(var j in e)hasOwnProperty.call(e,j)&&(u[j]=e[j]);u.originalType=M,u.mdxType="string"==typeof M?M:g,N[1]=u;for(var l=2;l<i;l++)N[l]=t[l];return n.createElement.apply(null,N)}return n.createElement.apply(null,t)}o.displayName="MDXCreateElement"},36135:function(M,e,t){t.r(e),t.d(e,{assets:function(){return I},contentTitle:function(){return j},default:function(){return a},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return L}});var n=t(87462),g=t(63366),i=(t(67294),t(3905)),N=["components"],u={authors:["jwher"],description:"\uace0(Golang) \uac1c\ubc1c\ud658\uacbd \uad6c\ucd95\ud558\uae30",slug:"golang-setup",tags:["dev","short"],title:"Golang Setup"},j=void 0,l={permalink:"/posts/golang-setup",editUrl:"https://github.com/jwher/jwher.github.io/posts/2021-08-10-golang-setup/index.md",source:"@site/posts/2021-08-10-golang-setup/index.md",title:"Golang Setup",description:"\uace0(Golang) \uac1c\ubc1c\ud658\uacbd \uad6c\ucd95\ud558\uae30",date:"2021-08-10T00:00:00.000Z",formattedDate:"August 10, 2021",tags:[{label:"dev",permalink:"/posts/tags/dev"},{label:"short",permalink:"/posts/tags/short"}],readingTime:4.165,truncated:!0,authors:[{name:"Jeongwon Her",title:"MLOps Engineer",url:"https://github.com/jwher",imageURL:"https://github.com/jwher.png",key:"jwher"}],frontMatter:{authors:["jwher"],description:"\uace0(Golang) \uac1c\ubc1c\ud658\uacbd \uad6c\ucd95\ud558\uae30",slug:"golang-setup",tags:["dev","short"],title:"Golang Setup"},prevItem:{title:"K8S Tip Configmap",permalink:"/posts/k8s-tip-configmap"},nextItem:{title:"Docker Shared Volume",permalink:"/posts/docker-shared-volume"}},I={authorsImageUrls:[void 0]},L=[{value:"\uace0 \uc124\uce58\ud558\uae30",id:"\uace0-\uc124\uce58\ud558\uae30",level:2},{value:"\uc124\uce58\ud30c\uc77c",id:"\uc124\uce58\ud30c\uc77c",level:3},{value:"\ucee4\ub9e8\ub4dc\ub77c\uc778",id:"\ucee4\ub9e8\ub4dc\ub77c\uc778",level:3},{value:"IDE \uad6c\uc131\ud558\uae30",id:"ide-\uad6c\uc131\ud558\uae30",level:2},{value:"Visual Studio Code",id:"visual-studio-code",level:3},{value:"Lite IDE",id:"lite-ide",level:3},{value:"\ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131",id:"\ud504\ub85c\uc81d\ud2b8-\uc0dd\uc131",level:2},{value:"GOPATH",id:"gopath",level:3},{value:"Go modules",id:"go-modules",level:3},{value:"Tips",id:"tips",level:2},{value:"Reference",id:"reference",level:3}],o={toc:L};function a(M){var e=M.components,u=(0,g.Z)(M,N);return(0,i.kt)("wrapper",(0,n.Z)({},o,u,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"go",src:t(93730).Z,width:"205",height:"77"}),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("em",{parentName:"p"},"\uace0(Golang) \uac1c\ubc1c\ud658\uacbd \uad6c\ucd95\ud558\uae30")),(0,i.kt)("h2",{id:"\uace0-\uc124\uce58\ud558\uae30"},"\uace0 \uc124\uce58\ud558\uae30"),(0,i.kt)("h3",{id:"\uc124\uce58\ud30c\uc77c"},"\uc124\uce58\ud30c\uc77c"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://golang.org/doc/install"},"\uacf5\uc2dd \uc0ac\uc774\ud2b8")," \uc5d0\uc11c \ucd5c\uc2e0 \ubc84\uc804\uc758 \uace0\ub97c \ub2e4\uc6b4\ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.  "),(0,i.kt)("h3",{id:"\ucee4\ub9e8\ub4dc\ub77c\uc778"},"\ucee4\ub9e8\ub4dc\ub77c\uc778"),(0,i.kt)("p",null,"\ucee4\ub9e8\ub4dc\ub77c\uc778\uc73c\ub85c \uc124\uce58\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# windows\n> choco install golang\n\n# ubuntu debian\n$ apt install golang-go\n\n# mac\n% brew install golang\n")),(0,i.kt)("br",null),(0,i.kt)("p",null,"\uc124\uce58\ub97c \uc644\ub8cc\ud558\uace0 \ud655\uc778\ud574 \ubd05\uc2dc\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ps1"},"> go version\ngo version go1.16.7 windows/amd64\n")),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"ide-\uad6c\uc131\ud558\uae30"},"IDE \uad6c\uc131\ud558\uae30"),(0,i.kt)("h3",{id:"visual-studio-code"},"Visual Studio Code"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"vscode",src:t(86864).Z,width:"100",height:"100"})),(0,i.kt)("p",null,"\ubc94\uc6a9\uc801\uc73c\ub85c \uc0ac\uc6a9\ud558\ub294 IDE \uc785\ub2c8\ub2e4.\n\ub2e4\ub978 \uc5b8\uc5b4\uc640 \ud568\uaed8 \ud1b5\ud569 \uac1c\ubc1c\uc774 \ud3b8\ud569\ub2c8\ub2e4.\n\ud655\uc7a5 \ud0ed\uc5d0\uc11c \uace0\uc5b8\uc5b4 \ud655\uc7a5\uc744 \uc124\uce58\ud574 \uc90d\ub2c8\ub2e4."),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"lite-ide"},"Lite IDE"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"lite-ide",src:t(73656).Z,width:"466",height:"466"})),(0,i.kt)("p",null,"\uace0 \uc804\uc6a9\uc73c\ub85c \ub098\uc628 IDE \uc785\ub2c8\ub2e4.\n\uace0\ub97c \uc704\ud574 \ub9cc\ub4e4\uc5b4\uc838 \ub514\ud14c\uc77c\ud55c \ud3b8\ub9ac\ud568\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://liteide.org/en/"},"[\uacf5\uc2dd]Lite IDE")),(0,i.kt)("p",null,"\uc774 \ubc16\uc5d0\ub3c4 JetBrain \ub4f1 \ub2e4\uc591\ud55c IDE\uac00 \uc788\uc2b5\ub2c8\ub2e4.  "),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"\ud504\ub85c\uc81d\ud2b8-\uc0dd\uc131"},"\ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131"),(0,i.kt)("p",null,"\uace0\uc5b8\uc5b4\uc758 \ud504\ub85c\uc81d\ud2b8 \uad6c\uc870\ub294 \uc5b4\ub5bb\uac8c \ub420\uae4c\uc694?"),(0,i.kt)("h3",{id:"gopath"},"GOPATH"),(0,i.kt)("p",null,"Go \uc5b8\uc5b4\uc758 ",(0,i.kt)("inlineCode",{parentName:"p"},"import"),"\ub97c \ubcf4\uba74 \uc870\uae08 \ud2b9\uc774\ud569\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'import (\n    "context"\n    "fmt"\n    "log"\n\n    "google.golang.org/grpc"\n    "google.golang.org/grpc/credentials"\n)\n')),(0,i.kt)("p",null,"\uc778\ud130\ub137\uc5d0 \uc788\ub294 \uc18c\uc2a4 \ucf54\ub4dc\ub97c \ubc1b\uc544\uc640\uc11c \ubc14\ub85c \uc0ac\uc6a9\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.\n\uadf8\ub807\ub2e4\uba74 \uc774 \uc18c\uc2a4\ucf54\ub4dc\ub294 \uc5b4\ub514\uc5d0 \uc800\uc7a5\ub420\uae4c\uc694?"),(0,i.kt)("p",null,"\uace0\uc5b8\uc5b4 \ud504\ub85c\uc81d\ud2b8\ub97c \uc0dd\uc131\ud558\uba74 ",(0,i.kt)("inlineCode",{parentName:"p"},"bin"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"pkg"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," \ub514\ub809\ud1a0\ub9ac\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4.\n\uac01\uac01\uc758 \ub514\ub809\ud1a0\ub9ac \uc5ed\ud560\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bin"),": \ucef4\ud30c\uc77c\ub41c \uc2e4\ud589\ud30c\uc77c(\ubc14\uc774\ub108\ub9ac)\uc774 \uc0dd\uc131\ub418\ub294 \ub514\ub809\ud1a0\ub9ac\uc785\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pkg"),": \ud328\ud0a4\uc9c0\ub97c \ucef4\ud30c\uc77c\ud55c \ub77c\uc774\ube0c\ub7ec\ub9ac \ud30c\uc77c\uc774 \uc0dd\uc131\ub418\ub294 \ub514\ub809\ud1a0\ub9ac\uc785\ub2c8\ub2e4.\n",(0,i.kt)("inlineCode",{parentName:"li"},"{\uc6b4\uc601\uccb4\uc81c}_{\uc544\ud0a4\ud14d\ucc98}")," \ud615\uc2dd\uc73c\ub85c \ub514\ub809\ud1a0\ub9ac\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4. ",(0,i.kt)("em",{parentName:"li"},"\uc608) ",(0,i.kt)("inlineCode",{parentName:"em"},"linux_amd64"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"src"),": \uc791\uc131\ud55c \uc18c\uc2a4\ud30c\uc77c\uacfc \uc778\ud130\ub137\uc5d0\uc11c \ub2e4\uc6b4\ub85c\ub4dc\ud55c \uc18c\uc2a4 \ud30c\uc77c\uc774 \uc800\uc7a5\ub418\ub294 \ub514\ub809\ud1a0\ub9ac\uc785\ub2c8\ub2e4.\n",(0,i.kt)("del",{parentName:"li"},"\uc65c \uc81c\uac70\uc5d0\ub294 \uc5c6\uc8e0?"))),(0,i.kt)("p",null,"\ub2e4\uc6b4\ub85c\ub4dc \uc18c\uc2a4 \ud30c\uc77c\uc740 ",(0,i.kt)("inlineCode",{parentName:"p"},"%USERPROFILE%\\go")," \uacbd\ub85c\uc5d0 \uc800\uc7a5\ub418\ub294 \uac83\uc73c\ub85c \ubcf4\uc785\ub2c8\ub2e4.(Windows)"),(0,i.kt)("p",null,"\ud504\ub85c\uc81d\ud2b8\ub97c \uc0dd\uc131\ud588\ub2e4\uba74, \ud504\ub85c\uc81d\ud2b8 \ub514\ub809\ud1a0\ub9ac \uacbd\ub85c\ub85c ",(0,i.kt)("inlineCode",{parentName:"p"},"GOPATH"),"\ub97c \uc124\uc815\ud574\uc57c \ud569\ub2c8\ub2e4.\n\uc708\ub3c4\uc6b0\uc5d0\uc11c\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"\uc81c\uc5b4\ud310"),"->",(0,i.kt)("inlineCode",{parentName:"p"},"\uc2dc\uc2a4\ud15c \ubc0f \ubcf4\uc548"),"->",(0,i.kt)("inlineCode",{parentName:"p"},"\uc2dc\uc2a4\ud15c"),"->",(0,i.kt)("inlineCode",{parentName:"p"},"\uace0\uae09 \uc2dc\uc2a4\ud15c \uc124\uc815"),"->",(0,i.kt)("inlineCode",{parentName:"p"},"\uace0\uae09"),"->",(0,i.kt)("inlineCode",{parentName:"p"},"\ud658\uacbd \ubcc0\uc218"),"\n\uc5d0\uc11c \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. CLI\ub97c \uc0ac\uc6a9\ud574\ub3c4 \ub429\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# linux/mac\n$ export GOPATH=${project_pwd}\n\n# \ub2e4\uc74c \uba85\ub839\uc5b4\ub85c \ud655\uc778\ud569\ub2c8\ub2e4\n$ go env\n")),(0,i.kt)("p",null,"\uc5ec\uae30\uc11c ",(0,i.kt)("inlineCode",{parentName:"p"},"GOROOT"),"\ub294 \ube4c\ud2b8\uc778 \ud328\ud0a4\uc9c0 \uc800\uc7a5 \uc704\uce58\uc785\ub2c8\ub2e4.\n",(0,i.kt)("inlineCode",{parentName:"p"},"C:\\Program Files\\Go")),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"go-modules"},"Go modules"),(0,i.kt)("p",null,"\ub2f9\uc5f0\ud558\uac8c\ub3c4 ",(0,i.kt)("inlineCode",{parentName:"p"},"import"),"\ud55c \uc778\ud130\ub137 \uc18c\uc2a4\ub97c \ub2e4\uc6b4\ubc1b\uc9c0 \uc54a\uace0 \ube4c\ub4dc/\uc2e4\ud589\ud558\uba74 \uc624\ub958\uac00 \ubc1c\uc0dd\ud569\ub2c8\ub2e4.\n\ud328\ud0a4\uc9c0 \uad00\ub9ac\ub97c \uc704\ud55c ",(0,i.kt)("inlineCode",{parentName:"p"},"go.mod")," \ud30c\uc77c \uc0dd\uc131\uacfc \uc18c\uc2a4 \ub2e4\uc6b4\ub85c\ub4dc\ub97c \ud558\ub824\uba74, \ub2e4\uc74c \uba85\ub839\uc5b4\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4.  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'> go mod init ${project}\ngo: creating new go.mod: module "project"\ngo: to add module requirements and sums:\n        go mod tidy\n        \n> go mod tidy\ngo: finding module for package google.golang.org/grpc/credentials\ngo: finding module for package google.golang.org/grpc\ngo: found google.golang.org/grpc in google.golang.org/grpc v1.39.1\ngo: found google.golang.org/grpc/credentials in google.golang.org/grpc v1.39.1\n')),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"em"},"go.mod")," \ud30c\uc77c\uc744 \ub9cc\ub4dc\ub294 \uac83\uc774 ",(0,i.kt)("a",{parentName:"em",href:"https://blog.golang.org/using-go-modules"},"\ud544\uc218")," \uac00 \ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("em",{parentName:"p"},"Go modules are the future of dependency management in Go")),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"tips"},"Tips"),(0,i.kt)("p",null,"\ud559\uc0dd\uc77c \ub54c ",(0,i.kt)("inlineCode",{parentName:"p"},"GOPATH"),"\ub85c \ucc38 \ud5e4\ub9f8\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"reference"},"Reference"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://golang.org/doc/install"},"[\uacf5\uc2dd]\uace0 \uc124\uce58"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"http://pyrasis.com/book/GoForTheReallyImpatient/Unit03"},"\uac00\uc7a5 \ube68\ub9ac \ub9cc\ub098\ub294 Go \uc5b8\uc5b4"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://blog.golang.org/using-go-modules"},"[\uacf5\uc2dd]Go modules")))}a.isMDXComponent=!0},93730:function(M,e){e.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyMDUuNCA3Ni43IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMDUuNCA3Ni43OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzAwQUNENzt9Cjwvc3R5bGU+CjxnPgoJPGc+CgkJPGc+CgkJCTxnPgoJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTE1LjUsMjMuMmMtMC40LDAtMC41LTAuMi0wLjMtMC41bDIuMS0yLjdjMC4yLTAuMywwLjctMC41LDEuMS0wLjVoMzUuN2MwLjQsMCwwLjUsMC4zLDAuMywwLjZsLTEuNywyLjYKCQkJCQljLTAuMiwwLjMtMC43LDAuNi0xLDAuNkwxNS41LDIzLjJ6Ii8+CgkJCTwvZz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPGc+CgkJCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMC40LDMyLjRjLTAuNCwwLTAuNS0wLjItMC4zLTAuNWwyLjEtMi43YzAuMi0wLjMsMC43LTAuNSwxLjEtMC41aDQ1LjZjMC40LDAsMC42LDAuMywwLjUsMC42bC0wLjgsMi40CgkJCQkJYy0wLjEsMC40LTAuNSwwLjYtMC45LDAuNkwwLjQsMzIuNHoiLz4KCQkJPC9nPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8Zz4KCQkJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yNC42LDQxLjZjLTAuNCwwLTAuNS0wLjMtMC4zLTAuNmwxLjQtMi41YzAuMi0wLjMsMC42LTAuNiwxLTAuNmgyMGMwLjQsMCwwLjYsMC4zLDAuNiwwLjdMNDcuMSw0MQoJCQkJCWMwLDAuNC0wLjQsMC43LTAuNywwLjdMMjQuNiw0MS42eiIvPgoJCQk8L2c+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPGcgaWQ9IkNYSGYxcV8zXyI+CgkJCTxnPgoJCQkJPGc+CgkJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTEyOC40LDIxLjRjLTYuMywxLjYtMTAuNiwyLjgtMTYuOCw0LjRjLTEuNSwwLjQtMS42LDAuNS0yLjktMWMtMS41LTEuNy0yLjYtMi44LTQuNy0zLjgKCQkJCQkJYy02LjMtMy4xLTEyLjQtMi4yLTE4LjEsMS41Yy02LjgsNC40LTEwLjMsMTAuOS0xMC4yLDE5YzAuMSw4LDUuNiwxNC42LDEzLjUsMTUuN2M2LjgsMC45LDEyLjUtMS41LDE3LTYuNgoJCQkJCQljMC45LTEuMSwxLjctMi4zLDIuNy0zLjdjLTMuNiwwLTguMSwwLTE5LjMsMGMtMi4xLDAtMi42LTEuMy0xLjktM2MxLjMtMy4xLDMuNy04LjMsNS4xLTEwLjljMC4zLTAuNiwxLTEuNiwyLjUtMS42CgkJCQkJCWM1LjEsMCwyMy45LDAsMzYuNCwwYy0wLjIsMi43LTAuMiw1LjQtMC42LDguMWMtMS4xLDcuMi0zLjgsMTMuOC04LjIsMTkuNmMtNy4yLDkuNS0xNi42LDE1LjQtMjguNSwxNwoJCQkJCQljLTkuOCwxLjMtMTguOS0wLjYtMjYuOS02LjZjLTcuNC01LjYtMTEuNi0xMy0xMi43LTIyLjJjLTEuMy0xMC45LDEuOS0yMC43LDguNS0yOS4zYzcuMS05LjMsMTYuNS0xNS4yLDI4LTE3LjMKCQkJCQkJYzkuNC0xLjcsMTguNC0wLjYsMjYuNSw0LjljNS4zLDMuNSw5LjEsOC4zLDExLjYsMTQuMUMxMzAsMjAuNiwxMjkuNiwyMS4xLDEyOC40LDIxLjR6Ii8+CgkJCQk8L2c+CgkJCQk8Zz4KCQkJCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTYxLjUsNzYuN2MtOS4xLTAuMi0xNy40LTIuOC0yNC40LTguOGMtNS45LTUuMS05LjYtMTEuNi0xMC44LTE5LjNjLTEuOC0xMS4zLDEuMy0yMS4zLDguMS0zMC4yCgkJCQkJCWM3LjMtOS42LDE2LjEtMTQuNiwyOC0xNi43YzEwLjItMS44LDE5LjgtMC44LDI4LjUsNS4xYzcuOSw1LjQsMTIuOCwxMi43LDE0LjEsMjIuM2MxLjcsMTMuNS0yLjIsMjQuNS0xMS41LDMzLjkKCQkJCQkJYy02LjYsNi43LTE0LjcsMTAuOS0yNCwxMi44QzE2Ni44LDc2LjMsMTY0LjEsNzYuNCwxNjEuNSw3Ni43eiBNMTg1LjMsMzYuM2MtMC4xLTEuMy0wLjEtMi4zLTAuMy0zLjMKCQkJCQkJYy0xLjgtOS45LTEwLjktMTUuNS0yMC40LTEzLjNjLTkuMywyLjEtMTUuMyw4LTE3LjUsMTcuNGMtMS44LDcuOCwyLDE1LjcsOS4yLDE4LjljNS41LDIuNCwxMSwyLjEsMTYuMy0wLjYKCQkJCQkJQzE4MC41LDUxLjMsMTg0LjgsNDQuOSwxODUuMywzNi4zeiIvPgoJCQkJPC9nPgoJCQk8L2c+CgkJPC9nPgoJPC9nPgo8L2c+Cjwvc3ZnPgo="},73656:function(M,e,t){e.Z=t.p+"assets/images/lite-ide-88a42ae353275609b44635e29e11e0a2.jpg"},86864:function(M,e){e.Z="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPG1hc2sgaWQ9Im1hc2swIiBtYXNrLXR5cGU9ImFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNzAuOTExOSA5OS4zMTcxQzcyLjQ4NjkgOTkuOTMwNyA3NC4yODI4IDk5Ljg5MTQgNzUuODcyNSA5OS4xMjY0TDk2LjQ2MDggODkuMjE5N0M5OC42MjQyIDg4LjE3ODcgMTAwIDg1Ljk4OTIgMTAwIDgzLjU4NzJWMTYuNDEzM0MxMDAgMTQuMDExMyA5OC42MjQzIDExLjgyMTggOTYuNDYwOSAxMC43ODA4TDc1Ljg3MjUgMC44NzM3NTZDNzMuNzg2MiAtMC4xMzAxMjkgNzEuMzQ0NiAwLjExNTc2IDY5LjUxMzUgMS40NDY5NUM2OS4yNTIgMS42MzcxMSA2OS4wMDI4IDEuODQ5NDMgNjguNzY5IDIuMDgzNDFMMjkuMzU1MSAzOC4wNDE1TDEyLjE4NzIgMjUuMDA5NkMxMC41ODkgMjMuNzk2NSA4LjM1MzYzIDIzLjg5NTkgNi44NjkzMyAyNS4yNDYxTDEuMzYzMDMgMzAuMjU0OUMtMC40NTI1NTIgMzEuOTA2NCAtMC40NTQ2MzMgMzQuNzYyNyAxLjM1ODUzIDM2LjQxN0wxNi4yNDcxIDUwLjAwMDFMMS4zNTg1MyA2My41ODMyQy0wLjQ1NDYzMyA2NS4yMzc0IC0wLjQ1MjU1MiA2OC4wOTM4IDEuMzYzMDMgNjkuNzQ1M0w2Ljg2OTMzIDc0Ljc1NDFDOC4zNTM2MyA3Ni4xMDQzIDEwLjU4OSA3Ni4yMDM3IDEyLjE4NzIgNzQuOTkwNUwyOS4zNTUxIDYxLjk1ODdMNjguNzY5IDk3LjkxNjdDNjkuMzkyNSA5OC41NDA2IDcwLjEyNDYgOTkuMDEwNCA3MC45MTE5IDk5LjMxNzFaTTc1LjAxNTIgMjcuMjk4OUw0NS4xMDkxIDUwLjAwMDFMNzUuMDE1MiA3Mi43MDEyVjI3LjI5ODlaIiBmaWxsPSJ3aGl0ZSIvPgo8L21hc2s+CjxnIG1hc2s9InVybCgjbWFzazApIj4KPHBhdGggZD0iTTk2LjQ2MTQgMTAuNzk2Mkw3NS44NTY5IDAuODc1NTQyQzczLjQ3MTkgLTAuMjcyNzczIDcwLjYyMTcgMC4yMTE2MTEgNjguNzUgMi4wODMzM0wxLjI5ODU4IDYzLjU4MzJDLTAuNTE1NjkzIDY1LjIzNzMgLTAuNTEzNjA3IDY4LjA5MzcgMS4zMDMwOCA2OS43NDUyTDYuODEyNzIgNzQuNzU0QzguMjk3OTMgNzYuMTA0MiAxMC41MzQ3IDc2LjIwMzYgMTIuMTMzOCA3NC45OTA1TDkzLjM2MDkgMTMuMzY5OUM5Ni4wODYgMTEuMzAyNiAxMDAgMTMuMjQ2MiAxMDAgMTYuNjY2N1YxNi40Mjc1QzEwMCAxNC4wMjY1IDk4LjYyNDYgMTEuODM3OCA5Ni40NjE0IDEwLjc5NjJaIiBmaWxsPSIjMDA2NUE5Ii8+CjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2QpIj4KPHBhdGggZD0iTTk2LjQ2MTQgODkuMjAzOEw3NS44NTY5IDk5LjEyNDVDNzMuNDcxOSAxMDAuMjczIDcwLjYyMTcgOTkuNzg4NCA2OC43NSA5Ny45MTY3TDEuMjk4NTggMzYuNDE2OUMtMC41MTU2OTMgMzQuNzYyNyAtMC41MTM2MDcgMzEuOTA2MyAxLjMwMzA4IDMwLjI1NDhMNi44MTI3MiAyNS4yNDZDOC4yOTc5MyAyMy44OTU4IDEwLjUzNDcgMjMuNzk2NCAxMi4xMzM4IDI1LjAwOTVMOTMuMzYwOSA4Ni42MzAxQzk2LjA4NiA4OC42OTc0IDEwMCA4Ni43NTM4IDEwMCA4My4zMzM0VjgzLjU3MjZDMTAwIDg1Ljk3MzUgOTguNjI0NiA4OC4xNjIyIDk2LjQ2MTQgODkuMjAzOFoiIGZpbGw9IiMwMDdBQ0MiLz4KPC9nPgo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMV9kKSI+CjxwYXRoIGQ9Ik03NS44NTc4IDk5LjEyNjNDNzMuNDcyMSAxMDAuMjc0IDcwLjYyMTkgOTkuNzg4NSA2OC43NSA5Ny45MTY2QzcxLjA1NjQgMTAwLjIyMyA3NSA5OC41ODk1IDc1IDk1LjMyNzhWNC42NzIxM0M3NSAxLjQxMDM5IDcxLjA1NjQgLTAuMjIzMTA2IDY4Ljc1IDIuMDgzMjlDNzAuNjIxOSAwLjIxMTQwMiA3My40NzIxIC0wLjI3MzY2NiA3NS44NTc4IDAuODczNjMzTDk2LjQ1ODcgMTAuNzgwN0M5OC42MjM0IDExLjgyMTcgMTAwIDE0LjAxMTIgMTAwIDE2LjQxMzJWODMuNTg3MUMxMDAgODUuOTg5MSA5OC42MjM0IDg4LjE3ODYgOTYuNDU4NiA4OS4yMTk2TDc1Ljg1NzggOTkuMTI2M1oiIGZpbGw9IiMxRjlDRjAiLz4KPC9nPgo8ZyBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6b3ZlcmxheSIgb3BhY2l0eT0iMC4yNSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNzAuODUxMSA5OS4zMTcxQzcyLjQyNjEgOTkuOTMwNiA3NC4yMjIxIDk5Ljg5MTMgNzUuODExNyA5OS4xMjY0TDk2LjQgODkuMjE5N0M5OC41NjM0IDg4LjE3ODcgOTkuOTM5MiA4NS45ODkyIDk5LjkzOTIgODMuNTg3MVYxNi40MTMzQzk5LjkzOTIgMTQuMDExMiA5OC41NjM1IDExLjgyMTcgOTYuNDAwMSAxMC43ODA3TDc1LjgxMTcgMC44NzM2OTVDNzMuNzI1NSAtMC4xMzAxOSA3MS4yODM4IDAuMTE1Njk5IDY5LjQ1MjcgMS40NDY4OEM2OS4xOTEyIDEuNjM3MDUgNjguOTQyIDEuODQ5MzcgNjguNzA4MiAyLjA4MzM1TDI5LjI5NDMgMzguMDQxNEwxMi4xMjY0IDI1LjAwOTZDMTAuNTI4MyAyMy43OTY0IDguMjkyODUgMjMuODk1OSA2LjgwODU1IDI1LjI0NkwxLjMwMjI1IDMwLjI1NDhDLTAuNTEzMzM0IDMxLjkwNjQgLTAuNTE1NDE1IDM0Ljc2MjcgMS4yOTc3NSAzNi40MTY5TDE2LjE4NjMgNTBMMS4yOTc3NSA2My41ODMyQy0wLjUxNTQxNSA2NS4yMzc0IC0wLjUxMzMzNCA2OC4wOTM3IDEuMzAyMjUgNjkuNzQ1Mkw2LjgwODU1IDc0Ljc1NEM4LjI5Mjg1IDc2LjEwNDIgMTAuNTI4MyA3Ni4yMDM2IDEyLjEyNjQgNzQuOTkwNUwyOS4yOTQzIDYxLjk1ODZMNjguNzA4MiA5Ny45MTY3QzY5LjMzMTcgOTguNTQwNSA3MC4wNjM4IDk5LjAxMDQgNzAuODUxMSA5OS4zMTcxWk03NC45NTQ0IDI3LjI5ODlMNDUuMDQ4MyA1MEw3NC45NTQ0IDcyLjcwMTJWMjcuMjk4OVoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4KPC9nPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2QiIHg9Ii04LjM5NDExIiB5PSIxNS44MjkxIiB3aWR0aD0iMTE2LjcyNyIgaGVpZ2h0PSI5Mi4yNDU2IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIi8+CjxmZU9mZnNldC8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjQuMTY2NjciLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMjUgMCIvPgo8ZmVCbGVuZCBtb2RlPSJvdmVybGF5IiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3ciLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3ciIHJlc3VsdD0ic2hhcGUiLz4KPC9maWx0ZXI+CjxmaWx0ZXIgaWQ9ImZpbHRlcjFfZCIgeD0iNjAuNDE2NyIgeT0iLTguMDc1NTgiIHdpZHRoPSI0Ny45MTY3IiBoZWlnaHQ9IjExNi4xNTEiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiLz4KPGZlT2Zmc2V0Lz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iNC4xNjY2NyIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4yNSAwIi8+CjxmZUJsZW5kIG1vZGU9Im92ZXJsYXkiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9ImVmZmVjdDFfZHJvcFNoYWRvdyIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvdyIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyIiB4MT0iNDkuOTM5MiIgeTE9IjAuMjU3ODEyIiB4Mj0iNDkuOTM5MiIgeTI9Ijk5Ljc0MjMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0id2hpdGUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSJ3aGl0ZSIgc3RvcC1vcGFjaXR5PSIwIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg=="}}]);