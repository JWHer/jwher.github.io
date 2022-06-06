---
authors:
- jwher
description: 'Helm: 쿠버네티스 패키지 매니저'
slug: install-helm
tags:
- tech
- kubernetes
title: Install Helm
---

![helm](/img/logos/helm.svg)
*쿠버네티스 패키지 매니저*  
<!--truncate-->

# 목차
* [Helm](#helm)
* [설치하기](#설치하기)
* [명령어](#명령어)

## Helm
   
헬름이란?  
쿠버네티스 패키지 매니저입니다.
헬름은 쿠버네티스용 소프트웨어를 검색하거나, 공유하고 사용하기에 가장 좋은 방법입니다.

* 복잡성 관리: 차트는 매우 복잡한 앱도 표현하고, 반복적인 애플리케이션 설치를 제공하며, 단일 권한으로 서비스할 수 있습니다.
* 쉬운 업데이트: 즉석(in-place) 업그레이드와 커스텀 훅을 통해 업데이트하는 수고를 덜어줍니다.
* 간단한 공유: 차트는 버전 관리, 공유, 퍼블릭이나 프라이빗 서버 호스팅이 편리합니다.
* 롤백: helm rollback을 사용하여 릴리스를 예전 버전으로 간편하게 되돌리세요.

*이 단락은 공식 홈페이지의 내용을 인용했습니다.*

<br/>

## 설치하기

### apt로 설치하기

```shell
curl https://baltocdn.com/helm/signing.asc | sudo apt-key add -
sudo apt-get install apt-transport-https --yes
echo "deb https://baltocdn.com/helm/stable/debian/ all main" | sudo tee /etc/apt/sources.list.d/helm-stable-debian.list
sudo apt-get update
sudo apt-get install helm
```

<br/>

## 명령어

```shell
# 차트 설치
$ helm install $name $chart [flags]

# 업그레이드
$ helm upgrade $name $chart [flags]

# 롤백
$ helm history $name
$ helm rollback $name [revision] [flags]
```

<br/>

## Tips

현재 개념, 설치, 명령어 페이지가 하나입니다.
지식이 늘어나면 분리가 필요합니다.

### Reference  

[[공식]헬름](https://helm.sh/ko/)  
[[공식]Installing Helm](https://helm.sh/docs/intro/install/)  
[[공식]Helm Commands](https://helm.sh/docs/helm/helm/)


<!-- update log -->
<!--
본문에 추가할 내용을 적는다.
검증 등 https://waspro.tistory.com/628
-->
