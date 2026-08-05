---
title: 가속기(GPU) 프로그래밍
description: 병렬 컴퓨팅과 GPU 가속기 프로그래밍 기초
draft: true
---

## 왜 GPU(가속기) 프로그래밍인가?

hyper scale ai, hyperscale computation

## moreh

torch가 one virtual device를 사용하는 것. 이종 클러스터 가상화

# 병렬처리 기초

## 기술이전 및 성능요구 동향
2021년 exa-scale computing(10^18 flops)
현재 스마트폰은 20년전 슈퍼컴퓨터

10년 단위로 슈퍼컴퓨터 - 데스크탑 - 모바일 성능이 같아짐

iphone shock? 모바일 기계

## 순차(sequential) 시스템

폰노이만 아키텍처(4개)
-입력장치
-출력장치
-주기억장치(Main Memory) => 프로그램과 데이터를 모두 저장
-중앙처리장치(Central Processing Unit)

이전에는 프로그램과 데이터를 분리했음

## 머신 코드(Machine Code)
컴퓨터가 실제로 읽고, 해석하고, 실행하는 프로그램

CPU가 프로그램에 든 머신 인스트럭션을 실행
- ALU는 산술연산과 논리연산 처리
- 제어장치(control unit)은 주기억장치에서 인스트럭션을 차례대로 가져와서(fetch) 해석하고(decode) 실행시킴(excute)
- 다음에 가져올 인스트럭션의 주소는 CPU 내 레지스터인 프로그램 카운터(PC)에 저장되어 있음

명령어 사이클(Instruction Cycle)
- Fetch -> Decode -> Excute 사이클
- 컴퓨터가 꺼질때까지 반복

## 무어의 법칙
한 개의 다이(die)에 집적되는 transistor의 개수는 18개월/24개월 마다 두배로 증가
High density -> High clock frequency -> High performance
성능도 두배로 증가

## 하드웨어 성능 향상 기법

트랜지스터의 개수가 많아질 수록 복잡한 하드웨어 구성 가능
- 명령어 파이프라인
- 비순차 실행
- 수퍼스칼라/수퍼스케일러 실행
- 온-칩 캐시(L1/L2/L3)

## 컨베이어 벨트(Conveyor Belt)
포드 자동차의 컨베이어 벨트는 왜 생산성을 향상시켰는가?
=> 각자 할일을 잘하는 것 *병렬적으로 하는것?*

생산성(throughput)의 정의는?
=> 생산수 / 단위시간
wall clock time 기준!

## 파이프라이닝
하드웨어 테크닉으로 명령어를 처리하는 생산성을 증가하는 방법
- cpu 클락 사이클당 실행되는 명령어수
- 한 명령어가 실행되는 동안 다음 명령어도 실행

3개의 단계를 가진 파이프라인
- IF(Inst. Fetch)/ID(Inst. Decode)/EX(Excute)

## 명령어 파이프라인
100만개 파이프라인時 사이클 수?

## In-Order 실행
피연산자가 사용 가능하면 명령어에 맞는 함수유닛(functional unit)으로 보내 실행

## Out-of-Order 실행
명령어에 맞는 Reservation Station에 보냄(Issue)
명령어는 RS에서 피연산자가 사용 가능할 때 까지 기다림
결과값이 reorder buffer에 들어감
명령어가 페치된 순서대로 레지스터에 쓰임

## Superscalar
여러개의 명령어를 동시에 페치하고 디코드 한 다음 명령어에 맞는 RS에 보내 실행
ILP(Inst. Level Pipeline)를 이용 - 몇 개의 명령어가 동시에 실행될 수 있는가?

## ILP Wall
응용프로그램의 특성에 영향을 받음
ex) int 함수유닛 하나에, int 명령어 3개가 순차적으로 있으면 superscaler 불가
각 clock cycle마다 superscalar 프로세서에서 동시에 실행될 수 있는 명령어 개수의 평균
2.8(레퍼런스?) => 3~4로 만들기

응용프로그램의 ILP는 한정되어 있음
ADD R1, R2 R3
ADD R4, R2 R1
(RAW hazard)

## Power Wall
CPU performance 비례 CPU freq
전력소모 = V^2*f (전력^2 * 주파수)
발열량 비례 전력소모

# 병렬시스템

## HPC

## Cluster
단일 시스템으로 취급될 수 있도록 함께 작동하는 연결된 컴퓨터들의 집합
클러스터의 개별 컴퓨터를 노드라고 함

## Scale-up
단일 시스템 내의 리소스 전체에 계산을 분산시키는 하드웨어 및 소프트웨어 아키텍처
성능 향상은 단일 시스템 내로 제한됨

