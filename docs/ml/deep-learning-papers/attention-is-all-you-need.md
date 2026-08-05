---
sidebar_position: 1
authors:
- jwher
description: Transformer 아키텍처를 제안한 논문 — Self-Attention만으로 RNN을 대체
draft: true
tags:
- deep learning
- transformer
- attention
- nlp
title: "Attention Is All You Need"
---

# Attention Is All You Need

> Vaswani et al., 2017 — [arXiv:1706.03762](https://arxiv.org/abs/1706.03762)

## 핵심 기여

- RNN/CNN 없이 **Self-Attention**만으로 시퀀스 모델링
- **Multi-Head Attention** + **Positional Encoding** 구조 제안
- 병렬 학습으로 학습 속도 대폭 향상

## 아키텍처

```
Input → Embedding + Positional Encoding
     → Encoder (N × [Multi-Head Attention + FFN])
     → Decoder (N × [Masked MHA + Cross-Attention + FFN])
     → Linear + Softmax → Output
```

## Self-Attention

$$\text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V$$

## 의의

이후 BERT, GPT, ViT 등 거의 모든 현대 딥러닝 모델의 기반 구조가 됨.
