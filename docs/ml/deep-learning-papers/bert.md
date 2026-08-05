---
sidebar_position: 2
authors:
- jwher
description: 양방향 Transformer 사전학습으로 NLP 전반을 혁신한 논문
draft: true
tags:
- deep learning
- nlp
- transformer
- pretraining
title: "BERT: Pre-training of Deep Bidirectional Transformers"
---

# BERT

> Devlin et al., 2018 — [arXiv:1810.04805](https://arxiv.org/abs/1810.04805)

## 핵심 기여

- **양방향(Bidirectional)** Transformer Encoder로 문맥 이해
- **MLM (Masked Language Modeling)** + **NSP (Next Sentence Prediction)** 사전학습
- Fine-tuning으로 다양한 NLP 태스크에서 SOTA 달성

## 사전학습 태스크

| 태스크 | 방식 |
|--------|------|
| MLM | 입력 토큰의 15%를 [MASK]로 가리고 복원 |
| NSP | 두 문장이 연속인지 이진 분류 |

## GPT와의 차이

- GPT: 단방향(왼쪽→오른쪽) Decoder
- BERT: 양방향 Encoder — 앞뒤 문맥을 동시에 봄

## 의의

이후 RoBERTa, ALBERT, DistilBERT 등 수많은 변형 모델의 기반.
