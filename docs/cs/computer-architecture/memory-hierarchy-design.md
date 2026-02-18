---
sidebar_position: 4
authors:
- jwher
description: Memory Hierarchy Design
tags:
- cs
- computer architecture
title: 메모리 계층 디자인
---

## 6개의 기본적인 캐시 최적화

1. 큰 블럭의 캐시
공간적(spacial) 특징으로 어쩔수 없는 미스를 줄임

2. 전체 캐시 용량을 크게
hit time을 늘리고, 전력 소모량을 늘림

3. 높은 연관성(associativity)
conflict miss를 줄임(같은 곳에 올라가야할 캐시)
hit time을 늘리고, 전력 소모량을 늘림

4. 캐시 레벨을 늘림
전체적인 메모리 접근 시간을 줄임

CPI=1
Clock rate = 4GHz = 0.25ns clock cyle time
Main memory access time = 100ns

100ns동안 instruction 수
100 / 0.25 = 400 ins(cycle)

miss rate = 2%
Effective CPI = cpi + missrate*penalty(inst) = 9

With L2
L2 access time = 5ns
5 / 0.25 = 20 inst

L2 miss rate = 0.5%
Effective CPI = cpi + L1 missrate*penalty + L2 missrate\*(L1 penalty + L2 penalty)
= 1 + 0.015*20 + 0.005(20+400) = 3.4

5. 우선순위
miss penalty 감소

6. 캐시 인덱싱에 주소 변환 피하기
hit time 줄어듬

## 10개 고급 캐시 최적화

1. 작고 간단한 L1 캐시

hit time과 전력을 줄임

낮은 연관성은 적은 캐시 라인을 접근해 전력 사용량을 줄임
Lower associativity reduces power because fewer cache lines are accessed

2. Way prediction
hit time 향상

이전 히스토리 기반으로 mux preset을 사용하면 mux 선택 시간을 줄일 수 있음
태그 체크를 해서 먹스 선택

miss면 초기화 하는 패널티

3. 캐시 접근 파이프라인
캐시 대역폭 향상
pentium: 1cycle
pentium pro: 2cycle
pentium 4: 4cycle

브랜치 예측 실패 패널티 증가
연관성이 증가하는것이 쉬움

4. nonblocking caches
mshr(miss state hold register)

5. multibanked 캐시

6. Critical word first, early restart
miss 패널티 줄임

7. Merging write buffer
miss penalty 줄임
같은 블럭에 쓰는게 여러개 있으면 합침

8. 컴파일러 최적화
miss rate 줄임

- loop interchange
중첩된 루프의 메모리 접근을 순차적으로 하게 swap
spacial locality 향상

- blocking
전체 row와 column으로 접근하는게 아닌, 큰 matrices을 작은 블록으로 쪼갬
더 많은 메모리 접근이 필요하지만, 접근시 locality 향상

9. hardware prefetching
miss시 두개의 블록을 페치
page cahce도 마찬가지로 활용

10. 컴파일러 제어 prefetching
isa에서 지원하는 prefetching 명령어를 컴파일러가 삽입


