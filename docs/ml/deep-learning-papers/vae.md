---
sidebar_position: 5
authors:
- jwher
description: 잠재 공간을 확률 분포로 모델링하는 생성 모델 VAE
draft: true
tags:
- deep learning
- generative model
- vae
- latent space
title: "VAE: Auto-Encoding Variational Bayes"
---

# Variational Autoencoder (VAE)

> Kingma & Welling, 2013 — [arXiv:1312.6114](https://arxiv.org/abs/1312.6114)

## 핵심 기여

- Autoencoder의 잠재 공간을 **확률 분포** (가우시안)로 모델링
- **ELBO (Evidence Lower BOund)** 최적화로 학습
- 잠재 공간에서 샘플링 → 새로운 데이터 생성 가능

## 손실 함수

$$\mathcal{L} = \mathbb{E}_{q_\phi(z|x)}[\log p_\theta(x|z)] - D_{KL}(q_\phi(z|x) \| p(z))$$

- **재구성 손실**: 입력을 얼마나 잘 복원하는가
- **KL Divergence**: 잠재 분포가 사전분포(N(0,1))에 가까운가

## Reparameterization Trick

$$z = \mu + \epsilon \cdot \sigma, \quad \epsilon \sim \mathcal{N}(0, I)$$

역전파를 위해 샘플링 연산을 분리.

## 의의

Stable Diffusion의 Latent Diffusion에서 VAE 인코더/디코더로 활용.
