---
sidebar_position: 9
authors:
  - jwher
description: On-policy Prediction with Approximation
tags:
  - ml
  - rl
title: 근사를 통한 on-policy 예측
date: '2026-02-18'
---

[![reinforcement-learning](reinforcement-learning.jpg)](/docs/ml/reinforcement-learning/on-policy-prediction-with-approximation)  
*On-policy Prediction with Approximation*  
OPPA

<!--truncate-->

## 근사를 통한 on-policy 예측

이 장에서 on-policy 데이터에서 상태-값 함수로 예측하는법을 고려한 강화학습에서 함수 근사 공부를 시작합니다.
이런 *일반화*는 학습을 더 강력하게 할 잠재력을 가지고 있지만 관리하기와 이해하기가 더 어렵다는 잠재력도 가지고 있습니다.

## 가치-함수 근사

$s$는 업데이트 될 상태 그리고 $u$는 $s$의 추정 가치가 움직이는 up 
하나의 개별 업데이트를 $s \mapsto u$
an individual update by the notation 𝑠 → 𝑢, where s is the state updated and u is the update target that s’s estimated value is shifted toward

MC: 𝑆𝑡 → 𝐺𝑡
TD(0):𝑆𝑡→𝑅_{t+1}+𝛾 vhat (𝑆𝑡+1,𝑤𝑡)
n-step TD: 𝑆𝑡 → 𝐺𝑡:𝑡+𝑛
DP:𝑠→𝐸𝜋[𝑅𝑡+1+𝛾 vhat (𝑆𝑡+1,𝑤𝑡)|𝑆𝑡=𝑠]

We can use any method for supervised learning from examples, including artificial neural networks, decision trees, and various kinds of multivariate regression

function approximation은 사실 neural network에서 널리 쓰이고 있음

However,notallfunctionapproximationmethodsareequallywell suited for use in RL

## 예측 대상 VE

h(s)는 상태 S에서 에피소드가 시작학 확률,
𝜂(s)*에타*는 상태 s에서 하나의 에피소드에 대한 시간 단계수 평균입니다.

h(s)denotetheprobabilitythatanepisodebeginsineachstates,and let 𝜂(s) denote the number of time steps spent, on average, in state s in a single episode

𝜂(s) = h(s) + ෍ 𝜂(sത) ෍ 𝜋(a|sത)p(s|തs, a)

## 확률적 경사하강법과 반 경사하강법 {#stochastic-gradient-and-semi-gradient-methods}
*Stochastic-gradient and Semi-gradient Methods*

함수 근사(Function Approximation, FA)의 하나인 확률적 경사하강법(SGD)에 대해 배웁니다. 확률적 경사하강법은 함수 근사에서 가장 많이 쓰이는 방법이며, 특히 online RL에 적합한 방법입니다.

확률적 경사하강법에 가중치(weight) 벡터 $w=(w_1, w_2, ..., w_d)^T$는 열(column)벡터로 예측 가치 $\hat{v}(s,w)$는 모든 $s$에 대해 $w$의 미분 함수입니다.
$w_t$는 매 시간 단계 $t=0,1,2,...$마다 업데이트 되는 가중치입니다.
각 단계에서 정책 아래에서 참인 가치 $S_t$를 포함한 새 예제 $S_t \rightarrow v_\pi(S_t)$를 관찰합니다.
비록 정확하고 맞는 가치인 $v_\pi(S_t)$를 각 $S_t$마다 주어진다고 해도, 함수 근사가 제한된 자원과 한정된 해상도이기 때문에 여전히 어려운 문제입니다.
일반적으로 모든 상태와 정확히 맞는 모든 예제에서도 $w$를 얻을 수 없습니다. 따라서 예제에 나오지 않는 다른 상태를 일반화해야 합니다.

예제에 나오는 상태가 같은 분포 $\mu$를 따른다고 가정하고 $\overline{VE}$를 최소화하려고 합니다.
좋은 전락은 관찰된 예제의 오류(error)를 최소화 시키는 것입니다.
확률적 경사하강법은 가중치 벡터를 예제의 오류를 가장 최소화하는 방향으로 조금 조정하는 방법입니다.

$$
w_{t+1} = w_t - { 1\over 2} \alpha \nabla[v_pi(S_t) - \hat{v}(S_t,w_t)]^2 \\
= w_t + \alpha[v_\pi(S_t) - \hat(v)(S_t,w_t)]\nabla \hat{v}(S_t,w_t)]
$$

여기에서 $\alpha > 0$은 단계 크기입니다.
$\nabla f(w)$는 $f$의 <Preview text="경사" src="/docs/ml/general/gradient" id="gradient"></Preview> $w$를 의미합니다.

$$
\nabla f(w) = \big( {\partial f(s) \over \partial w_1}, {\partial f(s) \over \partial w_2}, ..., {\partial f(s) \over \partial w_d} \big)^T
$$

목적(target) 결과(output) $U_t \in R$의 $t$번째 학습 예제인 $S_t \rightarrow U_t$는 $v_\pi(S_t)$의 참 값이 아닌 랜덤하지만 근사한 값인 경우를 생각해 봅시다.
즉 $U_t$가 잡음으로 망가진 $v\pi(S_t)$의 버전이나 부트스트래핑 목적의 하나입니다.
이때에 정확한 업데이트는 할 수 없으나 근사할수는 있습니다.

만일 $U_t$가 편향되지 않은 추정값, $E[U_t|S_t=s] = v_\pi(S_t)$이면 각 $t$에 대해 $w_t$가 줄어드는 $\alpha$에 대한 일반적인 확률 근사 조건에서 지역최적(local optimum)으로 수렴이 보장됩니다.
예를들어, 정책 $\pi$를 가지고 환경과 상호작용(또는 시뮬레이션)한 상태가 있다고 가정합시다. 상태의 참 가치는 보상으로부터 예상 가치에서 나오기 때문에, 몬테카를로 목적 $U_t=G_t$는 정의로 인해 편향되지 않은 $v_\pi(S_t)$의 추정값입니다.
이 선택으로 일반적인 확률적 경사하강법이 $v\pi(S_t)$의 지역 최적에 수렴합니다.
따라서 경사하강법 버전의 몬테카를로의 상태-가치 예측은 지역 최적 해답을 찾도록 보장됩니다.