## Scale-out
하나의 시스템(클러스터)에서 작동하는 애플르케이션을 여러 시스템에 계산을 분산하여 처리

## 멀티코어
2개 이상의 독립적인 프로세서

Manycore 8개나 16개 이상의 코어를 가진 멀티코어를 지칭

Power wall과 ILP의 해결책

## 이종 컴퓨터 시스템

범용 프로세서(CPU)와 가속기(Accelerator)를 혼용

가속기는 수십-수천개의 간단한 프로세서 코어, 같은 비용의 동종 시스템에 비해 고전력/고성능 달성

가속기: GPU / FPGA

## FPGAs
Field-Programmable Gate Array
- 개발자가 하드웨어를 프로그래밍을 통하여 재구성하도록 설계된 집적회로

FPGA의 재구성은 일반적으로 Verilog와 같은 Hardware Description Language(HDL)를 사용
=> 개발자가 하드웨어 지식이 필요하기 때문에 프로그래밍하기 어려움

## 이종 클러스터 시스템
각 노드가 가속기를 장착한 경우 이종 클러스터라고 부름
현재 대부분의 슈퍼컴퓨터는 클러스터 구조

## Top500 and Green500
LINPACK benchmark

## GPU 기반 이종 시스템
de facto 사실상의 표준

## GPU 기반 시스템의 프로그래밍
이종 시스템 및 컴퓨팅에 널리 사용되는 두가지 프로그래밍 모델
- CUDA
- OpenCL
cuda가 더 나은 software eco system을 가짐

## 이종 컴퓨팅(Heterogeneous Computing)
호스트: CPU 메모리
디바이스: GPU 메모리
Host Program: 커널 실행 관리
Kernel: 디바이스에서 실행되는 코드의 기본 단위(하나의 함수), 실행되면 많은 커널 인스턴스가 생성됨
Host Program과 Kernel들은 동시에 실행됨

CPU에서 GPU로 메모리 데이터 복사
GPU 코드 로드 및 실행
GPU 메모리에서 CPU 메모리로 결과 복사

OpenCL / CUDA 구현은 단일 운영 체제 인스턴스에서 여러 가속기에 대한 병렬 처리를 목표로 함
클러스터에서 사용하려면 MPI + OpenCL, MPI + CUDA 애플리케이션을 제작하여야 함
- 복잡하고 이식성이 떨어지며 유지 관리가 어려움

cuDNN(딥러닝), cuBLAS(선형대수), NCCL(통신 라이브러리)
clBLAS(선형대수)
ROCm(AMD) = CUDA = OpenCL = OpenACC

딥러닝, 유전체 분석, 빅 데이터 처리, 원자로 시뮬레이터

## Amdahl의 법칙

(순차) + (병렬원래 시간) / (순차) + (병렬줄인 시간)

## 프로그래밍 장벽(Programming Wall)
소프트웨어에 의해 성능을 높이기 위한 장벽
=50여년간 했으나 어려움, 전문가가 붙어서 해결해야 함

## 프로그래밍 모델
프로그래머와 병렬 컴퓨터 간의 인터페이스

고성능과 쉬운 프로그래밍을 동시에 달성하는것이 중요(어려움)
고성능 (반비례) 쉬운 프로그래밍

## 병렬 프로그래밍 모델의 종류
공유 메모리
- OpenMP, Pthreads
메시지 패싱
- MPI
가속기
- OpenCL
- CUDA
- OpenMP, OpenACC

## Artificial Intelligence
Place Holder Term?

John McCarthy in 1950s, Dartmouth

## Machine Learning
AI 하위 분야
에러 최소화 또는 likelihood 최대화

## Deep Learning
ML 하위 분야

딥러닝은 공학 분야, 이론적으로 분석된 것이 없음

## AI(GPT-3) 학습의 문제
컴퓨팅 파워
메모리 크기
- 데이터 병렬화, 모델 병렬화 필요
학습 데이터 크기
- 확장 가능한 스토리지 필요
=> 고전적인 고성능 컴퓨팅이 오랫동안 해결을 고민한 문제

# Process

# Data Dependences
중요! 원문이 디펜덴스

## Flow Dependence
True dependence
read after write

## Anti Dependence
False dependence
write after read

## Output Dependence
False dependence
write after write

## Input Dependence
종속이 아님
read after read
=> 결과는 문제가 없으나 성능은 다를 수 있음!(캐시)

## False Dependence 해결하는것
variable renaming

## Loop-carried
sum += A[i]

```c
for (i=0; i<N; i++) {
    A[i+1] = F[i];
    F[i+1] = A[i];
}
```

