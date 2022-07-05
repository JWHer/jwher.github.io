"use strict";(self.webpackChunkjwher_blog=self.webpackChunkjwher_blog||[]).push([[8390],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,h=d["".concat(i,".").concat(m)]||d[m]||s[m]||l;return t?a.createElement(h,o(o({ref:n},u),{},{components:t})):a.createElement(h,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=d;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var c=2;c<l;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1875:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return s}});var a=t(7462),r=t(3366),l=(t(7294),t(3905)),o=["components"],p={authors:["jwher"],description:"OpenCV \uc790\ubc14\ub85c \ube4c\ub4dc\ud558\uae30",slug:"build-opencv-with-java",tags:["tech"],title:"Build OpenCV with Java"},i=void 0,c={permalink:"/kr/posts/build-opencv-with-java",editUrl:"https://github.com/jwher/jwher.github.io/posts/2022-06-29-build-opencv-with-java/index.md",source:"@site/posts/2022-06-29-build-opencv-with-java/index.md",title:"Build OpenCV with Java",description:"OpenCV \uc790\ubc14\ub85c \ube4c\ub4dc\ud558\uae30",date:"2022-06-29T00:00:00.000Z",formattedDate:"June 29, 2022",tags:[{label:"tech",permalink:"/kr/posts/tags/tech"}],readingTime:5.03,truncated:!0,authors:[{name:"Jeongwon Her",title:"MLOps Engineer",url:"https://github.com/jwher",imageURL:"https://github.com/jwher.png",key:"jwher"}],frontMatter:{authors:["jwher"],description:"OpenCV \uc790\ubc14\ub85c \ube4c\ub4dc\ud558\uae30",slug:"build-opencv-with-java",tags:["tech"],title:"Build OpenCV with Java"},nextItem:{title:"Pytorch in M1",permalink:"/kr/posts/pytorch-in-m1"}},u={authorsImageUrls:[void 0]},s=[{value:"\uc9c1\uc811 \ube4c\ub4dc\ud558\ub294 \uc774\uc720",id:"\uc9c1\uc811-\ube4c\ub4dc\ud558\ub294-\uc774\uc720",level:2},{value:"Java \ud658\uacbd\ubcc0\uc218 \uc124\uc815",id:"java-\ud658\uacbd\ubcc0\uc218-\uc124\uc815",level:2},{value:"Cmake &amp; build library \uc124\uce58",id:"cmake--build-library-\uc124\uce58",level:2},{value:"Apache ant",id:"apache-ant",level:2},{value:"OpenCV \ube4c\ub4dc",id:"opencv-\ube4c\ub4dc",level:2},{value:"Reference",id:"reference",level:2}],d={toc:s};function m(e){var n=e.components,p=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,p,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"opencv",src:t(2429).Z,width:"600",height:"739"}),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("em",{parentName:"p"},"OpenCV \uc790\ubc14\ub85c \ube4c\ub4dc\ud558\uae30")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"\uc9c1\uc811-\ube4c\ub4dc\ud558\ub294-\uc774\uc720"},"\uc9c1\uc811 \ube4c\ub4dc\ud558\ub294 \uc774\uc720"),(0,l.kt)("p",null,"\uc5ec\uae30\uc5d0\uc11c\ub294 ",(0,l.kt)("a",{parentName:"p",href:"https://openpnp.org"},"openpnp"),"\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/opencv/opencv"},"OpenCV"),"\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4.\nOpenPnP\ub294 \uc624\ud508\uc18c\uc2a4 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \ub9e4\ub2c8\uc9c0\uba3c\ud2b8 \ud234\ub85c,\n\ub2f9\uc2e0\uc774 \uc218\uc815\ud558\uace0 \ube4c\ub4dc\ud560 \uc218 \uc788\ub3c4\ub85d \uc900\ube44\ub41c \uc18c\ud504\ud2b8\uc6e8\uc5b4\uc640 \ud558\ub4dc\uc6e8\uc5b4\uc5d0\uc11c \ubc14\ub85c \uc2e4\ud589\ud560 \uc218 \uc788\ub294 pick and place \uc2dc\uc2a4\ud15c\uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ud558\uc9c0\ub9cc, OpenCV\ub294 \uc800\uc791\uad8c \ubb38\uc81c\ub85c ffmpeg\uc640 \uac19\uc740 \ub3d9\uc601\uc0c1 \uc778\ucf54\ub354\uac00 \ube60\uc838\uc788\uc2b5\ub2c8\ub2e4.\nopenpnp\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 OpenCV\ub294 OpenCV\uc758 softfork\ub85c \ube4c\ub4dc\ub418\uc5c8\uae30\uc5d0, \ub9c8\ucc2c\uac00\uc9c0\ub85c ffmpeg\uac00 \ube60\uc838\uc788\uc2b5\ub2c8\ub2e4.\n\ub530\ub77c\uc11c \uc9c1\uc811 \ube4c\ub4dc\ud574 \uc8fc\uc5b4\uc57c\ud560 \ud544\uc694\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"java-\ud658\uacbd\ubcc0\uc218-\uc124\uc815"},"Java \ud658\uacbd\ubcc0\uc218 \uc124\uc815"),(0,l.kt)("p",null,"\ube4c\ub4dc\ud558\uae30\uc804\uc5d0 Java\uac00 \uc2dc\uc2a4\ud15c \ud658\uacbd\ubcc0\uc218\uc5d0 \uc798 \ub4f1\ub85d\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4.(\uc6b0\ubd84\ud22c Debian \uae30\uc900)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ export JAVA_HOME=<path of JDK>\n# e.g\n$ export JAVA_HOME=/usr/local/jdk-11.0.15+10\n$ export PATH=$JAVA_HOME/bin:$PATH\n")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"cmake--build-library-\uc124\uce58"},"Cmake & build library \uc124\uce58"),(0,l.kt)("p",null,"OpenCV\ub97c \ube4c\ub4dc\ud558\uae30 \uc704\ud55c Cmake\uc640 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc124\uce58\ud574 \uc90d\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo apt install build-essential\n$ sudo apt install cmake git libgtk2.0-dev pkg-config libavcodec-dev libavformat-dev libswscale-dev\n")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"apache-ant"},"Apache ant"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://ant.apache.org"},"Apache Ant"),"\ub294 \ube4c\ub4dc \ud30c\uc77c\uacfc \ud655\uc7a5\uc810\uac04 \uc758\uc874\uc131\uc744 \uae30\uc220\ud558\uae30 \uc704\ud574 \ub9cc\ub4e4\uc5b4\uc9c4 \uc790\ubc14 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc640 CLI \ud234\uc785\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo apt install ant\n$ export ANT_HOME=<path of ant>\n# e.g\n$ export ANT_HOME=/usr/share/ant/\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"/bin/ant: 1: cd: can't cd to ..."),(0,l.kt)("p",null,"\uc2ec\ubcfc\ub9ad \ub9c1\ud06c \uc5d0\ub7ec\uc785\ub2c8\ub2e4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd /bin\n$ ll ant\n# \uc874\uc7ac\ud558\uc9c0 \uc54a\ub294 \uc704\uce58\uc5d0 \uc5f0\uacb0\ub41c \ubaa8\uc2b5\nlrwxrwxrwx 1 root root 20 10\uc6d4 24  2019 ant -> ../share/ant/bin/ant*\n\n$ whereis ant\nant: /usr/bin/ant /usr/share/ant /usr/share/ant/bin/ant /usr/share/man/man1/ant.1.gz\n\n$ sudo ln -snf /usr/share/ant/bin/ant /bin/ant\n\n# \ud655\uc778\n$ ll /bin/ant\nlrwxrwxrwx 1 root root 22  6\uc6d4 29 18:31 /bin/ant -> /usr/share/ant/bin/ant*\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Reference"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("a",{parentName:"p",href:"https://velog.io/@jodawooooon/ant-%EB%B9%8C%EB%93%9C-%EC%8B%9C-%EC%97%90%EB%9F%AC-%EB%B0%9C%EC%83%9D-binant-1-cd-cant-cd-to-bin..shareantbin"},"ant \ube4c\ub4dc \uc2dc \uc5d0\ub7ec \ubc1c\uc0dd"))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"opencv-\ube4c\ub4dc"},"OpenCV \ube4c\ub4dc"),(0,l.kt)("p",null,"\uc18c\uc2a4\ucf54\ub4dc\ub97c \ub2e4\uc6b4\ubc1b\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# in your workdir\n\n# [Option1] use release version(recommended)\n# https://github.com/opencv/opencv/releases\n$ wget -O opencv.zip https://github.com/opencv/opencv/archive/refs/tags/4.6.0.zip\n$ unzip opencv.zip\n\n# [Option2] \ucd5c\uc2e0 \ucf54\ub4dc clone\n$ git clone https://github.com/opencv/opencv.git\n$ git clone https://github.com/opencv/opencv_contrib.git\n\n")),(0,l.kt)("br",null),(0,l.kt)("p",null,"build \ud3f4\ub354\ub97c \ub9cc\ub4e4\uace0 cmake\ub97c \uc774\uc6a9\ud574 makefile\uc744 \ub9cc\ub4e4\uc5b4 \uc90d\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-DBUILD_SHARED_LIBS=OFF")," \uc635\uc120\uc744 \uc0ac\uc6a9\ud574 OpenCV\ub97c \uc815\uc801 \ub77c\uc774\ube0c\ub7ec\ub9ac \uc9d1\ud569\uc73c\ub85c \ube4c\ub4dc\ud558\uba74, \uc790\ubc14 \ubc14\uc778\ub529 \ub3d9\uc801 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc804\ubd80 \ucda9\uc871\uc2dc\ud0b5\ub2c8\ub2e4.\n\ub2e4\uc2dc \ub9d0\ud574, \ub2e4\ub978 OpenCV \ub77c\uc774\ube0c\ub7ec\ub9ac\uc5d0 \uc885\uc18d\ub418\uc9c0 \uc54a\uc9c0\ub9cc, \ubaa8\ub4e0 OpenCV \ucf54\ub4dc\ub97c \ub0b4\ubd80\uc5d0 \uac00\uc9c0\uace0 \uc788\uac8c \ub429\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd opencv\n$ mkdir build\n$ cd build\n\n# ffmpeg\ub97c \uc0ac\uc6a9\ud574 \ube4c\ub4dc\ud558\ub824\uba74 -DWITH_FFMPEG=1 \ub97c \ucd94\uac00\ud569\ub2c8\ub2e4\n$ cmake -DCMAKE_BUILD_TYPE=Release -DBUILD_SHARED_LIBS=OFF -DCMAKE_INSTALL_PREFIX=/usr/local ..\n\n# ant, JNI \ub4f1 \uc124\uc815\uac12\uc744 \uc81c\ub300\ub85c \ucc3e\uc558\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4.\n--     Java:                          \n--     ant:                         /bin/ant (ver 1.10.7)\n--     JNI:                         /root/jdk-11.0.12+7/include /root/jdk-11.0.12+7/include/linux /root/jdk-11.0.12+7/include\n--     Java wrappers:               YES\n--     Java tests:                  YES\n\n# ffmpeg\ub97c \ud568\uaed8 \ube4c\ub4dc\ud588\ub2e4\uba74 \ub2e4\uc74c\ub3c4 \ud655\uc778\ud574\uc57c \ud569\ub2c8\ub2e4.\nVideo I/O:\n    DC1394:                      NO\n    FFMPEG:                      YES\n      avcodec:                   YES (58.54.100)\n      avformat:                  YES (58.29.100)\n      avutil:                    YES (56.31.100)\n      swscale:                   YES (5.5.100)\n      avresample:                NO\n    GStreamer:                   NO\n    v4l/v4l2:                    YES (linux/videodev2.h)\n")),(0,l.kt)("br",null),(0,l.kt)("p",null,"OpenCV\ub97c \ube4c\ub4dc\ud569\ub2c8\ub2e4.\n\uc800\ub294 \uba40\ud2f0\ucf54\uc5b4\ub97c \uc0ac\uc6a9\ud574\uc11c \ube4c\ub4dc\ud558\uba74 \uc5d0\ub7ec\uac00 \ub0ac\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# make -j<nums of core>\n$ make\n\n# \uad8c\ud55c \ubb38\uc81c\uac00 \uc788\uc5c8\uc73c\uba74 \ub2e4\uc74c \uba85\ub839\uc5b4\ub97c \ud55c\ubc88 \ub354 \uc2e4\ud589\uc2dc\ud0b5\ub2c8\ub2e4\n$ sudo make install\n")),(0,l.kt)("br",null),(0,l.kt)("details",null,(0,l.kt)("summary",null,"OpenCV \uc815\uc0c1 \ube4c\ub4dc \ud655\uc778"),(0,l.kt)("p",null,"opencv \uac00 \uc815\uc0c1\uc124\uce58\ub41c\uac74\uc9c0 \ud655\uc778\ud558\uae30 \uc704\ud574 "),(0,l.kt)("p",null,"\ubc29\uae08\uae4c\uc9c0 \uc0ac\uc6a9\ud588\ub358 build \ub514\ub809\ud1a0\ub9ac\uc5d0 \uc544\ub798 \uc18c\uc2a4\ub97c \ubc1b\uace0 "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# in {workdir}/opencv/build\ngit clone https://github.com/opencv/opencv_extra.git\n")),(0,l.kt)("p",null,"bin \ub514\ub809\ud1a0\ub9ac\ub85c \uc774\ub3d9\ud574\uc11c \uc544\ub798\uc640 \uac19\uc774 \uc2e4\ud589\ud558\uba74 "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd bin\n./opencv_test_core \n")),(0,l.kt)("p",null,"Java \uc5d0\uc11c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'import org.opencv.core.Core;\nimport org.opencv.core.CvType;\nimport org.opencv.core.Mat;\npublic class Hello {\n   public static void main( String[] args ) {\n        OpenCV.loadShared();\n        System.loadLibrary(Core.NATIVE_LIBRARY_NAME);\n        System.load("{workdir}/opencv/build/lib/libopencv_java460.so");\n        // ...\n    }\n}\n'))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.opencv.org/4.x/d7/d9f/tutorial_linux_install.html"},"[\uacf5\uc2dd]Installation in Linux"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("a",{parentName:"p",href:"https://docs.opencv.org/4.x/d9/d52/tutorial_java_dev_intro.html"},"[\uacf5\uc2dd]Introduction to Java Development"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("a",{parentName:"p",href:"https://cubenuri.tistory.com/197"},"[Tistory]ubuntu 16 + opencv + java \uc124\uce58\uae30")))}m.isMDXComponent=!0},2429:function(e,n,t){n.Z=t.p+"assets/images/OpenCV_Logo_with_text-74a0292658708036382da3347ce9a496.png"}}]);