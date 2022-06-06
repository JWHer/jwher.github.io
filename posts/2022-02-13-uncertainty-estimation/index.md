---
authors:
- jwher
description: Uncertainty Estimation
slug: uncertainty-estimation
tags:
- math
- ml
title: Uncertainty Estimation
---

*Uncertainty Estimation*  
<!--truncate-->

# 목차
* [Expected Calibration Error](#expected-calibration-error)
* 목차에 링크를 걸면 좋다
* 반드시 소문자

## Expected Calibration Error  

#### 모델이 예측한 결과를 얼마나 신뢰할 수 있는가?

학습에 사용하지 않은(모르는) 이미지를 모델에 추론할 때, 신뢰도는 낮아야 합니다.
하지만, Expected Calibration Error(ECE)를 계산했을 때, 신뢰도가 높은 괴리가 생기기도 합니다.

<!-- ![Alt](/assets/img/uncertainty-estimation/LeNet-ResNet.png "LeNet-ResNet") -->

예상되는 정확도와 측정된 신뢰도를 binning 한 히스토그램  
$ ECE=\sum_{m=1}^{M} {B_{m} \over n} |acc(B_{m}) - conf(B_{m})|$

## 구간화(Binning)

## 정확도와 신뢰도
분류 모델의 정확도는  
> accuracy = correct predictions / total predictions * 100

신뢰구간은 하나의 오차값만 아니라 더 많은 모델값을 기술합니다.
* 범위: 모델에서 최소와 최대 한계
* 확률: 이 범위에 포함될 확률

> error ± z * sqrt( error * (1-error) / n )

z값은 다음과 같다.
* 1.64 (90%)
* 1.96 (95%)
* 2.33 (98%)
* 2.58 (99%)

## 정확도-신뢰도간 괴리의 발생 이유
Classification(분류)의 loss function으로 주로 사용되는
Cross-entropy loss가 overfit을 만드는 특징이 있습니다. 

## Negative Log Likelihood
NLL = cross-entropy loss
어떤 확률사건 p의 정보량
$ I(p) = log({1 \over p}) = -log(p) $

전체 집합이 가지는 엔트로피
$ H = \sum(p*I(p)) = \sum(-p*log(p)) $

Cross-Entropy는 실제 분포 q에 대해 모델링에 대한 분포 p를 통해 예측한 결과입니다.
$ H(p,q) = - \sum p(x_i)log(q(x_i)) $

이는 KL Divergence로도 표현할 수 있습니다.
$ H(p,q) = H(p) + D_{KL}(p||q) $

[정보이론](https://jwher.github.io/information-theory)

<br/>

## Tips

해결하는 방법은 다음과 같습니다
* Mixture Gaussian Ensemble
* [Model Ensemble](https://jwher.github.io/ensemble-methods)

### Reference

[On Calibration of Modern Neural Networks](https://arxiv.org/pdf/1706.04599.pdf)
[[wiki]Binomial proportion confidence interval](https://en.wikipedia.org/wiki/Binomial_proportion_confidence_interval)
[[wiki]허용 오차](https://ko.wikipedia.org/wiki/허용_오차)


<!-- update log -->
<!--
본문에 추가할 내용을 적는다.
-->
