---
authors:
- jwher
description: Evaluation Metric
tags:
- general
- ml
title: 평가 지표
---

#### 혼동 행렬 {#confusion-matrix-head}
*Confusion Matrix*
참/거짓 두개의 클래스가 있을 때 분류 결과에 따라,
얼마나 혼동하고 있는지 볼 수 있다.

**양성으로 판별한 것**:
진양성(True Positive, TP)
위양성(False Positive, FP) 양성으로 판별되었으나 실제로는 음성인 데이터를 말한다. 1종 오류(type 1 error)

**음성으로 판별한 것**
위음성(False Negatives, FN) 음성으로 판별되었으나 실제로는 양성인 데이터를 말한다. 2종 오류(type 2 error)
진음성(True Negative, TN)

#### 정밀도 {#precision-head}
*Precision*
양성으로 예측한 것 중, 진양성의 비율
=> 진짜 이상한거만 골라내기

#### 재현율 {#recall-head}
*Recall*
실제 양성인 것 중, 진양성의 비율
=> 이상할 수 있는 가능성이 있는것 골라내기
화재 경보기는 재현율이 높아야 한다
식품 검사기는 재현율이 높아야 한다

#### meanAP

#### IOU

