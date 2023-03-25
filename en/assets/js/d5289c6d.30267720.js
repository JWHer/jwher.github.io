"use strict";(self.webpackChunkjwher_blog=self.webpackChunkjwher_blog||[]).push([[5162],{3905:function(e,t,l){l.d(t,{Zo:function(){return c},kt:function(){return m}});var n=l(67294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function s(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function u(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var p=n.createContext({}),o=function(e){var t=n.useContext(p),l=t;return e&&(l="function"==typeof e?e(t):s(s({},t),e)),l},c=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},i=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),i=o(l),m=a,d=i["".concat(p,".").concat(m)]||i[m]||k[m]||r;return l?n.createElement(d,s(s({ref:t},c),{},{components:l})):n.createElement(d,s({ref:t},c))}));function m(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=l.length,s=new Array(r);s[0]=i;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:a,s[1]=u;for(var o=2;o<r;o++)s[o]=l[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,l)}i.displayName="MDXCreateElement"},80035:function(e,t,l){l.r(t),l.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return u},metadata:function(){return o},toc:function(){return k}});var n=l(87462),a=l(63366),r=(l(67294),l(3905)),s=["components"],u={authors:["jwher"],description:"Kubernetes Usage",slug:"kubernetes-usage",tags:["tech","kubernetes"],title:"\uc790\uc8fc\uc4f0\ub294 \ucfe0\ubc84\ub124\ud2f0\uc2a4 \uba85\ub839\uc5b4"},p=void 0,o={permalink:"/en/posts/kubernetes-usage",editUrl:"https://github.com/jwher/jwher.github.io/posts/2021-05-28-kubernetes-usage/index.md",source:"@site/posts/2021-05-28-kubernetes-usage/index.md",title:"\uc790\uc8fc\uc4f0\ub294 \ucfe0\ubc84\ub124\ud2f0\uc2a4 \uba85\ub839\uc5b4",description:"Kubernetes Usage",date:"2021-05-28T00:00:00.000Z",formattedDate:"May 28, 2021",tags:[{label:"tech",permalink:"/en/posts/tags/tech"},{label:"kubernetes",permalink:"/en/posts/tags/kubernetes"}],readingTime:9.705,truncated:!0,authors:[{name:"Jeongwon Her",title:"MLOps Engineer",url:"https://github.com/jwher",imageURL:"https://github.com/jwher.png",key:"jwher"}],frontMatter:{authors:["jwher"],description:"Kubernetes Usage",slug:"kubernetes-usage",tags:["tech","kubernetes"],title:"\uc790\uc8fc\uc4f0\ub294 \ucfe0\ubc84\ub124\ud2f0\uc2a4 \uba85\ub839\uc5b4"},prevItem:{title:"Nuclio \uac1c\ub150\uacfc \uc544\ud0a4\ud14d\ucc98",permalink:"/en/posts/nuclio"},nextItem:{title:"\ub098\uc5d0\uac8c \ud544\uc694\ud55c \uc5f0\uc7ac\uc5d0 \ub300\ud574",permalink:"/en/posts/blog-essay"}},c={authorsImageUrls:[void 0]},k=[{value:"kubectl \uc124\uce58",id:"kubectl-\uc124\uce58",level:2},{value:"requirements",id:"requirements",level:3},{value:"\ubc14\uc774\ub108\ub9ac \uc124\uce58",id:"\ubc14\uc774\ub108\ub9ac-\uc124\uce58",level:3},{value:"\ud328\ud0a4\uc9c0 \uad00\ub9ac\uc790 \uc124\uce58",id:"\ud328\ud0a4\uc9c0-\uad00\ub9ac\uc790-\uc124\uce58",level:3},{value:"\ub370\ube44\uc548",id:"\ub370\ube44\uc548",level:4},{value:"\ub808\ub4dc\ud587",id:"\ub808\ub4dc\ud587",level:4},{value:"\ub2e4\ub978 \ud328\ud0a4\uc9c0 \uad00\ub9ac\uc790",id:"\ub2e4\ub978-\ud328\ud0a4\uc9c0-\uad00\ub9ac\uc790",level:3},{value:"snap",id:"snap",level:4},{value:"brew",id:"brew",level:4},{value:"\uba85\ub839\uc5b4",id:"\uba85\ub839\uc5b4",level:2},{value:"\uc870\ud68c",id:"\uc870\ud68c",level:3},{value:"\ubc84\uc804 \uc870\ud68c",id:"\ubc84\uc804-\uc870\ud68c",level:4},{value:"\ub178\ub4dc \uc870\ud68c",id:"\ub178\ub4dc-\uc870\ud68c",level:4},{value:"\ub178\ub4dc \ub77c\ubca8 \uc870\ud68c",id:"\ub178\ub4dc-\ub77c\ubca8-\uc870\ud68c",level:4},{value:"namespace \uc870\ud68c",id:"namespace-\uc870\ud68c",level:4},{value:"\ub9ac\uc18c\uc2a4 \uc885\ub958 \uc870\ud68c",id:"\ub9ac\uc18c\uc2a4-\uc885\ub958-\uc870\ud68c",level:4},{value:"\ub9ac\uc18c\uc2a4 \uc870\ud68c",id:"\ub9ac\uc18c\uc2a4-\uc870\ud68c",level:4},{value:"\ub9ac\uc18c\uc2a4",id:"\ub9ac\uc18c\uc2a4",level:4},{value:"\uc790\uc6d0 \uc0ac\uc6a9\ub7c9 \uc870\ud68c",id:"\uc790\uc6d0-\uc0ac\uc6a9\ub7c9-\uc870\ud68c",level:4},{value:"\ub85c\uadf8 \ud655\uc778",id:"\ub85c\uadf8-\ud655\uc778",level:4},{value:"\uc0dd\uc131",id:"\uc0dd\uc131",level:3},{value:"\ud30c\uc77c\uc744 \ud1b5\ud55c \ub9ac\uc18c\uc2a4 \uc0dd\uc131",id:"\ud30c\uc77c\uc744-\ud1b5\ud55c-\ub9ac\uc18c\uc2a4-\uc0dd\uc131",level:4},{value:"\uc11c\ube44\uc2a4 \uc0dd\uc131",id:"\uc11c\ube44\uc2a4-\uc0dd\uc131",level:4},{value:"\ub124\ud2b8\uc6cc\ud06c",id:"\ub124\ud2b8\uc6cc\ud06c",level:3},{value:"k8s api \uc11c\ube44\uc2a4 \uc0ac\uc6a9",id:"k8s-api-\uc11c\ube44\uc2a4-\uc0ac\uc6a9",level:4},{value:"\ud3ec\ud2b8\ud3ec\uc6cc\ub529",id:"\ud3ec\ud2b8\ud3ec\uc6cc\ub529",level:4},{value:"\ud30c\uc77c\ubcf5\uc0ac",id:"\ud30c\uc77c\ubcf5\uc0ac",level:4},{value:"\ubb38\uc81c \ud655\uc778",id:"\ubb38\uc81c-\ud655\uc778",level:3},{value:"\ucee8\ud14c\uc774\ub108 \uc811\uc18d",id:"\ucee8\ud14c\uc774\ub108-\uc811\uc18d",level:4},{value:"\uc218\uc815/\uc0ad\uc81c",id:"\uc218\uc815\uc0ad\uc81c",level:3},{value:"\ub9ac\uc18c\uc2a4 \uc7ac\uc2dc\uc791",id:"\ub9ac\uc18c\uc2a4-\uc7ac\uc2dc\uc791",level:4},{value:"\ub9ac\uc18c\uc2a4 \ub864\ubc31",id:"\ub9ac\uc18c\uc2a4-\ub864\ubc31",level:4},{value:"\ub9ac\uc18c\uc2a4 \uac15\uc81c \uc0ad\uc81c",id:"\ub9ac\uc18c\uc2a4-\uac15\uc81c-\uc0ad\uc81c",level:4},{value:"\ubaa8\ub4e0 \ub9ac\uc18c\uc2a4 \uc0ad\uc81c",id:"\ubaa8\ub4e0-\ub9ac\uc18c\uc2a4-\uc0ad\uc81c",level:4},{value:"\ud3b8\uc9d1",id:"\ud3b8\uc9d1",level:4},{value:"\ub178\ub4dc \ub77c\ubca8 \uc124\uc815",id:"\ub178\ub4dc-\ub77c\ubca8-\uc124\uc815",level:4},{value:"\ub178\ub4dc \uc9c0\uc815",id:"\ub178\ub4dc-\uc9c0\uc815",level:4},{value:"\ub178\ub4dc \uc81c\uac70",id:"\ub178\ub4dc-\uc81c\uac70",level:4},{value:"\uc751\uc6a9",id:"\uc751\uc6a9",level:3},{value:"Running \uc0c1\ud0dc\uac00 \uc544\ub2cc pod \uc0ad\uc81c",id:"running-\uc0c1\ud0dc\uac00-\uc544\ub2cc-pod-\uc0ad\uc81c",level:4},{value:"Tips",id:"tips",level:2},{value:"Reference",id:"reference",level:2}],i={toc:k};function m(e){var t=e.components,u=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},i,u,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kubernetes",src:l(91635).Z,width:"723",height:"702"}),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("em",{parentName:"p"},"\ucfe0\ubc84\ub124\ud2f0\uc2a4 \uc0ac\uc6a9\ud558\uae30"),"  "),(0,r.kt)("h1",{id:"\ubaa9\ucc28"},"\ubaa9\ucc28"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#kubectl-%EC%84%A4%EC%B9%98"},"kubectl \uc124\uce58")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%EB%AA%85%EB%A0%B9%EC%96%B4"},"\uba85\ub839\uc5b4"))),(0,r.kt)("h2",{id:"kubectl-\uc124\uce58"},"kubectl \uc124\uce58"),(0,r.kt)("p",null,"\uc124\ub9c8 kubectl\uc774 \uc5c6\uc744\uae4c\uc694...?",(0,r.kt)("br",{parentName:"p"}),"\n","\ucfe0\ubc84\ub124\ud2f0\uc2a4\ub97c \ucc98\uc74c \uc811\ud558\uc2e0\ub2e4\uba74 \ucfe0\ubc84\ub124\ud2f0\uc2a4 \uad6c\uc870\ub97c \ub2e4\ub8ec ",(0,r.kt)("a",{parentName:"p",href:"/posts/welcome-to-kubernetes"},"\uc774\uae00"),"\n\uba3c\uc800 \ubcf4\uc2dc\ub294\uac78 \ucd94\ucc9c\ud569\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"requirements"},"requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"linux"),(0,r.kt)("li",{parentName:"ul"},"kubernetes cluster")),(0,r.kt)("h3",{id:"\ubc14\uc774\ub108\ub9ac-\uc124\uce58"},"\ubc14\uc774\ub108\ub9ac \uc124\uce58"),(0,r.kt)("details",{markdown:"1",open:!0},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\ubc14\uc774\ub108\ub9ac \ud30c\uc77c\uc744 \ub2e4\uc6b4\ub85c\ub4dc \ud569\ub2c8\ub2e4.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# \ub2e4\uc74c \uba85\ub839\uc73c\ub85c \ucd5c\uc2e0 kubectl\uc744 \ub2e4\uc6b4\ubc1b\uc2b5\ub2c8\ub2e4\n$ curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"\n\n# kubectl\uc740 kubernetes \ud074\ub7ec\uc2a4\ud130\uc640 \ub9c8\uc774\ub108 \ubc84\uc804 \ucc28\uc774\ub9cc \uc5f0\ub3d9 \uac00\ub2a5\ud569\ub2c8\ub2e4\n# \uc608\ub97c \ub4e4\uc5b4, v1.21 kubectl\uc740 v1.20, v1.21, v1.22 \ud074\ub7ec\uc2a4\ud130\uc640 \uc5f0\ub3d9\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4\n# version\uc744 \uc218\uc815\ud574 \ud2b9\uc815 \ubc84\uc804\uc744 \ub2e4\uc6b4\ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4\n$ curl -LO https://dl.k8s.io/release/{version}/bin/linux/amd64/kubectl\n\n# (\uc120\ud0dd\uc0ac\ud56d) sha256 \uccb4\ud06c\uc12c \uac80\uc99d\n$ curl -LO "https://dl.k8s.io/{version}/bin/linux/amd64/kubectl.sha256"\n$ echo "$(<kubectl.sha256) kubectl" | sha256sum --check\n\nkubectl: OK # \uc131\uacf5\uc2dc\n\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\ubc14\uc774\ub108\ub9ac \ud30c\uc77c\uc744 \uc124\uce58\ud569\ub2c8\ub2e4.  ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \uc124\uce58\ud558\uae30, \ubc14\uc774\ub108\ub9ac \ud30c\uc77c\uc744 \uc774\ub3d9\ud558\ub294 \uac83 \ucc98\ub7fc \ubcf4\uc785\ub2c8\ub2e4\n$ sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl\n\n# root \uad8c\ud55c\uc774 \uc5c6\uc5b4\ub3c4 ~/.local/bin\uc5d0 \uc124\uce58\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4\n$ mkdir -p ~/.local/bin/kubectl\n$ mv ./kubectl ~/.local/bin/kubectl\n# \uadf8\ub9ac\uace0 ~/.local/bin/kubectl\uc744 $PATH\uc5d0 \ucd94\uac00\ud574\uc90d\ub2c8\ub2e4\n$ export $PATH=$PATH:~/.local/bin/kubectl\n\n# \ud655\uc778\ud574\ubd05\uc2dc\ub2e4\n$ kubectl cluster-info\n\nKubernetes master is running at https://server-name:port\nKubeDNS is running at https://server-name:port/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy\n\nTo further debug and diagnose cluster problems, use 'kubectl cluster-info dump'.\n\n# \uc2e4\ud328\uc2dc \ub098\uc624\ub294 \uba54\uc2dc\uc9c0\uc785\ub2c8\ub2e4\nThe connection to the server <server-name:port> was refused - did you specify the right host or port?\n# kubernetes \ud074\ub7ec\uc2a4\ud130\uc640 \uc5f0\uacb0\uc774 \uc548\ub418\uac70\ub098 config \ud30c\uc77c\uc5d0 \ubb38\uc81c\uac00 \uc788\uc2b5\ub2c8\ub2e4\n")),(0,r.kt)("br",null)),(0,r.kt)("h3",{id:"\ud328\ud0a4\uc9c0-\uad00\ub9ac\uc790-\uc124\uce58"},"\ud328\ud0a4\uc9c0 \uad00\ub9ac\uc790 \uc124\uce58"),(0,r.kt)("details",{markdown:"1",open:!0},(0,r.kt)("p",null,"apt\ub098 yum\uc73c\ub85c \uad00\ub9ac\ub418\uac8c \uc124\uce58\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.  "),(0,r.kt)("h4",{id:"\ub370\ube44\uc548"},"\ub370\ube44\uc548"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"apt")," \uc778\ub371\uc2a4 \uc5c5\ub370\uc774\ud2b8\uc640 \ud544\uc694\ud55c \ud328\ud0a4\uc9c0\ub97c \uc124\uce58\ud569\ub2c8\ub2e4.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo apt-get update\n$ sudo apt-get install -y apt-transport-https ca-certificates curl\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\uad6c\uae00 \ud074\ub77c\uc6b0\ub4dc\uc758 \ud37c\ube14\ub9ad \uc0ac\uc774\ub2dd \ud0a4\ub97c \ub2e4\uc6b4\ubc1b\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo curl -fsSLo /usr/share/keyrings/kubernetes-archive-keyring.gpg https://packages.cloud.google.com/apt/doc/apt-key.gpg\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\ucfe0\ubc84\ub124\ud2f0\uc2a4 ",(0,r.kt)("inlineCode",{parentName:"li"},"apt")," \ub808\ud504\uc9c0\ud1a0\ub9ac\ub97c \ucd94\uac00\ud569\ub2c8\ub2e4.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ echo "deb [signed-by=/usr/share/keyrings/kubernetes-archive-keyring.gpg] https://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee /etc/apt/sources.list.d/kubernetes.list\n')),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"apt")," \uc778\ub371\uc2a4 \uc5c5\ub370\uc774\ud2b8 \ud6c4 kubectl\uc744 \uc124\uce58\ud569\ub2c8\ub2e4.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo apt-get update\n$ sudo apt-get install -y kubectl\n")),(0,r.kt)("h4",{id:"\ub808\ub4dc\ud587"},"\ub808\ub4dc\ud587"),(0,r.kt)("p",null,"yum \ub808\ud3ec\uc9c0\ud1a0\ub9ac\uc5d0 \ucd94\uac00 \ud6c4 \uc124\uce58\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cat <<EOF > /etc/yum.repos.d/kubernetes.repo\n[kubernetes]\nname=Kubernetes\nbaseurl=https://packages.cloud.google.com/yum/repos/kubernetes-el7-x86_64\nenabled=1\ngpgcheck=1\nrepo_gpgcheck=1\ngpgkey=https://packages.cloud.google.com/yum/doc/yum-key.gpg https://packages.cloud.google.com/yum/doc/rpm-package-key.gpg\nEOF\nyum install -y kubectl\n")),(0,r.kt)("br",null)),(0,r.kt)("h3",{id:"\ub2e4\ub978-\ud328\ud0a4\uc9c0-\uad00\ub9ac\uc790"},"\ub2e4\ub978 \ud328\ud0a4\uc9c0 \uad00\ub9ac\uc790"),(0,r.kt)("details",{markdown:"1",open:!0},(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\uc9c1\uc811 \ud574\ubcf4\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4")),(0,r.kt)("h4",{id:"snap"},"snap"),(0,r.kt)("p",null,"\uc6b0\ubd84\ud22c\uc77c\ub54c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ snap install kubectl --classic\n$ kubectl version --client\n")),(0,r.kt)("h4",{id:"brew"},"brew"),(0,r.kt)("p",null,"maybe mac..."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ brew install kubectl\n$ kubectl version --client\n")),(0,r.kt)("br",null)),(0,r.kt)("h2",{id:"\uba85\ub839\uc5b4"},"\uba85\ub839\uc5b4"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"cheat sheet"),(0,r.kt)("br",{parentName:"p"}),"\n","\ub3c4\ucee4 \uba85\ub839\uc5b4\uc640 \uc720\uc0ac\ud55c \uba85\ub839\uc5b4\uac00 \ub9ce\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\uc870\ud68c"},"\uc870\ud68c"),(0,r.kt)("details",{markdown:"1",open:!0},(0,r.kt)("h4",{id:"\ubc84\uc804-\uc870\ud68c"},"\ubc84\uc804 \uc870\ud68c"),(0,r.kt)("p",null,"\uac00\ubccd\uac8c \uc2dc\uc791\ud574\ubd05\uc2dc\ub2e4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ kubectl version \n\nClient Version: version.Info{Major:"1", Minor:"16", GitVersion:"v1.16.0", GitCommit:"2bd9643cee5b3b3a5ecbd3af49d09018f0773c77", GitTreeState:"clean", BuildDate:"2019-09-18T14:36:53Z", GoVersion:"go1.12.9", Compiler:"gc", Platform:"linux/amd64"}\nServer Version: version.Info{Major:"1", Minor:"16", GitVersion:"v1.16.15", GitCommit:"2adc8d7091e89b6e3ca8d048140618ec89b39369", GitTreeState:"clean", BuildDate:"2020-09-02T11:31:21Z", GoVersion:"go1.13.15", Compiler:"gc", Platform:"linux/amd64"}\n')),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"\ub178\ub4dc-\uc870\ud68c"},"\ub178\ub4dc \uc870\ud68c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get node\nNAME        STATUS   ROLES    AGE   VERSION\ngpuslave    Ready    <none>   34d   v1.16.0\nmaster      Ready    master   41d   v1.16.0\nslave       Ready    <none>   41d   v1.16.0\n")),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"\ub178\ub4dc-\ub77c\ubca8-\uc870\ud68c"},"\ub178\ub4dc \ub77c\ubca8 \uc870\ud68c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get nodes \u2013-show-labels\n\nNAME       STATUS   ROLES    AGE   VERSION    LABELS\nmaster     Ready    master   37d   v1.16.15   beta.kubernetes.io/arch=amd64,beta.kubernetes.io/os=linux,kubernetes.io/hostname=master,kubernetes.io/os=linux,node-role.kubernetes.io/master=,type=master\n")),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"namespace-\uc870\ud68c"},"namespace \uc870\ud68c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get namespace\n$ kubectl get ns\n\nNAME                   STATUS   AGE\ndefault                Active   41d\nistio-system           Active   41d\nkube-node-lease        Active   41d\nkube-public            Active   41d\nkube-system            Active   41d\nnuclio                 Active   6d8h\n")),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"\ub9ac\uc18c\uc2a4-\uc885\ub958-\uc870\ud68c"},"\ub9ac\uc18c\uc2a4 \uc885\ub958 \uc870\ud68c"),(0,r.kt)("p",null,"\uc5b4\ub5a4 resource\ub97c \uacf5\ubd80\ud574\uc57c \ud560\uc9c0 \uad81\uae08\ud558\ub2e4\uba74?",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("em",{parentName:"p"},"\uc8fc\uc758: \ud574\ub2f9 \ucd9c\ub825\uc740 \uae41\ub2c8\ub2e4. less\ub098 \ub2e4\ub978 \uba85\ub839\uc5b4 \uc870\ud569\uc744 \ucd94\ucc9c\ud569\ub2c8\ub2e4")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \uac04\ub2e8\ud558\uc9c0\ub9cc \ub3c4\uc6c0\uc774 \ub418\ub294\n$ kubectl api-resources\n")),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"\ub9ac\uc18c\uc2a4-\uc870\ud68c"},"\ub9ac\uc18c\uc2a4 \uc870\ud68c"),(0,r.kt)("p",null,"\ub9ac\uc18c\uc2a4/\ucee4\uc2a4\ud140 \ub9ac\uc18c\uc2a4 \ubaa9\ub85d\uc744 \uc870\ud68c\ud569\ub2c8\ub2e4.\n",(0,r.kt)("inlineCode",{parentName:"p"},"all"),"\uc744 \uc0ac\uc6a9\ud574 \uc874\uc7ac\ud558\ub294 \ubaa8\ub4e0 \ub9ac\uc18c\uc2a4\ub97c \uc870\ud68c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get {pod|deployment|replicationcontroller|service|all|...} [-n namespace]\n\n# \ud30c\ub4dc \uc870\ud68c\nNAME                                  READY   STATUS    RESTARTS   AGE\nmy-pod                                1/1     Running   0          28h\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"wide"),"\ub97c \uc0ac\uc6a9\ud574 \uc790\uc138\ud55c \ub0b4\uc6a9\uc744 \ucd9c\ub825\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get {resource} -o wide\n\n# \ud30c\ub4dc \uc870\ud68c\nNAME                                  READY   STATUS    RESTARTS   AGE   IP             NODE      NOMINATED NODE   READINESS GATES\nmy-pod                                1/1     Running   0          28h   10.244.0.109   worker    <none>           <none>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"json")," \ud30c\uc77c\uc774\ub098 ",(0,r.kt)("inlineCode",{parentName:"p"},"yaml")," \ud30c\uc77c\ub85c \ucd9c\ub825\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get {resource} -o {json|yaml}\n")),(0,r.kt)("p",null,"\ud655\uc778\ud558\uace0 \uc2f6\uc740 \ud544\ub4dc\ub9cc \ud544\ud130\ub9c1 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud83c\udf4e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get {resource} -o custom-columns={NAME:json.path,NAME:json.path,CONTAINERS:.spec.containers[*].name...}\n")),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"\ub9ac\uc18c\uc2a4"},"\ub9ac\uc18c\uc2a4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get nodes \u2013-show-labels\n")),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"\uc790\uc6d0-\uc0ac\uc6a9\ub7c9-\uc870\ud68c"},"\uc790\uc6d0 \uc0ac\uc6a9\ub7c9 \uc870\ud68c"),(0,r.kt)("p",null,"heapster\uac00 \uc124\uce58\ub418\uc5b4 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl top node {nodename}\n")),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"\ub85c\uadf8-\ud655\uc778"},"\ub85c\uadf8 \ud655\uc778"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl logs {resource}/{name} [-n {namespace}] [-c {container}]\n")),(0,r.kt)("p",null,"\ub9ac\uc18c\uc2a4 \uc0dd\uc131\uc5d0 \ubb38\uc81c\uac00 \uc788\uc744 \ub54c\ub294 \ucfe0\ubc84\ub124\ud2f0\uc2a4 \ub85c\uadf8\ub9cc \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl describe {resource}/{name} [-n {namespace}]\n")),(0,r.kt)("br",null)),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"\uc0dd\uc131"},"\uc0dd\uc131"),(0,r.kt)("details",{markdown:"1",open:!0},(0,r.kt)("h4",{id:"\ud30c\uc77c\uc744-\ud1b5\ud55c-\ub9ac\uc18c\uc2a4-\uc0dd\uc131"},"\ud30c\uc77c\uc744 \ud1b5\ud55c \ub9ac\uc18c\uc2a4 \uc0dd\uc131"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl apply -f {file.yaml}\n")),(0,r.kt)("p",null,"\uac04\ub2e8\ud55c deploy\ub294 \uc2a4\ud2b8\ub9bc\uc73c\ub85c \uc0dd\uc131\ud558\uae30\ub3c4 \ud569\ub2c8\ub2e4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl apply -f -<<EOF\n> ...\n> EOF\n")),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"\uc11c\ube44\uc2a4-\uc0dd\uc131"},"\uc11c\ube44\uc2a4 \uc0dd\uc131"),(0,r.kt)("p",null,"\uc874\uc7ac\ud558\ub294 deploy/pod\ub97c \uc11c\ube44\uc2a4\ub85c \ub178\ucd9c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl expose {deploy/pod}/{name} [--name servicename] [--type ClusterIP|LoadBalancer|NodePort]\n")),(0,r.kt)("br",null)),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"\ub124\ud2b8\uc6cc\ud06c"},"\ub124\ud2b8\uc6cc\ud06c"),(0,r.kt)("details",{markdown:"1",open:!0},(0,r.kt)("h4",{id:"k8s-api-\uc11c\ube44\uc2a4-\uc0ac\uc6a9"},"k8s api \uc11c\ube44\uc2a4 \uc0ac\uc6a9"),(0,r.kt)("p",null,"\ud504\ub85d\uc2dc \uc2e4\ud589 \uba85\ub839\uc5b4 \uc785\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl proxy\n# example\n# http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/{URI}\n")),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"\ud3ec\ud2b8\ud3ec\uc6cc\ub529"},"\ud3ec\ud2b8\ud3ec\uc6cc\ub529"),(0,r.kt)("p",null,"\uac04\ub2e8\ud788 \ud14c\uc2a4\ud2b8 \ud560 \uc218 \uc788\uc5b4 \uc790\uc8fc \uc0ac\uc6a9\ud569\ub2c8\ub2e4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl port-forward {resource/name} {port from:port to} [-n {namespace}] [--address={ip}]\n\n# \ubc31\uadf8\ub77c\uc6b4\ub4dc\uc5d0 \uacc4\uc18d \uc720\uc9c0\uc2dc\ud0a4\uace0 \uc2f6\uc73c\uba74  \n$ nohup kubectl port-forward {args} > /dev/null &\n")),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"\ud30c\uc77c\ubcf5\uc0ac"},"\ud30c\uc77c\ubcf5\uc0ac"),(0,r.kt)("p",null,"\ud638\uc2a4\ud2b8 -> \uac8c\uc2a4\ud2b8"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl cp {host/path} [{namespace}/]{podname}:{guest/path} [-c {container}]\n")),(0,r.kt)("p",null,"\uac8c\uc2a4\ud2b8 -> \ud638\uc2a4\ud2b8"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl cp [{namespace}/]{podname}:{guest/path} [-c {container}] {host/path}\n")),(0,r.kt)("br",null)),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"\ubb38\uc81c-\ud655\uc778"},"\ubb38\uc81c \ud655\uc778"),(0,r.kt)("details",{markdown:"1",open:!0},(0,r.kt)("h4",{id:"\ucee8\ud14c\uc774\ub108-\uc811\uc18d"},"\ucee8\ud14c\uc774\ub108 \uc811\uc18d"),(0,r.kt)("p",null,"\ucee8\ud14c\uc774\ub108\ub97c \uc9c1\uc811 \ud655\uc778\ud574\ubd05\uc2dc\ub2e4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl exec -it {podname} [-n {namespace}] [-c {container}] -- /bin/sh\n")),(0,r.kt)("p",null,"\ub2e4\ub978 \uba85\ub839\uc5b4\ub97c \uc2e4\ud589\uc2dc\ucf1c\ub3c4 \ub429\ub2c8\ub2e4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl exec {resource}/{name} -- {command}\n")),(0,r.kt)("p",null,"\uc258\uc774 \uc2e4\ud589\uc911\uc774\uba74 attach \uba85\ub839\uc5b4\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl attach {podname} [-n {namespace}] [-c {container}]\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"kubectl"),"\uc744 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uace0 \ud574\ub2f9 \ucee8\ud14c\uc774\ub108\uac00 \uc2e4\ud589\ub418\uace0 \uc788\ub294 \ub178\ub4dc\uc5d0\uc11c docker \uba85\ub839\uc5b4\ub97c \uc0ac\uc6a9\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4"),"  "),(0,r.kt)("br",null)),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"\uc218\uc815\uc0ad\uc81c"},"\uc218\uc815/\uc0ad\uc81c"),(0,r.kt)("details",{markdown:"1",open:!0},(0,r.kt)("p",null,"\u26a0",(0,r.kt)("em",{parentName:"p"},"\uc8fc\uc758: \ubc31\uc5c5 \uc218\ub2e8\uc744 \ub9cc\ub4e4\uace0 \uc9c4\ud589\ud558\uc138\uc694"),(0,r.kt)("br",{parentName:"p"}),"\n","\ubcc0\uacbd \uc804 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl get {resource} -o yaml > {resource}.yaml"),"\ub4f1\uc758 \uba85\ub839\uc5b4\ub85c \ubc31\uc5c5\ud558\uace0 \uc9c4\ud589\ud569\ub2c8\ub2e4.  "),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"\ub9ac\uc18c\uc2a4-\uc7ac\uc2dc\uc791"},"\ub9ac\uc18c\uc2a4 \uc7ac\uc2dc\uc791"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl rollout restart {resource}/{name} [-n {namespace}] \n")),(0,r.kt)("p",null,"\ub9ac\uc18c\uc2a4 \uc0ad\uc81c \ud6c4 \uc7ac\uc0dd\uc131"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get {resource}/{name} [-n {namespace}] -o yaml | kubectl replace --force -f-\n")),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"\ub9ac\uc18c\uc2a4-\ub864\ubc31"},"\ub9ac\uc18c\uc2a4 \ub864\ubc31"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://jwher.github.io/k8s-tip-rollback"},"\ub864\ubc31"),"  "),(0,r.kt)("p",null,"\ub864\uc544\uc6c3 \uae30\ub85d \ud655\uc778"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl rollout history {resource}/{name} [-n {namespace}]\n\nREVISION  CHANGE-CAUSE\n1         <none>\n")),(0,r.kt)("p",null,"\ub864\ubc31"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl rollout undo {resource}/{name} [-n {namespace}] [--to-revision={revision}]\n")),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"\ub9ac\uc18c\uc2a4-\uac15\uc81c-\uc0ad\uc81c"},"\ub9ac\uc18c\uc2a4 \uac15\uc81c \uc0ad\uc81c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ kubectl delete {resource}/{name} [-n {namespace}]  --grace-period=0 -force\n$ kubectl patch {resource}/{name} [-n {namespace}] -p \'{"metadata": {"finalizers": null}}\'\n')),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"\ubaa8\ub4e0-\ub9ac\uc18c\uc2a4-\uc0ad\uc81c"},"\ubaa8\ub4e0 \ub9ac\uc18c\uc2a4 \uc0ad\uc81c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl delete all --all -n {namespace}\n")),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"\ud3b8\uc9d1"},"\ud3b8\uc9d1"),(0,r.kt)("p",null,"\uc2dc\uc2a4\ud15c \uae30\ubcf8 \uc5d0\ub514\ud130\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4(\ud655\uc778 \ud544\uc694)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl edit {resource}/{name} [-n {namespace}] \n")),(0,r.kt)("p",null,"\ud658\uacbd\ubcc0\uc218\ub85c \uc5d0\ub514\ud130 \uc120\ud0dd\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ KUBE_EDITOR="nano" kubectl edit {resource}/{name} [-n {namespace}] \n')),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"\ub178\ub4dc-\ub77c\ubca8-\uc124\uc815"},"\ub178\ub4dc \ub77c\ubca8 \uc124\uc815"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl label nodes {node} key={value}\n")),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"\ub178\ub4dc-\uc9c0\uc815"},"\ub178\ub4dc \uc9c0\uc815"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://jwher.github.io/k8s-tip-nodeselector"},"\ub178\ub4dc\uc140\ub809\ud130")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl edit {resource}/{name} [-n {namespace}] \n#spec>nodeSelector>key=value \uac12\uc744 \uc124\uc815\ud569\ub2c8\ub2e4.\n")),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"\ub178\ub4dc-\uc81c\uac70"},"\ub178\ub4dc \uc81c\uac70"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl drain {nodename} --delete-local-data --force --ignore-daemonsets\n# \uc81c\uac70\uac00 \uc798 \ub418\uba74 status\uac00 Evit\ub85c \ud45c\uc2dc\ub429\ub2c8\ub2e4\n")),(0,r.kt)("br",null)),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"\uc751\uc6a9"},"\uc751\uc6a9"),(0,r.kt)("details",{markdown:"1",open:!0},(0,r.kt)("h4",{id:"running-\uc0c1\ud0dc\uac00-\uc544\ub2cc-pod-\uc0ad\uc81c"},"Running \uc0c1\ud0dc\uac00 \uc544\ub2cc pod \uc0ad\uc81c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl delete pod [-n {namespace}] $(kubectl get pod [-n {namespace}] --field-selector=status.phase!=Running -o=custom-columns='':metadata.name)\n")),(0,r.kt)("br",null)),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"tips"},"Tips"),(0,r.kt)("p",null,"\uac1c\ub150 \uc774\ud574\uc5d0 \ub3c4\uc6c0\uc774 \ub418\ub294 \uae00\uc785\ub2c8\ub2e4",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"/posts/welcome-to-kubernetes"},"\ucfe0\ubc84\ub124\ud2f0\uc2a4 \uac1c\ub150"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"/posts/kubernetes-architecture"},"\ucfe0\ubc84\ub124\ud2f0\uc2a4 \uc544\ud0a4\ud14d\ucc98")),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/ko/docs/tasks/tools/install-kubectl-linux/#install-using-native-package-management"},"[\uacf5\uc2dd]\ub9ac\ub205\uc2a4\uc5d0 kubectl \uc124\uce58 \ubc0f \uc124\uc815"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands"},"[\uacf5\uc2dd]kubectl-commands"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/ko/docs/reference/kubectl/cheatsheet/"},"[\uacf5\uc2dd]kubectl \uce58\ud2b8 \uc2dc\ud2b8")))}m.isMDXComponent=!0},91635:function(e,t,l){t.Z=l.p+"assets/images/kubernetes-f91022b1deed067a9393dd3c42381ab7.svg"}}]);