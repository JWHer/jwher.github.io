---
authors:
- jwher
description: 'PaLM: Scaling Language Modeling with Pathways'
slug: palm
tags:
- ml
- paper
title: Pathways를 이용한 언어모델 스케일링
---

[![palm](palm.jpeg)](/posts/palm)  
*최대한 번역된 단어를 통일하였으나 원문을 보는것을 권장합니다.*  

<!--truncate-->

## 요약
*Abstract*

대규모 언어 모델은 few-shot learning을 사용한 다양한 자연어 처리 분야에서 눈에 띄는 성과를 보이고 있습니다.
이는 모델을 task-specific하게 적응하기 위한 예제 수를 수를 크게 줄입니다.
더 나아가 few-shot learning에 대한 영향에 대한 이해를 높이기 위해,
540억개의 매개 변수, densely activated, [transformer](/posts/attention-is-all-you-need) 언어 모델인 Pathways Language Model(PaLM)을 학습시켰습니다.

PaLM은 6144 TPU v4칩에서 Pathways를 사용해 학습했습니다. Pathways는 다양한 TPU Pods에서 고효율로 학습하길 가능하게 하는 ML system입니다.
수백개의 **언어 이해와 생성** 벤치마크에서 few-shot learning의 sota를 달성함을 보여줍니다.
많은 작업에서 PaLM은 540B는 고성능을 달성합니다. **multi-step reasoning tasks**에서 sota를 달성하고,
최근의 BIG-bench 벤치마크에서 평균 사람보다 나은 성능을 보여줍니다.
상당수의 BIG-bench tasks는 모댈 규모에 따라 불연속적인 성능 개선을 보여주었고,
이는 가장 큰 모델로 확장함에 따라 급격한 성능 증가를 보였음을 뜻합니다.
PaLM은 다양한 벤치마크에서 증명되는 강한 **multilingual tasks**와 **source code generation**을 갖춥니다.
편견(bias)과 독성(toxicity)에 대한 포괄적인 분석을 제공하고, 모델 규모와 관련하여 훈련 데이터 암기(memorization)을 연구합니다.
최종적으로 LLM에 대한 윤리적 고려 사항과 점진적인 완화 전략에 대해 논의합니다.

## 1. 소개

(WIP 사전연구들)

(GLaM, Gopher, Chinchilla, Megatron-Turing NLG, LaMDA)

