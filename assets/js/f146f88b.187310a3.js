"use strict";(self.webpackChunkjwher_blog=self.webpackChunkjwher_blog||[]).push([[7565],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return s}});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),u=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=u(t.components);return r.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),c=u(a),s=n,k=c["".concat(o,".").concat(s)]||c[s]||d[s]||l;return a?r.createElement(k,i(i({ref:e},m),{},{components:a})):r.createElement(k,i({ref:e},m))}));function s(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=c;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:n,i[1]=p;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9414:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return o},default:function(){return s},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return d}});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),i=["components"],p={authors:["jwher"],description:"Nvidia GPU Architectures",slug:"nvidia-gpu-architectures",tags:["tech","hardware"],title:"Nvidia GPU \uc544\ud0a4\ud14d\ucc98"},o=void 0,u={permalink:"/posts/nvidia-gpu-architectures",editUrl:"https://github.com/jwher/jwher.github.io/posts/2022-06-22-nvidia-gpu-arch/index.md",source:"@site/posts/2022-06-22-nvidia-gpu-arch/index.md",title:"Nvidia GPU \uc544\ud0a4\ud14d\ucc98",description:"Nvidia GPU Architectures",date:"2022-06-22T00:00:00.000Z",formattedDate:"June 22, 2022",tags:[{label:"tech",permalink:"/posts/tags/tech"},{label:"hardware",permalink:"/posts/tags/hardware"}],readingTime:3.955,truncated:!0,authors:[{name:"Jeongwon Her",title:"MLOps Engineer",url:"https://github.com/jwher",imageURL:"https://github.com/jwher.png",key:"jwher"}],frontMatter:{authors:["jwher"],description:"Nvidia GPU Architectures",slug:"nvidia-gpu-architectures",tags:["tech","hardware"],title:"Nvidia GPU \uc544\ud0a4\ud14d\ucc98"},prevItem:{title:"\uc774\ud56d\uc815\ub9ac - \u03c0\uac12\uc744 \uad6c\ud558\ub294 \ubc95",permalink:"/posts/binomial-theorem"},nextItem:{title:"Pytorch in M1",permalink:"/posts/pytorch-in-m1"}},m={authorsImageUrls:[void 0]},d=[{value:"Nvidia Architectures                                                                                                                                                                                 |",id:"nvidia-architectures---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",level:2},{value:"Streaming Multiprocessor",id:"streaming-multiprocessor",level:3},{value:"Streaming Processor",id:"streaming-processor",level:3},{value:"Special Function Unit",id:"special-function-unit",level:3},{value:"Shared Memory",id:"shared-memory",level:3},{value:"Tensor Core",id:"tensor-core",level:3},{value:"Single Instruction Multiple Threading",id:"single-instruction-multiple-threading",level:3},{value:"FLoat point Operations Per Seconds",id:"float-point-operations-per-seconds",level:3},{value:"Compute Capability",id:"compute-capability",level:2},{value:"References",id:"references",level:2}],c={toc:d};function s(t){var e=t.components,p=(0,n.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,p,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/posts/nvidia-gpu-architectures"},(0,l.kt)("img",{alt:"gpu",src:a(3276).Z,width:"1000",height:"615"})),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("em",{parentName:"p"},"Graphic Processing Unit"),"  "),(0,l.kt)("p",null,"\uc544\uc9c1 \uc791\uc131\uc911\uc785\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"nvidia-architectures---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------"},"Nvidia Architectures                                                                                                                                                                                 |"),(0,l.kt)("h3",{id:"streaming-multiprocessor"},"Streaming Multiprocessor"),(0,l.kt)("h3",{id:"streaming-processor"},"Streaming Processor"),(0,l.kt)("p",null,"Compute Unified Device Architecture. CUDA Core\n\ub17c\ub9ac \uc218\ud559 \uc5f0\uc0b0(Multiply add Divide)"),(0,l.kt)("h3",{id:"special-function-unit"},"Special Function Unit"),(0,l.kt)("p",null,"\ucd08\uc6d4\ud568\uc218, \ubd80\ub3d9\uc18c\uc218\uc810 \uacf1\uc148\uae30"),(0,l.kt)("h3",{id:"shared-memory"},"Shared Memory"),(0,l.kt)("h3",{id:"tensor-core"},"Tensor Core"),(0,l.kt)("p",null,"V100"),(0,l.kt)("h3",{id:"single-instruction-multiple-threading"},"Single Instruction Multiple Threading"),(0,l.kt)("p",null,"Single Instruction Multiple Data"),(0,l.kt)("h3",{id:"float-point-operations-per-seconds"},"FLoat point Operations Per Seconds"),(0,l.kt)("p",null,"FLOPS"),(0,l.kt)("h2",{id:"compute-capability"},"Compute Capability"),(0,l.kt)("p",null,"\uc7a5\uce58\uc758 ",(0,l.kt)("em",{parentName:"p"},"Compute Capability"),"\ub294 \ubc84\uc804 \ub118\ubc84\ub85c \ud45c\ud604\ub429\ub2c8\ub2e4.\n\uc774 \ubc84\uc804 \ub118\ubc84\ub294 GPU \ud558\ub4dc\uc6e8\uc5b4\uac00 \uc5b4\ub5a4 \uae30\ub2a5\uc744 \uc9c0\uc6d0\ud558\ub294\uc9c0 \uc2dd\ubcc4\ud558\uace0,\n\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc5b4\ub5a4 \ud558\ub4dc\uc6e8\uc5b4 \uae30\ub2a5\uacfc \uba85\ub839\uc5b4\uac00 \ud604\uc7ac GPU\uc5d0\uc11c \uac00\ub2a5\ud55c\uc9c0 \ub7f0\ud0c0\uc784\uc5d0 \uacb0\uc815\ud560 \uc218 \uc788\uac8c \ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"Compute Capability\ub294 major \ub9ac\ubc84\uc804 \ubc88\ud638\uc640 minor \ub9ac\ube44\uc804 \ubc88\ud638\ub97c \ubd99\uc5ec \ud45c\uc2dc\ud569\ub2c8\ub2e4.\n\uc7a5\uce58\ub294 \uac19\uc740 \ucf54\uc5b4 \uc544\ud0a4\ud14d\ucc98\ub07c\ub9ac \uac19\uc740 major \ub9ac\ube44\uc804 \ubc88\ud638\ub97c \uacf5\uc720\ud569\ub2c8\ub2e4.\n\uc608\ub97c\ub4e4\uc5b4, major \ub9ac\ube44\uc804 \ubc88\ud638 9\ub294 NVIDIA Hopper GPU\ub97c \ub098\ud0c0\ub0c5\ub2c8\ub2e4."),(0,l.kt)("p",null,"minor \ub9ac\ube44\uc804 \ubc88\ud638\ub294 \uc0c8 \uae30\ub2a5\uc774 \ud3ec\ud568\ub418\uc5b4\uc788\uc744 \ucf54\uc5b4 \uc544\ud0a4\ud14d\ucc98\uc5d0 \uae30\ub2a5 \uc5c5\ub370\uc774\ud2b8\uc5d0 \ub300\uc751\ud569\ub2c8\ub2e4.\n",(0,l.kt)("em",{parentName:"p"},"Turing"),"\uc740 Compute Capability 7.5\uc5d0 \ub300\uc751\ud569\ub2c8\ub2e4. \uc774\ub294 \ubcfc\ud0c0 \uc774\ud0a4\ud14d\ucc98\uc758 \uc5c5\ub370\uc774\ud2b8\ub97c \uae30\ubc18\uc73c\ub85c \ud55c \uac83\uc785\ub2c8\ub2e4."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Kepler cards (CUDA 5 until CUDA 10)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"compute 30"),(0,l.kt)("td",{parentName:"tr",align:null},"generic Kepler, GeForce 700, GT-730")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"compute 35"),(0,l.kt)("td",{parentName:"tr",align:null},"Tesla K40")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"compute_37"),(0,l.kt)("td",{parentName:"tr",align:null},"Tesla K80")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Maxwell cards (CUDA 6 until CUDA 11)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"compute_50"),(0,l.kt)("td",{parentName:"tr",align:null},"Quadro RTX 4000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"compute_52"),(0,l.kt)("td",{parentName:"tr",align:null},"Quadro M6000 , GeForce 900, GTX-970, GTX-980, GTX Titan X")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"compute_53"),(0,l.kt)("td",{parentName:"tr",align:null},"Tegra (Jetson) TX1 / Tegra X1, Drive CX, Drive PX, Jetson Nano")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Pascal (CUDA 8 and later)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"compute_60"),(0,l.kt)("td",{parentName:"tr",align:null},"Quadro GP100, Tesla P100, DGX-1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"compute_61"),(0,l.kt)("td",{parentName:"tr",align:null},"GTX 1080, GTX 1070, GTX 1060, GTX 1050, GTX 1030 (GP108), GT 1010 (GP108) Titan Xp, Tesla P40, Tesla P4, Discrete GPU on the NVIDIA Drive PX2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"compute_62"),(0,l.kt)("td",{parentName:"tr",align:null},"Integrated GPU on the NVIDIA Drive PX2, Tegra (Jetson) TX2")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Volta (CUDA 9 and later)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"compute_70"),(0,l.kt)("td",{parentName:"tr",align:null},"DGX-1 with Volta, Tesla V100, GTX 1180 (GV104), Titan V, Quadro GV100")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"compute_72"),(0,l.kt)("td",{parentName:"tr",align:null},"Jetson AGX Xavier, Drive AGX Pegasus, Xavier NX")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Turing (CUDA 10 and later)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"compute_75"),(0,l.kt)("td",{parentName:"tr",align:null},"GTX/RTX Turing \u2013 GTX 1660 Ti, RTX 2060, RTX 2070, RTX 2080, Titan RTX, Quadro RTX 4000, Quadro RTX 5000, Quadro RTX 6000, Quadro RTX 8000, Quadro T1000/T2000, Tesla T4")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Ampere (CUDA 11.1 and later)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"compute_80"),(0,l.kt)("td",{parentName:"tr",align:null},"NVIDIA A100 (the name \u201cTesla\u201d has been dropped \u2013 GA100), NVIDIA DGX-A100")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"compute_86"),(0,l.kt)("td",{parentName:"tr",align:null},"Tesla GA10x cards, RTX Ampere \u2013 RTX 3080, GA102 \u2013 RTX 3090, RTX A2000, A3000, A4000, A5000, A6000, NVIDIA A40, GA106 \u2013 RTX 3060, GA104 \u2013 RTX 3070, GA107 \u2013 RTX 3050, Quadro A10, Quadro A16, Quadro A40")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Hopper (CUDA 12 ","[planned]"," and later)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"compute_90"),(0,l.kt)("td",{parentName:"tr",align:null},"NVIDIA H100 (GH100)")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Compute Capability \ubc84\uc804\uacfc CUDA \ubc84\uc804\uc744 \ud5f7\uac08\ub9ac\uc9c0 \ub9d9\uc2dc\ub2e4. CUDA \ubc84\uc804\uc740 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \ud50c\ub7ab\ud3fc\uc785\ub2c8\ub2e4.\n\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uac1c\ubc1c\uc790\ub294 \uac1c\ubc1c\ub418\uc9c0 \uc54a\uc740 \uc544\ud0a4\ud14d\ucc98\ub97c \ud3ec\ud568\ud574 \uc5ec\ub7ec \uc138\ub300\uc758 GPU \uc544\ud0a4\ud14d\ucc98\ub97c \uc2e4\ud589\uc2dc\ud0a4\uae30 \uc704\ud574 CUDA \ud50c\ub7ab\ud3fc\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4.\n\uc0c8 \ubc84\uc804\uc758 CUDA\ub294 \uc0c8 GPU \uc544\ud0a4\ud14d\ucc98\uc5d0 \uae30\ubcf8 \uc9c0\uc6d0\uc744 \ud3ec\ud568\ud558\ub294 \uacbd\uc6b0\uac00 \ub9ce\uc9c0\ub9cc, \uc77c\ubc18\uc801\uc73c\ub85c \ud558\ub4dc\uc6e8\uc5b4 \uc138\ub300\uc640 \ub3c5\ub9bd\uc801\uc778 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uae30\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Tesla"),"\uc640 ",(0,l.kt)("em",{parentName:"p"},"Fermi")," \uc544\ud0a4\ud14d\ucc98\ub294 \uac01 CUDA 7.0, CUDA 9.0\uc5d0\uc11c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"references"},"References"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://89douner.tistory.com/159"},"NVIDIA GPU \uc544\ud0a4\ud14d\ucc98"),"\n",(0,l.kt)("a",{parentName:"p",href:"https://developer.nvidia.com/cuda-gpus"},"[NVIDIA]Cuda GPUS"),"\n",(0,l.kt)("a",{parentName:"p",href:"https://developer.nvidia.com/cuda-legacy-gpus"},"[NVIDIA]Cuda Legacy GPUS"),"\n",(0,l.kt)("a",{parentName:"p",href:"https://docs.nvidia.com/cuda/cuda-c-programming-guide/index.html#compute-capability"},"[NVIDIA]Compute Capabitity"),"\n",(0,l.kt)("a",{parentName:"p",href:"https://docs.nvidia.com/cuda/cuda-c-programming-guide/index.html#compute-capabilities"},"[NVIDIA]Compute Capabitities")))}s.isMDXComponent=!0},3276:function(t,e,a){e.Z=a.p+"assets/images/gpu-d6ed0bcad033de47ded4f4aa6fd18eed.jpeg"}}]);