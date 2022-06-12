---
authors:
- jwher
description: M1 맥에서 pytorch GPU 가속 사용해보기
slug: pytorch-in-m1
tags:
- tech
title: Pytorch in M1
---

##

[공식문서]()

## 구현해보기


```
The MPS backend is supported on MacOS 12.3+.Current OS version can be queried using `sw_vers`
```
안타깝게도 12.3+

```
jwher@jwherui-MacBookPro ~ % sw_vers
ProductName:	macOS
ProductVersion:	12.2.1
BuildVersion:	21D62
```

```
Time result with device=mps
vgg16_model: 36.275963306427
alexnet: 10.713558197021484
resnet_18: 18.608237743377686
mobilenet_v2: 45.10530471801758
efficientnet_b0: 75.51856923103333
```

```
Time result with device=cpu
vgg16_model: 188.27877402305603
alexnet: 35.99792671203613
resnet_18: 42.05255889892578
mobilenet_v2: 223.11423015594482
efficientnet_b0: 256.45679998397827
```

### References
[Pytorch training on m1 air gpu](https://abhishekbose550.medium.com/pytorch-training-on-m1-air-gpu-c534558acf1e)