# 병렬성
- 명령어 레벨
- 태스크 레벨
- 데이터 병렬성

## 태스크 병렬성
각자의 맡은 작업을 함

## 데이터 병렬성
여러개 작업을 한명이 함 => (자원만 늘리면) 확장이 용이
그러나 모든 작업을 실행할 환경이 준비되어야 함

=> 루프 레벨 병렬성

## SIMD

주로 컴파일러가

## SPMD
Single Program, Multiple Data

자신의 id를 가져오는 specital func이 있음

# 동기화

실행되는 순서를 정하기 위해
Mutual Exclusion을 달성하기 위해

## Barrier
SPMD에서 대부분 지원

## Data race
다음 조건에서 데이터 레이스가 일어남
- 두개 이상의 스레드가 같은 메모리 위치를 엑세스하고
- 그 중 하나의 스레드가 쓰기를 하고
- 그 메모리 위치를 엑세스 할 때 동기화 방법을 사용하여 보호하지 않을 때

의도적으로 사용
Busy-wait
Lock-free

일반적으로 데이터 레이스는 버그

## Atomicity와 Mutual Exclusion
atomic / all or nothing
상호배제 실행되는 부분을 critical section

## Lock과 Unlock

먼저 Lock이 걸렸는지 확인
Lock이 풀리기를 기다리고 Lock

## Busy Wait 동기화

```c
data = 0;
done = false;
```

```c
// thread0
data = 5;
done = true;
```

```c
// thread1
while(!done);
printf(data);
```

=> 최근 프로세서에선 성립하지 않을수도!

## Thread safe
두개 이상의 스레드가 어떤 함수를 동시에 호출시,
항상 정상적으로 작동하면 스레드 세이프 함수

# Cache Coherence

## 다양한 동종 멀티코어

## Shared Memory Processing
NUMA(Non-Uniform Memory Access)

VS UMA

스레드와 공유 메모리, 캐시 일관성(cache coherence) 문제
보통 하드웨어로 해결

## Cache Coherence

## 단일 프로세서의 캐시 일관성 문제
캐시와 I/O 장치간의 일관성 문제
- DMA를 이용해 메모리에 바로 쓸 때 문제 발생
- 캐시는 업데이트 되지 않은 이전의 값을 가지고 있음

멀티프로세서에 비해 해결 방법이 쉬움
- Uncacheable 메모리 영역 지정
- I/O를 캐시를 통해 수행
- 해당 페이지를 캐시에서 flush

## 멀티프로세서의 캐시 일관성 문제
- write back, write allocate
- cache line: 캐시 이동하는 단위(64k)
- write back: 캐시에 더 이상 빈 공간이 없을 때, 캐시 라인을 선태하고 그 라인에 쓰기가 되었으면 메모리 업데이트 후 캐시 라인을 비움
- write allocate: 쓰기가 일어날때 캐시 없을시 메모리에서 가져온 후 쓰기, no-write allocate 캐시

update / invalidate(더 흔함)

Modified / S / I
msi mesi moesi

snoopy 프로토콜 / 디렉토리 기반 프로토콜

공유캐시는 일관성 문제가 없음

명시적 캐시 flus와 invalidate 명령어가 ISA에 있음

## False Sharing
캐시 라인에 따라, 앞부분과 뒷부분만 수정했는데 전체 캐시 라인이 공유되어야 하는 문제
=> 성능저하의 원인

# 메모리 일관성(Memory Consistency)

한 스레드의 메모리 업데이트를 다른 스레드가 볼 수 있는가?
(한개의 스레드에서는 종속성이 없는, 다른 두 데이터 쓰기여서 순서가 바뀔 수 있음; 하지만 다른 스레드에서 그 순서가 중요)

두개 이상의 스레드가 있을 때 각 메모리 연산의 실행순서에 대한 제약조건을 명시하는 것

## Sequential Consistency
어떤 멀티스레드 프로그램 P의 관찰 가능한 결과에서 나올 수 있는 순서

```c
x=0; y=0;

//thread0   // thread1
s11: X=x;   s21: Y=y;
s12: y=1;   s22: x=1;
```

X:1, Y:1은 나올 수 없음(Not SC)

하드웨어/컴파일러에서 기술

## Relaxed Memory Consistency Models

프로그램 오더를 완화, 하지만 데이터 디펜던스는 지킴
write-write, write-read, read-write, read-read 중 하나 완화

이전 예제에서, S21과 S22 사이에 종속성이 없어서 순서를 바꿔 실행이 되었음
메모리 펜스 또는 메모리 배리어로 실행순서 변경 방지
