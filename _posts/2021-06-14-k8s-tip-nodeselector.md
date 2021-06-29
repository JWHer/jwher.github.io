---
layout: post
title: "k8s 노드 셀렉터"
subtitle: "파드를 원하는 노드에 할당하는 법"
cover-img: /assets/img/cover.svg
thumbnail-img: /assets/img/Kubernetes.svg
share-img: /assets/img/Kubernetes.svg
tags: [tech, kubernetes, short]
comments: true

date: 2021-06-14 11:50:00 
---

<!-- image repository: https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/ -->
![Alt](https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/kubernetes.png "kubernetes")  
*파드를 원하는 노드에 할당하는 법*  

# 목차
* [사례와 설명](#사례와-설명)
* [노드에 파드 할당하기](#노드에-파드-할당하기)
<br/>

## 사례와 설명

> 쿠버네티스 클러스터를 운영하는 당신, ML 모델이 느리게 동작하는 것을 확인한다.  
> 해결사인 당신은 원인을 찾게 되고, GPU 노드가 놀고 있음을 확인한다!
   
파드는 스케줄러가 배포 시점에 가장 최적화된 노드에 배치한다.(*기회가 되면 더 다루겠다*)

위의 사례가 적절한 예시가 될 지 모르겠지만, 여러가지 이유로 특정한 [노드](https://kubernetes.io/ko/docs/concepts/architecture/nodes/)
집합에서만 동작하도록 [파드](https://kubernetes.io/ko/docs/concepts/workloads/pods/) 를
제한해야할 필요가 있다.

**노드 설렉터**는 쿠버네티스에서 권장하는 노드 선택 제약 조건이다.
```nodeSelector```는 ```spec```의 필드로서 키:값의 매핑으로 지정하게 된다.  
<br/>

## 노드에 파드 할당하기

쿠버네티스 클러스터를 살펴보자
```shell
master@master:~$ kubectl get nodes

NAME        STATUS   ROLES    AGE   VERSION
gpu         Ready    <none>   51d   v1.16.0
master      Ready    master   58d   v1.16.0
slave       Ready    <none>   58d   v1.16.0
```
<br/>

gpu노드에 gpu 라벨(레이블)을 추가한다.
```shell
# kubectl label {node} {key=value}
master@master:~$ kubectl label nodes gpu gpu=true
node/gpu labeled

# 잘 되었나 확인해보자
master@master:~$ kubectl get nodes --show-labels
NAME        STATUS   ROLES    AGE   VERSION   LABELS
gpu         Ready    <none>   51d   v1.16.0   beta.kubernetes.io/arch=amd64,beta.kubernetes.io/os=linux,gpu=true,kubernetes.io/arch=amd64,kubernetes.io/hostname=gpu,kubernetes.io/os=linux
master      Ready    master   58d   v1.16.0   beta.kubernetes.io/arch=amd64,beta.kubernetes.io/os=linux,kubernetes.io/arch=amd64,kubernetes.io/hostname=master,kubernetes.io/os=linux,node-role.kubernetes.io/master=
slave       Ready    <none>   58d   v1.16.0   beta.kubernetes.io/arch=amd64,beta.kubernetes.io/os=linux,kubernetes.io/arch=amd64,kubernetes.io/hostname=slave,kubernetes.io/os=linux

# 자세히 살펴보면 알겠지만, 미리 지정된 kubernetes.io/hostname=gpu 라벨을 사용할 수 있다
```
<br/>

배포 테스트를 위해 적당한 pod 생성 yaml을 만들어주자.
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: test
spec:
  containers:
  - name: test
    image: alpine
    imagePullPolicy: IfNotPresent
  nodeSelector:
    gpu: true
```
<br/>

배포하고 확인해 본다.
```shell
master@master:~$ kubectl apply -f test.yaml
pod/test created

master@master:~$ kubectl get pod -o wide
NAME                        READY   STATUS      RESTARTS   AGE    IP            NODE        NOMINATED NODE   READINESS GATES
test                        0/1     Completed   2          115s   10.244.3.78   gpu         <none>           <none>
```
<br/>

간단한 작업이지만 kubernetes 구조를 이해하는데 큰 도움이 될 것이다.
<br/>

## Tips
[kubernetes의 세계에 오신 걸 환영합니다](https://jwher.github.io/2021-04-12-welcome-to-kubernetes/)  
[쿠버네티스 사용하기](https://jwher.github.io/2021-05-28-kubernetes-usage/)

### Reference  
[[공식]노드에 파드 할당하기](https://kubernetes.io/ko/docs/concepts/scheduling-eviction/assign-pod-node/)


## - JWHer  
좋은 글을 쓰고 싶습니다.

<!-- update log -->
<!--
본문에 추가할 내용을 적는다.
-->