---
sidebar_position: 5
authors:
- jwher
description: Monte Carlo Methods
tags:
- ml
title: 몬테 카를로 방법
---

[![reinforcement-learning](reinforcement-learning.jpg)](/docs/ml/reinforcement-learning/)  
*Reinforcement Learning*

<!--truncate-->

## 몬테 카를로 방법

환경에 대한 완벽한 지식을 가정하지 않습니다.
MC 방법은 경험(일부 상태, 동작, 보상 시퀀스)만 요구합니다.
경험만으로 학습을 하는것은 환경에 대한 사전 지식 없이 배울 수 있어 유용합니다.

MC 방법은 에피소드 작업에서만 정의됩니다.
가치 예상이나 정책 변화가 완료된 하나의 에피소드에서 성립합니다.
이는 에피소드마다 개선되지만, step-by-step(온라인) 방법을 의미하지는 않습니다.

MC는 각 state-action pair로 부터 평균 보상을 샘플링합니다.
동작을 수행한 후 받는 보상은, 같은 에피소드에서 이전 상태에서 수행된 동작에 의존합니다.
이는 모든 동작 선택이 일어나야 학습을 할 수 있기 때문에, 초기 상태에서 non-stationary 문제로 보입니다.

고정된 정책 $\pi$에서 $v_\pi$와 $q_\pi$를 계산하는 방법,
정책 개선,
제어할때 문제와, General Policy Iteration(GPI) 해결법을 알아봅니다.  

## 몬테 카를로 예측

몬테 카를로(MC) 방법은 동일한 상태에 대해, 여러 에피소드에서 보상을 얻으면 평균값을 저장합니다.
하지만 같은 에피소드에서 동일한 상태를 여러번 방문해 보상을 얻으면 어떤 값을 저장할까요?
처음 방문했을때 보상으로 $v_\pi(s)$를 예측하는 First-visit MC,
모든 방문했을때 보상의 평균으로 예측하는 Every-visit MC 두가지가 있습니다.

<!--
## DP에 비한 MC의 장점
-->

블랙잭 게임에 대해 모든 것을 압니다. 하지만 DP 방법으로 value 함수를 구하는 것은 어렵습니다.
DP는 다음 사건에 대한 분포를 알아야 하기 때문입니다.

몬테카를로 알고리즘에 대한 백업다이어그램 아이디어를 일반화 할 수 있을까요?
백업 다이어그램에 대한 일반적인 아이디어는 업데이트 되어야 하는 노드가 맨 위에 루트 노드로 있고,
업데이트에 기여해야 하는 잎 노드가 나열되어 있다는 것입니다.

몬테카를로 루트 노드에서 추정값 $v_\pi$가 있고, 밑으로 특정한 하나의 에피소드 전환이 마지막 상태까지 있습니다.
DP 알고리즘은 가능한 모든 전환을 보여주는것과 달리, 몬테카를로 다이어그램은 하나의 샘플된 다이어그램을 보입니다.
이것은 두 알고리즘의 본질적인 다름을 보입니다.

몬테카를로 방법은 각 상태의 추정값이 독립적인 것이 중요합니다.
한 상태의 추정값은 다른 상태의 추청값으로부터 만들어지지 않았습니다.
다른 말로, 몬테카를로 방법은 부트스트랩*bootstrap*을 하지 않습니다.

일반적으로 많은 상태 중 하나의 추정값 계산비용은 비쌉니다.
이는 몬테카를로 계산이 상태중 하나나 부분만을 요구하기 때문에 매력적이게 합니다.

## 행동 가치의 몬테 카를로 추정값
*Monte Carlo Estimation of Action Values*

모델이 사용가능하지 않다면 *상태* 가치를 사용하는 것보다 *행동* 가치(상태-행동 짝의 가치)를 추정하는것이 유용합니다.

모델이 있다면, 상태 가치 하나로도 정책을 결정하기 충분합니다.
DP 장에서 배운것처럼,
간단히 한 단계만 앞을 보고 어떤 행동이 보상과 다음 상태의 최고 조합으로 이끄는지 고릅니다.

모델이 없다면, 상태 가치 하나로는 충분하지 않습니다.
하나는 반드시 명시적으로 각 행동의 가치를 추정해 정책을 제안하는데 유용한 가치로 사용되야 합니다.
따라서, 몬테카를로 방법에서 최우선 목표는 $q_*$를 예측하는 것입니다.
이를 달성하기 위해, 우리는 첫번째로 행동 가치를 위해 정책을 평가하는 문제를 고려해야 합니다.

...

## 몬테 카를로 제어
*Monte Carlo Control*

이제 몬테 카를로 추정을 통해 제어에 사용할 준비가 되었습니다.
이는 최적 정책을 추정하는 것입니다.

전반적인 아이디어는 DP장에서와 같은 패턴입니다.
즉, 일반화된 정책 순회(Generalized Policy Iteration, GPI) 입니다.
GPI에서는 정책을 추정하고 가치 함수를 추정합니다.
가치 함수는 반복적으로 현재 정책을 위한 가치 함수를 더 정확히 추정하도록 바꿉니다.
그리고 정책은 반복적으로 현재 가치 함수를 고려해 개선됩니다.
이 두 종류의 변화는 서로에 대한 목표를 만들어 어느 정도 상대로 작용하지만,
함께 정책과 가치 함수가 최적에 접근하게 합니다.

...

