"use strict";(self.webpackChunkjwher_blog=self.webpackChunkjwher_blog||[]).push([[2295],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return t?r.createElement(h,l(l({ref:n},d),{},{components:t})):r.createElement(h,l({ref:n},d))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},81777:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const i={authors:["jwher"],description:"Seven Concurrency Models in Seven Weeks - Chapter2 Day1",slug:"concurrency-models-2",tags:["tech","parallel computing","distributed computing","java"],title:"7\uac00\uc9c0 \ub3d9\uc2dc\uc131 \ubaa8\ub378(\uc2a4\ub808\ub4dc\uc640 \ub77d) \uc0c1\ud638 \ubc30\uc81c\uc640 \uba54\ubaa8\ub9ac \ubaa8\ub378"},l=void 0,o={permalink:"/posts/concurrency-models-2",editUrl:"https://github.com/jwher/jwher.github.io/tree/main/posts/2022-12-14-concurrency-models-2/index.md",source:"@site/posts/2022-12-14-concurrency-models-2/index.md",title:"7\uac00\uc9c0 \ub3d9\uc2dc\uc131 \ubaa8\ub378(\uc2a4\ub808\ub4dc\uc640 \ub77d) \uc0c1\ud638 \ubc30\uc81c\uc640 \uba54\ubaa8\ub9ac \ubaa8\ub378",description:"Seven Concurrency Models in Seven Weeks - Chapter2 Day1",date:"2022-12-14T00:00:00.000Z",formattedDate:"December 14, 2022",tags:[{label:"tech",permalink:"/posts/tags/tech"},{label:"parallel computing",permalink:"/posts/tags/parallel-computing"},{label:"distributed computing",permalink:"/posts/tags/distributed-computing"},{label:"java",permalink:"/posts/tags/java"}],readingTime:18.225,hasTruncateMarker:!0,authors:[{name:"Jeongwon Her",title:"MLOps Engineer",url:"https://github.com/jwher",imageURL:"https://github.com/jwher.png",key:"jwher"}],frontMatter:{authors:["jwher"],description:"Seven Concurrency Models in Seven Weeks - Chapter2 Day1",slug:"concurrency-models-2",tags:["tech","parallel computing","distributed computing","java"],title:"7\uac00\uc9c0 \ub3d9\uc2dc\uc131 \ubaa8\ub378(\uc2a4\ub808\ub4dc\uc640 \ub77d) \uc0c1\ud638 \ubc30\uc81c\uc640 \uba54\ubaa8\ub9ac \ubaa8\ub378"},prevItem:{title:"7\uac00\uc9c0 \ub3d9\uc2dc\uc131 \ubaa8\ub378(\uc2a4\ub808\ub4dc\uc640 \ub77d) \uace0\uc720 \ub77d \uac1c\uc120\ud558\uae30",permalink:"/posts/concurrency-models-3"},nextItem:{title:"7\uac00\uc9c0 \ub3d9\uc2dc\uc131 \ubaa8\ub378(\uc18c\uac1c)",permalink:"/posts/concurrency-models-1"}},s={authorsImageUrls:[void 0]},p=[{value:"Day 1: Mutual Exclusion and Memory Models",id:"day-1-mutual-exclusion-and-memory-models",level:2},{value:"Creating a Thread",id:"creating-a-thread",level:3},{value:"Our First Lock",id:"our-first-lock",level:3},{value:"Mysterious Memory",id:"mysterious-memory",level:3},{value:"Memory Visibility",id:"memory-visibility",level:3},{value:"Multiple Locks",id:"multiple-locks",level:3},{value:"The Perils of Alien Methods",id:"the-perils-of-alien-methods",level:3},{value:"Day1 Wrap-Up",id:"day1-wrap-up",level:2},{value:"What We Learned in Day 1",id:"what-we-learned-in-day-1",level:3},{value:"Day 1 Self-Study",id:"day-1-self-study",level:3},{value:"References",id:"references",level:2},{value:"[1]Java Memory Model",id:"1java-memory-model",level:3}],d={toc:p},u="wrapper";function c(e){let{components:n,...i}=e;return(0,a.kt)(u,(0,r.Z)({},d,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/posts/concurrency-models-2"},(0,a.kt)("img",{alt:"concurrency",src:t(25065).Z,width:"540",height:"360"})),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("em",{parentName:"p"},"\uc774 \uae00\uc740 Paul Butcher\uc758 Seven Concurrency Models in Seven Weeks\uc744 \uc77d\uace0 \uc791\uc131\ud588\uc2b5\ub2c8\ub2e4"),"  "),(0,a.kt)("p",null,"Threads-and-locks programming is like a Ford Model T"),(0,a.kt)("h1",{id:"the-simplest-thing-that-could-possibly-work"},"The Simplest Thing That Could Possibly Work"),(0,a.kt)("p",null,"Thread\uc640 Lock\uc740 \ud558\ub4dc\uc6e8\uc5b4\uac00 \uc2e4\uc81c\ub85c \ub3d9\uc791\ud558\ub294 \uac83\uc5d0 \uc870\uae08 \ub354 \ud615\uc2dd\uc744 \ubd80\uc5ec\ud55c \uac83\uc785\ub2c8\ub2e4.\n\uc774\ub294 \ub108\ubb34 \uac04\ub2e8\ud558\uae30 \ub54c\ubb38\uc5d0, \uac15\ud55c \uac15\uc810\uacfc \uac15\ud55c \uc57d\uc810\uc744 \uac19\uac8c \ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"Thread\uc640 Lock\uc740 \ubaa9\ud45c\ub97c \ub2ec\uc131\ud558\uae30\uc5d0 \uc791\uc740 \uc81c\uc57d\uc870\uac74\ub9cc \uc694\uad6c\ud569\ub2c8\ub2e4.\n\ud558\uc9c0\ub9cc \uc2e4\ub825\uc5c6\ub294 \ud504\ub85c\uadf8\ub798\uba38\ud55c\ud150 \ucc98\uc74c\ubd80\ud130 \uc81c\ub300\ub85c \uc791\ub3d9\ud558\uac8c \ub9cc\ub4e4\uae30 \uc5b4\ub835\uace0,\n\uc2ec\uc9c0\uc5b4 \uad00\ub9ac\ud558\uae30 \ud798\ub4e4\uac8c \ub9cc\ub4e4\uc5b4 \uac70\uc758 \uc5b4\ub5a4 \ub3c4\uc6c0\ub3c4 \uc8fc\uc9c0 \ubabb\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc774 \uae00\uc5d0\uc120 \uc790\ubc14\ub97c \ud1b5\ud574 threads-and-locks \ud504\ub85c\uadf8\ub798\ubc0d\uc744 \ud560 \uac83\uc785\ub2c8\ub2e4.\n\ud558\uc9c0\ub9cc, \uc6d0\ub9ac\ub294 thread\ub97c \uc9c0\uc6d0\ud558\ub294 \uc5b4\ub5a4 \uc5b8\uc5b4\ub4e0 \uc801\uc6a9 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"day-1-mutual-exclusion-and-memory-models"},"Day 1: Mutual Exclusion and Memory Models"),(0,a.kt)("p",null,"\ub3d9\uc2dc\uc131 \ud504\ub85c\uadf8\ub798\ubc0d\uc744 \uc804\ud600 \ud574\ubcf4\uc9c0 \uc54a\uc740\uac8c \uc544\ub2c8\ub77c\uba74,\n\ub2f9\uc2e0\uc740 ",(0,a.kt)("em",{parentName:"p"},"mutual exclusion"),"\uc5d0 \ub300\ud55c \ucee8\uc149\uc5d0 \uc775\uc219\ud560 \uac83\uc785\ub2c8\ub2e4.\nlock\uc744 \uc0ac\uc6a9\ud558\uc5ec \ud55c \uc2a4\ub808\ub4dc\ub9cc \ub370\uc774\ud130\uc5d0 \uc811\uadfc \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ub610\ud55c, mutual exclusion\uc774 ",(0,a.kt)("em",{parentName:"p"},"race conditions"),"\uc640 ",(0,a.kt)("em",{parentName:"p"},"deadlocks"),"\ub85c \uc798\ubabb\ub420 \uc218 \uc788\ub2e4\ub294 \uac83\uc5d0 \uc775\uc219\ud560 \uac83\uc785\ub2c8\ub2e4.\n\uc774\uac83\uc5d0 \ub300\ud574 \ub354 \uc790\uc138\ud788 \ub2e4\ub8f0 \uac83\uc774\uc9c0\ub9cc, \ub354 \uae30\ubcf8\uc801\uc778 shared memory\ub97c \ub2e4\ub8e8\ub294\ub370\uc5d0 \ub354 \uac71\uc815\ud574\uc57c \ud569\ub2c8\ub2e4.\nrace condition\uacfc deadlock\uc774 \uc774\uc0c1\ud55c \ud589\ub3d9\uc744 \ubcf4\uc77c \uc218 \uc788\ub2e4\uace0 \uc0dd\uac01\ud558\uba74,\nshared memory\uac00 \uc5bc\ub9c8\ub098 \uae30\uad34\ud574\uc9c8 \uc218 \uc788\ub294\uc9c0 \uae30\ub2e4\ub824\ubcf4\uc138\uc694."),(0,a.kt)("h3",{id:"creating-a-thread"},"Creating a Thread"),(0,a.kt)("p",null,"\uc790\ubc14\uc758 \uae30\ubcf8\uc801\uc778 \ub3d9\uc2dc\uc131 \ub2e8\uc704\ub294 ",(0,a.kt)("em",{parentName:"p"},"thread"),"\uc785\ub2c8\ub2e4.\n\uc774\ub984\uc5d0\uc11c \uc54c \uc218 \uc788\ub2e4\uc2dc\ud53c \ud558\ub098\uc758 \uc2a4\ub808\ub4dc \uc81c\uc5b4\ub97c \ub300\ud45c\ud569\ub2c8\ub2e4.\n\uc2a4\ub808\ub4dc\ub294 \ub2e4\ub978 \uc2a4\ub808\ub4dc\ub4e4\uacfc \uacf5\uc720\uba54\ubaa8\ub9ac\ub97c \ud1b5\ud574 \ud1b5\uc2e0\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class HelloWorld {\n    public static void main(String[] args) throws InterruptedException {\n        Thread myThread = new Thread() {\n            public void run() {\n                System.out.println("Hello from new thread");\n            }\n        };\n        myThread.start();\n        Thread.yield();\n        System.out.println("Hello from main thread");\n        myThread.join();\n    }\n}\n')),(0,a.kt)("p",null,"\uc774 \ucf54\ub4dc\ub294 \ud558\ub098\uc758 \uc2a4\ub808\ub4dc \uc778\uc2a4\ud134\uc2a4\ub97c \uc0dd\uc131\ud558\uace0 \uc2dc\uc791\ud569\ub2c8\ub2e4.\n\uc774 \uc2dc\uc810\uc5d0\uc11c, \uc2a4\ub808\ub4dc\uc758 ",(0,a.kt)("inlineCode",{parentName:"p"},"run()")," \uba54\uc18c\ub4dc\uac00 \ub0a8\uc740 ",(0,a.kt)("inlineCode",{parentName:"p"},"main()"),"\uacfc \ud568\uaed8 \ub3d9\uc2dc\uc801\uc73c\ub85c \uc2e4\ud589\ub429\ub2c8\ub2e4.\n\ub9c8\uc9c0\ub9c9\uc73c\ub85c ",(0,a.kt)("inlineCode",{parentName:"p"},"join()"),"\uc774 \ubaa8\ub4e0 \uc2a4\ub808\ub4dc\uac00 \uc885\ub8cc\ub420 \ub54c \uae4c\uc9c0 \uae30\ub2e4\ub9bd\ub2c8\ub2e4.\n(\uc774\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"run()"),"\uc774 return\ud558\uba74 \uc218\ud589\ub429\ub2c8\ub2e4.)"),(0,a.kt)("p",null,"\ub2e4\uc74c \uacb0\uacfc\ub97c \uc5bb\uac70\ub098"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Hello from main thread\nHello from new thread\n")),(0,a.kt)("p",null,"\ub300\uc2e0 \uc774\ub7f0 \uacb0\uacfc\ub97c \uc5bb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Hello from new thread\nHello from main thread\n")),(0,a.kt)("p",null,"\uc774\ub294 \uc5b4\ub5a4 \uc2a4\ub808\ub4dc\uac00 ",(0,a.kt)("inlineCode",{parentName:"p"},"println()"),"\uc744 \ubc1b\ub294\uac00\uc5d0 \ub530\ub77c \ub2e4\ub985\ub2c8\ub2e4.\n\uc774\ub7f0 \ud0c0\uc774\ubc0d\uc5d0 \ub300\ud55c \uc758\uc874\uc131\uc740 \uba40\ud2f0\uc2a4\ub808\ub4dc \ud504\ub85c\uadf8\ub798\ubc0d\uc744 \uc5b4\ub835\uac8c \ub9cc\ub4dc\ub294 \uc6d0\uc778\uc785\ub2c8\ub2e4.\n\ucf54\ub4dc\ub97c \ud55c\ubc88 \uc2e4\ud589\uc2dc\ucf30\uc744 \ub54c \ub3d9\uc791\uc774 \uc77c\uad00\uc131\uc744 \ubcf4\uc7a5\ud55c\ub2e4\uace0 \ud560 \uc218 \uc5c6\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"\uc65c `Thread.yield`\ub97c \uc0ac\uc6a9\ud558\ub098\uc694?"),(0,a.kt)("p",null,"Java documentation\uc5d0 \ub530\ub974\uba74 ",(0,a.kt)("inlineCode",{parentName:"p"},"yeild()"),"\ub294"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"a hint to the scheduler that the current thread is willing to yield its current use of a processor.")),(0,a.kt)("p",null,"\uc774 \ud638\ucd9c\uc774 \uc5c6\ub2e4\uba74, \uc0c8 \uc2a4\ub808\ub4dc\uc758 \uc2dc\uc791 \uc624\ubc84\ud5e4\ub4dc \ub54c\ubb38\uc5d0 \uba54\uc778 \uc2a4\ub808\ub4dc\uac00 \uac70\uc758 \ud655\uc815\uc801\uc73c\ub85c ",(0,a.kt)("inlineCode",{parentName:"p"},"println()"),"\uc744 \ucc98\uc74c\uc73c\ub85c \ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n(\ud558\uc9c0\ub9cc, \ubcf4\uc7a5\ub418\ub294\uac83\uc740 \uc544\ub2d9\ub2c8\ub2e4)"),(0,a.kt)("p",null,"\uc774\ub97c ",(0,a.kt)("inlineCode",{parentName:"p"},"Thread.sleep(1)"),"\ub85c \ubc14\uafb8\uba74 \uc5b4\ub5bb\uac8c \ub420\uae4c\uc694?")),(0,a.kt)("h3",{id:"our-first-lock"},"Our First Lock"),(0,a.kt)("p",null,"\uc5ec\ub7ec \uc2a4\ub808\ub4dc\uac00 \uacf5\uc720 \uba54\ubaa8\ub9ac\uc5d0 \uc811\uadfc\ud558\uba74, \uc11c\ub85c\uc758 \ubc1c\uc744 \ubc1f\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n",(0,a.kt)("em",{parentName:"p"},"lock"),"\uc744 \uc0ac\uc6a9\ud558\uc5ec \ud55c \uc2dc\uc810\uc5d0 \ud55c \uc2a4\ub808\ub4dc\ub9cc \uc811\uadfc\uac00\ub2a5\ud558\uac8c \ud558\uc5ec ",(0,a.kt)("em",{parentName:"p"},"mutual exclusion(\uc0c1\ud638\ubc30\uc81c)"),"\ud568\uc73c\ub85c\uc11c \ud68c\ud53c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class Counting {\n    public static void main(String[] args) throws InterruptedException {\n        class Counter {\n            private int count = 0;\n            public void increment() { ++count; }\n            public int getCount() { return count; }\n        }\n        final Counter counter = new Counter();\n        class CountingThread extends Thread {\n            public void run() {\n            for(int x = 0; x < 10000; ++x)\n                    counter.increment();\n            }\n        }\n        CountingThread t1 = new CountingThread();\n        CountingThread t2 = new CountingThread();\n        t1.start(); t2.start();\n        t1.join(); t2.join();\n        System.out.println(counter.getCount());\n    }\n}\n")),(0,a.kt)("p",null,"\uc774 \ucf54\ub4dc\ub97c \ub3cc\ub9b0\ub2e4\uba74, \ub9e4\ubc88 \ub2e4\ub978 \uac12\uc744 \uc5bb\uc744 \uac83\uc785\ub2c8\ub2e4.\n\uc774\ub294 \uc5f0\uc0b0\ud560 \ub54c \ud0c0\uc774\ubc0d\uc774 \uc5f0\uad00\ub418\uba74\uc11c, \ub450 \uc2a4\ub808\ub4dc\uac04 ",(0,a.kt)("inlineCode",{parentName:"p"},"Counter"),"\uc758 ",(0,a.kt)("inlineCode",{parentName:"p"},"count"),"\uba64\ubc84\uc5d0 ",(0,a.kt)("em",{parentName:"p"},"race condition"),"\uc774 \ubc1c\uc0dd\ud588\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc774\ub7f0 \uacb0\uacfc\uc5d0 \ub180\ub790\ub2e4\uba74, \uc790\ubc14 \ucef4\ud30c\uc77c\ub7ec\uac00 ",(0,a.kt)("inlineCode",{parentName:"p"},"++count"),"\uc5d0\uc11c \uc0dd\uc131\ud558\ub294 \ubc14\uc774\ud2b8\ucf54\ub4dc\ub97c \uc0dd\uac01\ud574 \ubd05\uc2dc\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"getfield #2\niconst_1\niadd\nputfield #2\n")),(0,a.kt)("p",null,"JVM \ubc14\uc774\ud2b8\ucf54\ub4dc\uc5d0 \uc775\uc219\ud558\uc9c0 \uc54a\ub354\ub77c\ub3c4 ",(0,a.kt)("inlineCode",{parentName:"p"},"getfield"),"\uc5d0\uc11c ",(0,a.kt)("inlineCode",{parentName:"p"},"count")," \uac12\uc744 \uac00\uc838\uc624\uace0\n",(0,a.kt)("inlineCode",{parentName:"p"},"iconst_1"),"\ub294 \ub530\ub77c\uc624\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"iadd"),"\ub97c \ud1b5\ud574 1\uc744 \ub354\ud569\ub2c8\ub2e4.\n",(0,a.kt)("inlineCode",{parentName:"p"},"putfield"),"\ub294 \ub2e4\uc2dc \uac12\uc744 ",(0,a.kt)("inlineCode",{parentName:"p"},"count"),"\uc5d0 \uc791\uc131\ud558\uac8c \ub429\ub2c8\ub2e4.\n\uc774 \ud328\ud134\uc740 ",(0,a.kt)("em",{parentName:"p"},"read-modify-write"),"\ub85c \ud754\ud788 \uc54c\ub824\uc838 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ud574\uacb0\ubc95\uc740 ",(0,a.kt)("inlineCode",{parentName:"p"},"count"),"\uc5d0 ",(0,a.kt)("em",{parentName:"p"},"synchronize")," \uc5d1\uc138\uc2a4\ub97c \uc8fc\ub294 \uac83\uc785\ub2c8\ub2e4.\n\uadf8 \ubc29\ubc95 \uc911 \ud558\ub098\ub294 \ubaa8\ub4e0 \uc790\ubc14 \uac1d\uccb4\uc5d0 \uace0\uc720 \ub77d(intrinsic lock)\uc744 \uc0ac\uc6a9\ud558\uba70 ",(0,a.kt)("inlineCode",{parentName:"p"},"increment()"),"\ub97c \ub3d9\uae30\ud654 \uc2dc\ud0a4\ub294 \uac83\uc785\ub2c8\ub2e4.\n(",(0,a.kt)("em",{parentName:"p"},"mutex"),", ",(0,a.kt)("em",{parentName:"p"},"monitor"),", ",(0,a.kt)("em",{parentName:"p"},"critical section"),"\uc73c\ub85c\ub3c4 \ub4e4\uc5b4\ubd24\uc744 \uac83\uc785\ub2c8\ub2e4.)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"class Counter {\n    private int count = 0;\n>   public synchronized void increment() { ++count; }\n    public int getCount() { return count; }\n}\n")),(0,a.kt)("p",null,"\uc774\uc81c ",(0,a.kt)("inlineCode",{parentName:"p"},"increment()"),"\ub294 \ud638\ucd9c\ud560\ub54c ",(0,a.kt)("inlineCode",{parentName:"p"},"Counter"),"\uc758 \uc624\ube0c\uc81d\ud2b8 \ub77d\uc744 \uc694\uad6c\ud558\uace0, \ubc18\ud658\ud560\ub54c \ud574\uc81c\ud569\ub2c8\ub2e4.\n\ub530\ub77c\uc11c \ud55c \uc2a4\ub808\ub4dc\ub9cc \ud55c \ub54c\uc5d0 \ud568\uc218 \ubc14\ub514\ub97c \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\ub2e4\ub978 \uc2a4\ub808\ub4dc\uac00 \ud638\ucd9c\ud558\uba74 \ub77d\uc774 \ud574\uc81c\ub420 \ub54c\uae4c\uc9c0 ",(0,a.kt)("em",{parentName:"p"},"block")," \ub429\ub2c8\ub2e4.\n",(0,a.kt)("a",{parentName:"p",href:"/posts/concurrency-models-3#atomic-variables"},"(\uc774\ud6c4\uc5d0 ",(0,a.kt)("inlineCode",{parentName:"a"},"java.util.concurrent.atomic")," \ud328\ud0a4\uc9c0\uac00 \ub77d\uc744 \uc0ac\uc6a9\ud558\ub294 \ub300\uc2e0 \uc88b\uc740 \ub300\uc548\uc744 \uc81c\uacf5\ud558\ub294\uac83\uc744 \ubcf4\uc785\ub2c8\ub2e4)")),(0,a.kt)("p",null,"\ub9e4\ubc88 20000\uc774\ub77c\ub294 \uacb0\uacfc\ub97c \uc5bb\uae30\uc5d0 \uc774\uc81c \ucda9\ubd84\ud569\ub2c8\ub2e4!\n\ud558\uc9c0\ub9cc, \uc774 \ucf54\ub4dc\uc5d0\ub3c4 \uc57d\uac04\uc758 \ubc84\uadf8\uac00 \ub0a8\uc544\uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"mysterious-memory"},"Mysterious Memory"),(0,a.kt)("p",null,"\uc774 \ucf54\ub4dc\ub294 \uc5b4\ub5a4 \uacb0\uacfc\ub97c \ub0bc\uae4c\uc694?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'public class Puzzle {\n    static boolean answerReady = false;\n    static int answer = 0;\n    static Thread t1 = new Thread() {\n        public void run() {\n            answer = 42;\n            answerReady = true;\n        }\n    };\n\n    static Thread t2 = new Thread() {\n        public void run() {\n            if (answerReady)\n                System.out.println("The meaning of life is: " + answer);\n            else\n                System.out.println("I don\'t know the answer");\n        }\n    };\n\n    public static void main(String[] args) throws InterruptedException {\n        t1.start(); t2.start();\n        t1.join(); t2.join();\n    }\n}\n')),(0,a.kt)("p",null,'"race condition"\uc744 \uc0dd\uac01\ud558\uace0 \uacc4\uc168\ub2e4\uba74, \uc815\ub2f5\uc785\ub2c8\ub2e4!\n\uc5b4\ub5a4 \uc2a4\ub808\ub4dc\uac00 \uba3c\uc800 \uc2e4\ud589\ub420\uc9c0 \uc21c\uc11c\uc5d0 \ub530\ub77c meaning of life\uc744 \uc54c \uc218 \uc788\uc744\uc9c0 \ub2e4\ub985\ub2c8\ub2e4.\n\ud558\uc9c0\ub9cc \uc6b0\ub9ac\uac00 \ubcfc \uc218 \uc788\ub294 \ub2e4\ub978 \uacb0\uacfc\uac00 \uc788\uc2b5\ub2c8\ub2e4.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"The meaning of life is: 0\n")),(0,a.kt)("p",null,"\uc5b4\ub5bb\uac8c ",(0,a.kt)("inlineCode",{parentName:"p"},"answer"),"\uac00 ",(0,a.kt)("inlineCode",{parentName:"p"},"answerReady"),"\uac00 ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"\uac00 \ub418\uae30\uc804\uc5d0 0\uc77c \uc218 \uc788\uc744\uae4c\uc694?\n\uc774\ub294 6-7\ubc88\uc9f8 \uc904\uc5d0\uc11c \uc6b0\ub9ac\uc5d0 \ubc1c\ubc11\uc5d0\uc11c \uc77c\uc5b4\ub098\ub294 \uc77c \ub54c\ubb38\uc785\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ucef4\ud30c\uc77c\ub7ec\uac00 \ucf54\ub4dc\ub97c \uc7ac\uc815\ub82c\ud558\uba70 \uc815\uc801\uc73c\ub85c \ucd5c\uc801\ud654\ud558\uac8c \ud5c8\uc6a9\ub418\uc5c8\uc2b5\ub2c8\ub2e4"),(0,a.kt)("li",{parentName:"ul"},"JVM\uc774 \ucf54\ub4dc\ub97c \uc7ac\uc815\ub82c\ud558\uc5ec \ub3d9\uc801\uc73c\ub85c \ucd5c\uc801\ud654\ud558\uac8c \ud5c8\uc6a9\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ud558\ub4dc\uc6e8\uc5b4\uac00 \uadf8\uac83\ub4e4\uc744 \uc7ac\uc815\ub82c\ud558\uc5ec \uc131\ub2a5\uc744 \ud5a5\uc0c1\uc2dc\ud0ac \uc218 \uc788\uac8c \ud5c8\uc6a9\ub418\uc5c8\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("p",null,"\uac00\ub054 \uc6b0\ub9ac \uc2a4\ub808\ub4dc\uc5d0 \ubcf4\uc774\uc9c0 \uc54a\ub294 \uac83\ub4e4\uc774 \uc601\ud5a5\uc744 \ubbf8\uce58\uae30\ub3c4 \ud569\ub2c8\ub2e4. ",(0,a.kt)("inlineCode",{parentName:"p"},"run()"),"\uc744 \ub2e4\uc2dc \uc791\uc131\ud588\ub2e4\uace0 \uc0c1\uc0c1\ud574 \ubd05\uc2dc\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public void run() {\n    while (!answerReady)\n        Thread.sleep(100);\n    System.out.println("The meaning of life is: " + answer);\n}\n')),(0,a.kt)("p",null,"\uc774 \ud504\ub85c\uadf8\ub7a8\uc740 ",(0,a.kt)("inlineCode",{parentName:"p"},"answerReady"),"\uac00 ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"\uac00 \ub418\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0 \uc808\ub300 \ub05d\ub098\uc9c0 \uc54a\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ubd88\ud589\ud558\uac8c\ub3c4 \ucd5c\uadfc\uc758 \uc131\ub2a5 \ud5a5\uc0c1\uc740 \uc774\ub7f0 \ucd5c\uc801\ud654\ub97c \ud1b5\ud574 \uc774\ub8e8\uc5b4\uc84c\uae30 \ub54c\ubb38\uc5d0, \uc774 \uacb0\uacfc\ub97c \ub2e4\ub904\uc57c\ub9cc \ud569\ub2c8\ub2e4.\n\ud655\uc2e4\ud558\uac8c \ubaa8\ub4e0\uac83\uc5d0 \uc790\uc720\ub85c\uc6b8 \uc21c \uc5c6\uc9c0\ub9cc, \uc5b4\ub5a4\uac83\uc5d0 \uc758\uc9c0\ud558\uace0 \uc758\uc9c0\ud558\uc9c0 \ub9d0\uc544\uc57c \ud560\uc9c0 \uc54c\uc544\uc57c \ud569\ub2c8\ub2e4.\n\ub530\ub77c\uc11c \uc790\ubc14 \uba54\ubaa8\ub9ac \ubaa8\ub378\uc774 \ub4e4\uc5b4\uc624\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"memory-visibility"},"Memory Visibility"),(0,a.kt)("p",null,"\uc790\ubc14 \uba54\ubaa8\ub9ac \ubaa8\ub378\uc740 \ud558\ub098\uc758 \uc2a4\ub808\ub4dc\ub97c \ud1b5\ud574 \uba54\ubaa8\ub9ac \ubcc0\ud654\uac00 \uc77c\uc5b4\ub098\uba74 \ub2e4\ub978 \uc2a4\ub808\ub4dc\uc5d0 ",(0,a.kt)("em",{parentName:"p"},"visible")," \ud558\ub3c4\ub85d \uc815\uc758\ub418\uc5c8\uc2b5\ub2c8\ub2e4. ",(0,a.kt)("a",{parentName:"p",href:"#1java-memory-model"},"[1]"),"\n\uacb0\ub860\uc740 \uc77d\uae30 \uc4f0\uae30\uc5d0 synchronization\uc744 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 \ud55c \ubcf4\uc7a5\ud560 \uc218 \uc5c6\uc74c\uc744 \ub098\ud0c0\ub0c5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc911\uc694\ud55c \uc810\uc740 \ub450 \uc2a4\ub808\ub4dc \ubaa8\ub450 synchronization\uc774 \ud544\uc694\ud558\ub2e4\ub294 \uac83\uc744 \uc27d\uac8c \ub193\uce5c\ub2e4\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uba40\ud2f0\uc2a4\ub808\ub4dc \ud504\ub85c\uadf8\ub7a8\uc774 \uc798\ubabb\ub420 \uc218 \uc788\ub294 \uc77c\ubc18\uc801\uc778 \ub450 \ubc29\ubc95\uc778\nrace condition\uacfc memory visibility\ub97c \uc0b4\ud3b4\ubcf4\uc558\uc73c\ub2c8 \uc138\ubc88\uc9f8\ub85c deadlock\uc744 \uc0b4\ud3b4\ubd05\uc2dc\ub2e4."),(0,a.kt)("h3",{id:"multiple-locks"},"Multiple Locks"),(0,a.kt)("p",null,"\uc55e\uc120 \ub2e8\ub77d\uc744 \ub2e4 \uc77d\uc5c8\ub2e4\uba74 \uba40\ud2f0\uc2a4\ub808\ub4dc \uc138\uacc4\uc5d0\uc11c \ubaa8\ub4e0 \uba54\uc18c\ub4dc\uac00 \ub3d9\uae30\ud654\ub418\uc5b4\uc57c \ud55c\ub2e4\uace0 \uc0dd\uac01\ud55c\ub2e4\uba74 \uc6a9\uc11c\ubc1b\uc744 \uac83\uc785\ub2c8\ub2e4.\n\ud558\uc9c0\ub9cc \uc774\ub294 \uc27d\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uccab\uc9f8\ub85c \ub054\ucc0d\ud558\uac8c \ube44\ud6a8\uc728\uc801\uc785\ub2c8\ub2e4.\n\ubaa8\ub4e0 \uba54\uc18c\ub4dc\uac00 \ub3d9\uae30\ud654\ub41c\ub2e4\uba74 \ub300\ubd80\ubd84\uc758 \uc2dc\uac04\uc744 block\ub418\ub294\ub370 \uc0ac\uc6a9\ud560 \uac83\uc785\ub2c8\ub2e4.\n\ud558\uc9c0\ub9cc \uc774\ub294 \uac71\uc815 \uc911 \ud558\ub098\uc77c \ubfd0\uc785\ub2c8\ub2e4.\n\ud558\ub098 \uc774\uc0c1\uc758 \ub77d\uc774 \uc788\ub2e4\uba74 \uc2a4\ub808\ub4dc\uac00 \ub370\ub4dc\ub77d\uc5d0 \uac78\ub9b4 \uae30\ud68c\ub97c \ub9cc\ub4dc\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,'\ud559\uc220\ub17c\ubb38\uc5d0\uc11c \ub3d9\uc2dc\uc131\uc5d0 \ub300\ud574 \uc790\uc8fc \uc0ac\uc6a9\ub418\ub294 "\uc2dd\uc0ac\ud558\ub294 \ucca0\ud559\uc790" \ubb38\uc81c\ub97c \ud1b5\ud574 deadlock\uc744 \ubcf4\uc77c \uac83\uc785\ub2c8\ub2e4.\n\ub2e4\uc12f\uba85\uc758 \ucca0\ud559\uc790\uac00 \uc6d0\ud0c1\uc5d0 \uc549\uc740 \uac83\uc744 \uc0c1\uc0c1\ud574 \ubcf4\uc138\uc694.\n\ud14c\uc774\ube14\uc5d0\ub294 5\uac1c\uc758 \uc813\uac00\ub77d(10\uac1c\uac00 \uc544\ub2d9\ub2c8\ub2e4)\uc774 \ub2e4\uc74c\uacfc \uac19\uc774 \ub193\uc5ec\uc788\uc2b5\ub2c8\ub2e4.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dinning-philosophers",src:t(63569).Z,width:"414",height:"372"})),(0,a.kt)("p",null,"\ucca0\ud559\uc790\ub4e4\uc740 \ubc30\uace0\ud504\ub2e4\uace0 \uc0dd\uac01\ud560 \uc218 \uc788\uace0, \ubc30\uace0\ud504\uba74 \uc591\ucabd\uc758 \uc813\uac00\ub77d\uc744 \uc7a1\uc544 \uc7a0\uc2dc \uc2dd\uc0ac\ud569\ub2c8\ub2e4.\n\ub2e4 \uba39\uc73c\uba74 \uc813\uac00\ub77d\uc744 \ub2e4\uc2dc \ub0b4\ub824\ub193\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"class Philosopher extends Thread {\n  private Chopstick left, right;\n  private Random random;\n\n  public Philosopher(Chopstick left, Chopstick right) {\n    this.left = left; this.right = right;\n    random = new Random();\n  }\n\n  public void run() {\n    try {\n      while(true) {\n        Thread.sleep(random.nextInt(1000));     // Think for a while\n        synchronized(left) {                    // Grab left chopstick \n          synchronized(right) {                 // Grab right chopstick \n            Thread.sleep(random.nextInt(1000)); // Eat for a while\n          }\n        }\n      }\n    } catch(InterruptedException e) {}\n  }\n}\n")),(0,a.kt)("p",null,"\ub2e4\uc12f\uba85\uc744 \ub3d9\uc2dc\uc5d0 \uc124\uc815\ud558\uba74, \uba87\uc2dc\uac04\uc815\ub3c4 \ud589\ubcf5\ud558\uac8c \uc791\ub3d9\ud558\ub2e4 \uc5b4\ub290 \uc21c\uac04 \ubaa8\ub450 \uba48\ucd94\uac8c \ub429\ub2c8\ub2e4.\n\uc7a0\uae50 \uc0dd\uac01\ud574\ubcf4\uba74, \ubaa8\ub4e0 \ucca0\ud559\uc790\uac00 \uac19\uc740 \ub54c\uc5d0 \uba39\uae30\ub97c \uacb0\uc2ec\ud560\ub54c \uc67c\ucabd\uc758 \uc813\uac00\ub77d\uc744 \uc7a1\uace0\n\uc624\ub978\ucabd\uc744 \uc7a1\uc73c\ub824\ub294 \uc21c\uac04, \ubaa8\ub450\uac00 \ud55c \uc813\uac00\ub77d\uc744 \uc7a1\uace0 \uc790\uc2e0\uc758 \uc624\ub978\ucabd\uc5d0 \uc813\uac00\ub77d\uc744 \uae30\ub2e4\ub9ac\ub290\ub77c \uba48\ucdb0\uc788\uac8c \ub428\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4.\nDeadlock"),(0,a.kt)("p",null,"\ud589\ubcf5\ud558\uac8c\ub3c4 \ub370\ub4dc\ub77d\uc5d0 \uac78\ub9ac\uc9c0 \uc54a\ub3c4\ub85d \ubcf4\uc7a5\ud558\ub294 \uaddc\uce59\uc774 \uc788\uc2b5\ub2c8\ub2e4.\n\ud56d\uc0c1 \uc804\uc5ed\uc73c\ub85c \uace0\uc815\ub41c \uc21c\uc11c\ub300\ub85c \uc5ec\ub7ec \ub77d\uc744 \uc5bb\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"class Philosopher extends Thread {\n> private Chopstick first, second;\n  private Random random;\n\n  public Philosopher(Chopstick left, Chopstick right) {\n>   if(left.getId() < right.getId()) {\n>     first = left; second = right;\n>   } else {\n>     first = right; second = left;    \n>   }\n    random = new Random();\n  }\n\n  public void run() {\n    try {\n      while(true) {\n        Thread.sleep(random.nextInt(1000));     // Think for a while\n>       synchronized(first) {                   // Grab first chopstick \n>         synchronized(second) {                // Grab second chopstick \n            Thread.sleep(random.nextInt(1000)); // Eat for a while\n          }\n        }\n      }\n    } catch(InterruptedException e) {}\n  }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"left"),"\uc640 ",(0,a.kt)("inlineCode",{parentName:"p"},"right")," \uc813\uac00\ub77d\uc744 \uc7a1\ub294 \ub300\uc2e0, ",(0,a.kt)("inlineCode",{parentName:"p"},"first"),"\uc640 ",(0,a.kt)("inlineCode",{parentName:"p"},"second"),"\ub97c \uc813\uac00\ub77d id \uc21c\uc11c\ub300\ub85c \uc7a1\uc73c\uba74\uc11c \ub77d \uc5c6\uc774 \ud589\ubcf5\ud558\uac8c \uacc4\uc18d\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n",(0,a.kt)("em",{parentName:"p"},"(\uc813\uac00\ub77d 1\ubc88\uacfc 5\ubc88 \uc0ac\uc774\uc5d0 \uc549\uc740 \uc0ac\ub78c\uc774 \uc67c\ucabd \ub300\uc2e0\uc5d0 \uc624\ub978\ucabd\uc744 \uba3c\uc800 \uc0b4\ud3b4\ubcf4\uba70 \ud574\uacb0\ub429\ub2c8\ub2e4)")),(0,a.kt)("h3",{id:"the-perils-of-alien-methods"},"The Perils of Alien Methods"),(0,a.kt)("p",null,"\ud070 \ud504\ub85c\uadf8\ub7a8\uc740 \uc885\uc885 ",(0,a.kt)("em",{parentName:"p"},"listeners"),"\ub97c \ub9cc\ub4e4\uc5b4 \ubaa8\ub4c8\uacfc \ub514\ucee4\ud50c\ub9c1\ud569\ub2c8\ub2e4.\n\uc5ec\uae30\uc5d0 \uc608\uc81c\ub85c ",(0,a.kt)("em",{parentName:"p"},"ProgressListeners"),"\uac00 \ub4f1\ub85d\ub420 \uc218 \uc788\ub294 \ud074\ub798\uc2a4\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"class Downloader extends Thread {\nprivate InputStream in;\n    private OutputStream out;\n    private ArrayList<ProgressListener> listeners;\n\n    public Downloader(URL url, String outputFilename) throws IOException {\n        in = url.openConnection().getInputStream();\n        out = new FileOutputStream(outputFilename);\n        listeners = new ArrayList<ProgressListener>();\n    }\n    public synchronized void addListener(ProgressListener listener) {\n        listeners.add(listener);\n    }\n    public synchronized void removeListener(ProgressListener listener) {\n        listeners.remove(listener);\n    }\n    private synchronized void updateProgress(int n) {\n        for (ProgressListener listener: listeners)\n>           listener.onProgress(n);\n    }\n\n    public void run() {\n        int n = 0, total = 0;\n        byte[] buffer = new byte[1024];\n\n        try {\n            while((n = in.read(buffer)) != -1) {\n                out.write(buffer, 0, n);\n                total += n;\n                updateProgress(total);\n            }\n            out.flush();\n        } catch (IOException e) { }\n    }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"addListener()"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"removeListener()"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"updateProgress()"),"\uac00 \ubaa8\ub450 \ub3d9\uae30\ud654\ub418\uba74\uc11c\n\uc5ec\ub7ec\uac1c\uc758 \uc2a4\ub808\ub4dc\uac00 \ub2e4\ub978 \uc2a4\ub808\ub4dc\uc758 \ubc1c\uc744 \ubc1f\uc9c0 \uc54a\uace0 \ud638\ucd9c\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ubb38\uc81c\ub294 ",(0,a.kt)("em",{parentName:"p"},"alien method"),"\ub77c \ubd88\ub9ac\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"updateProgress()")," \uc785\ub2c8\ub2e4.\n\uc774 \uba54\uc18c\ub4dc\ub294 \uc544\ubb34\uac83\ub3c4 \ubaa8\ub974\uace0, \ub2e4\ub978 \ub77d\uc744 \uc694\uad6c\ud558\ub294 \uac83\uc744 \ud3ec\ud568\ud574 \ubaa8\ub4e0 \uac83\uc744 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\ub530\ub77c\uc11c \uc6b0\ub9ac\ub294 \ub450\uac1c\uc758 \ub77d\uc774 \uc5b4\ub5a4 \uc21c\uc11c\ub300\ub85c \uc694\uad6c\ud574\uc57c\ud558\ub294\uc9c0 \uc54c\uc9c0 \ubabb\ud55c\ub2e4\ub294 \uac83\uc785\ub2c8\ub2e4.\n\uc774\uac83\uc740 \uc6b0\ub9ac\uac00 \ubc29\uae08 \ubcf8 \ub370\ub4dc\ub77d\uc744 \uc774\ub04c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc720\uc77c\ud55c \ud574\uacb0 \ubc29\ubc95\uc740, \ub77d \uc5c6\uc774 alien \uba54\uc18c\ub4dc\ub97c \uc2e4\ud589\ud558\ub294 \uac83\uc785\ub2c8\ub2e4.\n\uc774\ub97c \uc704\ud574 ",(0,a.kt)("inlineCode",{parentName:"p"},"listener"),"\uc758 ",(0,a.kt)("em",{parentName:"p"},"defensive copy"),"\ub97c \ud574\uc57c\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"private void updateProgress(int n) {\n    ArrayList<ProgressListener> listenersCopy; synchronized(this) {\n>       listenersCopy = (ArrayList<ProgressListener>)listeners.clone();\n    }\n    for (ProgressListener listener: listenersCopy)\n        listener.onProgress(n);\n}\n")),(0,a.kt)("p",null,"\uc774 \ubcc0\uacbd\uc740 \uc77c\uc11d\uc774\uc870\uc758 \ud6a8\uacfc\ub97c \uac00\uc9d1\ub2c8\ub2e4.\n\ub77d \uc5c6\uc774 alien \uba54\uc18c\ub4dc\ub97c \ubd80\ub97c \uc218 \uc788\uac8c \ud574\uc8fc\uace0 \ub77d\uc744 \ub4e4\uace0\uc788\ub294 \uc2dc\uac04\uc744 \ucd5c\uc18c\ud654\uc2dc\ucf1c\uc90d\ub2c8\ub2e4.\n\ud544\uc694 \uc774\uc0c1\uc73c\ub85c \ub77d\uc744 \ub4e4\uace0\uc788\uc73c\uba74 \uc131\ub2a5 \ud558\ub77d\uacfc\uacfc \ub370\ub4dc\ub77d\uc758 \uc704\ud5d8\uc131\uc744 \ubd80\ub985\ub2c8\ub2e4.\n\ub610\ud55c, \uc774 \ubcc0\uacbd\uc740 \ub3d9\uc2dc\uc131\uacfc \uad00\ub828 \uc5c6\ub294 \ub2e4\ub978 \ubc84\uadf8\ub97c \uace0\uce69\ub2c8\ub2e4.\n\ub9ac\uc2a4\ub108\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"removeListener()"),"\ub97c ",(0,a.kt)("inlineCode",{parentName:"p"},"onProgress()")," \uba54\uc18c\ub4dc \uc2e4\ud589 \uc911\uc5d0 ",(0,a.kt)("inlineCode",{parentName:"p"},"listner"),"\uc758 \ubcf5\uc0ac \uc5c6\uc774 \ud638\ucd9c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"day1-wrap-up"},"Day1 Wrap-Up"),(0,a.kt)("p",null,"\uc790\ubc14\uc758 \uba40\ud2f0\uc2a4\ub808\ub4dc\uc758 \uae30\ucd08 \ucf54\ub4dc\ub97c \ub2e4\ub918\uc2b5\ub2c8\ub2e4.\n\ub2e4\uc74c\uc5d0\uc11c\ub294 \ub354 \ub098\uc740 \uc120\ud0dd\uc744 \uc81c\uacf5\ud558\ub294 \ud45c\uc900 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0b4\ud3b4\ubcfc \uac83\uc785\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"what-we-learned-in-day-1"},"What We Learned in Day 1"),(0,a.kt)("p",null,"\uc790\ubc14\uc5d0\uc11c \uc0c1\ud638 \ubc30\uc81c \uc2e4\ud589\uc744 \uc704\ud574, \ubaa8\ub4e0 \uc790\ubc14 \uac1d\uccb4\uc5d0 \ud3ec\ud568\ub41c \ub77d\uc744 \uc0ac\uc6a9\ud55c \uc2a4\ub808\ub4dc\ub97c \ub9cc\ub4dc\ub294 \ubc95\uc744 \ub2e4\ub918\uc2b5\ub2c8\ub2e4.\n\ub610\ud55c \uc2a4\ub808\ub4dc\uc640 \ub77d\uc5d0\uc11c \uc138\uac00\uc9c0 \uc8fc\uc694 \uc704\ud5d8\uc778 race conditions, deadlock, and memory visibility\ub97c \ubcf4\uc558\uc2b5\ub2c8\ub2e4.\n\uadf8\ub9ac\uace0 \uc774\ub97c \ud53c\ud558\uae30 \uc704\ud55c \ubc29\ubc95\uc5d0 \ub300\ud574 \ub17c\uc758\ud588\uc2b5\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Synchronize all access to shared variables."),(0,a.kt)("li",{parentName:"ul"},"Both the writing and the reading threads need to use synchronization."),(0,a.kt)("li",{parentName:"ul"},"Acquire multiple locks in a fixed, global order."),(0,a.kt)("li",{parentName:"ul"},"Don\u2019t call alien methods while holding a lock."),(0,a.kt)("li",{parentName:"ul"},"Hold locks for the shortest possible amount of time.")),(0,a.kt)("h3",{id:"day-1-self-study"},"Day 1 Self-Study"),(0,a.kt)("p",null,"\ucc3e\uc544\ubcf4\uae30  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Check out William Pugh\u2019s \u201cJava memory model\u201d website."),(0,a.kt)("li",{parentName:"ul"},"Acquaint yourself with the JSR 133 (Java memory model) FAQ."),(0,a.kt)("li",{parentName:"ul"},"What guarantees does the Java memory model make regarding initialization safety? Is it always necessary to use locks to safely publish objects between threads?"),(0,a.kt)("li",{parentName:"ul"},"What is the double-checked locking anti-pattern? Why is it an anti-pattern?")),(0,a.kt)("p",null,"\uc2e4\uc2b5  "),(0,a.kt)("p",null,"Experiment with the original, broken \u201cdining philosophers\u201d example.\nTry modifying the length of time that philosophers think and eat and the number of philosophers.\nWhat effect does this have on how long it takes until deadlock?\nImagine that you were trying to debug this and wanted to increase the likelihood of reproducing the deadlock\u2014what would you do?"),(0,a.kt)("p",null,"(Hard) Create a program that demonstrates writes to memory appearing to be reordered in the absence of synchronization.\nThis is difficult because although the Java memory model allows things to be reordered,\nmost simple examples won\u2019t be optimized to the point of actually demonstrating the problem."),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("h3",{id:"1java-memory-model"},(0,a.kt)("a",{parentName:"h3",href:"http://docs.oracle.com/javase/specs/jls/se7/html/jls-17.html#jls-17.4"},"[1]Java Memory Model")))}c.isMDXComponent=!0},63569:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/dinning-philosophers-dd1641278f6fa0b0efa9c7af5078101b.png"},25065:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/ford-model-t-48420c1c3827d5d9e882499e160fc44f.jpeg"}}]);