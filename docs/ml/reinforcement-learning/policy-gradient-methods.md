---
sidebar_position: 13
authors:
  - jwher
description: Policy Gradient Methods
tags:
  - ml
  - rl
  - reinforcement
title: 정책 기울기 방법들
date: '2026-02-18'
---

[![reinforcement-learning](reinforcement-learning.jpg)](/docs/ml/reinforcement-learning/policy-gradient-methods)  
*Policy Gradient Methods*

많이 쓰이는 방법

TD, MC => Action-value 기반이였음

하지만 강화학습의 본질은 행동을 선택하는것(value는 어떤 행동을 할지를 위해 필요한 부차적인 것)

policy를 함수로 만들어서 학습

$\theta \in \mathbb{R}^{d'}$ for the policy’s parameter vector

$\pi(a|s,\theta) = Pr{A_t=a|S_t=s,\theta_t=\theta}$

policy gradient $f(\theta)$

decent, acent

최대화 하고 싶기 때문에(acent)
$$
\theta_{t+1} = \theta_t + \alpha \Delta hat{J(\theta_t)}
$$

$hat{\Delta J(\theta_t)}$는 확률적인 추정, 기대값 추정

## Policy Approximation and its Advantages

PG 기법은 policy가 

일단 action이 discrete 할때 보겠음

$$
\pi(a|s,\theta) { e^{h,a,\theta} \over \sum_b e^h}
$$

파라미터화 된 정책과 softmax의 장점
1. 추정된 정책은 결정적이다.
=> e-greedy는 항상 랜덤 행동이 취해짐

2. 행동을 선택할때 임의의 확률분포를 사용가능
=> 문제가 확연한 함수 근사이면, 가장 좋은 추정 정책은 확률적인것
예를들어 카드게임일때는 최적의 정책이 확률적일때 좋을 수 있음(블러핑)

Action-value는 이런것을 학습하지 못함

### 예제 

오른쪽 파라미터 x(s,right) = [1,0]^T
왼쪽 파라미터 x(s,left) = [0,1]^T 모든 s에 대해서

1-\epsilon/2 이면 값이 좋지 않음

$$
J(\theta) = v_{\pi\theta}(S)
$$

3. 행동-값과 비교해서 정책이 더 간단한 함수로 근사할 수 있음

## 정책 기울기 이론

여기엔 또한 정책 파라미터가 e-greedy보다 이론적인 이점이 있음

연속적인 정책 파라미터는 조금smooth 바뀌지만 e-greedy는 value가 바뀌면 극적으로 행동이 바뀔 수 있음

에피소드의 경우 성능은 에피소드의 start state의 값으로 측정
즉 S_0

$$
J(\theta) = v_{\pi\theta}(S_0)
$$

v_\pi\theta는 v_\pi의 참 값 함수

(증명)

정책 기울기 이론
식 중요! 증명은 책에 있음
$$
\gamma J(\theta) 반비례 \sum_S \mu (s) \sum_\a q_\pi(s, a)\Delta\pi(a|s, \theta)
$$

Intuition

\Delta J(\theta)
theta에 대한 미분값

theta1에 대한 가중평균

theta1이 value function에 기여한 정도는,
theta1으로 인해서 action-value 변화량에 의존한다

## REINFORCE: Monte Carlo Policy Gradient

all-action

t시점에 모든 action에 대해 더해준 것.
모든 action에 대해 더해주어야 하기 때문에 어려움

-> reinforce(1992) 특정 시점만 고려하는것으로

## REINFORCE with Baseline

b(s)는 a와 관련없는 임의의 변수(random variable)


## Actor-Critic Methods

eligibility trace 활용

w와 theta 업데이트..
