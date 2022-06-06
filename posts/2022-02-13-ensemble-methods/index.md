---
authors:
- jwher
description: Ensemble Methods
slug: ensemble-methods
tags:
- math
- ml
title: Ensemble Methods
---

*Ensemble Methods*
<!--truncate-->

# 목차
* [Deep Ensemble](#deep-ensemble)
* [Monte Carlo Drop out](#monte-carlo-drop-out)
* [Batch Ensemble](#batch-ensemble)

## Deep Ensemble
동일한 모델을 여럿 학습
장점: 성능이 거의 보장됨
단점: N배의 학습, 추론 비용

## Monte Carlo Drop out
test시 stochastic한 drop out을 사용해 ensemble
장점: 1번의 학습
단점: N배의 추론 비용

## Batch Ensemble
ensemble member간 대부분의 weights를 공유합니다.
여기에 rank-1 matrix로 independency를 강화합니다.
장점: Monte carlo drop out 보다 좋은 성능
단점: N배의 추론 비용

<br/>

## Tips

### Reference
2021 MIPAL


<!-- update log -->
<!--
본문에 추가할 내용을 적는다.
-->
