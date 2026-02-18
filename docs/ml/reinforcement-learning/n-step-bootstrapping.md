---
sidebar_position: 7
authors:
- jwher
description: n-step Bootstrapping
tags:
- ml
- rl
title: n-단계 부트스트래핑
---

[![reinforcement-learning](reinforcement-learning.jpg)](/docs/ml/reinforcement-learning/n-step-bootstrapping)  
*Reinforcement Learning*

<!--truncate-->

이 장에서 우리는 몬테 카를로(MC) 방법과 이전 두 장에서 제시된 한단계(1-step) 시간차(TD) 방법을 통합합니다.
MC 방법이나 1-step TD 방법은 항상 최고가 아닙니다.
이 장에서 우리는 특정 작업의 요구를 충족시키기 위해 필요에 따라 한 곳에서 다른 방법으로 원활하게 이동할 수 있도록 두 방법을 일반화하는 n단계 TD 방법을 제시합니다.
n단계 방법은 한쪽 끝에는 MC 방법과 다른 쪽 끝에는 1-step TD 방법으로 스펙트럼에 걸쳐 있습니다.
가장 좋은 방법은 종종 두 극단 사이의 중간입니다.

N단계 방법의 아이디어는 일반적으로 여러 시간 간격에 걸쳐 동시에 부트스트랩을 가능하게 하는 자격 추적(eligibility traces)에 대한 알고리즘 아이디어에 대한 소개로 사용됩니다.

## n-단계 TD 예측
*n-step TD Prediction*

좀더 형식적으로,
보상 시퀀스, $S_t, R_{t+1}, S_{t+1}, R_{t+2}, . . . , R_T, S_T$ (행동 생략)의 결과로
상태 $S_t$의 예상 가치의 업데이트를 생각해 봅시다.
몬테 카를로 업데이트로 $v_\pi(S_t)$가 완료된 보상 방향으로 업데이트되는것을 압니다.
$$
G_t = R_{t+1} + \gamma R_{t+2} + \gamma^2 R_{t+3} + ··· + \gamma^{T-t-1}R_T
$$

이 수량을 업데이트의 목표(target)이라고 부릅시다.
몬테카를로 업데이트에서 목표(target)는 보상(return)인 반면,
한단계 업데이트에서 목표는 첫 번째 보상(reward)과 우리가 원스텝 보상(return)이라고 부르는 다음 상태의 감가된 기댓값입니다.
$$
G_{t:t+1} = R_{t+1} + \gamma Vt(S_{t+1})
$$

마찬가지로, 임의의 n단계 업데이트의 목표는 n단계 보상입니다:
$$
G_{t:t+n} = R_{t+1} + \gamma R_{t+2} + ... + \gamma^{n-1} R_{t+n} + \gamma^n V_{t+n-1}(S_{t+n})
$$

## n-단계 Sarsa
*n-step Sarsa*

$$
Q_{t+n}(S_t, A_t) = Q_{t+n-1}(S_t, A_t) + \alpha [G_{t:t+n} - Q_{t+n-1}(S_t, A_t)],
0 <= t < T
$$

## n-단계 Off-policy 학습
*n-step Off-policy Learning*

Off-policy 학습은 다른 정책 b를 따르는 동안 한 정책 $\pi$에 대한 가치 함수를 배우는 것임을 상기하세요.
종종, $\pi$는 현재의 행동-가치 함수 추정값에 대한 greedy 정책이며, b는 더 탐구적인 정책이며, 아마도 ε-greedy 정책입니다. b의 데이터를 사용하기 위해 우리는 취해진 행동을 취할 상대적인 확률을 사용하여, 두 정책 간의 차이점을 고려해야 합니다.
n-단계 방법에서는, 보상이 n단계 이후에 구성됩니다. 따라서 n 행동에 대한 상대적인 확률에만 관심있습니다.
예를들어, n-단계 TD의 간단한 off-policy 버전을 만들기 위해,
시간 t동안 업데이트(실제로 t+n동안 만들어지는)는 간단히 $\rho_{t:t+n-1}$로 가중됩니다.
$$
Q_{t+n}(S_t, A_t) = Q_{t+n-1}(S_t, A_t) + \alpha\rho_{t+1:t+n} [G_{t:t+n} - Q_{t+n-1}(S_t, A_t)]
$$

$\rho_{t:t+n-1}$는 *중요 샘플링 비율(importance sampling ratio)*이라 불리는,
$A_t$ 부터 $A_{t+n-1}$까지 행동을 얻는 두 정책의 상대적인 확률입니다.
$$
\rho_{t:h} = \Pi^{min(h,T-1)}_{k=t} {\pi(A_k|S_k) \over b(A_k|S_k)}
$$

## 제어 변형이 있는 *매-결정 방법
*\*Per-decision Methods with Control Variates*

## 중요 샘플링 없는 Off-policy 학습: n-단계 트리 백업 알고리즘
*Off-policy Learning Without Importance Sampling: The n-step Tree Backup Algorithm*
