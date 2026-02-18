---
sidebar_position: 8
authors:
- jwher
description: asic
tags:
- cs
- computer architecture
title: 도메인에 맞는 아키텍처
---

[![computer-architecture](/img/computer-architecture.jpeg)](/docs/cs/computer-architecture/)  


<!--truncate-->

## AI 가속기 디자인 스펙트럼
slide 21

가장 유연한
CPU
GPU
Soft DPU(FPGA): filed programmable 
Hard DPU(NPU): TPU, 
ASICs(Arch Specific I C)
가장 효율적

## Hard DPU: Google's Tensor Processign Unit

inference, training 두 종류로 나누어지고 있는 중
추론용은 lifetime이 짧고 메모리 footprint가 적음
training은 backpropagation으로 tensor의 lifetime이 김
v3(HBM 32GB) -> v4(8GB)

v4i(inference)기준
7nm
two tensor core(mat mul)
BF16 with FP32 accumulation
support int8

systolic array: 1970년대
optimized for throughput

mat mul(compute intensive)

tpu v1-inference only, alphago

gemini(tpu v5-inference only)
v5e(efficiency) 추론 위주지만, 학습도 할 수 있다!
v5p(performance)

tco: Total cost of ownership?
performance / TCO

## Soft DPU: Microsoft BrainWave

performance / scalability

Fast, Flexible, Friendly

model parallelism(scale)
=> hight network bandwith
=> compiler(software) is most important

a custom FP format (ms-fp8/9)
TOPS goes up with negligible accuracy loss
추론엔 좋을지라도 학습엔 의문

## Soft DPU: Xilinx Versal Serires

DSP(일반적인 int, floating point 연산?)

## ASIC: A3 - Attention Accelerators

iso-FLOPS comparison

20-157x speedup over GPU

1. a novel approximate self-attention
2. a specialized hardware architecture

## 결론

The historic end of Moore’s Law and Dennard Scaling
○ Requires innovations from architecture to improve cost-energy-performance.

Domain-specific architectures are booming for AI applications.
○ To get the most out of existing transistors via specialization
○ Delivers higher performance/Watt/mm2/$$ to meet the application demands

SW interface design and optimization are as equally (or even more) important
as HW design.
○ e.g., support from OS, compiler, runtime system, and other tools
○ Cross-layer optimization (from applications to hardware) is required to balance efficiency,
programmability, and cost for DSAs.
