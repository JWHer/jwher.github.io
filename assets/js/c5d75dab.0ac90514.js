"use strict";(self.webpackChunkjwher_blog=self.webpackChunkjwher_blog||[]).push([[3935],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>k});var l=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=l.createContext({}),u=function(e){var n=l.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return l.createElement(p.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},d=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(t),d=a,k=c["".concat(p,".").concat(d)]||c[d]||m[d]||r;return t?l.createElement(k,o(o({ref:n},s),{},{components:t})):l.createElement(k,o({ref:n},s))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<r;u++)o[u]=t[u];return l.createElement.apply(null,o)}return l.createElement.apply(null,t)}d.displayName="MDXCreateElement"},39386:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var l=t(87462),a=(t(67294),t(3905));const r={authors:["jwher"],description:"\ucfe0\ubc84\ub124\ud2f0\uc2a4 \ub204\ud074\ub9ac\uc624\uc5d0 ML \ubaa8\ub378 \ubc30\ud3ec\ud558\uae30",slug:"deploying-ml-model-on-kubernetes-nuclio",tags:["tech","kubernetes","docker","nuclio"],title:"Deploying Ml Model On Kubernetes Nuclio"},o=void 0,i={permalink:"/posts/deploying-ml-model-on-kubernetes-nuclio",editUrl:"https://github.com/jwher/jwher.github.io/tree/main/posts/2021-06-23-deploying-ml-model-on-kubernetes-nuclio/index.md",source:"@site/posts/2021-06-23-deploying-ml-model-on-kubernetes-nuclio/index.md",title:"Deploying Ml Model On Kubernetes Nuclio",description:"\ucfe0\ubc84\ub124\ud2f0\uc2a4 \ub204\ud074\ub9ac\uc624\uc5d0 ML \ubaa8\ub378 \ubc30\ud3ec\ud558\uae30",date:"2021-06-23T00:00:00.000Z",formattedDate:"June 23, 2021",tags:[{label:"tech",permalink:"/posts/tags/tech"},{label:"kubernetes",permalink:"/posts/tags/kubernetes"},{label:"docker",permalink:"/posts/tags/docker"},{label:"nuclio",permalink:"/posts/tags/nuclio"}],readingTime:11.52,hasTruncateMarker:!0,authors:[{name:"Jeongwon Her",title:"MLOps Engineer",url:"https://github.com/jwher",imageURL:"https://github.com/jwher.png",key:"jwher"}],frontMatter:{authors:["jwher"],description:"\ucfe0\ubc84\ub124\ud2f0\uc2a4 \ub204\ud074\ub9ac\uc624\uc5d0 ML \ubaa8\ub378 \ubc30\ud3ec\ud558\uae30",slug:"deploying-ml-model-on-kubernetes-nuclio",tags:["tech","kubernetes","docker","nuclio"],title:"Deploying Ml Model On Kubernetes Nuclio"},prevItem:{title:"Uuid",permalink:"/posts/uuid"},nextItem:{title:"Kubeflow Visualization 2",permalink:"/posts/kubeflow-visualization-2"}},p={authorsImageUrls:[void 0]},u=[{value:"nuctl",id:"nuctl",level:2},{value:"\uc694\uad6c\uc0ac\ud56d",id:"\uc694\uad6c\uc0ac\ud56d",level:3},{value:"\ubc14\uc774\ub108\ub9ac \uc124\uce58\ud558\uae30",id:"\ubc14\uc774\ub108\ub9ac-\uc124\uce58\ud558\uae30",level:3},{value:"\ub204\ud074\ub9ac\uc624 \uc124\uce58",id:"\ub204\ud074\ub9ac\uc624-\uc124\uce58",level:2},{value:"\uc694\uad6c\uc0ac\ud56d",id:"\uc694\uad6c\uc0ac\ud56d-1",level:3},{value:"\ub204\ud074\ub9ac\uc624 \uc124\uce58\ud558\uae30",id:"\ub204\ud074\ub9ac\uc624-\uc124\uce58\ud558\uae30",level:3},{value:"\ubaa8\ub378 \ubc30\ud3ec\ud558\uae30",id:"\ubaa8\ub378-\ubc30\ud3ec\ud558\uae30",level:2},{value:"Tips",id:"tips",level:2},{value:"Reference",id:"reference",level:3}],s={toc:u},c="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,l.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/nuclio-superman.png",alt:"Alt",title:"nuclio superman"}),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("em",{parentName:"p"},"\ucfe0\ubc84\ub124\ud2f0\uc2a4 \ub204\ud074\ub9ac\uc624\uc5d0 ML \ubaa8\ub378 \ubc30\ud3ec\ud558\uae30"),"  "),(0,a.kt)("h1",{id:"\ubaa9\ucc28"},"\ubaa9\ucc28"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#nuctl"},"nuctl")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#%EB%88%84%ED%81%B4%EB%A6%AC%EC%98%A4-%EC%84%A4%EC%B9%98"},"\ub204\ud074\ub9ac\uc624 \uc124\uce58")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#%EB%AA%A8%EB%8D%B8-%EB%B0%B0%ED%8F%AC%ED%95%98%EA%B8%B0"},"\ubaa8\ub378 \ubc30\ud3ec\ud558\uae30"))),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"nuctl"},"nuctl"),(0,a.kt)("p",null,"\ub204\ud074\ub9ac\uc624\ub97c \ucc98\uc74c \ub4e4\uc5b4\ubcf4\uc2e0\ub2e4\uba74 ",(0,a.kt)("a",{parentName:"p",href:"https://jwher.github.io/2021-06-02-nuclio/"},"\uc774 \uae00"),"\n\uc744 \uba3c\uc800 \uc77d\ub294\uac78 \ucd94\ucc9c\ub4dc\ub9bd\ub2c8\ub2e4.\n\ubcf8 \uae00\uc740 \ucfe0\ubc84\ub124\ud2f0\uc2a4 \uc704\uc5d0\uc11c \ub204\ud074\ub9ac\uc624\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc95\uc744 \ub2e4\ub8f9\ub2c8\ub2e4.\n(\ub3c4\ucee4\ub3c4 \ubcc4\ubc18 \ub2e4\ub974\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4)"),(0,a.kt)("p",null,"nuclio control, nuctl\uc740 \ub204\ud074\ub9ac\uc624 \ucee4\ub9e8\ub4dc \ub77c\uc778 \uc778\ud130\ud398\uc774\uc2a4\ub85c \ub204\ud074\ub9ac\uc624 \uae30\ub2a5\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\uac8c \ud574\uc90d\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"\uc694\uad6c\uc0ac\ud56d"},"\uc694\uad6c\uc0ac\ud56d"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"kubernetes cluster"),(0,a.kt)("li",{parentName:"ul"},"(\ub610\ub294) ",(0,a.kt)("a",{parentName:"li",href:"https://jwher.github.io/2021-04-13-install-docker/"},"docker"))),(0,a.kt)("h3",{id:"\ubc14\uc774\ub108\ub9ac-\uc124\uce58\ud558\uae30"},"\ubc14\uc774\ub108\ub9ac \uc124\uce58\ud558\uae30"),(0,a.kt)("p",null,"\ub204\ud074\ub9ac\uc624 \ucd5c\uc2e0 release \ubc84\uc804\uc740 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nuclio/nuclio/releases"},"https://github.com/nuclio/nuclio/releases"),"\n\uc5d0\uc11c \uc81c\uacf5\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"CLI\ub97c \ud1b5\ud574 \ub2e4\uc6b4\ubc1b\ub294 \ubc95\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4.  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'# 21.06.25 \ucd5c\uc2e0 \ubc84\uc804\n$ wget https://github.com/nuclio/nuclio/releases/download/1.6.11/nuctl-1.6.11-linux-amd64\n$ chmod +x nuctl-1.6.11-linux-amd64\n\n# \ub610\ub294 \ub2e4\uc74c \uba85\ub839\uc5b4\ub85c \ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4\n$ curl -s https://api.github.com/repos/nuclio/nuclio/releases/latest \\\n            | grep -i "browser_download_url.*nuctl.*$(uname)" \\\n            | cut -d : -f 2,3 \\\n            | tr -d \\" \\\n            | wget -O nuctl -qi - && chmod +x nuctl\n')),(0,a.kt)("p",null,"\uc5b4\ub514\uc5d0\uc11c\ub098 \uc0ac\uc6a9\ud560 \uc218 \uc788\uac8c \ud658\uacbd\ubcc0\uc218\ub97c \ub4f1\ub85d\ud558\uac70\ub098, /bin \ud3f4\ub354\uc5d0 \ub9c1\ud06c\ub97c \ub9cc\ub4e4\uc5b4 \uc90d\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ export $PATH=$PATH:$PWD/nuctl-1.6.11-linux-amd64\n\n# \ub610\ub294\n$ ln -s {full/path/to/origin} /bin/{origin}\n")),(0,a.kt)("p",null,"\ud655\uc778\ud574 \ubd05\uc2dc\ub2e4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ ./nuctl-1.6.11-linux-amd64\nNuclio command-line interface\n\nUsage:\n  nuctl [command]\n\nAvailable Commands:\n  build       Build a function\n  create      Create resources\n  delete      Delete resources\n  deploy      Build and deploy a function, or deploy from an existing image\n  export      Export functions or projects\n  get         Display resource information\n  help        Help about any command\n  import      Import functions or projects\n  invoke      Invoke a function\n  update      Update resources\n  version     Display the version number of the nuctl CLI\n\nFlags:\n  -h, --help                help for nuctl\n  -k, --kubeconfig string   Path to a Kubernetes configuration file (admin.conf)\n  -n, --namespace string    Namespace\n      --platform string     Platform identifier - "kube", "local", or "auto" (default "auto")\n  -v, --verbose             Verbose output\n\nUse "nuctl [command] --help" for more information about a command.\n')),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"\ub204\ud074\ub9ac\uc624-\uc124\uce58"},"\ub204\ud074\ub9ac\uc624 \uc124\uce58"),(0,a.kt)("p",null,"\ucfe0\ubc84\ub124\ud2f0\uc2a4 \uc704\uc5d0 \ub204\ud074\ub9ac\uc624\ub97c \uc124\uce58\ud558\ub294 \ubc95\uc744 \ub2e4\ub8f9\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"\uc694\uad6c\uc0ac\ud56d-1"},"\uc694\uad6c\uc0ac\ud56d"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ucfe0\ubc84\ub124\ud2f0\uc2a4 v1.7 \uc774\uc0c1 \ud074\ub7ec\uc2a4\ud130"),(0,a.kt)("li",{parentName:"ul"},"\ub3c4\ucee4 \ub808\uc9c0\uc2a4\ud2b8\ub9ac\uc5d0 \ub300\ud55c \uc790\uaca9\uc99d\uba85(credentials)"),(0,a.kt)("li",{parentName:"ul"},"Nuclio CLI")),(0,a.kt)("h3",{id:"\ub204\ud074\ub9ac\uc624-\uc124\uce58\ud558\uae30"},"\ub204\ud074\ub9ac\uc624 \uc124\uce58\ud558\uae30"),(0,a.kt)("p",null,"\ucfe0\ubc84\ub124\ud2f0\uc2a4 CLI",(0,a.kt)("a",{parentName:"p",href:"https://jwher.github.io/2021-05-28-kubernetes-usage/"},"(kubectl)")," \uc744 \uc0ac\uc6a9\ud558\uc5ec \uc124\uce58\ud569\ub2c8\ub2e4.\n\ucfe0\ubc84\ub124\ud2f0\uc2a4 \ucee8\ud2b8\ub864\uc774 \uc5c6\uc73c\uc2dc\uac70\ub098 \uc0ac\uc6a9\ubc95\uc774 \uc775\uc219\ud558\uc9c0 \uc54a\uc73c\uc2e0 \ubd84\uc740 ",(0,a.kt)("a",{parentName:"p",href:"https://jwher.github.io/2021-05-28-kubernetes-usage/"},"\ub9c1\ud06c"),"\ub97c \ucc38\uace0\ud574 \uc8fc\uc138\uc694.\n\ub3c4\ucee4 \uc704\uc5d0\uc11c \ub204\ud074\ub9ac\uc624\ub97c \uc0ac\uc6a9\ud558\uc2e4 \ubd84\uc740 ",(0,a.kt)("a",{parentName:"p",href:"https://jwher.github.io/2021-04-13-install-docker/"},"docker \uc124\uce58"),"\uc640\n",(0,a.kt)("a",{parentName:"p",href:"https://nuclio.io/docs/latest/setup/docker/getting-started-docker/"},"[\uacf5\uc2dd]Getting Started with Nuclio on Docker"),"\n\ub97c \ucc38\uace0\ud574 \uc8fc\uc138\uc694."),(0,a.kt)("p",null,"1. \ub204\ud074\ub9ac\uc624 \ub124\uc784\uc2a4\ud398\uc774\uc2a4\ub97c \uc0dd\uc131\ud574 \uc90d\ub2c8\ub2e4."),(0,a.kt)("p",null,'\ubaa8\ub4e0 \ub9ac\uc18c\uc2a4\ub294 "nuclio" \ub124\uc784\uc2a4\ud398\uc774\uc2a4\uc5d0 \uc0dd\uc131\ub429\ub2c8\ub2e4.\nRBAC \ub610\ud55c \ub124\uc784\uc2a4\ud398\uc774\uc2a4\uc5d0 \ub530\ub77c \uc0dd\uc131\ub418\ub2c8 \uc815\ud655\ud55c \ub124\uc784\uc2a4\ud398\uc774\uc2a4\ub97c \uc0ac\uc6a9\ud558\ub294\uac78 \ucd94\ucc9c\ud569\ub2c8\ub2e4.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl create namespace nuclio\n")),(0,a.kt)("br",null),(0,a.kt)("p",null,"2. \ub808\uc9c0\uc2a4\ud2b8\ub9ac \uc2dc\ud06c\ub9bf\uc744 \ub9cc\ub4e4\uc5b4 \uc90d\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ud504\ub77c\uc774\ube57 \ub808\uc9c0\uc2a4\ud2b8\ub9ac\uac00 \uc5c6\uc73c\uc2e0 \ubd84\uc740 \ub3c4\ucee4 \ud5c8\ube0c \ub808\uc9c0\uc2a4\ud2b8\ub9ac\ub97c \uc0ac\uc6a9\ud558\uc2dc\uba74 \ub429\ub2c8\ub2e4.\n\ub3c4\ucee4 \ud5c8\ube0c\uc758 \ub808\uc9c0\uc2a4\ud2b8\ub9ac\ub294 registry.hub.docker.com \ub610\ub294 docker.io \uc785\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ read -s mypassword\n<enter your password>\n\n$ kubectl create secret docker-registry registry-credentials \\\n    --namespace nuclio \\\n    --docker-username <username> \\\n    --docker-password $mypassword \\\n    --docker-server <URL> \\\n    --docker-email ignored@nuclio.io\n\n$ unset mypassword\n")),(0,a.kt)("br",null),(0,a.kt)("p",null,"3. RBAC \ub864\uc744 \uc0dd\uc131\ud574 \uc90d\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ub2e4\uc74c \uba85\ub839\uc5b4\ub97c \uc218\ud589\ud558\uae30 \uc804\uc5d0 \ud574\ub2f9 ",(0,a.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/nuclio/nuclio/master/hack/k8s/resources/nuclio-rbac.yaml"},"\ud30c\uc77c \ub0b4\uc6a9")," \uc744 \uaf2d \ud655\uc778\ud569\uc2dc\ub2e4.\n\ub9f9\ubaa9\uc801\uc73c\ub85c \uba85\ub839\uc5b4\ub97c \uc2e4\ud589\ud558\uc9c0 \uc54a\ub294 \uc2b5\uad00(\ub728\ub054\ud83d\ude33)\uc744 \ub4e4\uc774\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl apply -f https://raw.githubusercontent.com/nuclio/nuclio/master/hack/k8s/resources/nuclio-rbac.yaml\n")),(0,a.kt)("br",null),(0,a.kt)("p",null,"4. \ub204\ud074\ub9ac\uc624\ub97c \ucfe0\ubc84\ub124\ud2f0\uc2a4 \ud074\ub7ec\uc2a4\ud130\uc5d0 \ubc30\ud3ec\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl apply -f https://raw.githubusercontent.com/nuclio/nuclio/master/hack/k8s/resources/nuclio.yaml\n\n# \ubc30\ud3ec \ud6c4 \ud655\uc778\ud574 \ubd05\uc2dc\ub2e4\n$ kubectl get pods --namespace nuclio\nNAME                                           READY   STATUS             RESTARTS   AGE\nnuclio-controller-56b4f69b49-2gbpk             1/1     Running            0          3d23h\nnuclio-dashboard-584689f894-mg8qq              1/1     Running            0          3d23h\n")),(0,a.kt)("br",null),(0,a.kt)("p",null,"5. \ub204\ud074\ub9ac\uc624 \ub300\uc26c\ubcf4\ub4dc \ud3ec\ud2b8\ub97c \ud3ec\uc6cc\ub529 \ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl port-forward -n nuclio $(kubectl get pods -n nuclio -l nuclio.io/app=dashboard -o jsonpath='{.items[0].metadata.name}') 8070:8070\n\n# \uba85\ub839\uc5b4\uac00 \uae38\uace0 \ubcf5\uc7a1\ud569\ub2c8\ub2e4\n# \ucfe0\ubc84\ub124\ud2f0\uc2a4\ub97c \uc798 \uc774\ud574\ud558\uc168\uac70\ub098 kubectl \uae00\uc744 \uc77d\uc5b4\ubcf4\uc168\ub2e4\uba74 \uac04\ub2e8\ud558\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4\n$ kubectl port-forward svc/nuclio-dashboard -n nuclio 8070:8070 --address=0.0.0.0\n")),(0,a.kt)("br",null),(0,a.kt)("p",null,"\uc774\uc81c \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \ub204\ud074\ub9ac\uc624 \ub300\uc26c\ubcf4\ub4dc\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4!",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/nuclio-dashboard.png",alt:"Alt",title:"nuclio dashboard"})),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"\ubaa8\ub378-\ubc30\ud3ec\ud558\uae30"},"\ubaa8\ub378 \ubc30\ud3ec\ud558\uae30"),(0,a.kt)("p",null,"\uc790! \ub4dc\ub514\uc5b4 ML \ubaa8\ub378 \ubc30\ud3ec\uc785\ub2c8\ub2e4.\n",(0,a.kt)("a",{parentName:"p",href:"https://jwher.github.io/2021-06-02-nuclio/"},"\ub204\ud074\ub9ac\uc624 \uad6c\uc870"),"\ub97c \uc774\ud574\ud558\uace0 \ubc30\ud3ec\ud574\uc57c \uac01\uc885 \uc624\ub958 \uc6d0\uc778\uc744 \uc774\ud574\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uaf2d \uba3c\uc800 \uc77d\uc5b4\ubcf4\uc2dc\ub294\uac78 \uad8c\uc7a5\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc800\ub294 function \uc791\uc131\uacfc \ub3c4\ucee4\ud30c\uc77c\uc744 \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc744 \ud63c\ud569\ud574 \ubc30\ud3ec\ud558\uc600\uc2b5\ub2c8\ub2e4.\n\uc0ac\uc6a9\ud55c \ubaa8\ub378\uc740 ",(0,a.kt)("a",{parentName:"p",href:"https://jwher.github.io/2021-05-24-alphapose/"},"Alphapose")," \ub85c keypoint detection \ubaa8\ub378\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ub204\ud074\ub9ac\uc624\ub97c \uc131\uacf5\uc801\uc73c\ub85c \uc124\uce58\ud558\uc168\ub2e4\uba74 function\uc744 \uc791\uc131\ud574 \ud074\ub7ec\uc2a4\ud130\uc5d0 \ubc30\ud3ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uc9c0\uc6d0\ub418\ub294 \ub7f0\ud0c0\uc784(Go, Python, NodeJS)\uc740 \ub450 \uc778\uc790\ub97c \ubc1b\ub294 \uc5d4\ud2b8\ub9ac \ud3ec\uc778\ud2b8\ub97c \uac00\uc9d1\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Context: \ud568\uc218 \ud638\ucd9c\uc2dc \uc0c1\ud0dc\ub97c \uad00\ub9ac\ud558\ub294 \uac1d\uccb4\uc785\ub2c8\ub2e4. \ub85c\uac70, \ub370\uc774\ud130 \ubc14\uc778\ub529, \uc720\uc800 \uc815\uc758 \ub370\uc774\ud130\uac00 \ud3ec\ud568\ub429\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"Event: \ud568\uc218\ub97c \ud2b8\ub9ac\uac70\ud55c \uc774\ubca4\ud2b8 \uc815\ubcf4\ub97c \ud3ec\ud568\ud55c \uac1d\uccb4\uc785\ub2c8\ub2e4. body, headers, trigger information\uc744 \ud3ec\ud568\ud569\ub2c8\ub2e4.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/nervous.png",alt:"Alt",title:"nervous"}),(0,a.kt)("br",{parentName:"p"}),"\n","\uae34\uc7a5\ud558\uace0 \ucd9c\ubc1c\ud569\uc2dc\ub2e4!")),(0,a.kt)("p",null,"1. \ud30c\uc774\uc36c \ucf54\ub4dc \uc791\uc131"),(0,a.kt)("p",null,"ML \ubaa8\ub378\uc774 \ud30c\uc774\uc36c\uc73c\ub85c \uc791\uc131\ub418\uc5c8\uace0 \ub2a5\uc219\ud55c \uc5b8\uc5b4\uc774\uae30\uc5d0 \ud30c\uc774\uc36c\uc744 \uc0ac\uc6a9\ud558\uaca0\uc2b5\ub2c8\ub2e4.\nModelHandler \ud074\ub798\uc2a4\uc640 handle \ud568\uc218\uac00 \uc815\uc758\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4 (\uc774\ub984\uc740 \ub2ec\ub77c\ub3c4 \ub429\ub2c8\ub2e4)  "),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\ub2f9\uc5f0\ud788 \ubaa8\ub378\ub9c8\ub2e4 \uad6c\ud604\uc774 \ub2e4\ub985\ub2c8\ub2e4 Alphapose \ucf54\ub4dc\uac00 \ud544\uc694\ud558\uc2dc\uba74 github\uc5d0 \uacf5\uac1c\ud558\uaca0\uc2b5\ub2c8\ub2e4")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"model_handler.py"),(0,a.kt)("div",{markdown:"1"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class ModelHandler:\n    def __init__(self):\n        args = argparse.Namespace(...)\n        cfg = update_config(args.cfg)\n        \n        # Load pose model\n\n        ... \uc911\ub7b5 ...\n\n    def handle(self, im_name, image):\n        runtime_profile = {\n            'dt': [],\n            'pt': [],\n            'pn': []\n        }\n        pose = None\n        try:\n            start_time = getTime()\n            with torch.no_grad():\n                (inps, orig_img, im_name, boxes, scores, ids, cropped_boxes) = self.det_loader.process(im_name, image).read()\n                \n                ... \uc911\ub7b5 ...\n\n            if self.args.profile:\n                print(\n                    'det time: {dt:.4f} | pose time: {pt:.4f} | post processing: {pn:.4f}'.format(\n                        dt=np.mean(runtime_profile['dt']), pt=np.mean(runtime_profile['pt']), pn=np.mean(runtime_profile['pn']))\n                )\n            print('===========================> Finish Model Running.')\n        except Exception as e:\n            exc_type, exc_obj, exc_tb = sys.exc_info()\n            print(repr(e), f'line: {exc_tb.tb_lineno}')\n            print('An error as above occurs when processing the images, please check it')\n            pass\n        except KeyboardInterrupt:\n            print('===========================> Finish Model Running.')\n\n        if pose is None:\n            return ['error']\n\n        return write_json([pose])\n")))),(0,a.kt)("p",null,"init_context() \ud568\uc218\uc5d0\ub294 \uc0c1\ud0dc\ub97c \uc720\uc9c0\ud560(\ube44\uc6a9\uc774 \ube44\uc2fc) \uac1d\uccb4\ub97c \uc0dd\uc131\ud574 \uc90d\ub2c8\ub2e4.\n\uc800\ub294 ML \ubaa8\ub378 \uac1d\uccb4\ub97c \uc0dd\uc131\ud574 \uc8fc\uc5c8\uc2b5\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\uc5d4\ud2b8\ub9ac \ud3ec\uc778\ud2b8\ub85c \uc0ac\uc6a9\ud560 handler()\ud568\uc218\ub97c \uc815\uc758\ud574 \uc90d\ub2c8\ub2e4. (\uc774\ub984\uc740 \ub2ec\ub77c\ub3c4 \ub429\ub2c8\ub2e4)\n\uc55e\uc11c \uc5b8\uae09\ud55c \uac83\ucc98\ub7fc context\uc640 event\ub97c \uc778\uc790\ub85c \ubc1b\uc2b5\ub2c8\ub2e4."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"main.py"),(0,a.kt)("div",{markdown:"1"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import json\nimport base64\nimport numpy as np\n\nfrom PIL import Image\nimport io\nfrom model_handler import ModelHandler\n\ndef init_context(context):\n    context.logger.info("Init context...  0%")\n\n    # Read the DL model\n    model = ModelHandler()\n    setattr(context.user_data, \'model\', model)\n\n    context.logger.info("Init context...100%")\n\ndef handler(context, event):\n    context.logger.info("Run alphapose model")\n    data = event.body\n\n    imagename = \'name\' # data["imagename"]\n    buf = io.BytesIO(base64.b64decode(data["image"].encode(\'utf-8\')))\n    # threshold = float(data.get("threshold", 0.5))\n    image = Image.open(buf)\n\n    # PIL to CV2\n    cvimg = np.array(image)\n    cvimg = cvimg[:,:,::-1].copy()\n\n    results = context.user_data.model.handle(imagename, cvimg)\n\n    return context.Response(body=json.dumps(results), headers={},\n        content_type=\'application/json\', status_code=200)\n')))),(0,a.kt)("br",null),(0,a.kt)("p",null,"2. function.yml \uc791\uc131"),(0,a.kt)("p",null,"\ub204\ud074\ub9ac\uc624 \ubc30\ud3ec \uc124\uc815\uc744 \ub2f4\uc740 yaml \ud30c\uc77c\uc744 \uc791\uc131\ud574 \uc90d\ub2c8\ub2e4.\n\uc800\ub294 Alphapose\uac00 \ub3d9\uc791\ud560 \uc218 \uc788\ub294 \ud658\uacbd\uc744 docker image\ub85c \ubbf8\ub9ac \uad6c\uc131\ud574 \uc0ac\uc6a9\ud588\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"yaml \ud30c\uc77c\ub3c4 \ub2f9\uc5f0\ud788 \ub0b4\uc6a9\uc774 \ub2e4\ub985\ub2c8\ub2e4 \ubb38\ubc95\ub9cc \ucc38\uace0\ud574 \uc8fc\uc138\uc694")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"function.yaml"),(0,a.kt)("div",{markdown:"1"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'metadata:\n  name: alphapose\n  namespace: cvat       # \ub204\ud074\ub9ac\uc624 \ub300\uc26c\ubcf4\ub4dc\uc758 \ud504\ub85c\uc81d\ud2b8 \uc774\ub984\uc785\ub2c8\ub2e4\n  annotations:\n    name: ALPHAPOSE\n    type: detector\n    framework: custom\n    spec: |\n      [\n        {"id": 1, "name": "nose"},\n        {"id": 2, "name": "left_eye"},\n        {"id": 3, "name": "right_eye"},\n        {"id": 4, "name": "left_ear"},\n        {"id": 5, "name": "right_ear"},\n        {"id": 6, "name": "left_shoulder"},\n        {"id": 7, "name": "right_shoulder"},\n        {"id": 8, "name": "left_elbow"},\n        {"id": 9, "name": "right_elbow"},\n        {"id": 10, "name": "left_wrist"},\n        {"id": 11, "name": "right_wrist"},\n        {"id": 12, "name": "left_hip"},\n        {"id": 13, "name": "right_hip"},\n        {"id": 14, "name": "left_knee"},\n        {"id": 15, "name": "right_knee"},\n        {"id": 16, "name": "left_ankle"},\n    {"id": 17, "name": "right_ankle"}\n      ]\n\nspec:\n  description: Keypoint detection\n  runtime: \'python:3.6\'\n  handler: main:handler\n  eventTimeout: 30s\n  env:\n    - name: NUCLIO_PYTHON_EXE_PATH\n      value: /root/miniconda3/envs/alphapose/bin/python\n\n  build:\n    image: jwher/alphapose:nuclio\n    baseImage: jwher/alphapose:v1\n\n    directives:\n      preCopy:\n        - kind: USER\n          value: root\n        - kind: WORKDIR\n          value: /Alphapose\n\n      postCopy:\n        - kind: RUN\n          value: echo "works well"\n\n\n  nodeSelector:\n    gpu: "true"\n\n  triggers:\n    myHttpTrigger:\n      maxWorkers: 2\n      kind: \'http\'\n      workerAvailabilityTimeoutMilliseconds: 10000\n      attributes:\n        maxRequestBodySize: 33554432 # 32MB\n\n  platform:\n    attributes:\n      restartPolicy:\n        name: always\n        maximumRetryCount: 3\n      mountMode: volume\n')))),(0,a.kt)("br",null),(0,a.kt)("p",null,"3. \ubc30\ud3ec\ud558\uae30"),(0,a.kt)("p",null,"\uc55e\uc11c \uc791\uc131\ud55c main.py, model_handler.py, function.yml\uc744 \uac19\uc740 \ub514\ub809\ud1a0\ub9ac\uc5d0 \uc704\uce58\uc2dc\ud0b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ nuctl deploy --project-name cvat -n nuclio --path . --platform kube -r docker.io --http-trigger-service-type NodePort\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"nuctl -h"),"\ub97c \ud1b5\ud574 \ud50c\ub798\uadf8 \uc815\ubcf4\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","\uc0ac\uc6a9\ud55c \ud50c\ub798\uadf8\uc758 \uc758\ubbf8\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--project-name")," : \ud504\ub85c\uc81d\ud2b8 \uc774\ub984, \ub204\ud074\ub9ac\uc624 \ub300\uc26c\ubcf4\ub4dc\uc5d0\uc11c \ud655\uc778 \uac00\ub2a5\ud55c \uc774\ub984\uc785\ub2c8\ub2e4"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-n"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"--namespace")," : \ucfe0\ubc84\ub124\ud2f0\uc2a4 \ub124\uc784\uc2a4\ud398\uc774\uc2a4, nuclio \uace0\uc815\uc785\ub2c8\ub2e4"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-p"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"--path")," : function.yml \ud30c\uc77c\uc774 \uc704\uce58\ud55c \ub514\ub809\ud1a0\ub9ac"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--platform")," : \uc0ac\uc6a9\ud558\ub294 \ud50c\ub7ab\ud3fc\uc785\ub2c8\ub2e4. local: \ub3c4\ucee4 kube: \ucfe0\ubc84\ub124\ud2f0\uc2a4"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-r")," ",(0,a.kt)("inlineCode",{parentName:"li"},"--registry")," : \ub3c4\ucee4 \uc774\ubbf8\uc9c0 \ub808\ud3ec\uc9c0\ud1a0\ub9ac\uc785\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--http-trigger-service-type")," : \ucfe0\ubc84\ub124\ud2f0\uc2a4\uc5d0\uc11c serviceType\uc744 \uc815\ud574\uc90d\ub2c8\ub2e4.\nNodePort\ub97c \uc0ac\uc6a9\ud574 \ud074\ub7ec\uc2a4\ud130 \uc678\ubd80\uc5d0\uc11c\ub3c4 \uc811\uc18d \uac00\ub2a5\ud558\uac8c \uc124\uc815\ud588\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("p",null,"\ubc30\ud3ec\uac00 \uc798 \ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud574 \ubd05\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get pods --namespace nuclio\nNAME                                           READY   STATUS             RESTARTS   AGE\nnuclio-alphapose-78d76bd9b7-px7f4              1/1     Running            0          3d23h\nnuclio-controller-56b4f69b49-2gbpk             1/1     Running            0          3d23h\nnuclio-dashboard-584689f894-mg8qq              1/1     Running            0          3d23h\n")),(0,a.kt)("p",null,"\ub300\uc26c\ubcf4\ub4dc UI\uc5d0\uc11c\ub3c4 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4!",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/nuclio-alphapose.png",alt:"Alt",title:"nuclio alphapose"})),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"tips"},"Tips"),(0,a.kt)("p",null,"\uc624\ub298\uc740 \ub9e5\uc8fc\ud55c\uc794 \ud574\uc57c\uaca0\ub124\uc694 \ud83d\ude0a"),(0,a.kt)("h3",{id:"reference"},"Reference"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://nuclio.io/docs/latest/setup/k8s/getting-started-k8s/"},"[\uacf5\uc2dd]Getting Started with Nuclio on Kubernetes"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://nuclio.io/docs/latest/reference/nuctl/nuctl/"},"[\uacf5\uc2dd]The Nuclio CLI"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://nuclio.io/docs/latest/tasks/deploying-functions/"},"[\uacf5\uc2dd]Deploying Functions"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://nuclio.io/docs/latest/tasks/deploy-functions-from-dockerfile/"},"[\uacf5\uc2dd]Deploying Functions from a Dockerfile")))}m.isMDXComponent=!0}}]);