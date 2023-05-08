"use strict";(self.webpackChunkjwher_blog=self.webpackChunkjwher_blog||[]).push([[9687],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(t),m=r,f=c["".concat(p,".").concat(m)]||c[m]||k[m]||i;return t?a.createElement(f,o(o({ref:n},u),{},{components:t})):a.createElement(f,o({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},41908:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const i={authors:["jwher"],description:"Kubeflow \uc2dc\uac01\ud654 \uac1c\ubc1c 2\ud3b8",slug:"kubeflow-visualization-2",tags:["dev","kubeflow","kubernetes"],title:"Kubeflow Visualization 2"},o=void 0,l={permalink:"/posts/kubeflow-visualization-2",editUrl:"https://github.com/jwher/jwher.github.io/posts/2021-06-21-kubeflow-visualization-2/index.md",source:"@site/posts/2021-06-21-kubeflow-visualization-2/index.md",title:"Kubeflow Visualization 2",description:"Kubeflow \uc2dc\uac01\ud654 \uac1c\ubc1c 2\ud3b8",date:"2021-06-21T00:00:00.000Z",formattedDate:"June 21, 2021",tags:[{label:"dev",permalink:"/posts/tags/dev"},{label:"kubeflow",permalink:"/posts/tags/kubeflow"},{label:"kubernetes",permalink:"/posts/tags/kubernetes"}],readingTime:7.35,hasTruncateMarker:!0,authors:[{name:"Jeongwon Her",title:"MLOps Engineer",url:"https://github.com/jwher",imageURL:"https://github.com/jwher.png",key:"jwher"}],frontMatter:{authors:["jwher"],description:"Kubeflow \uc2dc\uac01\ud654 \uac1c\ubc1c 2\ud3b8",slug:"kubeflow-visualization-2",tags:["dev","kubeflow","kubernetes"],title:"Kubeflow Visualization 2"},prevItem:{title:"Linux Disk Free",permalink:"/posts/linux-disk-free"},nextItem:{title:"Welcome To Docker",permalink:"/posts/welcome-to-docker"}},p={authorsImageUrls:[void 0]},s=[{value:"\uc774\uc804 \uc774\uc57c\uae30",id:"\uc774\uc804-\uc774\uc57c\uae30",level:2},{value:"\uc2dc\uac01\ud654 \ub300\uc0c1 \uc120\uc815",id:"\uc2dc\uac01\ud654-\ub300\uc0c1-\uc120\uc815",level:2},{value:"\uc2a4\ud1a0\ub9ac\uc9c0 \uc120\uc815",id:"\uc2a4\ud1a0\ub9ac\uc9c0-\uc120\uc815",level:2},{value:"Message Queue \uc120\uc815",id:"message-queue-\uc120\uc815",level:2},{value:"kafka \ubc30\ud3ec",id:"kafka-\ubc30\ud3ec",level:3},{value:"notification config",id:"notification-config",level:3},{value:"minio python \ub77c\uc774\ube0c\ub7ec\ub9ac",id:"minio-python-\ub77c\uc774\ube0c\ub7ec\ub9ac",level:3},{value:"Tips",id:"tips",level:2},{value:"Reference",id:"reference",level:3}],u={toc:s},c="wrapper";function k(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/engineering.jpg",alt:"Alt",title:"engineering"}),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("em",{parentName:"p"},"Event Driven Architecture \uad6c\ud604"),"  "),(0,r.kt)("h1",{id:"\ubaa9\ucc28"},"\ubaa9\ucc28"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%EC%9D%B4%EC%A0%84-%EC%9D%B4%EC%95%BC%EA%B8%B0"},"\uc774\uc804 \uc774\uc57c\uae30")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%EC%8B%9C%EA%B0%81%ED%99%94-%EB%8C%80%EC%83%81-%EC%84%A0%EC%A0%95"},"\uc2dc\uac01\ud654 \ub300\uc0c1 \uc120\uc815")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%EC%8A%A4%ED%86%A0%EB%A6%AC%EC%A7%80-%EC%84%A0%EC%A0%95"},"\uc2a4\ud1a0\ub9ac\uc9c0 \uc120\uc815")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Message-Queue-%EC%84%A0%EC%A0%95"},"Message Queue \uc120\uc815"))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\uc774\uc804-\uc774\uc57c\uae30"},"\uc774\uc804 \uc774\uc57c\uae30"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://jwher.github.io/2021-06-08-kubeflow-visualization-1/"},"\uc774\uc804\uae00"),(0,r.kt)("br",{parentName:"p"}),"\n","\uc800\ub294 MLOps\ub97c \uc704\ud574 kubeflow\ub97c \ub3c4\uc785\ud574 \uc0ac\uc6a9\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.\n\uc6b4\uc601\uc790\uac00 \ud544\uc694 \uc5c6\ub3c4\ub85d CI/CD\uc758 \ubc84\ud2bc \uc218\uc900\uc758 \uc790\ub3d9\ud654\ub97c \uad6c\ud604\ud558\ub824\uace0 \ud558\ub294\ub370\uc694,\n\uc911\uac04 \ud30c\uc774\ud504\ub77c\uc778\uc758 \uc9c4\ud589 \uc0c1\ud669\uc744 \uba85\ud655\ud558\uac8c \uad00\ucc30\ud560 \uc218 \uc788\ub3c4\ub85d\n\uc9c4\ud589 \uc0c1\ud669 ",(0,r.kt)("strong",{parentName:"p"},"\uc2e4\uc2dc\uac04 \uc2dc\uac01\ud654"),"\ub97c \uac1c\ubc1c\ud558\ub824\uace0 \ud569\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"\uc2dc\uac01\ud654-\ub300\uc0c1-\uc120\uc815"},"\uc2dc\uac01\ud654 \ub300\uc0c1 \uc120\uc815"),(0,r.kt)("p",null,"\uc5b4\ub5a4 \ub0b4\uc6a9\uc744 \uc2e4\uc2dc\uac04\uc73c\ub85c \ubcf4\uc5ec\uc904 \uc9c0 \uc815\ud574\uc57c\uaca0\uc8e0? ",(0,r.kt)("del",{parentName:"p"},"\uc0ac\uc2e4 \uc124\uacc4\ub2e8\uacc4\uc5d0\uc11c \ud574\uc57c\ud569\ub2c8\ub2e4"),"  "),(0,r.kt)("p",null,"\uae30\uc874 visualization artifact\ub294\nconfusion matrix(csv),\nMarkdown(inline, file, url),\nROC(csv),\nTable(csv),\nTensorboard(file?),\nWeb app(static html)\uc744 \uc9c0\uc6d0\ud588\uc2b5\ub2c8\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://v1-2-branch.kubeflow.org/docs/components/pipelines/sdk/output-viewer/"},"[\uacf5\uc2dd]Visualize Results in the Pipelines UI")),(0,r.kt)("p",null,"\uc800\ub294 \uae30\uc874 \uae30\ub2a5\uacfc \ud638\ud658\uc744 \uc704\ud574 csv, html \ud615\uc2dd\uc744 \uc9c0\uc6d0\ud558\uace0\n\ucd94\uac00\uc801\uc73c\ub85c \ud14d\uc2a4\ud2b8, \uc774\ubbf8\uc9c0, \uc9c4\ud589\uc0c1\ud669(\ud14d\uc2a4\ud2b8), \uc0ac\uc6a9\uc790 \ucf54\ub4dc \uc2e4\ud589\uc744 \uc9c0\uc6d0\ud558\ub824\uace0 \ud569\ub2c8\ub2e4. "),(0,r.kt)("h2",{id:"\uc2a4\ud1a0\ub9ac\uc9c0-\uc120\uc815"},"\uc2a4\ud1a0\ub9ac\uc9c0 \uc120\uc815"),(0,r.kt)("p",null,"\ud30c\uc774\ud504\ub77c\uc778 \ub2e8\uacc4\uc5d0\uc11c \uc0dd\uc131\ub418\ub294 \ud30c\uc77c\uc744 \uc800\uc7a5\ud560 \uacf5\uac04\uc774 \ud544\uc694\ud569\ub2c8\ub2e4.\n\uae30\uc874 visualization artifact\ub294 ",(0,r.kt)("a",{parentName:"p",href:"https://jwher.github.io/2021-06-16-minio/"},"minIO")," \uc758 mlpipeline \ubc84\ud0b7\uc5d0 \uc800\uc7a5\ub42c\ub294\ub370\uc694,\n\ub9c8\ucc2c\uac00\uc9c0\ub85c \uac19\uc740 \uc2a4\ud1a0\ub9ac\uc9c0\ub97c \uc0ac\uc6a9\ud574 \ud638\ud658\uc131\uc744 \ub192\uc774\ub824\uace0 \ud569\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"message-queue-\uc120\uc815"},"Message Queue \uc120\uc815"),(0,r.kt)("p",null,"Message Queue\ub294 EDA\uc758 \ud544\uc218 \uad6c\uc131\uc694\uc18c\ub77c \ud560 \uc218 \uc788\uc8e0.\nminIO\ub294 S3 \ud638\ud658 \ud45c\uc900\uc73c\ub85c \uac1d\uccb4(object)\uac00 \ubc84\ud0b7\uc5d0\uc11c \ubc1c\uc0dd\uc2dc\ud0a4\ub294 \uc54c\ub78c\uc744 \ud1b5\ud574 \ubaa8\ub2c8\ud130\ub9c1 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uba54\uc2dc\uc9c0 \ud050\ub85c\ub294 Kafka\ub97c \uc120\ud0dd\ud588\ub294\ub370\uc694,\n\uc0ac\ub0b4\uc5d0\uc11c(",(0,r.kt)("del",{parentName:"p"},"\ub3c4\uc6c0\uc744 \ubc1b\uc9c4 \ubabb\ud588\uc9c0\ub9cc"),") Hadoop\uc744 \ub9ce\uc774 \uc0ac\uc6a9\ud558\uace0 \uc788\uae30 \ub54c\ubb38\uc5d0\n\ud558\ub461 \uc5d0\ucf54\uc2dc\uc2a4\ud15c\uc758 kafka\uac00 \uc7a5\uc810\uc744 \uc9c0\ub2cc\ub2e4 \uc0dd\uac01\ud588\uc2b5\ub2c8\ub2e4.\n\ub610\ud55c, \uc804\uccb4 \uc2dc\uc2a4\ud15c \ub85c\uadf8\uc218\uc9d1/\ubd84\uc11d\uc73c\ub85c \uc0ac\uc6a9\ud558\ub294 ELK\uc2a4\ud0dd\uacfc \uc5f0\ub3d9\ub3c4 \uace0\ub824\ud558\uba74 \ub354\ub354\uc6b1 kafka\uc600\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"kafka-\ubc30\ud3ec"},"kafka \ubc30\ud3ec"),(0,r.kt)("p",null,"kafka\ub97c \ubaa8\ub974\uc2e0\ub2e4\uba74 \uc55e\uc73c\ub85c \uc791\uc131\ud560 ",(0,r.kt)("a",{parentName:"p",href:"/404"},"\uc774\uae00")," \uc744 \ucc38\uace0\ud558\uc2dc\uba74 \uc88b\uc744 \uac83 \uac19\uc2b5\ub2c8\ub2e4. ",(0,r.kt)("del",{parentName:"p"},"\uc5c6\ub294\ub370 \uc5b4\ub5bb\uac8c"),"  "),(0,r.kt)("p",null,"\ucfe0\ubc84\ub124\ud2f0\uc2a4\uc5d0 \uce74\ud504\uce74\ub97c \ubc30\ud3ec\ud574\uc57c \uc0ac\uc6a9\ud560 \uc218 \uc788\uaca0\uc8e0?\n\uce74\ud504\uce74\ub97c \uc0ac\uc6a9\ud558\uae30 \uc704\ud574 zookeeper, \ud3b8\ud558\uac8c \uc0ac\uc6a9\ud558\uae30 \uc704\ud574 kafka manager\uac00 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"kafka.yaml"),(0,r.kt)("div",{markdown:"1"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  namespace: kubeflow\n  name: kafka\n  labels:\n    app: kafka\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: kafka\n  template:\n    metadata:\n      labels:\n        app: kafka\n    spec:\n      containers:\n      - name: zookeeper\n        image: zookeeper\n        imagePullPolicy: IfNotPresent\n        ports:\n        - containerPort: 2181\n          protocol: TCP\n        env:\n        - name: ZOO_MY_ID\n          value: "1"\n\n      - name: kafka\n        image: wurstmeister/kafka\n        imagePullPolicy: IfNotPresent\n        ports:\n        - containerPort: 9092\n          protocol: TCP\n        env:\n        - name: KAFKA_ADVERTISED_HOST_NAME\n          value: "localhost"\n        - name: KAFKA_ZOOKEEPER_CONNECT\n          value: "localhost:2181"\n\n      - name: kafka-manager\n        image: kafkamanager/kafka-manager\n        imagePullPolicy: IfNotPresent\n        ports:\n        - containerPort: 9000\n          protocol: TCP\n        env:\n        - name: ZK_HOSTS\n          value: "localhost:2181"\n        - name: APPLICATION_SECRET\n          value: "random-secret"\n---\napiVersion: v1\nkind: Service\nmetadata:\n  namespace: kubeflow\n  name: kafka-service\n  labels:\n    app: kafka\nspec:\n  type: ClusterIP\n  selector:\n    app: kafka\n  ports:\n      # \uae30\ubcf8\uc801\uc73c\ub85c \uadf8\ub9ac\uace0 \ud3b8\uc758\uc0c1 `targetPort` \ub294 `port` \ud544\ub4dc\uc640 \ub3d9\uc77c\ud55c \uac12\uc73c\ub85c \uc124\uc815\ud569\ub2c8\ub2e4.\n    - name: http\n      port: 9092\n      targetPort: 9092\n      #nodePort: 30007\n---\napiVersion: v1\nkind: Service\nmetadata:\n  namespace: kubeflow\n  name: kafka-manager-service\n  labels:\n    app: kafka\nspec:\n  type: ClusterIP\n  selector:\n    app: kafka\n  ports:\n    - name: http\n      port: 9000\n      targetPort: 9000\n')))),(0,r.kt)("p",null,"\ubc30\ud3ec\ub97c \ud588\ub2e4\uba74 \uce74\ud504\uce74 \ud074\ub7ec\uc2a4\ud130\ub97c \ucd94\uac00\ud574 \uc918\uc57c\uaca0\uc8e0!\n\ucee4\ub9e8\ub4dc\ub77c\uc778\uc744 \uc0ac\uc6a9\ud574\ub3c4 \ub418\ub098 \uc2dc\uac04\uc0c1 \ube60\ub974\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 CMAK kafka manager\ub97c \uc0ac\uc6a9\ud569\uc2dc\ub2e4. (\uc57c\ud6c4? \ucd94\ud6c4 \uc0c1\uc138\ud788 \uc791\uc131\ud558\uaca0\uc2b5\ub2c8\ub2e4)"),(0,r.kt)("p",null,"Add Cluster\ub97c \ub20c\ub7ec\uc90d\ub2c8\ub2e4  "),(0,r.kt)("image",{src:"https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/kafka-cluster.png"}),(0,r.kt)("br",null),(0,r.kt)("p",null,"minio \ubb38\uc11c\uc5d0 \ub530\ub974\uba74 0.9\ubc84\uc804\uc774 \ud638\ud658\ub41c\ub2e4\uace0 \ud569\ub2c8\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","(MinIO requires Kafka version 0.10 or 0.9. Internally MinIO uses the Shopify/sarama library and so has the same version compatibility as provided by this library.)  "),(0,r.kt)("image",{src:"https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/kafka-cluster-add.png"}),(0,r.kt)("br",null),(0,r.kt)("p",null,"\ud074\ub7ec\uc2a4\ud130\ub97c \uc0dd\uc131\ud588\uc73c\uba74 Topic\uc744 \ub9cc\ub4e4\uc5b4\uc90d\uc2dc\ub2e4.  "),(0,r.kt)("image",{src:"https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/kafka-topic.png"}),(0,r.kt)("br",null),(0,r.kt)("p",null,"\uc774\ub984\uc740 mlpipeline\uc73c\ub85c \ud558\uaca0\uc2b5\ub2c8\ub2e4.  "),(0,r.kt)("image",{src:"https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/kafka-topic-add.png"}),(0,r.kt)("h3",{id:"notification-config"},"notification config"),(0,r.kt)("p",null,"\uc774\uc820 kafka\uc640 minio\ub97c \uc5f0\uacb0\uc2dc\ucf1c\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ucee4\ub9e8\ub4dc\ub77c\uc778\uc73c\ub85c \uc124\uc815\ud560 \uc218\ub3c4 \uc788\uace0 ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.minio/config.json"),"\uc744 \ucd94\uac00\ud574\nkafka\uc5d0 minIO \uc774\ubca4\ud2b8\ub97c publish \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ vi config.json\n")),(0,r.kt)("p",null,"\uc0dd\uc131\ud574\uc900 \uce74\ud504\uce74\uc758 \uc8fc\uc18c\uc640 \ud1a0\ud53d\uc744 \uc124\uc815\ud574 \uc90d\uc2dc\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"kafka": {\n    "1": {\n        "enable": true,\n        "brokers": ["10.111.188.42:9092"],\n        "topic": "mlpipeline"\n    }\n}\n')),(0,r.kt)("p",null,"\uc124\uc815\uc744 \uc800\uc7a5\ud55c \ud6c4 \ucee8\ud14c\uc774\ub108\ub97c \uc7ac\uc2dc\uc791 \uc2dc\ucf1c\uc8fc\uc138\uc694  "),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"minio-python-\ub77c\uc774\ube0c\ub7ec\ub9ac"},"minio python \ub77c\uc774\ube0c\ub7ec\ub9ac"),(0,r.kt)("p",null,"minIO python API\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4.\nflask\ub97c \uc0ac\uc6a9\ud574 \uac1c\ubc1c\ud558\uae30 \ud3b8\ud558\uaca0\uad70\uc694!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from minio import Minio\n\nclient = Minio(\n        'ip:port',\n        access_key='access',\n        secret_key='secret',\n        secure=False\n    )\n\n# \uc5f0\uacb0 \ud14c\uc2a4\ud2b8\nprint(client.list_buckets())\n")),(0,r.kt)("p",null,"notification config\ub97c \uc124\uc815\ud574 \uc8fc\uc5b4\uc57c \ud569\ub2c8\ub2e4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from minio.notificationconfig import NotificationConfig, QueueConfig, PrefixFilterRule\n\nnoti_config = NotificationConfig(\n            queue_config_list=[\n                QueueConfig(\n                    \"arn:minio:sqs::1:kafka\",\n                    ['s3:ObjectCreated:*', 's3:ObjectRemoved:*', 's3:ObjectAccessed:*'],\n                    config_id=\"whatever not conflict\",\n                    # prefix_filter_rule=PrefixFilterRule(\"1\"),\n                )\n            ]\n        )\n\nclient.set_bucket_notification('bucket name', noti_config)\n")),(0,r.kt)("p",null,"QueueConfig \uc758\ubbf8\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"arn:minio:sqs::1:amqp",(0,r.kt)("br",{parentName:"li"}),"arn:{type}:{protocol}:{region}:{account-id}:{function}:{function-name}",(0,r.kt)("br",{parentName:"li"}),"ARN: Amazon Resource Number",(0,r.kt)("br",{parentName:"li"}),"SQS: Simple Queue Service",(0,r.kt)("br",{parentName:"li"}),"amqp: Advanced Message Queuing Protocol  "),(0,r.kt)("li",{parentName:"ul"},"events",(0,r.kt)("br",{parentName:"li"}),"\uc218\uc2e0\ud560 \uc774\ubca4\ud2b8 \ubaa9\ub85d\uc785\ub2c8\ub2e4"),(0,r.kt)("li",{parentName:"ul"},"config_id",(0,r.kt)("br",{parentName:"li"}),"\uc124\uc815 \uc544\uc774\ub514\uc785\ub2c8\ub2e4"),(0,r.kt)("li",{parentName:"ul"},"prefix_filter_rule",(0,r.kt)("br",{parentName:"li"}),"\ud30c\uc77c \uc55e\uc758 \uc774\ub984\uc744 \ud544\ud130\ub9c1\ud569\ub2c8\ub2e4"),(0,r.kt)("li",{parentName:"ul"},"suffix_filter_rule",(0,r.kt)("br",{parentName:"li"}),"\ud30c\uc77c \ub4a4\uc758 \uc774\ub984\uc744 \ud544\ud130\ub9c1\ud569\ub2c8\ub2e4.")),(0,r.kt)("br",null),(0,r.kt)("p",null,"\uc774\ubca4\ud2b8 \ub9ac\uc2a8\uc740 \ub2e4\uc74c\uacfc \uac19\uc774 \ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"events = client.listen_bucket_notification(\n        'bucket name', prefix='', suffix='', events=['s3:ObjectCreated:*', 's3:ObjectRemoved:*', 's3:ObjectAccessed:*'])\n\n")),(0,r.kt)("p",null,"\uc774\ub54c ",(0,r.kt)("inlineCode",{parentName:"p"},"events"),"\ub294 \uc81c\ub108\ub808\uc774\ud130 \ud0c0\uc785\uc785\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"for event in events:\n    print(type(event))\n    print(event)\n\n<class 'dict'>\n{'Records': [{'eventVersion': '2.0', 'eventSource': 'minio:s3', 'awsRegion': '', 'eventTime': '2021-06-23T09:23:29Z', 'eventName': 's3:ObjectCreated:Put', 'userIdentity': {'principalId': 'minio'}, 'requestParameters': {'accessKey': 'minio', 'region': '', 'sourceIPAddress': '127.0.0.1'}, 'responseElements': {'x-amz-request-id': '168B2BC399599AFD', 'x-minio-deployment-id': 'abf9f200-cda5-4c7a-b16a-ce6baa64123e', 'x-minio-origin-endpoint': 'http://ip:9000'}, 's3': {'s3SchemaVersion': '1.0', 'configurationId': 'Config', 'bucket': {'name': 'test', 'ownerIdentity': {'principalId': 'minio'}, 'arn': 'arn:aws:s3:::test'}, 'object': {'key': 'input.jpg', 'size': 209222, 'eTag': '64575f26c680e43a076cb4907080a091-1', 'contentType': 'image/jpeg', 'userMetadata': {'content-type': 'image/jpeg'}, 'versionId': '1', 'sequencer': '168B2BC399BBFFC8'}}, 'source': {'host': '127.0.0.1', 'port': '', 'userAgent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36'}}]}\n{'key': 'input.jpg', 'size': 209222, 'eTag': '64575f26c680e43a076cb4907080a091-1', 'contentType': 'image/jpeg', 'userMetadata': {'content-type': 'image/jpeg'}, 'versionId': '1', 'sequencer': '168B2BC399BBFFC8'}\n")),(0,r.kt)("p",null,"\uc124\uc815\uc5d0 \ub530\ub77c \uac1d\uccb4\uac00 \uc0dd\uc131, \uc0ad\uc81c, \uc811\uadfc \uc774\ubca4\ud2b8\ub9c8\ub2e4 dict \ud0c0\uc785\uc758 ",(0,r.kt)("inlineCode",{parentName:"p"},"event"),"\ub97c \uc218\uc2e0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4!"),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"tips"},"Tips"),(0,r.kt)("p",null,"\uc2dc\uac04\uc774 \ubd80\uc871\ud574\uc11c \ub2e4\uc74c\uc5d0 \ub354 \uc798 \uc791\uc131\ud558\uaca0\uc2b5\ub2c8\ub2e4..."),(0,r.kt)("h3",{id:"reference"},"Reference"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://v1-2-branch.kubeflow.org/docs/components/pipelines/sdk/output-viewer/#web-app"},"[\uacf5\uc2dd]kubeflow output viewer"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.min.io/docs/python-client-api-reference.html"},"[\uacf5\uc2dd]python client api reference"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://programmersought.com/article/56446127239/"},"Minio bucket notification guide"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.min.io/docs/minio-bucket-notification-guide.html#apache-kafka"},"[\uacf5\uc2dd]Publish MinIO events via Kafka"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/harrythegreat/aws%EC%9D%98-arn-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-8c20d0ccbbfd"},"AWS\uc758 ARN \uc774\ud574\ud558\uae30")))}k.isMDXComponent=!0}}]);