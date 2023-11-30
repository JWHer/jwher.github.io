---
authors:
- jwher
description: 하드웨어 소프트웨어 통합 설계와 병렬 처리
tags:
- cs
- ml
title: 임베디드 딥러닝
---

[![embedded-deep-learning](/img/logos/cap_logo.png)](/categories/ml/embedded-deep-learning/)  
*Codesign and Parallel Processing*

<!--truncate-->

이 강의를 통해 하드웨어(ai 플랫폼)에서 최적화 방법
소프트웨어 최적화 방법 네트워크 최적화 방법에 대해 배웁니다.

Computers on everyware

Super Computers         --> nation  
DB Servers              --> IBM  
Workstations            --> Oracle  
Personal Computers      --> Microsoft, Apple  
Embedded Computers      --> ?  

## 임베디드 컴퓨터
임베디드 컴퓨터는 환경과 상호작용합니다.
임베디드 컴퓨터는 물리적인 시스템으로서, 특정한 애플리케이션에 맞는 시스템을 가지게 됩니다.
우리 주변에 있는 세탁기, TV, 냉장고부터 스마트폰, 드론, 로봇 등 점차 많은 요소에서 사용되어지고 있습니다.

스마트폰은 일반 목적의 컴퓨터와 임베디드 컴퓨터의 경계선에 있는 시스템입니다.
전화, WIFI 등 특정 기능을 수행하기도 하고, 애플리케이션을 다운받는 등 사용자 프로그래밍이 가능한 시스템이기도 합니다.

임베디드 컴퓨터는 다음과 같은 특징을 가집니다.
- 자원 제약
실시간 제약을 가지고 latency나 throughput의 제약을 받는다.

<Preview text="테스트" src="/categories/ml/embedded-deep-learning/general/performance-metric" id="latency"/>
테스트

- 이기종 병렬 컴퓨팅 시스템
CPU(효율 코어, 고성능 코어 등)와, 특정 기능을 하기 위한 하드웨어가 있다.
- 정확한 디자인이 가장 중요
온라인 디버깅이 거의 불가능하기 때문에 정확한 디자인이 중요하다.

이런 요구사항이 필요하기도 합니다.
- 비용-성능 비율의 최적화
- 사용자 친화성
- 모양과 무게
- 시장에 나오는 때(선점)
- 신뢰성, 안정성, 가용성, 보안

<!-- (arithmetic-intensity) -->

<!-- ## 활성 함수
*Activation Function*

sigmoid, tanh, ReLU

Leaky ReLU, Swish(non linear)

<pre>
NOTE

non-linear func의 ReLU 교체

knowledge distillation(teacher-student)
</pre>

Pooling, FC layer

연산 강도가 낮아서 메모리 병목이 더 큼.

## 역전파
*Back Propagation*

학습을 잘 하지 않지만, embedded training을 할때 의미가 있음
conv할때 180 회전, 메모리 레이아웃...

* nvidia gpu와 가속기(NPU) 차이
* gpu 최적화시 10~100배 성능 차이(cuda book)
* 벤더에서 제공하는 최적화 API(tensor rt) -->
