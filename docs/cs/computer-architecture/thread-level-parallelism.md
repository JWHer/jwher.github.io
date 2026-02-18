---
sidebar_position: 6
authors:
- jwher
description: Thread Level Parallelism
tags:
- cs
- computer architecture
title: 쓰레드 수준 병렬화
---


## Directory-Based Cache Coherence Protocols

1. directory protocol op
캐시안된 블록에서
read miss
-> shared

write miss
-> exclusive

shared block에서
read miss
-> 노드를 sharing set에 추가

write miss
-> invalidating existing copy
-> exclusive

exclusive block에서
read miss

data write back
-> block becomes uncached

write miss
-> block remains exclusive

## Synchronizations

lock

(load reserved)/(store conditional), lrsc

### Impl a spin lock(primitive)

try: mov x3, x4     ;mov exchage value
     lr x2, 0(x1)   ;load reserved from
     sc x3, 0(x1)   ;store conditional
     bnez x3, try   ;branch store fails
     mov x4, x2     ;put load value in x4

ex1: if no coherence(everything is exclusive)

        ADDI R2, R0, #1 ;load locked value
lockit: EXCH R2, 0(R1)
        BNEZ R2, lockit

ex2: if coherence

lockit: LD   R2, 0(R1)    ;load of lock
        BNEZ R2, lockit   ;not available-spin
                          ;0이 아니면 계속 반복
        ADDI R2, R0, #1   ;load locked value (aquire lock)
        EXCH R2, 0(R1)    ;swap
        BNEZ R2, lockit   ;branch if lock wasn't 0

=> release는 lock variable에 0 store

## Memory Consistency

assum a,b = 0,0
p1: a=1; -> b=2;
p2: print b; -> print a;

possible output
a b
0 0
1 2
0 2 -> depends on memory consistency
1 0

Sequential Consistency(SC)에서
(0,2)가 안되는 것은 프로그램 순서가 정해져 있기 때문
p1a->p1b, p2a->p2b
A=0은 묵시적으로 p2b가 p1a보다 먼저 실행되었다는 것. 따라서 p2a다음에 p1b가 나올 수 밖에 없다.
대신 - 순차적 일관성이 아닌것은 (0,2)도 가능! 

### Memory Consistency Model
메모리 연산의 순서 제약
- 순서가 보존되는가?
- 주어진 부하에서, 가능한 반환값 수를 제한한다

메모리 연산 순서 없이 병렬 프로그램은 이야기할게 없음
프로그래머와 시스템 디자이너에 의해 묵시적으로 구현
- 프로그래머는 올바름과 가능한 결과에 대한 이유로 사용
- 시스템 디자이너는 컴파일러나 하드웨어에서 얼마나 재구성(reordered) 가능한지 제약으로 사용

프로그래머와 시스템 디자이너 사이의 계약

### 순차적 일관성
*Sequential Consistency*

메모리 연산에서 프로세스가 프로그램 순서에 따라 가시성(visible)을 가짐

부분적 순서로 이루어진 전체 순서가 존재  
(i.e. interleaving)
=> 섞여도 전체 순서가 보존된다

순차적 일관성 = 임의 순서-보존 interleaving 메모리 참조

### 메모리 장벅
*Memory Fences*

Memory barrier

