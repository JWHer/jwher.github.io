---
sidebar_position: 12
authors:
  - jwher
description: Eligibility Traces
tags:
  - ml
  - rl
  - reinforcement
title: 적격자 추적
date: '2026-02-18'
---

[![reinforcement-learning](reinforcement-learning.jpg)](/docs/ml/reinforcement-learning/eligibility-trace)  
**

<!--truncate-->

n-step TD 방법은 TD 와 MC를 통합합니다.

온라인 학습으로 바꾼 것

매 스텝마다
현재 상태를 업데이트 하기 위해 미래를 바라보는 것을 *forward view*라고 합니다.

## λ 보상

7장()에서 $n$-step 보상은 첫번째 $n$ 보상들의 합에 $n$ 추정값을 더해 구했습니다.

$$
G_{t:t+n} = R_{t+1} + \gamma R_{t+2} + ... + \gamma^{n-1}R_{t+n} + \gamma^n hat{v}(S_{t+n},w_{t+n-1})\\
0<= t <= T-n
$$

이제는 어떤 $n$ 단계 보상을 통한 것이 아니라, 다른 $n$들에 대한 보상의 평균으로 수행합니다.

TD(λ) 알고리즘은 $n$ 단계 업데이트를 특별한 방법으로 업데이트 하는것으로 이해할 수 있습니다
이 평균은 $\lambda^{n-1}$로 가중될 수 있고, $1-\lambda$로 normalize 됩니다.

$$
G^\lambda_t = (1-\lambda) sum^\inf_{n=1} \lambda^{n-1} G_{t:t+n}
$$

> 무한등비급수 합은 $ a \over 1 - \lambda $이므로, 합이 1이 되기 위해 $(1-\lambda)$를 곱해준다

종료 조건을 주기 위해

$$
G^\lambda_t = (1-\lambda) sum^{T-t-1}_{n=1} \lambda^{n-1} G_{t:t+n} + \lambda^{T-t-1}G_t
$$

$\lambda=1$이면 ($G_t$만 남아) 몬테카를로와 같습니다.
$\labmda=0$이면 ($G_{t:t+1}$)로 줄어들어 한단계 TD와 같습니다.

*off-line λ-return algorithm*

## TD(λ)
*On-line λ-return algorithm*

TD(λ) step마다 업데이트
continuous한 문제에 적용

3가지 다른점
1. weight vector를 에피소드의 매 단계마다 업데이트 합니다.
2. 계산은 에피소드의 끝에서 이루어지지 않고 때마다 똑같이 분배됩니다.
3. 에피소드 문제만이 아닌 연속적인 문제에 적용할 수 있습니다.

Eligibility trace(tabular)
* E_0(s) = 0 모든 상태 0 으로 초기화
* E_t(s) = \gamma \lambda E_{t-1}(s) + 1(S_t=s)

lambda=0이면 현재 상태만 업데이트
* E_t(s) = 1(S_t=s)
* V(s) \leftarrow V(s) + \alpha δ_t E_t(s)

이것은 TD(0)과 정확히 같음

단점: 모든 상태에 대해 (상태가 많으면) 업데이트 하기 어려움
-> 함수 근사가 중요함

Intuition?
가장 많이 기여한 상태를 업데이트

z는 중간 계산 값

$$
z_-1 = 0 \\
z_t = \gamma z_{t+1} + \Delta hat{v}(S_t,w_t), 0<=t<=T
$$

## 결론

backward view

MC methods는 non-Markov 작업에 이점이 있음.
(Markov 작업은 이전 결과에만 영향받는 것, 따라서 non-Markov는 다양한 요인에 영향 받는 것)

=> 따라서 non-markov는 bootstrap 하면 안됨

TD는 부트스트랩 하는데, eligibility trace는 좀더 MC에 가까워 좋음(non-markov에)

long-delayed 작업에도 이점

z를 계산해야되서 one-step 보다 계산이 많이 들지만 빨리 배움

데이터가 별로 없는것에 유리(MC는 배치로 돌리는데, 그 반면에 온라인으로 학습하기 때문)

오프라인은 데이터 많아야..

잘 쓰이는 기법은 아니지만, policy gradient 이해에 필요..

