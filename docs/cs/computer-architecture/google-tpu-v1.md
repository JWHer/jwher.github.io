---
sidebar_position: 9
authors:
- jwher
description: 하드웨어 레벨의 병렬화
tags:
- cs
- computer architecture
title: 구글 TPU
---

[![computer-architecture](/img/computer-architecture.jpeg)](/docs/cs/computer-architecture/)  


<!--truncate-->

limit of ilp
alternative parallelism(tlp dlp)

## Key NN Concepts for Architects

Training(dev) vs inference(prod)


Batch size

Floating-Point vs Integer

## TPUv1

inference phase by 10x vs CPUs

very short dev cycle

2016 Sundar Pichai(CEO) 10x performance / Watt

### TPU Card

처음에는 host cpu있는 슬롯형태로 => 나중엔 독립적 실행, 통신
TPU Card to replace a disk
서버당 4카드

### 3 types of NNs

1. MLP(search)
2. CNN
3. RNN

### workload

95%
MLP 61%
LSTM 29%
CNN 5%

현재는 transformer가 75%?

### Impl

connect I/O bus(PCIe)
TPU = matrix accelerator on I/O bus

unlike gpu that fetches and executes own instructions

overhead to send reserved command?

### Arch

4MiB on-chip Accumulator
24MiB of on-chip Unified Buffer(activation memory, 중간 결과 저장)
3.5x as much on-chip memory

5 main CISC inst(coarse grained command)
- Read Host mem
- Write Host mem
- Read Weights
- Matrix Multiply / Convolv
- Activate(ReLU, Sigmoid, Maxpool, LRN)

avg clock cycle per inst > 10
1 inst / stage
No branches, in-order issue

문제,  행렬곱때 반복되는 SRAM 접근때 에너지/시간

systolic array
partial sum을 구할때 이웃만 보면 되어서 global communication 이 줄음

TDP: Thermal Design Power

### Relative Performance: 3Platforms
roofline

GPU가 int8지원 안해서.. 정확한 비교라고

## Improving TPU: Move ridge point to the left

2DDR3(34GB/s) -> GDDR5(180GB/s)
1400 to 256
