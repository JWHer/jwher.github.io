"use strict";(self.webpackChunkjwher_blog=self.webpackChunkjwher_blog||[]).push([[1868],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(a),h=r,k=m["".concat(o,".").concat(h)]||m[h]||u[h]||p;return a?n.createElement(k,l(l({ref:t},c),{},{components:a})):n.createElement(k,l({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,l=new Array(p);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<p;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},42214:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var n=a(87462),r=a(63366),p=(a(67294),a(3905)),l=["components"],i={authors:["jwher"],description:"Alphapose \ub17c\ubb38 \ub9ac\ubdf0\uc640 \uc0ac\uc6a9",slug:"alphapose",tags:["paper","ml"],title:"Alphapose \ub17c\ubb38 \ub9ac\ubdf0\uc640 \uc0ac\uc6a9"},o=void 0,s={permalink:"/posts/alphapose",editUrl:"https://github.com/jwher/jwher.github.io/posts/2021-05-24-alphapose/index.md",source:"@site/posts/2021-05-24-alphapose/index.md",title:"Alphapose \ub17c\ubb38 \ub9ac\ubdf0\uc640 \uc0ac\uc6a9",description:"Alphapose \ub17c\ubb38 \ub9ac\ubdf0\uc640 \uc0ac\uc6a9",date:"2021-05-24T00:00:00.000Z",formattedDate:"May 24, 2021",tags:[{label:"paper",permalink:"/posts/tags/paper"},{label:"ml",permalink:"/posts/tags/ml"}],readingTime:8.585,truncated:!0,authors:[{name:"Jeongwon Her",title:"MLOps Engineer",url:"https://github.com/jwher",imageURL:"https://github.com/jwher.png",key:"jwher"}],frontMatter:{authors:["jwher"],description:"Alphapose \ub17c\ubb38 \ub9ac\ubdf0\uc640 \uc0ac\uc6a9",slug:"alphapose",tags:["paper","ml"],title:"Alphapose \ub17c\ubb38 \ub9ac\ubdf0\uc640 \uc0ac\uc6a9"},prevItem:{title:"\ub098\uc5d0\uac8c \ud544\uc694\ud55c \uc5f0\uc7ac\uc5d0 \ub300\ud574",permalink:"/posts/blog-essay"},nextItem:{title:"\uc9c0\ud0ac \ube14\ub85c\uadf8 \uc5c5\ub370\uc774\ud2b8",permalink:"/posts/update-blog"}},c={authorsImageUrls:[void 0]},u=[{value:"Computer Vision",id:"computer-vision",level:2},{value:"\uccb4\ud5d8\ud574\ubcf4\uc790",id:"\uccb4\ud5d8\ud574\ubcf4\uc790",level:3},{value:"Alphapose",id:"alphapose",level:2},{value:"\uc65c \ube60\ub978\ub370?",id:"\uc65c-\ube60\ub978\ub370",level:3},{value:"Paper",id:"paper",level:3},{value:"SSTN",id:"sstn",level:4},{value:"NMS",id:"nms",level:4},{value:"PGPG",id:"pgpg",level:4},{value:"Ablation Studies",id:"ablation-studies",level:4},{value:"Failure cases",id:"failure-cases",level:4},{value:"\uc0ac\uc6a9\ud558\uae30",id:"\uc0ac\uc6a9\ud558\uae30",level:2},{value:"Reference",id:"reference",level:2}],m={toc:u};function h(e){var t=e.components,i=(0,r.Z)(e,l);return(0,p.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"alphapose-logo",src:a(36683).Z,width:"832",height:"563"}),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("em",{parentName:"p"},"Regional Multi-Person pose Estimation"),"  "),(0,p.kt)("h2",{id:"computer-vision"},"Computer Vision"),(0,p.kt)("p",null,"\ucef4\ud4e8\ud130 \ube44\uc804\uc740 \uae30\uacc4\uc758 \uc2dc\uac01\uc801\uc778 \ubd80\ubd84\uc744 \uc5f0\uad6c\ud569\ub2c8\ub2e4. \ubc94\uc704\ub97c \uc881\ud600 \ubcf4\uba74, \uc0ac\ub78c\uc758 \uc2dc\uac01\uc744 \uc0ac\uc6a9\ud574\uc57c \ud558\ub294 \uc77c\uc744\n\ucef4\ud4e8\ud130\uac00 \uc218\ud589\ud560 \uc218 \uc788\ub3c4\ub85d \ub9cc\ub4dc\ub294 \uac83\uc744 \ubaa9\ud45c\ub85c \ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.  "),(0,p.kt)("p",null,"\ud55c\uad6d\uc5d0\uc11c \uc778\uacf5\uc9c0\ub2a5\uc774 \ub300\uc911\uc801\uc778 \uad00\uc2ec\uc744 \ub04c\uac8c \ub41c \uac83\uc740 \ub2e8\uc5f0 ",(0,p.kt)("a",{parentName:"p",href:"https://ko.wikipedia.org/wiki/%EC%95%8C%ED%8C%8C%EA%B3%A0"},"Alpha GO"),"\n\uc774\ud6c4\uaca0\uc9c0\ub9cc, \ud559\uc790\ub4e4\uc774 \ub2e4\uc2dc \uc778\uacf5\uc9c0\ub2a5(\uc2e0\uacbd\ub9dd)\uc5d0 \uad00\uc2ec\uc744 \uac16\uac8c \ub41c \uac83\uc740 \ucef4\ud4e8\ud130 \ube44\uc804\uc758 ",(0,p.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/AlexNet"},"AlexNet"),"\uc785\ub2c8\ub2e4.  "),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"alexnet",src:a(61662).Z,width:"248",height:"203"}),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("em",{parentName:"p"},"AlexNet \uc2e0\uacbd\ub9dd\uc5d0 \ub300\ud574 \uacf5\ubd80\ud560\ub54c \ud55c\ubc88\uc529 \ubd24\uc744 \uc774\ubbf8\uc9c0"),"  "),(0,p.kt)("p",null,"\ucef4\ud4e8\ud130 \ube44\uc804\uc740 \ub2e4\uc2dc \ud558\uc704\uc5d0 \ub9ce\uc740 \uc601\uc5ed\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 Alex Net\uc740 Object Detection\uc5d0 \ud574\ub2f9\ud569\ub2c8\ub2e4.\n\uc5ec\uae30\uc5d0\uc11c \ub2e4\ub8e8\ub294 Alphapose\ub294 Pose Estimation\uc744 \uc704\ud55c Keypoint Detection\uc5d0 \ud574\ub2f9\ud569\ub2c8\ub2e4.\n(Pose\ub97c '\uc790\uc138'\ub85c \ubc88\uc5ed\ud560 \uc218 \uc788\uaca0\uc9c0\ub9cc, \uc6a9\uc5b4\uc758 \ud63c\ub3d9\uc744 \ud53c\ud574 '\ud3ec\uc988'\ub77c\uace0 \ubd80\ub974\uaca0\uc2b5\ub2c8\ub2e4)"),(0,p.kt)("h3",{id:"\uccb4\ud5d8\ud574\ubcf4\uc790"},"\uccb4\ud5d8\ud574\ubcf4\uc790"),(0,p.kt)("p",null,"\ucef4\ud4e8\ud130 \ube44\uc804\uc744 \ucc98\uc74c \uc811\ud558\ub294 \uc0ac\ub78c\uc774\ub77c\uba74 \uac10\uc774 \uc798 \uc548\uc7a1\ud790 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,p.kt)("br",{parentName:"p"}),"\n","\uad6c\uae00 ",(0,p.kt)("a",{parentName:"p",href:"https://experiments.withgoogle.com/collection/ai/move-mirror/view"},"Move Mirror")," \ub9c1\ud06c\ub97c \ud1b5\ud574 Pose Estimation\uc774 \ubb54\uc9c0 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \uccb4\ud5d8\ud574 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n",(0,p.kt)("a",{parentName:"p",href:"https://experiments.withgoogle.com/collection/ai/move-mirror/view"},"Move Mirror"),"\ub294 webcam\uc73c\ub85c \ub4e4\uc5b4\uc628 \uc0ac\uc9c4\uc744 ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/tensorflow/tfjs"},"Javascript library"),"\ub85c \ud3ec\uc988\ub97c \uc778\uc2dd\ud558\uace0,\n\uac00\uc7a5 \uc720\uc0ac\ud55c \uc0ac\uc9c4\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4. "),(0,p.kt)("br",null),(0,p.kt)("h2",{id:"alphapose"},"Alphapose"),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"\uc65c Alphapose\uc778\ub370?")),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"alphapose_17",src:a(43768).Z,width:"320",height:"180"})),(0,p.kt)("p",null,"\ub525\ub7ec\ub2dd \ubaa8\ub378\uc5d0\uc11c ",(0,p.kt)("em",{parentName:"p"},"\uc18d\ub3c4"),"\uc640 ",(0,p.kt)("em",{parentName:"p"},"\uc815\ud655\ub3c4"),"\ub294 Trade Off \uad00\uacc4\uc785\ub2c8\ub2e4. \ubaa8\ub378\uc774 \ucee4\uc9c0\uace0 \ub808\uc774\uc5b4\uac00 \ub9ce\uc544\uc9c8\uc218\ub85d \uc815\ud655\ud574\uc9c0\uc9c0\ub9cc, \uc18d\ub3c4\ub294 \ub290\ub824\uc9c0\uc8e0. \ud558\uc9c0\ub9cc \ub300\ubd80\ubd84 \ucd9c\ud310\ub418\ub294 \ub17c\ubb38\uc740 ",(0,p.kt)("em",{parentName:"p"},"\uc815\ud655\ub3c4"),"\uc5d0 \ucd08\uc810\uc744 \ub450\uace0 \uc788\uc2b5\ub2c8\ub2e4.\n\ud558\uc9c0\ub9cc, \ud604\uc2e4\uc5d0\uc11c \ub4f1\uc7a5\ud558\ub294 vision \ubb38\uc81c\ub294, \ub3d9\uc601\uc0c1\uacfc \uc2e4\uc2dc\uac04 \uc2a4\ud2b8\ub9ac\ubc0d\uc744 \ucc98\ub9ac\ud574\uc57c \ub418\uace0 ",(0,p.kt)("em",{parentName:"p"},"\uc18d\ub3c4")," \uc5d0 \uc911\uc810\uc744 \uc900 \ubaa8\ub378\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://openaccess.thecvf.com/CVPR2017"},"CVPR 2017")," Carnegie Mellon University\uc5d0\uc11c ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/CMU-Perceptual-Computing-Lab/openpose"},"OpenPose"),"\ub97c \ubc1c\ud45c\ud588\uc2b5\ub2c8\ub2e4.\n",(0,p.kt)("a",{parentName:"p",href:"https://github.com/MVIG-SJTU/AlphaPose"},"Alphapose"),"\ub294 \uc870\uae08 \ub4a4\uc778 ",(0,p.kt)("a",{parentName:"p",href:"https://openaccess.thecvf.com/ICCV2017"},"ICCV 2017"),"\uc5d0 \ub098\uc654\uace0, OpenPose\ubcf4\ub2e4 \ub6f0\uc5b4\ub09c \uc131\ub2a5\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4. Alphapose\ub294 pytorch \uae30\ubc18\uc73c\ub85c \uc791\uc131\ub418\uc5c8\uc2b5\ub2c8\ub2e4.\n\ub9c8\uce68 \uc5c5\ubb34\uc5d0\uc11c\ub3c4 pytorch \uae30\ubc18 \ubaa8\ub378\ub85c \ud1b5\uc77c\ud558\uae30\ub85c \ud588\uace0, \uc0c1\uc5c5\uc6a9 \ub77c\uc774\uc120\uc2a4\ub3c4 alphapose\uac00 \ub354 \uc2f8 \uc120\ud0dd\ud558\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,p.kt)("p",null,"\ub458 \ub2e4 \ud604\uc7ac(2021) \uae30\uc900\uc73c\ub85c \uad49\uc7a5\ud788 \uc624\ub798\ub418\uc5c8\uc73c\ub098, Alphapose\ub294 ",(0,p.kt)("a",{parentName:"p",href:"http://human-pose.mpi-inf.mpg.de/"},"MPII")," \ub370\uc774\ud130 \uc14b\uc5d0\uc11c \uc544\uc9c1\ub3c4 1\uc704\ub97c \uae30\ub85d\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. ",(0,p.kt)("a",{parentName:"p",href:"https://cocodataset.org/#home"},"COCO")," \ub370\uc774\ud130 \uc14b \uc5d0\uc11c\ub3c4 pytorch \uae30\ubc18 \ubaa8\ub378 \uc911\uc5d0 2\ubc88\uc9f8\ub85c \ub6f0\uc5b4\ub09c \uc21c\uc704\ub97c \uae30\ub85d\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.",(0,p.kt)("br",{parentName:"p"}),"\n","(\uc0ac\uc6a9\ud574 \ubcf4\uc9c4 \uc54a\uc558\uc73c\ub098 2019\ub144\uc5d0\ub294 MXNet \ubc84\uc804\ub3c4 \ub098\uc654\uc2b5\ub2c8\ub2e4)  "),(0,p.kt)("br",null),(0,p.kt)("h3",{id:"\uc65c-\ube60\ub978\ub370"},"\uc65c \ube60\ub978\ub370?"),(0,p.kt)("p",null,"Alphapose\ub294 backbone\uc73c\ub85c ",(0,p.kt)("a",{parentName:"p",href:"https://pjreddie.com/media/files/papers/YOLOv3.pdf"},"YOLOv3"),"\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4(github master branch \uae30\uc900).",(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("img",{alt:"alphapose-yolo",src:a(9255).Z,width:"1006",height:"625"}),"\n",(0,p.kt)("em",{parentName:"p"},"0.5 IOU\uc5d0\uc11c \uc18d\ub3c4/\uc815\ud655\ub3c4 tradeoff")),(0,p.kt)("p",null,"\ub17c\ubb38\uc5d0\uc11c\ub294 ResNet backbone\uc778 RetinaNet \ubcf4\ub2e4 3\ubc30 \ube60\ub978 ",(0,p.kt)("em",{parentName:"p"},"\uc18d\ub3c4"),"\ub97c \ubcf4\uc600\ub2e4\uace0 \uc18c\uac1c\ud569\ub2c8\ub2e4.\n",(0,p.kt)("em",{parentName:"p"},"\uc815\ud655\ub3c4"),"\uc5d0\uc11c\ub3c4 RetinaNet\ubcf4\ub2e4 \uc624\ud788\ub824 \uc870\uae08 \ub098\uc74c\uc744 \ubcf4\uc5ec\uc8fc\uace0 \uc788\uc2b5\ub2c8\ub2e4.\n\ud604\uc7ac(21.05) \ucd5c\uc2e0 \ubaa8\ub378\uc778 HRNet\uacfc \uc131\ub2a5\uc744 \ube44\uad50\ud574 \ubcf4\uc9c0 \ubabb\ud574 \uac00\uc7a5 \uc88b\uc740\uc9c0\ub294 \ubaa8\ub974\uaca0\uc2b5\ub2c8\ub2e4\ub9cc, \uc0c1\ub2f9\ud788 \ube60\ub974\uace0 \uc815\ud655\ud568\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n(YOLO\uc758 backbone\uc778 Darknet\uc740 \ub2e4\ub978 \ud3ec\uc2a4\ud2b8\uc5d0\uc11c \ub2e4\ub8e8\uaca0\uc2b5\ub2c8\ub2e4)"),(0,p.kt)("br",null),(0,p.kt)("h3",{id:"paper"},"Paper"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://openaccess.thecvf.com/content_iccv_2017/html/Fang_RMPE_Regional_Multi-Person_ICCV_2017_paper.html"},"\uc6d0\ubb38")),(0,p.kt)("p",null,"\ucd5c\uc2e0 Human detector\uc758 \ub4f1\uc7a5\uc73c\ub85c Regional Multi-Person pose Estimation\uc758 \uc131\ub2a5\uc740 \ud5a5\uc0c1\ub418\uc5c8\uc73c\ub098,\nlocalization\uacfc recognition\uc758 \uc791\uc740 \uc624\ub958\ub294 \ud53c\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\nAlphapose\ub294 two-step \ubaa8\ub378(bounding box->pose estimation)\ub85c\uc368 bounding box\uc758 \uc815\ud655\ub3c4\uac00 \ud488\uc9c8\uc744 \uc88c\uc6b0\ud569\ub2c8\ub2e4.\n\ub530\ub77c\uc11c \uc774 \ub17c\ubb38\uc740 \ubd80\uc815\ud655\ud55c bbx(bounding box)\ub97c \uc904\uc774\uae30 \uc704\ud574 \uc138 \ud56d\ubaa9\uc744 \uc81c\uc548\ud569\ub2c8\ub2e4."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"#sstn"},"SSTN"),": Symmetric Spatial Transformer Network"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"#nms"},"NMS"),": Parametric Pose Non-Maximum Suppression"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"#pgpg"},"PGPG"),": Pose-Guided Proposals Generator")),(0,p.kt)("p",null,"\uc774 \ubc29\ubc95\uc73c\ub85c \ubd80\uc815\ud655\ud558\uace0 \uc911\ucca9\ub41c bbox\ub97c \uc904\uc5ec MPII \ub370\uc774\ud130 \uc14b\uc5d0\uc11c 76.7 mAP \uc131\ub2a5\uc744 \uae30\ub85d\ud588\uc2b5\ub2c8\ub2e4."),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"alphapose-architecture",src:a(95576).Z,width:"742",height:"234"}),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("em",{parentName:"p"},"RMPE \ud504\ub808\uc784\uc6cc\ud06c")),(0,p.kt)("br",null),(0,p.kt)("h4",{id:"sstn"},"SSTN"),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"sstn",src:a(33217).Z,width:"602",height:"239"})),(0,p.kt)("p",null,"STN(Spatial Transformer Network)\uc774 \uc88b\uc740 \uc0ac\ub78c \uc601\uc5ed\uc744 \ucd94\ucd9c\ud558\ub3c4\ub85d, \ud559\uc2b5 \ub2e8\uacc4\uc5d0\uc11c Parallel SPPE(Single Person Pose Estimator)\ub97c \ub461\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc5ec\uae30\uc11c \uc0ac\uc6a9\ub41c SPPE\ub294 SDTN\uc774 \ube60\uc838\uc788\uc2b5\ub2c8\ub2e4.\n\ud559\uc2b5\ud560 \ub54c parallel SPPE\uc758 \uac00\uc911\uce58(weight)\ub97c \uace0\uc815\ud558\uace0 \uc9c1\uc811 \ucc38(truth) \ud3ec\uc988\uc640 \ube44\uad50\ud574 STN\uc744 \uc5c5\ub370\uc774\ud2b8 \ud569\ub2c8\ub2e4.\n\uc774\ub54c, \uc815\ud655\ud55c \uc704\uce58(center-located)\uc5d0 \uc788\uc9c0 \uc54a\uc73c\uba74 STN\uc5d0 \ud070 \uc624\ub958\uac00 \uc804\ud30c\ub418\uc5b4 \uc131\ub2a5\uc774 \ud5a5\uc0c1\ub429\ub2c8\ub2e4."),(0,p.kt)("p",null,"\uc131\ub2a5 \ud5a5\uc0c1\uce58\ub294 ",(0,p.kt)("a",{parentName:"p",href:"#ablation-studies"},"ablation studies\uc758 a"),"\uc5d0\uc11c \ube44\uad50\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. "),(0,p.kt)("br",null),(0,p.kt)("h4",{id:"nms"},"NMS"),(0,p.kt)("p",null,"\uac00\uc7a5 \uc815\ud655\ud55c(confident) \ud3ec\uc988\ub97c \ub808\ud37c\ub7f0\uc2a4\ub85c \uc120\ud0dd\ud569\ub2c8\ub2e4.\n\uadf8\ub9ac\uace0 \ub108\ubb34 \uac00\uae4c\uc6b4 \ud3ec\uc988\ub294 elimination criterion(pose similarity)\uc744 \uc0ac\uc6a9\ud574 \uc9c0\uc6c1\ub2c8\ub2e4.\n\uc774\ub54c \ud3ec\uc988 \uac70\ub9ac(pose distance)\ub97c \uc9c0\ud45c(metric)\ub85c \uc0ac\uc6a9\ud574 \uacc4\uc0b0\ud558\uac8c \ub429\ub2c8\ub2e4."),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"ksim",src:a(9210).Z,width:"580",height:"154"}),"\n",(0,p.kt)("img",{alt:"hsim",src:a(22875).Z,width:"518",height:"102"}),"\n",(0,p.kt)("img",{alt:"distance",src:a(68059).Z,width:"632",height:"58"})),(0,p.kt)("p",null,"\ud3ec\uc988i\uc640 \ud3ec\uc988j\uac04 distance function\uc740, \ud3ec\uc988\uac04 \uba87\uac1c\uc758 \uad00\uc808(joint)\uc774 \uc77c\uce58\ud558\ub294\uc9c0 \uc758\ub9c8\ud558\ub294 soft matching function ",(0,p.kt)("strong",{parentName:"p"},"Ksim"),"\uacfc, \ubd80\ubd84\uac04\uc758 \uacf5\uac04\uac70\ub9ac\uc778 ",(0,p.kt)("strong",{parentName:"p"},"Hsim"),"\uc758 \ud569\uc73c\ub85c \uc774\ub8e8\uc5b4\uc9d1\ub2c8\ub2e4.\n\uc5ec\uae30\uc11c \u03bb\ub294 \ub450 \uac70\ub9ac\uac04 weight balancing \uc785\ub2c8\ub2e4."),(0,p.kt)("p",null,"\uc131\ub2a5 \ud5a5\uc0c1\uce58\ub294 ",(0,p.kt)("a",{parentName:"p",href:"#ablation-studies"},"ablation studies\uc758 c"),"\uc5d0\uc11c \ube44\uad50\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. "),(0,p.kt)("br",null),(0,p.kt)("h4",{id:"pgpg"},"PGPG"),(0,p.kt)("p",null,"two-stage \ubaa8\ub378\uc5d0\uc11c \ub370\uc774\ud130 augmentation\uc740 SSTN+SSPE\uac00 \ubd88\uc644\uc804\ud55c \uc0ac\ub78c\uc758 \uc758\ub3c4\uc5d0 \uc801\uc751\ud558\uac8c \ub9cc\ub4e4\uc5b4\uc57c \ud569\ub2c8\ub2e4.\n\uc815\ub2f5(ground truth) bbx\uc640 \uac10\uc9c0\ub41c(detected) bbx\uc758 offset\uc740 \ud3ec\uc988\ub9c8\ub2e4 \ub2e4\ub985\ub2c8\ub2e4. \uc774 \ubd84\ud3ec\ub97c \ubaa8\ub378\ub9c1 \ud560 \uc218 \uc788\uc73c\uba74 \uc0ac\ub78c\uc774 \ub9cc\ub4e0(generated by the human detector) \uac83\uacfc \ube44\uc2b7\ud55c \uc0d8\ud50c\uc744 \ub9ce\uc774 \uc5bb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("p",null,"\uc131\ub2a5 \ud5a5\uc0c1\uce58\ub294 ",(0,p.kt)("a",{parentName:"p",href:"#ablation-studies"},"ablation studies\uc758 b"),"\uc5d0\uc11c \ube44\uad50\ud569\ub2c8\ub2e4."),(0,p.kt)("br",null),(0,p.kt)("h4",{id:"ablation-studies"},"Ablation Studies"),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"ablation",src:a(22560).Z,width:"1012",height:"337"}),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("em",{parentName:"p"},"w/o\ub294 without(x)\uc758 \uc758\ubbf8\uc785\ub2c8\ub2e4")),(0,p.kt)("br",null),(0,p.kt)("h4",{id:"failure-cases"},"Failure cases"),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"failure",src:a(68435).Z,width:"602",height:"86"}),"  "),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"SPPE\ub294 \ud76c\uc18c\ud558\uac8c \ubc1c\uc0dd\ud558\ub294 \ud2b9\uc774\ud55c \uc790\uc138\uc5d0\uc11c \uc2e4\ud328\ud569\ub2c8\ub2e4"),(0,p.kt)("li",{parentName:"ol"},"\ub108\ubb34 \uacb9\uce58\ub294 \uc0ac\ub78c\uc744 \uad6c\ubd84\ud558\uc9c0 \ubabb\ud569\ub2c8\ub2e4"),(0,p.kt)("li",{parentName:"ol"},"\uc0ac\ub78c \uc778\uc2dd(detect)\uc744 \uc2e4\ud328\ud558\uba74 \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4"),(0,p.kt)("li",{parentName:"ol"},"\ubc18\ub300\ub85c \uc0ac\ub78c\uacfc \ube44\uc2b7\ud55c \uc0ac\ubb3c\uc744 \uc624\uc778\uc2dd \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4")),(0,p.kt)("br",null),(0,p.kt)("p",null,"\ub9ac\ubdf0\ub97c \ud558\uace0 \ubcf4\ub2c8 \uc548\ud0c0\uae5d\uac8c\ub3c4 paper\uc5d0\ub294 \uc18d\ub3c4 \uad00\ub828 \uc774\uc57c\uae30\uac00 \uc5c6\uc5c8\uc2b5\ub2c8\ub2e4.\n\uc815\ud655\ub3c4\ub294 \ub192\uc544\uc84c\uc73c\ub098, SPPE\ub97c \ubd80\ucc29\ud588\uc744 \ub54c \uc5b4\ub290\uc815\ub3c4 \uc18d\ub3c4\uac00 \ub098\uc624\ub294\uc9c0 \uc815\ub7c9\uc801\uc73c\ub85c \uce21\uc815\ud574 \ubcf4\uace0 \uc2f6\uc2b5\ub2c8\ub2e4.\n\uae30\ud68c\uac00 \ub418\uba74 \uc18d\ub3c4\ub97c \uce21\uc815\ud574 \ube44\uad50\ud574 \ubcf4\uace0 \uc2f6\uc2b5\ub2c8\ub2e4. "),(0,p.kt)("br",null),(0,p.kt)("h2",{id:"\uc0ac\uc6a9\ud558\uae30"},"\uc0ac\uc6a9\ud558\uae30"),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"alphapose",src:a(50955).Z,width:"1280",height:"720"})),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"cuda 11.0"),(0,p.kt)("li",{parentName:"ul"},"cudnn 8.0"),(0,p.kt)("li",{parentName:"ul"},"pytorch 1.7.0")),(0,p.kt)("p",null,"\ub3c4\ucee4 \uc774\ubbf8\uc9c0\ub85c \ube4c\ub4dc\ud558\uc5ec docker hub\uc5d0 \ub4f1\ub85d\ud558\uc600\uc2b5\ub2c8\ub2e4. \uac04\ub2e8\ud558\uac8c pull \ud574\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker pull jwher/alphapose:v1\n\n$ conda activate alphapose\n")),(0,p.kt)("p",null,"\uc790\uc138\ud55c demo inference \ucf54\ub4dc\ub294 \ub098\uc911\uc5d0 \uc791\uc131\ud558\uaca0\uc2b5\ub2c8\ub2e4..."),(0,p.kt)("br",null),(0,p.kt)("h2",{id:"reference"},"Reference"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://openaccess.thecvf.com/menu"},"Computer Vision Foundation"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("a",{parentName:"p",href:"https://paperswithcode.com/area/computer-vision"},"Paper with codes"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("a",{parentName:"p",href:"https://ko.wikipedia.org/wiki/%EC%BB%B4%ED%93%A8%ED%84%B0_%EB%B9%84%EC%A0%84"},"[\uc704\ud0a4]\ucef4\ud4e8\ud130_\ube44\uc804")))}h.isMDXComponent=!0},61662:function(e,t,a){t.Z=a.p+"assets/images/alexnet-2cae39c7c6aae763b6e1c1ded716b119.jpg"},22560:function(e,t,a){t.Z=a.p+"assets/images/alphapose-ablation-4c669e36905bb29a9a54078fe08717c9.png"},95576:function(e,t,a){t.Z=a.p+"assets/images/alphapose-architecture-bc8c438c49e5927a849e5720fccdbe89.png"},50955:function(e,t,a){t.Z=a.p+"assets/images/alphapose-error-07ccf41a4267d1fda42d9559b3aa1929.gif"},68435:function(e,t,a){t.Z=a.p+"assets/images/alphapose-failure-dad4dd5a970474d923e56c4813d2c7c3.png"},33217:function(e,t,a){t.Z=a.p+"assets/images/alphapose-fig4-1b30a540728df708f1232d2ae87f5a8f.png"},36683:function(e,t,a){t.Z=a.p+"assets/images/alphapose-logo-51aa3bc8632dee0ded1f95a8b9bd51d5.jpg"},9255:function(e,t,a){t.Z=a.p+"assets/images/alphapose-yolo-c4e819ba87490a1aeee13722c16d828e.png"},43768:function(e,t,a){t.Z=a.p+"assets/images/alphapose_17-887138a3b554288e634662685cb177c9.gif"},68059:function(e,t,a){t.Z=a.p+"assets/images/distance-934b23dc6ef4a5ae60fceb650c86abe0.png"},22875:function(e,t,a){t.Z=a.p+"assets/images/hsim-9d4efb7faf4a8e1458d37d173a800552.png"},9210:function(e,t,a){t.Z=a.p+"assets/images/ksim-a2e9d58f617b446eba26ca2c05b30d8a.png"}}]);