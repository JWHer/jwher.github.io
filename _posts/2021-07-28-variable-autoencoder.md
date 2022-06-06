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
date: 2021-07-28 01:50:00

aside: true
feature_text: |
  # Variable Auto Encoder
feature_image: "/assets/img/theory.jpg"
comments: true  
mathjax: true
---

<!-- more -->

<p align="center">
<img src="/assets/img/variable-autoencoder/vae.png" style="height: 40vh;"/>
</p>

*생성 모델과 VAE, 수학적 의미까지*  
*Disclaimer! 이 글은 작성중에 있습니다*  

# 목차
* [생성모델](#생성모델)
* [배경지식](#배경지식)
* [VAE](#vae)
* [수학과 코드](#수학과-코드)

## 생성모델
*Generative Model*
* **생성 모델** 은 새로운 데이터 인스턴스를 만들어냅니다.  
* **판별 모델(Discriminative models)** 은 다른 종류의 데이터 인스턴스를 분류합니다.  

예를 들어 사진 속에서 고양이를 찾는 것은 판별 모델,
실제 고양이를 그리는 것은 생성 모델입니다.  

수학적으로 표현해 봅시다. 주어진 데이터 집합 X와 라벨(레이블) 집합 Y가 있습니다.  
* **생성 모델** 은 결합 분포 `p(X,Y)`를 학습하거나, 라벨이 없으면 `p(X)` 분포만 학습합니다.
* **판별 모델** 은 X일때 Y일 확률, 즉 조건부 확률 `p(Y|X)`를 학습합니다.  

> <div align="center">
> <img src="/assets/img/variable-autoencoder/xandy-ybarx.png" style="max-height: 40vmin;"/>
> </div>
>
> 생성모델은 X에서 Y가 생성되게 학습해야 합니다. 즉, `X=Y=X∩Y`, `(X∩Y)ᶜ=∅`이 되어야 합니다.  
> 판별 모델은 X가 Y에 포힘되도록 학습해야 합니다. 즉, `X∩Yᶜ=∅`이 되어야 합니다.

눈치가 빠른 사람은 생성 모델이 판별 모델보다 어렵다는 것을 발견했을 겁니다.

예를 들어 고양이를 찾는다면 주변과 구분되는 특징(꼬리...) 하나 이상만 찾으면 됩니다.
하지만 고양이 그림을 그리려면, 고양이의 모든 특징(꼬리, 귀, 눈, 털...)을 정확히 알아야 합니다.

> <div align="center">
> <img src="/assets/img/variable-autoencoder/x-is-y-y-include-x.png" style="max-height: 40vmin;"/><br/>
> <img src="/assets/img/variable-autoencoder/x-y-example.png" style="max-height: 40vmin;"/>
> </div>
>
> 생성 모델은 집합 X와 집합 Y를 최대한 일치시키는 방법을 찾아야 합니다.  
> 반면에 판별 모델은 집합 Y에 속한 X만 찾으면 됩니다.  
> (X를 학습해야 하는 정보, Y를 고양이의 특징이라고 생각해 봅시다)

생성 모델의 종류로는 VAE, GAN, HMM, Bayesian 등이 있습니다.
판별 모델의 종류로는 k-NN, 로지스틱 회귀, SVM, 결정트리 등이 있습니다.

<br/>

## 배경지식

VAE를 살펴보기 전엔 [확률분포](#확률분포),
[베이즈 정리](#베이즈-정리),
[쿨백-라이블러 발산](#쿨백-라이블러-발산) 배경지식이 필요합니다.
전부 아신다고요? [다음 장](#vae) 으로 넘어가세요!

~~*저는 개념이 지겨워서 역순으로 코드 먼저 볼 때가 많습니다*~~

### 확률분포
*probability distribution*  

확률 분포는 확률변수(x)가 특정한 값을 가질 확률을 나타내는 함수(f(x))입니다.
확률 분포는 **이산확률분포(Discrete Probability Distribution)** 와
**연속확률분포(Continuous Probability Distribution)** 로 나뉘는데요,
**이산확률분포**는 확률변수가 가질 수 있는 값이 **가산집합**인 확률분포를 말합니다.
반면에, **연속확률분포**는 확률변수가 **연속적**이고 확률밀도함수로 표현할 수 있는 분포를 말합니다.

통계학을 들으신 분이라면 이항분포의 특수한 형태인
[푸아송 분포](https://ko.wikipedia.org/wiki/%ED%91%B8%EC%95%84%EC%86%A1_%EB%B6%84%ED%8F%AC)
와 대표적인 연속확률분포인 정규분포가 어렴풋이 기억날겁니다.  

정규분포(Gaussian distribution)와 연속확률분포를 조금 더 자세히 볼까요?  
<p align="center">
<img src="/assets/img/variable-autoencoder/Gaussian_distribution.svg" style="height: 40vmin;"/>
</p>

연속 확률 변수의 확률밀도함수(f(x))는 다음 두 조건을 만족합니다.  
* 모든 실수 x에 대해 f(x)≥0  
* $  \int_{\infty}^{-\infty}f(x)dx=1 $  

정규분포 또한 연속확률분포로 확률밀도함수의 특징을 갖습니다.    

정규분포는 평균(μ, mu)과 표준편차(σ, sigma)로 분포를 표기합니다.  
* $ N(\mu, \sigma^2) $  

평균이 0이고 표준편차가 1인 정규분포 N(0,1)을 표준정규분포라 합니다.
정규분포는 정규화를 통해 표준정규분포를 얻을 수 있습니다.
* $ Z=\frac{X-\mu}{\sigma} $  

각 사건이 벌어졌을 때의 이득과 확률을 곱한 값의 합을 **기댓값**이라고 하는데요,
연속확률변수에서 기댓값은 다음과 같습니다.
* $ E[X] = \int_{\infty}^{-\infty}xf(x)dx $  

정규분포에서 기댓값을 계산해 보면 모평균과 같습니다.
* $ E[X]=μ $  

### 베이즈 정리
*Bayes' theorem*  

베이즈 정리는 두 확률변수의 **사전확률**과 **사후확률** 사이의 관계를 나타냅니다.  
*A,B는 가측집합이고 P(B)>0일 때,*  
* $ P(A\mid B)=\frac{P(A)*P(B\mid A)}{P(B)} $
  
조건부 확률을 통해 쉽게 증명할 수 있습니다.  
$ P(A\mid B)=\frac{P(A \bigcap B)}{P(B)} $  

*P(B)>0임을 가정했으므로*  
$ P(A\mid B)P(B)=P(A \bigcap B)=P(B \bigcap A)=P(B\mid A)P(A) $  

*첫 식에 $ P(A \bigcap B)=P(B\mid A)P(A) $ 를 이용하면*  
$ P(A\mid B)=\frac{P(A)*P(B\mid A)}{P(B)} $  

<details markdown="1">
<summary>TMI</summary>

부가적으로, 사건 A와 사건 B가 독립일 때 조건부 확률
$ P(A\mid B)=P(A) $  
이므로  
$ P(A)P(B)=P(A \bigcap B) $  
임을 알 수 있습니다.
</details>

### 쿨백-라이블러 발산
*Kullback–Leibler Divergence*    

쿨백-라이블러 발산은 두 확률분포의 차이를 계산하는 함수입니다.  

두 확률변수에 대한 확률분포 P, Q에 대해 쿨백-라이블러 발산은 다음과 같이 정의됩니다.  

* 이산확률분포: $ D_{KL}(P\mid\mid Q)=\sum_iP(i)log\frac{P(i)}{Q(i)} $  
  
* 연속확률븐포: $ D_{KL}(P\mid\mid Q)=\int_{-\infty}^{\infty}p(x)log\frac{p(x)}{q(x)}dx $  

*p,q는 각각 확률분포의 확률밀도함수입니다*  
연속일때 조금 더 풀어보면 다움과 같습니다  
* $ D_{KL}(P\mid\mid Q)=\int_{-\infty}^{\infty}p(x)log\ p(x)dx - \int_{-\infty}^{\infty}p(x)log\ q(x)dx $  
  
<p align="center">
<iframe src="https://angeloyeo.github.io/p5/2020-10-27-KL_divergence/" style="height: 350px; width: 860px; overflow: scroll;">
</iframe>
</p>

[KL divergence](https://angeloyeo.github.io/2020/10/27/KL_divergence.html)
눈으로 이해하기 쉬운 좋은 자료를 만들어 주셨습니다.  

쿨백-라이블러 발산의 중요한 특징은 다음과 같습니다.  
* $ D_{KL}(p\mid\mid q) ≥ 0 $  
  
* $ D_{KL}(p\mid\mid q) ≠ D_{KL}(q\mid\mid p) $

~~증명은 다음에 하겠습니다~~

<br/>

## VAE

생성 모델 구조를 봅시다.  
<p align="center">
<img src="/assets/img/variable-autoencoder/latent-vector.png" style="max-height: 40vmin;"/>
</p>

$ z\sim p(z) $의 확률변수가 주어졌을 때, 원하는 x값을 얻을 확률은 $ p(x\mid z) $ 입니다.
우리의 목적은 $ p(x\mid z) $일 수도 있는 근사값 $ p_\theta(x\mid z) $를 구하는 것입니다.  
<!-- p(x | generator_theta(z)) => p_theta(x | z) -->
*주의! $ p(x\mid z) $는 생성기(generator)가 아닌 확률분포입니다*  

그렇다면 $ p(x\mid z) $와 가장 비슷한 $ p_\theta(x\mid z) $를 어떻게 구해야 할까요?
둘 사이의 MSE(Mean Square Error)가 최소가 되는 분포를 찾으면 가장 비슷할까요?   
<!--[MLE(Maximum Likelihood Estimation)](https://ko.wikipedia.org/wiki/%EC%B5%9C%EB%8C%80%EA%B0%80%EB%8A%A5%EB%8F%84_%EB%B0%A9%EB%B2%95)
을 적용해 [가능도](https://ko.wikipedia.org/wiki/%EA%B0%80%EB%8A%A5%EB%8F%84)
를 최대로 만들면 될까요?-->

<p align="center">
<img src="/assets/img/variable-autoencoder/mle-example.png" style="max-height: 40vmin;"/>
</p>

파란색 분포를 $ p(x\mid z) $라고 합시다.
주황색 분포는 변형이 존재하고, 회색 분포는 x축 이동을 했습니다.
주황색과 회색 분포 중 무엇이 파란색 분포에 더 가까울까요?  

회색 분포는 단순히 이동을 했기 때문에 의미적으로 파란색과 동일합니다.
하지만, 파란색 분포와 다른 확률분포의 차이를 계산해 보면, 오류가 있지만 가까이 있는 주황색 분포가 더 작습니다.  

즉, 사전 확률(prior probability, $ p(z) $) 지표로 학습하면 올바르게 학습되지 않습니다.
따라서 사후 확률(posterior probability, $ p(z\mid x) $)과 근사값 $ q_\lambda(z\mid x) $를 포함해
[변분법(Calculus of Variational)](https://ko.wikipedia.org/wiki/%EB%B3%80%EB%B6%84%EB%B2%95)
을 통해 학습합니다.  

<p align="center">
<img src="/assets/img/variable-autoencoder/vae.png" style="max-height: 40vmin;"/>
</p>

~~*왜 앞에있는게 사후확률이야*~~  
p(z)를 바로 학습하는 것이 아니라, 이미 존재하는 결과($ p(z\mid x) $ 사후확률)로 z를 학습합니다.
이때 근사함수 $ q_\lambda(z\mid x), p_\theta(x\mid z) $를 각각 `encoder`, `decoder`로 부르겠습니다.    
*(신경망은 각각 λ와 θ를 파라미터로 가집니다)*

자, 그럼 이제 변분법을 통해 참 사후조건인 $ p(z\mid x) $를 찾으면 됩니다!
왜 VAE인지 이제 알겠군요!

## ELBO
*Evidence Lower BOund*  

이상적인 사후조건에 베이즈 정리를 적용해 봅시다.  

$ p(z\mid x)=\frac{p(z)*p(x\mid z)}{p(x)} $  
$ p(x)=\frac{p(z)*p(x\mid z)}{p(z\mid x)} $  

*양변에 로그를 취합니다*  
$ log\ p(x)=log\frac{p(z)*p(x\mid z)}{p(z\mid x)} $  

*로그의 성질에 따라*  
$ \quad = log\ p(z)+log\ p(x\mid z)-log\ p(z\mid x $  -1)  

우리가 알고있는 근사분포 $ q_\lambda(z\mid x) $는 연속확률분포임으로  
$ \int_{\infty}^{-\infty}q_\lambda(z\mid x)dz=1 $  

*log p(x) 양변에 1을 곱하면*  
$ log\ p(x)*1=\int q_\lambda(z\mid x)log\ p(x)dz $  

*식1)을 사용하여*  
$ \quad = \int q_\lambda(z\mid x) \left [ log\ p(z)+log\ p(x\mid z)-log\ p(z\mid x) \right ] dz $  
$ \quad = \int q_\lambda(z\mid x)log\ p(z)dz + \int q_\lambda(z\mid x)log\ p(x\mid z)dz - \int q_\lambda(z\mid x)log\ p(z\mid x)dz $  

*양변에 $ 0=\int q_\lambda(z\mid x)log\ q_\lambda(z\mid x)dz - \int q_\lambda(z\mid x)log\ q_\lambda(z\mid x)dz $을 더합니다.
이때, 우리가 알아낼 수 있는 것($ p(z), q_\lambda(z\mid x) $)을 생각해 짝지어 줍시다*  
$ log\ p(x)= \int q_\lambda(z\mid x)log\ p(x\mid z)dz + \int q_\lambda(z\mid x)log\frac{p(z)}{q_\lambda(z\mid x)}dz - \int q_\lambda(z\mid x)log\frac{p(z\mid x)}{q_\lambda(z\mid x)}dz $
$ log\ p(x)= \int q_\lambda(z\mid x)log\ p(x\mid z)dz - \int q_\lambda(z\mid x)log\frac{q_\lambda(z\mid x)}{p(z)}dz + \int q_\lambda(z\mid x)log\frac{q_\lambda(z\mid x)}{p(z\mid x)}dz $  

*몬테카를로 추정과 쿨백-라이블러 발산으로 변형하면*   
$ log\ p(x)= E_{q_\lambda(z\mid x)}[log\ p(x\mid z)] - D_{KL}(q_\lambda(z\mid x)\mid\mid p(z)) + D_{KL}(q_\lambda(z\mid x)\mid\mid p(z\mid x)) $  

*쿨백-라이블러 발산의 특징(≥0)을 이용하면*  
$ log\ p(x) \geq E_{q_\lambda(z\mid x)}[log\ p(x\mid z)] - D_{KL}(q_\lambda(z\mid x)\mid\mid p(z)) $  

자! 길었습니다. 여기에서 확실한 최소 경계
$ ELBO(\lambda)=E_{q_\lambda(z\mid x)}[log\ p(x\mid z)] - D_{KL}(q_\lambda(z\mid x)\mid\mid p(z)) $
가 ELBO 입니다!  

*디코더 $ log\ p(x\mid z) $의 기댓값 $ E_{q_\lambda(z\mid x)}[log\ p(x\mid z)] $는 재생성 에러를 나타냅니다*  
*$ - D_{KL}(q_\lambda(z\mid x)\mid\mid p(z)) $는 알고있는 파라미터로 정규화할수 있습니다*  
*실제(참) 사후조건분포 $ p(z\mid x) $는 계산할 수 없습니다*  

말로만 하면 어려우니 그림을 볼까요?  
<p align="center">
<img src="/assets/img/variable-autoencoder/elbo.png" style="max-height: 40vmin;"/>
<img src="/assets/img/variable-autoencoder/elbo-draw.png" style="max-height: 40vmin;"/>
</p>

$ D_{KL}(q_\lambda(z\mid x)\mid\mid p(z\mid x)) \geq 0 $에 따라
확률분포 log p(x)와 ELBO(λ)는 0 이상의 차이(거리)가 있습니다.
하지만 $ p(z\mid x) $는 계산할 수 없으므로, ELBO를 최대화 하는 방법으로 학습합니다.  
*다른말로 디코더의 기댓값 최대화, 이상적인 인코더 생성을 목표로 합니다*

## Reparameterization Trick

backpropagation 문제를 해결합니다.  
<!--
하지만, 단순하게 ELBO의 경사값을 계산하는건 샘플링 계산이 obtain z를 사용하기에 불가능합니다.
따라서 p(z)를 다루기 쉬운 정규분포를 사용하여 우회할 수 있습니다.
-->

<br/>

## 수학과 코드

[Music VAE](https://github.com/magenta/magenta/blob/be6558f1a06984faff6d6949234f5fe9ad0ffdb5/magenta/models/music_vae/base_model.py#L210-L272)
   
```python
import tensorflow_probability as tfp
# ds = tfp.distributions

... 전략 ...
q_z = self.encode(input_sequence, x_length, control_sequence)
z = q_z.sample()

# Prior distribution.
p_z = ds.MultivariateNormalDiag(
    loc=[0.] * hparams.z_size, scale_diag=[1.] * hparams.z_size)

# KL Divergence (nats)
kl_div = ds.kl_divergence(q_z, p_z)

r_loss, metric_map = self.decoder.reconstruction_loss(
    x_input, x_target, x_length, z, control_sequence)[0:2]

free_nats = hparams.free_bits * tf.math.log(2.0)
kl_cost = tf.maximum(kl_div - free_nats, 0)

beta = ((1.0 - tf.pow(hparams.beta_rate, tf.to_float(self.global_step)))
        * hparams.max_beta)
self.loss = tf.reduce_mean(r_loss) + beta * tf.reduce_mean(kl_cost)

scalars_to_summarize = {
    'loss': self.loss,
    'losses/r_loss': r_loss,
    'losses/kl_loss': kl_cost,
    'losses/kl_bits': kl_div / tf.math.log(2.0),
    'losses/kl_beta': beta,
}
return metric_map, scalars_to_summarize
```

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

# KLD>=0 증명
https://hyunw.kim/blog/2017/10/27/KL_divergence.html
-->
<!--
# KLD
https://qiita.com/ceptree/items/9a473b5163d5655420e8
```python
import numpy as np
import matplotlib.pyplot as plt
import matplotlib.animation as animation

# 正規分布
def gaussian1d(x,μ,σ):
    y = 1 / ( np.sqrt(2*np.pi* σ**2 ) )  * np.exp( - ( x - μ )**2  / ( 2 * σ ** 2 ) )
    return y

# 正規分布のKL divergence
def gaussian1d_KLdivergence(μ1,σ1,μ2,σ2):
    A = np.log(σ2/σ1)
    B = ( σ1**2 + (μ1 - μ2)**2 ) / (2*σ2**2)
    C = -1/2
    y = A + B + C
    return y

# KL divergence
def KLdivergence(p,q,dx):
    KL=np.sum(p * np.log(p/q)) * dx
    return KL

# xの刻み
dx  = 0.01

# xの範囲
xlm = [-6,6]

# x座標
x   = np.arange(xlm[0],xlm[1]+dx,dx)

# xの数
x_n   = len(x)

# Case 1
# p(x) = N(0,1)
# q(x) = N(μ,1)

# p(x)の平均μ1
μ1   = 0
# p(x)の標準偏差σ1
σ1   = 1  

# p(x)
px   = gaussian1d(x,μ1,σ1)

# q(x)の標準偏差σ2
σ2   = 1

# q(x)の平均μ2
U2   = np.arange(-4,5,1)

U2_n = len(U2)

# q(x)
Qx   = np.zeros([x_n,U2_n])

# KLダイバージェンス
KL_U2  = np.zeros(U2_n)

for i,μ2 in enumerate(U2):
    qx        = gaussian1d(x,μ2,σ2)
    Qx[:,i]   = qx
    KL_U2[i]  = KLdivergence(px,qx,dx)


# 解析解の範囲
U2_exc    = np.arange(-4,4.1,0.1)

# 解析解
KL_U2_exc = gaussian1d_KLdivergence(μ1,σ1,U2_exc,σ2)

# 解析解2
KL_U2_exc2 = U2_exc**2 / 2

#
# plot
#

# figure
fig = plt.figure(figsize=(8,4))
# デフォルトの色
clr=plt.rcParams['axes.prop_cycle'].by_key()['color']

# axis 1 
#-----------------------
# 正規分布のプロット
ax = plt.subplot(1,2,1)
# p(x)
plt.plot(x,px,label=' $ p(x) $ ')       
# q(x)
line,=plt.plot(x,Qx[:,i],color=clr[1],label=' $ q(x) $ ')       
# 凡例
plt.legend(loc=1,prop={'size': 13})

plt.xticks(np.arange(xlm[0],xlm[1]+1,2))
plt.xlabel(' $ x $ ')

# axis 2
#-----------------------
# KLダイバージェンス
ax2 = plt.subplot(1,2,2)
# 解析解
plt.plot(U2_exc,KL_U2_exc,label='Analytical')
# 計算
point, = ax2.plot([],'o',label='Numerical')

# 凡例
# plt.legend(loc=1,prop={'size': 15})

plt.xlim([U2[0],U2[-1]])
plt.xlabel(' $ \mu $ ')
plt.ylabel(' $ KL(p||q) $ ')

plt.tight_layout()

# 軸に共通の設定
for a in [ax,ax2]:
    plt.axes(a)
    plt.grid()
    # 正方形に
    plt.gca().set_aspect(1/plt.gca().get_data_ratio())

# 更新
def update(i):
    # 線
    line.set_data(x,Qx[:,i])
    # 点
    point.set_data(U2[i],KL_U2[i])

    # タイトル
    ax.set_title(" $ \mu_2=%.1f $ " % U2[i],fontsize=15)
    ax2.set_title(' $ KL(p||q)=%.1f $ ' % KL_U2[i],fontsize=15)

# アニメーション
ani = animation.FuncAnimation(fig, update, interval=1000,frames=U2_n)
# plt.show()
# ani.save("KL_μ.gif", writer="imagemagick")
```
-->
<!--
https://stopspoon.tistory.com/63
Posterior collapse가 발생하는 이유

1. Decoder가 latent z 없이 과거 데이터만으로 충분히 generation이 가능한 경우

2. Ill-posed problem이기 때문에 조건에 맞는 다양한 latent z가 존재할 수 있는 가능성

3. VAE가 local information을 선호하는 경향 (즉, z가 sequence 전체의 속성을 담지 못하고 next-step prediction을 위해서만 사용됨, KL term보다 likelihood term에 집중되는 경향) 

4. 학습 초기에 encoder가 meaningful z를 표현하지 못하기 때문에

5. 가정한 Gaussian prior는 사실 아무 정보가 없음

6. ELBO와 evidence 사이의 gap, true posterior approximation의 실패

 

References

[1] S. R. Bowman et al., Generating Sentences from a Continuous Space, CoNLL 2016
-->
