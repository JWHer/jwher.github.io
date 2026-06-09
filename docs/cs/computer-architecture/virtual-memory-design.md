---
sidebar_position: 5
authors:
  - jwher
description: Virtual Memory Design
tags:
  - cs
  - computer architecture
title: 가상 메모리 디자인
date: '2026-02-18'
---

## 가상 메모리
*Virtual Memory*

메인 메모리를 캐시처럼 사용
-cpu 하드웨어와 os에 의해 관리됨

프로그램은 메인 메모리를 공유
-각 프로그램(프로세서)는 private 자주 사용되는 코드와 데이터의 가상 주소를 가지고 있음
-다른 프로그램으로부터 보호

cpu와 os는 물리 주소로 변환
-Page: VM block (typical size 1KB~8KB)
-VM 미스는 page fault 로 불림

## 개요
가상주소(virtual page no. + offset)
-> Page Table
-> physical address(phisical page no. + offset)

offset 유지됨

Page Table Entry(PTE)
-다음 레벨의 페이지 테이블이나 실제 페이지를 가리키는 포인터
-valid, read-only, read-write, write-only의 권한 비트

인텔 x86 PTE

illusion of a large, private, uniform store
-protection & privacy
여러 유저가 각자 private 주소 공간을 공유 주소공간에서 가질 수 있음
-demand pagin
primary 메모리보다 큰 프로그램을 실행할 수 있음
-others
기기에 다른 메모리 설정을 할 수 있음

대신, 메모리 참조에 주소 변환이 필요함(TLB)

### 주소 변환과 protection
protection check
- kernel/user mode
- read/write
- exception

빨라야하고(1cycle 이내로), 공간 효율적이여야 함

### 가상 메모리의 세 장점
- 변환
물리 메모리가 섞여있어도 프로그램이 메모리에 일관적인 관점을 제공
멀티스레딩이 가능하게 함

- 보호
- 공유

### 선형 페이지 테이블
PPN(Physical Page Number)
DPN(Disk Page Number)

페이지 테이블의 크기
32-bit 주소, 4kb 페이지, 4-byte PTEs

2^20 PTEs, 4MB page table per user
4GB swap 필요

큰 페이지
- 큰 internal 단편화(fragmentation)
- 큰 page fault 패널티

64-bit 주소를 사용하면?
1MB 페이지, 8-byte PTE면 2^44(35TB) 필요!

Saving grace
한 페이지 조각만 populated

### Page fault 처리

1. 참조(reference)
2. trap
3. os가 뒤에 있는 저장소에서 찾음
4. missing 페이지를 가져옴
5. page table 리셋
6. 명령어 재시작

### 교체 알고리즘
LRU(last recently used) 마지막에 사용하지 **않은** 것

Clock algorithm: 정확히 이처럼 작동하지 않지만 효율적인 구현(approximate LRU)
오래된 페이지(가장 오래된 것은 아니지만) 교체

하드웨어가 참조할때 접근 비트를 설정,
접근 비트가 0 이면 오랫동안 쓰지 않은 것

Advanced clock hand(실제 시간 아님)
1->0으로 변경
0->교체 후보로 선택

## TLB
Translation Look-aside Buffers

주소 변환은 매우 비싼 과정
2-level 페이지 테이블을 가정할때,
최적: 3번의 메모리 참조
최악: 2page fault+

Cache translations in TLB
TLB hit: single cycle
TLB miss: page table works

캐시 구조
VPN 태그 + PPN 주소

페이지 지역성이 있는가?
-접근이 순차적이면 명령어는 같은 페이지에서 주로 머뭄
-
TLB 계층이 필요한가?

### TLB 디자인

일반적으로 32-128 엔트리
주로 fully associative 사용
랜덤 또는 FIFO
TLB에 프로세스 정보가 없으면 컨텍스트 스위치때 TLB flush

TLB Reach:
가상 주소가 모두 TLB에 매핑 가능
ex) 64TLB x 4KB page = 256KB까지 한번에

전체 흐름
TLB Lookup
miss) Page Table Walk
    not in memory -> Page Fault(OS)
    In memory -> Update TLB
    restart inst
hit) Protection check
    denied -> SEGFAULT
    permitted -> Physical Address 변환과정(캐시, ...)

## 캐시와 TLB
TLB latency를 다루기 위한 메커니즘이 필요
- 클럭 속도 줄이기?
- TLB와 캐시 접근 파이프라이닝
- 가상 주소 캐시
- 병렬 TLB/캐시 접근

### 캐시에 물리주소
여러 프로세서가 캐시를 동시에 접근 가능
여러 프로세서가 페이지 공유 가능
주소 변환이 critical path에 있음

### 캐시에 가상주소
동음이의(homonym) 문제
-각 프로세스는 같은 주소에 다른 translation
-ASIDs(Address space identifiers)가 없으면 컨텍스트 스위치마다 캐시 flush가 필요함

주소가 같거나 별칭 문제
-다른 가상 주소가 같은 물리 주소를 쓸 수 있음
-이는 하나의 변경이 다른데로 전파되지 않는 문제를 부를 수 있음
