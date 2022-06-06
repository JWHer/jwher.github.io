"use strict";(self.webpackChunkjwher_blog=self.webpackChunkjwher_blog||[]).push([[9947],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),k=u(n),m=o,d=k["".concat(p,".").concat(m)]||k[m]||c[m]||a;return n?r.createElement(d,l(l({ref:t},i),{},{components:n})):r.createElement(d,l({ref:t},i))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=k;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2407:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],s={authors:["jwher"],description:"K8s tip: nodeSelector",slug:"k8s-tip-nodeselector",tags:["tech","kubernetes","short"],title:"K8S Tip Nodeselector"},p=void 0,u={permalink:"/kr/posts/k8s-tip-nodeselector",editUrl:"https://github.com/jwher/jwher.github.io/posts/2021-06-14-k8s-tip-nodeselector/index.md",source:"@site/posts/2021-06-14-k8s-tip-nodeselector/index.md",title:"K8S Tip Nodeselector",description:"K8s tip: nodeSelector",date:"2021-06-14T00:00:00.000Z",formattedDate:"June 14, 2021",tags:[{label:"tech",permalink:"/kr/posts/tags/tech"},{label:"kubernetes",permalink:"/kr/posts/tags/kubernetes"},{label:"short",permalink:"/kr/posts/tags/short"}],readingTime:2.9,truncated:!0,authors:[{name:"Jeongwon Her",title:"MLOps Engineer",url:"https://github.com/jwher",imageURL:"https://github.com/jwher.png",key:"jwher"}],frontMatter:{authors:["jwher"],description:"K8s tip: nodeSelector",slug:"k8s-tip-nodeselector",tags:["tech","kubernetes","short"],title:"K8S Tip Nodeselector"},prevItem:{title:"Minio",permalink:"/kr/posts/minio"},nextItem:{title:"Information Theory",permalink:"/kr/posts/information-theory"}},i={authorsImageUrls:[void 0]},c=[{value:"\uc0ac\ub840\uc640 \uc124\uba85",id:"\uc0ac\ub840\uc640-\uc124\uba85",level:2},{value:"\ub178\ub4dc\uc5d0 \ud30c\ub4dc \ud560\ub2f9\ud558\uae30",id:"\ub178\ub4dc\uc5d0-\ud30c\ub4dc-\ud560\ub2f9\ud558\uae30",level:2},{value:"Tips",id:"tips",level:2},{value:"Reference",id:"reference",level:3}],k={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/kubernetes.png",alt:"Alt",title:"kubernetes"}),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("em",{parentName:"p"},"\ud30c\ub4dc\ub97c \uc6d0\ud558\ub294 \ub178\ub4dc\uc5d0 \ud560\ub2f9\ud558\ub294 \ubc95"),"  "),(0,a.kt)("h1",{id:"\ubaa9\ucc28"},"\ubaa9\ucc28"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#%EC%82%AC%EB%A1%80%EC%99%80-%EC%84%A4%EB%AA%85"},"\uc0ac\ub840\uc640 \uc124\uba85")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#%EB%85%B8%EB%93%9C%EC%97%90-%ED%8C%8C%EB%93%9C-%ED%95%A0%EB%8B%B9%ED%95%98%EA%B8%B0"},"\ub178\ub4dc\uc5d0 \ud30c\ub4dc \ud560\ub2f9\ud558\uae30"),(0,a.kt)("br",null))),(0,a.kt)("h2",{id:"\uc0ac\ub840\uc640-\uc124\uba85"},"\uc0ac\ub840\uc640 \uc124\uba85"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\ucfe0\ubc84\ub124\ud2f0\uc2a4 \ud074\ub7ec\uc2a4\ud130\ub97c \uc6b4\uc601\ud558\ub294 \ub2f9\uc2e0, ML \ubaa8\ub378\uc774 \ub290\ub9ac\uac8c \ub3d9\uc791\ud558\ub294 \uac83\uc744 \ud655\uc778\ud55c\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\ud574\uacb0\uc0ac\uc778 \ub2f9\uc2e0\uc740 \uc6d0\uc778\uc744 \ucc3e\uac8c \ub418\uace0, GPU \ub178\ub4dc\uac00 \ub180\uace0 \uc788\uc74c\uc744 \ud655\uc778\ud55c\ub2e4!")),(0,a.kt)("p",null,"\ud30c\ub4dc\ub294 \uc2a4\ucf00\uc904\ub7ec\uac00 \ubc30\ud3ec \uc2dc\uc810\uc5d0 \uac00\uc7a5 \ucd5c\uc801\ud654\ub41c \ub178\ub4dc\uc5d0 \ubc30\uce58\ud55c\ub2e4.(",(0,a.kt)("em",{parentName:"p"},"\uae30\ud68c\uac00 \ub418\uba74 \ub354 \ub2e4\ub8e8\uaca0\ub2e4"),")"),(0,a.kt)("p",null,"\uc704\uc758 \uc0ac\ub840\uac00 \uc801\uc808\ud55c \uc608\uc2dc\uac00 \ub420 \uc9c0 \ubaa8\ub974\uaca0\uc9c0\ub9cc, \uc5ec\ub7ec\uac00\uc9c0 \uc774\uc720\ub85c \ud2b9\uc815\ud55c ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/ko/docs/concepts/architecture/nodes/"},"\ub178\ub4dc"),"\n\uc9d1\ud569\uc5d0\uc11c\ub9cc \ub3d9\uc791\ud558\ub3c4\ub85d ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/ko/docs/concepts/workloads/pods/"},"\ud30c\ub4dc")," \ub97c\n\uc81c\ud55c\ud574\uc57c\ud560 \ud544\uc694\uac00 \uc788\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\ub178\ub4dc \uc124\ub809\ud130"),"\ub294 \ucfe0\ubc84\ub124\ud2f0\uc2a4\uc5d0\uc11c \uad8c\uc7a5\ud558\ub294 \ub178\ub4dc \uc120\ud0dd \uc81c\uc57d \uc870\uac74\uc774\ub2e4.\n",(0,a.kt)("inlineCode",{parentName:"p"},"nodeSelector"),"\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"spec"),"\uc758 \ud544\ub4dc\ub85c\uc11c \ud0a4:\uac12\uc758 \ub9e4\ud551\uc73c\ub85c \uc9c0\uc815\ud558\uac8c \ub41c\ub2e4.  "),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"\ub178\ub4dc\uc5d0-\ud30c\ub4dc-\ud560\ub2f9\ud558\uae30"},"\ub178\ub4dc\uc5d0 \ud30c\ub4dc \ud560\ub2f9\ud558\uae30"),(0,a.kt)("p",null,"\ucfe0\ubc84\ub124\ud2f0\uc2a4 \ud074\ub7ec\uc2a4\ud130\ub97c \uc0b4\ud3b4\ubcf4\uc790"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"master@master:~$ kubectl get nodes\n\nNAME        STATUS   ROLES    AGE   VERSION\ngpu         Ready    <none>   51d   v1.16.0\nmaster      Ready    master   58d   v1.16.0\nslave       Ready    <none>   58d   v1.16.0\n")),(0,a.kt)("br",null),(0,a.kt)("p",null,"gpu\ub178\ub4dc\uc5d0 gpu \ub77c\ubca8(\ub808\uc774\ube14)\uc744 \ucd94\uac00\ud55c\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# kubectl label {node} {key=value}\nmaster@master:~$ kubectl label nodes gpu gpu=true\nnode/gpu labeled\n\n# \uc798 \ub418\uc5c8\ub098 \ud655\uc778\ud574\ubcf4\uc790\nmaster@master:~$ kubectl get nodes --show-labels\nNAME        STATUS   ROLES    AGE   VERSION   LABELS\ngpu         Ready    <none>   51d   v1.16.0   beta.kubernetes.io/arch=amd64,beta.kubernetes.io/os=linux,gpu=true,kubernetes.io/arch=amd64,kubernetes.io/hostname=gpu,kubernetes.io/os=linux\nmaster      Ready    master   58d   v1.16.0   beta.kubernetes.io/arch=amd64,beta.kubernetes.io/os=linux,kubernetes.io/arch=amd64,kubernetes.io/hostname=master,kubernetes.io/os=linux,node-role.kubernetes.io/master=\nslave       Ready    <none>   58d   v1.16.0   beta.kubernetes.io/arch=amd64,beta.kubernetes.io/os=linux,kubernetes.io/arch=amd64,kubernetes.io/hostname=slave,kubernetes.io/os=linux\n\n# \uc790\uc138\ud788 \uc0b4\ud3b4\ubcf4\uba74 \uc54c\uaca0\uc9c0\ub9cc, \ubbf8\ub9ac \uc9c0\uc815\ub41c kubernetes.io/hostname=gpu \ub77c\ubca8\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4\n")),(0,a.kt)("br",null),(0,a.kt)("p",null,"\ubc30\ud3ec \ud14c\uc2a4\ud2b8\ub97c \uc704\ud574 \uc801\ub2f9\ud55c pod \uc0dd\uc131 yaml\uc744 \ub9cc\ub4e4\uc5b4\uc8fc\uc790."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: test\nspec:\n  containers:\n  - name: test\n    image: alpine\n    imagePullPolicy: IfNotPresent\n  nodeSelector:\n    gpu: true\n")),(0,a.kt)("br",null),(0,a.kt)("p",null,"\ubc30\ud3ec\ud558\uace0 \ud655\uc778\ud574 \ubcf8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"master@master:~$ kubectl apply -f test.yaml\npod/test created\n\nmaster@master:~$ kubectl get pod -o wide\nNAME                        READY   STATUS      RESTARTS   AGE    IP            NODE        NOMINATED NODE   READINESS GATES\ntest                        0/1     Completed   2          115s   10.244.3.78   gpu         <none>           <none>\n")),(0,a.kt)("br",null),(0,a.kt)("p",null,"\uac04\ub2e8\ud55c \uc791\uc5c5\uc774\uc9c0\ub9cc kubernetes \uad6c\uc870\ub97c \uc774\ud574\ud558\ub294\ub370 \ud070 \ub3c4\uc6c0\uc774 \ub420 \uac83\uc774\ub2e4."),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"tips"},"Tips"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://jwher.github.io/2021-04-12-welcome-to-kubernetes/"},"kubernetes\uc758 \uc138\uacc4\uc5d0 \uc624\uc2e0 \uac78 \ud658\uc601\ud569\ub2c8\ub2e4"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://jwher.github.io/2021-05-28-kubernetes-usage/"},"\ucfe0\ubc84\ub124\ud2f0\uc2a4 \uc0ac\uc6a9\ud558\uae30")),(0,a.kt)("h3",{id:"reference"},"Reference"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/ko/docs/concepts/scheduling-eviction/assign-pod-node/"},"[\uacf5\uc2dd]\ub178\ub4dc\uc5d0 \ud30c\ub4dc \ud560\ub2f9\ud558\uae30")))}m.isMDXComponent=!0}}]);