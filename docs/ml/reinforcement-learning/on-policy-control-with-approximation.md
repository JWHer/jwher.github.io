---
sidebar_position: 10
authors:
  - jwher
description: On-policy Control with Approximation
tags:
  - ml
  - rl
title: 근사를 통한 on-policy 제어
date: '2026-02-18'
---

## Episodic semi-gradient control

TD(0)에서 부트스트래핑 $R+\gamma hat{v}(S`,w)$ 는 정확한 값은 아니나 gradient 계산에 사용

target이 gradient와 관련이 있는지?

GPI 방법으로 Policy eval, Policy improve 방법
gradient tiling

## Semi-gradient n-step sarsa

$$
w_{t+1} = w_t + \alpha \big[ U_t - \hat{q}(S_t,A_t, W_t) \big] \nabla hat{q}(S_t, A_t, w_t)
$$

One-step sarsa에서

$$
w_{t+1} = w_t + \alpha \big[ R_{t+1} + \gamma \hat{q}(S_{t+1} + \gamma \hat{q}(S_t,A_t,w+T)) - hat{q}(S_t,A_t, W_t) \big] \nabla hat{q}(S_t, A_t, w_t)
$$

이고 n-step sarsa는

G_{t:t+n}

## Average Reward: A New Problem Setting for Continuing Tasks

평균 보상 설정에서, 정책 \pi에 대한 r(\pi)를

r(\pi) = lim_{h\rightarrow \inf} {1 \over h} sum^h_{t=1} \matbbE[R_t|S_0,A_{0:t-1}~\pi]

...

Differential return

G_t = R_{t+1} - r(\pi) + R_{t+2} - r(\pi) + ...

Differential value function 또한 Bellman equation 가짐

$v_\pi(s) = E_\pi[G_t|S_t = s]$
$q_\pi(s,a) = E_\pi[G_t|S_t=s,A_t=a]$

v\pi(s) = X ⇡(a|s) X p(s0, r|s, a)[r - r(\pi) + v_\pi(s')]

## Deprecating the Discounted Setting

## Differential Semi-gradient n-step Sarsa

함수 추정과 semi-gradient descent를 제어에 활용


