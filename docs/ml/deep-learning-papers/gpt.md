---
sidebar_position: 3
authors:
- jwher
description: 언어 모델 사전학습으로 GPT 시리즈의 시작을 연 논문
tags:
- deep learning
- nlp
- transformer
- gpt
- pretraining
title: "GPT: Improving Language Understanding by Generative Pre-Training"
---

# GPT

> Radford et al., OpenAI 2018

## 핵심 기여

- Transformer **Decoder** 기반 단방향 언어 모델 사전학습
- 대규모 비지도 텍스트로 학습 후 소규모 데이터로 Fine-tuning
- 하나의 모델로 다양한 NLP 태스크 대응

## GPT 시리즈 비교

| 모델 | 파라미터 | 특징 |
|------|----------|------|
| GPT-1 | 117M | 최초 제안 |
| GPT-2 | 1.5B | Zero-shot 능력 |
| GPT-3 | 175B | Few-shot learning |
| GPT-4 | - | 멀티모달 |

## BERT와의 차이

- 단방향(왼쪽→오른쪽) — 생성에 특화
- Decoder 구조 — 다음 토큰 예측

## 의의

ChatGPT, GPT-4 등 현대 LLM의 직접적 선조.
