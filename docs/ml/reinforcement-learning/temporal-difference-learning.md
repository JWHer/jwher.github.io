---
sidebar_position: 6
authors:
- jwher
description: Temporal-Difference Learning
tags:
- ml
- rl
title: 시간차 학습
---

[![reinforcement-learning](reinforcement-learning.jpg)](/docs/ml/reinforcement-learning/temporal-difference-learning)  
*Reinforcement Learning*

<!--truncate-->

가장 중심이고 혁신적인 강화학습 아이디어를 하나만 고르라고 하면, 의심의 여지 없이 *시간차 학습(temporal-difference, TD)*일 것입니다.
시간차 학습은 [몬테카를로, MC](/docs/ml/reinforcement-learning/monte-carlo-methods) 아이디어와
[동적 프로그래밍, DP](/docs/ml/reinforcement-learning/dynamic-programming) 아이디어의 조합입니다.

몬테카를로 방법처럼 시간차 방법은 환경의 변화를 담은 모델 없이, 경험에서 직접적으로 학습 가능합니다.
동적 프로그래밍처럼 시간차 방법은 최종 결과를 기다릴 필요 없이, 다른 학습된 추정값 일부로 추정값을 갱신합니다. (부트스트랩을 사용합니다)

시간차, 동적 프로그래밍 그리고 몬테카를로 방법은 강화학습 이론에서 반복되는 주제입니다.
이 아이디어와 벙법은 서로 합쳐지고 많은 방법으로 조합됩니다.

## 시간차 예측

시간차 예측과 몬테카를로 방법은 예측 문제를 풀기 위해 경험을 사용하는 것입니다.
정책 $\pi$를 따르는 경험으로, $v\pi$에서 추정값 $V$를 경험에서 발생한 (끝나지 않은) 상태 $S_t$를 위해 갱신합니다.

몬테카를로 방법은 방문한 곳을 알때 따라오는 보상을 기다립니다, 그리고 보상을 V(S_t)의 목적으로 사용합니다.
간단한 every-visit 몬테카를로 방법은 다음과 같습니다.

$$
V(S_t) \leftarrow V(S_t) + \alpha \Bigl[ {\color{red}G_t} - V(S_t) \Bigr]
$$

$G_t$는 시간 $t$에서 실제 보상, $\alpha$는 단계 크기 상수입니다.
이 방법을 *constant-ɑ MC*라고 부릅시다.
몬테카를로 방법은 $V(S_t)$의 증가량을 알기 위해 에피소드가 끝날때까지 기다려야 합니다.

시간차 방법은 다음 시간 단계까지만 기다리면 됩니다.
시간 $t+1$에서 대상에서 즉각적으로 구성하고, 관찰된 보상 $R_{t+1}$과 추정값 $V(S_{t+1})$로 유용한 갱신을 만듭니다.
간단한 시간차 방법의 갱신입니다.

$$
V(S_t) \leftarrow V(S_t) + \alpha \Bigl[ {\color{red}R_{t+1} + \gamma V(S_{t+1})} - V(S_t) \Bigr]
$$

이 시간차 방법은 *TD(0)* 또는 *한단계 시간차 방법*으로 불리는데,
이는 이후에 나올 TD(λ)와 n단계 시간차 방법의 특별한 예시이기 때문입니다.

