---
sidebar_position: 8
authors:
- jwher
description: 대형 모델을 저랭크 행렬 분해로 효율적으로 파인튜닝하는 기법
tags:
- deep learning
- fine-tuning
- lora
- peft
- llm
title: "LoRA: Low-Rank Adaptation of Large Language Models"
---

# LoRA

> Hu et al., 2021 — [arXiv:2106.09685](https://arxiv.org/abs/2106.09685)

## 핵심 아이디어

사전학습된 가중치 W를 고정하고, 변화량 ΔW를 **저랭크 행렬 분해**로 근사:

$$W' = W + \Delta W = W + BA$$

- B ∈ ℝ^{d×r}, A ∈ ℝ^{r×k}, r ≪ min(d, k)
- 학습 파라미터 수를 최대 **10,000배** 감소 가능

## 학습 과정

```
사전학습 W (고정) + ΔW = BA (학습)
→ 추론 시: W + BA를 합산해 오버헤드 없음
```

## 기존 Full Fine-tuning 대비

| 항목 | Full FT | LoRA |
|------|---------|------|
| 학습 파라미터 | 100% | ~0.1~1% |
| GPU 메모리 | 매우 큼 | 대폭 감소 |
| 성능 | 기준 | 거의 동등 |

## 의의

Alpaca, Vicuna 등 오픈소스 LLM 파인튜닝의 표준 기법. [[peft]]
