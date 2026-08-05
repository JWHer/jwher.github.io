---
sidebar_position: 9
authors:
- jwher
description: 대형 모델의 파라미터 일부만 학습하는 효율적 파인튜닝 기법 모음
tags:
- deep learning
- fine-tuning
- peft
- lora
- llm
title: "PEFT: Parameter-Efficient Fine-Tuning"
---

# PEFT

> Hugging Face PEFT 라이브러리 및 관련 논문들

## 개요

전체 모델 파라미터를 학습하지 않고, **소수의 추가 파라미터**만 학습해 파인튜닝 비용을 대폭 절감하는 기법들의 총칭.

## 주요 기법 비교

| 기법 | 방식 | 특징 |
|------|------|------|
| **LoRA** | 저랭크 행렬 삽입 | 추론 오버헤드 없음 |
| **Adapter** | 레이어 사이 소형 모듈 삽입 | 직관적 구조 |
| **Prefix Tuning** | 입력 앞에 학습 가능한 토큰 추가 | 모델 수정 불필요 |
| **Prompt Tuning** | Soft prompt 학습 | 매우 적은 파라미터 |
| **IA³** | 활성화 값에 학습 가능한 벡터 곱 | 더 적은 파라미터 |

## LoRA와의 관계

LoRA는 PEFT 기법 중 가장 널리 쓰이는 방법. [[lora]]

## Hugging Face PEFT 라이브러리

```python
from peft import get_peft_model, LoraConfig

config = LoraConfig(r=8, lora_alpha=32, target_modules=["q_proj", "v_proj"])
model = get_peft_model(base_model, config)
```

## 의의

GPU가 제한된 환경에서 대형 모델을 커스터마이징하는 실용적 접근법.