> Input: the policy $\pi$ to be evaluated  
> Algorithm parameter: step size $\alpha \in (0,1]$  
> Initialize $V(s)$, for all $s \in \mathcal{S}^+$, arbitrarily except that $V(terminal)=0$  
> 
> Loop for each episod:  
> $\quad$ Initialize S  
> $\quad$ Loop for each step of episode:  
>   $\qquad A \leftarrow$ action given by $\pi$ for $S$  
>   $\qquad$ Take action $A$, observe $R, S'$  
>   $\qquad V(S) \leftarrow V(S) + \alpha[R + \gamma V(S') - V(S)]$  
>   $\qquad S \leftarrow S'$  
>$\quad$ until S is terminal

TD(0)은 존재하는 추정으로부터 업데이트 합니다.
이를 부트스트래핑 방법이라 하고, DP와 같습니다.

MDP에서 봤다 시피,
$$
\begin{aligned}
v_\pi(s) &= \mathbb E_\pi [ G_t | S_t = s] \\
         &= \mathbb E_\pi [ R_{t+1} + \gamma G_{t+1} | S_t = s] \\
         &= \mathbb E_\pi [ R_{t+1} + \gamma v_\pi(S_{t+1}) | S_t = s] \\
\end{aligned}
$$

대략적으로 말하면, 1에서 몬테카를로 추정 방법이 목적(target)을 만드는데 사용되고 있습니다.
2에서는 동적 프로그래밍 추정 방법으로 목적을 만듭니다.

몬테카를로 목적값은 예상 값을 알 수 없기 때문에 추정할 수 밖에 없습니다.
샘플의 보상이 실제 경험한 보상 대신에 사용됩니다.

동적 프로그래밍의 목적값은 예상 값이 환경 모델로부터 완전히 제공되어 추정됩니다.
그러나 $v_\pi(S_{t+1})$는 알 수 없고, 현재 추정으로부터 $V(S_{t+1})$이 대신 사용됩니다.

따라서 시간차 방법은 몬테카를로에 동적 프로그래밍의 부트스트리핑을 사용하는 조합입니다.
이는 몬테카를로와 동적 프로그래밍의 장점을 둘다 얻습니다.

최종적으로 TD(0)은 추정값 $V(S_t)$와 더 나은 추정값 $R_{t+1} + \gamma V(S_{t+1})$의 차이로 구합니다.
이 차이는 TD Error*로 불립니다.

$$
\delta_t = R_{t+1} + \gamma V(S_{t+1}) - V(S_t)
$$

시간차 방법의 오차는 그 시간에 만들어 집니다.
V 행렬이 변하지 않는다면(몬테카를로 방법에서 그렇습니다.), 몬테카를로 에러는 TD에러의 합으로 표현할 수 있습니다. 

$$
\begin{aligned}
{\color{red}G_t} - V(S_t) &= {\color{red}R_{t+1} + \gamma G_{t+1}} - V(S_t) + \gamma V(S_{t+1}) - \gamma V(S_{t+1}) \\
&= \delta_t + \gamma (G_{t+1} - V(S_{t+1}) ) \\
&= \delta_t + \gamma \delta_{t+1} + \gamma^2 (G_{t+2} - V(S_{t+2})) \\
&= \sum^{T-1}_{k=t} \gamma^{k-t} \delta_k
\end{aligned}
$$

## 시간차 방법의 장점

시간차 방법은 추정으로부터 추정하고, 부트스트랩을 합니다.
이것이 좋은 방법일까요?
어떤 것이 시간차 방법이 몬테카를로나 동적 프로그래밍보다 좋게 할까요?

시간차 방법은 동적 프로그래밍처럼 환경 모델을 요구하지 않는것에 명확한 이점이 있습니다.

몬테카를로 방법에 비해서는, 온라인으로 구현되었다는 이점이 있습니다.
이는 가끔 중요한 요소입니다. 몬테카를로 방법은 정답을 알아야 학습하기 때문에, 매우 긴 에피소드에서 느립니다.

또한, 몬테카를로 방법에서 시험으로 방문한 행동이 학습을 매우 느리게 만들기 때문에, 감가나 무시가 필요합니다.

## TD(0)의 최적화

## SARSA
*On-policy TD Control*

이제 시간차 방법을 제어하는 문제를 살펴봅시다.
이제까지는 일반화된 정책 순회*generalized policy iteration (GPI)* 패턴을 따랐지만,
이번에는 시간차 방법을 사용해 평가와 예측을 할 것입니다.

몬테 카를로 방법처럼 탐색과 활용문제에 직면합니다.
이 문제는 또다시 on-policy와 off-policy 문제에 도달합니다.
여기에서는 on-policy 시간차 방법을 살펴봅니다.

상태-행동 짝에서 상태-행동 짝으로 변화하는 과정과, 값을 배우는 방법을 알아봅시다.
$$
Q(S_t, A_t) \leftarrow Q(S_t, A_t) + \alpha[R_{t+1} + \gamma Q(S_{t+1}, A_{t+1}) - Q(S_t, A_t)]
$$

$S_{t+1}$가 마지막 상태이면 $Q(S_{t+1},A_{t+1})$은 0으로 정의됩니다.
이 규칙은 모든 5개 이벤트에 적용됩니다. $S_t, A_t, R_{t+1}, S_{t+1}, A_{t+1}$
이것을 *sarsa*라고 부릅니다.

On-policy 방법에서는 정책$\pi$에 따른 추정값 $q_\pi$를 지속적으로 예측합니다.
Sarsa 제어 알고리즘은 $q_\pi$의 이기적인 선택으로 합니다.
예를 들어 ε-greedy 또는 ε-soft 정책 방법을 사용할 수 있습니다.

모둔 상태-행동(state-action) 짝을 무한한 횟수 동안 전부 방문하고 이기적인 정책을 따르는 조건아래에서,
Sarsa는 최적 정책과 행동-값(action-value) 함수를 확률분포 1로 수렴합니다.
(예를들어 ε-greedy 방법에서 ε를 1/t로 설정할 수 있습니다)

## Q 학습
*Off-policy TD Control*

$$
Q(S_t, A_t) \leftarrow Q(S_t, A_t) + \alpha[R_{t+1} + \gamma max_a Q(S_{t+1},a) - Q(S_t, A_t)]
$$

## 예상 SARSA
*Expected Sarsa*

$$
Q(S,A) \leftarrow Q(S_t, A_t)
+ \alpha [R_{t+1} + \gamma \mathbb{E}_\pi [Q(S_{t+1}, A_{t+1}) | S_{t+1} ] - Q(S_t,A_t)]\\
= Q(S_t,A_t)
+ \alpha[R_{t+1} + \gamma \sum_a \pi(a|S_{t+1})Q(S_{t+1}, a) - Q(S_t,A_t)]
$$

## 더블 러닝
*Double Learning*


## 번역

estimate    : 추정값
update      : 갱신
return      : 보상
target      : 목적
exploration : 탐색
exploit     : 활용
