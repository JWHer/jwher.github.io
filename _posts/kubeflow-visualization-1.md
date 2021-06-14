---
layout: post
title: "kubeflow visualization 개발 1편"
subtitle: "kubeflow 시스템 이해와 ETL 아키텍처 설계"
cover-img: /assets/img/cover.svg
thumbnail-img: /assets/img/Kubernetes.svg
share-img: /assets/img/Kubernetes.svg
tags: [tech, kubernetes, dev]
comments: true

date: 2021-06-08 11:50:00 
---

<!-- image repository: https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/ -->
![Alt](https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/engineering.jpg "engineering")  
*kubeflow 시스템 이해와 ETL 아키텍처 설계*  

# 목차
* 문제점
* kubeflow 시스템 이해
* ETL 아키텍처 설계

## 문제점   

필자는 [MLOps](https://en.wikipedia.org/wiki/MLOps) 를 위해 kubeflow를 도입해 쓰고 있다. 

ML 모델 개발자로 일을 하다 *엔지니어링* 업무까지 맡아 **풀스택**이 되어버린 나에게 공감가는 글을 찾았다.  
[[번역] 데이터 과학자들은 쿠버네티스에 관심이 없습니다 - MLOps](https://coffeewhale.com/kubernetes/mlops/2021/01/28/mlops-determinedai/)  
*원문을 찾아 다시 다룰 예정*  

개발자 동료분들이 툭하면 서버 접속이 안된다, docker 문제있다... 불평은 일상이였다.
개발자가 아키텍처 기술을 공부하지 않아 생기는 문제이지만,
**솔직히** 보통 개발자라면 자주 쓰지도 않는 시스템 명령어를 공부하지 않을 것이다.  

특히, MSA와 EDA 서비스 개발방식이 주가 되며 개발자가 알아야할 부분은 줄었지만,
전체 시스템 파악은 더 어려워졌다.
개발자가 엔지니어링까지 할 수 있는 DevOps라고 하지만,
결국 말 그대로 엔지니어링 공부를 해서 **풀스택**개발을 하라는 것과 다를바가 없어 보인다...

결국 개발자를 위한 개발자?가 DevOps 시스템을 잘 만들어서 엔지니어링에 대한
공부 없이 진짜 DevOps를 할 수 있게 해야한다고 생각하고, **UX개발**이 핵심이라고 생각한다.
   
<br/>

## kubeflow 시스템 이해

vanilla kubeflow는 1단계 자동화를 지원한다.  
![Alt](https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/mlops1.png "mlops1")  
그림에서 보듯 데이터 분석, 모델(소스코드) 제작까지 개발자(ML)의 일이고
파이프라인 배포와 관리부터 운영자(operator)의 일이다.
Deployment가 자동화 되었지만 외부 데이터 공급, 파이프라인 단계 생성은 운영자가 해준다.
현재 kubeflow에서 작성하는 Argo DAG(Directed acyclic graph) yaml 작성에 해당된다고 볼 수 있다.

*개발자와 운영자 범위에 대해 의견이 다를 수 있지만 필자는 이렇게 생각한다*

진정한 MLOps 또는 DevOps를 어떻게 볼 것인가? 라고 질문하면 버튼 수준의 자동화라고 대답하고 싶다.
2단계 자동화를 보자  
![Alt](https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/mlops2.png "mlops2")  
데이터 분석가가 진행중인 실험(experiment)를 보고 모델 분석과 소스 코드 수정을 한다.
소스는 레파지토리(Git 혹은 SVN...)에 업로드되고 Integration 프로세스에 따라 패키징,
Deployment 프로세스에 따라 자동적으로 배포된다.
이제 어디에도 징징대는 운영자가 없다!


### 제약사항

#### 우리의 목표
2단계 자동화를 함에 있어, 중간 파이프라인의 진행 상황을 명확하게 관찰하려고 한다.
즉 진행 상황 시각화를 개발하려고 한다.  
![Alt](https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/vis-pipeline.png "vis-pipeline")


#### 가진 것
하지만 우리는 github에 있는 vanilla kubeflow 밖에 없다.  


<br/>

## ETL 아키텍처 설계

### 공유 볼륨을 통한 수집
```yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: tmp-pv
spec:
  capacity:
    storage: 1Gi
  accessModes:
    - ReadWriteOnce
  persistentVolumeReclaimPolicy: Delete
  claimRef:
    namespace: admin
    name: tmp-pvc
  storageClassName: local-storage
  local:
    path: "/mnt/tmp"
  nodeAffinity:
    required:
      nodeSelectorTerms:
      - matchExpressions:
        - key: kubernetes.io/hostname
          operator: In
          values:
          - slavekf
---
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: tmp-pvc
  namespace: admin
spec:
  resources:
    requests:
      storage: 1Gi
  storageClassName: local-storage
  accessModes:
    - ReadWriteOnce
```

<br/>


### Reference  


## - JWHer  
좋은 글을 쓰고 싶습니다.

<!-- update log -->
<!--
본문에 추가할 내용을 적는다.
-->