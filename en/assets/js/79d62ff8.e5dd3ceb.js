"use strict";(self.webpackChunkjwher_blog=self.webpackChunkjwher_blog||[]).push([[207],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),s=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(o.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(t),g=a,m=u["".concat(o,".").concat(g)]||u[g]||d[g]||l;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=g;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<l;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},80006:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const l={authors:["jwher"],description:"C/C++ \uc7ac\ud65c \ud6c8\ub828",slug:"cpp-coding-basic2",tags:["code","programmers"],title:"\ucf54\ub529 \uae30\ucd08 \ud2b8\ub808\uc774\ub2dd2"},i=void 0,p={permalink:"/en/posts/cpp-coding-basic2",editUrl:"https://github.com/jwher/jwher.github.io/posts/2023-05-18-cpp-coding-basic2/index.md",source:"@site/posts/2023-05-18-cpp-coding-basic2/index.md",title:"\ucf54\ub529 \uae30\ucd08 \ud2b8\ub808\uc774\ub2dd2",description:"C/C++ \uc7ac\ud65c \ud6c8\ub828",date:"2023-05-18T00:00:00.000Z",formattedDate:"May 18, 2023",tags:[{label:"code",permalink:"/en/posts/tags/code"},{label:"programmers",permalink:"/en/posts/tags/programmers"}],readingTime:6.465,hasTruncateMarker:!0,authors:[{name:"Jeongwon Her",title:"MLOps Engineer",url:"https://github.com/jwher",imageURL:"https://github.com/jwher.png",key:"jwher"}],frontMatter:{authors:["jwher"],description:"C/C++ \uc7ac\ud65c \ud6c8\ub828",slug:"cpp-coding-basic2",tags:["code","programmers"],title:"\ucf54\ub529 \uae30\ucd08 \ud2b8\ub808\uc774\ub2dd2"},nextItem:{title:"\ucf54\ub529 \uae30\ucd08 \ud2b8\ub808\uc774\ub2dd1",permalink:"/en/posts/cpp-coding-basic1"}},o={authorsImageUrls:[void 0]},s=[{value:"1. \ub367\uc148\uc2dd \ucd9c\ub825\ud558\uae30",id:"1-\ub367\uc148\uc2dd-\ucd9c\ub825\ud558\uae30",level:2},{value:"2. \ubb38\uc790\uc5f4 \ubd99\uc5ec\uc11c \ucd9c\ub825\ud558\uae30",id:"2-\ubb38\uc790\uc5f4-\ubd99\uc5ec\uc11c-\ucd9c\ub825\ud558\uae30",level:2},{value:"3. \ubb38\uc790\uc5f4 \ub3cc\ub9ac\uae30",id:"3-\ubb38\uc790\uc5f4-\ub3cc\ub9ac\uae30",level:2},{value:"character array vs string",id:"character-array-vs-string",level:3},{value:"4. \ud640\uc9dd \uad6c\ubd84\ud558\uae30",id:"4-\ud640\uc9dd-\uad6c\ubd84\ud558\uae30",level:2},{value:"5. \ubb38\uc790\uc5f4 \uacb9\uccd0\uc4f0\uae30",id:"5-\ubb38\uc790\uc5f4-\uacb9\uccd0\uc4f0\uae30",level:2},{value:"malloc",id:"malloc",level:3}],c={toc:s},u="wrapper";function d(e){let{components:n,...l}=e;return(0,a.kt)(u,(0,r.Z)({},c,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/posts/cpp-coding-basic2"},(0,a.kt)("img",{alt:"programmers",src:t(97456).Z,width:"280",height:"280"})),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("em",{parentName:"p"},"\ud504\ub85c\uadf8\ub798\uba38\uc2a4 \ucf54\ub529 \uae30\ucd08 \ud2b8\ub808\uc774\ub2dd \ud574\uc124 - C/C++"),"  "),(0,a.kt)("p",null,"\uc774 \uae00\uc740 \ud30c\uc774\uc36c\uacfc \uac19\uc740 \ud558\ub098\uc758 \uc5b8\uc5b4\uc5d0 \uc775\uc219\ud558\ub2e4\ub294 \uc804\uc81c\ud558\uc5d0 \uc791\uc131\ud569\ub2c8\ub2e4.  "),(0,a.kt)("p",null,"\ud544\uc790\ub294 \ud30c\uc774\uc36c\uc744 \ub108\ubb34 \ub9ce\uc774 \uc4f0\ub2e4 \ubcf4\ub2c8, C stdlib \ud568\uc218\ub97c \uc804\ubd80 \uc78a\uc5b4\ubc84\ub838\uc2b5\ub2c8\ub2e4.\n\uc124\uba85\uc744 \uacc1\ub4e4\uc5ec \ucc28\uadfc\ucc28\uadfc \ubc30\uc6cc\ubd05\uc2dc\ub2e4!"),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("h1",{id:"day2"},"Day2"),(0,a.kt)("h2",{id:"1-\ub367\uc148\uc2dd-\ucd9c\ub825\ud558\uae30"},"1. \ub367\uc148\uc2dd \ucd9c\ub825\ud558\uae30"),(0,a.kt)("p",null,"\ub450 \uc815\uc218 a, b\uac00 \uc8fc\uc5b4\uc9c8 \ub54c \ub2e4\uc74c\uacfc \uac19\uc740 \ud615\ud0dc\uc758 \uacc4\uc0b0\uc2dd\uc744 \ucd9c\ub825\ud558\ub294 \ucf54\ub4dc\ub97c \uc791\uc131\ud574 \ubcf4\uc138\uc694."),(0,a.kt)("p",null,"\uc785\ub8251"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"4 5\n")),(0,a.kt)("p",null,"\ucd9c\ub8251"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"4 + 5 = 9\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c++"},'#include <stdio.h>\n\nint main(void) {\n    int a;\n    int b;\n    scanf("%d %d", &a, &b);\n    printf("%d + %d = %d", a, b, a + b);\n    return 0;\n}\n')),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"2-\ubb38\uc790\uc5f4-\ubd99\uc5ec\uc11c-\ucd9c\ub825\ud558\uae30"},"2. \ubb38\uc790\uc5f4 \ubd99\uc5ec\uc11c \ucd9c\ub825\ud558\uae30"),(0,a.kt)("p",null,"\ub450 \uac1c\uc758 \ubb38\uc790\uc5f4 str1, str2\uac00 \uacf5\ubc31\uc73c\ub85c \uad6c\ubd84\ub418\uc5b4 \uc785\ub825\uc73c\ub85c \uc8fc\uc5b4\uc9d1\ub2c8\ub2e4.\n\uc785\ucd9c\ub825 \uc608\uc640 \uac19\uc774 str1\uacfc str2\uc744 \uc774\uc5b4\uc11c \ucd9c\ub825\ud558\ub294 \ucf54\ub4dc\ub97c \uc791\uc131\ud574 \ubcf4\uc138\uc694."),(0,a.kt)("p",null,"\uc785\ub8251"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"apple pen\n")),(0,a.kt)("p",null,"\ucd9c\ub8251"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"applepen\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c++"},'#include <stdio.h>\n#define LEN_INPUT1 11\n#define LEN_INPUT2 11\n\nint main(void) {\n    char s1[LEN_INPUT1];\n    char s2[LEN_INPUT2];\n    scanf("%s %s", s1, s2);\n    printf("%s%s", s1, s2);\n\n    return 0;\n}\n')),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"3-\ubb38\uc790\uc5f4-\ub3cc\ub9ac\uae30"},"3. \ubb38\uc790\uc5f4 \ub3cc\ub9ac\uae30"),(0,a.kt)("p",null,"\ubb38\uc790\uc5f4 str\uc774 \uc8fc\uc5b4\uc9d1\ub2c8\ub2e4.\n\ubb38\uc790\uc5f4\uc744 \uc2dc\uacc4\ubc29\ud5a5\uc73c\ub85c 90\ub3c4 \ub3cc\ub824\uc11c \uc544\ub798 \uc785\ucd9c\ub825 \uc608\uc640 \uac19\uc774 \ucd9c\ub825\ud558\ub294 \ucf54\ub4dc\ub97c \uc791\uc131\ud574 \ubcf4\uc138\uc694."),(0,a.kt)("p",null,"\uc785\ub8251"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"abcde\n")),(0,a.kt)("p",null,"\ucd9c\ub8251"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"a\nb\nc\nd\ne\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c++"},'#include <stdio.h>\n#define LEN_INPUT 11\n\nint main(void) {\n    char s1[LEN_INPUT];\n    scanf("%s", s1);\n    int len = strlen(s1);\n    for(int i=0; i<len; i++){\n        printf("%c\\n", s1[i]);\n    }\n    \n    \n    return 0;\n}\n\n')),(0,a.kt)("h3",{id:"character-array-vs-string"},"character array vs string"),(0,a.kt)("p",null,"\ubb38\uc790\uc5f4\uc744 \ud45c\uc2dc\ud558\uae30 \uc704\ud574 character array\ub97c \uc37c\uc2b5\ub2c8\ub2e4.\n\ud558\uc9c0\ub9cc \uc774\uac83\uc740 \uc5ec\ub7ec \ubb38\uc81c\ub97c \uac00\uc838\uc635\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uccab\uc9f8, character array\ub294 \uc815\ud655\ud55c \ub370\uc774\ud130 \ud0c0\uc785\uc774 \uc544\ub2d9\ub2c8\ub2e4.\n\ud2b9\ud788 ascii\ub85c \uc774\ub8e8\uc5b4\uc9c4 character array\ub294 \uc815\uc218 \ubc30\uc5f4\uacfc \ub2e4\ub97c\uac8c \uc5c6\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ub458\uc9f8, character array\ub97c \ucc98\ub9ac\ud558\uae30 \uc704\ud574 \ud45c\uc900\ud654\ub41c \uc5f0\uc0b0\uc790\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.\n\uc608\ub97c\ub4e4\uc5b4, ",(0,a.kt)("inlineCode",{parentName:"p"},"int a = 1 + 2;"),"\ub294 \uac00\ub2a5\ud558\ub098 ",(0,a.kt)("inlineCode",{parentName:"p"},"char* a = '1' + '2';"),"\ub294 \uc548\ub429\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc14b\uc9f8, \ubc30\uc5f4 \uacbd\uacc4\ub97c \uc27d\uac8c \ub118\uc744 \uc218 \uc788\uace0 \uc548\uc815\uc131\uc5d0 \ubb38\uc81c\uac00 \ub429\ub2c8\ub2e4.\n\ubc30\uc5f4 \ub05d\uc5d0 ",(0,a.kt)("inlineCode",{parentName:"p"},"\\0"),"\uc744 \ub204\ub77d\ud558\uae30\ub77c\ub3c4 \ud558\uba74, \ubb38\uc790\uc5f4\uc758 \ub05d\uc744 \uc815\uc0c1\uc801\uc73c\ub85c \uc54c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"string"),"\uc740 C++\uc758 built-in data type\uc774 \uc544\ub2d9\ub2c8\ub2e4.\n",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"\uc740 class object\ub85c \ud558\ub098\uc758 type\ucc98\ub7fc \uc874\uc7ac\ud569\ub2c8\ub2e4.\n\uc774\ub294 character array\uac00 \uac00\uc9c0\ub294 \ubb38\uc81c\ub97c \ud574\uacb0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ubb3c\ub860 character array\ub3c4 \uc7a5\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4.\n\uc815\ud574\uc9c4 \uae38\uc774\uc758 \uc815\ubcf4\uac00 \uac19\uc740 \uacf5\uac04\uc5d0 \uc788\uae30 \ub54c\ubb38\uc5d0 \ube60\ub974\uac8c \uc5d1\uc138\uc2a4 \uac00\ub2a5\ud569\ub2c8\ub2e4.\n(\ucef4\ud4e8\ud130 \uc18d\ub3c4\uac00 \ub9e4\uc6b0 \ube68\ub77c\uc9c4 \ud604\uc7ac\ub294 \uac70\uc758 \uc758\ubbf8 \uc5c6\ub294 \uc7a5\uc810\uc785\ub2c8\ub2e4.)"),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"4-\ud640\uc9dd-\uad6c\ubd84\ud558\uae30"},"4. \ud640\uc9dd \uad6c\ubd84\ud558\uae30"),(0,a.kt)("p",null,'\uc790\uc5f0\uc218 n\uc774 \uc785\ub825\uc73c\ub85c \uc8fc\uc5b4\uc84c\uc744 \ub54c \ub9cc\uc57d n\uc774 \uc9dd\uc218\uc774\uba74 "n is even"\uc744, \ud640\uc218\uc774\uba74 "n is odd"\ub97c \ucd9c\ub825\ud558\ub294 \ucf54\ub4dc\ub97c \uc791\uc131\ud574 \ubcf4\uc138\uc694.'),(0,a.kt)("p",null,"\uc785\ub8251"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"100\n")),(0,a.kt)("p",null,"\ucd9c\ub8251"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"100 is even\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c++"},'#include <stdio.h>\n\nint main(void) {\n    int a;\n    scanf("%d", &a);\n    if (a%2==0) printf("%d is even", a);   \n    else printf("%d is odd", a);\n\n    return 0;\n}\n')),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"5-\ubb38\uc790\uc5f4-\uacb9\uccd0\uc4f0\uae30"},"5. \ubb38\uc790\uc5f4 \uacb9\uccd0\uc4f0\uae30"),(0,a.kt)("p",null,"\ubb38\uc790\uc5f4 my_string, overwrite_string\uacfc \uc815\uc218 s\uac00 \uc8fc\uc5b4\uc9d1\ub2c8\ub2e4. \ubb38\uc790\uc5f4 my_string\uc758 \uc778\ub371\uc2a4 s\ubd80\ud130 overwrite_string\uc758 \uae38\uc774\ub9cc\ud07c\uc744 \ubb38\uc790\uc5f4 overwrite_string\uc73c\ub85c \ubc14\uafbc \ubb38\uc790\uc5f4\uc744 return \ud558\ub294 solution \ud568\uc218\ub97c \uc791\uc131\ud574 \uc8fc\uc138\uc694."),(0,a.kt)("p",null,"\uc81c\ud55c\uc0ac\ud56d"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"my_string\uc640 overwrite_string\uc740 \uc22b\uc790\uc640 \uc54c\ud30c\ubcb3\uc73c\ub85c \uc774\ub8e8\uc5b4\uc838 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"1 \u2264 overwrite_string\uc758 \uae38\uc774 \u2264 my_string\uc758 \uae38\uc774 \u2264 1,000"),(0,a.kt)("li",{parentName:"ul"},"0 \u2264 s \u2264 my_string\uc758 \uae38\uc774 - overwrite_string\uc758 \uae38\uc774")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"my_string"),(0,a.kt)("th",{parentName:"tr",align:null},"overwrite_string"),(0,a.kt)("th",{parentName:"tr",align:null},"s"),(0,a.kt)("th",{parentName:"tr",align:null},"result"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},'"He11oWor1d"'),(0,a.kt)("td",{parentName:"tr",align:null},'"lloWorl"'),(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},'"HelloWorld"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},'"Program29b8UYP"'),(0,a.kt)("td",{parentName:"tr",align:null},'"merS123"'),(0,a.kt)("td",{parentName:"tr",align:null},"7"),(0,a.kt)("td",{parentName:"tr",align:null},'"ProgrammerS123"')))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c++"},"#include <stdio.h>\n#include <stdbool.h>\n#include <stdlib.h>\n\nchar* solution(const char* my_string, const char* overwrite_string, int s) {\n    int answer_len = strlen(my_string);\n    int e = s + strlen(overwrite_string);\n\n    // \uc8fc\uc5b4\uc9c4 \uc870\uac74\uc5d0 \ub530\ub77c s\uac00 my_string - overwrite_string \ubcf4\ub2e4 \uc791\uc73c\ubbc0\ub85c\n    // \uc815\ub2f5 \ubb38\uc790\uc5f4 \uae38\uc774\ub294 my_string\uacfc \uac19\uc2b5\ub2c8\ub2e4.\n    char* answer = (char*) malloc((answer_len+1) * sizeof(char));\n    // \ubb38\uc790\uc5f4\uc744 \ubc14\ub85c strcpy \ud568\uc218\ub85c \ubcf5\uc0ac\ud574 \ub458 \uc218 \uc788\uc73c\ub098\n    // \uad73\uc774 \ubc30\uc5f4 \uc21c\ud68c\uc640 \ud560\ub2f9\uc744 \uc911\ubcf5\ud574 \ud560 \ud544\uc694 \uc5c6\uc2b5\ub2c8\ub2e4\n\n    int i;\n    for(i=0; i<answer_len; i++) {\n        if (i<s || e<=i ) answer[i] = my_string[i];\n        else answer[i] = overwrite_string[i-s];\n    }\n    // \ubb38\uc790\uc5f4 \ubc30\uc5f4\uc758 \ub05d\uc744 \ud45c\uc2dc\ud574\uc90d\ub2c8\ub2e4.\n    answer[i] = '\\0';\n    \n    return answer;\n}\n")),(0,a.kt)("h3",{id:"malloc"},"malloc"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"malloc"),"\uc740 memory allocation\uc744 \ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"malloc()"),"\uc740 size bytes\ub97c \ud560\ub2f9\ud558\uace0, \ud560\ub2f9\ub41c \uba54\ubaa8\ub9ac\uc758 \ud3ec\uc778\ud130\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.\n",(0,a.kt)("strong",{parentName:"p"},"\uba54\ubaa8\ub9ac\ub294 \ucd08\uae30\ud654 \ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.")," size\uac00 0\uc77c \uacbd\uc6b0 NULL\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.\n\ub610\ub294 \ub098\uc911\uc5d0 ",(0,a.kt)("inlineCode",{parentName:"p"},"free()"),"\uc5d0 \uc131\uacf5\uc801\uc73c\ub85c \uc804\ub2ec \ub420 \uc218 \uc788\ub294 unique \ud3ec\uc778\ud130 \uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"free()")," \ud568\uc218\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"malloc()"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"calloc()"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"realloc()"),"\ud6c4\uc5d0 \ubc18\ub4dc\uc2dc \ud638\ucd9c\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4.\n\ud3ec\uc778\ud130\uac00 NULL\uc778 \uacbd\uc6b0 \uc544\ubb34 \uc5f0\uc0b0\ub3c4 \ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. ",(0,a.kt)("inlineCode",{parentName:"p"},"free()")," \ud568\uc218\ub294 \uc544\ubb34 \uac12\ub3c4 \ubc18\ud658\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc774 \ubb38\uc81c\uc5d0\uc11c\ub294 \uc8fc\uc5b4\uc9c0\ub294 \uc785\ub825\uc774 const\uc774\uae30 \ub54c\ubb38\uc5d0, \ubcc0\ud615\ub41c \ubb38\uc790\uc5f4\uc744 \ub9ac\ud134\ud558\uae30 \uc704\ud558\uc5ec \uc0c8 \ubc30\uc5f4\uc744 \ub9cc\ub4e4\uace0 \ud544\uc694\ud55c \uae38\uc774 \ub9cc\ud07c \ub3d9\uc801 \ud560\ub2f9\uc744 \ud569\ub2c8\ub2e4."))}d.isMDXComponent=!0},97456:(e,n,t)=>{t.d(n,{Z:()=>r});const r="data:image/png;base64,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"}}]);