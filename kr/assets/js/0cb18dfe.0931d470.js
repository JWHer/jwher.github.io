"use strict";(self.webpackChunkjwher_blog=self.webpackChunkjwher_blog||[]).push([[9185],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return d}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=l,m=p["".concat(u,".").concat(d)]||p[d]||k[d]||a;return n?r.createElement(m,o(o({ref:t},i),{},{components:n})):r.createElement(m,o({ref:t},i))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:l,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9165:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return k}});var r=n(7462),l=n(3366),a=(n(7294),n(3905)),o=["components"],c={authors:["jwher"],description:"\ub098\uc5d0\uac8c \ud544\uc694\ud55c \ub3c4\ucee4 \uc124\uce58\ud558\uae30",slug:"install-docker",tags:["tech","docker","linux"],title:"Install Docker"},u=void 0,s={permalink:"/kr/posts/install-docker",editUrl:"https://github.com/jwher/jwher.github.io/posts/2021-04-13-install-docker/index.md",source:"@site/posts/2021-04-13-install-docker/index.md",title:"Install Docker",description:"\ub098\uc5d0\uac8c \ud544\uc694\ud55c \ub3c4\ucee4 \uc124\uce58\ud558\uae30",date:"2021-04-13T00:00:00.000Z",formattedDate:"April 13, 2021",tags:[{label:"tech",permalink:"/kr/posts/tags/tech"},{label:"docker",permalink:"/kr/posts/tags/docker"},{label:"linux",permalink:"/kr/posts/tags/linux"}],readingTime:9.56,truncated:!0,authors:[{name:"Jeongwon Her",title:"MLOps Engineer",url:"https://github.com/jwher",imageURL:"https://github.com/jwher.png",key:"jwher"}],frontMatter:{authors:["jwher"],description:"\ub098\uc5d0\uac8c \ud544\uc694\ud55c \ub3c4\ucee4 \uc124\uce58\ud558\uae30",slug:"install-docker",tags:["tech","docker","linux"],title:"Install Docker"},prevItem:{title:"Install Virtualbox With No Gui",permalink:"/kr/posts/install-virtualbox-with-no-gui"},nextItem:{title:"Install Kubernetes",permalink:"/kr/posts/install-kubernetes"}},i={authorsImageUrls:[void 0]},k=[{value:"\uc694\uad6c\uc0ac\ud56d",id:"\uc694\uad6c\uc0ac\ud56d",level:2},{value:"OS",id:"os",level:3},{value:"Storage Driver",id:"storage-driver",level:3},{value:"Architecture",id:"architecture",level:3},{value:"Ubuntu docker \uc124\uce58",id:"ubuntu-docker-\uc124\uce58",level:2},{value:"CentOS docker \uc124\uce58",id:"centos-docker-\uc124\uce58",level:2},{value:"Windows docker \uc124\uce58",id:"windows-docker-\uc124\uce58",level:2},{value:"Tips",id:"tips",level:2},{value:"Reference",id:"reference",level:3}],p={toc:k};function d(e){var t=e.components,n=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/docker.png",alt:"Alt",title:"docker"}),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("em",{parentName:"p"},"\ub098\uc5d0\uac8c \ud544\uc694\ud55c \ub3c4\ucee4 \uc124\uce58\ud558\uae30"),"  "),(0,a.kt)("h1",{id:"\ubaa9\ucc28"},"\ubaa9\ucc28"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#%EC%9A%94%EA%B5%AC%EC%82%AC%ED%95%AD"},"\uc694\uad6c\uc0ac\ud56d")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#ubnutu-docker-%EC%84%A4%EC%B9%98"},"Ubuntu docker \uc124\uce58")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#centos-docker-%EC%84%A4%EC%B9%98"},"CentOS docker \uc124\uce58")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#windows-docker-%EC%84%A4%EC%B9%98"},"Windows docker \uc124\uce58"))),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"\uc694\uad6c\uc0ac\ud56d"},"\uc694\uad6c\uc0ac\ud56d"),(0,a.kt)("p",null,"\uc774 \uae00\uc740 \ub2e4\uc591\ud55c \ud658\uacbd\uc5d0\uc11c \ub0b4\uac8c \ud544\uc694\ud55c \ubc84\uc804\uc758 \ub3c4\ucee4 \uc124\uce58\ubc95\uc744 \uc124\uba85\ud569\ub2c8\ub2e4. \ud83c\udf89\ud83d\ude4c\ud83c\udf89",(0,a.kt)("br",{parentName:"p"}),"\n","\ub3c4\ucee4\uc5d0 \ub300\ud574 \uc774\ud574\uac00 \ubd80\uc871\ud558\uc2dc\ub2e4\uba74 ",(0,a.kt)("a",{parentName:"p",href:"https://jwher.github.io/2021-06-19-welcome-to-docker/"},"\uc774 \uae00")," \uc744 \uba3c\uc800 \uc77d\ub294 \uac78 \ucd94\ucc9c\ud569\ub2c8\ub2e4!",(0,a.kt)("br",{parentName:"p"}),"\n","\ub3c4\ucee4\ub97c \uc124\uce58\ud558\uae30 \uc804\uc5d0 \ud658\uacbd\uc744 \ud544\uc694\ud55c \uc810\uac80\ud574 \ubd05\uc2dc\ub2e4."),(0,a.kt)("h3",{id:"os"},"OS"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ubuntu 16.04(Xenial), 18.04(Bionic), 20.04(Focal) LTS"),(0,a.kt)("li",{parentName:"ul"},"CentOS 7 or 8"),(0,a.kt)("li",{parentName:"ul"},"Windows"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"\uc774 \uc678\uc5d0 Debian, Fedora \uae30\ubc18 linux, Mac"),(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("em",{parentName:"li"},"(\uc7a5\ube44\ub97c \ubcf4\uc720\ud558\uace0, \ud14c\uc2a4\ud2b8 \ud560 \uc218 \uc788\uc73c\uba74 \ucd94\uac00\ub85c \uc791\uc131\ud558\uaca0\uc2b5\ub2c8\ub2e4)"))),(0,a.kt)("h3",{id:"storage-driver"},"Storage Driver"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"overlay2 (\uad8c\uc7a5)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/storage/storagedriver/aufs-driver/"},"aufs")),(0,a.kt)("li",{parentName:"ul"},"btrfs")),(0,a.kt)("h3",{id:"architecture"},"Architecture"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"x86_64"),(0,a.kt)("li",{parentName:"ul"},"amd64"),(0,a.kt)("li",{parentName:"ul"},"arm64 (Ubuntu)")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"ubuntu-docker-\uc124\uce58"},"Ubuntu docker \uc124\uce58"),(0,a.kt)("div",{align:"center"},"![ubuntu](/img/logos/ubuntu.svg)"),(0,a.kt)("p",null,"1. \uc774\uc804 \ubc84\uc804 \ud655\uc778 & \uc81c\uac70  "),(0,a.kt)("p",null,"\uc774\ubbf8 \ub3c4\ucee4\uac00 \uc124\uce58\ub418\uc5b4 \uc788\ub2e4\uba74, \ub2e4\uc2dc \uc124\uce58\ud560 \ud544\uc694\uac00 \uc5c6\uaca0\uc8e0? :D"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# Ubuntu\n$ sudo apt-get remove docker docker-engine docker.io containerd runc\n")),(0,a.kt)("br",null),(0,a.kt)("p",null,"2. \ub808\ud3ec\uc9c0\ud1a0\ub9ac \uc124\uc815  "),(0,a.kt)("p",null,"\ub3c4\ucee4\ub97c \uc124\uce58\ud558\uace0 \uc5c5\ub370\uc774\ud2b8 \ud558\uae30 \uc704\ud574 \ud544\uc694\ud55c repository \uc704\uce58\ub97c \uc124\uc815\ud574\uc57c \ud569\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","repository \uc704\uce58\ub97c \uc124\uc815\ud574 \uc8fc\uae30 \uc704\ud574 \ud544\uc694\ud55c \uae30\ubcf8 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc124\uce58\ud574 \uc90d\uc2dc\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# Ubuntu\n$ sudo apt-get update\n\n$ sudo apt-get install \\\n  apt-transport-https \\\n  ca-certificates \\\n  curl \\\n  gnupg \\\n  lsb-release\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"HTTPS\ub97c \ud1b5\ud574 repository\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uac8c \ud574\uc90d\ub2c8\ub2e4"),"  "),(0,a.kt)("br",null),(0,a.kt)("p",null,"\ud544\uc694\ud55c \ud328\ud0a4\uc9c0\ub97c \uc124\uce58\ud588\uc73c\uba74 \ub3c4\ucee4\uc758 official GPG key\ub97c \ucd94\uac00\ud574 \uc90d\uc2dc\ub2e4.(Ubuntu\ub9cc)  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# Ubuntu\n$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg \\\n| sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg\n")),(0,a.kt)("br",null),(0,a.kt)("p",null,"\ub2e4\uc74c \uba85\ub839\uc5b4\ub85c stable repository\ub97c \uc124\uc815\ud569\ub2c8\ub2e4. nightly\ub098 test repository\ub97c \uc0ac\uc6a9\ud558\uae30 \uc704\ud574\uc11c\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"stable")," \ub2e4\uc74c\uc5d0\n",(0,a.kt)("inlineCode",{parentName:"p"},"nightly"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"test"),"\ub97c \ucd94\uac00\ud569\ub2c8\ub2e4.\n\uc544\ud0a4\ud14d\ucc98\ub97c \uc124\uc815\ud560 \ub54c\uc5d4 ",(0,a.kt)("inlineCode",{parentName:"p"},"arch")," \ub2e4\uc74c\uc5d0 ",(0,a.kt)("inlineCode",{parentName:"p"},"amd64"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"armhf"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"arm64"),"\ub97c \ubcc0\uacbd\ud569\ub2c8\ub2e4.  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'# Ubuntu x86_64/amd64 \n$ echo \\\n"deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \\\n$(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"https://docs.docker.com/engine/install/"},"\uc5ec\uae30")," \uc5d0\uc11c \ubc84\uc804\uacfc nightly \uc9c0\uc6d0\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4")),(0,a.kt)("br",null),(0,a.kt)("p",null,"3. \ub3c4\ucee4 \uc124\uce58  "),(0,a.kt)("p",null,"repository\ub97c \ucd94\uac00\ud588\uc73c\ub2c8 ",(0,a.kt)("inlineCode",{parentName:"p"},"apt"),"\ub97c \uc5c5\ub370\uc774\ud2b8 \ud558\uace0 \uc124\uce58\ud569\ub2c8\ub2e4.  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# Ubuntu\n$ sudo apt-get update\n$ sudo apt-get install docker-ce docker-ce-cli containerd.io\n")),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\ud2b9\uc815 \ubc84\uc804"),"\uc744 \uc124\uce58\ud558\uae30 \uc704\ud574\uc120 \ub2e4\uc74c\uacfc \uac19\uc774 \ud569\ub2c8\ub2e4.  "),(0,a.kt)("br",null),"a. repo\uc5d0\uc11c \uac00\ub2a5\ud55c \ubc84\uc804\uc744 \ub9ac\uc2a4\ud2b8 \ud569\ub2c8\ub2e4. ```shell # Ubuntu $ apt-cache madison docker-ce",(0,a.kt)("p",null,"docker-ce | 5:20.10.6-3-0-ubuntu-focal | ",(0,a.kt)("a",{parentName:"p",href:"https://download.docker.com/linux/ubuntu"},"https://download.docker.com/linux/ubuntu")," focal/stable amd64 Packages\ndocker-ce | 5:20.10.5-3-0-ubuntu-focal | ",(0,a.kt)("a",{parentName:"p",href:"https://download.docker.com/linux/ubuntu"},"https://download.docker.com/linux/ubuntu")," focal/stable amd64 Packages\ndocker-ce | 5:20.10.4-3-0-ubuntu-focal | ",(0,a.kt)("a",{parentName:"p",href:"https://download.docker.com/linux/ubuntu"},"https://download.docker.com/linux/ubuntu")," focal/stable amd64 Packages\n... \uc0dd\ub7b5 ..."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<br/>\n\nb. ```VERSION_STRING```\uc744 \uc0ac\uc6a9\ud558\uc5ec \ud2b9\uc815 \ubc84\uc804\uc744 \uc124\uce58 \ud569\ub2c8\ub2e4.\n```shell\n# Ubuntu\n$ sudo apt-get install docker-ce=<VERSION_STRING> docker-ce-cli=<VERSION_STRING> containerd.io\n")),(0,a.kt)("br",null),(0,a.kt)("p",null,"\uc124\uce58\uac00 \uc644\ub8cc\ub418\uc5c8\uc73c\uba74 \ud655\uc778\ud574 \ubd05\uc2dc\ub2e4. \ud83d\ude0a  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo docker run hello-world\n\nUnable to find image 'hello-world:latest' locally\nlatest: Pulling from library/hello-world\nb8dfde127a29: Pull complete \nDigest: sha256:308866a43596e83578c7dfa15e27a73011bdd402185a84c5cd7f32a88b501a24\nStatus: Downloaded newer image for hello-world:latest\n\nHello from Docker!\nThis message shows that your installation appears to be working correctly.\n\nTo generate this message, Docker took the following steps:\n 1. The Docker client contacted the Docker daemon.\n 2. The Docker daemon pulled the \"hello-world\" image from the Docker Hub.\n    (amd64)\n 3. The Docker daemon created a new container from that image which runs the\n    executable that produces the output you are currently reading.\n 4. The Docker daemon streamed that output to the Docker client, which sent it\n    to your terminal.\n\nTo try something more ambitious, you can run an Ubuntu container with:\n $ docker run -it ubuntu bash\n\nShare images, automate workflows, and more with a free Docker ID:\n https://hub.docker.com/\n\nFor more examples and ideas, visit:\n https://docs.docker.com/get-started/\n")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"centos-docker-\uc124\uce58"},"CentOS docker \uc124\uce58"),(0,a.kt)("div",{align:"center"},"![centos](/img/logos/centos.svg)"),(0,a.kt)("p",null,"1. \uc774\uc804 \ubc84\uc804 \ud655\uc778 & \uc81c\uac70  "),(0,a.kt)("p",null,"\uc124\ub9c8 apt\uac00 \uc5c6\ub294 \uac78 \ud655\uc778\ud558\uace0 \uc624\uc168\ub098\uc694...?  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# CentOS\n$  sudo yum remove docker \\\n                  docker-client \\\n                  docker-client-latest \\\n                  docker-common \\\n                  docker-latest \\\n                  docker-latest-logrotate \\\n                  docker-logrotate \\\n                  docker-engine\n")),(0,a.kt)("br",null),(0,a.kt)("p",null,"2. \ub808\ud3ec\uc9c0\ud1a0\ub9ac \uc124\uc815  "),(0,a.kt)("p",null,"\ub3c4\ucee4\ub97c \uc124\uce58\ud558\uace0 \uc5c5\ub370\uc774\ud2b8 \ud558\uae30 \uc704\ud574 \ud544\uc694\ud55c repository \uc704\uce58\ub97c \uc124\uc815\ud574\uc57c \ud569\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","repository \uc704\uce58\ub97c \uc124\uc815\ud574 \uc8fc\uae30 \uc704\ud574 \ud544\uc694\ud55c \uae30\ubcf8 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc124\uce58\ud574 \uc90d\uc2dc\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# CentOS\n$ sudo yum install -y yum-utils\n")),(0,a.kt)("br",null),"CentOS\uc5d0\uc11c nightly\ub098 test repository\ub97c \uc0ac\uc6a9\ud558\uae30 \uc704\ud574\uc11c\ub294 ```--enable``` \uc635\uc158\uc5d0 ```docker-ce-nightly``` \ub610\ub294 ```docker-ce-test```\ub97c \ucd94\uac00\ud574 \uc90d\ub2c8\ub2e4. ```shell # CentOS $ sudo yum-config-manager \\ --add-repo \\ https://download.docker.com/linux/centos/docker-ce.repo ```",(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"https://docs.docker.com/engine/install/"},"\uc5ec\uae30")," \uc5d0\uc11c \ubc84\uc804\uacfc nightly \uc9c0\uc6d0\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4")),(0,a.kt)("br",null),(0,a.kt)("p",null,"3. \ub3c4\ucee4 \uc124\uce58  "),(0,a.kt)("p",null,"\ub3c4\ucee4 \ucd5c\uc2e0 \ubc84\uc804\uc744 \uc124\uce58\ud558\ub824\uba74 \ub2e4\uc74c \uba85\ub839\uc5b4\ub97c \uc785\ub825\ud569\ub2c8\ub2e4.  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# CentOS\n$ sudo apt-get install docker-ce docker-ce-cli containerd.io\n")),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\ud2b9\uc815 \ubc84\uc804"),"\uc744 \uc124\uce58\ud558\uae30 \uc704\ud574\uc120 \ub2e4\uc74c\uacfc \uac19\uc774 \ud569\ub2c8\ub2e4.  "),(0,a.kt)("br",null),"a. repo\uc5d0\uc11c \uac00\ub2a5\ud55c \ubc84\uc804\uc744 \ub9ac\uc2a4\ud2b8 \ud569\ub2c8\ub2e4. ```shell # CentOS $ yum list docker-ce --showduplicates | sort -r",(0,a.kt)("p",null,"... \uc804\ub7b5 ...\ndocker-ce.x86_64            17.03.2.ce-1.el7.centos            docker-ce-stable\ndocker-ce.x86_64            17.03.1.ce-1.el7.centos            docker-ce-stable\ndocker-ce.x86_64            17.03.0.ce-1.el7.centos            docker-ce-stable\nLoaded plugins: fastestmirror, langpacks\nInstalled Packages\nDetermining fastest mirrors\nAvailable Packages"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"updates: mirror.kakao.com"),(0,a.kt)("li",{parentName:"ul"},"extras: mirror.kakao.com"),(0,a.kt)("li",{parentName:"ul"},"epel: ftp.iij.ad.jp"),(0,a.kt)("li",{parentName:"ul"},"centos-sclo-sclo: mirror.kakao.com"),(0,a.kt)("li",{parentName:"ul"},"centos-sclo-rh: mirror.kakao.com"),(0,a.kt)("li",{parentName:"ul"},"base: mirror.kakao.com")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<br/>\n\nb. ```VERSION_STRING```\uc744 \uc0ac\uc6a9\ud558\uc5ec \ud2b9\uc815 \ubc84\uc804\uc744 \uc124\uce58 \ud569\ub2c8\ub2e4.  \n\uc608\ub97c \ub4e4\uba74 ```docker-ce-17.03.0```\uc785\ub2c8\ub2e4.  \n```shell\n# CentOS\n$ sudo yum install docker-ce-<VERSION_STRING> docker-ce-cli-<VERSION_STRING> containerd.io\n")),(0,a.kt)("br",null),(0,a.kt)("p",null,"3. \ub3c4\ucee4 \uc2dc\uc791  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# CentOS\n$  sudo systemctl start docker\n")),(0,a.kt)("br",null),(0,a.kt)("p",null,"\uc124\uce58\uac00 \uc644\ub8cc\ub418\uc5c8\uc73c\uba74 \ud655\uc778\ud574 \ubd05\uc2dc\ub2e4. \ud83d\ude0a  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ sudo docker run hello-world\n\nHello from Docker!\nThis message shows that your installation appears to be working correctly.\n\nTo generate this message, Docker took the following steps:\n 1. The Docker client contacted the Docker daemon.\n 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.\n    (amd64)\n 3. The Docker daemon created a new container from that image which runs the\n    executable that produces the output you are currently reading.\n 4. The Docker daemon streamed that output to the Docker client, which sent it\n    to your terminal.\n\nTo try something more ambitious, you can run an Ubuntu container with:\n $ docker run -it ubuntu bash\n\nShare images, automate workflows, and more with a free Docker ID:\n https://hub.docker.com/\n\nFor more examples and ideas, visit:\n https://docs.docker.com/get-started/\n')),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"windows-docker-\uc124\uce58"},"Windows docker \uc124\uce58"),(0,a.kt)("div",{align:"center"},"![windows](/img/logos/windows.svg)"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\ub9e5\uc73c\ub85c \ud14c\uc2a4\ud2b8 \ud574\ubcf4\uc9c0 \ubabb\ud588\uc73c\ub098 \ub3d9\uc77c\ud55c \uc808\ucc28\uc77c \ub4ef \ud569\ub2c8\ub2e4"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://www.docker.com/products/docker-desktop"},"\uc5ec\uae30")," \uc5d0\uc11c Docker Desktop for Windows\ub97c \ub2e4\uc6b4\ubc1b\uc2b5\ub2c8\ub2e4."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/docker-desktop-download.png",alt:"docker desktop download"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"\ub2e4\uc6b4\ubc1b\uc740 \uc778\uc2a4\ud1a8\ub7ec\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4.  "),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/docker-desktop-install.png",alt:"docker desktop install"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uccab \ubc88\uc9f8 \uc635\uc158(Install required Windows components for WSL 2)\uc740 Docker\ub97c \ub3d9\uc791\ud558\ub294\ub370 \ud544\uc694\ud55c Windows Subsystem Linux(WSL)\uc758 \uc124\uce58\ub97c \uc9c4\ud589\ud569\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub450 \ubc88\uc9f8 \uc635\uc158(Add shortcut to desktop)\uc740 \ubc14\ud0d5\ud654\uba74\uc5d0 \ubc14\ub85c\uac00\uae30 \uc544\uc774\ucf58\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4.")),(0,a.kt)("p",null,"\uc124\uce58\uac00 \uc644\ub8cc\ub418\uba74 \ucef4\ud4e8\ud130\uac00 \uc7ac\uc2dc\uc791\ub429\ub2c8\ub2e4.  "),(0,a.kt)("br",null),(0,a.kt)("p",null,"\ucef4\ud4e8\ud130\ub97c \uc7ac\uc2dc\uc791\ub418\uba74 Docker Desktop\uc774 \uc2e4\ud589\ub429\ub2c8\ub2e4. \ud2b9\ubcc4\ud55c \uc0ac\uc6a9 \ubc29\ubc95\uc744 \uc775\ud790 \uac83\uc774 \uc544\ub2c8\uba74 Skip tutorial\uc744 \ub20c\ub7ec\uc90d\uc2dc\ub2e4.  "),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/docker-desktop-installed.png",alt:"docker desktop installed"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"CLI\ub97c \ud1b5\ud574 \uc0ac\uc6a9 \uac00\ub2a5\ud55c\uc9c0\ub3c4 \ud655\uc778\ud574 \ubd05\uc2dc\ub2e4.  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"> docker -v\nDocker version 19.03.12, build 0ed913b8-\n")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"tips"},"Tips"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\ubd81\ub9c8\ud06c \ud558\uace0 \ubcf4\uc138\uc694")),(0,a.kt)("p",null,"\ub3c4\ucee4 \uc2e4\ud589 \uad8c\ud55c\uc744 \ucd94\uac00\ud574 superuser\ub97c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo usermod -aG docker $USER\n$ sudo service docker restart\n")),(0,a.kt)("br",null),(0,a.kt)("p",null,"\ub3c4\ucee4\ub97c \uc0ac\uc6a9\ud558\ub2e4\ubcf4\uba74 build cache\uc640 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 image, container\uac00\n\uc6a9\ub7c9\uc744 \ucc28\uc9c0\ud558\ub294 \uacbd\uc6b0\uac00 \uc788\uc2b5\ub2c8\ub2e4.\n\ub2e4\uc74c \uba85\ub839\uc5b4\ub85c \uc6a9\ub7c9\uc744 \ud655\ubcf4\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# \ube4c\ub4dc \uce90\uc2dc \uc0ad\uc81c\ud558\uae30\n$ docker builder prune\n\n# \uc885\ub8cc\ub41c(exited) \ucee8\ud14c\uc774\ub108 \uc804\ubd80 \uc0ad\uc81c\ud558\uae30\n$ docker rm $(docker ps --filter status=exited -q)\n\n# \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 \uc774\ubbf8\uc9c0\ub97c \uc815\ub9ac\ud558\uae30\n$ docker image prune -a\n\n# \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 build \uce90\uc2dc, \ubcfc\ub968, \uc774\ubbf8\uc9c0 \uc804\ubd80\ub97c \uc815\ub9ac\ud558\uae30\n$ docker system prune -a --volumes\n")),(0,a.kt)("br",null),(0,a.kt)("p",null,"\ubd88\ud589\ud788 \ub3c4\ucee4\ub97c \uc804\ubd80 \uc0ad\uc81c\ud574\uc57c \ud560 \uc77c\uc774 \uc0dd\uacbc\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\ubaa8\ub4e0 \ub3c4\ucee4 \uce90\uc2dc, \uc774\ubbf8\uc9c0, \ucee8\ud14c\uc774\ub108, \ubcfc\ub968, \uc124\uc815\uc744 \uc0ad\uc81c\ud558\ub294 \ubc29\ubc95\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4.  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# Ubuntu\n$ sudo apt-get purge docker-ce docker-ce-cli containerd.io\n\n")),(0,a.kt)("p",null,"\uc774\ubbf8\uc9c0, \ucee8\ud14c\uc774\ub108, \ubcfc\ub968, \uc124\uc815\uc740 \uc790\ub3d9\uc73c\ub85c \uc9c0\uc6cc\uc9c0\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.\n\ub2e4\uc74c \uba85\ub839\uc5b4\ub85c \uc9c0\uc6cc\uc8fc\uc138\uc694."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo rm -rf /var/lib/docker\n$ sudo rm -rf /var/lib/containerd\n")),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"reference"},"Reference"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/ubuntu/"},"[\uacf5\uc2dd]Install Docker Engine on Ubuntu"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/centos/"},"[\uacf5\uc2dd]Install Docker Engine on CentOS")))}d.isMDXComponent=!0}}]);