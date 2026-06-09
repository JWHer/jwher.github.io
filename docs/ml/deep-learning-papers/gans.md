---
sidebar_position: 6
authors:
- jwher
description: Generator와 Discriminator의 적대적 학습으로 데이터를 생성하는 GAN
tags:
- deep learning
- generative model
- gan
title: "GANs: Generative Adversarial Networks"
---

# Generative Adversarial Networks (GAN)

> Goodfellow et al., 2014 — [arXiv:1406.2661](https://arxiv.org/abs/1406.2661)

## 핵심 아이디어

**Generator(G)** vs **Discriminator(D)** 두 네트워크의 적대적(minimax) 게임:

$$\min_G \max_D \; \mathbb{E}_{x \sim p_{data}}[\log D(x)] + \mathbb{E}_{z \sim p_z}[\log(1 - D(G(z)))]$$

- G: 노이즈 z → 가짜 데이터 생성
- D: 진짜/가짜 판별

## 학습 과정

1. D 업데이트: 진짜는 1, 가짜는 0으로 분류하도록 학습
2. G 업데이트: D를 속이도록 (D(G(z)) → 1) 학습

## 주요 변형

| 모델 | 특징 |
|------|------|
| DCGAN | Convolutional GAN |
| cGAN | 조건부 생성 |
| StyleGAN | 고해상도 얼굴 생성 |
| CycleGAN | 페어 없이 도메인 변환 |

## 한계

학습 불안정, Mode Collapse 문제 → Diffusion Model로 대체되는 추세.