$\pi\approx\pi_*$를 추정하기 위한 몬테 카를로 탐색 시작(Exploring Starts, ES)
> 초기화:  
> $\qquad$ 모든 $s\in\mathcal{S}$에 대해 임의의 $\pi(s) \in \mathcal{A}(s)$  
> $\qquad$ 모든 $s\in\mathcal{S}, a\in\mathcal{A}(s)$에 대해 임의의 $Q(s,a) \in \mathbb{R}$  
> $\qquad$ 모든 $s\in\mathcal{S}, a\in\mathcal{A}(s)$에 대해 $Returns(s,a) \leftarrow$ 빈 리스트  
> 
> (각 에피소드마다) 반복:  
> $\qquad S_0\in\mathcal{S}, A_0 \in \mathcal(A)(S_0)$에서 가능성 > 0인 모든 짝을 임의로 선택합니다  
> $\qquad S_0, A_0$로 에피소드를 생성합니다, $\pi: S_0, A_0, R_1, ... , S_{T-1}, A_{T-1}, R_T$  
> $\qquad G \leftarrow 0$  
> $\qquad$ 각 에피소드 단계를 반복합니다, $t=T-1,T-2,...,0:$  
> $\qquad\qquad G\leftarrow\gamma G+R_{t+1}$  
> $\qquad\qquad$ 짝 $S_t,A_t$가 $S_0, A_0, S_1, A_1, ... , S_{t-1}, A_{t-1}$에 나타날때까지:  
> $\qquad\qquad\qquad Returns(S_t,A_t)$에 $G$를 더합니다  
> $\qquad\qquad\qquad Q(S_t,A_t) \leftarrow average(Returns(S_t,A_t))$  
> $\qquad\qquad\qquad \pi(S_t) \leftarrow argmax_aQ(S_t,a)$  

## 탐색 시작 없는 몬테 카를로 제어
*Monte Carlo Control without Exploring Starts*

## 중요 샘플링을 통한 Off-policy 예측

모든 학습 통제 방법은 딜레마에 부딛합니다.
최적의 behavior을 찾기 위해 행동과 가치를 배웁니다.
그러나 (최적의 behavior를 찾기 위해) 모든 행동을 탐색하기 위해서, 최적이 아닌 행동을 해야합니다.

그들은 어떻게 최고의 정책을 탐색 정책을 따르며 배울 수 있을까요?
On-policy 전략은 사실 타협입니다.
행동 가치를 최고의 정책이 아닌, 탐색을 수행하는 near-optimal 정책으로 학습합니다.
좀더 올바른 방법은 두개의 정책을 사용하는 것입니다.
하나는 최적의 정책을 배우는 것이고 다른 하나는 탐색하고 behavior 정책을 만드는데 사용됩니다.
학습하는 정책은 target 정책, behavior를 생성하는 정책은 behavior 정책이라 불립니다.
이를 off-policy 학습이라고 부릅니다.

Off-policy 방법은 추가적인 컨셉과 표기가 필요합니다.
또한 더 큰 편차와 느린 커버리지를 보입니다.
그러나 Off-policy 방법은 더 강력하고 일반적입니다.
target 정책과 behavior 정책이 같은 특별한 사례의 off-policy가 on-policy 입니다.

이 섹션에서는 taget 정책과 behavior 정책이 고정된, *예측* 문제에서 off-policy를 사용하는 법을 공부합니다.
이것은 $v_\pi$와 $q_\pi$를, 다른 정책 $b$ ($b\neq\pi$)를 따르는 에피소드로부터 예상하는 것을 말합니다.
두 정책은 고정되어있고 주어진다고 가정합니다.

$\pi$로 선택되는 모든 행동은 적더라도 $b$에서 나타나야합니다.
이는, $\pi(a|s)>0$이 $b(a|s)>0$을 암시함을 나타냅니다. 이것을 수렴 조건으로 부릅니다.
제어(control)에서 target 정책은 현재 행동-가치 함수 예측에 대한 greedy 정책입니다.
이 정책은 결정적인 최적 정책이 되지만, behavior 정책은 확률적이고 더 탐험(exploratory)적입니다.(e-greedy 와 같이)
그러나 이 섹션에선 $\pi$가 변하지 않고 주어진다고 가정합니다.

대부분의 모든 off-policy는 importance sampling을 활용합니다.
일반적인 기술로 다른 곳에서 얻어진 샘플 분포에서 기댓값을 추정하는 방법입니다.
target과 behavior 정책에 나타나는 궤적에 연관된 확률의 보상 가중치를 배우기 위해 importance sampling을 적용합니다.

imortance-sampling ratio
어떤 정책 $\pi$에서 발생하는, 주어진 시작 상태$S_t$ 후속 상태-값 궤적 확률인 A_t, S_{t+1}, A_{t+1},...,S_T에서
$$
\begin{aligned}
&Pr\{A_t,S_{t+1},A_{t+1},...,S_T|S_t,A_{t:T-1}~\pi\}\\
&=\pi(A_t|S_t)p(S_{t+1}|S_t,A_t)\pi(A_{t+1}|S+{t+1})···p(S_T|S_{T-1},A_{T-1})\\
&=\Pi^{T-1}_{k=t}\pi(A_k|S_k)p(S_{k+1}|S_k,A_k)
\end{aligned}
$$

target과 behavior 정책에 연관된 궤적함수는
$$
\Pi^{T-1}_{k=t} \frac{\pi(A_k|S_k)}{b(A_k|S_k)}
$$

비록 궤적 확률분포가 대체로 알수없는 MDP 전환 확률분포에 의존하지만,
분자와 분모에 동시에 나타나므로 문제없습니다.

## 점진적 구현
*Incremental Implementation*

## Off-policy 몬테 카를로 제어

## 감소-의식 중요 샘플링
*\*Discounting-aware IMportance Sampling*

## 매-결정 중요 샘플링
*\*Per-decision Importance Sampling*

## 요약

## 번역
episodic : 애피소드
task : 작업
return : 보상
estimation : 추정값
transition : 전환
value : 가치
control : 제어 
