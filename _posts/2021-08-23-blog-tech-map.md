---
layout: post

title: "허정원 기술블로그"
thumbnail-img: /assets/logos/logo.svg
categories:
- blog
excerpt: |
  블로그 사이트맵
date: 2021-08-23 19:50:00

aside: true
feature_text: |
  # JWHer's tech Blog
feature_image: "/assets/img/bamboos.jpg"
comments: true
---

<!-- more -->

<p align="center">
<img src="/assets/logos/logo.svg" style="max-height: 40vh;"/>
</p>

*블로그 사이트맵*  

# 목차
* [범례](#범례)
* [데이터베이스](#데이터베이스)
* [스트리밍/메시지](#스트리밍메시지)
* [빌드](#빌드)
* [CI/CD](#cicd)
* [오케스트레이션](#오케스트레이션)
* [서비스 디스커버리](#서비스-디스커버리)
* [RPC](#rpc)
* [프록시](#프록시)
* [API 게이트웨이](#api-게이트웨이)
* [서비스 메시](#서비스-메시)
* [클라우드 스토리지](#클라우드-스토리지)
* [컨테이너 런타임](#컨테이너-런타임)
* [클라우드 네트워크](#클라우드-네트워크)
* [자동화](#자동화)
* [컨테이너 레지스트리](#컨테이너-레지스트리)
* [보안](#보안)
* [키 관리](#키-관리)
* [관측성](#관측성)
* [서버리스](#서버리스)

## 범례

CNCF 프로젝트와 블로그에서 다루는 기술을 설명합니다.
CNCF에 대한 개요는 [이글](https://jwher.github.io/cncf) 을 참고하세요!

* 파란색: 블로그에 작성된 것
* 초록색: 잘 알려져 있고, 설명이 필요 없다고 생각하는 것
* 빨간색: 사용하고 있지만 잘 알지 못하고 글을 작성해야 하는 것
* 노란색: 잘 알지 못하거나 들어봤고 덜 중요한 것
* 그외: 사용하지 않고, 모르는 것

<br/>

## 데이터베이스

<div style="text-align: center">
<img src="/assets/img/tech/database.png" style="max-height: 40vh;"/>
</div>

### [MariaDB](https://mariadb.org/)
[MySQL](#mysql)과 같은 코드, 호환성을 유지하는 오픈소스 RDBMS 입니다.

### [mongoDB](https://www.mongodb.com/)
도큐먼트 지향 데이터베이스, NoSQL 중 가장 유명합니다.

### [MySQL](https://www.mysql.com/)
세계에서 가장 많이 쓰이는, 오픈 소스 RDBMS 입니다. 오라클에서 관리하고 있습니다.

<br/>

><div style="text-align: center">
><img src="/assets/img/tech/database-deployment.png" style="max-height: 40vh;"/><br/>
><a href="https://web.archive.org/web/20130225171830/http://www.mysql.com/why-mysql/marketshare/">
>2008 데이터베이스 점유율</a>
></div> 

<br/>

### [PostgreSQL](https://www.postgresql.org/)
객체-관계형 데이터베이스 시스템(ORDBMS) 입니다.
객체 생성과 상속으로 확장성이 좋습니다.

### [redis](https://redis.io/)
*작성예정*  
REmote DIctionary Service의 약자로, 키-값의 비정형 데이터를 저장하는 오픈소스 DBMS입니다.
모든 데이터를 메모리로 불러와 처리하는 특징이 있습니다.

<br/>

## 스트리밍/메시지

<p align="center">
<img src="/assets/img/tech/streaming-messaging.png" style="max-height: 40vh;"/>
</p>

### [nifi](https://nifi.apache.org/)
NIagara FIles의 약자로, 데이터 흐름의 자동화를 위한 아파치 재단 프로젝트입니다.

### [Spark](https://spark.apache.org/)
분산 컴퓨팅 프레임워크입니다.
대규모 데이터 스트리밍 처리에 사용합니다.

### [kafka](https://kafka.apache.org/)
*작성예정*  
메시지 브로커입니다.
실시간, 대규모 처리를 목표하고 있습니다.
소비자와 수신자로 구성되는 Publish/Subscribe 방식입니다.

관련글
* [Kubeflow 시각화 개발 2편](https://jwher.github.io/kubeflow-visualization-2)  
<!-- queueing theory 글 -->
<br/>

### [RebbitMQ](https://www.rabbitmq.com/)
*작성예정*  
메시지 브로커입니다.
Advanced Message Queuing Protocol, AMQP를 구현하였으며 MQTT 등 프로토콜을 지원합니다.
소비자와 수신자로 구성되는 Publish/Subscribe 방식입니다.

### [talend](https://www.talend.com/)
Talend 사의 ETL 애플리케이션입니다.

<br/>

## 빌드

<p align="center">
<img src="/assets/img/tech/build.png" style="max-height: 40vh;"/>
</p>

### [HELM](https://helm.sh/ko/)
쿠버네티스 패키지 매니저입니다.

관련글
* [Helm: 쿠버네티스 패키지 매니저](https://jwher.github.io/install-helm)  
<br/>

### [bitnami](https://bitnami.com/)
로컬(on-premise)에 소프트웨어 패키지 설치 라이브러리 입니다.

### [Gradle](https://gradle.org/)
자바 그루비를 이용한 빌드 자동화 시스템입니다. 안드로이드 앱의 공식 빌드 시스템입니다.

### [OPENAPI](https://www.openapis.org/)
공개된 API로
OpenAPI Specification([Swagger](https://swagger.io/) Specification)을 따릅니다.

<br/>

## CI/CD

<p align="center">
<img src="/assets/img/tech/ci-cd.png" style="max-height: 40vh;"/>
</p>

### [argo](https://argoproj.github.io/)
*작성예정*  
오픈소스, 쿠버네티스 동작 워크플로우
GitOps(DevOps)를 위한 CI/CD 도구입니다.

관련글
* [쿠브플로우: 머신러닝 자동화](https://jwher.github.io/welcome-to-kubeflow)  
<br/>

### [GitLab](https://about.gitlab.com/)
*작성예정*  
Gitlab사가 개발한 웹 기반 Git 저장소입니다.
이슈 추적 시스템(ITS)와 CI/CD 등 DevOps 기능을 갖추었습니다.

관련글
* [깃허브 이슈로 협업하기](https://jwher.github.io/github-issue)  
<br/>

### [Jenkins](https://www.jenkins.io/)
*작성예정*  
자바로 작성된 CI 툴입니다.
깃이나 서브버전이 변경되면 배포를 진행하는 자동화 기능과,
빌드 관리 등 다양한 플러그인을 사용합니다.

<br/>

## 오케스트레이션

<p align="center">
<img src="/assets/img/tech/orchestration.png" style="max-height: 40vh;"/>
</p>

### [Kubernetes](https://kubernetes.io/)
CNCF 첫 프로젝트로 컨테이너화된 애플리케이션을 관리해줍니다.

관련글
* [쿠버네티스 세계에 오신 걸 환영합니다!](https://jwher.github.io/welcome-to-kubernetes)  
* [쿠버네티스 카테고리](https://jwher.github.io/categories#kubernetes)
<br/>

### [Amazon ECS](https://aws.amazon.com/ko/ecs/)
Elastic Container Service, ECS입니다.
완전관리형 컨테이너 오케스트레이션 서비스로 2015년에 출시되었습니다.
쿠버네티스가 대세가 되며 Elastic Kubernetes Service, EKS를 제공하고 있습니다만,
SageMaker 등 인기 AWS 서비스를 사용하려면 ECS를 사용해야 합니다.  
[[공식]Amazon ECS vs Amazon EKS](https://aws.amazon.com/ko/blogs/containers/amazon-ecs-vs-amazon-eks-making-sense-of-aws-container-services/)

관련글  
*작성예정*
* [SageMaker](https://jwher.github.io/sagemaker)  
<br/>

### [MESOS](http://mesos.apache.org/)
분산 컴퓨팅 자원(클러스터)을 무중단(fault-tolerant)으로 운영하게 도와줍니다.

### [docker SWARM](https://docs.docker.com/engine/swarm/)
클러스터의 도커 엔진들을 하나의 가상 도커 엔진처럼 사용합니다.
도커 1.12 이상부터 도커 엔진에 Swarm 모드가 통합되었습니다.

### [Nomad](https://www.nomadproject.io/)
비 중앙화된 애플리케이션을 on-premise 부터 cloud 까지 스케일링하는 컨테이너 관리 도구입니다.

<br/>

## 서비스 디스커버리

<p align="center">
<img src="/assets/img/tech/service-discovery.png" style="max-height: 40vh;"/>
</p>

[[조대협]MSA에서 Service discovery 패턴](https://bcho.tistory.com/1252)

### [CoreDNS](https://coredns.io/)
*작성예정*  
Go로 작성된 서비스 디스커버리입니다.
쿠버네티스 플러그인으로 `resource_name.namespace.resource`와 같이 DNS를 사용할 수 있습니다.

### [etcd]()
*작성예정*  
중요한(critical) 데이터의 분산 키-값 저장소 입니다.
[쿠버네티스](#kubernetes), ROOK, [CoreDNS](#coredns)에 사용됩니다.

### [ZooKeeper](https://zookeeper.apache.org/)
*작성예정*  
하둡의 하위 프로젝트로 하둡 에코시스템 관리를 위해 만들어졌습니다.
현재는 독립적인 상위 프로젝트로써, 중복(redundant) 서비스로 고가용성을 지원합니다.

<br/>

## RPC

<p align="center">
<img src="/assets/img/tech/rpc.png" style="max-height: 40vh;"/>
</p>

### [gRPC](https://grpc.io/)
*작성예정*  
HTTP/2, Protocol Buffer를 사용해 고성능의 RPC를 지원합니다.
단 REST와 달리 protobuf로 직렬화(serialize)되어 사람이 알아보기 힘듭니다.

<br/>

## 프록시

<p align="center">
<img src="/assets/img/tech/proxy.png" style="max-height: 40vh;"/>
</p>

### [envoy](https://www.envoyproxy.io/)
오픈소스, 클라우드 네이티브 앱을 위한 서비스 프록시 입니다.

관련글  
* [Envoy proxy: 대규모 서비스를 위한 L7 프록시](https://jwher.github.io/envoy)  
<br/>

### [NGINX](https://www.nginx.com/)
*작성예정*  
고성능의 로드밸런서 입니다.
아파치 HTTP 서버의 스레드 기반과 다르게 비동기 이벤트 기반 구조를 가집니다.
아파치보다 좋은 성능을 보여주며 대체해 나가고 있습니다.

<br/>

## API 게이트웨이

<p align="center">
<img src="/assets/img/tech/api-gateway.png" style="max-height: 40vh;"/>
</p>

(이 단락은 공백입니다)

<br/>

## 서비스 메시

<p align="center">
<img src="/assets/img/tech/service-mesh.png" style="max-height: 40vh;"/>
</p>

### [Istio](https://istio.io/)

<br/>

## 클라우드 스토리지

<p align="center">
<img src="/assets/img/tech/cloud-storage.png" style="max-height: 40vh;"/>
</p>



<br/>

## 컨테이너 런타임

<p align="center">
<img src="/assets/img/tech/container-runtime.png" style="max-height: 40vh;"/>
</p>



<br/>

## 클라우드 네트워크

<p align="center">
<img src="/assets/img/tech/cloud-network.png" style="max-height: 40vh;"/>
</p>



<br/>

## 자동화

<p align="center">
<img src="/assets/img/tech/automation.png" style="max-height: 40vh;"/>
</p>



<br/>

## 컨테이너 레지스트리

<p align="center">
<img src="/assets/img/tech/container-registry.png" style="max-height: 40vh;"/>
</p>



<br/>

## 보안

<p align="center">
<img src="/assets/img/tech/security.png" style="max-height: 40vh;"/>
</p>



<br/>

## 키 관리

<p align="center">
<img src="/assets/img/tech/key-management.png" style="max-height: 40vh;"/>
</p>



<br/>

## 관측성

<p align="center">
<img src="/assets/img/tech/observability.png" style="max-height: 40vh;"/>
</p>



<br/>

## 서버리스

<p align="center">
<img src="/assets/img/tech/serverless.png" style="max-height: 40vh;"/>
</p>



<br/>

## Tips


### Reference
[한국어 위키피디아](https://ko.wikipedia.org/)  

## - JWHer  
좋은 글을 쓰고 싶습니다.

<!-- update log -->
<!--
본문에 추가할 내용을 적는다.
-->