이 논문에서, scaling line으로 언어 모델링 개선을 계속하고 780억 개의 고품질 텍스트 토큰에, densely activated, autoregressive transformer 540억 개의 매개 변수를 훈련합니다.
이것은 여러 텐서 처리 장치(TPU) v4 파드를 포함해 수천 개의 가속기 칩에 걸쳐 **매우 큰 신경망**을 **매우 효율적**으로 훈련할 수 있는 새로운 ML 시스템인
[Pathways](#pathways-asynchronous-distributed-dataflow-for-ml)를 사용해 달성했습니다.
새로운 모델은 Pathways Language Model (PaLM)이라고 부르며 수백 개의 자연어, 코드 및 수학적 추론 작업에서 sota few-shot 결과를 달성합니다.

이 작업의 요점은 다음과 같습니다.

### 효율적인 스케일링
*Efficient scaling*

하나의 모델을 학습하는데 천에서 만개의 고효율 가속기를 사용할 수 있게 하는 새로운 ML system
[Pathways](#pathways-asynchronous-distributed-dataflow-for-ml)의 첫번째 대규모 사용을 보입니다.
Pathways를 사용하면서 이전에는 도달할 수 없었던 효율성 수준에서 6144TPU v4 칩에 대한 540B 매개 변수 언어 모델을 훈련했습니다.
대부분 이전의 대형 언어 모델은 단일 TPU 시스템(GLaM)이나 파이프라인 병렬 처리(GPipe)를 사용해
GPU 클러스터(-)나 여러 TPU v3 파드(Gopher)를 확장해 최대 4096 TPU v3 chips을 확장했습니다.
섹션 4에서 우리는 모델 FLOPS를 활용해 PaLM 540B를 6144 칩 두개의 TPU v4 Pods에서
매우 높은 46.2%라는 모델 FLOPs utilization을 달성하였고(이론적인 최고 수치에 비교한 수치)
57.8%의 하드웨어 FLOPs utilization을 보였습니다.

### 스케일링을 통한 지속적인 향상
*Continued improvements from scaling*

섹션 6에서 다양한 주요 벤치마크를 수행하고, 상당한 차이를 보였습니다.
이것은 대규모 LM의 스케일링 개선이 정체되거나 포화점에 도달하지 않았다는 것을 보여줍니다.
표 4에서 가장 널리 평가된 29개의 영어 이해 벤치마크에서 28개의 sota를 달성했음을 보여줍니다.
이전에 수행된 다음 항목과 비교했습니다(GLaM, GPT-3, Megaron-Turing NLG, Gopher, Chinchilla, LaMDA)

### 획기적인 능력
*Breakthrough capabilities*

많은 어려운 작업에서 언어 이해와 생성에서 획기적인 능력을 보여줍니다.
특히, 섹션 [6.3](#63-reasoning)은 정답을 도출하기 위해 multi-step 수학적 또는 상식적인 추론이 필요한 추론(reasoning) 작업 모음에 대한 평가를 제시합니다.
이전의 sota 결과는 좋은(strong) 결과를 얻기 위해 task-specific한 finetuning, domain-specific 아키텍처 및 task-specific verifiers 조합을 사용합니다.
이 작업에서, 우리는 모델 스케일링이 [chain-of-thought prompting](#chain-of-thought-prompting-elicits-reasoning-in-large-language-models)과 결합될 때,
간단한 few-shot 평가가 다양한 추론 작업에서 finetuned sota를 능가하거나 같음을 보여줍니다.
섹션 [6.2](#62-big-bench)에서 최근에 출시된 150개 이상의 새로운 언어 이해 및 생성 작업 제품군인
[BIG-bench](#beyond-the-imitation-game-measuring-and-extrapolating-the-capabilities-of-language-models)의 획기적인 성능을 강조합니다.
BIG-bench의 대부분은 사람도 올바르게 대답하기가 매우 어렵습니다.
그림 1과 섹션 [9](#9-설명-살펴보기exploring-explanations)에서, 복잡한 추론 체인을 명시적으로 해석하고 설명하는 PaLM의 탐색 능력을 보여줍니다.

> ![그림 1](figure1.png)  
> *그림1*  PaLM이 *chain-of-thought prompting*을 통해 탐색하는 능력을 보여줍니다.
> 모든 예제는 PaLM 540B에서 greedy(1-best) decoding을 통해 생성되었습니다. 프롬프트는 섹션 9에서 더 많은 예시를 보여줍니다.

### 불연속적인 성능 개선
*Discontinuous improvements*

스케일링 동작을 더 잘 이해하기 위해, 8B, 62B, 540B 세 가지 다른 파라미터 크기(scales)의 결과를 제시합니다.
일반적으로, 62B에서 540B로의 스케일링은 8B에서 62B로의 스케일링과 유사한 성능을 보이며,
이는 신경망 스케일링에서 종종 관찰되는 멱법칙(power law)인 경험 규칙(rule of thumb)과 일치합니다.
(Scaling laws for neural language models. Kaplan et al., 2020).
그러나, 특정 작업의 경우, 우리는 62B에서 540B로의 스케일링이 8B에서 62B로의 스케일링에 비해 정확도가 급격하게 증가하는 불연속적인 개선을 관찰합니다.
그러한 행동은 섹션 [6.2](#62-big-bench) BIG-bench 작업 약 25%에서 관찰됩니다.
이는 모델이 충분한 규모를 달성할 때 대규모 LM의 새로운 기능이 나타날 수 있으며, 이러한 기능은 이전에 연구된 규모를 넘어 계속 나타날 수 있음을 시사합니다.

> ![discontinuous-improvements](discontinuous-improvements.gif)  
> 대규모 모델에선 새로운 기능이 나타날 수 있습니다 (출처: 구글 블로그)

### 다국어 이해
*Multilingual understanding*

대규모 언어 모델에 대한 이전 작업은 다국어 영역에서 제한된 평가를 수행했습니다.
이 논문에서, 우리는 다양한 언어로 기계 번역(섹션 [6.5](#65-translation)), 요약(섹션 [6.6](#66-multilingual-natural-language-generation)) 및 질문 답변(섹션 [6.7](#67-multilingual-question-answering))을 포함한 다국어 벤치마크에 보다 철저한 평가를 수행합니다.
학습 말뭉치(corpus)에서 비영어 데이터(≈ 22%)의 상대적으로 적은 비율에도 불구하고,
540B 모델의 few-shot 결과는 비영어 요약 작업에서 이전의 finetuned sota와 격차를 해소하고 번역 작업에서 이전의 sota를 능가할 수 있었습니다.
영어 및 다국어 작업에 대한 다국어 데이터의 비율을 증가시키는 영향을 이해하기 위해서 further work이 필요합니다.

### 편견과 독성
*Bias and toxicity*

또한 편견과 독성에 대한 모델 성능을 평가하여 몇 가지 통찰력을 얻었습니다(섹션 [10](#10-대표적인-편견-분석)).
첫째, 성별과 직업 편견으로 Winogender conference task가 정확성이 모델 규모에 따라 향상된다는 것을 발견했으며,
PaLM 540B는 1-shot 또는 few-shot 설정에서 새로운 sota를 달성합니다.
둘째, 인종/종교/성별이 prompt continuation으로 수행된 동시 분석은 모델이 무슬림을 테러리즘, 극단주의 및 폭력과 연관시키는 고정관념을 잘못 주장하는 가능성을 보입니다.
이 행동은 모델 규모(scale) 전반에 걸쳐 일관성이 있었습니다.
마지막으로, prompt continuation에 대한 독성 분석은 8B 모델에 비해 62B 및 540B 모델의 전반적인 독성 수준이 약간 더 높다는 것을 보여줍니다.
그러나, model-generated continuation의 독성은 프롬프트 텍스트의 독성과 높은 상관 관계가 있는 반면,
human-generated continuations은 강한 독성 상관 관계가 없습니다.
이것은 모델이 인간이 생성한 텍스트보다 프롬프트 스타일에 더 크게 영향을 받는다는 것을 시사합니다.
향후 작업에서, 이러한 벤치마크를 영어가 아닌 언어로 확대하고 잠재적인 위험을 더 철저하게 설명할 계획입니다.

## 2. 모델 아키텍처

PaLM은 표준 [transformer](/posts/attention-is-all-you-need) 아키텍처에서 디코더만 있는 설정을 사용했고
(즉, 각 timestep은 자신과 과거 timesteps만 참고 가능합니다) 다음 변경을 가했습니다.

### SwiGLU Activation

표준 ReLU, GeLU 또는 [Swish activations](#glu-variants-improve-transformer)에 비해 성능이 크게 향상되는 것으로 나타난,
MLP intermediate activations에 SwiGLU activations (Swish(xW) · xV)를 사용합니다.
MLP에서 두 개가 아닌 세 개의 행렬 곱셈이 필요하지만,
[Swish activations](#glu-variants-improve-transformer)에서 컴퓨팅 등가 실험
(즉, 표준 ReLU variant가 비례적으로 더 큰 차원을 가진 경우)에서 성능 향상을 입증합니다.

### Parallel Layers

각 트랜스포머 블록에 표준 직렬화된 식이 아닌 병렬(parallel) 식을 사용합니다.
[A 6 Billion Parameter Autoregressive Language Model](#a-6-billion-parameter-autoregressive-language-model)
표준 식이 다음과 같이 쓴다면

$$
y = x + MLP(LayerNorm(x+Attention(LayerNorm(x))))
$$

병렬 식은 다음과 같이 쓸 수 있습니다.

$$
y = x + MLP(LayerNorm(x)) + Attention(LayerNorm(x))
$$

MLP와 Attention 입력 matrix 곱셈은 합쳐질 수 있기 때문에,
대규모 스케일에서 병렬식이 대략 15% 빠르게 동작합니다.
Ablation 실험은 8B 크기에서 작은 품질 저하를 보여주었지만 62B 척도에서는 품질 저하가 없었기 때문에,
우리는 병렬 layer의 효과가 540B 크기에서 품질 저하가없다고(neutral) 추정합니다.

### Multi-Query Attention

표준 transformer 식은 각 시간 단계의 입력 벡터가 텐서 모양 [k,h]의, 여기서 h는 attention head 크기입니다,
"query", "key" 및 "value"가 선형으로 사영(projected)되는 k attention 헤드를 사용합니다.
여기서, key/value 사영 예측은 각 헤드에 대해 공유됩니다.
즉, "key"와 "value"는 [1, h]로 투영되지만, "query"는 여전히 [k, h]를 형성하기 위해 사영됩니다.
이는 모델 품질과 훈련 속도에 영향이 없지만(neutral),
autoregressive 디코딩 시간에 상당한 비용 절감을 가져온다는 것을 발견했습니다.
[One write-head is all you need. Shazeer, 2019]
이것은 표준 multi-head attention이 autoregressive 디코딩 중에 가속기 하드웨어의 효율성이 낮기 때문입니다.
왜냐하면 key/value 텐서는 예제(examples) 간에 공유되지 않고, 한 번에 하나의 토큰만 디코딩되기 때문입니다.

### RoPE Embeddings

절대적이거나 상대적인 position embeddings이 아닌 RoPE 임베딩을 사용합니다.
RoPE 임베딩이 더 긴 시퀀스 길이에서 더 좋은 효과를 보였기 때문입니다.
[Roformer: Enhanced transformer with rotary position embedding](#roformer-enhanced-transformer-with-rotary-position-embedding)

### Shared Input-Output Embeddings

과거 작업에서 자주 (but not universally) 수행되는 입력 및 출력 임베딩 매트릭스를 공유합니다.

### No Biases

밀도 높은 커널(dense kernel)이나 layer norms에는 bias가 사용되지 않았습니다.
이는 대형 모델의 훈련 안정성을 증가시키는 것을 발견합니다.

### Vocabulary

우리는 과도한(excess) 토큰화 없이 훈련 말뭉치(corpus)에서 많은 수의 언어를 지원하기 위해 선택된 256k 토큰으로 [SentencePiece](#a-simple-and-language-independent-subword-tokenizer-and-detokenizer-for-neural-text-processing) 어휘(vocabulary)를 사용합니다.
어휘(vocavulary)는 훈련 데이터에서 생성되었고, 훈련 효율성을 향상시킨다는 것을 발견했습니다.
어휘는 완전히 무손실(lossless)이며 되돌릴 수 있습니다(reversible).
이것은 공백이 어휘(특히 코드에 중요한)에 완전히 보존되고 어휘외(out-of-vocabulary) 유니코드 문자는 각 바이트에 대한 어휘 토큰과 함께 UTF-8 바이트로 나뉩니다.
숫자는 항상 개별 숫자 토큰으로 나뉩니다 (예: "123.5 → 1 2 3 . 5").

### 2.1 모델 스케일 하이퍼파라미터
*Model Scale Hyperparameters*

여기에서는 540B, 62B, 8B 세 모델 크기를 비교합니다.
FLOPs는 대략 파라미터 수와 비슷한데, 이 모델이 표준 dense transformer이기 때문입니다.
이 모델은 표1의 하이퍼파리미터로 구성되었습니다.
같은 데이터와 어휘를 사용해 세 모델은 독립적으로 학습되었습니다.
학습에 관한 내용은 섹션 [3](#3-학습-데이터셋)과 [5](#5-학습-셋업)에 더 자세히 설명되어 있습니다.

> | Model     | Layers | # of Heads | d_model | # of Parameters(in billions) | Batch Size          |
> |-----------|--------|------------|---------|------------------------------|---------------------|
> | PaLM 8B   | 32     | 16         | 4096    | 8.63                         | 256 -> 512          |
> | PaLM 62B  | 64     | 32         | 8192    | 62.50                        | 512 -> 1024         |
> | PaLM 540B | 118    | 48         | 18432   | 540.35                       | 512 -> 1024 -> 2048 |
> *표1* 모델 아키텍처 상세. feed-forward 크기는 항상 4*d_model이고 attention head 크기는 항상 256입니다.

### 2.2 모델 카드

PaLM에 대한 [Model Card](#model-cards-for-model-reporting)는 부록 E에 있습니다.
이는 모델 아키텍처, 학습 설정, 학습 데이터, 확장된 사용을 위한 고수준의 요약입니다.

## 3 학습 데이터셋

## 4 학습 인프라

Pathways
Client-Server two-way data parallelism

### 4.1 학습 효율

Hardware FLOPs Utilization (HFU).
주어진 장치에서 관측되는 이론상 최대 FLOPs에 대한 비율 추측을 나타냅니다.

## 5. 학습 셋업

* 

### 5.1 학습 불안정

## 6 평가

### 6.1 English NLP tasks

### 6.2 BIG-bench

### 6.3 Reasoning
*
### 6.4 Code Tasks
*
### 6.5 Translation

### 6.6 Multilingual Natural Language Generation

### 6.7 Multilingual Question Answering

### 6.8 Analysis

## 7 암기(Memorization)

신경망이 학습 데이터를 암기할 가능성이 있다는건 널리 알려진 사실입니다. 실은, overfitting에 대한 정의이기도 합니다.
일반적으로, 이러한 유형의 암기는 모델이 작은 훈련 세트를 많이 통과할 때 발생합니다.
하지만, PaLM은 780억개의 토큰 뭉치(corpus)를 통해 한번의 패스로 훈련합니다.
반면에, PaLM은 굉장히 큰 용량을 지니고 있기 때문에 한번의 패스만으로도 훈련 데이터의 상당 부분을 암기할 수 있다는건 그럴듯합니다.
또한 웹 파생 말뭉치(corpora)의 거의 복제된 텍스트는 몇개의 구문(작은 변화 포함)이 학습 중간에 많이 보입니다.

## 8 데이터셋 오염

## 9 설명 살펴보기(Exploring Explanations)

## 10 대표적인 편견 분석

## 11 윤리적인 고려사항

## 12 관련 작업

## 13 스케일링에 열린 질문

## 14 결론

## References

### [Google Blog](https://ai.googleblog.com/2022/04/pathways-language-model-palm-scaling-to.html)

### [Pathways: Asynchronous distributed dataflow for ML](https://arxiv.org/pdf/2203.12533.pdf)

### [Chain of thought prompting elicits reasoning in large language models](https://arxiv.org/pdf/2201.11903.pdf)

### [GLU variants improve transformer](https://arxiv.org/pdf/2002.05202.pdf)

### [A 6 Billion Parameter Autoregressive Language Model](https://github.com/kingoflolz/mesh-transformer-jax)

### [Roformer: Enhanced transformer with rotary position embedding](https://arxiv.org/pdf/2104.09864.pdf)

### [A simple and language independent subword tokenizer and detokenizer for neural text processing](https://aclanthology.org/D18-2012.pdf)

### [Model cards for model reporting](https://dl.acm.org/doi/10.1145/3287560.3287596)

6-2
### [Beyond the imitation game: Measuring and extrapolating the capabilities of language models](https://github.com/google/BIG-bench/)
