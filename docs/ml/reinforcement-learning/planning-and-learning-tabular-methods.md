---
sidebar_position: 8
authors:
  - jwher
description: Planning and Learning with Tabular Methods
tags:
  - ml
  - rl
title: 테이블 방법을 통한 계획과 학습
date: '2026-02-18'
---

[![reinforcement-learning](reinforcement-learning.jpg)](/docs/ml/reinforcement-learning/planning-and-learning-tabular-methods)  
*Planning and Learning with Tabular Methods*  
PLTM!

<!--truncate-->

이 장에서는 동적 프로그래밍과 휴리스틱 검색처럼 환경에 대한 모델을 사용하는 방법과
몬테카를로나 시간차 방법같은 모델을 사용하지 않는 방법을 합친 시각으로 살펴봅니다.
이는 각각 모델기반, 모델프리 강화학습 방법입니다.

모델기반 방법은 계획을 우선요소로 의존합니다.
반면에, 모델프리 방법은 학습을 우선요소로 의존합니다.

둘의 핵심은 가치 함수(value function)의 계산입니다.
더 나아가 모든 이 방법은 미래 이벤트를 바라보고 백업 가치를 계산해 값 함수의 근사로 대상의 업데이트로 사용하는것에 기반합니다.

앞선 내용에서 몬테카를로와 시간차 방법을 구분되는 대안으로 보여주고, n-step 방법으로 어떻게 합쳐지는지 보였습니다.
이 챕터의 목적은 비슷하게 모델기반과 모델프리 방법을 합치는 것입니다.

## 모델과 계획

*환경 모델*은 행위자(agent)가 환경이 행동에 어떻게 반응할지 예측할 수 있는 모든 것을 의미했습니다.
주어진 상태와 행동에서, 모델은 다음 상태와 보상에 대한 결과 예측을 생산합니다.
모델이 확률적이면, 몇개의 가능한 상태와 보상이 나타날 확률과 함께 주어집니다.
몇 모델은 모든 가능성에 대한 설명과 확률을 생산하는데, 이를 *분포모델(distribution model)*이라 부릅니다.
다른 모델은 확률들중에 샘플된 한가지 가능성을 생산합니다. 이를 *샘플모델(sample model)*이라 부릅니다.

