---
sidebar_position: 4
authors:
- jwher
description: Dynamic Programming
tags:
- ml
- rl
- reinforcement
title: 다이나믹 프로그래밍
---

[![reinforcement-learning](reinforcement-learning.jpg)](/docs/ml/reinforcement-learning/)  
*Reinforcement Learning*

<!--truncate-->

## 다이나믹 프로그래밍
*Dynamic Programming*  

다이나믹 프로그래밍(DP)는 주어진 환경을 MDP로 한 모델의 **최적 정책**을 계산할 수 있는 **알고리즘**을 수집합니다.

고전적인 DP 알고리즘은 RL에서 활용성이 떨어집니다. 이는
- 완벽한 모델을 가정하고
- 큰 계산 비용이 들기 때문입니다.
하지만 이론적으로 여전히 중요합니다.

DP는 많은 RL 방법을 이해하기 위해 필수적인 기초를 제공합니다.
DP가 하는대로 시도하지만, 완벽한 모델을 가정하지 않거나, 적은 계산을 합니다.

DP는 최적 가치 함수를 구하기 위해 사용합니다.
최적 가치 함수가 주어지면, 벨만 최적 등식을 통해 최적 정책을 쉽게 얻을 수 있습니다.

$$
V_*(s) = max_aE[R_{t+1} + \gamma V_*(S_{t+1})|S_t=s,A_t=a] \newline
q_*(s,a) = E[R_{t+1}+\gamma max_{a'}q_*(S_{t+1},a')|S_t=s,A_t=a] \newline
=\sum_{S',r}p(s',r|s,a)[r+\gamma max_{a'}q_*(s',a')]
$$

## 용어
최적 정책 : optimal policy
최적 가치 : optimal value
고전적인 : classical
필수적인 : essential
