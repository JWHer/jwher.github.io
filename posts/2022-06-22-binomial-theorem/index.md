---
authors:
- jwher
description: Binomial Theorem
slug: binomial-theorem
tags:
- math
title: 이항정리 - π값을 구하는 법
---

![pi](pi.svg)  
*이항정리 - π값을 구하는 법*
<!--truncate-->

##  $\pi$

여러분은 $\pi$값을 알고 계신가요?  

$\pi$는 원의 반지름과 둘레의 비율을 나타내는 값으로,
3.14 언저리의 값이라는 것을 알고 계실겁니다.

<br/><br/>

> $\pi$ Day  
>
> ![pizza-to-pi](pizza_to_pi.gif)  
> [[트위터]파이데이](https://twitter.com/AlexKontorovich/status/1236008125645434885?ref_src=twsrc%5Etfw)

동영상에서 보듯이, 피자의 둘레를 펴 지름에 놓으면 3판보다 조금 더 큰 것을 알 수 있습니다.

<br/><br/>

그렇다면 파이값을 어떻게 구할 수 있을까요?  
고대인들도 $π$값을 알고 있었습니다.

![hexagon-inscribed-in-circle](hexagon-inscribed-in-circle.svg)

한 변의 길이가 1인 육각형의 둘레는 6입니다.
육각형에 외접원을 그리면, 육각형보다 큰 원을 그릴 수 있습니다.  
같은 지름을 공유하는 원의 둘레가 더 크므로, 다음 부등식을 세울 수 있습니다.

$$
(원의 둘레)=(지름)*π=2π > 6
$$
양변을 2로 나누면,

$$
π > 3
$$

$\pi$ 값은 3보다 크다는걸 알았습니다!

<br/><br/>

![circumscribed-square](circumscribed-square.svg)

한 변의 길이가 2인 사각형은 둘레가 8로, 이전에 그렸던 도형보다 큽니다.  
사각형의 둘레가 더 크므로, 다음 부등식을 세울 수 있습니다.

$$
2π < 8
$$
양변을 2로 나누면,

$$
π < 4
$$

$\pi$는 4보다 작은 값임을 알아냈습니다!

이렇게 다각형을 이용해 근사하는 방법은 2200년전, BC 250년에 아르키메데스가 계산한 방법으로,
내접, 외접한 다각형의 변을 늘려가며 더 정확한 근사치를 구할 수 있습니다.
이 방법은 1000년간 $\pi$ 값을 구하는 방법으로 사용되었습니다.

$$
{223 \over 71} < \pi < {22 \over 7}
$$
$$
3.1408<π<3.1429
$$

사실 이정도만 되어도 실용적인 정확도를 넘어섭니다.  
1850년, William Shanks는 15년간 $\pi$값을 계산해 707자리까지 계산합니다.
하지만 527자리부터 오류가 있었죠. 이걸 계산하는데 사용한 사간은 아무것도 아닌 것에 낭비된 것 처럼 보입니다.

이 외에도 $\pi$값을 구하는 방법은 [Monte Carlo Simulation](https://en.wikipedia.org/wiki/Monte_Carlo_method),
[Buffon’s Needles](https://en.wikipedia.org/wiki/Buffon%27s_needle_problem) 등 방법이 있지만,
지금 다룰 진짜 주제는 $π$가 아니니 넘어가겠습니다.

## 적분의 등장

<!-- 아이작 뉴턴, 고드프리트 빌헬름 라이프니츠 -->
뉴턴과 라이프니츠는 17세기 미적분학의 기본정리를 완성합니다.

* 미분과 적분이 서로 역연산관계에 있습니다.

* 정적분은 부정적분의 차로 구할 수 있습니다.

정적분 값을 계산할수 있게 되면서 $\pi$ 값을 구하는 방법은 변하게 됩니다.  
이전까지는 $(원의 둘레)=2*\pi$를 이용했다면,
이제부터는 $(원의 넓이)=r^2*\pi$을 이용하게 됩니다.

## 원의 넓이1
좌표계에서 단위원의 방정식 $x^2+y^2=1$을 나타내면 다음과 같습니다

![circle](circle.svg)

적분가능한 함수 $y=(1-x^2)^{1 \over 2}$로 나타내면

![circle-transpos](half-circle.svg)

어떻게 적분할 수 있을까요?
안타깝게도, 지금 알고있는 지식으로는 적분할수 없습니다.

<details>
<summary>그래도 궁금하신 분을 위해</summary>
이 식의 부정적분은 다음과 같습니다.

$$
\int \sqrt{(1-x^2)}  = {1\over2}(1-x^2)^{1\over2}x+sin(x)^{-1}
$$
</details>

## 이항정리

위의 식을 적분하려면, **이항정리**와 **이항계수**를 알아야 합니다.

**이항식**은, 두 단항식의 합인 다항식을 말합니다.
$$
ax^m-bx^n
$$

**이항정리**는, 이항식의 거듭제곱 $(x+y)^n$을 단항식$ax^by^c$들의 합으로 전개하는 정리입니다.

$$
(x+y)^n=\sum_{k=0}^n{\begin{pmatrix} n \\ k \end{pmatrix}}x^{n-k}y^k=x^n+nx^{n-1}y+{n(n-1) \over 2}x^{n-1}y^2+ ... + ax^by^c + ... + y^n
$$

여기에서 $b+c=n$이고, 단항식의 계수$a$는 **이항계수**라고 불리고
$a={\begin{pmatrix} n\\b \end{pmatrix}}={\begin{pmatrix} n\\c \end{pmatrix}}$입니다.  
*n choose b 또는 n개에서 b개를 고르는 조합으로 읽습니다*

<br/>

### 이항계수(binomial coefficient)

직접 **이항식** $(x+1)$의 거듭제곱을 계산해 볼까요?  
$$
\begin{aligned}
&(1+x)^0 = 1 \\
&(1+x)^1 = 1+x \\
&(1+x)^2 = 1+2x+x^2 \\
&(1+x)^3 = 1+3x+3x^2+x^3 \\
&(1+x)^4 = 1+4x+6x^2+4x^3+x^4 \\
\end{aligned}
$$

눈치 빠르신 분이라면 $(1+x)^n$이 어떤 형태인지 추측하셨을 겁니다.

위에서 설명했듯이, n항식의 k항의 계수는 조합 ${\begin{pmatrix} n\\k \end{pmatrix}} = {n! \over k!(n-k)!}$
또는, ${Π_{i=0}^{k-1}(n-i) \over k!}$와 같습니다.

<br/>

조합수는 pascal's triangle에서 찾을 수 있습니다.
$$
\begin{array}{c}
n=0 &1 \\
n=1 &1 \quad 1 \\
n=2 &1 \quad 2 \quad 1 \\
n=3 &1 \quad 3 \quad 3 \quad 1 \\
n=4 &1 \quad 4 \quad 6 \quad 4 \quad 1 \\
\end{array}
$$

**이항계수**를 구할때, 대수학으로 계산하는 대신 조합수를 사용해 편리하게 계산할 수 있습니다.

## 일반화된 이항정리

이항식을 거듭제곱하는 지수를 임의의 복소수 $\alpha \in \mathbb{C}$ 까지 확장할 수 있습니다. 일반화된 이항 정리에선 전개가 [무한급수](/posts/power-series)가 됩니다.

*natural numbers($\mathbb N$) - integers($\mathbb Z$) - rational($\mathbb Q$) - real($\mathbb R$) - complex($\mathbb C$)*

### 음이향계수

음수일때 계승! 은 정의되지 않지만, 다음과 같이 계산합시다.
$$
\begin{aligned}
&-1! = -1\times-2\times-3\times-4...\\
&-2! = \quad\quad-2\times-3\times-4...\\
&-3! = \quad\quad\quad\quad-3\times-4...\\
\end{aligned}
$$

-1차식의 0항의 계수는
${\begin{pmatrix} -1 \\ 0 \end{pmatrix}} = {-1! \over 0!-1!} = 1$  
-1차식의 1항의 계수는
${\begin{pmatrix} -1 \\ 1 \end{pmatrix}} = {-1! \over 1!-2!} = -1$  
-1차식의 2항의 계수는
${\begin{pmatrix} -1 \\ 2 \end{pmatrix}} = {-1! \over 2!-3!} = 1$  
...

<br/>

-2차식의 0항의 계수는
${\begin{pmatrix} -2 \\ 0 \end{pmatrix}} = {-2! \over 0!-2!} = 1$  
-2차식의 1항의 계수는
${\begin{pmatrix} -2 \\ 1 \end{pmatrix}} = {-2! \over 1!-3!} = -2$  
-2차식의 2항의 계수는
${\begin{pmatrix} -2 \\ 2 \end{pmatrix}} = {-2! \over 2!-4!} = 3$  
...

<br/>

위의 계산을 일반화하면
$$
\begin{aligned}
{\begin{pmatrix} -r \\ k \end{pmatrix}}&={(-r)(-r-1)...(-r-k+1) \over k!} \\
&=(-1)^k{(r)(r+1)...(r+k-1) \over k!} \\
&=(-1)^k{\begin{pmatrix} r+k-1 \\ k \end{pmatrix}}
\end{aligned}
$$

음이항계수를 파스칼의 삼각형에 이어서 그려볼까요?  

$$
\begin{array}{c}
n=-4&\qquad\qquad\qquad\qquad\qquad\qquad\qquad 1 \quad -4 ...\\
n=-3&\qquad\qquad\qquad\qquad\qquad\qquad\qquad 1 \quad -3 \quad\quad 6 ...\\
n=-2&\qquad\qquad\qquad\qquad\qquad\qquad\qquad 1 \quad -2 \quad\quad 3 \quad -4 ...\\
n=-1&\qquad\qquad\qquad\qquad\qquad\qquad\quad 1 \quad -1 \quad\quad 1 \quad -1 \quad\quad 1 ...\\
n=0 &1 \\
n=1 &1 \qquad 1 \\
n=2 &1 \qquad 2 \qquad 1 \\
n=3 &1 \qquad 3 \qquad 3 \qquad 1 \\
n=4 &1 \qquad 4 \qquad 6 \qquad 4 \qquad 1 \\
\end{array}\\
$$

### 분수

이항계수는 분수일 때도 정의할 수 있습니다.

$1\over2$에서 이항계수를 살펴봅시다.

$1\over2$차식의 0항의 계수는
${\begin{pmatrix} 1\over2 \\ 0 \end{pmatrix}} = {{1\over2}! \over 0!{1\over2}!} = 1$  
$1\over2$차식의 1항의 계수는
${\begin{pmatrix} 1\over2 \\ 1 \end{pmatrix}} = {{1\over2}! \over 1!-{1\over2}!} = {1\over2}$  
$1\over2$차식의 2항의 계수는
${\begin{pmatrix} 1\over2 \\ 2 \end{pmatrix}} = {{1\over2}! \over 2!-{3\over2}!} = {-{1\over4} \over 2!} = -{1\over8}$  
...

## 원의 넓이2

이항식의 분수 거듭제곱에서 이항계수를 구하는 법을 알았으니,
$(1-x^2)^{1 \over 2}$식을 전개할 수 있습니다!

편의를 위해 $-x^2=t$로 놓으면,
$$
(1+t)^{1 \over 2}=1+{1\over 2}t-{1\over 8}t^2+{1\over 16}t^3 - ...
$$
다시 x에 대해서로 바꿔줍시다
$$
(1-x^2)^{1 \over 2}=1-{1\over 2}x^2-{1\over 8}x^4-{1\over 16}x^6 - ...
$$

정적분을 구하면

![circle-transpos-polynomial-integral](circle-transpos-polynomial-integral.png)

이 값은 무한히 전개되므로 구할 수 없습니다.
하지만 원의 넓이 2π의 1/4, π/2를 나타낸다는 것을 알고 있습니다.

## 원의 넓이3
정적분의 범위를 [0, 1/2]로 설정하면
값을 더 빠르게 구할 수 있습니다.

![half-of-quater](half-of-quarter.png)

피타고라스와 삼각함수 덕에 이 넓이는 쉽게 알 수 있습니다.

밑변의 길이가 1/2이고 빗변이 1인 삼각형은 사이각이 60도 입니다.
따라서, 이 부분의 넓이는 원의 넓이 π의 12분의 1인 원뿔과
밑변이 1/2, 높이가 3^(1/2)/2인 삼격형 넓이의 합입니다.

> π/12 + 3^(1/2)/8

이제 다항식의 앞부분부터 계산해 나가면 π 값을 구할 수 있습니다.
아르키메데스의 방법과 정확도를 비교해보면,
4천조각형을 계산할 때와 뉴턴 급수의 50개의 항을 계산했을때가 같습니다.

## References
[Calculating Pi](https://medium.com/swlh/calculating-pi-73ece2d3c9a9)  
[π를 계산하는 특별한 방법](https://www.youtube.com/watch?v=ZWwdAidVsZ8)  
