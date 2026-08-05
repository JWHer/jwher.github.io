---
authors:
  - jwher
description: 하드웨어 가속 기술
tags:
  - cs
  - ml
title: 임베디드 딥러닝
date: '2026-02-18'
---

[![embedded-deep-learning](/img/logos/cap_logo.png)](/docs/ml/embedded-deep-learning/hardware)  
*Codesign and Parallel Processing*

<!--truncate-->

하드웨어 가속 기술
하드웨어 가속기(뉴럴 프로세서) 구조 비교
하드웨어 가속기 HW/SW 통합설계 방법론

## NPU란?

## NPU 아키텍처 구분
### Many-core approach
use many PEs of small granularity to compute multiple output pixels simultaneously
Good for exploiting sparsity
(예) Eyeriss, ZeNA, OLAcell, SCNN, etc

### MAC-array approach
accelerate a single convolution operation by using 2D systolic array of MAC units
Good for achieving peak TOPs
(예) Google TPU, Intel Nervana (NNP), GTI Lightspeeur, etc

### Adder-tree approach
exploit both pixel-level and MAC-level parallelism with adder-tree
Good for achieving effective TOPs/W
(예) NVDLA, Tensilica DNA-100, Cambricon-x (Kirin 970), DianNao, DaDianNao, Cnvlutin, MIDAP

<pre>
## NPU 비교 기준

Effective performance
Different from peak performance
(Peak performance) x (utilization) 
affected by DRAM accesses, resource contention, synchronization, and other causes of pipeline stalls
(ex) fps (frame per second) in image applications

Performance per Watt 
Different from NPU-only energy consumption
Energy consumption should include DRAM accesses
Large on-chip SRAM increases NPU power, but decreases the number of DRAM accesses
Software optimization affects the performance

Others
Area
Ease of SW development

</pre>

### Memory Access Overhead 

### CNN Accelerator Performance

## Manycore Neural Processors
significant communication overhead

## Mac array

## Adder tree

## How to compare NPU?

Effective performance
Different from peak performance
(Peak performance) x (utilization) 
affected by DRAM accesses, resource contention, synchronization, and other causes of pipeline stalls
(ex) fps (frame per second) in image applications
Performance per Watt 
Different from NPU-only energy consumption
Energy consumption should include DRAM accesses
Large on-chip SRAM increases NPU power, but decreases the number of DRAM accesses
Software optimization affects the performance
Others
Area
Ease of SW development

## Codesign


기존방법: 하드웨어 구현 후 소프트웨어 개발
긴 피드백 사이클로 개발 비용 증가

virtual prototyping => 같이 개발 가능
design space exploration

컴파일러 구현이 두부분으로 변경
학술적, 

### Phase 1

Modeling NPU behavior

High-level Compiler
- 주어진 DNN에 대해 NPU 컨트롤과 시스템 시뮬레이션 구현

NPU System Simulation

### Phase 2

Minimize DRAM accesses as much as possible
    Keep feature maps inside the chip to enable on-chip inter-layer interface
Ease of software development
    data layout should be natural
    HW control should be simple
How to maximize MAC utilization
    Fully pipelined design
    Avoid dynamic contention: Bus free architecture
End-to-End network acceleration
    Minimize inter-layer DRAM accesses as much as possible
