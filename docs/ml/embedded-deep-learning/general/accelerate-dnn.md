---
title: 'DNN을 가속하는 방법'
draft: true
---

## DNN을 가속하는 방법

- 메모리 계층
- 컨볼루션
- 근사
- zero operands를 활용한 sparsity 활용

### 메모리 계층
Memory hierarchy를 현명하게 사용

V.Sze, et. al. “Efficient Processing of Deep Neural Networks: A Tutorial and Survey”

### 컨볼루션 효율화
NPU 지원 연산
GEMM(general matrix multiplication)
- cuBLAS, cuDNN
Winograd Convolution
- filter size no larger than 4x4
FFT-based Conbolution
- more effective as the filter size grows

#### GEMM

Change convolution as a Matrix multiplication

#### Winograd

#### FFT