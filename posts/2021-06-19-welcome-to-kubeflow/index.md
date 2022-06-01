---
authors:
- jwher
description: '쿠브플로우: 머신러닝 자동화'
slug: welcome-to-kubeflow
tags:
- tech
- kubeflow
- kubernetes
title: Welcome To Kubeflow
---

![kubeflow](/img/logos/kubeflow.svg)
*MLOps와 쿠브플로우*
<!--truncate-->

# 목차
* [MLOps](#MLOps)
  
<br/>

## MLOps
DevOps라는 단어를 들어본 적이 있는가?  
이전에 소프트웨어를 개발해 배포하고 관리하는 것은 Engineer의 몫이였다.  

하지만, 수많은 서버에 배포/관리 작업은 *힘들다*  
특히나 이미 동작중인 소프트웨어의 버전을 업데이트 하거나, 무정지로 작동해야 할 때, 심지어는 오류로 인한
Rollback 상황까지 생각하면...
> 정신 나갈 것 같애!

<br/>
ML Production flow는 일반적으로 다음 단계를 거친다.

1. Project setup  
2. Data pipeline  
3. Modeling & training  
4. Serving

수요가 높아진 AI/ML에 DevOps 개념을 적용해 MLOps라는 이름으로 위의 단계의 배포/관리를 지원하는
다양한 workflow가 등장하고 있다.

현재 Airflow 등 다양한 workflow 플랫폼이 있고, 확연한 우위를 점한 것은 없어 보인다.  
![Alt](https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/workflow-compare.png "workflow-compare")  
luigi와 Argo는 각각 다른 것들이 더 유명해 특정하기 쉽지 않다.

![Alt](https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/workflow-rank.png "workflow-rank")  
특이하게 한국에서 kubeflow에 대한 관심이 높다.

여러 workflow에 대한 비교가 [여기][workflow]에 잘 살명되어 있다.

kubeflow는 kubernetes 상에서 돌아가는 workflow이다. 다양한 시스템에서 동작하는 다양한 버전이 존재한다. 
   
<br/>

![Alt](https://raw.githubusercontent.com/JWHer/jwher.github.io/master//assets/img/Kubeflow.gif "kubeflow")

## Tips

주말에 작성해 보려고 했는데 욕심이 과했습니다. 빨리 마저 작성해겠습니다...

### Reference  

[What I learned from looking at 200 machine learning tools](https://huyenchip.com/2020/06/22/mlops.html)

[workflow]: https://www.datarevenue.com/en-blog/airflow-vs-luigi-vs-argo-vs-mlflow-vs-kubeflow


## - JWHer  
좋은 글을 쓰고 싶습니다.

<!-- update log -->
<!--
두다지
-->