12개 주사위의 합을 구하는 모델을 생각해 봅시다.
분포모델은 모든 가능한 합(12~72)에 대한 확률을 생산합니다.
샘플모델은 확률 분포에 따라 나온 하나의 합을 구합니다.
MDP $p(s',r|s,a)$ 예측을 구하는 동적 프로그래밍 모델은 분포모델입니다.

분포모델은 항상 샘플을 생산하는데 사용할 수 있어 샘플모델보다 강점을 지닙니다.
하지만, 많은 응용에서 샘플모델이 분포모델보다 쉽습니다.
12개의 주사위 합은 이에 대한 간단한 예제입니다.
주사위를 굴려 합을 구하는 프로그램 작성이 모든 합에 대한 확률 분포를 구하는것보다 쉽습니다.

모델은 또한 경험을 따라하거나 시뮬레이션 할 수 있습니다.
주어진 시작 상태와 행동에서 샘플 모델은 가능한 전환을 생산하고,
분포 모델은 모든 가능한 전환을 나타날 확률에 무게를 두어 생산합니다.
주어진 시작 상태와 정책에서, 샘플모델은 전체 에피소드를 생산할 수 있고,
분포 모델은 모든 가능한 에피소드와 가능성을 생성할 수 있습니다.
두 경우에서 모두 모델은 환경을 시뮬레이션하고 시뮬레이션된 경험을 생산합니다.

계획은 다른 영역에서와 다른 뜻으로 사용됩니다.
모델을 입력으로 하여 모델된 환경과 상호작용해 정책을 생성하거나 개선하는 계산적인 과정으로 사용합니다.

model →(planning)→ policy

인공지능에서 계획하는 방법에 두가지 구분되는 접근법이 있습니다.
*상태-공간 계획*은 상태를 살펴보아 목표를 위한 최적의 정착이나 경로를 찾는 것입니다.
행동은 상태와 상태의 전환에서 생기고, 가치 함수는 상태마다 계산됩니다.

*계획-공간 계확*은 계획 공간을 탐색하는 것을 말합니다.
계획-공간 계획은 진화 방법과 부분-순서 계획과 같은, 단계를 정렬하는것이 계획의 모든 상태에 대해 아직 완전하게 결정되지 않은
인공지능에서 흔한 계획법을 포함합니다.
계획-공간 방법은 강화학습이 주목하는 확률적인 순서를 결정하는 문제에 적용하기 어렵습니다.

이 장에서 보여주는 통합된 시각은 모든 상태-공간 계획 방법이 일반적인 구조를 공유한다는 것을 보입니다.
여기에 두개의 기본적인 아이디어가 있습니다.
1. 모든 상태-공간 계획 장법은 가치 함수 계산을 정책 개선을 위한 핵심적인 중간 단계로 사용합니다.
2. 시뮬레이션된 경험에 적용된 업데이트나 백업 연산에 의해 가치 함수를 계산합니다.

model → simulated experience →(backups)→ values → policy

### 한단계 테이블 Q-planning

> 반복:  
> $\quad$ 1. 상태를 선택합니다, $S \in \mathcal{S}$, 그리고 행동도, $A \in \mathcal{A}(S)$, 랜덤으로  
> $\quad$ 2. $S, A$를 샘플 모델에 보냅니다, 그리고 샘플 다음 보상$R$을 얻습니다,
그리고 샘플 다음 상태$S'$를 얻습니다.  
> $\quad$ 3. 한 단계 테이블 Q-learning을 $S, A, R, S'$에 적용합니다.  
> $\qquad$ $Q(S,A) \leftarrow Q(S,A)+\alpha[R+\gamma max_a Q(S',a) - Q(S,A)]$

## Dyna: 통합된 계획 행동 학습
*Dyna: Integrated Planning, Acting, and Learning*

계획이 환경과 상호작용하면서 온라인으로 이루어진다면, 흥미로운 문제들이 발생합니다.
상호작용으로부터 새롭게 얻어진 정보가 모델과 계획으로 상호작용하는 것을 바꿀 수 있습니다.
이는 현재 고민중인 상태나 결정 또는 근미래에 예상되는것을 계획하는 절차를 바꾸는데 이상적일 수 있습니다.
의사결정과 모델학습은 둘다 계산-집약적인 단계로, 가능한 계산 자원이 둘 사이로 분할될 필요가 있습니다.

이 문제를 탐색하기 위해, 온라인 계획 행위자(agent)에 필요한 주요 함수를 합치는 간단한 아키텍처인 Dyna-Q를 보입니다.
각 함수가 Dyna-Q에 간단하게, 거의 하찮은(trivial) 형태로 나타납니다.


경험 -> 모델학습 -> 계획(가치-정책)   = indirect
경험 -> 직접적으로 계획(가치-정책)    = direct

간접적 방법은 제한된 수의 경험을 가지고 전체를 만들고 더 나은 정책을 적은 환경과 상호작용으로 달성할 수 있습니다.
직접적 방법은 더 간단하고 모델 디자인 편향에 영향을 받지 않습니다.
어떤 사람들은 간접적 방법이 항상 직접적 방법보다 우월하다고 주장한 반면,
다른 사람들은 직접적 방법이 대부분의 인간과 동물 학습에 책임이 있다고 주장합니다.

간접적인 방법은 one-step tabular Q-planning 방법으로 계획합니다.
직접적인 방법은 

[다이어그램]

Dyna-Q는 계획, 연기, 모델 학습 및 직접 RL과 같은 위의 다이어그램에 표시된 모든 프로세스를 포함합니다.

직접적 강화학습은 one-step tabular Q-learning 입니다.
모델-학습 방법은 또한 테이블 방법으로 환경이 정해져 있다고 가정합니다.
각 전환 $S_t, A_t \rightarrow R_{t+1}, S_{t+1}$에서,
모델은 $S_t, A_t$의 테이블 엔트리를 기록하고 $R_{t+1}, S_{t+1}$ 또한 결졍적(deterministically)으로 따라옵니다.
따라서, 모델은 이전에 경험했던 상태-행동 짝을 보고 간단히 마지막에 관찰된 다음 상태와 다음 보상으로 예측합니다.

계획은 (간접적 강화학습인) Q-planning 알고리즘을 사용해 이전에 경험한 상태-행동 짝으로 랜덤하게 샘플합니다.
따라서 정보가 없는 짝을 모델은 절대 질문하지 않습니다.

> $Q(s,a)$와 $Model(s,a)$를 모든 $s \in \mathcal{S}, a \in \mathcal{A}(s)$  
> 루프 반복:  
> $\quad$ (a) $S \leftarrow current\ state$  
> $\quad$ (b)

### Dyna 미로

계획은 장점이 있음
Dyna-Q 학습은 계획도 하면서

## 모델이 틀렸을때
*When the Model Is Wrong*

### 막힌 미로

1000 단계 이후 미로 형태가 변할때(멀어짐)

### 지름길 미로

3000 단계 이후 지름길이 생길때(짧아짐)
-> 이때는 기존 방법으로 미로를 갈 수 있어서 학습이 어려움
ε-greedy 여도

다시 탐색과 활용 문제

Dyna Q+는 상태-활동 짝을 추적해
길게 시도해보지 않은 행동에 특별한 보너스 보상을 지급합니다.

## 우선순위 둘러보기
*Prioritized Sweeping*

탐색은 goal 상태에서 backward에 집중합니다.

> Initialize Q(s,a), Model(s,a), for all s,a, and PQueue to empty  
> Loop forever:
> (a) S current (nonterminal) state
> (b) A policy(S, Q)
> (c) Take action A; observe resultant reward, R, and state, S0  
> (d) Model(S,A) R,S0
> (e) P |R+ maxa Q(S0,a) Q(S,A)|.
> (f) if P > ✓, then insert S,A into PQueue with priority P  
> (g) Loop repeat n times, while PQueue is not empty:
> S, A f irst(P Queue)
> R,S0 Model(S,A) ⇥ 0
> Q(S,A) Q(S,A)+↵ R+ maxa Q(S ,a) Q(S,A)
> Loop for all S ̄, A ̄ predicted to lead to S:
> R ̄ predicted reward for S ̄, A ̄, S
> P |R ̄ +   maxa Q(S, a)   Q(S ̄, A ̄)|
> if P > ✓ then insert S ̄, A ̄ into P Queue with priority P

## 예상 대 샘플 갱신
*Expected vs. Sample Updates*

branching factor가 크면 expected를 업데이트 하는데 시간이 많이 걸림
샘플은 선택된 것에 대한 편향이 있을 수 있음

## Trajectory Sampling

## Real-time DP

## Planning at Decision Time

## Heuristic Search

## Rollout Algorithms

## MC Tree Search

value: 가치
agent: 행위자
application: 응용
