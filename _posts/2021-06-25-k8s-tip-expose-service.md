---
layout: post

title: "K8s tip: Expose Service"
thumbnail-img: /assets/img/Kubernetes.svg
categories:
- tech
- kubernetes
- short
excerpt: |
  쿠버네티스 서비스 노출하기
date: 2021-06-25 17:50:00 

aside: true
feature_text: |
  # K8s tip: Expose Service
feature_image: "/assets/img/bamboos.jpg"
comments: true
---

<!-- more -->

<!-- image repository: https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/ -->

![Alt](https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/kubernetes.png "kubernetes")  
*쿠버네티스 서비스 노출하기*  

# 목차
* [사례와 설명](#사례와-설명)
* [서비스 노출하기](#서비스-노출하기)

<br/>

## 사례와 설명
   
쿠버네티스 파드가 교체되어도 일정한 주소를 제공합니다.
여러개의 레플리카의 로드밸런싱, 같은 주소 접근 기능을 제공합니다.

<br/>

## 서비스 노출하기

### yaml 파일로 노출하기
```shell

$ kubectl apply -f {service.yaml}
```

<br/>

### 디플로이먼트 노출하기
```shell
$ kubectl expose deploy/{name} [--type={}] [-n {namespace}]
```

노출된 서비스는 다음과 같이 확인할 수 있습니다.
```shell
$ kubectl get svc [-n {namespace}]
```

<br/>

## Tips

[Kubernetes Usage](https://jwher.github.io/2021-05-28-kubernetes-usage/)  
죄송합니다... 빠르게 제대로 다시 작성하겠습니다!

### Reference  

[[공식]외부 IP 주소를 노출하여 클러스터의 애플리케이션에 접속하기](https://kubernetes.io/ko/docs/tutorials/stateless-application/expose-external-ip-address/)  

## - JWHer  
좋은 글을 쓰고 싶습니다.

<!-- update log -->
<!--
본문에 추가할 내용을 적는다.
-->