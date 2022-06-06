---
layout: post

title: "쿠버네티스 아키텍처"
thumbnail-img: /assets/img/Kubernetes.svg
categories:
- tech
- kubernetes
- linux
excerpt: |
  쿠버네티스의 작동 원리
date: 2021-09-01 17:50:00

aside: true
feature_text: |
  # Kubernetes-architecture
feature_image: "/assets/img/bamboos.jpg"
comments: true
---

<!-- more -->

<p align="center">
<img src="/assets/img/Kubernetes.svg" style="max-height: 40vh;"/>
</p>

*쿠버네티스 아키텍처*  

# 목차
* [기능 범위](#기능-범위)
* [기본 개념](#기본-개념)
* [관리 개념](#관리-개념)
* [고급 개념](#고급-개념)
* [아키텍처 구성요소](#아키텍처-구성요소)

## 기능 범위

공식문서에서 쿠버네티스가 제공하는것/쿠버네티스가 아닌 것을 다음과 같이 설명하고 있습니다.  

제공하는것
* 서비스 디스커버리와 로드 밸런싱
* 스토리지 오케스트레이션
* 자동화된 롤아웃과 롤백
* 자동화된 빈 패킹
* 자동화된 복구
* 시크릿과 구성 관리

쿠버네티스가 아닌 것
* 애플리케이션 유형 제약
* 소스 코드 빌드/배포
* 애플리케이션 레벨의 서비스
* 로깅/모니터링(일부 메트릭 수집 제공)
* 기본 설정 언어(PL) 제약  
  ⇒선언적 API를 사용합니다
  
세부적인 내용을 살펴보면 다음과 같습니다.

| 기능                           | 제공여부 | 비고                           |
|--------------------------------|---|--------------------------------|
| 컨테이너가 정지시 재실행 | ○ |                                |
| 노드 정지시 재실행 | × |                                |
| 노드 정지시, 다른 노드에서 부족한 만큼 컨테이너 실행 | × | 쿠버네티스만으로 불가능합니다 |
| 노드 부하에 따라 컨테이너수 증가 | × |                                |
| 노드 부하에 따라 노드수(?!) 증가 | × |                                |
| 관리자가 지정한 수의 컨테이너 실행 | ○ |                                |
| 영구 스토리지를 제공 | △ | NFS, EBS, GCP 등을 추상화해 제공합니다 |
| 오브젝트 스토리지를 제공 | × | S3, Cloud Storage 사용합니다 |
| 노드간 도커 네트워크 접속 | × | flannel, calico 등을 사용합니다 |
| 엔드포인트에서 컨테이너로 부하분산 | ○ |                                |
| 각 노드로 트래픽 분산 | × |                                |

<br/>

## 기본 개념

* 노드
* 파드
* 레플리카셋
* 서비스
* 스토리지

### 노드
Docker 데몬이 동작하는 호스트를 말합니다.
마스터, 미니언(슬레이브, 워커)으로 구성됩니다.
클러스터 제어용 프로그램이 동작(API)하는 노드가 마스터 노드입니다.

노드 taint를 제거해 마스터/미니언을 겸용 가능하나 일반적으로 그렇게 사용하지 않습니다.

### 파드
*pod는 고래 떼를 말합니다*  
긴밀하게 연계되는 컨테이너 세트를 생성합니다.
같은 파드 안의 컨테이너는 루프백 네트워크(localhost)로 통신할 수 있습니다.
또한 프로세스, IPC와 네임스페이스를 공유하고 있어 공유 메모리나 시그널링 툴을 사용해
파드의 여러 프로세스를 제어할 수 있습니다.
(docker-compose와 유사하다고 생각됩니다)

파드는 하나의 컨테이너일 수도, 한 시스템일 수도 있어 헷갈릴 수 있습니다.
하지만, 쿠버네티스에서 파드는 스케일링과 복제의 단위입니다.
파드는 디플로이먼트에 기술해 상태와 레플리카를 관리할 수 있습니다.

### 레플리카셋
수평적 확장(스케일 아웃)을 제공합니다.
과거 버전은 `Replication Controller`를 사용하였고 하위 호환성을 위해 존재하나,
현재는 `Replica Set`을 사용합니다.

### 서비스
레플리카셋으로 생성된 로드벨런서의 엔드포인트를 제공합니다.
둘은 다음과 같이 라벨로 연계됩니다.
```yaml
apiVersion: v1
kind: Service
metadata:
  namespace: mynamespace
  name: myapp-service
  labels:
    app: myapp
spec:
  type: ClusterIP
  selector:
    app: myapp
  ports:
    - name: http
      port: 80
      targetPort: 5000
```
*`spec`-`selector` 밑에 `key:value`로 정의합니다.*

또한, 서비스는 TCP/UDP에 없는 다음 세가지를 제공합니다.

* 자체 IP 주소
  
가상 IP 주소로 네트워크 인터페이스와 일치하지는 않습니다.
대신 로드 밸런싱될 IP 주소로 네트워크 패브릭에 프로그래밍 됩니다.
네트워크 패브릭은 레플리카셋에 따라 동적으로 재프로그래밍 됩니다.
즉, Service IP 주소 연결은 신뢰할 수 있습니다.

* 쿠버네티스 클러스터 DNS
  
클러스터의 다른 컨테이너가 `name.namespace.svc`로 DNS를 이용할 수 있습니다.

* 로드 밸런싱 규칙

규칙을 정하지 않으면 라운드 로빈이나 대상 IP 주소 튜플에 기반해 결정합니다.

<!--
https://gruuuuu.github.io/network/lb01/
-->

### 스토리지
초기 볼륨 인터페이스는 코드를 작성해 확장이 가능했습니다.
이제는 쿠버네티스 외부에서 개발해 컨테이너 스토리지 인터페이스(CSI)를 사용합니다.
이는 이식성과 자동 볼륨 생성을 모두 가능하게 합니다.

* 영구 볼륨(persistent volume)

구체적인 제공자를 지정하지 않고 일반적인 스토리지를 요청하는 경우,
파드 정의가 필요합니다. 이를 위해 pv와 pvc(persistent volume claim)을 제공합니다.

* 컨피그맵
  
[컨피그맵](https://jwher.github.io/k8s-tip-configmap)

* 시크릿

시크릿은 볼륨 컨텍스트 안에서 컨피그맵과 동일합니다.

<br/>

## 관리 개념
*컴포넌트를 위한 컴포넌트*

* 네임스페이스
* 라벨(레이블)
* 어노테이션

### 네임스페이스

### 라벨
라벨 설렉터, 동적 그룹을 제공합니다.

### 어노테이션

<br/>

## 고급 개념
* 디플로이먼트
* 인그레스
* 스테이트풀셋

### 디플로이먼트

레플리카셋 버전의 안전한 롤아웃을 지원하기 위해 추가되었습니다.
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  annotations:
  labels:
    app: myapp
  name: myapp
  namespace: mynamespace
spec:
  replicas: 1
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
        image: jwher/myapp
        imagePullPolicy: IfNotPresent
        name: server
        ports:
        - containerPort: 5000
          protocol: TCP
```

<br/>

### 인그레스

### 스테이트풀 셋

<br/>

## 아키텍처 구성요소

* Docker(both)
* kubelet(both)
* etcd
* kube-proxy
* kube-apiserver
* kube-controller-manager
* kube-scheduler
* kube-proxy(미니언)
   
## 노드간 통신

서비스 디스커버리(flannel)

<br/>

## Tips

상당히 많은 글과 6개월간 운영 검혐으로 작성했습니다.

### Reference  

[[공식]What is kubernetes](https://kubernetes.io/ko/docs/concepts/overview/what-is-kubernetes/)  
[[공식]Kubernetes Components](https://kubernetes.io/docs/concepts/overview/components/)

## - JWHer  
좋은 글을 쓰고 싶습니다.

<!-- update log -->
<!--
본문에 추가할 내용을 적는다.
-->