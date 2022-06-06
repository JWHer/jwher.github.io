---
layout: post

title: "VAE: Variable Auto Encoder"  
thumbnail-img: /assets/img/variable-autoencoder/vae.png
categories:
- math
- paper
- ml
excerpt: |
  생성 모델과 VAE, 수학적 의미까지
date: 2021-07-27 01:50:00

aside: true
feature_text: |
  # Variable Auto Encoder
feature_image: "/assets/img/theory.jpg"
comments: true
---

<!-- more -->

<p align="center">
<img src="/assets/img/variable-autoencoder/vae.png" style="height: 40vh;"/>
</p>
<!--
<script type="text/x-mathjax-config">
  MathJax.Hub.Config({tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}});
</script>
<script type="text/javascript"
  src="http://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
</script>
-->

*생성 모델과 VAE, 수학적 의미까지*  

# 목차
* [생성모델](#생성모델)
* [배경지식](#배경지식)
* [수학과 코드](#수학과-코드)

## 생성모델
*Generative Model*
* **생성 모델** 은 새로운 데이터 인스턴스를 만들어냅니다.  
* **판별 모델(Discriminative models)** 은 다른 종류의 데이터 인스턴스를 분류합니다.  

사진 속에서 고양이를 찾는 것은 판별 모델,
실제 고양이 같은 새 사진을 만드는 것은 생성 모델이 되겠습니다.  

수학적으로 표현해 볼까요? 주어진 데이터 집합 X와 라벨(레이블) 집합 Y가 있습니다.  
* **생성 모델**은 결합 분포 p(X,Y)를 학습하거나, 라벨이 없으면 p(X) 분포만 학습합니다.
* **판별 모델**은 X일때 Y일 확률, 즉 조건부 확률 p(Y|X)를 학습합니다.  

> <div align="center">
> <img src="/assets/img/variable-autoencoder/x-and-y.png" style="height: 26vmin;"/>
> <img src="/assets/img/variable-autoencoder/y-in-x.png" style="height: 26vmin;"/>
> </div>
>
> 생성모델은 X에서 Y가 생성되게 학습해야 합니다. 즉, 교집합이 아닌 부분을 최소화 해야합니다.(X=Y=X∩Y, (X∩Y)ᶜ=∅)  
> 판별 모델은 X일때 Y를 판별하게 학습해야 합니다. 즉, X∩Yᶜ=∅이 되어야 합니다.

눈치가 빠른 사람은 생성 모델이 판별 모델보다 어렵다는 것을 발견했을 겁니다.

예를 들어 고양이를 찾는다면 주변과 구분되는 특징(꼬리...) 하나만 찾으면 됩니다.
하지만 고양이 사진을 만드려면, 고양이의 모든 특징(꼬리, 귀, 눈, 털...)을 정확히 알아야 합니다.

> <p align="center">
> <img src="/assets/img/variable-autoencoder/x-is-y-y-include-x.png" style="height: 40vh;"/>
> </p>
>
> 생성 모델은 집합 X와 집합 Y를 최대한 일치시키는 방법을 찾아야 합니다.  
> 반면에 판별 모델은 X가 집합 Y에 속하는 방법만 찾으면 됩니다.  
> (Y를 고양이의 특징, X를 학습해야 하는 특징이라고 생각해 봅시다)

생성 모델의 종류로는 VAE, GAN...  
판별 모델의 종류로는 ...

<br/>

## 배경지식

뒤의 내용은 배경지식이 필요합니다.

### 확률분포
*probability distribution*
확률 분포는 확률 변수가 특정한 값을 가질 확률을 나타내는 함수입니다.  
가우스, 정규분포

### 베이즈 정리
*Bayes' theorem*   


### 쿨백-라이블러 발산
*Kullback–Leibler Divergence*  

<br/>

## 수학과 코드

### ELBO
*Evidence Lower BOund*
   
<br/>

## Tips

### Reference  
[What is a Generative Model?](https://developers.google.com/machine-learning/gan/generative)  
[[위키]확률 분포](https://ko.wikipedia.org/wiki/%ED%99%95%EB%A5%A0_%EB%B6%84%ED%8F%AC)  
[[위키]베이즈 정리](https://ko.wikipedia.org/wiki/%EB%B2%A0%EC%9D%B4%EC%A6%88_%EC%A0%95%EB%A6%AC)  
[[위키]쿨백-라이블러 발산](https://ko.wikipedia.org/wiki/%EC%BF%A8%EB%B0%B1-%EB%9D%BC%EC%9D%B4%EB%B8%94%EB%9F%AC_%EB%B0%9C%EC%82%B0)  

## - JWHer  
좋은 글을 쓰고 싶습니다.

<!-- update log -->
<!--
본문에 추가할 내용을 적는다.
https://deepinsight.tistory.com/127
-->