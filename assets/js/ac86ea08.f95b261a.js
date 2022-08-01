"use strict";(self.webpackChunkjwher_blog=self.webpackChunkjwher_blog||[]).push([[6099],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(n),k=a,d=m["".concat(u,".").concat(k)]||m[k]||p[k]||l;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2467:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={authors:["jwher"],description:"Automate the Data Science Pipeline with Serverless Functions",slug:"nuclio",tags:["tech","kubernetes","docker"],title:"Nuclio \uac1c\ub150\uacfc \uc544\ud0a4\ud14d\ucc98"},u=void 0,c={permalink:"/posts/nuclio",editUrl:"https://github.com/jwher/jwher.github.io/posts/2021-06-02-nuclio/index.md",source:"@site/posts/2021-06-02-nuclio/index.md",title:"Nuclio \uac1c\ub150\uacfc \uc544\ud0a4\ud14d\ucc98",description:"Automate the Data Science Pipeline with Serverless Functions",date:"2021-06-02T00:00:00.000Z",formattedDate:"June 2, 2021",tags:[{label:"tech",permalink:"/posts/tags/tech"},{label:"kubernetes",permalink:"/posts/tags/kubernetes"},{label:"docker",permalink:"/posts/tags/docker"}],readingTime:9.025,truncated:!0,authors:[{name:"Jeongwon Her",title:"MLOps Engineer",url:"https://github.com/jwher",imageURL:"https://github.com/jwher.png",key:"jwher"}],frontMatter:{authors:["jwher"],description:"Automate the Data Science Pipeline with Serverless Functions",slug:"nuclio",tags:["tech","kubernetes","docker"],title:"Nuclio \uac1c\ub150\uacfc \uc544\ud0a4\ud14d\ucc98"},prevItem:{title:"Kubeflow Visualization 1",permalink:"/posts/kubeflow-visualization-1"},nextItem:{title:"\uc790\uc8fc\uc4f0\ub294 \ucfe0\ubc84\ub124\ud2f0\uc2a4 \uba85\ub839\uc5b4",permalink:"/posts/kubernetes-usage"}},s={authorsImageUrls:[void 0]},p=[{value:"nuclio\uc758 \ud544\uc694\uc131",id:"nuclio\uc758-\ud544\uc694\uc131",level:2},{value:"\uc0ac\ub840\uc640 \uc77c\ubc18\uc801\uc778 \uc2e4\uc218",id:"\uc0ac\ub840\uc640-\uc77c\ubc18\uc801\uc778-\uc2e4\uc218",level:3},{value:"nuclio architecture",id:"nuclio-architecture",level:2},{value:"Event-source listeners",id:"event-source-listeners",level:3},{value:"Runtime engine",id:"runtime-engine",level:3},{value:"Data bindings",id:"data-bindings",level:3},{value:"Control Framework",id:"control-framework",level:3},{value:"\uad81\uae08\uc810",id:"\uad81\uae08\uc810",level:2},{value:"Reference",id:"reference",level:2}],m={toc:p};function k(e){var t=e.components,o=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"nuclio",src:n(2029).Z,width:"640",height:"467"}),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("em",{parentName:"p"},"Automate the Data Science Pipeline with Serverless Functions"),"  "),(0,l.kt)("p",null,"disclaimer: \ud544\uc790\ub3c4 \ubc30\uc6b0\ub294 \uc911\uc785\ub2c8\ub2e4. \uc815\ud655\ud788 \uc774\ud574\uac00 \uac00\uc9c0 \uc54a\uc740 \uac1c\ub150\uc740 ",(0,l.kt)("em",{parentName:"p"},"\uae30\uc6b8\uac8c?")," \ud45c\uc2dc\ud588\uc2b5\ub2c8\ub2e4. \ub9ce\uc740 \uc758\uacac \ubd80\ud0c1\ub4dc\ub9bd\ub2c8\ub2e4! ",(0,l.kt)("del",{parentName:"p"},"\uc8c4\uc1a1\ud569\ub2c8\ub2e4!")),(0,l.kt)("h1",{id:"\ubaa9\ucc28"},"\ubaa9\ucc28"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#nuclio%EC%9D%98-%ED%95%84%EC%9A%94%EC%84%B1"},"nuclio\uc758 \ud544\uc694\uc131")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#nuclio-architecture"},"nuclio architecture"))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"nuclio\uc758-\ud544\uc694\uc131"},"nuclio\uc758 \ud544\uc694\uc131"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"server\uc5ed\ud560\uc744 \ud558\ub294\ub370 serverless\ub77c\uace0??")),(0,l.kt)("p",null,"\ub525\ub7ec\ub2dd \ubaa8\ub378 \uc54c\uace0\ub9ac\uc998(function)\uc774 \uc678\ubd80\uc640 \ud1b5\uc2e0\ud558\ub824\uba74 \uc5b4\ub5a4 \ubc29\ubc95\uc744 \uc0ac\uc6a9\ud574\uc57c \ud560\uae4c\uc694?\n\ub2f9\uc5f0\ud788 \uc11c\ubc84\uc640 \uc778\ud130\ud398\uc774\uc2a4(ex REST API) \ud504\ub85c\uadf8\ub7a8\uc744 \ucd94\uac00\ub85c \uac1c\ubc1c\ud574\uc57c \ud569\ub2c8\ub2e4.\ud83d\ude2d"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("img",{alt:"homer-brain",src:n(8019).Z,width:"300",height:"280"}),(0,l.kt)("br",{parentName:"p"}),"\n","\ub098\ub294 \ub525\ub7ec\ub2dd\ubc16\uc5d0 \ubaa8\ub974\ub294\ub370...")),(0,l.kt)("p",null,"\uc774\ub7f0 \ub525\ub7ec\ub2dd \ubaa8\ub378 \uac1c\ubc1c\uc790, \ub370\uc774\ud130 \uacfc\ud559\uc790\ub97c \uc704\ud574 ",(0,l.kt)("strong",{parentName:"p"},"\uc11c\ubc84 \uc5c6\uc774")," \uc778\ud130\ud398\uc774\uc2a4\ub97c \ub9cc\ub4e4\uc5b4 \uc8fc\ub824\ub294 \uc2dc\ub3c4\ub294 \ub9ce\uc558\uc2b5\ub2c8\ub2e4.\nnuclio \ub610\ud55c \uace0\uac00\uc6a9\uc131 ",(0,l.kt)("strong",{parentName:"p"},"serverless")," \ud504\ub808\uc784\uc6cc\ud06c\ub85c\uc11c \ud2b9\ud788 data, I/O, \uc5f0\uc0b0 \uc9d1\uc911\uc801(compute intensive) \uc791\uc5c5\uc5d0 \ucd08\uc810\uc744 \ub450\uace0 \uc788\uc2b5\ub2c8\ub2e4.\nnuclio\ub294 \ub525\ub7ec\ub2dd \ubaa8\ub378\uc758 ",(0,l.kt)("strong",{parentName:"p"},"serverless function"),"\uc758 \uc11c\ube59\uacfc \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"nuclio\ub294 \uc11c\ubc84\ub97c \uc6b4\uc601\ud558\ub294\ub370 \ud544\uc694\ud55c load balancing\uacfc scaling\uc744 \uc544\uc8fc \uc798(10-100 times faster) \uc9c0\uc6d0\ud569\ub2c8\ub2e4.\n\ud558\uc9c0\ub9cc \ub2e4\ub978 serverless \ud504\ub85c\uc81d\ud2b8\ub294 \uc544\ub798 \uc694\uad6c\uc0ac\ud56d\uc744 \uc798 \ud574\uacb0\ud558\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ucd5c\uc18c\ud55c\uc758 CPU/GPU\uc640 I/O \uc624\ubc84\ud5e4\ub4dc, \ubcd1\ub82c\ud654\uc758 \ucd5c\ub300\ub85c Real-time \ucc98\ub9ac"),(0,l.kt)("li",{parentName:"ul"},"\ub2e4\uc591\ud55c data source, trigger, processing models, ML framework\uc640 \uc800\uc218\uc900 \ud1b5\ud569(Native integration)"),(0,l.kt)("li",{parentName:"ul"},"data-path \uac00\uc18d\uc744 \ud1b5\ud55c \uc0c1\ud0dc \ud568\uc218(stateful function) ",(0,l.kt)("em",{parentName:"li"},"(stateless REST\uc640 \ubc18\ub300 \uac1c\ub150?)")),(0,l.kt)("li",{parentName:"ul"},"\uc800\uc218\uc900 \uc7a5\uce58, \ub7a9\ud0d1, edge ",(0,l.kt)("em",{parentName:"li"},"(edge computing?)"),", op-premise, public cloud\uc640 \uc774\uc2dd\uc131"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\uc624\ud508\uc18c\uc2a4")," \uadfc\ub370 \uc774\uc81c \uae30\uc5c5\uc6a9\uc744 \uacc1\ub4e4\uc778(\ub85c\uae45, \ubaa8\ub2c8\ud130\ub9c1, \ubcf4\uc548, \uc0ac\uc6a9\uc131)  ")),(0,l.kt)("p",null,"nuclio\ub294 \uc774 \uc694\uad6c\uc0ac\ud56d\uc744 \ubaa8\ub450 \ucda9\uc871\ud569\ub2c8\ub2e4.\ud83d\ude04  "),(0,l.kt)("br",null),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"When this happens, do that")),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"\uc0ac\ub840\uc640-\uc77c\ubc18\uc801\uc778-\uc2e4\uc218"},"\uc0ac\ub840\uc640 \uc77c\ubc18\uc801\uc778 \uc2e4\uc218"),(0,l.kt)("p",null,"nuclio function\uc774 \ubc30\ud3ec\ub418\uba74 worker \ub9c8\ub2e4 \ub7f0\ud0c0\uc784(python interpreter, JVM, goroutine...)\uc774 \uc0dd\uc131\ub418\uace0 \uc2e4\ud589 \ucee8\ud14d\uc2a4\ud2b8\uc5d0 \ub530\ub77c \uc11c\ube59\ub429\ub2c8\ub2e4.\n\uc55e\uc11c \uc0b4\ud3b4\ubd24\ub4ef\uc774 nuclio \ub7f0\ud0c0\uc784\uc5d0\ub294 \ub2e4\uc911 \uc2a4\ub808\ub529 \ucee8\uc149\uc774 \uc801\uc6a9\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud544\uc694\uc5c6\ub294 lock\uc744 \ubc29\uc9c0\ud558\uae30 \uc704\ud574 worker(threads ",(0,l.kt)("em",{parentName:"li"},"?"),")\uac04 \ub370\uc774\ud130 \uacf5\uc720\ub97c \ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4"),(0,l.kt)("li",{parentName:"ul"},"Thread-local storage(TLS)\ub97c \uc0ac\uc6a9\ud574 ",(0,l.kt)("strong",{parentName:"li"},"\uc804\uc5ed\ubcc0\uc218"),"\ub97c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uace0 \uc0c1\ud0dc(state)\ub97c \uad00\ub9ac\ud569\ub2c8\ub2e4")),(0,l.kt)("p",null,"\uadf8\ub807\ub2e4\uba74 function lifetime \ub3d9\uc548 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc640 \uc5f0\uacb0\uc744 \uc720\uc9c0\ud558\ub294 \uc0c1\ud669\uc744 \uc0dd\uac01\ud574\ubd05\uc2dc\ub2e4.\n\uc694\uccad\ub9c8\ub2e4 \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc5f0\uacb0\uc744 \uc0dd\uc131\ud558\ub294 \uac83\uc740 \ube44\ud6a8\uc728\uc801\uc785\ub2c8\ub2e4.\n\ub530\ub77c\uc11c \ub2e4\uc74c\uacfc \uac19\uc774 \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc5f0\uacb0\uc744 ",(0,l.kt)("strong",{parentName:"p"},"\uc804\uc5ed\ubcc0\uc218"),"\ub85c \ub9cc\ub4dc\ub294 \ubc29\ubc95\uc744 \uc0dd\uac01\ud574 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"my_db_connection = my_db.create_connection()\n\ndef handler(context, event):\n    my_db_connection.query(...)\n")),(0,l.kt)("p",null,"\ud558\uc9c0\ub9cc \uc774 \ubc29\ubc95\uc740 \ub450\uac00\uc9c0 \ud070 \ubb38\uc81c\uac00 \uc788\uc2b5\ub2c8\ub2e4.  "),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\uc804\uc5ed\ubcc0\uc218\ub294 worker \uc0ac\uc774\uc5d0\uc11c \uacf5\uc720\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4(Go\uc5d0\uc11c\ub294 \uc5b8\uc81c\ub098 \uacf5\uc720\ub429\ub2c8\ub2e4).\n\uc774\ub294 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0 \uc811\uadfc\ud560 \ub54c Race condition\uc744 \ubc1c\uc0dd\uc2dc\ud0ac \uc218 \uc788\uc2b5\ub2c8\ub2e4.  "),(0,l.kt)("li",{parentName:"ol"},"\ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc5f0\uacb0\uc5d0 \uc2e4\ud328\ud558\uba74 function\uc774 \uc65c import \ub418\uc9c0 \uc54a\uc558\ub294\uc9c0 \uc774\ud574\ud558\uae30 \uc5b4\ub835\uc2b5\ub2c8\ub2e4\n(scratching your head trying to understand).")),(0,l.kt)("p",null,"nuclio\uc5d0\uc11c \uc62c\ubc14\ub978 \ud574\uacb0\ucc45\uc740 ",(0,l.kt)("inlineCode",{parentName:"p"},"init_context")," \uc0ac\uc6a9\uc785\ub2c8\ub2e4. \ud83d\udca1  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def handler(context, event):\n    context.user_data.my_db_connection.query(...)\n\n\ndef init_context(context):\n\n    # Create the DB connection under \"context.user_data\"\n    setattr(context.user_data, 'my_db_connection', my_db.create_connection())\n")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"nuclio-architecture"},"nuclio architecture"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"function processor",src:n(7290).Z,width:"1427",height:"673"})),(0,l.kt)("p",null,"nuclio \uad6c\uc870\ub294 function\uc758 \uc131\ub2a5 \ucd5c\ub300\ud654, \ucd94\uc0c1\ud654, \ud50c\ub7ab\ud3fc\uac04 \uc774\uc2dd\uc131\uc744 \ubaa9\ud45c\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.  "),(0,l.kt)("h3",{id:"event-source-listeners"},"Event-source listeners"),(0,l.kt)("p",null,"function\uc740 \uc774\ubca4\ud2b8 \uae30\ubc18\uc73c\ub85c \uc2e4\ud589\ub418\uace0, function runtime engine\uc73c\ub85c \ud478\uc26c\ud569\ub2c8\ub2e4.\nevent-source listener\ub294 \uc18c\ucf13, \uba54\uc2dc\uc9c0 \ud050, \uc678\ubd80 \uc774\ubca4\ud2b8 \uac00\uc838\uc624\uae30(polling)\ub97c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\nevent listner\ub294 \uc815\ud655\ud788 \ud55c\ubc88 \ub610\ub294 \ucd5c\uc18c\ud55c \ud55c\ubc88 \uc2e4\ud589\uc744 \ubcf4\uc7a5\ud558\uace0 \uc624\ub958\ub97c \ucc98\ub9ac\ud569\ub2c8\ub2e4.  "),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"event src",src:n(6328).Z,width:"1428",height:"682"}),"  "),(0,l.kt)("p",null,"event source\ub294 \ub3d9\uc791\uc774\ub098 \ud750\ub984 \uad00\ub9ac\ub85c \ubd84\ub958\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4(divided into classes). nuclio\ub294 \ub2e4\uc74c event\ub97c \uc9c0\uc6d0\ud569\ub2c8\ub2e4."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Synchronous Request/Response: HTTP\uc694\uccad\uc774\ub098 Remote Procedure Calls \uac19\uc774 client\uac00 \uc989\uc2dc \uc751\ub2f5\uc744 \uc6d0\ud568"),(0,l.kt)("li",{parentName:"ol"},"Asynchronous Message-Queue Request: RabbitMQ, MQTT, emails, scheduled event \uac19\uc774 \uba54\uc2dc\uc9c0\uac00 subscriber\uc5d0\uac8c \ubd84\ubc30\ub418\uace0 \uad50\ud690\ub428"),(0,l.kt)("li",{parentName:"ol"},"Message or Record Streams: Kafka, AWS Kinesis, lguazio V3IO \uac19\uc774 \uc815\ub82b\ub41c \uba54\uc2dc\uc9c0\ub098 \uae30\ub85d\uc758 \uc21c\ucc28\uc801 \uc5c5\ub370\uc774\ud2b8"),(0,l.kt)("li",{parentName:"ol"},"Record or Data Polling(ETL): \uc8fc\uae30\uc801\uc774\uac70\ub098 \ud2b8\ub9ac\uac70\ub41c \uc678\ubd80\uc5d0\uc11c \ud544\ud130\ub41c \uae30\ub85d, \ub370\uc774\ud130 \uc624\ube0c\uc81d\ud2b8")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"#%EA%B6%81%EA%B8%88%EC%A0%90"},"\uad81\uae08\uc810-graceful shutdown")),(0,l.kt)("h3",{id:"runtime-engine"},"Runtime engine"),(0,l.kt)("p",null,"runtime engine\uc740 function \ud658\uacbd(\ubcc0\uc218, \ucee8\ud14d\uc2a4\ud2b8, \ub85c\uadf8, \ub370\uc774\ud130 \ubc14\uc778\ub529 ...)\uc744 \ucd08\uae30\ud654\ud558\uace0 worker\uc5d0 \uc774\ubca4\ud2b8\ub97c \uacf5\uae09(feed), \uacb0\uacfc \ubc18\ud658\uc744 \ud569\ub2c8\ub2e4.\nruntime\uc740 non-blocking \uc5f0\uc0b0\uacfc CPU \ucd5c\uc801\ud654\ub97c \uc704\ud574 \ub3c5\ub9bd\uc801\uc778 \ubcd1\ub82c(parallel) worker\ub85c \uc774\ub8e8\uc5b4\uc9d1\ub2c8\ub2e4(goroutine, python asyncio, akka ",(0,l.kt)("em",{parentName:"p"},"?"),", thread)"),(0,l.kt)("p",null,"nuclio\ub294 \ud604\uc7ac \uc138\uac00\uc9c0 processor runtime \uad6c\ud604\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Native: real-time, inline Go \ub610\ub294 C \ub8e8\ud2f4"),(0,l.kt)("li",{parentName:"ol"},"SHMEM: \uacf5\uc720\uba54\ubaa8\ub9ac\ub97c \uc774\uc6a9\ud558\ub294 Python, Java, Node.js\uc5b8\uc5b4\nprocessor\ub294 SHMEM function \ub7f0\ud0c0\uc784\uc744 \uc774\uc6a9\ud574 zero-copy \uacf5\uc720 \uba54\ubaa8\ub9ac \ucc44\ub110\ub85c \ud1b5\uc2e0\ud569\ub2c8\ub2e4.  "),(0,l.kt)("li",{parentName:"ol"},"Shell: CLI \uc2e4\ud589\ud658\uacbd\uc774\ub098 \ubc14\uc774\ub108\ub9ac(excutables). stdout\uacfc stderr\ub97c \ub9f5\ud551\ud574\uc11c function \uacb0\uacfc\ub97c \ub9cc\ub4ed\ub2c8\ub2e4.")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"#%EA%B6%81%EA%B8%88%EC%A0%90"},"\uad81\uae08\uc810-worker")),(0,l.kt)("h3",{id:"data-bindings"},"Data bindings"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"\uac00\uc7a5 \uba4b\uc9c4 \ubd80\ubd84\uc774\ub77c \uc0dd\uac01\ud569\ub2c8\ub2e4")),(0,l.kt)("p",null,"function\uc740 \uc678\ubd80 \ud30c\uc77c, \uc624\ube0c\uc81d\ud2b8, database, messaging system\uacfc \uc9c0\uc18d\uc801\uc778 \uc5f0\uacb0\ub85c \uc774\uc810(benefit)\uc744 \uc5bb\uc2b5\ub2c8\ub2e4.\nData binding\uc740 SDK\ub098 \uc5f0\uacb0, \uc790\uaca9 \uad00\ub9ac\uc758 \ud1b5\ud569\uc744 \uc5c6\uc5d0 \uac1c\ubc1c\uc744 \ub2e8\uc21c\ud654 \ud569\ub2c8\ub2e4.\n\ub610\ud55c, \uac19\uc740 \uc885\ub958(class)\uc758 \ub2e4\ub978 \ub370\uc774\ud130 \uc11c\ube44\uc2a4\ub97c \ub9f5\ud551\ud574 \uc7ac\uc0ac\uc6a9\uc131\uacfc \uc774\uc2dd\uc131\uc744 \uac00\ub2a5\ud558\uac8c \ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"data binding\uc740 prefetching, \uce90\uc2f1, micro-batching\uc744 \ucc98\ub9ac\ud574 \ub300\uae30\uc2dc\uac04\uc744 \uc904\uc774\uace0 I/O \uc131\ub2a5\uc744 \ud5a5\uc0c1\uc2dc\ud0b5\ub2c8\ub2e4.\ndata binding\uc740 \ud2b9\ubcc4\ud55c function \ucf54\ub4dc \uc5c6\uc774 zero-copy, zero-serialization, and non-blocking operation, real-time \ucc98\ub9ac\ub97c \uc704\ud574 \uc124\uacc4\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"control-framework"},"Control Framework"),(0,l.kt)("p",null,"control framework\ub294 \ucd08\uae30\ud654, \ub2e4\ub978 \ud504\ub85c\uc138\uc11c \ucef4\ud3ec\ub10c\ud2b8 \ucee8\ud2b8\ub864, \ud504\ub85c\uc138\uc11c\uc640 function\uc758 logging \uc81c\uacf5, \uc2e4\ud589 \ud1b5\uacc4 \ubaa8\ub2c8\ud130\ub9c1,\n\uc791\uc740 \uc6d0\uaca9 \uad00\ub9ac \ud3ec\ud138 \uc11c\ube59\uc744 \ud569\ub2c8\ub2e4.\ncontrol framework\ub294 \ucd94\uc0c1\ud654 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc81c\uacf5\ud574 IoT \uc7a5\uce58, \ucee8\ud14c\uc774\ub108, \uc624\ucf00\uc2a4\ud2b8\ub808\uc774\ud130, cloud\uac04\uc5d0 \uc774\uc2dd\uc131\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4(allowing).",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("img",{alt:"build deploy",src:n(8180).Z,width:"1669",height:"462"})),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"\uad81\uae08\uc810"},"\uad81\uae08\uc810"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"graceful shutdown",(0,l.kt)("br",{parentName:"li"}),"\uc885\ub8cc\uc2dc, \uc774\ubca4\ud2b8 \ud050 \ucc98\ub9ac, worker\uc5d0 \uc788\ub294 \uc791\uc5c5 \ucc98\ub9ac\uac00 \ub418\ub294\uc9c0?\n\u21d2 \ubaa8\ub378 \uad50\uccb4\ub098 \ubc84\uc804 \uc5c5\uadf8\ub808\uc774\ub4dc\ub85c \uc885\ub8cc\ud558\uba74, \uae30\uc874 \uc791\uc5c5 \uc694\uccad\uc5d0 \uc5b4\ub5bb\uac8c \ubc18\uc751\ud560\uae4c\uc694?\n\ub2e8\uc21c \uc5f0\uacb0 \uc885\ub8cc, \uc694\uccad\ubc1b\uc740 \uc774\ubca4\ud2b8\uae4c\uc9c0\ub9cc \ucc98\ub9ac, \ub9ac\ub514\ub809\uc158 \ub4f1 \ub2e4\uc591\ud55c \uc815\ucc45\uc774 \uc788\uc744\ud150\ub370 \ub204\ud074\ub9ac\uc624\ub294 \uc5b4\ub5a8\uae4c\uc694\n"),(0,l.kt)("li",{parentName:"ul"},"worker",(0,l.kt)("br",{parentName:"li"}),"worker\ub85c docker container \ub610\ub294 kubernetes pod\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc73c\ub85c \ubcf4\uc774\ub294\ub370(\uacf5\ubd80\uac00 \ubd80\uc871\ud574\uc11c\uc77c\uc9c0\ub3c4)\n\uc774\uac83\uc744 scale out(\uc989, \ucee8\ud14c\uc774\ub108 \uc99d\uac00)\ub85c \ubcd1\ub82c\ud654\ub97c \ud558\ub294 \uac83\uc778\uc9c0, \uc544\ub2c8\uba74 \ucee8\ud14c\uc774\ub108 OS \ud504\ub85c\uc138\uc2a4\ub97c \uc99d\uac00\uc2dc\ud0a4\ub294\uac74\uc9c0,\nOS thread\ub97c \uc0ac\uc6a9\ud558\ub294\uc9c0, PL\uc774 \uc81c\uacf5\ud558\ub294 \uacbd\ub7c9 thread(goroutine, erlang)\ub97c \uc99d\uac00\uc2dc\ud0a4\ub294 \uac83\uc778\uc9c0?\n\u21d2 Runtime engine\uc5d0\uc11c \ud78c\ud2b8\ub97c \uc5bb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4\ub9cc, \uc5b8\uc5b4\uc5d0 \ub530\ub77c scale up \ubc29\uc2dd\uc774 \ub2e4\ub978 \uac78\uae4c\uc694?")),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://theburningmonk.com/2019/04/comparing-nuclio-and-aws-lambda/"},"Comparing Nuclio and AWS Lambda"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("a",{parentName:"p",href:"https://nuclio.io/docs/latest/"},"Nuclio Documentation")))}k.isMDXComponent=!0},8180:function(e,t,n){t.Z=n.p+"assets/images/build-deploy-b291a184317f71b882f3db62ab22007f.png"},6328:function(e,t,n){t.Z=n.p+"assets/images/event-src-ccd1846aa4a406e16b3b28407e92c46f.png"},7290:function(e,t,n){t.Z=n.p+"assets/images/function-processor-3a2193379a90fef4ddfc1fb0b8756ff0.png"},8019:function(e,t,n){t.Z=n.p+"assets/images/homer-brain-1c9d50d11567f55c55dd3b1c027d5d91.gif"},2029:function(e,t,n){t.Z=n.p+"assets/images/nuclio-376212de6c9ee3da1e859db93128e595.png"}}]);