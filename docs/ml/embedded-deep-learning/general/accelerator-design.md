---
title: '가속기 디자인'
draft: true
---

# 가속기 디자인

## 병렬화의 종류
- Temporal paralleism
- Data level parallesim
- Fuunctional parallelism
- Instruction level parallelsim

## 파이프라이닝
data, control, structure

Flynn’s classification (1972)
-SISD
-SIMD
-MISD
-MIMD

## 병렬 아키텍처
범용 병렬 컴퓨터에는 잘 사용되지 않는 특화된 병렬 구조가 가속기에 많이 사용된다

### Dataflow Architecture
프로그램이 노드는 명령어, 간선은 데이터 종속성 관계로 표현된 비순회 그래프로 표현됩니다.

만족하면 fire

특별한 형태의 병렬화

구현체
Id, SISAL, Silage

멘체스터 데이터플로우 컴퓨터

Controlflow(Neumann) Architecture와 비교
- 프로그램의 명령어 흐름에 따라 제어됨
- 명령어가 데이터의 가용성에 따라 실행됨
- 매우 높은 병렬화 잠재력
- 부작용에 대한 자유

- 토큰 매칭 오버헤드
- 높은 제어 오버헤드
- 데이터 구조 변경의 어려움

### Systolic Array
H.T.Kung and C.E.Leiserson in 1979  

같은 프로세싱 요소(Processing Elements, PE)의 행렬
데이터가 로컬 inter-PE 연결된 파이프라인 방식으로 공급되어 temporal, spatial 활용 -> i/o 대역폭 감소
간단하고 일반적인 데이터와 제어 흐름 -> 모듈화, 확장성
다양한 토폴로지가 가능

SIMD와 차이점
- 각 PE가 다른것을 할 수 있습니다.
- 일반적인 프로세서(e.g. Intel iWARP)에서 실용적인 구현이 있습니다.

나타난 이유
- VLSI는 특적 목적의 칩을 저렴하게 했습니다.
- 알고리즘을 일정한 패턴으로 연결되어 직접 표현할 수 있습니다.

예시
행렬 곱셈

### SIMD 구조
- 간단하고 작은 프로세서 배열과 각각의 작은 메모리
- 명령을 발행하는 제어 프로세서에 부착
- 특수하고 일반화된 통신으로, 저렴한 전역 동기화
-> SIMT(Single Inst. Multiple Threads)로 발전

### Vector Processors

데이터 하자드 없이 깊은 파이프라인
명령어 크기가 줄어듬
메인 메모리 접근을 시작할 때 큰 지연이 완화된다

chaining
multiple lanes
scatter-gather op

### MIMD Architecture

Shared-address-space(SAS) = Multi processor
Message-passing arch = Multi computer

Shared Memory Multiprocessor
- Dance-hall(UMA)
- Distributed memory(NUMA)

Cache coherence, Synchronization of shared data

### Message Passing Architecture
- Direct access to private address space
- Interprocessor communication via explicit messages

High-level block diagram similar to NUMA
- Easier to build than scalable SAS

### Clusters of Computers
A collection of complete computers interconnected by system area network(SAN)
