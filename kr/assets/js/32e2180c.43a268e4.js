"use strict";(self.webpackChunkjwher_blog=self.webpackChunkjwher_blog||[]).push([[3781],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1709:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={authors:["jwher"],description:"M1 \ub9e5\uc5d0\uc11c pytorch GPU \uac00\uc18d \uc0ac\uc6a9\ud574\ubcf4\uae30",slug:"pytorch-in-m1",tags:["tech"],title:"Pytorch in M1"},p=void 0,s={permalink:"/kr/posts/pytorch-in-m1",editUrl:"https://github.com/jwher/jwher.github.io/posts/2022-06-12-pytorch-in-m1/index.md",source:"@site/posts/2022-06-12-pytorch-in-m1/index.md",title:"Pytorch in M1",description:"M1 \ub9e5\uc5d0\uc11c pytorch GPU \uac00\uc18d \uc0ac\uc6a9\ud574\ubcf4\uae30",date:"2022-06-12T00:00:00.000Z",formattedDate:"June 12, 2022",tags:[{label:"tech",permalink:"/kr/posts/tags/tech"}],readingTime:8.385,truncated:!0,authors:[{name:"Jeongwon Her",title:"MLOps Engineer",url:"https://github.com/jwher",imageURL:"https://github.com/jwher.png",key:"jwher"}],frontMatter:{authors:["jwher"],description:"M1 \ub9e5\uc5d0\uc11c pytorch GPU \uac00\uc18d \uc0ac\uc6a9\ud574\ubcf4\uae30",slug:"pytorch-in-m1",tags:["tech"],title:"Pytorch in M1"},prevItem:{title:"Build OpenCV with Java",permalink:"/kr/posts/build-opencv-with-java"},nextItem:{title:"Agile",permalink:"/kr/posts/agile"}},c={authorsImageUrls:[void 0]},m=[{value:"Pytorch",id:"pytorch",level:2},{value:"GPU \uac00\uc18d",id:"gpu-\uac00\uc18d",level:2},{value:"M1",id:"m1",level:2},{value:"\uacf5\uc2dd \ubc1c\ud45c",id:"\uacf5\uc2dd-\ubc1c\ud45c",level:2},{value:"\uc124\uce58\ud574\ubcf4\uae30",id:"\uc124\uce58\ud574\ubcf4\uae30",level:2},{value:"\ud14c\uc2a4\ud2b8",id:"\ud14c\uc2a4\ud2b8",level:2},{value:"CPU \uacb0\uacfc",id:"cpu-\uacb0\uacfc",level:3},{value:"MPS \uacb0\uacfc",id:"mps-\uacb0\uacfc",level:3},{value:"References",id:"references",level:2}],u={toc:m};function d(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"m1",src:n(3321).Z,width:"1960",height:"1320"}),"\n",(0,i.kt)("em",{parentName:"p"},"Pytorch on Mac!")),(0,i.kt)("p",null,"\uc124\uce58\uc640 \uc0ac\uc6a9\ubc29\ubc95\ub9cc \ubcf4\uc2dc\uace0 \uc2f6\uc740 \ubd84\uc740 ",(0,i.kt)("a",{parentName:"p",href:"#%EA%B3%B5%EC%8B%9D-%EB%B0%9C%ED%91%9C"},"\uacf5\uc2dd \ubc1c\ud45c")," \ub2e8\ub77d\uc744 \ubd10\uc8fc\uc138\uc694!"),(0,i.kt)("h2",{id:"pytorch"},"Pytorch"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\uc774 \uae00\uc744 \uc77d\ub294 \ubd84\uc774\ub77c\uba74, pytorch\uac00 \ubb54\uc9c0 \ubaa8\ub974\uc2dc\ub294 \ubd84\uc740 \uc5c6\uc744 \uac83\uc774\ub77c \uc0dd\uac01\ud569\ub2c8\ub2e4\ub9cc \ud83e\udd23")),(0,i.kt)("p",null,"\ud30c\uc774\ud1a0\uce58\ub294 \uc624\ud508\uc18c\uc2a4 \uba38\uc2e0 \ub7ec\ub2dd \ud504\ub808\uc784\uc6cc\ud06c\ub85c\n\uc81c\ud488 \uac1c\ubc1c \uc5f0\uad6c\ub97c \ube60\ub974\uac8c \ud558\uae30 \uc704\ud55c \ubc29\ubc95\uc785\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uba38\uc2e0 \ub7ec\ub2dd \ud2b9\uc131\uc0c1 \ub9ce\uc740 \ud589\ub82c \uc5f0\uc0b0\uc744 \ud558\uac8c \ub429\ub2c8\ub2e4.\npython\uc5d0\uc11c\ub294 Numpy\uac00 \ub300\ud45c\uc801\uc778 \ud589\ub82c \uacc4\uc0b0 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc8e0.\npytorch\uc5d0\uc11c\ub294 Numpy\uc758 ",(0,i.kt)("a",{parentName:"p",href:"https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html"},"ndarrays"),"\uc640 \ube44\uc2b7\ud558\uba70 GPU \uac00\uc18d\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 ",(0,i.kt)("a",{parentName:"p",href:"https://pytorch.org/docs/stable/tensors.html"},"tensor"),"\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,i.kt)("h2",{id:"gpu-\uac00\uc18d"},"GPU \uac00\uc18d"),(0,i.kt)("p",null,"\uadf8\ub807\ub2e4\uba74 \uc65c GPU \uac00\uc18d\uc744 \ud574\uc57c\ud560\uae4c\uc694?  "),(0,i.kt)("p",null,"\ud558\ub4dc\uc6e8\uc5b4 \uac00\uc18d(Hardware Accelation)\uc774\ub780 \ud2b9\uc815\ud55c \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc791\uc5c5\uc744 general-purpose CPU \ubcf4\ub2e4 \ube60\ub974\uac8c \uc791\uc5c5\ud558\uae30 \uc704\ud574 \ub9cc\ub4e4\uc5b4 \uc84c\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"GPU\uac00 \uadf8\ub807\uc8e0, \uadfc\ub370 GPU\uc5d0\uc11c \uadf8\ub798\ud53d \uc791\uc5c5\ub9cc \ud558\ub4dc\uc6e8\uc5b4 \uac00\uc18d\uc744 \ud560 \uc218 \uc788\ub294 \uac8c \uc544\ub2d9\ub2c8\ub2e4.\n\uc5ed\uc73c\ub85c General-purpose on GPU, ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/General-purpose_computing_on_graphics_processing_units"},"GPGPU")," \uae30\uc220\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\ub300\ud45c\uc801\uc778 GPU hardware \uc81c\uc870\uc0ac nvidia\ub294 Compute Unified Device Architecture, ",(0,i.kt)("a",{parentName:"p",href:"https://developer.nvidia.com/cuda-toolkit"},"CUDA"),"\ub97c \uc9c0\uc6d0\ud569\ub2c8\ub2e4.\n\uc774 \uac00\uc18d\uc740 AI\uc640 \ub525\ub7ec\ub2dd\uc744 \ube60\ub974\uac8c \ud574 \uc8fc\uc5c8\uc2b5\ub2c8\ub2e4. GPU \uac00\uaca9\uc744 \ud3ed\ub4f1\uc2dc\ud0ac \uc815\ub3c4\ub85c\uc694!"),(0,i.kt)("h2",{id:"m1"},"M1"),(0,i.kt)("p",null,"\uadf8\ub807\ub2e4\uba74 \ub9e5\ubd81\uc740 Nvidia GPU\ub97c \uc4f8\uae4c\uc694?\n\ub2f5\uc740 \uc774\uc820 ",(0,i.kt)("strong",{parentName:"p"},"\uc544\ub2c8\uc694")," \uc785\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc560\ud50c\uc740 Mac\uc744 Apple silicon\uc73c\ub85c \uc804\ud658\ud55c\ub2e4\ub294 \uacc4\ud68d\uc744 \ubc1c\ud45c\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.apple.com/newsroom/2020/06/apple-announces-mac-transition-to-apple-silicon/"},"Apple announces Mac transition to Apple silicon"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://www.apple.com/newsroom/2020/11/apple-unleashes-m1/"},"Apple unleashes M1")),(0,i.kt)("p",null,"M1\uc740 ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ARM_architecture_family#ARMv8-A"},"ARMv8.5-A")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/llvm/llvm-project/blob/main/llvm/include/llvm/Support/AArch64TargetParser.def"},"\uba85\ub839\uc5b4 \uc9d1\ud569"),"\uc744 \uac00\uc9c4 Advanced RISC Machine(ARM)\uc73c\ub85c \uc124\uacc4\ub418\uc5c8\uc2b5\ub2c8\ub2e4.\n",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Reduced_instruction_set_computer"},"RISC"),", Reduced Instruction Set Computer\ub294 \uc801\uc740 \uba85\ub839\uc5b4 \uc218\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc2e4\ud589\uc18d\ub3c4\ub97c \ub192\uc778 \ub9c8\uc774\ud06c\ub85c\ud504\ub85c\uc138\uc11c \uc785\ub2c8\ub2e4.\n\uace0\uc815 \uae38\uc774\uc758 \uba85\ub839\uc5b4\ub97c \uc0ac\uc6a9\ud574 \ube60\ub974\uac8c \ud574\uc11d\ub418\uace0 \uba85\ub839\uc5b4 \ud30c\uc774\ud504\ub77c\uc778 \ub300\uae30\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc774\ub294 Intel\uacfc \uac19\uc740 \uc804\ud1b5\uc801\uc778 \ud558\ub098\uc758 \ud2b9\uc815\ud55c \uc5f0\uc0b0\uc744 \uc704\ud55c \ubcf5\uc7a1\ud55c \uba85\ub839\uc5b4\ub97c \uc81c\uacf5\ud558\ub294 ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Complex_instruction_set_computer"},"CISC"),", Complex Instruction Set Computer\uc640 \ube44\uad50\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\nCISC\uc5d0 \ube44\ud574 RISC\uac00 \uac16\ub294 \ub300\ud45c\uc801\uc778 \uc7a5\uc810\uc73c\ub85c ",(0,i.kt)("strong",{parentName:"p"},"\uc804\ub825 \uc18c\ubaa8\uac00 \uc801\ub2e4"),"\ub294 \uac83\uc785\ub2c8\ub2e4.\n\ub530\ub77c\uc11c, \uc800\uc804\ub825\uc73c\ub85c \uc791\ub3d9\ud574\uc57c \ud558\ub294 \ub9ce\uc740 \ubaa8\ubc14\uc77c \uae30\uae30\uc640 \uc784\ubca0\ub514\ub4dc \ud504\ub85c\uc138\uc11c\uc5d0\uc11c \ucc44\ud0dd\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"apple_m1-chip-cpu-power-chart",src:n(4227).Z,width:"1960",height:"1104"})),(0,i.kt)("p",null,"M1 \uce69\uc740 GPU\uc640 Neural Engine\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.\n\uadf8\ub807\ub2e4\uba74, Mac\uc5d0\uc11c GPU \uac00\uc18d\uc744 \uc0ac\uc6a9\ud574 \uba38\uc2e0\ub7ec\ub2dd\uc744 \ud558\ub294\uac74 \ubd88\uac00\ub2a5 \ud560\uae4c\uc694?"),(0,i.kt)("h2",{id:"\uacf5\uc2dd-\ubc1c\ud45c"},"\uacf5\uc2dd \ubc1c\ud45c"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pytorch.org/blog/introducing-accelerated-pytorch-training-on-mac/"},"Official Blog"),"\n\uc5d0 \ub530\ub974\uba74, pytorch \uac1c\ubc1c\ud300\uc740 \uc560\ud50c Metal engineering \ud300\uacfc \ud568\uaed8 Mac GPU \uac00\uc18d \ud30c\uc774\ud1a0\uce58 \ud559\uc2b5\uc744 \ub3c4\uc785\ud588\uc2b5\ub2c8\ub2e4.\n\uc774\ub294 apple\uc758 ",(0,i.kt)("a",{parentName:"p",href:"https://developer.apple.com/videos/play/wwdc2021/10152/"},"Metal Performance Shaders")," \ub97c backend\ub85c \ud574 \uad6c\ud604\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc774\ub294 CPU\ub85c \uc5f0\uc0b0\uc744 \ud560 \ub54c \ubcf4\ub2e4 \ucd5c\uc18c 5%\uc5d0\uc11c 20% \uc815\ub3c4\uc758 \uc131\ub2a5 \ud5a5\uc0c1\uc744 \ubcf4\uc778\ub2e4\uace0 \ubcf4\uace0\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"pytorch-m1",src:n(2120).Z,width:"3840",height:"2160"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Testing conducted by Apple in April 2022 using production Mac Studio systems with Apple M1 Ultra, 20-core CPU, 64-core GPU 128GB of RAM, and 2TB SSD. Tested with macOS Monterey 12.3, prerelease PyTorch 1.12, ResNet50 (batch size=128), HuggingFace BERT (batch size=64), and VGG16 (batch size=64). Performance tests are conducted using specific computer systems and reflect the approximate performance of Mac Studio.")),(0,i.kt)("h2",{id:"\uc124\uce58\ud574\ubcf4\uae30"},"\uc124\uce58\ud574\ubcf4\uae30"),(0,i.kt)("p",null,"\ud558\uc9c0\ub9cc \uc9c4\uc9dc \uadf8\ub7f0\uc9c0 \ud655\uc778\ud574 \ubd10\uc57c\uaca0\uc8e0?"),(0,i.kt)("p",null,"\uc124\uce58\ud55c Library \uc785\ub2c8\ub2e4. (Conda\ub098 Venv\ub97c \uc0ac\uc6a9\ud558\uc2dc\uae38 \ucd94\ucc9c\ud569\ub2c8\ub2e4)"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"requirements.txt"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"certifi==2022.5.18.1\ncharset-normalizer==2.0.12\ncycler==0.11.0\nfonttools==4.33.3\nidna==3.3\njoblib==1.1.0\nkiwisolver==1.4.2\nmatplotlib==3.5.2\nnumpy==1.23.0rc3\npackaging==21.3\nPillow==9.1.1\npyparsing==3.0.9\npython-dateutil==2.8.2\npytz==2022.1\nrequests==2.28.0\nscikit-learn==1.1.1\nscipy==1.8.1\nsix==1.16.0\nsklearn==0.0\nthreadpoolctl==3.1.0\ntorch==1.13.0.dev20220611\ntorchaudio==0.14.0.dev20220603\ntorchvision==0.14.0.dev20220609\ntqdm==4.64.0\ntyping_extensions==4.2.0\nurllib3==1.26.9\n"))),(0,i.kt)("br",null),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"\uc8fc\uc758")),(0,i.kt)("p",{parentName:"blockquote"},"\uc548\ud0c0\uae5d\uac8c\ub3c4 12.3+ \uc774\uc0c1\uc758 Mac OS \uc5d0\uc11c \ub3d9\uc791\ud569\ub2c8\ub2e4. \uc774\uc804 \ubc84\uc804\uc758 OS\uc5d0\uc11c ",(0,i.kt)("inlineCode",{parentName:"p"},'torch.device("mps")')," \ub97c \uc0ac\uc6a9\ud558\uba74 \ub2e4\uc74c \uc624\ub958\uac00 \ubc1c\uc0dd\ud569\ub2c8\ub2e4."),(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre"},"The MPS backend is supported on MacOS 12.3+.Current OS version can be queried using `sw_vers`\n")),(0,i.kt)("br",null)),(0,i.kt)("p",null,"\uc124\uce58 \uc804\uc5d0 OS Version\uc744 \ud655\uc778\ud569\uc2dc\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# Bad\njwher@jwher-MacBookPro ~ % sw_vers\nProductName:    macOS\nProductVersion: 12.2.1\nBuildVersion:   21D62\n\n# Good (12.3+)\njwher@jwher-MacBookPro ~ % sw_vers\nProductName:    macOS\nProductVersion: 12.4\nBuildVersion:   21F79\n")),(0,i.kt)("h2",{id:"\ud14c\uc2a4\ud2b8"},"\ud14c\uc2a4\ud2b8"),(0,i.kt)("p",null,"torchvision\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 pre-trained weight\ub85c Mnist\ub97c \ud559\uc2b5\ud574 \ubd05\uc2dc\ub2e4."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Full Script"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# main thread\uc5d0\uc11c\ub9cc \uc2e4\ud589\uac00\ub2a5\ud55c \ud568\uc218\uac00 \uc788\uc2b5\ub2c8\ub2e4\nif __name__ == \"__main__\":\n\n    import platform, torch\n    print(platform.platform())\n\n    CPU= False\n    device = \"cpu\" if CPU else torch.device(\"mps\")\n    print(\"Device is : {}\".format(device))\n\n    class CFG:\n        lr = 0.001\n        train_batch_size = 4\n        total_epochs = 1\n        num_classes = 10\n        input_shape = (224,224)\n\n    # Important to fix random seed\n    torch.manual_seed(1)\n    np.random.seed(1)\n\n    from torch.utils.data import TensorDataset\n    from torch.utils.data import DataLoader\n    import torchvision\n    from torchvision import datasets, transforms\n    from torchvision.transforms import ToTensor\n\n    image_path = \"./data/\"\n    mnist_dataset = torchvision.datasets.MNIST(\n        image_path, 'train', download=False,\n        transform=transforms.Compose(\n            [transforms.Resize(CFG.input_shape), transforms.Grayscale(3),ToTensor()]\n        )\n    )\n    trainset_1 = torch.utils.data.Subset(mnist_dataset, list(range(1000)))\n    mnist_loader  = DataLoader(trainset_1,batch_size=CFG.train_batch_size,shuffle=True,num_workers=4)\n    x_batch, y_batch = (next(iter(mnist_loader)))\n\n    import torchvision.models as models\n    import torch.nn as nn\n    import time, numpy as np\n    from tqdm import tqdm\n\n    class MODELS:\n        vgg16_model = models.vgg16(pretrained=True)\n        alexnet = models.alexnet(pretrained=True)\n        resnet_18 = models.resnet18(pretrained=True)\n        mobilenet_v2 = models.mobilenet_v2(pretrained=True)\n        efficientnet_b0 = models.efficientnet_b0(pretrained=True)\n        squeezenet = models.squeezenet1_0(pretrained=True)\n\n        vgg16_model.classifier[6] = nn.Linear(vgg16_model.classifier[6].in_features,CFG.num_classes)\n        alexnet.classifier[6] = nn.Linear(alexnet.classifier[6].in_features,CFG.num_classes)\n        resnet_18.fc = nn.Linear(resnet_18.fc.in_features,CFG.num_classes)\n        mobilenet_v2.classifier[1] = nn.Linear(mobilenet_v2.classifier[1].in_features,CFG.num_classes)\n        efficientnet_b0.classifier[1] = nn.Linear(efficientnet_b0.classifier[1].in_features,CFG.num_classes)\n        squeezenet.classifier[1] = nn.Linear(squeezenet.classifier[1].in_channels,CFG.num_classes)\n\n    def train(model_name,model,train_dl,n_epochs=CFG.total_epochs):\n        '''\n        call train_one_epoch:\n        we will take average time taken to train per epoch for a max of 5 epochs\n        '''\n        loss_fn = nn.CrossEntropyLoss()\n        optimizer = torch.optim.Adam(model.parameters(),lr=CFG.lr)\n        average_time = []\n        for epoch in range(n_epochs):\n            start_time = time.time()\n            print(f\"Epoch {epoch} --\x3e\")\n            pbar = tqdm(enumerate(train_dl), total=len(train_dl), desc='Train : '+model_name)\n            for step, (x_batch, y_batch) in pbar:   \n                x_batch = x_batch.to(device)\n                y_batch = y_batch.to(device)\n                pred = model(x_batch)[:,0]\n                loss = loss_fn(pred,y_batch.float())\n                loss.backward()\n                optimizer.step()\n                optimizer.zero_grad()\n            end_time = time.time() - start_time\n            average_time.append(end_time)\n        return np.mean(average_time)\n\n    model_dict = {\n        'vgg16_model' : MODELS.vgg16_model, \n        'alexnet' : MODELS.alexnet, \n        'resnet_18' : MODELS.resnet_18, \n        'mobilenet_v2' : MODELS.mobilenet_v2, \n        'efficientnet_b0' : MODELS.efficientnet_b0, \n        # 'squeezenet' : MODELS.squeezenet, \n    }\n\n    time_calc = {}\n    for model_name,model in model_dict.items():\n        print(\"Model name is : {}\".format(model_name))\n        print(\"-----------------------------------------\")\n        model_epoch_avg_time = train(model_name,model.to(device),mnist_loader)\n        time_calc[model_name] = model_epoch_avg_time\n\n    print(\"Time result with device={}\".format(device))\n    for key, value in time_calc.items():\n        print(f\"{key}: {value}\")\n"))),(0,i.kt)("h3",{id:"cpu-\uacb0\uacfc"},"CPU \uacb0\uacfc"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Time result with device=cpu\nvgg16_model: 188.27877402305603\nalexnet: 35.99792671203613\nresnet_18: 42.05255889892578\nmobilenet_v2: 223.11423015594482\nefficientnet_b0: 256.45679998397827\n")),(0,i.kt)("h3",{id:"mps-\uacb0\uacfc"},"MPS \uacb0\uacfc"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Time result with device=mps\nvgg16_model: 36.275963306427\nalexnet: 10.713558197021484\nresnet_18: 18.608237743377686\nmobilenet_v2: 45.10530471801758\nefficientnet_b0: 75.51856923103333\n")),(0,i.kt)("p",null,"\uc18d\ub3c4 \uac1c\uc120\ub960\uc744 \uacc4\uc0b0\ud574\ubcf4\uba74,"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Model"),(0,i.kt)("th",{parentName:"tr",align:null},"Speed Up"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"vgg16"),(0,i.kt)("td",{parentName:"tr",align:null},"519.02%")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"alexnet"),(0,i.kt)("td",{parentName:"tr",align:null},"336.00%")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"resnet18"),(0,i.kt)("td",{parentName:"tr",align:null},"224.99%")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"mobilenet v2"),(0,i.kt)("td",{parentName:"tr",align:null},"494.65%")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"efficientnet"),(0,i.kt)("td",{parentName:"tr",align:null},"339.59%")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"2022\ub144 6\uc6d4 Mac Book Pro M1 Max, 10-core CPU, 32-core GPU 64GB of RAM, 1TB SSD\ub97c \uc0ac\uc6a9\ud588\uc2b5\ub2c8\ub2e4. macOS Monterey 12.4, prerelease PyTorch 1.13 \ud658\uacbd, batch size=4\ub85c \ud14c\uc2a4\ud2b8 \ud588\uc2b5\ub2c8\ub2e4.\uc131\ub2a5 \ud14c\uc2a4\ud2b8\ub294 \ud2b9\uc815 \ucef4\ud4e8\ud130 \uc2dc\uc2a4\ud15c\uc73c\ub85c \uc218\ud589\ub418\uc5c8\uace0 Mac Book Pro\uc758 \ub300\ub7b5\uc801\uc778 \uc131\ub2a5\uc744 \ubc18\uc601\ud569\ub2c8\ub2e4.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\ub180\ub78d\uc2b5\ub2c8\ub2e4!")),(0,i.kt)("p",null,"\uacf5\uc2dd \ubc1c\ud45c\ubcf4\ub2e4 \uc18d\ub3c4 \uac1c\uc120\uc774 \uad49\uc7a5\ud788 \ub192\uc2b5\ub2c8\ub2e4. \uc774\ub294 \ubc30\uce58 \ud06c\uae30\uac00 \uc791\uc544\uc11c \uc0dd\uae34 \uacb0\uacfc \uac19\uc2b5\ub2c8\ub2e4. \ucd94\ud6c4\uc5d0 64 \ubc30\uce58\ub85c \ub2e4\uc2dc \ud14c\uc2a4\ud2b8\ud558\uc5ec \ube44\uad50\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"64 \ubc30\uce58\ub85c \ud14c\uc2a4\ud2b8 \ud574\ubd24\ub294\ub370..."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# 64 batch CPU\nTime result with device=cpu\nvgg16_model: 217.3836727142334\nalexnet: 18.045451164245605\nresnet_18: 63.90257787704468\nmobilenet_v2: 436.72195410728455\nefficientnet_b0: 497.7381250858307\n\n# 64 batch MPS\nTime result with device=mps\nvgg16_model: 35.657764196395874\nalexnet: 4.972366094589233\nresnet_18: 10.434533834457397\nmobilenet_v2: 17.130388975143433\nefficientnet_b0: 25.93315291404724\n")),(0,i.kt)("p",null,"\uc5b4\ub5a4 \ubaa8\ub378\uc5d0\uc120 \uc131\ub2a5\uc774 \ub354 \uc88b\uc2b5\ub2c8\ub2e4..?! \ub2e8\uc21c\ud788 pytorch \uacf5\uc2dd \ubca4\uce58\ub9c8\ud06c\ubcf4\ub2e4 \uc131\ub2a5\uc774 \ub6f0\uc5b4\ub09c\uac78\uae4c\uc694,\n\uc544\ub2c8\uba74 \uc2e4\ud5d8\uc774 \uc798\ubabb\ub41c \uac78\uae4c\uc694. \uc774\uc720\ub97c \uc544\uc2dc\ub294 \ubd84\uc774 \ub098\ud0c0\ub098\uc2dc\uae38 \ud83d\ude4f\ud83c\udffb")),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://abhishekbose550.medium.com/pytorch-training-on-m1-air-gpu-c534558acf1e"},"Pytorch training on m1 air gpu")))}d.isMDXComponent=!0},4227:function(e,t,n){t.Z=n.p+"assets/images/apple_m1-chip-cpu-power-chart-de711acad5602c633ab8465e13bb63aa.jpg"},3321:function(e,t,n){t.Z=n.p+"assets/images/apple_new-m1-chip-graphic-99b5e5db35c2079b99a595dfaa759768.jpg"},2120:function(e,t,n){t.Z=n.p+"assets/images/pytorch-m1-8ceb8f70267b90afaf17138acffe81b8.gif"}}]);