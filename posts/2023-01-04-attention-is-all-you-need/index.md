---
authors:
- jwher
description: Attention is all you need
slug: attention-is-all-you-need
tags:
- ml
- paper
title: Attention 다시보기
---

[![attention](scaled-dot-product-attention.png)](/posts/attention-is-all-you-need)  
*이 글은 Attention is all you need를 읽고 번역한 내용입니다*  

<!--truncate-->

2017년에 작성되어 이제는 옛날 논문이자 NLP의 기본 논문이 된 Attention Is All You Need를 다시 살펴보려 합니다.
[원문](https://arxiv.org/pdf/1706.03762)

같이 보기  
* tensor2tensor
* BERT

*최대한 번역된 단어를 통일하였으나 원문을 보는것을 권장합니다.*  
*개인적으로 첨가한 단락은 기울게 표시했습니다.*  

## Abstract

지배적인 sequence transduction 모델은 인코더와 디코더를 포함한 복잡한 recurrent 또는 convolutional 신경망을 기반으로 합니다.
가장 성능이 좋은 모델 또한 attention 메커니즘을 통해 인코더와 디코더를 연결합니다.
여기서 새로운 간단한 네트워크 아키텍처를 제안합니다, **Transformer**로 attention 메커니즘에만 기반해, recurrence와 convolutions를 완전히 분배합니다.  
실험은 두 기계번역 작업이 얼마나 우수한 품질로 더 많은 병렬화와 확연히 적은 학습 시간이 필요한지 보여줍니다.
우리 모델은 WMT 2014 영어-독일어 번역 작업에서 28.4 BLEU를 달성했습니다, 앙상블을 포함한 기존의 존재하는 최고 결과를 2 BLEU만큼 향상했습니다.
WMT 2014 영어-프랑스어 번역 작업에선 새 단일 모델 state-of-the-art BLEU 점수를 41.8로, 학계에서 최고의 모델을 학습시키는 비용의 아주 작은 부분인, 3.5일간 8대의 GPU로 학습시켜 달성했습니다.  
Transformer는 크고 작은 학습 데이터에서 성공적인 영여권 파싱을 적용하며 다른 작업을 일반화하기 쉬움을 보입니다.

*transduction <-> induction*

## 1 Introduction

Recurrent 신경망, long short-term memory [[13]](#13-long-short-term-memory) 와 gated recurrent
신경망은 특히, sequence 모델링과 언어 모델링, 기계 번역같은 transduction 문제에 sota 접근 방식으로 확고히 자리잡았습니다.
많은 공헌이 recurrent 언어 모델과 encoder-decoder 구조의 경계를 넓히기 위해 있어왔습니다.

Recurrent 모델은 일반적으로 입출력의 글자 위치를 기반으로 계산합니다.
계산 시간을 기준으로 위치를 정렬하면, hidden state $h_t$가 이전 hidden state인 $h_{t-1}$과 위치 $t$에 대한 입력으로 생성됩니다.
자연스럽게 상속되는 sequential한 특징은 학습에서 병렬화를 배제하고, 메모리 제한이 예제의 배치를 제한하기 때문에, 긴 sequence에서 더 심각한 문제를 만듭니다.
최근 작업은 분해 트릭과 조건부 계산을 통해 계산 효율성을 크게 향상시켰으며, 후자의 경우 모델 성능 또한 크게 향상시켰습니다.
그러나 기본적인 sequential 계산 제한은 남아있습니다.

Attention 메커니즘은 많은 작업에서 매력적인 sequence 모델링과 transduction 모델의 필수적인 부분이 되었으며,
입력 또는 출력 시퀀스 거리에 상관없이 종속성을 모델링할 수 있습니다. [[19]](#19-structured-attention-networks)
그러나 몇몇 경우 [[27]](a-decomposable-attention-model) 를 제외하고 attention 메커니즘은 recurrent 네트워크와 함께 사용됩니다.

이번 작업물에서 Transformer, recurrence를 피하고 입력과 출력 사이에서 전역 종속성을 끌어내기 위해 attention 메커니즘에 전부 의존하는 모델 구조, 를 제안합니다.
Transformer는 확연히 많은 병렬성과 8대의 P100 GPU를 12시간이라는 적은 시간동안 학습시켜 새로운 번역 품질의 sota를 달성할 수 있습니다.

## 2 Background

Sequential 계산을 줄이기 위한 목표는 Extended Neural GPU, Byte Net, ConvS2S의 기초를 형성했고,
전부 convolutional neural networks를 기본 빌딩 블록으로 사용하고,
모든 입출력 위치에 hidden representation을 병렬로 계산합니다.

이 모델에서, 두개의 임의 입출력 위치 신호를 연관시키는데 필요한 작업 수는,
ConvS2S에서는 선형적으로, ByteNet에선 로그로 증가합니다.
이는 먼 위치 사이에 의존성을 배우는걸 더 어렵게 만듭니다.
Transformer는 이 연산을 상수로 줄이지만,
평균 attention-weighted 위치로 안한 효과적인 resolution을 줄여도,
[3.2](#32-attention) 섹션에서 설명한 대로 Multi-Head Attention이 상쇄하는 효과를 지닙니다.

Self-attention, 때로 intra-attention으로 불리는것은 sequence의 표현을 계산하기 위해
단일 sequence의 다른 위치를 연관시키는 attention 메커니즘입니다.
Self-attention은 읽기 이해, 추상적인 요약, 텍스트 함의 및 문장 표현에 독립적인 학습을 포함한 다양한 작업에 효과적으로 사용되었습니다.

End-to-end 메모리 네트워크는 sequence-aligned recurrence 대신 recurrent attention 메커니즘에 기반으로 해
간단한 언어 question answering과 언어 모델링 작업을 잘 수행하는 것으로 나타났습니다.

우리가 아는한, Transformer는 입출력 표현을 계산하기 위해 sequence-aligned RNN이나 convolution이 아닌
self-attention에 완전히 의존하는 최초의 transduction 모델이란 것입니다.
다음 단락에서 Transformer를 설명하고, self-attention의 동기와 Neural GPUs learn algorithms, ByteNet, ConvS2S 같은 다른 모델에 비한 장점을 논의합니다.

## 3 Model Architecture

가장 경쟁력있는 신경 sequence transduction 모델은 encoder-decoder구조를 가지고 있습니다.
여기 인코더는 입력 심볼 표현의 sequence ($x_1, ..., x_n$)을 연속적인 표현 sequence $\mathbb{z} = (z_1,...,z_n)$에 매핑합니다.
주어진 $z$에 대해 디코더는 출력 sequence ($y_1, ..., y_n$)를 한번에 한 요소씩 생성합니다.
각 단계에서 모델은 다음을 생성할 때 이전에 생성된 기호를 추가 입력으로 사용해, auto-regressive [[10]](10-generating-sequences-with-recurrent-neural-networks) 합니다.

### 3.1 Encoder and Decoder Stacks

### 3.2 Attention

#### 3.2.1 Scaled Dot-Product Attention

#### 3.2.2 Multi-Head Attention

#### 3.2.3 Applications of Attention in our Model

## 4 Why Self-Attention

## 5 Training

## 6 Results

## 7 Conclusion

작성중

## References

### [10 Generating sequences with recurrent neural networks](https://arxiv.org/pdf/1308.0850.pdf)
### [13 Long short-term memory](https://blog.xpgreat.com/file/lstm.pdf)
### [19 Structured attention networks](https://arxiv.org/pdf/1702.00887.pdf)
### [27 A decomposable attention model](https://arxiv.org/pdf/1606.01933.pdf)
