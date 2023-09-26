---
authors:
- jwher
description: "LLaMA: Open and Efficient Foundation Language Models"
slug: llama-open-and-efficient-foundation-language-models
tags:
- ml
- paper
title: LLaMa 공개된 효율적인 언어 모델
---

[![llama](/img/llama.jpeg)](/posts/llama-open-and-efficient-foundation-language-models)  
*최대한 번역된 단어를 통일하였으나 원문을 보는것을 권장합니다.*  

<!--truncate-->

# 1. 소개

LLMs(Large Languages Models)는 많은 텍스트 말뭉치를 통해 학습함으로써 텍스트 명령 또는 few examples에서 새로운 능력을 보여주었습니다. ([Brown et al.](https://arxiv.org/pdf/2005.14165.pdf))

few-shot 요소들은 모델을 충분한 크기로 키우는데서 처음 나타났고(Kaplan et al., 2020), 모델을 더 키우는 연구선상을 만듭니다. ([Chowdhery et al.](https://arxiv.org/pdf/2204.02311.pdf), 2022; Rae et al., 2021)

이 노력은 더 많은 파라미터가 더 나은 성능을 이끌거라는 가정하에 있습니다. 그러나 [Hoffman et al.](https://arxiv.org/pdf/2203.15556.pdf) 의 최근 연구는 주어진 컴퓨팅 예산에 큰 모델이 최고의 성능에 도달하지 못했고, 더 많은 데이터로 학습한 작은 모델이란 것을 보여줍니다.

Hoffmann et al.의 스케일링 법칙의 목적은 특정 학습을 위한 컴퓨팅 예산을 위해 데이터셋과 모델 크기를 가장 잘 확장하는 방법을 결정하는 것입니다.

그러나 이 목적은 언어 모델을 스케일링 할 때 치명적으로 작용하는, 추론 예산을 고려하지 않습니다.

성능 타깃 레벨이 주어진다는 맥락에서, 선호되는 모델은 학습에 빠른 것이 아니라 추론에 빠른 것이고, 비록 특정한 성능에 도달하기 위해 large model을 학습하는게 더 저렴할 수 있으나, 작은 것이 궁극적으로는 추론할 때 저렴할 것입니다.

예를 들어, Hoffmann et al.이 10B 모델을 200B 토큰으로 학습시킬 것을 추천했으나, 우리는 7B 모델이 1T 토큰 이후에도 지속적으로 성능이 증가하는 것을 확인할 수 있었습니다.

이 작업이 집중하는 것은 일반적으로 사용된 토큰보다 더 많은 토큰으로 학습시키면서 다양한 추론 예산에서 최적의(best possible) 성능을 달성하는 언어 모델 시리즈 학습입니다.

결과로 나온 모델은, LLaMA로 불리며, 7B~65B 파라미터를 가지고 현존하는 LLM들과 경쟁적인 성능을 냅니다.

예를 들어 LLaMa-13B는, GPT-3보다 10배 작지만 대부분 벤치마크를 상회합니다.

이 모델이 단일 GPU에서 실행할 수 있기 때문에, LLMs에 접근과 연구의 민주화(democratize)에 도움이 될 것으로 믿습니다.

확장의 최고점인 65B 파라미터 모델은 Chinchilla 또는 PaLM-540B와 같은 최고 LLMs와 경쟁적입니다.

Chinchilla, PaLM, GPT-3과 달리, 공개적으로 사용된 데이터만 사용했고, 오픈 소스와 호환되는 반면, 대부분의 모델이 공개적으로 사용 가능하지 않거나 문서화되지 않은 데이터에 의존하고 있습니다.

여기엔 몇 예외가 있습니다, OPT(Zhang et al.), GPT-NeoX(Black et al.), BLOOM(Scaoet et all.) and GLM(Zeng et al.), 그러나 어떤 것도 PaLM-62B 또는 Chinchilla와 비교할 수 없습니다.

이 논문에 나머지는, transformer(Vaswani et al) 아키텍처에 수행한 변경과, 학습 메소드를 소개합니다. 다음에는 모델의 성능과 다른 LLMs를 표준 벤치마크를 사용해 비교합니다. 최종적으로, 믿을만한 AI 커뮤니티에서 나온 가장 최신의 벤치마크 일부를 사용해서 편견과 독성이 모델에 인코딩 되었는지 노출합니다.

# 2. 접근법

학습 접근법은 이전 작업 (Brown et al., 2020; Chowdhery et al., 2022), 과 Chinchilla scaling laws (Hoffmann et al., 2022) 에서 영감을 받았습니다. 큰 transformers를 큰 텍스트 데이터로 표준 optimizer를 사용해 학습했습니다.

## 2.1 Pre-training Data

학습에 사용된 데이터셋은 Table 1에 보고한 것과 같이 여러 소스의 혼합이고, 다양한 도메인을 다룹니다.

> Table 1: Pre-training data. 사전 학습에 사용된 데이터 혼합으로, 각 하위집합에 샘플링 비율, 하위 집합을 1.4T 토큰을 학습할 때 수행된 epochs 수, 디스크 크기를 나열합니다. 1T 토큰으로 사전 학습한 것도 동일한 샘플링 비율을 가집니다.
> 
> 
> ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cc03535f-860b-492e-918b-f972a1bfd2da/Untitled.png)
> 

대부분 분야에서,  대중에 공개된 데이터와, 오픈 소스 작업 호환성을 위한 데이터만 사용한 제한과 함께, 다른 LLM을 학습시키는데 사용한 데이터 소스를 재활용했습니다.

이것은 이어지는 데이터 혼합과 학습 셋에서 나타나는 퍼센테이지를 도출합니다.

### English CommonCrawl [67%]

5개의 CCNet pipeline (Wenzek et al., 2020)으로 2017~2020년 사이의 CommonCrawl 덤프를 전처리했습니다. 이 작업은 행 수준에서 데이터 중복을 제거하고, fastText 선형 분류기로 비영어 페이지와 저품질의 콘텐츠를 n-gram 언어 모델을 사용해 제거하는 언어 인식을 수행합니다. 추가적으로, Wikipedia에 참조된 페이지 vs 임의로 샘플된 페이지와 참조로 분류되지 않은 버려진 페이지를 분류하기 위해 선형 모델을 학습시켰습니다.

### C4 [15%]

### Github [4.5%]

### Wikipedia [4.5%]

### Gutenberg and Books3 [4.5%]

### ArXiv [2.5%]

### Stack Exchange [2%]

종합해서, 전체 학습 데이터셋은 토큰화 이후 대략 1.4T 토큰을 가집니다. Wikipedia와 Books 도메인에서 대략 2 epochs를 수행한 것을 제외하고, 대부분의 학습 데이터에서, 각 토큰은 학습할때 한번만 사용됩니다.

## 2.2 Architecture

최근 LLM 작업을 따라 네트워크는 transformer architecture를 따릅니다. 후속에 제안되고 PaLM과 같은 다른 모델에서 사용된 다양한 개선사항을 활용합니다. 여기에서 원래 아키텍처와 주된 다른점을 다루고, 어디에서 변경에 대한 영감을 찾았는지 [괄호에] 표시합니다.

### Pre-normalization [GPT3]

학습 안정성을 개선하기 위해 출력을 normalize 하는 대신, 각 transformer의 sub-layer의 입력을 normalize 했습니다. Zhang and Sennrich가 도입한 RMSNorm을 normalizing 함수로 사용했습니다.

- transformer input/output 설명
- RMSNorm 설명

### SwiGLU activation function [PaLM]

ReLU의 비선형성을 Shazeer가 성능 향상을 위해 도입한 SwiGLU activation function으로 바꾸었습니다. 2/3 4d 차원을 PaLM의 4d 대신 사용했습니다.

- ReLU 설명
- SwiGLU 설명

### Rotary Embeddings [GPTNeo]

absolute positional embedding을 제거하고 각 네트워크의 레이어에서 Su et al이 도입한 rotary positional embeddings(RoPE)를 사용했습니다.

- Absolute Positional Embedding 설명
- RoPE 설명

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d6554f37-cf9f-4a1c-bef9-0a90ebac959b/Untitled.png)

변경한 모델에 대한 자세한 하이퍼파라미터는 표2에 주어집니다.

## 2.3 Optimizer

β1 = 0.9, β2 = 0.95의 하이퍼파라미터로, AdamW optimizer (Loshchilov and Hutter, 2017)를 사용해 모델을 학습했습니다. 마지막 learning rate가 10%의 최고 learning rate를 가지게 되는 코사인 learning rate schedule을 사용했습니다. Weight decay를 0.1, Gradient clipping 1.0을 사용했습니다. 2000 예열 단계를 거치고, 모델 크기에 따라 learning rate와 배치 크기를 조절합니다.

> Table 2: 모델 크기, 구조, 하이퍼 파라미터의 최적화
> 
> 
> ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8994f833-e6f5-4163-864c-43b8922fef95/Untitled.png)
> 

## 2.4 Efficient implementation

모델의 학습 속도를 개선하기 위해 몇 최적화를 만들었습니다.

첫째,  실행시간 메모리 사용량을 줄이도록 효율적인 causal multi-head attention의 효율적인 구현을 사용했습니다. Xformers 라이브러리2에서 사용할 수 있는 이 구현은 Rabe and Staats에서 영감을 얻었으며 Dao et al.의 backward를 사용합니다. (2022). 이것은 attention 가중치를 저장하지 않고 언어 모델링 작업의 인과적 특성으로 인해 가려진 키/쿼리 점수를 넣지 않음으로 달성합니다.

학습 효율을 더 향상시키기 위해, 체크포인팅을 하는 backward pass동안 재계산되는 activations의 양을 줄였습니다. 더 정확하게, 선형 계층의 출력같은 계산비용이 비싼 activations를 절약했습니다. 이것은 PyTorch autograd에 의존하는 대신 transformer 레이어의 backward function을 수동으로 구현함으로써 달성합니다. 이 최적화에서 최대한의 장점을 얻으려면, Korthikani가 기술한 모델과 시퀀스 병렬에 사용되는 메모리를 줄여야 했습니다. 게다가, 우리는 또한 가능한 한 (all_reduce 작업으로 인해) 네트워크를 통한 GPU 간의 activation 계산과 통신을 오버랩합니다.

65B-파라미터 모델을 훈련할 때, 우리의 코드는 80GB의 RAM이 있는 2048 A100 GPU에서 약 380개의 토큰/초/GPU를 처리합니다. 이것은 1.4T 토큰이 포함된 데이터 세트에 대한 훈련이 약 21일이 걸린다는 것을 의미합니다.

# 3. 주요 성과

이전 작업 (Brown et al., 2020)을 이어서 zero-shot과 few-shot작업을 고려해 20개의 벤치마크 결과를 보고합니다.

- Zero-shot: task와 test example에 대한 텍스트 설명을 제공합니다. 모델은 open-ended generation 또는 제안된 답변의 순위를 매겨 제공합니다.
- Few-shot: 1~64 사이의 몇개의 task 예제와 테스트 예제를 제공합니다. 모델은이 텍스트를 입력으로 받고 답변을 생성하고나 다른 옵션의 순위를 매깁니다.

대중이 사용가능하지 않은 언어 모델 GPT-3, Gopher, Chinchilla 그리고 PaLM과, open-sourced OPT 모델 GPT-J, GPT-Neo와 같은 다른 재단의 모델과 LLaMA를 비교합니다. 섹션4에서 OPT-IML과 Flan-PaLM과 같은 명령어 튜닝된 모델과 간단한 비교를 합니다.

free-form 생성 작업과 객관식(multiple choice) 작업에 대해 LLaMA를 평가합니다. 객관식 작업에서, 목표는 제공된 맥락에 따라 주어진 일련의 작업 중에서 가장 적절한 완성을 선택하는 것입니다. 제공된 맥락을 감안할 때 가장 높은 가능성의 완성을 선택합니다. Gao et al.을 따르고 Brown et al.을 따르는 특정 데이터 세트(OpenBookQA, BoolQ)를 제외하고 완성에 필요한 문자 수에 의해 normalized된 가능성을 사용하고, ㅁ문맥으로 "Answer:" 주어진 완성에 가능성이 높은 normalized된 가능성에 따라 완성을 선택합니다.

## 3.1 Common Sense Reasoning

## 3.2 Closed-book Question Answering

## 3.3 Reading Comprehension

## 3.4 Mathematical reasoning

## 3.5 Code generation

## 3.6 Massive Multitask Language Understanding

## 3.7 Evolution of performance during training

# 4. 명령어 파인튜닝

# 5. 편견, 독성과 잘못된 정보

# 6. 탄소발자국

# 7. 관련 연구

# 8. 결론

이 논문에서, 자유롭게 공개된 언어 모델의 나열과, state-of-the-art 재단 모델의 경쟁을 보여줍니다. 가장 주목할것은, LLaMA-13B는 GPT-3보다 10x 작으며 능가하는 성능을 보였다는 것과, LLaMA-65B는 Chinchilla-70B와 PaLM-540B과 경쟁합니다.

이전 연구와는 다르게, 독점적인 데이터셋에 의존하지 않고, 대중에 공개된 데이터만 사용해 sota 성능을 달성하는게 가능하단 것을 보여줍니다. 이 모델을 연구 커뮤니티에 공개하는게 LLM 개발을 가속화하고, 강건함을 증가시키고 알려진 독성과 편견을 완화시키는데 기여하길 바랍니다. 추가적으로, Chung et al. (2022)의 지침에 따라 이 모델을 미세 조정하면 유망한 결과를 얻을 수 있다는것을 보았고, 후속 연구에서 더 자세히 조사할 예정입니다. 최종적으로, 스케일링에서 지속적인 향상을 볼 수 있는 한, 큰 말뭉치로 학습한 더 큰 모델을 향후에 공개할 예정입니다.
