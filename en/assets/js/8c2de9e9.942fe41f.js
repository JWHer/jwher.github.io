"use strict";(self.webpackChunkjwher_blog=self.webpackChunkjwher_blog||[]).push([[7939],{3905:(M,e,N)=>{N.d(e,{Zo:()=>i,kt:()=>y});var j=N(67294);function u(M,e,N){return e in M?Object.defineProperty(M,e,{value:N,enumerable:!0,configurable:!0,writable:!0}):M[e]=N,M}function t(M,e){var N=Object.keys(M);if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(M);e&&(j=j.filter((function(e){return Object.getOwnPropertyDescriptor(M,e).enumerable}))),N.push.apply(N,j)}return N}function L(M){for(var e=1;e<arguments.length;e++){var N=null!=arguments[e]?arguments[e]:{};e%2?t(Object(N),!0).forEach((function(e){u(M,e,N[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(N)):t(Object(N)).forEach((function(e){Object.defineProperty(M,e,Object.getOwnPropertyDescriptor(N,e))}))}return M}function T(M,e){if(null==M)return{};var N,j,u=function(M,e){if(null==M)return{};var N,j,u={},t=Object.keys(M);for(j=0;j<t.length;j++)N=t[j],e.indexOf(N)>=0||(u[N]=M[N]);return u}(M,e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(M);for(j=0;j<t.length;j++)N=t[j],e.indexOf(N)>=0||Object.prototype.propertyIsEnumerable.call(M,N)&&(u[N]=M[N])}return u}var n=j.createContext({}),D=function(M){var e=j.useContext(n),N=e;return M&&(N="function"==typeof M?M(e):L(L({},e),M)),N},i=function(M){var e=D(M.components);return j.createElement(n.Provider,{value:e},M.children)},a="mdxType",g={inlineCode:"code",wrapper:function(M){var e=M.children;return j.createElement(j.Fragment,{},e)}},I=j.forwardRef((function(M,e){var N=M.components,u=M.mdxType,t=M.originalType,n=M.parentName,i=T(M,["components","mdxType","originalType","parentName"]),a=D(N),I=u,y=a["".concat(n,".").concat(I)]||a[I]||g[I]||t;return N?j.createElement(y,L(L({ref:e},i),{},{components:N})):j.createElement(y,L({ref:e},i))}));function y(M,e){var N=arguments,u=e&&e.mdxType;if("string"==typeof M||u){var t=N.length,L=new Array(t);L[0]=I;var T={};for(var n in e)hasOwnProperty.call(e,n)&&(T[n]=e[n]);T.originalType=M,T[a]="string"==typeof M?M:u,L[1]=T;for(var D=2;D<t;D++)L[D]=N[D];return j.createElement.apply(null,L)}return j.createElement.apply(null,N)}I.displayName="MDXCreateElement"},37319:(M,e,N)=>{N.r(e),N.d(e,{assets:()=>n,contentTitle:()=>L,default:()=>g,frontMatter:()=>t,metadata:()=>T,toc:()=>D});var j=N(87462),u=(N(67294),N(3905));const t={authors:["jwher"],description:"\ub3c4\ucee4 \ucee8\ud14c\uc774\ub108\uc640 \uacf5\uc720 \ubcfc\ub968",slug:"docker-shared-volume",tags:["tech","docker","linux"],title:"Docker Shared Volume"},L=void 0,T={permalink:"/en/posts/docker-shared-volume",editUrl:"https://github.com/jwher/jwher.github.io/posts/2021-08-05-docker-shared-volume/index.md",source:"@site/posts/2021-08-05-docker-shared-volume/index.md",title:"Docker Shared Volume",description:"\ub3c4\ucee4 \ucee8\ud14c\uc774\ub108\uc640 \uacf5\uc720 \ubcfc\ub968",date:"2021-08-05T00:00:00.000Z",formattedDate:"August 5, 2021",tags:[{label:"tech",permalink:"/en/posts/tags/tech"},{label:"docker",permalink:"/en/posts/tags/docker"},{label:"linux",permalink:"/en/posts/tags/linux"}],readingTime:9.86,hasTruncateMarker:!0,authors:[{name:"Jeongwon Her",title:"MLOps Engineer",url:"https://github.com/jwher",imageURL:"https://github.com/jwher.png",key:"jwher"}],frontMatter:{authors:["jwher"],description:"\ub3c4\ucee4 \ucee8\ud14c\uc774\ub108\uc640 \uacf5\uc720 \ubcfc\ub968",slug:"docker-shared-volume",tags:["tech","docker","linux"],title:"Docker Shared Volume"},prevItem:{title:"Golang Setup",permalink:"/en/posts/golang-setup"},nextItem:{title:"Variable Autoencoder",permalink:"/en/posts/variable-autoencoder"}},n={authorsImageUrls:[void 0]},D=[{value:"\ub9ac\ub205\uc2a4 \uc0ac\uc6a9\uc790\uc640 \uadf8\ub8f9",id:"\ub9ac\ub205\uc2a4-\uc0ac\uc6a9\uc790\uc640-\uadf8\ub8f9",level:2},{value:"\ucee8\ud14c\uc774\ub108 \uc2e4\uc2b5",id:"\ucee8\ud14c\uc774\ub108-\uc2e4\uc2b5",level:2},{value:"\uc2e4\uc2b51",id:"\uc2e4\uc2b51",level:3},{value:"\uc2e4\uc2b52",id:"\uc2e4\uc2b52",level:3},{value:"\uc2e4\uc2b53",id:"\uc2e4\uc2b53",level:3},{value:"\uc815\ub9ac",id:"\uc815\ub9ac",level:3},{value:"\uacf5\uc720 \ubcfc\ub968",id:"\uacf5\uc720-\ubcfc\ub968",level:2},{value:"\ub05d?",id:"\ub05d",level:3},{value:"Tips",id:"tips",level:2},{value:"Reference",id:"reference",level:3}],i={toc:D},a="wrapper";function g(M){let{components:e,...t}=M;return(0,u.kt)(a,(0,j.Z)({},i,t,{components:e,mdxType:"MDXLayout"}),(0,u.kt)("p",null,(0,u.kt)("img",{alt:"docker",src:N(98996).Z,width:"2500",height:"2100"}),"\n",(0,u.kt)("em",{parentName:"p"},"\ub3c4\ucee4 \ucee8\ud14c\uc774\ub108\uc640 \uacf5\uc720 \ubcfc\ub968 \uad8c\ud55c \ubb38\uc81c \ud574\uacb0"),"  "),(0,u.kt)("h1",{id:"\ubaa9\ucc28"},"\ubaa9\ucc28"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"#%EB%A6%AC%EB%88%85%EC%8A%A4-%EC%82%AC%EC%9A%A9%EC%9E%90%EC%99%80-%EA%B7%B8%EB%A3%B9"},"\ub9ac\ub205\uc2a4 \uc0ac\uc6a9\uc790\uc640 \uadf8\ub8f9")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"#%EC%BB%A8%ED%85%8C%EC%9D%B4%EB%84%88-%EC%8B%A4%EC%8A%B5"},"\ucee8\ud14c\uc774\ub108 \uc2e4\uc2b5")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"#%EA%B3%B5%EC%9C%A0-%EB%B3%BC%EB%A5%A8"},"\uacf5\uc720 \ubcfc\ub968"))),(0,u.kt)("h2",{id:"\ub9ac\ub205\uc2a4-\uc0ac\uc6a9\uc790\uc640-\uadf8\ub8f9"},"\ub9ac\ub205\uc2a4 \uc0ac\uc6a9\uc790\uc640 \uadf8\ub8f9"),(0,u.kt)("p",null,"\ub9ac\ub205\uc2a4 \ucee4\ub110\uc740 ",(0,u.kt)("inlineCode",{parentName:"p"},"uid"),", ",(0,u.kt)("inlineCode",{parentName:"p"},"gid")," \uacf5\uac04\uc744 \uad00\ub9ac\ud569\ub2c8\ub2e4.\n\uc774 \uc815\ubcf4\ub294 \ucee4\ub110 \ub808\ubca8\uc758 syscall \uc694\uccad\uc5d0 \uad8c\ud55c\uc774 \uc788\ub294\uc9c0 \ud310\ub2e8\ud558\ub294\ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4.",(0,u.kt)("br",{parentName:"p"}),"\n",(0,u.kt)("a",{parentName:"p",href:"https://ko.wikipedia.org/wiki/%ED%8C%8C%EC%9D%BC_%EC%8B%9C%EC%8A%A4%ED%85%9C_%EA%B6%8C%ED%95%9C"},"[\uc704\ud0a4]\ud30c\uc77c \uc2dc\uc2a4\ud15c \uad8c\ud55c")),(0,u.kt)("blockquote",null,(0,u.kt)("p",{parentName:"blockquote"},"vi\ub85c write \uad8c\ud55c\uc774 \uc5c6\ub294 \ud30c\uc77c\uc744 \ud3b8\uc9d1\ud560 \ub54c\n",(0,u.kt)("inlineCode",{parentName:"p"},"Warning: Changing a readonly file"),"\ub97c \ubcf4\uc2e0\uc801\uc774 \uc788\ub098\uc694? ")),(0,u.kt)("p",null,"\ub3c4\ucee4 \ucee8\ud14c\uc774\ub108\ub97c \ud638\uc2a4\ud2b8 \uc11c\ubc84\uc5d0\uc11c \uc2e4\ud589\ud558\uba74 \ud558\ub098\uc758 \ucee4\ub110\uc744 \uacf5\uc720\ud569\ub2c8\ub2e4.\n\ucee8\ud14c\uc774\ub108\ud654\uc758 \uac00\uc7a5 \ud070 \uc7a5\uc810\uc73c\ub85c \uaca9\ub9ac\ub41c \ud504\ub85c\uc138\uc2a4\uac00 \ucee4\ub110\uc744 \uacf5\uc720\ud574 ",(0,u.kt)("strong",{parentName:"p"},"\ube60\ub974\ub2e4"),"\ub294 \uac83\uc774\uc8e0.\n",(0,u.kt)("em",{parentName:"p"},"(\ub3c4\ucee4\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,u.kt)("a",{parentName:"em",href:"https://jwher.github.io/welcome-to-docker"},"\uc774\uae00")," \uc744 \ubcf4\uba74 \ub3c4\uc6c0\uc774 \ub420 \uac83\uc785\ub2c8\ub2e4!)"),"\n\ud83d\ude0b"),(0,u.kt)("p",null,"\uc774 \uae00\uc5d0\uc120 \uc5ec\ub7ec \uc2e4\uc2b5\uc744 \ud1b5\ud574 \ud638\uc2a4\ud2b8\uc640 \ucee8\ud14c\uc774\ub108\uc758 ",(0,u.kt)("inlineCode",{parentName:"p"},"uid")," \uad00\ub9ac \ubc29\ubc95\uc744 \uc54c\uc544\ubd05\ub2c8\ub2e4.\n\ud574\uacb0\ubc29\ubc95\ub9cc \ucc3e\uc73c\uc2e0\ub2e4\uba74 ",(0,u.kt)("a",{parentName:"p",href:"#%EA%B3%B5%EC%9C%A0-%EB%B3%BC%EB%A5%A8"},"\uacf5\uc720 \ubcfc\ub968"),"\uc73c\ub85c \ub118\uc5b4\uac00\uc8fc\uc138\uc694:)"),(0,u.kt)("br",null),(0,u.kt)("h2",{id:"\ucee8\ud14c\uc774\ub108-\uc2e4\uc2b5"},"\ucee8\ud14c\uc774\ub108 \uc2e4\uc2b5"),(0,u.kt)("p",null,"\ud558\ub098\uc758 \ucee4\ub110\uc744 \uacf5\uc720\ud55c\ub2e4\ub294 \ub9d0\uc740, \ucee8\ud14c\uc774\ub108\uc5d0\uc11c \ub3d9\uc791\ud558\ub294 ",(0,u.kt)("inlineCode",{parentName:"p"},"uid"),"\uc640 ",(0,u.kt)("inlineCode",{parentName:"p"},"gid")," \ub610\ud55c \ud55c \ucee4\ub110\uc5d0\uc11c \uad00\ub9ac\ub418\uace0 \uc788\uc74c\uc744 \ub73b\ud569\ub2c8\ub2e4.\n\uadf8\ub807\ub2e4\uba74, \ucee8\ud14c\uc774\ub108\ub97c \uc2e4\ud589\uc2dc\ud0a4\uba74 \ud638\uc2a4\ud2b8\uc758 \uc5b4\ub5a4 \uc0ac\uc6a9\uc790\ub85c \uc2e4\ud589\uc774 \ub420\uae4c\uc694?",(0,u.kt)("br",{parentName:"p"}),"\n","\u26a0 ",(0,u.kt)("em",{parentName:"p"},"\uc8fc\uc758! \uc774 \uc2e4\uc2b5\uc740 WSL(OSX)\uc5d0\uc11c \uc9c4\ud589\ud558\uae30 \uc5b4\ub835\uc2b5\ub2c8\ub2e4.(root uid \ubb38\uc81c)")),(0,u.kt)("br",null),(0,u.kt)("h3",{id:"\uc2e4\uc2b51"},"\uc2e4\uc2b51"),(0,u.kt)("p",null,"\ucee8\ud14c\uc774\ub108 \ud558\ub098\ub97c \uc2e4\ud589\uc2dc\ucf1c \ubd05\uc2dc\ub2e4"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-shell"},"$ docker run -d ubuntu:latest sleep infinity\nUnable to find image 'ubuntu:latest' locally\nlatest: Pulling from library/ubuntu\ne3f93fd10ed7fe7fa402150fe94fa7235b55d68d12a021a0b5a8427af36e3a8b\n")),(0,u.kt)("p",null,"\ud638\uc2a4\ud2b8\uc758 \ud504\ub85c\uc138\uc2a4\ub97c \uc870\ud68c\ud574 \ubd05\uc2dc\ub2e4"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-shell"},'$ ps aux | grep "sleep infinity"\nUSER         PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND\nroot     3924499  0.0  0.0   2516   592 ?        Ss   11:26   0:00 sleep infinity\n')),(0,u.kt)("p",null,"\ucee8\ud14c\uc774\ub108\ub97c \uc2e4\ud589\ud560 \ub54c, \uc5b4\ub5a0\ud55c root \uad8c\ud55c\uc744 \uc8fc\uc9c0 \uc54a\uc558\uc9c0\ub9cc sleep infinity \ud504\ub85c\uc138\uc2a4\ub294 root \uc0ac\uc6a9\uc790\ub85c \uc2e4\ud589\ub418\uc5c8\uc2b5\ub2c8\ub2e4.\n\ucee8\ud14c\uc774\ub108 \ub0b4\ubd80\uc5d0\uc11c \ud574\ub2f9 \ud504\ub85c\uc138\uc2a4\uc758 ppid\ub97c \uc870\ud68c\ud574 \ubcf4\uc544\ub3c4 0\ubc88, \uc989 root \uc0ac\uc6a9\uc790\uac00 \uc2e4\ud589\ud55c \ud504\ub85c\uc138\uc2a4\ub85c \uc870\ud68c\ub429\ub2c8\ub2e4.\u2728  "),(0,u.kt)("br",null),(0,u.kt)("h3",{id:"\uc2e4\uc2b52"},"\uc2e4\uc2b52"),(0,u.kt)("p",null,"\ud638\uc2a4\ud2b8 \uacc4\uc815\uc758 ",(0,u.kt)("inlineCode",{parentName:"p"},"uid"),"\ub97c \ud655\uc778\ud574 \ubd05\uc2dc\ub2e4.  "),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-shell"},"$ echo $UID\n1000\n")),(0,u.kt)("p",null,"(\ud544\uc694\ud558\uba74 \uc0c8\ub85c\uc6b4 \ub9ac\ub205\uc2a4 \uacc4\uc815\uc744 \ucd94\uac00\ud574 \uc90d\uc2dc\ub2e4.)"),(0,u.kt)("p",null,"\uac19\uc740 ",(0,u.kt)("inlineCode",{parentName:"p"},"uid"),"\ub97c \uc0ac\uc6a9\ud574 \uba85\ub839\uc744 \uc2e4\ud589\ud560 ",(0,u.kt)("strong",{parentName:"p"},"\uc774\ubbf8\uc9c0"),"\ub97c \ub9cc\ub4e4\uc5b4\uc90d\ub2c8\ub2e4."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-dockerfile"},'FROM ubuntu:latest\nRUN groupadd containeruser\nRUN useradd -r -u 1000 -g containeruser containeruser\nUSER containeruser\nCMD ["sleep", "infinity"]\n')),(0,u.kt)("p",null,"\ube4c\ub4dc\ud558\uace0 \uc2e4\ud589\ud574 \ud655\uc778\ud574 \ubd05\uc2dc\ub2e4."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-shell"},'$ docker build -t test .\n[+] Building 1.5s (7/7) FINISHED\n... \uc0dd\ub7b5 ...\n\n$ docker run -d test\nebea1fe7c62de99b9747ea3830cb2b734c4e79907dd9b7b1eb2adf6dce2f9791\n$ ps aux | grep "sleep infinity"\nUSER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND\njwher     4891  0.0  0.0   2508   588 ?        Ss   07:09   0:00 sleep infinity\n\n$ docker exec -it ebea /bin/bash\ncontaineruser@ebea1fe7c62d:/$ ps aux | grep "sleep infinity"\nUSER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND\ncontain+     1  0.0  0.0   2508   588 ?        Ss   07:09   0:00 sleep infinity\n')),(0,u.kt)("p",null,"\ucee8\ud14c\uc774\ub108\ub294 ",(0,u.kt)("inlineCode",{parentName:"p"},"uid")," 1000\uc758 ",(0,u.kt)("inlineCode",{parentName:"p"},"containeruser")," \uc0ac\uc6a9\uc790\ub85c \uc2e4\ud589\ud588\uc2b5\ub2c8\ub2e4.\n\ud558\uc9c0\ub9cc \uc774\ubbf8\uc9c0 \ube4c\ub4dc\uacfc\uc815\uc5d0\uc11c \ub9cc\ub4e0 ",(0,u.kt)("inlineCode",{parentName:"p"},"containeruser"),"\ub294 \ud638\uc2a4\ud2b8\uc5d0 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.\n\uc774\ub54c, \ud638\uc2a4\ud2b8\uc5d0\uc11c \ud504\ub85c\uc138\uc2a4\ub97c \uc2e4\ud589\uc2dc\ud0a4\ub294 ",(0,u.kt)("inlineCode",{parentName:"p"},"uid"),"\ub294\n\ub3c4\ucee4 ",(0,u.kt)("strong",{parentName:"p"},"\uc774\ubbf8\uc9c0"),"\uac00 \uc54c\uace0\uc788\ub294 \uc0ac\uc6a9\uc790\uc758 ",(0,u.kt)("inlineCode",{parentName:"p"},"uid")," 1000 \uc785\ub2c8\ub2e4.\n\ub530\ub77c\uc11c, \ud638\uc2a4\ud2b8\uc5d0\uc11c \uc2e4\ud589\uc911\uc778 \ud504\ub85c\uc138\uc2a4\ub97c \uc870\ud68c\ud558\uba74 ",(0,u.kt)("inlineCode",{parentName:"p"},"uid")," 1000\uc5d0 \ud574\ub2f9\ud558\ub294 \uc0ac\uc6a9\uc790 ",(0,u.kt)("inlineCode",{parentName:"p"},"jwher"),"\uac00 \ub9f5\ud551\ub429\ub2c8\ub2e4."),(0,u.kt)("p",null,"\uc774 \uc2e4\uc2b5\uc5d0\uc11c \uc911\uc694\ud55c \uc810\uc740 \ucee8\ud14c\uc774\ub108 \uc0ac\uc6a9\uc790 ",(0,u.kt)("inlineCode",{parentName:"p"},"containeruser"),"\ub294 \ud638\uc2a4\ud2b8\uc758 ",(0,u.kt)("inlineCode",{parentName:"p"},"jwher"),"\uc758 \uad8c\ud55c\uc744 \uac16\ub294 \uac83\uc785\ub2c8\ub2e4.\n\ud638\uc2a4\ud2b8\uc5d0\uc11c ",(0,u.kt)("inlineCode",{parentName:"p"},"jwher"),"\uc5d0 \uad8c\ud55c\uc744 \ubd80\uc5ec\ud558\uba74 ",(0,u.kt)("inlineCode",{parentName:"p"},"containeruser"),"\uc5d0\uac8c\ub3c4 \uac19\uc740 \uad8c\ud55c\uc774 \ubd80\uc5ec\ub429\ub2c8\ub2e4.\u2764\ufe0f  "),(0,u.kt)("p",null,(0,u.kt)("em",{parentName:"p"},"\ub2e4\uc2dc \ub9d0\ud574 ",(0,u.kt)("inlineCode",{parentName:"em"},"uid")," 1000\uc774 \uc911\uc694\ud55c \uac83\uc774\uc9c0 ",(0,u.kt)("strong",{parentName:"em"},"\uc774\ub984"),"\uc774 \uc911\uc694\ud55c \uac83\uc774 \uc544\ub2d9\ub2c8\ub2e4")),(0,u.kt)("details",{markdown:"1"},(0,u.kt)("summary",null,"/etc/passwd"),(0,u.kt)("p",null,(0,u.kt)("inlineCode",{parentName:"p"},"\uc2e4\uc2b52")," \ucee8\ud14c\uc774\ub108\ub97c \uc7a0\uc2dc \uc0b4\ud3b4\ubcfc\uae4c\uc694?"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-shell"},"containeruser@ebea1fe7c62d:/$ cat /etc/passwd | grep containeruser\ncontaineruser:x:1000:1000::/home/containeruser:/bin/sh\n"))),(0,u.kt)("br",null),(0,u.kt)("h3",{id:"\uc2e4\uc2b53"},"\uc2e4\uc2b53"),(0,u.kt)("p",null,"\ub3c4\ucee4 \ub7f0\ud0c0\uc784 \uc635\uc158\uc73c\ub85c uid\ub97c \uc9c0\uc815\ud574 \uc2e4\ud589\ud574 \ubd05\uc2dc\ub2e4."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-shell"},'$ docker run -d --user 1000 ubuntu:latest sleep infinity\n19fd5efdc631f3f102ab5bd2b4759dba228f9f8c14a85a15362d7dc5ca25200b\n\n$ ps aux | grep "sleep infinity"\nUSER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND\njwher     6073  0.0  0.0   2508   584 ?        Ss   07:26   0:00 sleep infinity\n\n$ docker exec -it 19fd /bin/bash\nI have no name!@19fd5efdc631:/$ ps aux | grep "sleep infinity"\nUSER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND\n1000         1  0.0  0.0   2508   584 ?        Ss   07:26   0:00 sleep infinity\n')),(0,u.kt)("p",null,"\uc2e0\uae30\ud558\uac8c\ub3c4 \ucee8\ud14c\uc774\ub108 \uc0ac\uc6a9\uc790\uac00 ",(0,u.kt)("inlineCode",{parentName:"p"},"I have no name!"),"\uc73c\ub85c \ub098\ud0c0\ub0a9\ub2c8\ub2e4.\ud83d\ude06\n\uc774\ub294 /etc/passwd \ud30c\uc77c\uc5d0 uid 1000\uc774 \uc874\uc7ac\ud558\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4.\n\ub530\ub77c\uc11c bash \uc258\uc774 ",(0,u.kt)("inlineCode",{parentName:"p"},"I have no name!"),"\uc744 \ud45c\uc2dc\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,u.kt)("p",null,"\uc774 \uc2e4\uc2b5\uc5d0\uc11c \uc911\uc694\ud55c \uc810\uc740 \ub7f0\ud0c0\uc784 \uc635\uc158\uc73c\ub85c \ucee8\ud14c\uc774\ub108\ub97c \ub9cc\ub4e4\uba74 Dockerfile\uc758 \uac12\uc744 \uc624\ubc84\ub77c\uc774\ub4dc\ud55c\ub2e4\ub294 \uac83\uc785\ub2c8\ub2e4.  "),(0,u.kt)("p",null,(0,u.kt)("inlineCode",{parentName:"p"},"\uc2e4\uc2b52"),"\uc5d0\uc11c \ub9cc\ub4e0 \uc774\ubbf8\uc9c0\ub97c \ub2e4\uc2dc \uc0ac\uc6a9\ud574 \ubd05\uc2dc\ub2e4"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-shell"},'$ docker run --user 0 -d test\n9306686a63a954bdfa62b162dedb486ba5162f270b5d01b1057aeb9130695bb5\n\n$ ps aux | grep "sleep infinity"\nUSER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND\nroot   1535053  0.4  0.0   2516   584 ?        Ss   16:47   0:00 sleep infinity\n\n$ docker exec -it 9306 /bin/bash\nroot@9306686a63a9:/# ps aux | grep "sleep infinity"\nUSER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND\nroot         1  0.0  0.0   2516   584 ?        Ss   07:47   0:00 sleep infinity\n')),(0,u.kt)("p",null,"uid 0\uc758 ",(0,u.kt)("inlineCode",{parentName:"p"},"root"),"\ub85c \uc624\ubc84\ub77c\uc774\ub4dc \ub41c \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4!\ud83d\udd25  "),(0,u.kt)("br",null),(0,u.kt)("blockquote",null,(0,u.kt)("p",{align:"center"},"# Fix \uc5b4\ub824\uc6cc\uc694...")),(0,u.kt)("br",null),(0,u.kt)("h3",{id:"\uc815\ub9ac"},"\uc815\ub9ac"),(0,u.kt)("p",null,"\uc704\uc758 \uc2e4\uc2b5\uc744 \uc815\ub9ac\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,u.kt)("ol",null,(0,u.kt)("li",{parentName:"ol"},"\ucee8\ud14c\uc774\ub108 \ud504\ub85c\uc138\uc2a4\uac00 (\ud638\uc2a4\ud2b8\uc5d0)\uc54c\ub824\uc9c4 uid\ub85c \uc2e4\ud589\uc911\uc774\uba74, \ud638\uc2a4\ud2b8\uc5d0\uc11c uid\ub97c \uc0ac\uc6a9\ud558\uc5ec \uac04\ub2e8\ud558\uac8c \uc811\uadfc\uc81c\ud55c\uc744 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.  "),(0,u.kt)("li",{parentName:"ol"},"\ub354 \uc88b\uc740 \ubc29\ubc95\uc740 \uc54c\ub824\uc9c4 uid(\ub610\ub294 username)\ub97c \ub7f0\ud0c0\uc784\uc5d0 ",(0,u.kt)("inlineCode",{parentName:"li"},"--user")," \ud50c\ub798\uadf8\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,u.kt)("li",{parentName:"ol"},"\ud558\uc9c0\ub9cc \ucee8\ud14c\uc774\ub108\uc640 \ud638\uc2a4\ud2b8\uc758 uid\uac00 \ub9f5\ud551\ub420 \ub54c, \uac01\uac01\uc758 \uc0ac\uc6a9\uc790\uac00 \ub2e4\ub974\uac8c \ubcf4\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,u.kt)("br",null),(0,u.kt)("h2",{id:"\uacf5\uc720-\ubcfc\ub968"},"\uacf5\uc720 \ubcfc\ub968"),(0,u.kt)("p",null,"\uc800\ub294 ELK \uc2a4\ud0dd\uc744 \ucee8\ud14c\uc774\ub108\ub85c \uc2e4\ud589\uc2dc\ud0a4\ub294 \uc911 ",(0,u.kt)("inlineCode",{parentName:"p"},"logstash.db")," \ud30c\uc77c\uc744 \uc791\uc131\ud558\uc9c0 \ubabb\ud558\ub294 \ubb38\uc81c\ub97c \uacaa\uc5c8\uc2b5\ub2c8\ub2e4.\ud83d\ude13\n\ub9c8\uc6b4\ud2b8\ub41c \ubcfc\ub968\uc758 \uad8c\ud55c\uc744 \ud655\uc778\ud574 \ubd05\uc2dc\ub2e4."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd /var/lib/docker/volumes\n\n# Windows\n> \\\\wsl$\\docker-desktop-data\\version-pack-data\\community\\docker\\volumes\n\n# WSL \n# /mnt/wsl/docker-desktop-data \ud558\uc704\uc5d0 \uc788\uc2b5\ub2c8\ub2e4 \ud574\ub2f9 \uacbd\ub85c\uc5d0 \ub9c8\uc6b4\ud2b8\ud574\uc90d\ub2c8\ub2e4\n$ sudo mount -t drvfs '\\\\wsl$\\docker-desktop-data' /mnt/wsl/docker-desktop-data\n$ cd /mnt/wsl/docker-desktop-data/version-pack-data/community/docker/volumes\n\n# \ud655\uc778\ud574\ubd05\uc2dc\ub2e4\n$ ls -l\ntotal 8\ndrwxrwxr-x  7 root root   93  8\uc6d4  9 18:23 data\ndrwx------ 20   70 root 4096  8\uc6d4  1 21:10 db\ndrwxrwxrwx  4 root root   33  7\uc6d4 26 18:13 events\ndrwxrwxr-x  3 root root   78  7\uc6d4 23 16:43 keys\ndrwxrwxrwx  3 root root 4096  8\uc6d4  2 09:10 logs\n")),(0,u.kt)("p",null,"\ub9ac\ub205\uc2a4 \ud30c\uc77c \uad8c\ud55c\uc740 ",(0,u.kt)("inlineCode",{parentName:"p"},"r")," read, ",(0,u.kt)("inlineCode",{parentName:"p"},"w")," write, ",(0,u.kt)("inlineCode",{parentName:"p"},"x")," execute \uc30d\uc73c\ub85c \uad6c\ubd84\ub429\ub2c8\ub2e4.\n\uc21c\uc11c\ub300\ub85c ",(0,u.kt)("inlineCode",{parentName:"p"},"4"),", ",(0,u.kt)("inlineCode",{parentName:"p"},"2"),", ",(0,u.kt)("inlineCode",{parentName:"p"},"1"),"\ube44\ud2b8\ub85c \ud45c\ud604\ud558\uae30\ub3c4 \ud569\ub2c8\ub2e4.\n3\uc30d\uc774 \uc874\uc7ac\ud558\uba70 \uac01\uac01 ",(0,u.kt)("inlineCode",{parentName:"p"},"owner"),", ",(0,u.kt)("inlineCode",{parentName:"p"},"group"),", ",(0,u.kt)("inlineCode",{parentName:"p"},"other")," \uc0ac\uc6a9\uc790\uc758 \uad8c\ud55c\uc744 \ub098\ud0c0\ub0c5\ub2c8\ub2e4.  "),(0,u.kt)("p",null,"\uc81c\uac00 \uc4f0\uace0\uc790 \ud558\ub824\ub294 ",(0,u.kt)("inlineCode",{parentName:"p"},"logstash.db")," \ud30c\uc77c\uc740 ",(0,u.kt)("inlineCode",{parentName:"p"},"data")," \ud3f4\ub354 \uc544\ub798\uc5d0 \uc788\uc2b5\ub2c8\ub2e4.\n\ud558\uc9c0\ub9cc ",(0,u.kt)("inlineCode",{parentName:"p"},"other")," \uc0ac\uc6a9\uc790\ub294 \uc4f0\uae30 \uad8c\ud55c\uc774 \uc5c6\ub124\uc694. \ubc14\uafd4\uc90d\uc2dc\ub2e4."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo chmod 777 data\n")),(0,u.kt)("br",null),(0,u.kt)("blockquote",null,(0,u.kt)("p",{align:"center"},"# Fix \ud760! \ud558\ub098 \ud574\uacb0\ud588\uad70\uc694!")),(0,u.kt)("br",null),(0,u.kt)("h3",{id:"\ub05d"},"\ub05d?"),(0,u.kt)("p",null,"\ud558\uc9c0\ub9cc \ub3c4\ucee4 \uacf5\uc720 \ubcfc\ub968\uc744 \ud638\uc2a4\ud2b8 \uad8c\ud55c\uc73c\ub85c \uad00\ub9ac\ud558\ub294 \uac83\uc740 \uc5ec\ub7ec \ubb38\uc81c\ub97c \ubc1c\uc0dd\uc2dc\ud0b5\ub2c8\ub2e4.\n\uc608\ub97c\ub4e4\uc5b4, \ud638\uc2a4\ud2b8\uc5d0 \uc874\uc7ac\ud558\uc9c0 \uc54a\ub294 ",(0,u.kt)("inlineCode",{parentName:"p"},"uid"),", ",(0,u.kt)("inlineCode",{parentName:"p"},"gid"),'\ub85c \uad8c\ud55c\uc744 \uc900\ub2e4\uba74 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud569\ub2c8\ub2e4.\n\uadfc\ubcf8\uc801\uc778 \ud574\uacb0 \ubc29\ubc95\uc73c\ub85c "\ub370\uc774\ud130 \uc804\uc6a9 \ucee8\ud14c\uc774\ub108"\ub97c \uc0ac\uc6a9\ud558\ub3c4\ub85d \uc870\uc5b8\ud569\ub2c8\ub2e4.'),(0,u.kt)("p",null,(0,u.kt)("del",{parentName:"p"},"\uc704\uc758 \ubc29\ubc95\uc740 \ub55c\ube75\uc774\ub77c\ub294 \uac83\uc774\uc8e0")),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"https://docs.docker.com/storage/volumes/"},"[\uacf5\uc2dd]Use volumes"),(0,u.kt)("br",{parentName:"p"}),"\n",(0,u.kt)("a",{parentName:"p",href:"https://medium.com/@ramangupta/why-docker-data-containers-are-good-589b3c6c749e"},"Why Docker Data Containers are Good"),"  "),(0,u.kt)("br",null),(0,u.kt)("h2",{id:"tips"},"Tips"),(0,u.kt)("p",null,"\ub9c8\ucc2c\uac00\uc9c0\ub85c, \ucfe0\ubc84\ub124\ud2f0\uc2a4 \ub85c\uceec persistent volume \ub610\ud55c\n\uc801\uc808\ud55c ",(0,u.kt)("a",{parentName:"p",href:"https://ko.wikipedia.org/wiki/%ED%8C%8C%EC%9D%BC_%EC%8B%9C%EC%8A%A4%ED%85%9C_%EA%B6%8C%ED%95%9C"},"\ud30c\uc77c\uc2dc\uc2a4\ud15c \uad8c\ud55c")," \uc774 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4.  "),(0,u.kt)("h3",{id:"reference"},"Reference"),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"https://medium.com/@mccode/understanding-how-uid-and-gid-work-in-docker-containers-c37a01d01cf"},"Understanding how uid and gid work in Docker containers"),(0,u.kt)("br",{parentName:"p"}),"\n",(0,u.kt)("a",{parentName:"p",href:"https://github.com/microsoft/WSL/discussions/4176#discussioncomment-264961"},"[\uae43\ud5d9]WSL2 where is docker volume location?"),"  "))}g.isMDXComponent=!0},98996:(M,e,N)=>{N.d(e,{Z:()=>j});const j="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUwMCIgaGVpZ2h0PSIyMTAwIiB2aWV3Qm94PSIwIDAgMjU2IDIxNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zOC42MTcgMTczLjk4NHYtMTYuMzYyYzAtMi4xNSAxLjM0NC0zLjg3NyAzLjU3LTMuODc3aC42MTZjMi4yMjUgMCAzLjU2MyAxLjcyOSAzLjU2MyAzLjg3N3YzNC40NDdjMCA4LjQtNC4xNSAxNS4wODQtMTEuMzgyIDE5LjM0MmEyMS4zNzQgMjEuMzc0IDAgMCAxLTEwLjk0NSAyLjk4NWgtMS41MzdjLTguNDAyIDAtMTUuMDc3LTQuMTUzLTE5LjM0Mi0xMS4zOGEyMS4zMTQgMjEuMzE0IDAgMCAxLTIuOTg0LTEwLjk0N3YtMS41MzVjMC04LjQwMyA0LjE1Mi0xNS4wODMgMTEuMzc4LTE5LjM0OWEyMS4yOTggMjEuMjk4IDAgMCAxIDEwLjk0OC0yLjk4NWgxLjUzN2M1LjY4NiAwIDEwLjUxIDIuMjA0IDE0LjU3OCA1Ljc4NHpNNy45MjQgMTkxLjNjMCA2LjA2OCAyLjk0MSAxMC42MyA4LjI1OCAxMy41NCAyLjE1IDEuMTc2IDQuNDg0IDEuODA4IDYuOTM3IDEuODA4IDUuOTU2IDAgMTAuMzc0LTIuODEgMTMuNDIxLTcuODU3IDEuNDE3LTIuMzQ4IDIuMDc3LTQuOTE3IDIuMDc3LTcuNjQ4IDAtNS4yNi0yLjQ5LTkuMzY1LTYuNzI5LTEyLjQxNC0yLjU3LTEuODQ4LTUuNDYzLTIuNzc1LTguNjE4LTIuNzc1LTYuNDkyIDAtMTEuMTY0IDMuMjgtMTMuOTY4IDkuMTA2LS45NDYgMS45Ny0xLjM3OCA0LjA2MS0xLjM3OCA2LjI0em02NS4zMjQtMjMuMWgxLjA3NGM4Ljk3OCAwIDE1LjgwNiA0LjM1NSAyMC4xMzMgMTIuMTkyIDEuNzMgMy4xMzUgMi42NTYgNi41NTcgMi42NTYgMTAuMTQydjEuNTM1YzAgOC40LTQuMTQyIDE1LjA5My0xMS4zODUgMTkuMzQzLTMuMzUzIDEuOTY3LTcuMDU3IDIuOTg0LTEwLjk0MyAyLjk4NGgtMS41MzVjLTguNDAyIDAtMTUuMDc5LTQuMTUzLTE5LjM0Mi0xMS4zOGEyMS4zMTYgMjEuMzE2IDAgMCAxLTIuOTg3LTEwLjk0N3YtMS41MzVjMC04LjQwNCA0LjE2OS0xNS4wNjIgMTEuMzc3LTE5LjM0NyAzLjM1MS0xLjk5MSA3LjA1OC0yLjk4NyAxMC45NTItMi45ODd6bS0xNC41OCAyMy4xYzAgNS44OSAyLjg5IDEwLjIyMyA3Ljg2NSAxMy4yNyAyLjMzNiAxLjQzIDQuOTA5IDIuMDc4IDcuNjM4IDIuMDc4IDUuODIgMCAxMC4xMjItMi45NTEgMTMuMTE2LTcuODYzIDEuNDI4LTIuMzQyIDIuMDc0LTQuOTE1IDIuMDc0LTcuNjQyIDAtNS40NzctMi42MzgtOS42NjEtNy4xNDgtMTIuNjkzLTIuNDcxLTEuNjYzLTUuMjIyLTIuNDk2LTguMTk4LTIuNDk2LTYuNDkyIDAtMTEuMTY0IDMuMjgtMTMuOTY3IDkuMTA2LS45NDggMS45Ny0xLjM4IDQuMDYxLTEuMzggNi4yNHptNzAuNjU2LTE0LjcyN2MtMS4xNy0uNTQ4LTMuMzYtLjczLTQuNjI0LS43NzgtNi40NzQtLjI0NC0xMS4xNTggMy40MDItMTMuOTA2IDkuMTEzLS45NDkgMS45Ny0xLjM4MiA0LjA1NS0xLjM4MiA2LjIzNSAwIDYuNjM3IDMuNDg1IDExLjI4NCA5LjQwOSAxNC4xMTcgMi4xNjQgMS4wMzQgNC45NTggMS4yMyA3LjMyMyAxLjIzIDIuMDggMCA1LjAyLTEuMjc0IDYuODY2LTIuMTUxbC4zMi0uMTUyaDEuNDMzbC4xNTguMDMyYzEuNzYyLjM2NyAzLjA5MiAxLjQ4NCAzLjA5MiAzLjM4di43NjdjMCA0LjcxOC04LjYyMiA1Ljc5OC0xMS45MTIgNi4wMjgtMTEuNjEuODAzLTIwLjI5My01LjU3My0yMy42MDMtMTYuNjQ3LS41NzUtMS45MjMtLjgzNC0zLjgzMy0uODM0LTUuODM3di0xLjUzM2MwLTguNDAzIDQuMTctMTUuMDU5IDExLjM3Ny0xOS4zNCAzLjM1MS0xLjk5IDcuMDU3LTIuOTkgMTAuOTUtMi45OWgxLjUzNmM0LjEzIDAgNy45MzQgMS4xNzMgMTEuMzQ0IDMuNTAybC4yOC4xOTQuMTc3LjI5MmMuMzY4LjYxLjY4NSAxLjMxNi42ODUgMi4wNDJ2Ljc2N2MwIDEuOTc4LTEuNDggMy4wNDItMy4yNjYgMy4zODZsLS4xNDguMDI2aC0uNDU4Yy0xLjE1NiAwLTMuNzg1LTEuMTk3LTQuODE3LTEuNjgzem0yNS4xMzQgNS4yNDdjMy4wMS0zLjAxNCA2LjAzLTYuMDIyIDkuMDg1LTguOTg2Ljg1MS0uODI3IDQuMDc0LTQuMzI3IDUuMzQzLTQuMzI3aDEuMzg4bC4xNTguMDMzYzEuNzY4LjM2NyAzLjA5MiAxLjQ4NiAzLjA5MiAzLjM4NnYuNzY2YzAgMS4yOTYtMS41MTggMi44MDItMi4zNTUgMy42ODktMS43OCAxLjg4Ny0zLjY1NCAzLjcxMi01LjQ3NiA1LjU2bC05LjM2MiA5LjUwNGM0LjAzMSA0LjA0IDguMDU4IDguMDgzIDEyLjA1NiAxMi4xNTRhMzEzLjMwNCAzMTMuMzA0IDAgMCAxIDMuMzAxIDMuMzk2Yy4zODUuNDA1Ljk1My45MDkgMS4yNzYgMS40Ny4zNDcuNTI2LjU2IDEuMTE5LjU2IDEuNzUydi44bC0uMDQ1LjE4NWMtLjQzNSAxLjc2OC0xLjU1NyAzLjE5NC0zLjUxNiAzLjE5NGgtLjYxN2MtMS4yODIgMC0yLjczLTEuNDUtMy42MDgtMi4yNzktMS44MS0xLjcwNi0zLjU1Ny0zLjUtNS4zMzEtNS4yNDNsLTUuOTQ5LTUuODR2OS4zMzRjMCAyLjE1LTEuMzQ2IDMuODc4LTMuNTY5IDMuODc4aC0uNjFjLTIuMjI2IDAtMy41Ny0xLjcyOC0zLjU3LTMuODc4di01Mi41OTZjMC0yLjE1IDEuMzQ1LTMuODcgMy41Ny0zLjg3aC42MWMyLjIyMyAwIDMuNTY5IDEuNzIgMy41NjkgMy44N3YyNC4wNDh6bTk2LjU3Ny0xMy4zMTNoLjc3YzIuMzI0IDAgMy44NzUgMS41NjYgMy44NzUgMy44NzcgMCAzLjIwOC0zLjA2NyA0LjAyOS01LjcyIDQuMDI5LTMuNDggMC02LjgwMyAyLjEwNy05LjIwMiA0LjQ3LTIuOTkxIDIuOTQ5LTQuMyA2LjcyNi00LjMgMTAuODc4djE4Ljc1OWMwIDIuMTUtMS4zNDMgMy44NzYtMy41NyAzLjg3NmgtLjYxMmMtMi4yMjcgMC0zLjU2OS0xLjcyNS0zLjU2OS0zLjg3NnYtMTkuODM2YzAtNy42MTcgMy43MDgtMTMuODM1IDkuODktMTguMTk2IDMuNjkxLTIuNjA1IDcuOTE5LTMuOTggMTIuNDM4LTMuOTh6bS01NS4wNzQgMzcuMTc2YzIuODIuOTg1IDYuMDM1Ljg0NCA4LjkyOC4zNCAxLjQ4LS42MjkgNS4yNjQtMi4yOCA2LjY1Ni0yLjAzOGwuMjE3LjAzNy4yLjA5OGMuODUuNDEyIDEuNjYxLjk5NSAyLjA5NSAxLjg2IDEuMDE0IDIuMDI3LjUyNyA0LjA2NS0xLjQ2NSA1LjIxNmwtLjY2My4zODNjLTcuMzUgNC4yNDItMTUuMTY4IDMuNjU0LTIyLjQ5NS0uMzA4LTMuNTAzLTEuODk0LTYuMTgzLTQuNzA1LTguMTYtOC4xMzJsLS40NjItLjgwMWMtNC43MTktOC4xNzItNC4wODItMTYuNzY4IDEuMjQtMjQuNTM5IDEuODM3LTIuNjg2IDQuMjM4LTQuNzYxIDcuMDQ1LTYuMzg0bDEuMDYyLS42MTNjNi45MjItMy45OTYgMTQuMzQxLTMuNzIyIDIxLjQ1LS4yMTUgMy44MjMgMS44ODYgNi45MiA0LjY5NyA5LjA1NCA4LjM5NGwuMzg0LjY2NmMxLjU1IDIuNjg2LS40NTggNS4wMjYtMi41MzEgNi42MjYtMi40MDYgMS44NTYtNC44MzUgNC4wOS03LjE0MSA2LjA4LTUuMTQyIDQuNDM5LTEwLjI3NiA4Ljg4OC0xNS40MTQgMTMuMzN6bS02LjY1NS00LjY3NGM1Ljc1LTQuOTMgMTEuNTAyLTkuODY1IDE3LjIzNy0xNC44MTYgMS45Ni0xLjY5IDQuMTA5LTMuNDQ0IDYuMDUzLTUuMjIxLTEuNTYtMS45NjYtNC4xNjYtMy4zODMtNi4zOC00LjIyOC00LjQ3LTEuNzAzLTguODc3LTEuMTMxLTEyLjk3NiAxLjIzNS01LjM2NSAzLjA5OC03LjY1IDguMDMxLTcuNDUgMTQuMTcuMDggMi40MTguNzMgNC43NDggMi4wMTMgNi44MDUuNDUyLjcyNS45NTcgMS40MDYgMS41MDMgMi4wNTV6TTE0Ny40ODggNDUuNzMyaDIyLjg2NnYyMy4zNzVoMTEuNTYxYzUuMzQgMCAxMC44MzEtLjk1MSAxNS44ODctMi42NjQgMi40ODUtLjg0MyA1LjI3My0yLjAxNSA3LjcyNC0zLjQ5LTMuMjI4LTQuMjE0LTQuODc2LTkuNTM1LTUuMzYtMTQuNzgtLjY2LTcuMTM1Ljc4LTE2LjQyMSA1LjYwOC0yMi4wMDVsMi40MDQtMi43OCAyLjg2NCAyLjMwM2M3LjIxMSA1Ljc5MyAxMy4yNzYgMTMuODg5IDE0LjM0NSAyMy4xMTggOC42ODMtMi41NTQgMTguODc4LTEuOTUgMjYuNTMxIDIuNDY3bDMuMTQgMS44MTItMS42NTIgMy4yMjZDMjQ2LjkzMyA2OC45NDYgMjMzLjQgNzIuODYgMjIwLjE3IDcyLjE2N2MtMTkuNzk3IDQ5LjMwOS02Mi44OTggNzIuNjUzLTExNS4xNTcgNzIuNjUzLTI3IDAtNTEuNzctMTAuMDkzLTY1Ljg3Ni0zNC4wNDdsLS4yMzEtLjM5LTIuMDU1LTQuMTgyYy00Ljc2OC0xMC41NDQtNi4zNTItMjIuMDk1LTUuMjc4LTMzLjYzN2wuMzIzLTMuNDU3SDUxLjQ1VjQ1LjczMmgyMi44NjVWMjIuODY2aDQ1LjczM1YwaDI3LjQ0djQ1LjczMiIgZmlsbD0iIzM2NDU0OCIvPjxwYXRoIGQ9Ik0yMjEuNTcgNTQuMzhjMS41MzMtMTEuOTE2LTcuMzg0LTIxLjI3NS0xMi45MTQtMjUuNzE5LTYuMzczIDcuMzY4LTcuMzYzIDI2LjY3OCAyLjYzNSAzNC44MDgtNS41OCA0Ljk1Ni0xNy4zMzcgOS40NDgtMjkuMzc2IDkuNDQ4SDM1LjM3Yy0xLjE3IDEyLjU2NyAxLjAzNiAyNC4xNCA2LjA3NSAzNC4wNDVsMS42NjcgMy4wNWE1Ni41MzYgNTYuNTM2IDAgMCAwIDMuNDU1IDUuMTg0YzYuMDI1LjM4NyAxMS41OC41MiAxNi42NjIuNDA4aC4wMDJjOS45ODctLjIyIDE4LjEzNi0xLjQgMjQuMzEyLTMuNTRhMS43NjEgMS43NjEgMCAwIDEgMS4xNTMgMy4zMjZjLS44MjIuMjg2LTEuNjc4LjU1Mi0yLjU2Mi44MDVoLS4wMDNjLTQuODYzIDEuMzg5LTEwLjA3OCAyLjMyMy0xNi44MDYgMi43MzguNC4wMDctLjQxNi4wNi0uNDE4LjA2LS4yMjkuMDE1LS41MTcuMDQ4LS43NDcuMDYtMi42NDguMTQ5LTUuNTA2LjE4LTguNDI4LjE4LTMuMTk2IDAtNi4zNDMtLjA2LTkuODYyLS4yNGwtLjA5LjA2YzEyLjIxIDEzLjcyNCAzMS4zMDIgMjEuOTU1IDU1LjIzNCAyMS45NTUgNTAuNjQ4IDAgOTMuNjA4LTIyLjQ1MiAxMTIuNjMyLTcyLjg1NyAxMy40OTYgMS4zODUgMjYuNDY3LTIuMDU3IDMyLjM2Ny0xMy41NzUtOS4zOTgtNS40MjMtMjEuNDg0LTMuNjk0LTI4LjQ0My0uMTk2IiBmaWxsPSIjMjJBMEM4Ii8+PHBhdGggZD0iTTIyMS41NyA1NC4zOGMxLjUzMy0xMS45MTYtNy4zODQtMjEuMjc1LTEyLjkxNC0yNS43MTktNi4zNzMgNy4zNjgtNy4zNjMgMjYuNjc4IDIuNjM1IDM0LjgwOC01LjU4IDQuOTU2LTE3LjMzNyA5LjQ0OC0yOS4zNzYgOS40NDhINDQuMDQ4Yy0uNTk4IDE5LjI0NiA2LjU0NCAzMy44NTUgMTkuMTggNDIuNjg3aC4wMDNjOS45ODctLjIyIDE4LjEzNi0xLjQgMjQuMzEyLTMuNTRhMS43NjEgMS43NjEgMCAwIDEgMS4xNTMgMy4zMjZjLS44MjIuMjg2LTEuNjc4LjU1Mi0yLjU2Mi44MDVoLS4wMDNjLTQuODYzIDEuMzg5LTEwLjUyNiAyLjQ0My0xNy4yNTQgMi44NTgtLjAwMiAwLS4xNjMtLjE1NS0uMTY1LS4xNTUgMTcuMjM3IDguODQyIDQyLjIzIDguODEgNzAuODg1LTIuMTk3IDMyLjEzLTEyLjM0NCA2Mi4wMjktMzUuODYgODIuODktNjIuNzU3LS4zMTQuMTQyLS42Mi4yODctLjkxNy40MzYiIGZpbGw9IiMzN0IxRDkiLz48cGF0aCBkPSJNMzUuNjQ1IDg4LjE4NmMuOTEgNi43MzIgMi44OCAxMy4wMzUgNS44IDE4Ljc3NmwxLjY2NyAzLjA1YTU2LjQzMiA1Ni40MzIgMCAwIDAgMy40NTUgNS4xODRjNi4wMjYuMzg3IDExLjU4MS41MiAxNi42NjQuNDA4IDkuOTg3LS4yMiAxOC4xMzYtMS40IDI0LjMxMi0zLjU0YTEuNzYxIDEuNzYxIDAgMCAxIDEuMTUzIDMuMzI2Yy0uODIyLjI4Ni0xLjY3OC41NTItMi41NjIuODA1aC0uMDAzYy00Ljg2MyAxLjM4OS0xMC40OTYgMi4zODMtMTcuMjI0IDIuNzk5LS4yMzEuMDE0LS42MzQuMDE3LS44NjcuMDMtMi42NDYuMTQ4LTUuNDc1LjIzOS04LjM5OC4yMzktMy4xOTUgMC02LjQ2My0uMDYxLTkuOTgtLjI0IDEyLjIxIDEzLjcyNCAzMS40MiAyMS45ODUgNTUuMzUyIDIxLjk4NSA0My4zNiAwIDgxLjA4NC0xNi40NTggMTAyLjk3OS01Mi44MjJIMzUuNjQ1IiBmaWxsPSIjMUI4MUE1Ii8+PHBhdGggZD0iTTQ1LjM2NyA4OC4xODZjMi41OTIgMTEuODIgOC44MjEgMjEuMDk5IDE3Ljg2NCAyNy40MTggOS45ODctLjIyIDE4LjEzNi0xLjQgMjQuMzEyLTMuNTRhMS43NjEgMS43NjEgMCAwIDEgMS4xNTMgMy4zMjZjLS44MjIuMjg2LTEuNjc4LjU1Mi0yLjU2Mi44MDVoLS4wMDNjLTQuODYzIDEuMzg5LTEwLjYxNSAyLjM4My0xNy4zNDQgMi43OTkgMTcuMjM2IDguODQgNDIuMTU3IDguNzEzIDcwLjgxLTIuMjkzIDE3LjMzNC02LjY2IDM0LjAxNy0xNi41NzQgNDguOTg0LTI4LjUxNUg0NS4zNjciIGZpbGw9IiMxRDkxQjQiLz48cGF0aCBkPSJNNTUuMjYgNDkuNTQzaDE5LjgxOHYxOS44MThINTUuMjZWNDkuNTQzem0xLjY1MSAxLjY1MmgxLjU2NFY2Ny43MWgtMS41NjRWNTEuMTk1em0yLjk0IDBoMS42MjdWNjcuNzFoLTEuNjI2VjUxLjE5NXptMy4wMDIgMGgxLjYyN1Y2Ny43MWgtMS42MjdWNTEuMTk1em0zLjAwNCAwaDEuNjI2VjY3LjcxaC0xLjYyNlY1MS4xOTV6bTMuMDAzIDBoMS42MjZWNjcuNzFINjguODZWNTEuMTk1em0zLjAwMiAwaDEuNTY1VjY3LjcxaC0xLjU2NVY1MS4xOTV6TTc4LjEyNiAyNi42NzdoMTkuODE5djE5LjgxN2gtMTkuODJWMjYuNjc3em0xLjY1MiAxLjY1MmgxLjU2M3YxNi41MTRoLTEuNTYzVjI4LjMyOXptMi45NCAwaDEuNjI2djE2LjUxNGgtMS42MjVWMjguMzI5em0zLjAwMiAwaDEuNjI2djE2LjUxNEg4NS43MlYyOC4zMjl6bTMuMDAzIDBoMS42MjZ2MTYuNTE0aC0xLjYyNlYyOC4zMjl6bTMuMDAzIDBoMS42Mjd2MTYuNTE0aC0xLjYyN1YyOC4zMjl6bTMuMDAyIDBoMS41NjZ2MTYuNTE0aC0xLjU2NlYyOC4zMjl6IiBmaWxsPSIjMjNBM0MyIi8+PHBhdGggZD0iTTc4LjEyNiA0OS41NDNoMTkuODE5djE5LjgxOGgtMTkuODJWNDkuNTQzem0xLjY1MiAxLjY1MmgxLjU2M1Y2Ny43MWgtMS41NjNWNTEuMTk1em0yLjk0IDBoMS42MjZWNjcuNzFoLTEuNjI1VjUxLjE5NXptMy4wMDIgMGgxLjYyNlY2Ny43MUg4NS43MlY1MS4xOTV6bTMuMDAzIDBoMS42MjZWNjcuNzFoLTEuNjI2VjUxLjE5NXptMy4wMDMgMGgxLjYyN1Y2Ny43MWgtMS42MjdWNTEuMTk1em0zLjAwMiAwaDEuNTY2VjY3LjcxaC0xLjU2NlY1MS4xOTV6IiBmaWxsPSIjMzRCQkRFIi8+PHBhdGggZD0iTTEwMC45OTMgNDkuNTQzaDE5LjgxOHYxOS44MThoLTE5LjgxOFY0OS41NDN6bTEuNjUxIDEuNjUyaDEuNTYzVjY3LjcxaC0xLjU2M1Y1MS4xOTV6bTIuOTQgMGgxLjYyNlY2Ny43MWgtMS42MjZWNTEuMTk1em0zLjAwMyAwaDEuNjI2VjY3LjcxaC0xLjYyNlY1MS4xOTV6bTMuMDAzIDBoMS42MjZWNjcuNzFoLTEuNjI2VjUxLjE5NXptMy4wMDIgMGgxLjYyOFY2Ny43MWgtMS42MjhWNTEuMTk1em0zLjAwMyAwaDEuNTY0VjY3LjcxaC0xLjU2NFY1MS4xOTV6IiBmaWxsPSIjMjNBM0MyIi8+PHBhdGggZD0iTTEwMC45OTMgMjYuNjc3aDE5LjgxOHYxOS44MTdoLTE5LjgxOFYyNi42Nzd6bTEuNjUxIDEuNjUyaDEuNTYzdjE2LjUxNGgtMS41NjNWMjguMzI5em0yLjk0IDBoMS42MjZ2MTYuNTE0aC0xLjYyNlYyOC4zMjl6bTMuMDAzIDBoMS42MjZ2MTYuNTE0aC0xLjYyNlYyOC4zMjl6bTMuMDAzIDBoMS42MjZ2MTYuNTE0aC0xLjYyNlYyOC4zMjl6bTMuMDAyIDBoMS42Mjh2MTYuNTE0aC0xLjYyOFYyOC4zMjl6bTMuMDAzIDBoMS41NjR2MTYuNTE0aC0xLjU2NFYyOC4zMjl6TTEyMy44NTkgNDkuNTQzaDE5LjgxOHYxOS44MThoLTE5LjgxOFY0OS41NDN6bTEuNjUyIDEuNjUyaDEuNTYzVjY3LjcxaC0xLjU2M1Y1MS4xOTV6bTIuOTQgMGgxLjYyNlY2Ny43MWgtMS42MjZWNTEuMTk1em0zLjAwMiAwaDEuNjI2VjY3LjcxaC0xLjYyNlY1MS4xOTV6bTMuMDAzIDBoMS42MjdWNjcuNzFoLTEuNjI3VjUxLjE5NXptMy4wMDMgMGgxLjYyN1Y2Ny43MWgtMS42MjdWNTEuMTk1em0zLjAwMyAwaDEuNTY0VjY3LjcxaC0xLjU2NFY1MS4xOTV6IiBmaWxsPSIjMzRCQkRFIi8+PHBhdGggZD0iTTEyMy44NTkgMjYuNjc3aDE5LjgxOHYxOS44MTdoLTE5LjgxOFYyNi42Nzd6bTEuNjUyIDEuNjUyaDEuNTYzdjE2LjUxNGgtMS41NjNWMjguMzI5em0yLjk0IDBoMS42MjZ2MTYuNTE0aC0xLjYyNlYyOC4zMjl6bTMuMDAyIDBoMS42MjZ2MTYuNTE0aC0xLjYyNlYyOC4zMjl6bTMuMDAzIDBoMS42Mjd2MTYuNTE0aC0xLjYyN1YyOC4zMjl6bTMuMDAzIDBoMS42Mjd2MTYuNTE0aC0xLjYyN1YyOC4zMjl6bTMuMDAzIDBoMS41NjR2MTYuNTE0aC0xLjU2NFYyOC4zMjl6IiBmaWxsPSIjMjNBM0MyIi8+PHBhdGggZD0iTTEyMy44NTkgMy44MWgxOS44MThWMjMuNjNoLTE5LjgxOFYzLjgxem0xLjY1MiAxLjY1MWgxLjU2M3YxNi41MTZoLTEuNTYzVjUuNDZ6bTIuOTQgMGgxLjYyNnYxNi41MTZoLTEuNjI2VjUuNDZ6bTMuMDAyIDBoMS42MjZ2MTYuNTE2aC0xLjYyNlY1LjQ2em0zLjAwMyAwaDEuNjI3djE2LjUxNmgtMS42MjdWNS40NnptMy4wMDMgMGgxLjYyN3YxNi41MTZoLTEuNjI3VjUuNDZ6bTMuMDAzIDBoMS41NjR2MTYuNTE2aC0xLjU2NFY1LjQ2eiIgZmlsbD0iIzM0QkJERSIvPjxwYXRoIGQ9Ik0xNDYuNzI1IDQ5LjU0M2gxOS44MTh2MTkuODE4aC0xOS44MThWNDkuNTQzem0xLjY1IDEuNjUyaDEuNTY1VjY3LjcxaC0xLjU2NFY1MS4xOTV6bTIuOTQgMGgxLjYyN1Y2Ny43MWgtMS42MjZWNTEuMTk1em0zLjAwNCAwaDEuNjI3VjY3LjcxaC0xLjYyN1Y1MS4xOTV6bTMuMDAyIDBoMS42MjdWNjcuNzFoLTEuNjI3VjUxLjE5NXptMy4wMDQgMGgxLjYyNlY2Ny43MWgtMS42MjZWNTEuMTk1em0zLjAwMiAwaDEuNTY0VjY3LjcxaC0xLjU2NFY1MS4xOTV6IiBmaWxsPSIjMjNBM0MyIi8+PHBhdGggZD0iTTk2LjcwNCAxMDEuNDkyYTUuNDY4IDUuNDY4IDAgMSAxLS4wMDIgMTAuOTM1IDUuNDY4IDUuNDY4IDAgMCAxIC4wMDItMTAuOTM1IiBmaWxsPSIjRDNFQ0VDIi8+PHBhdGggZD0iTTk2LjcwNCAxMDMuMDQzYy41IDAgLjk3Ny4wOTQgMS40MTcuMjY1YTEuNTk4IDEuNTk4IDAgMCAwIC43OTggMi45OGMuNjA1IDAgMS4xMy0uMzM1IDEuNDAyLS44MzFhMy45MTUgMy45MTUgMCAxIDEtMy42MTctMi40MTRNMCA5MC4xNjJoMjU0LjMyN2MtNS41MzctMS40MDQtMTcuNTItMy4zMDItMTUuNTQ0LTEwLjU2LTEwLjA3IDExLjY1Mi0zNC4zNTMgOC4xNzUtNDAuNDgyIDIuNDMtNi44MjQgOS44OTgtNDYuNTU0IDYuMTM1LTQ5LjMyNS0xLjU3Ni04LjU1NiAxMC4wNDEtMzUuMDY3IDEwLjA0MS00My42MjMgMC0yLjc3MyA3LjcxMS00Mi41MDIgMTEuNDc0LTQ5LjMyNyAxLjU3NS02LjEyOCA1Ljc0Ni0zMC40MSA5LjIyMy00MC40OC0yLjQyOEMxNy41MjIgODYuODYgNS41MzkgODguNzU4IDAgOTAuMTYzIiBmaWxsPSIjMzY0NTQ4Ii8+PHBhdGggZD0iTTExMS4yMzcgMTQwLjg5Yy0xMy41NC02LjQyNS0yMC45NzEtMTUuMTYtMjUuMTA2LTI0LjY5NC01LjAzIDEuNDM1LTExLjA3NSAyLjM1My0xOC4xIDIuNzQ3LTIuNjQ2LjE0OC01LjQzLjIyNC04LjM1LjIyNC0zLjM2OCAwLTYuOTE3LS4xLTEwLjY0My0uMjk3IDEyLjQxNyAxMi40MSAyNy42OTIgMjEuOTY0IDU1Ljk3NiAyMi4xMzggMi4wODggMCA0LjE2LS4wNCA2LjIyMy0uMTE4IiBmaWxsPSIjQkREOUQ3Ii8+PHBhdGggZD0iTTkxLjE2IDEyNC45OTRjLTEuODczLTIuNTQzLTMuNjktNS43MzktNS4wMjYtOC44LTUuMDMgMS40MzctMTEuMDc3IDIuMzU1LTE4LjEwMyAyLjc1IDQuODI2IDIuNjE5IDExLjcyNyA1LjA0NiAyMy4xMyA2LjA1IiBmaWxsPSIjRDNFQ0VDIi8+PC9nPjwvc3ZnPg=="}}]);