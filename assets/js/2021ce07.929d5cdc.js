"use strict";(self.webpackChunkjwher_blog=self.webpackChunkjwher_blog||[]).push([[278],{3905:(M,D,e)=>{e.d(D,{Zo:()=>i,kt:()=>l});var N=e(67294);function t(M,D,e){return D in M?Object.defineProperty(M,D,{value:e,enumerable:!0,configurable:!0,writable:!0}):M[D]=e,M}function w(M,D){var e=Object.keys(M);if(Object.getOwnPropertySymbols){var N=Object.getOwnPropertySymbols(M);D&&(N=N.filter((function(D){return Object.getOwnPropertyDescriptor(M,D).enumerable}))),e.push.apply(e,N)}return e}function a(M){for(var D=1;D<arguments.length;D++){var e=null!=arguments[D]?arguments[D]:{};D%2?w(Object(e),!0).forEach((function(D){t(M,D,e[D])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(e)):w(Object(e)).forEach((function(D){Object.defineProperty(M,D,Object.getOwnPropertyDescriptor(e,D))}))}return M}function u(M,D){if(null==M)return{};var e,N,t=function(M,D){if(null==M)return{};var e,N,t={},w=Object.keys(M);for(N=0;N<w.length;N++)e=w[N],D.indexOf(e)>=0||(t[e]=M[e]);return t}(M,D);if(Object.getOwnPropertySymbols){var w=Object.getOwnPropertySymbols(M);for(N=0;N<w.length;N++)e=w[N],D.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(M,e)&&(t[e]=M[e])}return t}var j=N.createContext({}),g=function(M){var D=N.useContext(j),e=D;return M&&(e="function"==typeof M?M(D):a(a({},D),M)),e},i=function(M){var D=g(M.components);return N.createElement(j.Provider,{value:D},M.children)},r="mdxType",z={inlineCode:"code",wrapper:function(M){var D=M.children;return N.createElement(N.Fragment,{},D)}},I=N.forwardRef((function(M,D){var e=M.components,t=M.mdxType,w=M.originalType,j=M.parentName,i=u(M,["components","mdxType","originalType","parentName"]),r=g(e),I=t,l=r["".concat(j,".").concat(I)]||r[I]||z[I]||w;return e?N.createElement(l,a(a({ref:D},i),{},{components:e})):N.createElement(l,a({ref:D},i))}));function l(M,D){var e=arguments,t=D&&D.mdxType;if("string"==typeof M||t){var w=e.length,a=new Array(w);a[0]=I;var u={};for(var j in D)hasOwnProperty.call(D,j)&&(u[j]=D[j]);u.originalType=M,u[r]="string"==typeof M?M:t,a[1]=u;for(var g=2;g<w;g++)a[g]=e[g];return N.createElement.apply(null,a)}return N.createElement.apply(null,e)}I.displayName="MDXCreateElement"},97316:(M,D,e)=>{e.r(D),e.d(D,{assets:()=>j,contentTitle:()=>a,default:()=>z,frontMatter:()=>w,metadata:()=>u,toc:()=>g});var N=e(87462),t=(e(67294),e(3905));const w={authors:["jwher"],description:"\uc544\ub9c8\uc874 \uc138\uc774\uc9c0\uba54\uc774\ucee4: \uba38\uc2e0\ub7ec\ub2dd \uc790\ub3d9\ud654",slug:"sagemaker",tags:["tech","ml"],title:"Sagemaker"},a=void 0,u={permalink:"/posts/sagemaker",editUrl:"https://github.com/jwher/jwher.github.io/tree/main/posts/2021-08-29-sagemaker/index.md",source:"@site/posts/2021-08-29-sagemaker/index.md",title:"Sagemaker",description:"\uc544\ub9c8\uc874 \uc138\uc774\uc9c0\uba54\uc774\ucee4: \uba38\uc2e0\ub7ec\ub2dd \uc790\ub3d9\ud654",date:"2021-08-29T00:00:00.000Z",formattedDate:"August 29, 2021",tags:[{label:"tech",permalink:"/posts/tags/tech"},{label:"ml",permalink:"/posts/tags/ml"}],readingTime:4.93,hasTruncateMarker:!0,authors:[{name:"Jeongwon Her",title:"MLOps Engineer",url:"https://github.com/jwher",imageURL:"https://github.com/jwher.png",key:"jwher"}],frontMatter:{authors:["jwher"],description:"\uc544\ub9c8\uc874 \uc138\uc774\uc9c0\uba54\uc774\ucee4: \uba38\uc2e0\ub7ec\ub2dd \uc790\ub3d9\ud654",slug:"sagemaker",tags:["tech","ml"],title:"Sagemaker"},prevItem:{title:"Kubeflow Guide",permalink:"/posts/kubeflow-guide"},nextItem:{title:"Blog Tech Map",permalink:"/posts/blog-tech-map"}},j={authorsImageUrls:[void 0]},g=[{value:"SageMaker",id:"sagemaker",level:2},{value:"\uc2e4\uc2b5",id:"\uc2e4\uc2b5",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Tips",id:"tips",level:2},{value:"Reference",id:"reference",level:3}],i={toc:g},r="wrapper";function z(M){let{components:D,...w}=M;return(0,t.kt)(r,(0,N.Z)({},i,w,{components:D,mdxType:"MDXLayout"}),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"sagemaker",src:e(3856).Z,width:"80",height:"80"}),"\n",(0,t.kt)("em",{parentName:"p"},"AWS Builders Sagemaker Session"),(0,t.kt)("br",{parentName:"p"}),"\n",(0,t.kt)("em",{parentName:"p"},"\uc774 \uae00\uc740 \uc544\ub9c8\uc874 \ube4c\ub354\uc2a4 \uc138\uc774\uc9c0\uba54\uc774\ucee4 \uc138\uc158\uc744 \ub4e3\uace0 \uc791\uc131\ud588\uc2b5\ub2c8\ub2e4")),(0,t.kt)("h1",{id:"\ubaa9\ucc28"},"\ubaa9\ucc28"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"#sagemaker"},"SageMaker")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"#%EC%8B%A4%EC%8A%B5"},"\uc2e4\uc2b5"))),(0,t.kt)("h2",{id:"sagemaker"},"SageMaker"),(0,t.kt)("p",null,"\uc138\uc774\uc9c0\uba54\uc774\ucee4(SageMaker)\ub294 AWS ML \uc2a4\ud0dd\uc73c\ub85c,\n\uc900\ube44, \ube4c\ub4dc, \ud6c8\ub828 \ubc0f \ud29c\ub2dd, \ubc30\ud3ec \ubc0f \uad00\ub9ac CI/CD \ud30c\uc774\ud504\ub77c\uc778\uc785\ub2c8\ub2e4.\n\uc138\uc774\uc9c0\uba54\uc774\ucee4 \ud575\uc2ec \uac1c\ub150\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130 \ubcf4\ud638\ub97c \ud1b5\ud55c \ud601\uc2e0 \uc9c0\uc6d0"),(0,t.kt)("li",{parentName:"ul"},"\ubc18\ubcf5 \ud6c8\ub828 \uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc790\ub3d9\ud654")),(0,t.kt)("p",null,"\uad00\ub9ac\ud615 \uba38\uc2e0\ub7ec\ub2dd CI/CD \uc11c\ube44\uc2a4\uc778 \uc138\uc774\uc9c0\uba54\uc774\ucee4\ub294 \ub2e4\uc74c \uc11c\ube44\uc2a4\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"\uc6cc\ud06c\ud50c\ub85c\uc6b0 \uac01 \ub2e8\uacc4\ub97c \uc911\uc559\uc5d0\uc11c \uad00\ub9ac"),(0,t.kt)("li",{parentName:"ul"},"\uc6cc\ud06c\ud50c\ub85c\uc6b0 \uacf5\uc720 \ubc0f \uc7ac\uc2e4\ud589"),(0,t.kt)("li",{parentName:"ul"},"\ube4c\ud2b8\uc778 \ud15c\ud50c\ub9bf\uc5d0\uc11c \uc120\ud0dd"),(0,t.kt)("li",{parentName:"ul"},"\uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc2dc\uac01\uc801\uc73c\ub85c \ube44\uad50")),(0,t.kt)("p",null,"\uc138\uc774\uc9c0\uba54\uc774\ucee4 \ud30c\uc774\ud504\ub77c\uc778\uc740 \uc218\ub3d9, ",(0,t.kt)("a",{parentName:"p",href:"https://aws.amazon.com/ko/cloudwatch/"},"CloudWatch")," \uc774\ubca4\ud2b8,\n\ucf54\ub4dc \uccb4\ud06c\uc778, \uc2a4\ucf00\uc904\ub9c1\uc73c\ub85c \uc2dc\uc791\ub429\ub2c8\ub2e4.\n\uc138\uc774\uc9c0\uba54\uc774\ucee4\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \uc21c\uc11c\ub85c \uc791\ub3d9\ud569\ub2c8\ub2e4."),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"\uc785\ub825 \ub370\uc774\ud130 \uac00\uc838\uc624\uae30"),(0,t.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130 \ucc98\ub9ac"),(0,t.kt)("li",{parentName:"ul"},"\ubaa8\ub378 \ud6c8\ub828"),(0,t.kt)("li",{parentName:"ul"},"\uac80\uc99d"),(0,t.kt)("li",{parentName:"ul"},"\ubaa8\ub378 \ubc30\ud3ec (\ub610\ub294) \uacbd\uace0 \ubc0f \uc911\ub2e8")),(0,t.kt)("p",null,"\uc6cc\ud06c\ud50c\ub85c\uc6b0\ub294 Python SDK\ub97c \uc0ac\uc6a9\ud574 \uc791\uc131\ud569\ub2c8\ub2e4.\n\ud30c\uc774\ud504\ub77c\uc778 \uc2e4\ud589 \uc138\ubd80 \uc815\ubcf4\uc640 \uba54\ud2b8\ub9ad\uc740 \uc6f9 \uc2a4\ud29c\ub514\uc624\ub97c \uc0ac\uc6a9\ud574 \uc2e4\uc2dc\uac04\uc73c\ub85c \ud655\uc778\ud569\ub2c8\ub2e4."),(0,t.kt)("br",null),(0,t.kt)("h2",{id:"\uc2e4\uc2b5"},"\uc2e4\uc2b5"),(0,t.kt)("p",null,"\uc2e4\uc2b5\uc740 \uc138\uc774\uc9c0\uba54\uc774\ucee4 \ub178\ud2b8\ubd81 \uc778\uc2a4\ud134\uc2a4\ub97c \uc0dd\uc131\ud574 \uc0ac\uc6a9\ud569\ub2c8\ub2e4.\n\uc774\ub97c \uc704\ud574 AWS CloudFormation\uc744 \uc0ac\uc6a9\ud574 \ub178\ud2b8\ubd81 \uc778\uc2a4\ud134\uc2a4\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,t.kt)("h3",{id:"requirements"},"Requirements"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"AWS account"),(0,t.kt)("li",{parentName:"ul"},"AWS IAM(Identity and Access Management)"),(0,t.kt)("li",{parentName:"ul"},"AWS \uc774\ud574")),(0,t.kt)("p",null,(0,t.kt)("em",{parentName:"p"},"\ud544\uc790\ub294 AWS Builders 2021\uc5d0 \ucc38\uc5ec\ud574 \uc2e4\uc2b5 \uacc4\uc815\uc744 \uc9c0\uae09\ubc1b\uc558\uc2b5\ub2c8\ub2e4.")),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},"\ud074\ub77c\uc6b0\ub4dc\ud3ec\uba54\uc774\uc158\uc5d0\uc11c \uc2a4\ud0dd \uc0dd\uc131\uc744 \ud569\ub2c8\ub2e4.\n\uc900\ube44\ub41c \ud15c\ud50c\ub9bf\uc744 \uc0ac\uc6a9\ud588\uc2b5\ub2c8\ub2e4.")),(0,t.kt)("p",{align:"center"},(0,t.kt)("img",{src:"/assets/img/sagemaker/cloudformation1.png"})),(0,t.kt)("br",null),"2. \uc2a4\ud0dd \uc138\ubd80 \uc815\ubcf4\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4.",(0,t.kt)("p",{align:"center"},(0,t.kt)("img",{src:"/assets/img/sagemaker/cloudformation2.png"})),(0,t.kt)("p",null,"Amazon Elastic Compute Cloud, EC2\ub294 \ucef4\ud4e8\ud2b8 \uc790\uc6d0 \ucd94\uc0c1\ud654\ub85c\uc368 \uc131\ub2a5\uc758 \uc77c\uad00\uc131\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.\nml.m4.xlarge\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \ub73b\uc785\ub2c8\ub2e4."),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"ml: \uc138\uc774\uc9c0\uba54\uc774\ucee4 \ub4f1 ml\uc5d0 \uc0ac\uc6a9\ud558\ub294 \uc778\uc2a4\ud134\uc2a4\uc785\ub2c8\ub2e4."),(0,t.kt)("li",{parentName:"ul"},"m4: \ubc94\uc6a9 \uc778\uc2a4\ud134\uc2a4\uc785\ub2c8\ub2e4.",(0,t.kt)("br",{parentName:"li"}),"2.3GHz \uc778\ud154 \uc81c\uc628\xae E5-2686 v4(Broadwell) \ub610\ub294 2.4GHz \uc778\ud154 \uc81c\uc628\xae E5-2676 v3(Haswell)"),(0,t.kt)("li",{parentName:"ul"},"xlarge: 4vCPU, 16Gib, EBS \uc804\uc6a9 \uc2a4\ud1a0\ub9ac\uc9c0, \ub124\ud2b8\uc6cc\ud06c \uc131\ub2a5 \ub192\uc74c")),(0,t.kt)("p",null,(0,t.kt)("em",{parentName:"p"},"Gib, Giga Binary byte = 2^30"),(0,t.kt)("br",{parentName:"p"}),"\n",(0,t.kt)("em",{parentName:"p"},"EBS, Elastic Block Store")),(0,t.kt)("br",null),(0,t.kt)("ol",{start:3},(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"\ub3d9\uc758 \ubc84\ud2bc \ub204\ub974\uace0 \uc2a4\ud0dd \uc0dd\uc131\uc744 \ub204\ub985\ub2c8\ub2e4."),(0,t.kt)("p",{align:"center"},(0,t.kt)("img",{src:"/assets/img/sagemaker/cloudformation5.png"})),(0,t.kt)("br",null)),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"\ub178\ud2b8\ubd81 \uc778\uc2a4\ud134\uc2a4\uc758 \uc0dd\uc131\uc774 \uc644\ub8cc\ub418\uba74, \uac80\uc0c9\ucc3d\uc5d0 sagemaker\ub97c \uac80\uc0c9\ud569\ub2c8\ub2e4."),(0,t.kt)("p",{align:"center"},(0,t.kt)("img",{src:"/assets/img/sagemaker/cloudformation7.png"})),(0,t.kt)("br",null)),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"SageMaker\uc5d0 \ub4e4\uc5b4\uac00 \uc67c\ucabd \ud0ed\uc5d0 ",(0,t.kt)("inlineCode",{parentName:"p"},"\ub178\ud2b8\ubd81"),"-",(0,t.kt)("inlineCode",{parentName:"p"},"\ub178\ud2b8\ubd81\uc778\uc2a4\ud134\uc2a4"),"-",(0,t.kt)("inlineCode",{parentName:"p"},"\uc774\ub984")," \ub610\ub294 ",(0,t.kt)("inlineCode",{parentName:"p"},"Jupyter")," \ub610\ub294 ",(0,t.kt)("inlineCode",{parentName:"p"},"JupyterLab"),"\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4."),(0,t.kt)("p",{align:"center"},(0,t.kt)("img",{src:"/assets/img/sagemaker/cloudformation9.png"})),(0,t.kt)("br",null))),(0,t.kt)("ol",{start:6},(0,t.kt)("li",{parentName:"ol"},"\uc8fc\ud53c\ud130 \ub7a9 \ud558\ub2e8\uc758 ",(0,t.kt)("inlineCode",{parentName:"li"},"Terminal"),"\uc744 \uc5f4\uace0 \uc2e4\uc2b5\uc5d0 \uc0ac\uc6a9\ud560 \ucf54\ub4dc\ub97c clone \ubc1b\uc2b5\ub2c8\ub2e4.",(0,t.kt)("p",{align:"center"},(0,t.kt)("img",{src:"/assets/img/sagemaker/cloudformation12.png"})),(0,t.kt)("br",null))),(0,t.kt)("ol",{start:7},(0,t.kt)("li",{parentName:"ol"},"\uc8fc\ud53c\ud130\uc5d0\uc11c SDK\ub97c \uc0ac\uc6a9\ud574 \ud30c\uc774\ud504\ub77c\uc778\uc744 \uc2e4\ud589\uc2dc\ud0a4\uace0 SageMakerStudio\uc5d0 \uc811\uc18d\ud558\uba74\n\ud30c\uc774\ud504\ub77c\uc778 \uc870\ud68c\uac00 \uac00\ub2a5\ud569\ub2c8\ub2e4.",(0,t.kt)("p",{align:"center"},(0,t.kt)("img",{src:"/assets/img/sagemaker/sagemakerstudio4.png"})))),(0,t.kt)("p",null,"Web UI \ud615\ud0dc\ub85c \uc81c\uacf5\ub418\uba70 \uac1c\uc778\uc801\uc778 \ub290\ub08c\uc73c\ub85c ",(0,t.kt)("a",{parentName:"p",href:"https://jwher.github.io/welcome-to-kubeflow"},"Kubeflow"),"\n\uc640 \uc544\ud0a4\ud14d\ucc98, UI \ubaa8\ub450 \ub9e4\uc6b0 \ud761\uc0ac\ud588\uc2b5\ub2c8\ub2e4."),(0,t.kt)("p",null,(0,t.kt)("em",{parentName:"p"},"\uac1c\ubc1c\uc790\uac00 \uac19\uc558\ub2e4\uba74, \uc138\uc774\uc9c0\uba54\uc774\ucee4\uac00 \ub354 \ube60\ub974\uc9c0 \uc54a\uc558\ub098 \uc0dd\uac01\ud574 \ubd05\ub2c8\ub2e4(\ucd94\uce21)")),(0,t.kt)("br",null),(0,t.kt)("h2",{id:"tips"},"Tips"),(0,t.kt)("p",null,"SageMaker\ub294 ",(0,t.kt)("a",{parentName:"p",href:"https://jwher.github.io/blog-tech-map#amazon-ecs"},"\uc544\ub9c8\uc874 ECS"),"\n\ub85c \ub2e4\ub978 AWS \uae30\ub2a5\uc744 \uae4a\ud788 \uc0ac\uc6a9\ud569\ub2c8\ub2e4.(Ex. S3) "),(0,t.kt)("p",null,"MLOps\uc640 kubeflow, sagemaker, mlflow \uadf8\ub9ac\uace0 \ube44\uad50 \uae00\ub85c \ubd84\ud654\ud574 \uc791\uc131\ud574\uc57c \uaca0\uc2b5\ub2c8\ub2e4."),(0,t.kt)("p",null,"MLOps \uc218\uba85 \uc8fc\uae30\ub97c \ucd5c\uc801\ud654\ud558\uae30 \uc704\ud55c \ud575\uc2ec \uc6d0\uce59\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"\uc790\ub3d9\ud654\ub418\uace0 \uc7ac\ud604 \uac00\ub2a5\ud55c ML Workflow \uc0dd\uc131"),(0,t.kt)("li",{parentName:"ul"},"\ubaa8\ub378 \ub808\uc9c0\uc2a4\ud2b8\ub9ac\ub85c \ubaa8\ub378 \uad00\ub9ac"),(0,t.kt)("li",{parentName:"ul"},"Infrastructure-as-Code \ubc0f CI/CD \ud30c\uc774\ud504\ub77c\uc778 \uc0ac\uc6a9\uc73c\ub85c \uc9c0\uc18d\uc801 \uc804\ub2ec(Continuous Delivery) \ud65c\uc131\ud654"),(0,t.kt)("li",{parentName:"ul"},"\ubaa8\ub378 \uc131\ub2a5 \ubc0f \ud53c\ub4dc\ubc31 \uc815\ubcf4 \ubaa8\ub2c8\ud130\ub9c1")),(0,t.kt)("h3",{id:"reference"},"Reference"),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://aws.amazon.com/ko/events/seminars/aws-industry-week/"},"AWS Builders 2021"),(0,t.kt)("br",{parentName:"p"}),"\n",(0,t.kt)("a",{parentName:"p",href:"https://github.com/aws-samples"},"[\uae43\ud5d9]AWS Samples")))}z.isMDXComponent=!0},3856:(M,D,e)=>{e.d(D,{Z:()=>N});const N="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDY0ICg5MzUzNykgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+SWNvbi1BcmNoaXRlY3R1cmUvNjQvQXJjaF9BV1MtU2FnZU1ha2VyXzY0PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjEwMCUiIHgyPSIxMDAlIiB5Mj0iMCUiIGlkPSJsaW5lYXJHcmFkaWVudC0xIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzA1NUY0RSIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNTZDMEE3IiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgaWQ9Ikljb24tQXJjaGl0ZWN0dXJlLzY0L0FyY2hfQVdTLVNhZ2VNYWtlcl82NCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Ikljb24tQXJjaGl0ZWN0dXJlLUJHLzY0L01hY2hpbmUtTGVhcm5pbmciIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMSkiPgogICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiB4PSIwIiB5PSIwIiB3aWR0aD0iODAiIGhlaWdodD0iODAiPjwvcmVjdD4KICAgICAgICA8L2c+CiAgICAgICAgPHBhdGggZD0iTTU0LjAzNCwyNi4wMzM1NzMxIEM1NC4wMzQsMjYuNTkzNTY1NCA1My41NzgsMjcuMDQ5NTU5MiA1My4wMTcsMjcuMDQ5NTU5MiBDNTIuNDU4LDI3LjA0OTU1OTIgNTIuMDAyLDI2LjU5MzU2NTQgNTIuMDAyLDI2LjAzMzU3MzEgQzUyLjAwMiwyNS40NzM1ODA3IDUyLjQ1OCwyNS4wMTc1ODY5IDUzLjAxNywyNS4wMTc1ODY5IEM1My41NzgsMjUuMDE3NTg2OSA1NC4wMzQsMjUuNDczNTgwNyA1NC4wMzQsMjYuMDMzNTczMSBMNTQuMDM0LDI2LjAzMzU3MzEgWiBNNDguMDAyLDM2LjAwMDQzNyBDNDguMDAyLDM1LjQ0OTQ0NDUgNDguNDUsMzUuMDAwNDUwNiA0OS4wMDIsMzUuMDAwNDUwNiBDNDkuNTU0LDM1LjAwMDQ1MDYgNTAuMDAyLDM1LjQ0OTQ0NDUgNTAuMDAyLDM2LjAwMDQzNyBDNTAuMDAyLDM2LjU1MTQyOTQgNDkuNTU0LDM3LjAwMDQyMzMgNDkuMDAyLDM3LjAwMDQyMzMgQzQ4LjQ1LDM3LjAwMDQyMzMgNDguMDAyLDM2LjU1MTQyOTQgNDguMDAyLDM2LjAwMDQzNyBMNDguMDAyLDM2LjAwMDQzNyBaIE00OC4wMDIsNTUuMDAwMTc3NSBDNDguMDAyLDU0LjQ0OTE4NSA0OC40NSw1NC4wMDAxOTEyIDQ5LjAwMiw1NC4wMDAxOTEyIEM0OS41NTQsNTQuMDAwMTkxMiA1MC4wMDIsNTQuNDQ5MTg1IDUwLjAwMiw1NS4wMDAxNzc1IEM1MC4wMDIsNTUuNTUxMTcgNDkuNTU0LDU2LjAwMDE2MzkgNDkuMDAyLDU2LjAwMDE2MzkgQzQ4LjQ1LDU2LjAwMDE2MzkgNDguMDAyLDU1LjU1MTE3IDQ4LjAwMiw1NS4wMDAxNzc1IEw0OC4wMDIsNTUuMDAwMTc3NSBaIE01OC4wMDIsNDIuMDAwMzU1IEM1OC4wMDIsNDIuNTUxMzQ3NSA1Ny41NTQsNDMuMDAwMzQxNCA1Ny4wMDIsNDMuMDAwMzQxNCBDNTYuNDUsNDMuMDAwMzQxNCA1Ni4wMDIsNDIuNTUxMzQ3NSA1Ni4wMDIsNDIuMDAwMzU1IEM1Ni4wMDIsNDEuNDQ5MzYyNiA1Ni40NSw0MS4wMDAzNjg3IDU3LjAwMiw0MS4wMDAzNjg3IEM1Ny41NTQsNDEuMDAwMzY4NyA1OC4wMDIsNDEuNDQ5MzYyNiA1OC4wMDIsNDIuMDAwMzU1IEw1OC4wMDIsNDIuMDAwMzU1IFogTTY1LDQ1LjI3MjMxMDQgTDU5Ljk2Myw0Mi4zODIzNDk4IEM1OS45NzksNDIuMjU2MzUxNSA2MC4wMDIsNDIuMTMxMzUzMiA2MC4wMDIsNDIuMDAwMzU1IEM2MC4wMDIsNDAuMzQ2Mzc3NiA1OC42NTYsMzkuMDAwMzk2IDU3LjAwMiwzOS4wMDAzOTYgQzU1LjM0NywzOS4wMDAzOTYgNTQuMDAyLDQwLjM0NjM3NzYgNTQuMDAyLDQyLjAwMDM1NSBDNTQuMDAyLDQzLjY1NDMzMjQgNTUuMzQ3LDQ1LjAwMDMxNDEgNTcuMDAyLDQ1LjAwMDMxNDEgQzU3LjgwMSw0NS4wMDAzMTQxIDU4LjUyMyw0NC42ODEzMTg0IDU5LjA2MSw0NC4xNzEzMjU0IEw2My44ODYsNDYuOTM5Mjg3NiBMNTkuNTU1LDQ5LjEwNTI1OCBDNTkuMjE2LDQ5LjI3NTI1NTcgNTkuMDAyLDQ5LjYyMTI1MSA1OS4wMDIsNTAuMDAwMjQ1OCBMNTkuMDAyLDU4LjQ0MTEzMDUgTDQ2Ljk4Myw2NS44MzcwMjk1IEw0MS4wMDMsNjIuNDIwMDc2MiBMNDEuMDAzLDU2LjAwMDE2MzkgTDQ2LjE4Niw1Ni4wMDAxNjM5IEM0Ni42LDU3LjE2MTE0OCA0Ny43LDU4LjAwMDEzNjYgNDkuMDAyLDU4LjAwMDEzNjYgQzUwLjY1Niw1OC4wMDAxMzY2IDUyLjAwMiw1Ni42NTQxNTQ5IDUyLjAwMiw1NS4wMDAxNzc1IEM1Mi4wMDIsNTMuMzQ1MjAwMSA1MC42NTYsNTIuMDAwMjE4NSA0OS4wMDIsNTIuMDAwMjE4NSBDNDcuNyw1Mi4wMDAyMTg1IDQ2LjYsNTIuODM4MjA3IDQ2LjE4Niw1NC4wMDAxOTEyIEw0MS4wMDMsNTQuMDAwMTkxMiBMNDEuMDAzLDQwLjAwMDM4MjMgQzQxLjAwMywzOS42NDkzODcxIDQwLjgxOCwzOS4zMjMzOTE2IDQwLjUxNywzOS4xNDIzOTQxIEwzNS41MTYsMzYuMTQyNDM1IEwzNC40ODcsMzcuODU3NDExNiBMMzkuMDAzLDQwLjU2NjM3NDYgTDM5LjAwMyw0My41MDczMzQ1IEwzMy4wMDIsNDguMTIzMjcxNCBMMzMuMDAyLDQ0LjAwMDMyNzcgQzMzLjAwMiw0My42OTYzMzE5IDMyLjg2NCw0My40MDgzMzU4IDMyLjYyNyw0My4yMTkzMzg0IEwyOC4wMDIsMzkuNTE5Mzg4OSBMMjguMDAyLDM0LjUzNTQ1NyBMMzMuNTU2LDMwLjgzMjUwNzUgQzMzLjgzNSwzMC42NDY1MTAxIDM0LjAwMiwzMC4zMzQ1MTQzIDM0LjAwMiwzMC4wMDA1MTg5IEwzNC4wMDIsMjQuMDAwNjAwOCBMMzIuMDAyLDI0LjAwMDYwMDggTDMyLjAwMiwyOS40NjU1MjYyIEwyNy4wMTMsMzIuNzkwNDgwOCBMMjIuMDAyLDI5LjQ2MzUyNjIgTDIyLjAwMiwyMS41NzQ2MzM5IEwyNy4wMDIsMTguNjU4NjczOCBMMjcuMDAyLDI3LjAwMDU1OTkgTDI5LjAwMiwyNy4wMDA1NTk5IEwyOS4wMDIsMTcuNDkxNjg5NyBMMzMuMDA1LDE1LjE1NjcyMTYgTDM5LjAwMSwxOC42MTU2NzQ0IEwzOS4wMDIsMzEuMDAwNTA1MiBDMzkuMDAyLDMxLjM1OTUwMDMgMzkuMTk0LDMxLjY5MDQ5NTggMzkuNTA2LDMxLjg2ODQ5MzQgTDQ2LjA0MiwzNS42MDM0NDI0IEM0Ni4wMjQsMzUuNzM0NDQwNiA0Ni4wMDIsMzUuODY0NDM4OCA0Ni4wMDIsMzYuMDAwNDM3IEM0Ni4wMDIsMzcuNjU0NDE0NCA0Ny4zNDcsMzkuMDAwMzk2IDQ5LjAwMiwzOS4wMDAzOTYgQzUwLjY1NiwzOS4wMDAzOTYgNTIuMDAyLDM3LjY1NDQxNDQgNTIuMDAyLDM2LjAwMDQzNyBDNTIuMDAyLDM0LjM0NjQ1OTUgNTAuNjU2LDMzLjAwMDQ3NzkgNDkuMDAyLDMzLjAwMDQ3NzkgQzQ4LjIwOCwzMy4wMDA0Nzc5IDQ3LjQ5LDMzLjMxNTQ3MzYgNDYuOTUzLDMzLjgyMDQ2NjcgTDQxLjAwMiwzMC40MTk1MTMyIEw0MS4wMDEsMTguNjE3Njc0MyBMNDYuOTY0LDE1LjE3NjcyMTMgTDU4LjAwMiwyMi41MzU2MjA4IEw1OC4wMDIsMjUuMDAwNTg3MiBMNTUuODUxLDI1LjAwMDU4NzIgQzU1LjQyOSwyMy44NDQ2MDMgNTQuMzE4LDIzLjAxNzYxNDIgNTMuMDE3LDIzLjAxNzYxNDIgQzUxLjM1NCwyMy4wMTc2MTQyIDUwLjAwMiwyNC4zNzA1OTU4IDUwLjAwMiwyNi4wMzM1NzMxIEM1MC4wMDIsMjcuNjk2NTUwNCA1MS4zNTQsMjkuMDQ5NTMxOSA1My4wMTcsMjkuMDQ5NTMxOSBDNTQuMzQzLDI5LjA0OTUzMTkgNTUuNDcxLDI4LjE5MDU0MzYgNTUuODc1LDI3LjAwMDU1OTkgTDU4LjAwMiwyNy4wMDA1NTk5IEw1OC4wMDIsMzAuMDAwNTE4OSBDNTguMDAyLDMwLjM1OTUxNCA1OC4xOTQsMzAuNjkwNTA5NSA1OC41MDYsMzAuODY4NTA3IEw2NSwzNC41ODA0NTY0IEw2NSw0NS4yNzIzMTA0IFogTTMzLjAyLDY1LjgzNzAyOTUgTDI5Ljg2Nyw2My44OTcwNTYgTDM1LjU4Myw1OS44MTQxMTE4IEwzNC40MjEsNTguMTg2MTM0IEwyOC4wMTgsNjIuNzU5MDcxNiBMMjEuMDAyLDU4LjQ0MTEzMDUgTDIxLjAwMiw1MC41NjYyMzgxIEwyNS41MTYsNDcuODU3Mjc1MSBMMjQuNDg3LDQ2LjE0MjI5ODUgTDE5Ljk1OCw0OC44NjAyNjE0IEwxNS4wMDIsNDYuMzgyMjk1MiBMMTUuMDAxLDQwLjYxNzM3MzkgTDIwLjQ0OSwzNy44OTQ0MTExIEwxOS41NTUsMzYuMTA1NDM1NSBMMTUuMDAxLDM4LjM4MTQwNDQgTDE1LjAwMiwzNC41ODA0NTY0IEwyMC45NjMsMzEuMTc0NTAyOSBMMjYuMDAyLDM0LjUxOTQ1NzIgTDI2LjAwMiwzOS40ODAzODk0IEwyMC40NDksNDMuMTY3MzM5MSBMMjEuNTU1LDQ0LjgzMzMxNjMgTDI2Ljk1OCw0MS4yNDUzNjUzIEwzMS4wMDIsNDQuNDgwMzIxMiBMMzEuMDAyLDQ5LjY2MjI1MDQgTDI2LjM5Miw1My4yMDcyMDIgTDI3LjYxMSw1NC43OTIxODA0IEwzOS4wMDMsNDYuMDMwMyBMMzkuMDAzLDYyLjQxOTA3NjIgTDMzLjAyLDY1LjgzNzAyOTUgWiBNNjYuNDk2LDMzLjEzMjQ3NjEgTDYwLjAwMiwyOS40MjA1MjY4IEw2MC4wMDIsMjIuMDAwNjI4MSBDNjAuMDAyLDIxLjY2NTYzMjcgNTkuODM1LDIxLjM1MzYzNyA1OS41NTYsMjEuMTY4NjM5NSBMNDcuNTU2LDEzLjE2ODc0ODcgQzQ3LjI0LDEyLjk1ODc1MTYgNDYuODMyLDEyLjk0NDc1MTggNDYuNTAyLDEzLjEzNDc0OTIgTDQwLjAwNCwxNi44ODQ2OTggTDMzLjUwMiwxMy4xMzQ3NDkyIEMzMy4xOSwxMi45NTQ3NTE3IDMyLjgwNywxMi45NTQ3NTE3IDMyLjQ5OCwxMy4xMzY3NDkyIEwyMC40OTgsMjAuMTM2NjUzNiBDMjAuMTksMjAuMzE1NjUxMSAyMC4wMDIsMjAuNjQ0NjQ2NiAyMC4wMDIsMjEuMDAwNjQxOCBMMjAuMDAyLDI5LjQyMDUyNjggTDEzLjUwNiwzMy4xMzI0NzYxIEMxMy4xOTQsMzMuMzA5NDczNyAxMy4wMDIsMzMuNjQxNDY5MiAxMy4wMDIsMzQuMDAwNDY0MyBMMTMuMDAyLDM0LjQxNzQ1ODYgQzEzLjAwMSwzNC40Mzg0NTgzIDEzLDM0LjQ1ODQ1OCAxMywzNC40Nzk0NTc3IEwxMyw0NS4zNjMzMDkxIEMxMyw0NS4zODMzMDg4IDEzLjAwMSw0NS40MDMzMDg2IDEzLjAwMiw0NS40MjIzMDgzIEwxMy4wMDIsNDcuMDAwMjg2OCBDMTMuMDAyLDQ3LjM3OTI4MTYgMTMuMjE2LDQ3LjcyNTI3NjkgMTMuNTU1LDQ3Ljg5NDI3NDUgTDE5LjAwMiw1MC42MTgyMzc0IEwxOS4wMDIsNTkuMDAwMTIyOSBDMTkuMDAyLDU5LjM0NzExODIgMTkuMTgxLDU5LjY2OTExMzggMTkuNDc3LDU5Ljg1MTExMTMgTDMyLjQ3Nyw2Ny44NTEwMDIgQzMyLjYzOCw2Ny45NTAwMDA3IDMyLjgyLDY4IDMzLjAwMiw2OCBDMzMuMTczLDY4IDMzLjM0NCw2Ny45NTYwMDA2IDMzLjQ5OCw2Ny44NjgwMDE4IEw0MC4wMDMsNjQuMTUyMDUyNSBMNDYuNTA2LDY3Ljg2ODAwMTggQzQ2LjgyMSw2OC4wNDg5OTkzIDQ3LjIxMyw2OC4wNDE5OTk0IDQ3LjUyNiw2Ny44NTEwMDIgTDYwLjUyNiw1OS44NTExMTEzIEM2MC44MjIsNTkuNjY5MTEzOCA2MS4wMDIsNTkuMzQ3MTE4MiA2MS4wMDIsNTkuMDAwMTIyOSBMNjEuMDAyLDUwLjYxODIzNzQgTDY2LjQ0Nyw0Ny44OTQyNzQ1IEM2Ni43ODYsNDcuNzI1Mjc2OSA2Nyw0Ny4zNzkyODE2IDY3LDQ3LjAwMDI4NjggTDY3LDM0LjAwMDQ2NDMgQzY3LDMzLjY0MTQ2OTIgNjYuODA3LDMzLjMxMDQ3MzcgNjYuNDk2LDMzLjEzMjQ3NjEgTDY2LjQ5NiwzMy4xMzI0NzYxIFoiIGlkPSJBV1MtU2FnZU1ha2VyX0ljb25fNjRfU3F1aWQiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgIDwvZz4KPC9zdmc+"}}]);