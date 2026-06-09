---
sidebar_position: 7
authors:
- jwher
description: 노이즈를 단계적으로 제거해 데이터를 생성하는 Diffusion 모델
tags:
- deep learning
- generative model
- diffusion
- ddpm
title: "DDPM: Denoising Diffusion Probabilistic Models"
---

# DDPM

> Ho et al., 2020 — [arXiv:2006.11239](https://arxiv.org/abs/2006.11239)

## 핵심 아이디어

**Forward process**: 데이터에 가우시안 노이즈를 T 스텝에 걸쳐 점진적으로 추가  
**Reverse process**: 노이즈에서 원본 데이터로 복원하는 방향 학습

## Forward Process

$$q(x_t | x_{t-1}) = \mathcal{N}(x_t; \sqrt{1-\beta_t} x_{t-1}, \beta_t I)$$

## Reverse Process (학습 목표)

각 스텝에서 추가된 노이즈를 예측하는 U-Net 학습:

$$\mathcal{L} = \mathbb{E}_{t, x_0, \epsilon}\left[\|\epsilon - \epsilon_\theta(x_t, t)\|^2\right]$$

## GAN 대비 장점

- 학습 안정적
- Mode Collapse 없음
- 고품질 이미지 생성

## 한계

- 샘플링이 느림 (T=1000 스텝) → DDIM, LDM으로 가속

## 의의

Stable Diffusion, DALL-E 2, Imagen 등 현대 이미지 생성 모델의 핵심 원리.
