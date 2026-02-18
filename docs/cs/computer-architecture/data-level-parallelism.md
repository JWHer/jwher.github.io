---
sidebar_position: 3
authors:
- jwher
description: Data Level Parallelism
tags:
- cs
- computer architecture
title: 데이터 수준 병렬화 
---

[![computer-architecture](/img/computer-architecture.jpeg)](/docs/cs/computer-architecture/data-level-parallelism)  
*Data Level Parallelism*  

단일 스레드 ILP에서 성능보다 더 높은 병렬화가 데이터베이스나 과학 코드 등 몇 응용에 있습니다.
특히 [스레드 수준 병렬화]와 **데이터 수준 병렬화**가 있습니다.

데이터 수준 병렬화는 동일한 연산자를 많은 데이터에서 처리합니다.
여기에서 그 내용을 살펴봅시다.

<!--truncate-->

## 데이터 수준 병렬화

store a*i+b
load  c*i+d
i runs m to n

최대공약수c,a가 (d-b)를 나누어 떨어지면, 종속성이 있음
contra positive
종속성이 없는것은 최대공약수c,a가 (d-b)를 나누어 떨어지지 않음
