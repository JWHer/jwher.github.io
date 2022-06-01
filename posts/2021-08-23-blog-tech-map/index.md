---
authors:
- jwher
description: 허정원 기술블로그
slug: blog-tech-map
tags:
- blog
- tech
title: Blog Tech Map
---

![jwher](/img/logo.svg)
*블로그 사이트맵*  
<!--truncate-->

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

<div>
<img src="/assets/img/tech/database.png"/>
</div>

### [MariaDB](https://mariadb.org/)
[MySQL](#mysql)과 같은 코드, 호환성을 유지하는 오픈소스 RDBMS 입니다.

### [mongoDB](https://www.mongodb.com/)
도큐먼트 지향 데이터베이스, NoSQL 중 가장 유명합니다.

### [MySQL](https://www.mysql.com/)
세계에서 가장 많이 쓰이는, 오픈 소스 RDBMS 입니다. 오라클에서 관리하고 있습니다.

<br/>

><div>
><img src="/assets/img/tech/database-deployment.png"/><br/>
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
<img src="/assets/img/tech/streaming-messaging.png"/>
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
<img src="/assets/img/tech/build.png"/>
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
<img src="/assets/img/tech/ci-cd.png"/>
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
<img src="/assets/img/tech/orchestration.png"/>
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
<img src="/assets/img/tech/service-discovery.png"/>
</p>

[[조대협]MSA에서 Service discovery 패턴](https://bcho.tistory.com/1252)

### [CoreDNS](https://coredns.io/)
*작성예정*  
Go로 작성된 서비스 디스커버리입니다.
쿠버네티스 플러그인으로 `resource_name.namespace.resource`와 같이 DNS를 사용할 수 있습니다.

### [etcd](https://etcd.io)
*작성예정*  
중요한(critical) 데이터의 분산 키-값 저장소 입니다.
[쿠버네티스](#kubernetes), [ROOK](#rook), [CoreDNS](#coredns)에 사용됩니다.

### [ZooKeeper](https://zookeeper.apache.org/)
*작성예정*  
하둡의 하위 프로젝트로 하둡 에코시스템 관리를 위해 만들어졌습니다.
현재는 독립적인 상위 프로젝트로써, 중복(redundant) 서비스로 고가용성을 지원합니다.

<br/>

## RPC

<p align="center">
<img src="/assets/img/tech/rpc.png"/>
</p>

### [gRPC](https://grpc.io/)
*작성예정*  
HTTP/2, Protocol Buffer를 사용해 고성능의 RPC를 지원합니다.
단 REST와 달리 protobuf로 직렬화(serialize)되어 사람이 알아보기 힘듭니다.

<br/>

## 프록시

<p align="center">
<img src="/assets/img/tech/proxy.png"/>
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
<img src="/assets/img/tech/api-gateway.png"/>
</p>

(이 단락은 공백입니다)

<br/>

## 서비스 메시

<p align="center">
<img src="/assets/img/tech/service-mesh.png"/>
</p>

### [Istio](https://istio.io/)

관측성, 트래픽 관리, 보안, 정책을 쉽게 관리하는 서비스 메시 입니다.

관련글  
* [Istio: 서비스 메시](https://jwher.github.io/istio)  
<br/>

## 클라우드 스토리지

<p align="center">
<img src="/assets/img/tech/cloud-storage.png"/>
</p>

### [ROOK](https://rook.io/)
쿠버네티스를 위한 오픈소스 오브젝트 스토리지로
자가 관리, 자가 확장, 자가 치유를 하는 분산 저장소입니다.

### [Arrikto](https://www.arrikto.com/)
ML 모델을 시장에 사용할 수 있는 것을 돕는 회사입니다.
Kubeflow의 MLOps 잠재력으로 데이터 과학자가 빠르고 효과적으로 작업하도록 돕습니다.
대표 제품으로 MiniKF가 있습니다.  
*Arrikto는 그리스어로 "unbreakable"이라는 뜻입니다(출처필요)*

관련글  
* [MiniKF](https://jwher.github.io/install-kubeflow#%EB%B2%88%EC%99%B8-minikf)
<br/>

### [ceph](https://ceph.io/en/)
모든 조직을 위해 신뢰할 수 있고 확장 가능하게 설계된 스토리지입니다.
데이터 레플리카를 사용해 내결함성(fault-tolerant)으로 설계되었습니다.

### [HITACHI](https://www.hitachi.com/)
일본의 다국적 회사입니다.
AI, IOT, 빅데이터, 인프라 IT 사업을 하고 있습니다.

### [HUAWEI](https://www.huawei.com/kr/)
중국의 다국적 회사입니다.
통신장비 제조로 시작해, 현재는 정보 통신 기술(ITC) 솔루션 선두 기업입니다.

### [IBM](https://www.ibm.com/kr-ko)
International Business Machines Corporation,
미국의 다국적 회사입니다.
하드웨어(메인프레임)부터 글로벌 기술 지원까지, 고부가가치 사업을 지향하며 확장했습니다.

### [MINIO](https://min.io/)
고성능 클라우드 오프젝트 스토리지로,
아마존 S3와 호환성을 두고 설계된 쿠버네티스 네이티브 스토리지입니다.

관련글  
* [minIO 오브젝트 스토리지](https://jwher.github.io/minio)
<br/>

## 컨테이너 런타임

<p align="center">
<img src="/assets/img/tech/container-runtime.png"/>
</p>

### [containerd](https://containerd.io/)
*작성예정*  
산업 표준 컨테이너 런타임으로 단순성, 강건성(robustness), 호환성(portability)를 강조합니다.

<br/>

## 클라우드 네트워크

<p align="center">
<img src="/assets/img/tech/cloud-network.png"/>
</p>

### [flannel](https://github.com/flannel-io/flannel/tree/master/Documentation)
*작성예정*  
Layer3(ip) 네트워크 패브릭을 간단하게 설정하는 방법으로 쿠버네티스를 위해 디자인됬습니다. 

관련글  
* [Kubeadm 설치하기](https://jwher.github.io/install-kubernetes#kubeadm-%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0)
<br/>

## 자동화

<p align="center">
<img src="/assets/img/tech/automation.png"/>
</p>

### [ANSIBLE](https://www.ansible.com/)
*작성예정*  
오픈소스 설정 프로비저닝, 앱 배포를 코드로(infrastructure as code) 관리합니다.

### [openstack](https://www.openstack.org/)
개방형 표준 클라우드 컴퓨팅 플랫폼으로, 
가장 많이 배포된 Infrastructure-as-a-Service(IaaS) 입니다.

### [vmware](https://www.vmware.com/)
클라우드 컴퓨팅 및 가상화 소프트웨어를 판매하는 기업입니다.

<br/>

## 컨테이너 레지스트리

<p align="center">
<img src="/assets/img/tech/container-registry.png"/>
</p>

### [HARBOR](https://goharbor.io/)
쿠버네티스를 위한 신뢰할 수 있는 클라우드 네이티브 레포지토리를 목표로 만들어졌습니다.
[notary](#notary), [trivy](#trivy)를 포함합니다.

관련글  
* [쿠버네티스에 Harbor 설치하기](https://jwher.github.io/install-harbor)
<br/>

### [Kraken](https://eng.uber.com/introducing-kraken/)
우버에서 만든 오픈소스 p2p 도커 레지스트리 입니다.

<br/>

## 보안

<p align="center">
<img src="/assets/img/tech/security.png"/>
</p>

### [notary](https://github.com/notaryproject/notary)
*작성예정*  

### [dex](https://dexidp.io)

<!-- ### [TREND MICRO]() -->

### [trivy](https://aquasecurity.github.io/trivy/v0.28.1/)
*작성예정*  

<br/>

## 키 관리

<p align="center">
<img src="/assets/img/tech/key-management.png"/>
</p>

### [OAuth2](https://oauth.net/2/)

### [Vault](https://www.vaultproject.io)

<br/>

## 관측성

<p align="center">
<img src="/assets/img/tech/observability.png"/>
</p>

### [Prometheus](https://prometheus.io)
*작성예정*  

### [Thanos](https://thanos.io)
*작성예정*  

<!-- ### [beats]() -->

### [Gradle](#gradle)
*상위 항목과 중복*

### [Grafana](https://grafana.com)

### [kiali](https://kiali.io)

### [elastic](https://www.elastic.co/kr/)
*작성예정*  

### [logstash](https://www.elastic.co/kr/logstash/)
*작성예정*  

### [ZIPKIN](https://zipkin.io)

<br/>

## 서버리스

<p align="center">
<img src="/assets/img/tech/serverless.png"/>
</p>

### [AWS Lambda](https://aws.amazon.com/ko/lambda/)

### [Knative](https://knative.dev/docs/)
*작성예정*  

### [Kubeless](https://github.com/vmware-archive/kubeless)

### [nuclio](https://nuclio.io)

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
