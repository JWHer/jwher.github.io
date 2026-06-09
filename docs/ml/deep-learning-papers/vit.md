---
sidebar_position: 4
authors:
- jwher
description: 이미지를 패치로 분할해 Transformer를 비전에 적용한 논문
tags:
- deep learning
- vision
- transformer
- image classification
title: "ViT: An Image is Worth 16x16 Words"
---

# Vision Transformer (ViT)

> Dosovitskiy et al., 2020 — [arXiv:2010.11929](https://arxiv.org/abs/2010.11929)

## 핵심 기여

- 이미지를 **16×16 패치**로 분할 → 1D 시퀀스로 변환 → Transformer 적용
- CNN 없이 순수 Transformer로 이미지 분류에서 SOTA (대규모 데이터 기준)
- 비전-언어 통합 모델의 기반

## 구조

```
Image (H×W×C)
  → Patch Embedding (N patches → N tokens)
  → [CLS] token 추가
  → + Position Embedding
  → Transformer Encoder × L
  → CLS token → MLP Head → Class
```

## 한계

- 데이터가 적으면 CNN보다 성능 낮음 (inductive bias 부재)
- JFT-300M 같은 대규모 데이터셋으로 사전학습 필요

## 의의

CLIP, DALL-E, SAM 등 멀티모달 모델의 비전 인코더로 활용.
