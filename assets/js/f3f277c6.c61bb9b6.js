"use strict";(self.webpackChunkjwher_blog=self.webpackChunkjwher_blog||[]).push([[2860],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(67294);function M(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){M(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,M=function(e,t){if(null==e)return{};var n,a,M={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(M[n]=e[n]);return M}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(M[n]=e[n])}return M}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},N="mdxType",o={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},L=a.forwardRef((function(e,t){var n=e.components,M=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),N=p(n),L=M,c=N["".concat(l,".").concat(L)]||N[L]||o[L]||i;return n?a.createElement(c,r(r({ref:t},u),{},{components:n})):a.createElement(c,r({ref:t},u))}));function c(e,t){var n=arguments,M=t&&t.mdxType;if("string"==typeof e||M){var i=n.length,r=new Array(i);r[0]=L;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[N]="string"==typeof e?e:M,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}L.displayName="MDXCreateElement"},93079:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>o,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),M=(n(67294),n(3905));const i={authors:["jwher"],description:"Dex: OpenID \ucee4\ub125\ud130",slug:"dex",tags:["tech","kubernetes","istio"],title:"Dex"},r=void 0,s={permalink:"/posts/dex",editUrl:"https://github.com/jwher/jwher.github.io/posts/2021-08-12-dex/index.md",source:"@site/posts/2021-08-12-dex/index.md",title:"Dex",description:"Dex: OpenID \ucee4\ub125\ud130",date:"2021-08-12T00:00:00.000Z",formattedDate:"August 12, 2021",tags:[{label:"tech",permalink:"/posts/tags/tech"},{label:"kubernetes",permalink:"/posts/tags/kubernetes"},{label:"istio",permalink:"/posts/tags/istio"}],readingTime:6.385,hasTruncateMarker:!0,authors:[{name:"Jeongwon Her",title:"MLOps Engineer",url:"https://github.com/jwher",imageURL:"https://github.com/jwher.png",key:"jwher"}],frontMatter:{authors:["jwher"],description:"Dex: OpenID \ucee4\ub125\ud130",slug:"dex",tags:["tech","kubernetes","istio"],title:"Dex"},prevItem:{title:"Istio",permalink:"/posts/istio"},nextItem:{title:"K8S Tip Configmap",permalink:"/posts/k8s-tip-configmap"}},l={authorsImageUrls:[void 0]},p=[{value:"Dex",id:"dex",level:2},{value:"\uc0ac\uc804\uc9c0\uc2dd",id:"\uc0ac\uc804\uc9c0\uc2dd",level:3},{value:"OAuth2.0",id:"oauth20",level:3},{value:"OIDC",id:"oidc",level:3},{value:"Dex",id:"dex-1",level:3},{value:"\ub85c\uceec \uc608\uc81c",id:"\ub85c\uceec-\uc608\uc81c",level:2},{value:"\uc694\uad6c\uc0ac\ud56d",id:"\uc694\uad6c\uc0ac\ud56d",level:3},{value:"\ubc14\uc774\ub108\ub9ac",id:"\ubc14\uc774\ub108\ub9ac",level:3},{value:"LDAP",id:"ldap",level:3},{value:"Tips",id:"tips",level:2},{value:"Reference",id:"reference",level:3}],u={toc:p},N="wrapper";function o(e){let{components:t,...i}=e;return(0,M.kt)(N,(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,M.kt)("p",null,(0,M.kt)("img",{alt:"dex",src:n(92681).Z,width:"298",height:"109"}),"\n",(0,M.kt)("em",{parentName:"p"},"\uc790\uc6d0\uc5d0 OpenID \uc778\uc99d\uc744 \uc81c\uacf5\ud558\ub294 \ubc29\ubc95"),"  "),(0,M.kt)("h1",{id:"\ubaa9\ucc28"},"\ubaa9\ucc28"),(0,M.kt)("ul",null,(0,M.kt)("li",{parentName:"ul"},(0,M.kt)("a",{parentName:"li",href:"#dex"},"Dex")),(0,M.kt)("li",{parentName:"ul"},(0,M.kt)("a",{parentName:"li",href:"#%EB%A1%9C%EC%BB%AC-%EC%98%88%EC%A0%9C"},"\ub85c\uceec \uc608\uc81c"))),(0,M.kt)("br",null),(0,M.kt)("h2",{id:"dex"},"Dex"),(0,M.kt)("h3",{id:"\uc0ac\uc804\uc9c0\uc2dd"},"\uc0ac\uc804\uc9c0\uc2dd"),(0,M.kt)("p",{align:"center"},(0,M.kt)("img",{src:"/assets/img/dex/social-icons.gif"})),(0,M.kt)("p",null,"\uc6f9\uc11c\ube44\uc2a4\ub97c \uc774\uc6a9\ud558\ub2e4 \ubcf4\uba74 \ub2e4\uc591\ud55c \uc18c\uc15c \uacc4\uc815\uc73c\ub85c \ub85c\uadf8\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uc774\ub294 \uac01\uac01 ",(0,M.kt)("strong",{parentName:"p"},(0,M.kt)("a",{parentName:"strong",href:"https://ko.wikipedia.org/wiki/%EC%9D%B8%EA%B0%80"},"\uc778\uac00(authorization)")),"\n\uc640 ",(0,M.kt)("strong",{parentName:"p"},(0,M.kt)("a",{parentName:"strong",href:"https://ko.wikipedia.org/wiki/%EC%9D%B8%EC%A6%9D"},"\uc778\uc99d(authentication)")),"\n\uc744 \uc81c\uacf5\ud558\ub294 ",(0,M.kt)("strong",{parentName:"p"},"OAuth2.0"),"\uacfc ",(0,M.kt)("strong",{parentName:"p"},"OIDC"),"\ub97c \uc0ac\uc6a9\ud574 \uad6c\ud604\ub429\ub2c8\ub2e4."),(0,M.kt)("blockquote",null,(0,M.kt)("div",{align:"center"},"![oauth](/img/logos/oauth.svg) ![open-id](/img/logos/open-id.svg) \uac11\uc790\uae30 \uc774\uac8c \ubb50\uc8e0\ud83d\ude35")),(0,M.kt)("h3",{id:"oauth20"},"OAuth2.0"),(0,M.kt)("p",null,"OAuth(Open Authorization)\ub294 ",(0,M.kt)("strong",{parentName:"p"},"\uc5d1\uc138\uc2a4 \uad8c\ud55c"),"\uc744 \ud655\uc778\ud558\ub294 ",(0,M.kt)("a",{parentName:"p",href:"https://ko.wikipedia.org/wiki/%EA%B0%9C%EB%B0%A9%ED%98%95_%ED%91%9C%EC%A4%80"},"\uac1c\ubc29\ud615 \ud45c\uc900")," \uc785\ub2c8\ub2e4.\n\uad8c\ud55c\uc774 \uc788\ub294 \uc0ac\uc6a9\uc790\uac00 ",(0,M.kt)("strong",{parentName:"p"},"\uc11c\ub4dc\ud30c\ud2f0 \uc560\ud50c\ub9ac\ucf00\uc774\uc158"),"\uc744 \uc0ac\uc6a9\ud574 \uc790\uc6d0\uc5d0 \uc811\uadfc\ud558\uae30 \uc704\ud574\uc11c,\n\uc774\uc804\uae4c\uc9c0\ub294 \ud398\uc774\uc2a4\ubd81\uacfc \uac19\uc740 idP(identity Providers)\uc758 ",(0,M.kt)("strong",{parentName:"p"},"\ud328\uc2a4\uc6cc\ub4dc"),"\ub97c \ub118\uaca8 \uad8c\ud55c\uc744 \ud655\uc778\ud588\uc73c\ub098,\nOAuth\ub294 \ud328\uc2a4\uc6cc\ub4dc \uc5c6\uc774 ",(0,M.kt)("strong",{parentName:"p"},"\uc5d1\uc138\uc2a4 \ud1a0\ud070"),"\uc744 \ub118\uaca8 \uad8c\ud55c\uc744 \ud655\uc778\ud569\ub2c8\ub2e4.  "),(0,M.kt)("p",null,(0,M.kt)("em",{parentName:"p"},"\uc5d1\uc138\uc2a4 \ud1a0\ud070\uc740 \ub300\uac8c JWT(JSON Web Token)\ub97c \ucfe0\ud0a4\ub85c \uc0ac\uc6a9\ud569\ub2c8\ub2e4"),"  "),(0,M.kt)("p",null,(0,M.kt)("a",{parentName:"p",href:"https://www.ietf.org/rfc/rfc6749.txt"},"RFC6749(OAuth 2.0)"),(0,M.kt)("br",{parentName:"p"}),"\n",(0,M.kt)("a",{parentName:"p",href:"https://www.ietf.org/rfc/rfc7519.txt"},"RFC7519(JWT)"),"  "),(0,M.kt)("h3",{id:"oidc"},"OIDC"),(0,M.kt)("p",null,"OIDC(OpenID Connect)\ub294 OAuth2.0 \uc778\uac00\ub97c \uae30\ubc18\uc73c\ub85c \ud55c \uc778\uc99d\uc785\ub2c8\ub2e4.\nOIDC\ub97c \uc0ac\uc6a9\ud574 \uc778\uc99d\ub41c \uc138\uc158\uacfc ",(0,M.kt)("strong",{parentName:"p"},"\uc0ac\uc6a9\uc790 \uc815\ubcf4"),"\ub97c \uc694\uccad/\uc218\uc2e0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\nOIDC\ub294 JSON \ub370\uc774\ud130 \ud615\uc2dd\uc73c\ub85c RESTful HTTP API\ub97c \uc9c0\uc6d0\ud558\uace0 \ud655\uc7a5 \uac00\ub2a5\ud569\ub2c8\ub2e4.\nOAuth2.0 \uad8c\ud55c \uc11c\ubc84\uc778 ",(0,M.kt)("strong",{parentName:"p"},"OIDC \uc81c\uacf5\uc790(OP, OIDC Provider)")," \uac00\n\uc778\uc99d\uc774 \ud544\uc694\ud55c ",(0,M.kt)("strong",{parentName:"p"},"\uc2e0\ub8b0 \ub2f9\uc0ac\uc790(RPs, Relying Parties)")," \uc5d0 \uc18c\uc720\uad8c\uc744 \uc785\uc99d\ud574\uc90d\ub2c8\ub2e4.\n\uc774\ub294 \uc8fc\ub85c ",(0,M.kt)("a",{parentName:"p",href:"https://ko.wikipedia.org/wiki/%ED%86%B5%ED%95%A9_%EC%9D%B8%EC%A6%9D"},"\ud1b5\ud569 \uc778\uc99d(SSO, Single Sign-On)"),"\n\uc744 \uc704\ud574 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),(0,M.kt)("details",{markdown:"1"},(0,M.kt)("summary",null,"OIDC JSON"),(0,M.kt)("pre",null,(0,M.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "iss": "http://127.0.0.1:5556/dex",\n  "sub": "CgcyMzQyNzQ5EgZnaXRodWI",\n  "aud": "example-app",\n  "exp": 1492882042,\n  "iat": 1492795642,\n  "at_hash": "bi96gOXZShvlWYtal9Eqiw",\n  "email": "jane.doe@coreos.com",\n  "email_verified": true,\n  "groups": [\n    "admins",\n    "developers"\n  ],\n  "name": "Jane Doe"\n}\n'))),"[[\uc0bc\uc131]OIDC](https://www.samsungsds.com/kr/insights/oidc.html) [RFC6750(OAuth 2.0 Authorization Framework)](https://www.ietf.org/rfc/rfc6750.txt) [[\uacf5\uc2dd]OIDC Implementer's Guide](https://openid.net/specs/openid-connect-basic-1_0.html#CodeFlow)",(0,M.kt)("blockquote",null,(0,M.kt)("p",{parentName:"blockquote"},"\uc18c\uc15c \ub85c\uadf8\uc778\uc774 \uc774\ub807\uac8c \ubcf5\uc7a1\ud588\uad70\uc694 \ud83d\ude05")),(0,M.kt)("br",null),(0,M.kt)("h3",{id:"dex-1"},"Dex"),(0,M.kt)("br",null),(0,M.kt)("blockquote",null,(0,M.kt)("p",{align:"center"},(0,M.kt)("img",{src:"/assets/img/dex/dex-workflow.png"}),(0,M.kt)("br",null),"\uac04\ub7b5\ud654\ub41c \ud750\ub984\ub3c4"),(0,M.kt)("details",{markdown:"1"},(0,M.kt)("summary",null,"\uc790\uc138\ud55c \ud750\ub984"),(0,M.kt)("p",{align:"center"},(0,M.kt)("img",{src:"/assets/img/dex/oidc_authservice_sequence_diagram.svg",alt:"oidc_authservice_sequence_diagram"})),"\ucfe0\ubc84\ub124\ud2f0\uc2a4\uc5d0\uc11c \ub3d9\uc791\ud558\ub294 \ud750\ub984\uc785\ub2c8\ub2e4. \ub77c\uc6b0\ud130\ub85c Istio\ub97c \uc0ac\uc6a9\ud558\uace0 \uc778\uc99d \uc2dc\uc2a4\ud15c\uc774 \uc644\uc804\ud788 \uc5c6\ub294 Client App \uc0ac\uc774\uc5d0 \ubbf8\ub4e4\uc6e8\uc5b4\ub85c AuthService\uac00 \ub4e4\uc5b4\uac11\ub2c8\ub2e4.")),(0,M.kt)("p",null,"Dex\ub294 OIDC\uc758 \uad6c\ud604\uc73c\ub85c \uc5ec\ub7ec idP\uc758 \ucee4\ub125\ud130(\uc778\ud130\ud398\uc774\uc2a4)\uc640 \uc5f0\uacb0\ud574 \uc778\uc99d\ucc98\ub9ac\ub97c \uc911\uc559\ud654(Federate)\ud558\uace0,\n\uc11c\ub4dc\ud30c\ud2f0 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \uc778\uc99d\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.\n\uc5ec\uae30\uc11c idP\ub294 ",(0,M.kt)("a",{parentName:"p",href:"https://ko.wikipedia.org/wiki/LDAP"},"LDAP"),",\n",(0,M.kt)("a",{parentName:"p",href:"https://ko.wikipedia.org/wiki/SAML"},"SAML")," \ub610\ub294 GitHub, Google, Naver \ub4f1 \uc874\uc7ac\ud558\ub294 idP\uc77c\uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,M.kt)("br",null),(0,M.kt)("h2",{id:"\ub85c\uceec-\uc608\uc81c"},"\ub85c\uceec \uc608\uc81c"),(0,M.kt)("br",null),(0,M.kt)("h3",{id:"\uc694\uad6c\uc0ac\ud56d"},"\uc694\uad6c\uc0ac\ud56d"),(0,M.kt)("ul",null,(0,M.kt)("li",{parentName:"ul"},(0,M.kt)("a",{parentName:"li",href:"https://jwher.github.io/golang-setup"},"\uace0")," 1.15 \ubc84\uc804 \uc774\uc0c1",(0,M.kt)("br",null))),(0,M.kt)("h3",{id:"\ubc14\uc774\ub108\ub9ac"},"\ubc14\uc774\ub108\ub9ac"),(0,M.kt)("p",null,(0,M.kt)("a",{parentName:"p",href:"https://github.com/dexidp/dex"},"[\uae43\ud5d9]Dex")," \uc5d0\uc11c \ub371\uc2a4 \uc18c\uc2a4\ub97c \ud074\ub860\ud569\ub2c8\ub2e4."),(0,M.kt)("pre",null,(0,M.kt)("code",{parentName:"pre",className:"language-shell"},"$ git clone https://github.com/dexidp/dex.git\n$ cd dex/\n$ make build\n")),(0,M.kt)("br",null),(0,M.kt)("p",null,(0,M.kt)("a",{parentName:"p",href:"https://github.com/dexidp/dex/blob/master/examples/config-dev.yaml"},"\uc608\uc81c \uc124\uc815"),"\n\uc744 \uc0ac\uc6a9\ud574 \uc2e4\ud589\ud569\ub2c8\ub2e4. (",(0,M.kt)("inlineCode",{parentName:"p"},"examples/")," \ub514\ub809\ud1a0\ub9ac\uc5d0 \uc788\uc2b5\ub2c8\ub2e4)"),(0,M.kt)("pre",null,(0,M.kt)("code",{parentName:"pre",className:"language-shell"},"./bin/dex serve examples/config-dev.yaml\n")),(0,M.kt)("p",null,"\uc608\uc81c \uc124\uc815\uc758 \uc774\uba54\uc77c\uc740 ",(0,M.kt)("inlineCode",{parentName:"p"},"admin@example.com")," \ud328\uc2a4\uc6cc\ub4dc\ub294 ",(0,M.kt)("inlineCode",{parentName:"p"},"password"),"\uc785\ub2c8\ub2e4.\n(\uc124\uccad\uc5d0\ub294 bcrypt hash \uac12\uc774 \ub4e4\uc5b4\uac11\ub2c8\ub2e4.)  "),(0,M.kt)("br",null),(0,M.kt)("p",null,"\uc774\uc81c \ub371\uc2a4 OIDC \uc778\uc99d\uc744 \ud14c\uc2a4\ud2b8\ud560 \uc218 \uc788\ub294 \uc608\uc81c \ud074\ub77c\uc774\uc5b8\ud2b8 \uc571\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,M.kt)("pre",null,(0,M.kt)("code",{parentName:"pre",className:"language-shell"},"$ make examples\n$ ./bin/examples-app\n")),(0,M.kt)("br",null),(0,M.kt)("p",null,"\uc608\uc81c \ud074\ub77c\uc774\uc5b8\ud2b8 \uc571\uc5d0 \ub371\uc2a4\ub85c \ub85c\uadf8\uc778\ud558\ub294 \uc808\ucc28\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,M.kt)("p",null,"1. http://localhost:5555/ \uc758 \uc608\uc81c \ud074\ub77c\uc774\uc5b8\ud2b8\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4."),(0,M.kt)("br",null),(0,M.kt)("p",{align:"center"},(0,M.kt)("img",{src:"/assets/img/dex/example-login.png",alt:"example-login"})),(0,M.kt)("p",null,"2. `login` \ubc84\ud2bc\uc744 \ub204\ub985\ub2c8\ub2e4. (\uc5ec\ub7ec \uc785\ub825\ucc3d\uc774 \uc788\uc9c0\ub9cc \uc544\ubb34\uac83\ub3c4 \uc785\ub825\ud558\uc9c0 \uc54a\uc544\ub3c4 \ub429\ub2c8\ub2e4)"),(0,M.kt)("p",null,(0,M.kt)("em",{parentName:"p"},"\uc8fc\uc758! \ud604\uc7ac \ubc84\uadf8\uac00 \uc788\ub294 \uac83\uc73c\ub85c \ubcf4\uc785\ub2c8\ub2e4(21.08.12) \uc774\ub3d9\ud558\ub294 \ub9c1\ud06c\n(",(0,M.kt)("a",{parentName:"em",href:"http://127.0.0.1:5556/dex/auth?..."},"http://127.0.0.1:5556/dex/auth?..."),")\n\uc758 ",(0,M.kt)("inlineCode",{parentName:"em"},"127.0.0.1"),"\uc744 ",(0,M.kt)("inlineCode",{parentName:"em"},"localhost"),"\ub85c \ubcc0\uacbd\ud574\uc57c \uc815\uc0c1\uc801\uc73c\ub85c \ub3d9\uc791\ud569\ub2c8\ub2e4.")),(0,M.kt)("br",null),(0,M.kt)("p",{markdown:"1"},"3. `examples/config-dev.yaml`\uc5d0 \uc124\uc815\ud55c \uc774\uba54\uc77c\uacfc \ud328\uc2a4\uc6cc\ub4dc\ub97c \uc785\ub825\ud569\ub2c8\ub2e4. (`admin@example.com`, `password`)"),(0,M.kt)("br",null),(0,M.kt)("p",{align:"center"},(0,M.kt)("img",{src:"/assets/img/dex/example-grant.png",alt:"example-grant"})),(0,M.kt)("p",null,"4. \uc608\uc81c \uc571 \uc694\uccad\uc744 \uc2b9\uc778\ud569\ub2c8\ub2e4."),(0,M.kt)("br",null),(0,M.kt)("p",{align:"center"},(0,M.kt)("img",{src:"/assets/img/dex/example-token.png",alt:"example-token"})),(0,M.kt)("p",null,"5. \uc608\uc81c \uc571\uc774 \ub371\uc2a4\uc5d0 \uc694\uad6c\ud558\ub294 token\uc744 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,M.kt)("br",null),(0,M.kt)("h3",{id:"ldap"},"LDAP"),(0,M.kt)("p",null,"LDAP config\uc785\ub2c8\ub2e4. \ub098\uc911\uc5d0 \uae00\uc744 \ubcf4\uc644\ud558\uaca0\uc2b5\ub2c8\ub2e4.",(0,M.kt)("br",{parentName:"p"}),"\n",(0,M.kt)("a",{parentName:"p",href:"https://dexidp.io/docs/connectors/ldap/"},"[\uacf5\uc2dd]Authentication Through LDAP")),(0,M.kt)("details",{markdown:"1"},(0,M.kt)("summary",null,"ldap.yaml"),(0,M.kt)("pre",null,(0,M.kt)("code",{parentName:"pre",className:"language-yaml"},'issuer: http://127.0.0.1:5556/dex\nstorage:\n  type: sqlite3\n  config:\n    file: examples/dex.db\nweb:\n  http: 0.0.0.0:5556\n\nconnectors:\n- type: ldap\n  name: OpenLDAP\n  id: ldap\n  config:\n    # The following configurations seem to work with OpenLDAP:\n    #\n    # 1) Plain LDAP, without TLS:\n    host: your-ldap-address:389\n    insecureNoSSL: true\n    \n    # 2) LDAPS without certificate validation:\n    #host: localhost:636\n    #insecureNoSSL: false\n    #insecureSkipVerify: true\n  \n    # 3) LDAPS with certificate validation:\n    #host: YOUR-HOSTNAME:636\n    #insecureNoSSL: false\n    #insecureSkipVerify: false\n    #rootCAData: \'CERT\'\n    # ...where CERT="$( base64 -w 0 your-cert.crt )"\n\n    # This would normally be a read-only user.\n    bindDN: cn="",dc="",dc="",dc=""\n    bindPW: your-password\n\n    # dex UI\uc5d0 \ubcf4\uc5ec\uc9c0\ub294 \uc785\ub825\ucc3d\n    usernamePrompt: Username\n\n    userSearch:\n      baseDN: ou="",dc="",dc="",dc=""\n      #filter: "(objectClass=person)"\n      # LDAP \uc870\ud68c\uc2dc \uc0ac\uc6a9\ub418\ub294 ID\n      username: uid\n      # "DN" (case sensitive) is a special attribute name. It indicates that\n      # this value should be taken from the entity\'s DN not an attribute on\n      # the entity.\n      idAttr: uid\n      emailAttr: mail\n      nameAttr: gecos\n\n      #groupSearch:\n      #baseDN: ou=Groups,dc=example,dc=org\n      #filter: "(objectClass=groupOfNames)"\n\n      #userMatchers:\n        # A user is a member of a group when their DN matches\n        # the value of a "member" attribute on the group entity.\n        #- userAttr: DN\n        #groupAttr: member\n\n      # The group name should be the "cn" value.\n      #nameAttr: cn\n\nstaticClients:\n- id: example-app\n  redirectURIs:\n  - \'http://127.0.0.1:5555/callback\'\n  name: \'Example App\'\n  secret: ZXhhbXBsZS1hcHAtc2VjcmV0\n'))),(0,M.kt)("br",null),(0,M.kt)("h2",{id:"tips"},"Tips"),(0,M.kt)("p",{align:"center"},(0,M.kt)("img",{src:"/assets/img/pepe-electron.gif",alt:"pepe-electron"})),(0,M.kt)("p",null,"\uc774\uc81c \uc678\ubd80 idP\ub97c \uc0ac\uc6a9\ud574 \uc27d\uac8c \uc778\uc99d\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4!"),(0,M.kt)("h3",{id:"reference"},"Reference"),(0,M.kt)("p",null,(0,M.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/OAuth"},"[\uc704\ud0a4]OAuth"),(0,M.kt)("br",{parentName:"p"}),"\n",(0,M.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/ko/sva/9.0.7?topic=SSPREK_9.0.7/com.ibm.isam.doc/config/concept/con_oauth_20_concepts.html#con_oauth_20_concepts"},"[IBM]OAuth2.0 \uac1c\ub150"),(0,M.kt)("br",{parentName:"p"}),"\n",(0,M.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/OpenID#OpenID_Connect_(OIDC)"},"[\uc704\ud0a4]OpenID"),(0,M.kt)("br",{parentName:"p"}),"\n",(0,M.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/ko/sva/9.0.7?topic=concepts-openid-connect"},"[IBM]OpenID Connect \uac1c\ub150"),"   "),(0,M.kt)("p",null,(0,M.kt)("a",{parentName:"p",href:"https://dexidp.io/"},"[\uacf5\uc2dd]Dex"),"  "))}o.isMDXComponent=!0},92681:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyOTggMTA5Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzIzMWYyMDt9LmNscy0ye2ZpbGw6IzQ0OWZkODt9LmNscy0ze2ZpbGw6I2YwNGQ1Yzt9PC9zdHlsZT48L2RlZnM+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTgzLjUzNyw2Ny42NDVhMzcuMTI3NTUsMzcuMTI3NTUsMCwwLDEsMi4zMzItMTMuNTU2LDMxLjcxMzczLDMxLjcxMzczLDAsMCwxLDYuMTc5LTEwLjE1MSwyNi44MjkzOCwyNi44MjkzOCwwLDAsMSw4Ljc2NC02LjM2OCwyNC43MjQ3NCwyNC43MjQ3NCwwLDAsMSwxMC4yMTQtMi4yMDYsMjUuNzA5NDcsMjUuNzA5NDcsMCwwLDEsMTAuNDA0LDIuMDE3LDIwLjMxODU1LDIwLjMxODU1LDAsMCwxLDcuNjkyLDUuODAxLDI2LjY2NzcxLDI2LjY2NzcxLDAsMCwxLDQuNzI4LDkuMDc5LDQwLjA0NzQzLDQwLjA0NzQzLDAsMCwxLDEuNjQsMTEuODU0LDM1LjQyNTM5LDM1LjQyNTM5LDAsMCwxLS4zNzgsNS42NzNIMTkzLjc1cS42MzE1MSw5Ljk2Myw2LjExNiwxNS43NjMsNS40ODcsNS44MDM1LDE0LjMxMyw1LjgwMWEyNC4wOTMxLDI0LjA5MzEsMCwwLDAsOC4xMzMtMS4zMjQsMzYuMDQzMTgsMzYuMDQzMTgsMCwwLDAsNy4xMjUtMy40NjdsMy42NTYsNi44MDhhNTIuMTAyMzksNTIuMTAyMzksMCwwLDEtOC45NTMsNC40MTQsMzEuMTAyMzksMzEuMTAyMzksMCwwLDEtMTEuMjIyLDEuODkxLDMwLjAyNDc5LDMwLjAyNDc5LDAsMCwxLTExLjUzOS0yLjIwNiwyNy4zMTAzMSwyNy4zMTAzMSwwLDAsMS05LjMzMS02LjMwNSwyOS4xNjUzNiwyOS4xNjUzNiwwLDAsMS02LjI0Mi0xMC4wMjVBMzcuNTMxNjIsMzcuNTMxNjIsMCwwLDEsMTgzLjUzNyw2Ny42NDVaTTIyNi40MSw2Mi45OHEwLTkuNDU3NS0zLjk3MS0xNC40MzktMy45NzItNC45ODE1LTExLjE1OS00Ljk4MWExNS4xMTQxMiwxNS4xMTQxMiwwLDAsMC02LjI0MiwxLjMyNCwxNy4zMTM4OCwxNy4zMTM4OCwwLDAsMC01LjM2LDMuNzg0LDIwLjExNjUyLDIwLjExNjUyLDAsMCwwLTMuOTcxLDYuMDUyLDI3LjkzNzcsMjcuOTM3NywwLDAsMC0yLjA4Miw4LjI2MUgyMjYuNDFaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjU1Ljc5LDY2LjEzMiwyMzcuMjU0LDM2Ljg3NmgxMS4yMjJsOC4xOTYsMTMuNDkzcTEuMzg2LDIuNTI0NSwyLjksNS4xMDgsMS41MTUsMi41ODYsMy4xNTMsNS4xMDZoLjUwNHExLjM4Ni0yLjUyLDIuNzc0LTUuMTA2LDEuMzg3NDgtMi41ODQ1LDIuNzc1LTUuMTA4bDcuNDQtMTMuNDkzaDEwLjg0NGwtMTguNTM2LDMwLjM5LDE5LjkyMywzMC44OTVIMjc3LjIyN2wtOC45NTMtMTQuMjVxLTEuNjQxLTIuNzcwNS0zLjI3OS01LjU0OS0xLjY0MS0yLjc3MDUtMy40MDQtNS40MjFoLS41MDRxLTEuNjQxLDIuNjQ3NS0zLjE1Myw1LjM1OC0xLjUxMzUsMi43MTM1LTMuMDI2LDUuNjEybC04LjMyMywxNC4yNUgyMzUuNzRaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTgxLjExNiw5MS4xODlhOC4zMzMyNiw4LjMzMzI2LDAsMCwxLTIuMTgyLjI0M2MtMS4yNTMsMC0yLjQxMi0uOTA4LTIuNzEtMy4xNzRWOC4zNzhIMTY1Ljc1N1YzMS45NTlsLjQ0OSw5LjI5OHYxLjEyNGE0MS4xNTEsNDEuMTUxLDAsMCwwLTcuODg4LTUuMTI3LDIwLjkzMzg1LDIwLjkzMzg1LDAsMCwwLTkuMjA3LTEuODkxLDIzLjI4ODY5LDIzLjI4ODY5LDAsMCwwLTEwLjA4OCwyLjI2OSwyNS45OTUzOCwyNS45OTUzOCwwLDAsMC04LjQ0OSw2LjQzMSwzMS44NTk4NCwzMS44NTk4NCwwLDAsMC01Ljg2NCwxMC4xNTEsMzguNjIyNTEsMzguNjIyNTEsMCwwLDAtMi4yMDYsMTMuNDNxMCwxNS4zODcsNi44NzMsMjMuNzA3LDYuODcxNSw4LjMyMzUsMTguNDczLDguMzIzYTIwLjg0NTkyLDIwLjg0NTkyLDAsMCwwLDEwLjE1Mi0yLjU4NSwzOC44MDYxNCwzOC44MDYxNCwwLDAsMCw4LjM4Ni02LjExNmguMTg5YzEuMDA2LDUuNjUsNC4xNDQsOC43MDEsMTAuMTc1LDguNzAxYTEzLjM4MjMsMTMuMzgyMywwLDAsMCw1LjY5Ny0uOTY5Wm0tMTUuMzU5LTguNjY0YTI5LjAwNjgyLDI5LjAwNjgyLDAsMCwxLTcuNTY1LDYuMzY4LDE2LjUwMjEyLDE2LjUwMjEyLDAsMCwxLTguMDcsMi4wOHEtOC4wNzMsMC0xMi40ODUtNi4xNzktNC40MTYtNi4xNzctNC40MTQtMTcuMjc1YTMwLjk5Nzc0LDMwLjk5Nzc0LDAsMCwxLDEuMzg4LTkuNTgzLDIzLjkzOTUxLDIzLjkzOTUxLDAsMCwxLDMuNzgyLTcuMzc3LDE3LjMwNjQsMTcuMzA2NCwwLDAsMSw1LjYxMi00Ljc5MiwxNC40NjU1MSwxNC40NjU1MSwwLDAsMSw2Ljg3My0xLjcwMiwxOS41ODUsMTkuNTg1LDAsMCwxLDcuMzc3LDEuNDUsMjYuMTMzMiwyNi4xMzMyLDAsMCwxLDcuNTAyLDQuOTgxWiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTkzLjAxMiw1MS44NzhhMjUuMTk2MjQsMjUuMTk2MjQsMCwwLDAsMTQuMTc1LTE4LjUzQTUwLjk1Mjg1LDUwLjk1Mjg1LDAsMCwwLDc0Ljc2LDUuMTU1YTM4LjQ1MzY0LDM4LjQ1MzY0LDAsMCwxLDYuNzcxLDI0LjE3QTMyLjYyNDM4LDMyLjYyNDM4LDAsMCwxLDkzLjAxMiw1MS44NzhaTTMxLjkzNywzOC44NDVhMjUuMTg0MywyNS4xODQzLDAsMCwwLTIxLjg1OCw4LjA1NEE1MC45NTUzNSw1MC45NTUzNSwwLDAsMCwyMi43NjYsODguNDYyYTM4Ljg5Nzc3LDM4Ljg5Nzc3LDAsMCwxLDYuODMxLTI0LjQ4M0EzMi42MTI5MiwzMi42MTI5MiwwLDAsMSwzMS45MzcsMzguODQ1Wm01Ljc0LDM4LjM4NmEyNS4yMTcxNSwyNS4yMTcxNSwwLDAsMCwzLjY0MiwyNC4yMTUsNTEuMDYzMTMsNTEuMDYzMTMsMCwwLDAsMzguNjQzLS4wMzVBMzguNDY3LDM4LjQ2NywwLDAsMSw2MC4wNzUsODYuNjgsMzIuNDg4NzUsMzIuNDg4NzUsMCwwLDEsMzcuNjc3LDc3LjIzMVpNNjcuNzg4LDIyLjUwNkEyNS4yLDI1LjIsMCwwLDAsNTIuNTU5LDMuNzc0LDUxLjEzNTQyLDUxLjEzNTQyLDAsMCwwLDE3LjQyNiwyNi45MzVhMzguNzg1LDM4Ljc4NSwwLDAsMSwyNC41MjkuNjM5QTMyLjI3OTI4LDMyLjI3OTI4LDAsMCwxLDY3Ljc4OCwyMi41MDZaTTkwLjU1Nyw2Ni43NjFhMzIuNDAzNSwzMi40MDM1LDAsMCwxLTE1LjY3OCwxNi42MSwyNS4zNzA2OCwyNS4zNzA2OCwwLDAsMCwyMi44NTIsNS44MzQsNTEuMTEzNTIsNTEuMTEzNTIsMCwwLDAsMTMuOS0zNS4wMDlBMzguNjYzMTUsMzguNjYzMTUsMCwwLDEsOTAuNTU3LDY2Ljc2MVoiLz48Y2lyY2xlIGNsYXNzPSJjbHMtMyIgY3g9IjYwLjcwMiIgY3k9IjU0LjE5NiIgcj0iMTUuOTcyIi8+PC9zdmc+"}}]);