---
authors:
- jwher
description: 하드웨어 소프트웨어 통합 설계와 병렬 처리
tags:
- cs
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

<!-- > **_NOTE_**   -->
<pre>
<b><i>NOTE</i></b>
<br/>
&nbsp;latency:  
<br/>
&nbsp;throughput:
</pre>

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

## 연산강도
*Arithmetic Intensity*

연산강도는 프로그램 실행 중에 부동소수점 연산을 메인메모리에 접근하는 바이트 숫자로 나눈 값입니다.

Arithmetic intensity is defined as the number of floating-point operations divided by the number of bytes in the main memory accessed for running a program.

Ref. Cloud Computing (Third Edition), 2023

연산 강도 값이 클수록, 최적화를 통해 많은 시간을 절약할 수 있습니다.

컴퓨터 비전 분야에서 많이 사용되는 CNN을 살펴봅시다.
Input feature map의 크기를 (fH, fW, C)
필터의 크기를 (K, K, C) 그리고 개수를 N개라고 하면,
출력으로 나오는 feature map은 (fH, fW, N) 입니다. (패딩 적용 시)

이때, 필터를 적용하는 연산(MAC, Multiply-accumulate operation)이 얼마나 수행되어야 할지 계산해 봅시다.

$ fH \time fW \time N \time ( K \time K \time C ) $

대략적인 크기를 fH, fW=10^2 N=10^3 K^2=10 C=10^2으로 잡았을 때,
output feature map을 얻기 위해 10^10번의 MAC 연산이 수행되어야 합니다.

한 클락에 MAC이 수행된다고 가정하면, 1GHz(=10^9) 코어가 10초간 계산해야 합니다. 어마어마한 시간입니다.

이 연산을 수행하는 코드를 한번 볼까요?
```c
for (n = 0; n < N; n++) {
    for (x = 0; x < fW; x++) {
        for (y = 0; y < fH; y++) {

            O[n][x][y] = B[n];	// add bias
            for (i=0; i < K; i++) {
                for (j=0; j < K; j++) {
                    for (k = 0; k < C; k++) {
                        O[n][x][y] += I[k][x+i][y+j] x W[k][i][j]
                    }
                }
            }
            O[n][x][y] = f(O[n][x][y] );  // activation
        }
    }
}
```

문제1 이 코드는 어떤 순서로 메모리에 접근하고 있나요?
문제2 NCHW 순서로 접근하도록 코드를 바꿀 수 있을까요?

이번엔 메모리를 생각해 봅시다. 이 연산을 수행하기 위해 메인 메모리에 몇번 접근해야 할까요? 계산을 하기 위해 Input feature map과 filter를 가져와야 합니다. 10억번의 MAC을 해야하는 것에 비하면 매우 적은 수입니다.

## 활성 함수
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
* 벤더에서 제공하는 최적화 API(tensor rt)

## Systolic Array
SIMD와 차이점
- 각 PE가 다른것을 할 수 있습니다.
- 일반적인 프로세서(e.g. Intel iWARP)에서 실용적인 구현이 있습니다.

나타난 이유
- VLSI는 특적 목적의 칩을 저렴하게 했습니다.
- 알고리즘을 일정한 패턴으로 연결되어 직접 표현할 수 있습니다.

## SIMD 구조
- 간단하고 작은 프로세서 배열과 각각의 작은 메모리
- 명령을 발행하는 제어 프로세서에 부착
- 특수하고 일반화된 통신으로, 저렴한 전역 동기화
-> SIMT(Single Inst. Multiple Threads)로 발전

## Vector Processors

데이터 하자드 없이 깊은 파이프라인
명령어 크기가 줄어듬
메인 메모리 접근을 시작할 때 큰 지연이 완화된다

chaining
multiple lanes
scatter-gather op

## MIMD Architecture

Shared-address-space(SAS) = Multi processor
Message-passing arch = Multi computer

Shared Memory Multiprocessor
- Dance-hall(UMA)
- Distributed memory(NUMA)

Cache coherence, Synchronization of shared data

Message Passing Architecture
- Direct access to private address space
- Interprocessor communication via explicit messages

High-level block diagram similar to NUMA
- Easier to build than scalable SAS

## Interconnection Network

2-dim Mesh
Torus
Fat tree

Routing Delay
- Store and forward routing
- Cut through routing

## Deadlock Avoidance

## Amdahl's Law
