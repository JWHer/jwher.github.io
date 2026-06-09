---
sidebar_position: 7
authors:
  - jwher
description: 가속기
tags:
  - cs
  - computer architecture
title: 가속기 디자인
date: '2026-02-18'
---

[![computer-architecture](/img/computer-architecture.jpeg)](/docs/cs/computer-architecture/)  


<!--truncate-->

이전에는 1core에서 2core 멀티코어 시스템 연구
이는 zero to one 같은 일이였었음

roofline으로 병목 현상 파악. memory compute

## 현대 가속기 디자인

### 대량의 부동소수점 연산 가속

GPU, CPU with SSE/AVX 확장

TPU, DaDianNao, Eyeriss..

### 가속기 성능
무엇이 가속기의 성능을 결정하는가?

성능의 세 요소
- 연산 Computations
- 통신 Communication
- 지역성 Localitiy

각 커널의 아키텍처는 저 세개에 비중이 다름
성능은 어떻게 아키텍처 특징에 맞는 커널 특징 맵을 세 요소에 맞게 하는가

### 연산
주요 대상에 대한 부동소수점 연산
연산 로직에 연관해서, PE 활용에 어떤 영향을 미치는가?

### 통신

### 지역성

### Arithmetic intensity

def. Total floating point operations / Total DRAM bytes accesses
(FLOPS / bytes)

Total DRAM bytes accesses means those after filtered by cache

## Roofline model

$$
Perf_{attainable} = min(Bandwidth_{peak} * AI, Perf_{peak})
$$

bandwith * AI = Throughput(FLOPs)

그래프 우측으로 갈수록(AI가 높을수록) 비용 증가
그래프 상단으로 갈수록(Performance) 
