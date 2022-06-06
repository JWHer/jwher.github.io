---
authors:
- jwher
description: '아마존 세이지메이커: 머신러닝 자동화'
slug: sagemaker
tags:
- tech
- ml
title: Sagemaker
---

![sagemaker](/img/logos/sagemaker.svg)
*AWS Builders Sagemaker Session*  
*이 글은 아마존 빌더스 세이지메이커 세션을 듣고 작성했습니다*
<!--truncate-->

# 목차
* [SageMaker](#sagemaker)
* [실습](#실습)

## SageMaker

세이지메이커(SageMaker)는 AWS ML 스택으로,
준비, 빌드, 훈련 및 튜닝, 배포 및 관리 CI/CD 파이프라인입니다.
세이지메이커 핵심 개념은 다음과 같습니다.
* 데이터 보호를 통한 혁신 지원
* 반복 훈련 워크플로우 자동화

관리형 머신러닝 CI/CD 서비스인 세이지메이커는 다음 서비스를 제공합니다.
* 워크플로우 각 단계를 중앙에서 관리
* 워크플로우 공유 및 재실행
* 빌트인 템플릿에서 선택
* 워크플로우 시각적으로 비교

세이지메이커 파이프라인은 수동, [CloudWatch](https://aws.amazon.com/ko/cloudwatch/) 이벤트,
코드 체크인, 스케줄링으로 시작됩니다.
세이지메이커는 다음과 같은 순서로 작동합니다.
* 입력 데이터 가져오기
* 데이터 처리
* 모델 훈련
* 검증
* 모델 배포 (또는) 경고 및 중단

워크플로우는 Python SDK를 사용해 작성합니다.
파이프라인 실행 세부 정보와 메트릭은 웹 스튜디오를 사용해 실시간으로 확인합니다.
   
<br/>

## 실습

실습은 세이지메이커 노트북 인스턴스를 생성해 사용합니다.
이를 위해 AWS CloudFormation을 사용해 노트북 인스턴스를 생성합니다.

### Requirements
* AWS account
* AWS IAM(Identity and Access Management)
* AWS 이해

*필자는 AWS Builders 2021에 참여해 실습 계정을 지급받았습니다.*

1. 클라우드포메이션에서 스택 생성을 합니다.
준비된 템플릿을 사용했습니다.

<p align="center">
<img src="/assets/img/sagemaker/cloudformation1.png"/>
</p>
<br/>
   
2. 스택 세부 정보를 지정합니다.
<p align="center">
<img src="/assets/img/sagemaker/cloudformation2.png"/>
</p>

Amazon Elastic Compute Cloud, EC2는 컴퓨트 자원 추상화로써 성능의 일관성을 제공합니다.
ml.m4.xlarge는 다음과 같은 뜻입니다.
* ml: 세이지메이커 등 ml에 사용하는 인스턴스입니다.
* m4: 범용 인스턴스입니다.  
2.3GHz 인텔 제온® E5-2686 v4(Broadwell) 또는 2.4GHz 인텔 제온® E5-2676 v3(Haswell)
* xlarge: 4vCPU, 16Gib, EBS 전용 스토리지, 네트워크 성능 높음

*Gib, Giga Binary byte = 2^30*  
*EBS, Elastic Block Store*

<br/>

3. 동의 버튼 누르고 스택 생성을 누릅니다.
<p align="center">
<img src="/assets/img/sagemaker/cloudformation5.png"/>
</p><br/>

4. 노트북 인스턴스의 생성이 완료되면, 검색창에 sagemaker를 검색합니다.
<p align="center">
<img src="/assets/img/sagemaker/cloudformation7.png"/>
</p><br/>

5. SageMaker에 들어가 왼쪽 탭에 `노트북`-`노트북인스턴스`-`이름` 또는 `Jupyter` 또는 `JupyterLab`을 클릭합니다.
<p align="center">
<img src="/assets/img/sagemaker/cloudformation9.png"/>
</p><br/>


6. 주피터 랩 하단의 `Terminal`을 열고 실습에 사용할 코드를 clone 받습니다.
<p align="center">
<img src="/assets/img/sagemaker/cloudformation12.png"/>
</p><br/>

<!-- 워크샵 코드:
https://github.com/gonsoomoon-ml/SageMaker-Pipelines-Step-By-Step.git
-->

7. 주피터에서 SDK를 사용해 파이프라인을 실행시키고 SageMakerStudio에 접속하면
파이프라인 조회가 가능합니다.
<p align="center">
<img src="/assets/img/sagemaker/sagemakerstudio4.png"/>
</p>

Web UI 형태로 제공되며 개인적인 느낌으로 [Kubeflow](https://jwher.github.io/welcome-to-kubeflow)
와 아키텍처, UI 모두 매우 흡사했습니다.

*개발자가 같았다면, 세이지메이커가 더 빠르지 않았나 생각해 봅니다(추측)*

<br/>

## Tips

SageMaker는 [아마존 ECS](https://jwher.github.io/blog-tech-map#amazon-ecs)
로 다른 AWS 기능을 깊히 사용합니다.(Ex. S3) 

MLOps와 kubeflow, sagemaker, mlflow 그리고 비교 글로 분화해 작성해야 겠습니다.

MLOps 수명 주기를 최적화하기 위한 핵심 원칙은 다음과 같습니다.
* 자동화되고 재현 가능한 ML Workflow 생성
* 모델 레지스트리로 모델 관리
* Infrastructure-as-Code 및 CI/CD 파이프라인 사용으로 지속적 전달(Continuous Delivery) 활성화
* 모델 성능 및 피드백 정보 모니터링

### Reference  

[AWS Builders 2021](https://aws.amazon.com/ko/events/seminars/aws-industry-week/)  
[[깃헙]AWS Samples](https://github.com/aws-samples)

