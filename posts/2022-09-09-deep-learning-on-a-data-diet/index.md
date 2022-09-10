---
authors:
- jwher
description: 학습에 중요한 데이터 찾기
slug: deep-learning-on-a-data-diet
tags:
- ml
title: 학습에 중요한 데이터 찾기
---

[![deep-learning](deep-learning.svg)](/posts/deep-learning-on-a-data-diet)  
*학습에 중요한 데이터 찾기*  
*이 글은 Deep learning on a data diet을 번역해 작성되었습니다*

<!--truncate-->

## 딥러닝과 데이터
최근 딥러닝에서 성과 일부는, 더욱더 큰 데이터셋을 사용해서 과매개변수화(overparameterized)된 네트워크를 만들며 이루어졌습니다.  
*\* 과매개변수화: 데이터로부터 추정할 수 있는 것보다 많은 매개변수를 가지는 모델을 이릅니다*

이는 자연스러운 질문을 남깁니다. 그럼 얼마만큼의 데이터가 일반화에 불필요(superfluous)한가? 이는 어떻게 찾아야 하는가?  


## 최근 연구
데이터 가지치기(pruning data)에 대한 최근 연구[[1](#1-selection-via-proxy), [2](#2-data-distribution-search-to-select-core-set-for-machine-learning)]는 원본 데이터셋과 동일한 정확도를 유지하는 중심집합(coresets)의 넓은 맥락을 찾는 것이였습니다. 이는 전체 데이터셋에서 학습 오류의 작은 차이를 보장하는 예제들을 찾는 방법으로 접근합니다. 하지만, 딥러닝의 볼록하지않은(nonconvex) 본질 때문에, 이 기법은 약한 이론적 보장과, 실례에서 비효율성은 보수적인 추정을 불러일으킵니다.  
*\* 볼록하지 않음(nonconvex): 해결방법이 하나 이상일 수 있는, 즉 지역 최솟값(local minimizer)이 존재하는 문제를 말합니다*

최근에 발견된 다른 접근 방식 [[8](#8-an-empirical-study-of-example-forgetting-during-deep-neural-network-learning)]은 학습 동안 "잊혀진 사건(forgetting event)"으로 불리는 맞게 분류되었다 맞지 않게 분류되도록 바뀐 예제 횟수를 추적하고, 다른 것들이 반복적으로 잊혀질동안 덜 잊혀진 예제를 발견합니다. 하지만, 이 방법은 학습 중에 잊혀지는 통계 정보를 수집하기 때문에 학습의 중간 또는 끝에서 망각점수(forgetting score)가 계산됩니다.

넓게 바라보면, 데이터셋 가지치기 능력은 많은 질문을 남깁니다. 정확도(accuracy) 손상 없이 학습 데이터에서 제거할 수 있는 예제의 본질은 무엇인가? 얼마나 빨리 그런 예제를 알아챌 수 있을까? 얼마나 많은 예제를 찾아야 하고, 어떻게 데이터 분산에 의존하는가? 이에 대한 일반적인 대답은 없을 것입니다. 이 연구에서는 표준 비전 벤치마크와 네트워크 구조에서 경험적인 방법을 찾습니다.

## 어떤 표본이 학습에 중요한가?

### 사전조건
지도학습(supervised), 분류(classification)에서 독립항등분포(independent and identically distribution)인 알려지지 않은 데이터 분포 $D$, $x \in {\mathbb R}^d$ 인 입력 벡터, 원핫 벡터 $y \in {\{0,1\}}^K$로 인코딩된 레이블에서 정의된 $S \in {\{(x_i, y_i)\}}^N_{i=1}$ 학습 셋을 가정합니다.

고정된 신경망 아키텍처에서 입력 $x \in \mathbb R^d$과 신경망 가중치 $w \in W \subseteq \mathbb R^D$에 대한 출력 로짓을 $f_w(x) \in \mathbb R^K$라고 합시다.

$\sigma (z_1,...,z_k)_k = exp{\{z_k\}}/\sum^K_{k'=1}exp{\{z_{k'}\}}$로 주어진 소프트맥스 함수 $\sigma$를 가정합니다.

$p(w,x) = \sigma(f(w,x))$를 신경망 출력의 확률벡터 형태로 가정합니다.

크기 $M$의 미니배치 수열 $S_0, S_1, ..., S_{T-1} \subseteq S$에 따라 반복되는 $w_0, w_1, w_2, ..., w_T$의 stochastic gradient descent(SGD)를 가정하면, $g_{t-1}(x,y)=\triangledown_{w_{t-1}}l(p(w_{t-1},x),y)$, and $t=1,...,T$에서

$$
w_t = w_{t-1} - \eta \sum_{(x,y) \in S_{t-1}}g_{t-1}(x,y)
\tag{1}
$$

위를 얻을 수 있습니다.

### Gradient norm score 와 infinitesimal analysis
학습셋 $S$를 고정합니다. SGD는 무작위 초기화 과정으로 학습되기 때문에 시간 t>0에서 가중치 벡터 $w_t$는 확률변수(random variable)입니다. 여기에서 손실 벡터의 크기가 관심 대상입니다.

**정의1** 학습 예제(x,y)의 시간 t에서 GraNd score는 $x_t(x,y)=\mathbb E_{W_t} ||g_t(x,y)||_2$ 입니다.

여기서 어떤 GraNd score가 학습 예제의 training loss 변화에 기여를 제어하는지 설명합니다. 분석의 단순화를 위해 training dynamicst가 연속적인 시간에 있는것처럼 근사합니다.

분석의 핵심 분량은 일반적인 레이블된 예제 (x,y)에 대한 loss의 시간 미분값 $\triangle_t((x,y),S_t) = - {dl(f_t(x),y) \over dt}$ ($f_t(\cdot)=f_{w_t}(\cdot)$에서) 입니다. 시간 t에서 미니배치 $S_t$에서 계산된 경사도에서 (x,y)의 loss의 변화율은 체인룰에 따라

$$
\triangle_t((x,y),S_t) = g_t(x,y){d_{W_t} \over dt}
\tag{2}
$$

이는 이산 시간 ${d_{W_t} \over dt} \approx W_{t+1} - W_t$과 연관되어 있습니다(식1 참고).
우리의 목표는 미니배치 $S_t$에서 학습점을 제거하는 것이 $\triangle_t((x,y),S_t)$에 어떤 영향을 미치는지 이해하는 것입니다.

**부분정리2** 학습에서 제거된 집합 $S_{\neg{j}} = S \backslash (x_j, y_j)$라 하자. 그러면 모든 $(x,y)$에 대해 다음을 만족하는 $c$가 존재한다.

$$
|| \triangle_t((x,y),S)-\triangle_t((x,y),S_{\neg{j}}) || \le c||g_t(x_j,y_j)||
\tag{3}
$$

*증명.* 주어진 예제 $x$에 대해 체인룰에 따라 $\triangle_t((x,y),S) = - {dl(f_t(x),y) \over dt} = - {dl(f_t(x),y) \over dW_t}{dW_t \over dt}$를 얻는다. SGD를 이용하므로 ${dW_t \over dt} = -\eta \sum_{(x_j,y_j) \in S_t}g_t(x_j,y_j)$ 입니다. 학습에 관련 없는 상수 $c=\eta||{dl(f_t(x),y) \over dW_t}||$라고 하면 수식(3)을 얻을 수 있습니다.

어떤 학습 단계에서 주어진 현재 위치 $W_t$에서 다른 예제의 loss를 줄이기 위한 학습 예제 (x,y)의 기여는 수식(3)으로 제한됩니다. 상수 $c$는 $(x,y)$로 결정되지 않기 때문에 경사 놈(gradient norm) $||g_t(x,y)||$만 고려하면 됩니다. 예상되는 경사 놈 값은, (x,y)에서 GradNd score와 같습니다. 다른말로, 작은 GraNd score는 어떻게 주어진 시간 안에 나머지 훈련 데이터를 배우는데 제한된 영향을 지닌다는 것입니다.

## Reference

[[Arxiv]Deep learning on a data diet](https://arxiv.org/pdf/2107.07075.pdf)

#### [[1] Selection via proxy](https://arxiv.org/pdf/1906.11829.pdf)
#### [[2] Data distribution search to select core-set for machine learning]()
#### [[8] An empirical study of example forgetting during deep neural network learning](https://arxiv.org/pdf/1812.05159.pdf)

