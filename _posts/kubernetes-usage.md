---
layout: post
title: "kubernetes usage"
subtitle: "쿠버네티스 사용하기"
cover-img: /assets/img/cover.svg
thumbnail-img: /assets/img/kubernetes.svg
share-img: /assets/img/kubernetes.jpg
tags: [tech, kubernetes, docker]
comments: true

date: 2021-05-26 17:50:00 
---

<!-- image repository: https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/ -->
![Alt](https://raw.githubusercontent.com/JWHer/jwher.github.io/master/assets/img/Kubernetes.svg "kubernetes")  
*쿠버네티스 사용하기*  

# 목차
* kubectl 설치
* 명령어

## kubectl 설치  

본 글은 linux에서 kubernetes를 설치하는 방법을 다룬다.

### requirements

* linux
* kubernetes cluster

### 바이너리 설치

바이너리 다운로드  
```shell
# 다음 명령으로 최신 kubectl을 다운받는다
$ curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"

# kubectl은 kubernetes 클러스터와 마이너 버전 차이만 연동 가능하다
# 예를 들어, v1.21 kubectl은 v1.20, v1.21, v1.22 클러스터와 연동될 수 있다
# version을 수정해 특정 버전을 다운받을 수 있다
$ curl -LO https://dl.k8s.io/release/{version}/bin/linux/amd64/kubectl

# (선택사항) sha256 체크섬 검증
$ curl -LO "https://dl.k8s.io/{version}/bin/linux/amd64/kubectl.sha256"
$ echo "$(<kubectl.sha256) kubectl" | sha256sum --check

kubectl: OK # 성공시
```

바이너리 파일 설치  
```shell
# 설치하기
$ sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl

# root 권한이 없어도 ~/.local/bin에 설치할 수 있다
$ mkdir -p ~/.local/bin/kubectl
$ mv ./kubectl ~/.local/bin/kubectl
# 그리고 ~/.local/bin/kubectl을 $PATH에 추가

# 확인해보자
$ kubectl cluster-info

Kubernetes master is running at https://server-name:port
KubeDNS is running at https://server-name:port/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy

To further debug and diagnose cluster problems, use 'kubectl cluster-info dump'.

# 실패시
The connection to the server <server-name:port> was refused - did you specify the right host or port?
# kubernetes 클러스터와 연결이 안되거나 config 파일에 문제가 있다
```
   
<br/>

## 명령어
*cheat sheet*



<br/>

## Tips

h2로 작성

### Reference  
[https://kubernetes.io/ko/docs/tasks/tools/install-kubectl-linux/#install-using-native-package-management](https://kubernetes.io/ko/docs/tasks/tools/install-kubectl-linux/#install-using-native-package-management)
[https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands)  
https://www.google.com


## - JWHer  
좋은 글을 쓰고 싶습니다.

<!-- update log -->
<!--
본문에 추가할 내용을 적는다.
-->