---
authors:
- jwher
description: Hidden Technical Debt in Machine Learning Systems
slug: hidden-technical-debt
tags:
- ml
- paper
title: 머신러닝에 숨은 기술 부채
---

![ML](/img/brain.jpg)
*이 글은 Hidden Technical Debt in Machine Learning Systems을 읽고 번역한 내용입니다*  
<!--truncate-->

## 기술 부채
Ward Cunningham 이 도입한 1992년 빠르게 소프트웨어를 만들때 야기되는 장기 비용을 말합니다
이 부채는 재정 부채와 마찬가지로 전략적으로 사용될 수 있습니다.
모든 부채는 나쁜것이 아니나 언젠가는 해결되어야 합니다.

기술부채는 다음과 같은 방법으로 해결됩니다. 
* refactoring code
* improving unit tests
* deleting dead code
* reducing dependencies
* tightening APIs
* improving documentation

## 복잡한 모델이 무너트린 경계
전통적인 소프트웨어는 응축(encapsulation)과 모듈화라는 **강한 추상화 경계**를 통해 코드를 유지하기 쉽게 만들고, 코드의 변경과 개선을 격리(isolate) 시킵니다.
하지만, 머신러닝 시스템에서 **강한 추상화 경계**를 강요하기 어렵습니다.
ML은 *외부 데이터에 의존* 없이 소프트웨어 로직으로 잘 표현될 수 없기 때문입니다.

### 얽힘(Entanglement)

머신러닝 시스템은 출력(signal)이 섞이고 얽혀있어 격리가 불가능합니다.
모델에서 x1, ... , xn 특징(feature)을 사용하는 시스템이 있다고 가정해봅시다.
x1을 바꾸게 된다면 남은 n-1 특징들은 전부 바뀔 것입니다.
새 특징 xn+1을 추가하는것, xj를 제거하는것도 마찬가지입니다

## 수정 종속(Correction Cascades)

모델 ma에 약간 다른 문제를 해결하기 위해 ma'
ma에 대한 종속

## 정의되지 않은 사용처(Undeclared Consumers)

<!-- 아직 작성중에 있습니다! -->

## References
[Hidden Technical Debt in Machine Learning Systems](https://proceedings.neurips.cc/paper/2015/file/86df7dcfd896fcaf2674f757a2463eba-Paper.pdf)
