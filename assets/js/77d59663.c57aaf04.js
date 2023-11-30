"use strict";(self.webpackChunkjwher_blog=self.webpackChunkjwher_blog||[]).push([[397],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>j});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function M(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),u=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},o=function(e){var t=u(e.components);return i.createElement(p.Provider,{value:t},e.children)},s="mdxType",N={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},w=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,o=M(e,["components","mdxType","originalType","parentName"]),s=u(n),w=a,j=s["".concat(p,".").concat(w)]||s[w]||N[w]||l;return n?i.createElement(j,r(r({ref:t},o),{},{components:n})):i.createElement(j,r({ref:t},o))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=w;var M={};for(var p in t)hasOwnProperty.call(t,p)&&(M[p]=t[p]);M.originalType=e,M[s]="string"==typeof e?e:a,r[1]=M;for(var u=2;u<l;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}w.displayName="MDXCreateElement"},69574:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>N,frontMatter:()=>l,metadata:()=>M,toc:()=>u});var i=n(87462),a=(n(67294),n(3905));const l={authors:["jwher"],description:"\ucfe0\ube0c\ud50c\ub85c\uc6b0 \uac00\uc774\ub4dc",slug:"kubeflow-guide",tags:["tech","kubeflow"],title:"Kubeflow Guide"},r=void 0,M={permalink:"/posts/kubeflow-guide",editUrl:"https://github.com/jwher/jwher.github.io/tree/main/posts/2021-08-31-kubeflow-guide/index.md",source:"@site/posts/2021-08-31-kubeflow-guide/index.md",title:"Kubeflow Guide",description:"\ucfe0\ube0c\ud50c\ub85c\uc6b0 \uac00\uc774\ub4dc",date:"2021-08-31T00:00:00.000Z",formattedDate:"August 31, 2021",tags:[{label:"tech",permalink:"/posts/tags/tech"},{label:"kubeflow",permalink:"/posts/tags/kubeflow"}],readingTime:3.94,hasTruncateMarker:!0,authors:[{name:"Jeongwon Her",title:"MLOps Engineer",url:"https://github.com/jwher",imageURL:"https://github.com/jwher.png",key:"jwher"}],frontMatter:{authors:["jwher"],description:"\ucfe0\ube0c\ud50c\ub85c\uc6b0 \uac00\uc774\ub4dc",slug:"kubeflow-guide",tags:["tech","kubeflow"],title:"Kubeflow Guide"},prevItem:{title:"\ucfe0\ubc84\ub124\ud2f0\uc2a4 \uc544\ud0a4\ud14d\ucc98",permalink:"/posts/kubernetes-architecture"},nextItem:{title:"Sagemaker",permalink:"/posts/sagemaker"}},p={authorsImageUrls:[void 0]},u=[{value:"\uc6f9 UI",id:"\uc6f9-ui",level:2},{value:"\ucef4\ud3ec\ub10c\ud2b8",id:"\ucef4\ud3ec\ub10c\ud2b8",level:3},{value:"\uc0ac\uc6a9\ud558\uae30",id:"\uc0ac\uc6a9\ud558\uae30",level:3},{value:"\ud30c\uc774\ud504\ub77c\uc778 \ub9cc\ub4e4\uae30",id:"\ud30c\uc774\ud504\ub77c\uc778-\ub9cc\ub4e4\uae30",level:2},{value:"kfp \uc124\uce58",id:"kfp-\uc124\uce58",level:3},{value:"\uc0dd\uc131\uacfc\uc815",id:"\uc0dd\uc131\uacfc\uc815",level:3},{value:"\uc608\uc81c",id:"\uc608\uc81c",level:3},{value:"Tips",id:"tips",level:2},{value:"Reference",id:"reference",level:3}],o={toc:u},s="wrapper";function N(e){let{components:t,...l}=e;return(0,a.kt)(s,(0,i.Z)({},o,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kubeflow",src:n(41082).Z,width:"277",height:"275"}),"\n",(0,a.kt)("em",{parentName:"p"},"\ucfe0\ube0c\ud50c\ub85c\uc6b0 \ud30c\uc774\ud504\ub77c\uc778 \uc0ac\uc6a9 \uac00\uc774\ub4dc"),"  "),(0,a.kt)("h1",{id:"\ubaa9\ucc28"},"\ubaa9\ucc28"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#%EC%9B%B9-ui"},"\uc6f9 UI")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#%ED%8C%8C%EC%9D%B4%ED%94%84%EB%9D%BC%EC%9D%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0"},"\ud30c\uc774\ud504\ub77c\uc778 \ub9cc\ub4e4\uae30"))),(0,a.kt)("h2",{id:"\uc6f9-ui"},"\uc6f9 UI"),(0,a.kt)("p",null,"\ucfe0\ube0c\ud50c\ub85c\uc6b0\uac00 \uc5c6\uc73c\uba74 ",(0,a.kt)("a",{parentName:"p",href:"https://jwher.github.io/install-kubeflow"},"\uc774\uae00"),"\n\uc744 \ubcf4\uace0 \uc124\uce58\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud83d\ude04"),(0,a.kt)("h3",{id:"\ucef4\ud3ec\ub10c\ud2b8"},"\ucef4\ud3ec\ub10c\ud2b8"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\ucfe0\ube0c\ud50c\ub85c\uc6b0\ub97c \uad6c\uc131\ud558\ub294 \ub17c\ub9ac \uc694\uc18c")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.kubeflow.org/docs/components/"},"[\uacf5\uc2dd]Components")),(0,a.kt)("h3",{id:"\uc0ac\uc6a9\ud558\uae30"},"\uc0ac\uc6a9\ud558\uae30"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"UI\ub294 \ubc84\uc804\uc5d0 \ub530\ub77c \ub2e4\ub97c \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("p",null,"\ucfe0\ube0c\ud50c\ub85c\uc6b0\ub294 \ube60\ub974\uac8c \uc0ac\uc6a9\ud574 \ubcfc \uc218 \uc788\ub294 \uc0d8\ud50c\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.\n\uc774\ubc88 \uc0d8\ud50c\uc740 \ud30c\uc774\uc36c \uc5f0\uc0b0\uc744 \ud3ec\ud568\ud558\uc9c0\ub9cc, ML \uc6cc\ud06c\ub85c\ub4dc\ub294 \uc81c\uacf5\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\uc88c\uce21 \ud0ed\uc758 ",(0,a.kt)("inlineCode",{parentName:"li"},"Pipelines"),"\uc5d0\uc11c ",(0,a.kt)("inlineCode",{parentName:"li"},"[Tutorial] Data passing in python components"),"\ub97c \ud074\ub9ad\ud569\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("em",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"em"},"[Demo] XGBoost - Iterative model training"),"\uc73c\ub85c ML \ucef4\ud3ec\ub10c\ud2b8 \uc0d8\ud50c\uc744 \uc0ac\uc6a9\ud574 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"experiment"),"\ub97c \ud55c\ubc88\ub3c4 \uc0dd\uc131\ud55c \uc801\uc774 \uc5c6\ub2e4\uba74, ",(0,a.kt)("inlineCode",{parentName:"li"},"Create experiment"),"\ub97c \ud074\ub9ad\ud574 \ub9cc\ub4ed\ub2c8\ub2e4.\n\uc0dd\uc131\ud55c \uc801\uc774 \uc788\ub2e4\uba74, ",(0,a.kt)("inlineCode",{parentName:"li"},"Create run"),"\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4.\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\ud30c\uc774\ud504\ub77c\uc778 \uc0dd\uc131\uc5d0 \ud544\uc694\ud55c \uac12\uc744 \uc785\ub825\ud569\ub2c8\ub2e4. \uc774 \uc0d8\ud50c\uc740 \ud544\uc694\ud55c \ubaa8\ub4e0 \uac12\uc744 \uae30\ubcf8\uc73c\ub85c \uc81c\uacf5\ud569\ub2c8\ub2e4.\n\uc785\ub825\uc744 \uc644\ub8cc\ud588\ub2e4\uba74 ",(0,a.kt)("inlineCode",{parentName:"li"},"start"),"\ub97c \ub20c\ub7ec \ud30c\uc774\ud504\ub77c\uc778\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("em",{parentName:"li"},"\uc0ac\uc9c4\uc740 ",(0,a.kt)("inlineCode",{parentName:"em"},"Default"),"\ub77c\ub294 \uc774\ub984\uc758 ",(0,a.kt)("inlineCode",{parentName:"em"},"experiment"),"\ub97c \uc0ac\uc6a9\ud588\uc2b5\ub2c8\ub2e4."),(0,a.kt)("br",{parentName:"li"}),"")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"\uc88c\uce21 \ud0ed\uc758 ",(0,a.kt)("inlineCode",{parentName:"li"},"Experiments"),"\uc744 \ub204\ub985\ub2c8\ub2e4. \uc9c0\uc815\ud55c ",(0,a.kt)("inlineCode",{parentName:"li"},"experiment"),"\uc774\ub984\uc744 \ud074\ub9ad\ud558\uba74 ",(0,a.kt)("inlineCode",{parentName:"li"},"Runs")," \ubaa9\ub85d\uc774 \ub098\uc635\ub2c8\ub2e4.\n\uc785\ub825\ud55c ",(0,a.kt)("inlineCode",{parentName:"li"},"Run")," \uc774\ub984\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4.",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("em",{parentName:"li"},"\uad6c\ubc84\uc804\uc740 \uc88c\uce21 \ud0ed\uc758 ",(0,a.kt)("inlineCode",{parentName:"em"},"Runs"),"\uac00 \uc874\uc7ac\ud558\uae30\ub3c4 \ud569\ub2c8\ub2e4"))),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"\uadf8\ub798\ud504\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub798\ud504\uc758 \uac01 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ud074\ub9ad\ud574 \uc2e4\ud589\uacb0\uacfc\ub97c \ud655\uc778\ud569\ub2c8\ub2e4.")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"\ud30c\uc774\ud504\ub77c\uc778-\ub9cc\ub4e4\uae30"},"\ud30c\uc774\ud504\ub77c\uc778 \ub9cc\ub4e4\uae30"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.kubeflow.org/docs/components/pipelines/sdk/sdk-overview/"},"[\uacf5\uc2dd]Introduction to the Pipelines SDK"),"  "),(0,a.kt)("h3",{id:"kfp-\uc124\uce58"},"kfp \uc124\uce58"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud30c\uc774\uc36c 3.5 \uc774\uc0c1"),(0,a.kt)("li",{parentName:"ul"},"\uac00\uc0c1\ud658\uacbd(conda) \uad8c\uc7a5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ pip3 install kfp --upgrade\n")),(0,a.kt)("p",null,"\uac00\uc0c1\ud658\uacbd\uc774 \uc544\ub2c8\ub77c\uba74 \uad8c\ud55c \uc624\ub958\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,a.kt)("inlineCode",{parentName:"p"},"--user")," \ud50c\ub798\uadf8\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ pip3 install kfp --upgrade --user\n")),(0,a.kt)("p",null,"\uc774 \uba85\ub839\uc5b4\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.local/bin"),"\uc5d0 \uc778\uc2a4\ud1a8\ud558\ub294 \uba85\ub839\uc5b4\uc785\ub2c8\ub2e4.\n\uc774\ub294 \uba87 \ub9ac\ub205\uc2a4 \ubc30\ud3ec(\uc6b0\ubd84\ud22c)\uc5d0\uc11c ",(0,a.kt)("inlineCode",{parentName:"p"},"PATH")," \ud658\uacbd\ubcc0\uc218\ub85c \ub4f1\ub85d\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.\n\ub530\ub77c\uc11c ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.local/bin")," \uacbd\ub85c\ub97c ",(0,a.kt)("inlineCode",{parentName:"p"},".bashrc")," \ud30c\uc77c\uc5d0 \ub4f1\ub85d\ud574\uc8fc\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"export PATH=$PATH:~/.local/bin\n")),(0,a.kt)("h3",{id:"\uc0dd\uc131\uacfc\uc815"},"\uc0dd\uc131\uacfc\uc815"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\uc874\uc7ac\ud558\ub294 \ucf54\ub4dc"),(0,a.kt)("li",{parentName:"ol"},"\ub3c4\ucee4 \uc774\ubbf8\uc9c0"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"kfp.dsl.ContainerOP")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"kfp.dsl.pipeline")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},".yaml")),(0,a.kt)("li",{parentName:"ol"},"\uc6f9 UI \ub610\ub294 ",(0,a.kt)("inlineCode",{parentName:"li"},"kfp.Client.run_pipeline"),"\ub85c \uc2e4\ud589")),(0,a.kt)("h3",{id:"\uc608\uc81c"},"\uc608\uc81c"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\uc2dc\uac04\uc774 \ubd80\uc871\ud574 \uc694\uccad\ud558\uc2dc\uba74 \uc124\uba85\ud558\uaca0\uc2b5\ub2c8\ub2e4."),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import kfp\nimport kfp.components as comp\nfrom kfp import dsl\n\ndef print_op(name, msg):\n    """Print a message"""\n\n    return dsl.ContainerOp(\n        name=name,\n        image=\'alpine:3.6\',\n        command=[\'echo\', msg],\n    )\n\n@dsl.pipeline(\n    name=\'Pipeline v1\',\n    description=\n    """execute whatever you want\n    """\n)\ndef pipeline(**kwargs):\n    # \uba54\ud0c0\ub370\uc774\ud130\ub294 \uc911\uad04\ud638\ub85c \uac00\uc838\uc635\ub2c8\ub2e4\n    # \uc608) {{pod.name}}\n\n    pr = print_op("print", "hello world!")\n\n    pr2 = print_op("print2", "have a nice day!")\n    pr2.after(pr)\n\nif __name__ == \'__main__\':\n    saveName = \'test.yaml\'\n    \n    kfp.compiler.Compiler().compile(pipeline, saveName)\n    print("done")\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://kubeflow-pipelines.readthedocs.io/en/latest/source/kfp.html"},"[\uacf5\uc2dd]kfp package"),"  "),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"tips"},"Tips"),(0,a.kt)("p",null,"Jupyter notebook\uacfc \uc5f0\ub3d9\ud574 \uc27d\uac8c(?) \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"reference"},"Reference"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.kubeflow.org/docs/"},"[\uacf5\uc2dd]Documentation"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://www.kubeflow.org/docs/components/pipelines/sdk/install-sdk/"},"[\uacf5\uc2dd]Install the Kubeflow Pipelines SDK"),"  "))}N.isMDXComponent=!0},41082:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNzYuOTMgMjc0LjU1Ij48dGl0bGU+bG9nbzwvdGl0bGU+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9IkxheWVyXzEtMiIgZGF0YS1uYW1lPSJMYXllciAxIj48cGF0aCBkPSJNOTUuOSw2Mi4xNSwxMDAsMTY0LjI1bDczLjc1LTk0LjEyYTYuNzksNi43OSwwLDAsMSw5LjYtMS4xMWw0NiwzNi45Mi0xNS02NS42MVoiIGZpbGw9IiM0Mjc5ZjQiLz48cG9seWdvbiBwb2ludHM9IjEwMi41NSAxODIuOTggMTY3Ljk3IDE4Mi45OCAxMjcuOCAxNTAuNzUgMTAyLjU1IDE4Mi45OCIgZmlsbD0iIzAwMjhhYSIvPjxwb2x5Z29uIHBvaW50cz0iMTgwLjE4IDgzLjkyIDEzNi4xOCAxNDAuMDYgMTgzLjA2IDE3Ny42NyAyMjcuNTMgMTIxLjkxIDE4MC4xOCA4My45MiIgZmlsbD0iIzAxNGJkMSIvPjxwb2x5Z29uIHBvaW50cz0iODMuNTYgNTIuMyA4My41NyA1Mi4yOSAxMjIuMjYgMy43NyA1OS44NyAzMy44MiA0NC40NiAxMDEuMzMgODMuNTYgNTIuMyIgZmlsbD0iI2JlZGNmZiIvPjxwb2x5Z29uIHBvaW50cz0iNDUuMzIgMTIyLjA1IDg2Ljc2IDE3NC4wMSA4Mi44MSA3NS4wMyA0NS4zMiAxMjIuMDUiIGZpbGw9IiM2Y2ExZmYiLz48cG9seWdvbiBwb2ludHM9IjIwMi4zMSAyOC43MyAxNDIuNjUgMCAxMDUuNTIgNDYuNTYgMjAyLjMxIDI4LjczIiBmaWxsPSIjYTFjM2ZmIi8+PHBhdGggZD0iTTEuNiwyNzJWMjI3LjIySDcuMzR2MjMuNDFsMjAuNDgtMjMuNDFoNi40bC0xNy4zOSwxOS43LDE5LDI1LjA3SDI5LjFsLTE1LjkyLTIwLjgtNS44NCw2LjY1VjI3MloiIGZpbGw9IiM0Mjc5ZjQiIHN0cm9rZT0iIzQyNzlmNCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjMuMiIvPjxwYXRoIGQ9Ik00MS42MiwyNjIuMjFWMjQwaDUuNDN2MjIuMzlhNC42Nyw0LjY3LDAsMCwwLDIuMzUsNC4xOSwxMSwxMSwwLDAsMCwxMSwwLDQuNjksNC42OSwwLDAsMCwyLjMzLTQuMTlWMjQwaDUuNDN2MjIuMTlhOS4wOCw5LjA4LDAsMCwxLTQuMSw3Ljg3LDE2LjIsMTYuMiwwLDAsMS0xOC4zNywwQTkuMDcsOS4wNywwLDAsMSw0MS42MiwyNjIuMjFaIiBmaWxsPSIjNDI3OWY0IiBzdHJva2U9IiM0Mjc5ZjQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIzLjIiLz48cGF0aCBkPSJNNzcuNDYsMjcyVjIyNGg1LjQzdjE2LjgxYTI5LjI5LDI5LjI5LDAsMCwxLDkuMzItMS43MywxMy4xLDEzLjEsMCwwLDEsNi4yLDEuNDEsMTAuNzEsMTAuNzEsMCwwLDEsNC4xOCwzLjc0LDE4LjA3LDE4LjA3LDAsMCwxLDIuMjMsNS4wNiwyMS4yNiwyMS4yNiwwLDAsMSwuNzMsNS41OHEwLDguNDMtNC4zOCwxMi43OVQ4Ny4zNSwyNzJabTUuNDMtNC44N2g0LjU1cTYuNzcsMCw5LjcyLTIuOTV0My05LjUxYTE0LjIxLDE0LjIxLDAsMCwwLTItNy41Miw2LjU1LDYuNTUsMCwwLDAtNi0zLjIyLDI0LjczLDI0LjczLDAsMCwwLTkuMjUsMS41NFoiIGZpbGw9IiM0Mjc5ZjQiIHN0cm9rZT0iIzQyNzlmNCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjMuMiIvPjxwYXRoIGQ9Ik0xMTIuMzYsMjU1Ljk0cTAtNy43MSw0LjA5LTEyLjNhMTMuNzUsMTMuNzUsMCwwLDEsMTAuOC00LjU5cTEzLjM1LDAsMTMuMzYsMTguODZIMTE3Ljc5YTEyLjMsMTIuMywwLDAsMCwyLjksNy4wN3EyLjU5LDMuMTEsNy45LDMuMWEyNC45MiwyNC45MiwwLDAsMCwxMC41NS0ydjVhMjcuNzQsMjcuNzQsMCwwLDEtOS44NiwxLjg3LDE5LjgzLDE5LjgzLDAsMCwxLTcuNy0xLjM3LDEzLjMxLDEzLjMxLDAsMCwxLTUuMjgtMy43NiwxNi4yMSwxNi4yMSwwLDAsMS0zLTUuMzhBMjAuODQsMjAuODQsMCwwLDEsMTEyLjM2LDI1NS45NFptNS42Mi0yLjEyaDE3LjI2YTE0LjkxLDE0LjkxLDAsMCwwLTIuMzctNy4xMiw2LjQ0LDYuNDQsMCwwLDAtNS42Mi0yLjc4LDguMiw4LjIsMCwwLDAtNi4yMSwyLjcyQTEyLjA3LDEyLjA3LDAsMCwwLDExOCwyNTMuODJaIiBmaWxsPSIjNDI3OWY0IiBzdHJva2U9IiM0Mjc5ZjQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIzLjIiLz48cGF0aCBkPSJNMTQ3LjMyLDI0NC44OVYyNDBoNXYtNy41OWE4LjE0LDguMTQsMCwwLDEsMi4zMS02LjA1LDcuNzksNy43OSwwLDAsMSw1LjY5LTIuMjhoNy44NlYyMjloLTVjLTIuMjEsMC0zLjY3LjQ1LTQuMzcsMS4zNHMtMS4wNiwyLjU1LTEuMDYsNVYyNDBoOC40NnY0Ljg3aC04LjQ2VjI3MmgtNS40NHYtMjcuMVoiIGZpbGw9IiMwMDI4YWEiIHN0cm9rZT0iIzAwMjhhYSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjMuMiIvPjxwYXRoIGQ9Ik0xNzUuMjYsMjcyVjIyNGg1LjQzdjQ4WiIgZmlsbD0iIzAwMjhhYSIgc3Ryb2tlPSIjMDAyOGFhIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMy4yIi8+PHBhdGggZD0iTTE5NC40MSwyNjguMDVhMTcuODYsMTcuODYsMCwxLDEsMTIuMzMsNC45QTE2LjU3LDE2LjU3LDAsMCwxLDE5NC40MSwyNjguMDVabTMuODQtMjAuNjVhMTMuMTYsMTMuMTYsMCwwLDAsMCwxNy4yLDEyLjA3LDEyLjA3LDAsMCwwLDE3LDAsMTMuMDksMTMuMDksMCwwLDAsMC0xNy4yLDEyLjA3LDEyLjA3LDAsMCwwLTE3LDBaIiBmaWxsPSIjMDAyOGFhIiBzdHJva2U9IiMwMDI4YWEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIzLjIiLz48cGF0aCBkPSJNMjI4LjQ1LDI0MGg1Ljc1bDcuMywyNS4zMkwyNDguOTMsMjQwaDUuMzZsNy4zNCwyNS4zNEwyNjksMjQwaDUuNzRMMjY0LjcsMjcyaC02LjEybC02LjgzLTI0LjU4TDI0NSwyNzJoLTYuNDdaIiBmaWxsPSIjMDAyOGFhIiBzdHJva2U9IiMwMDI4YWEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIzLjIiLz48L2c+PC9nPjwvc3ZnPg=="}}]);