---
layout: post

title: "Kubeflow 시각화 개발 1편"
redirect_from:
  - /2021-06-08-kubeflow-visualization-1/
thumbnail-img: /assets/img/engineering.jpg
categories:
- dev
- kubeflow
- kubernetes
excerpt: |
  kubeflow 시스템 이해와 이벤트 기반 아키텍처 설계
date: 2021-06-08 11:50:00 

aside: true
feature_text: |
  
feature_image: "/assets/img/bamboos.jpg"
comments: true
---

<!-- more -->

<!-- image repository: https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/ -->
![Alt](https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/engineering.jpg "engineering")  
*kubeflow 시스템 이해와 ETL 아키텍처 설계*  

# 목차
* 문제점
* kubeflow 시스템 이해
* ETL 아키텍처 설계

## 문제점   

필자는 [MLOps](https://en.wikipedia.org/wiki/MLOps) 를 위해 kubeflow를 도입해 쓰고 있습니다. 

ML 모델 개발자로 일을 하다 *엔지니어링* 업무까지 맡아 **풀스택**이 되어버린 저에게 공감가는 글을 찾았는데요,  
[[번역] 데이터 과학자들은 쿠버네티스에 관심이 없습니다 - MLOps](https://coffeewhale.com/kubernetes/mlops/2021/01/28/mlops-determinedai/)  
*원문을 찾아 다시 다룰 예정*  

개발자 동료분들이 툭하면 서버 접속이 안된다, docker 문제있다... 불평을 일상처럼 듣는 제게 깊은 감동을 주었습니다.:blush:
개발자가 아키텍처 기술을 공부하지 않아 생기는 문제이지만,
**솔직히** 보통 개발자라면 자주 쓰지도 않는 시스템 명령어를 공부하진 않을 것 같아요.  

특히, MSA와 EDA 서비스 개발방식이 주가 되며 개발자가 알아야할 부분은 줄었지만,
전체 시스템 파악은 더 어려워지고 있습니다.
개발자가 엔지니어링까지 할 수 있는 DevOps라고 하지만,
결국 말 그대로 엔지니어링 공부를 해서 **풀스택**개발을 하라는 것과 다를바가 없다는 생각이 드네요...

> ![Alt](https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/hard-to-die.png "hard to die")  
> *죽겠어요...*

결국 개발자를 위한 개발자가 DevOps 시스템을 잘 만들어서 엔지니어링에 대한
공부 없이 진짜 DevOps를 할 수 있게 해야한다고 생각하고, **UX개발**이 핵심이라고 생각합니다.
   
<br/>

## kubeflow 시스템 이해

vanilla kubeflow는 1단계 자동화를 지원합니다.  
![Alt](https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/mlops1.png "mlops1")  
그림에서 데이터 분석, 모델(소스코드) 제작까지 개발자(ML)의 역할,
파이프라인 배포와 관리부터 운영자(operator)의 역할로 보여주고 있습니다.
Deployment가 자동화 되었지만 외부 데이터 공급, 파이프라인 단계 생성은 여전히 운영자가 필요하죠.
현재 kubeflow에서 작성하는 Argo DAG(Directed acyclic graph) yaml 작성과 배포에 해당된다고 볼 수 있겠습니다.

*개발자와 운영자 범위는 대해 회사/부서마다 다르겠죠*  

진정한 MLOps 또는 DevOps를 어떻게 볼 것인가? 라고 질문하면 버튼 수준의 자동화라고 생각하는데요,
2단계 자동화를 봅시다  
![Alt](https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/mlops2.png "mlops2")  
데이터 분석가가 진행중인 실험(experiment)를 보고 모델 분석과 소스 코드 수정을 합니다.
소스는 레파지토리(Git 혹은 SVN...)에 업로드되고 Integration 프로세스에 따라 패키징,
Deployment 프로세스에 따라 자동적으로 배포됩니다.  
:satisfied:이제 어디에도 징징대는 운영자가 없네요! 개발자는 git push 버튼만 누르면 됩니다!


### 제약사항

하지만 우리에겐 징징대는 운영자 동료와 복잡한 배포 구조가 있습니다.  
#### 우리의 목표
2단계 자동화를 함에 있어, 중간 파이프라인의 진행 상황을 명확하게 관찰할 수 있게 하려고 합니다.
즉 진행 상황 시각화를 개발하려고 합니다.  

<div align="center" markdown=1>
<image src="https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/vis-pipeline.png" style="height: 26vmin;"/>⇒
<image src="https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/vis-pipeline2.png" style="height: 26vmin;"/>
   
*기존 ⇒ 변경 UI*
</div>


#### 가진 것
우리가 가진건 github에 있는 vanilla kubeflow 밖에 없습니다.
vanilla kubeflow도 visualization을 지원하지만,
파이프라인이 완료된 결과를 보여주는 것으로 실시간 진행상황을 보고싶은 우리의 요구를 충족하지 못합니다.  
<br/>

기존 visualization이 가지는 한계는 다음과 같습니다.  

**여러 시각화 작업은 동시에 생성될 수 없습니다**  
* 하나의 파이썬 커널이 시각화 작업을 진행하기 때문입니다  
* 일반적 해결책: 시각화 서비스 레플리카를 늘리세요

**시각화는 30초를 지나면 생성에 실패합니다**  
* 시각화 과정 중 30초가 넘으면 프론트엔드 요청에 타임아웃 헤더를 추가할 수 있습니다  
* 일반적 해결책: visualization deploy.yaml에 추가하세요

```yaml
- env:
  - name: KERNEL_TIMEOUT
    value: 100
```

**HTML 컨텐츠는 4MB를 넘지 못합니다**  
* gRPC는 송수신 최대 크기 제한을 4MB로 두기 때문입니다  
* 일반적 해결책: gRPC 서버의 main.go에서 수동으로 maxCallRecvMsgSize를 설정해 줍니다.  

<details>
<summary>원문</summary>
<div markdown="1">
   
**Multiple visualizations cannot be generated concurrently**
* This is because a single Python kernel is used to generate visualizations  
* General solution: increase the number of replicas  

**Visualizations that take longer than 30 seconds will fail to generate**
* For visualizations where the 30 second timeout is reached, you can add the TimeoutValue header to the request made by the frontend  
* General solution: set the KERNEL_TIMEOUT environment variable of the visualization service deployment

```yaml
- env:
  - name: KERNEL_TIMEOUT
    value: 100
```

**The HTML content of the generated visualizations cannot be larger than 4MB**  
* gRPC by default imposes a limit of 4MB as the maximum size that can be sent and received by a server  
* Genearl solution: manually set MaxCallRecvMsgSize for gRPC
 
</div>
</details>  

<br/>

## ETL 아키텍처 설계

![Alt](https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/newvis-architecture.png "newvis architecture")  
*기술 스택보다 용도를 명확히 하자*  ~~그래도 뭔가 더 있어보인다~~

* minIO를 통한 메타정보/오브젝트 저장
* kafka 메시지 큐를 이용한 동시 처리
   대규모 서비스에서에서 빠른 속도로 처리할 수 있습니다.  
   (검증을 해봐야겠지만 [글](https://epicdevs.com/17) 을 참고했습니다)
* python/flask를 이용한 시각화
* 사용자에게 보여줄 웹 서버

다음 시간부터 실제 구현을 해 봅시다!

<br/>


### Reference  
[[깃헙]Python based visualizations guideline](https://github.com/kubeflow/pipelines/blob/master/backend/src/apiserver/visualization/README.md)

## - JWHer  
좋은 글을 쓰고 싶습니다.

<!-- update log -->
<!--
본문에 추가할 내용을 적는다.
-->
