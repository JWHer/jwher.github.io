---
authors:
- jwher
description: 다양한 멱급수
slug: power-series
tags:
- math
- calculus
title: Power series
draft: true
---

![power series](power-series-formula.png)
*Power series*

<!--truncate-->

## 급수
**급수**(級數)는 수열의 모든 항을 더한 값입니다.
여기에서는 무한한 항의 합인 **무한급수** 에 대해 다룹니다.

## 멱급수
**멱급수** 또는 **거듭제곱 급수**(Power series)는 주어진 변수를 거듭제곱한 항들의 무한급수이자,
중심이 같은 멱함수를 항으로 하는 무한급수입니다.

실수체 또는 복소수체 $\mathbb{K} \in \{\mathbb{R,C}\}$에서 중심 $x_0 \in \mathbb{K}$의 멱급수는 다음과 같이 정의됩니다.

$$
\huge
\sum_{n=0}^{\infty}{\color{red}a_n}(x-{\color{blue} x_0})^n
$$

자세히 살펴보면 등차수열$\color{red}a_n$과 등비수열$(x-{\color{blue} x_0})^n$로 이루어져 있습니다.
이 멱급수가 수렴하게 만드는 $x \in \mathbb{K}$의 집합을 멱급수의 수렴영역(domain of convergence)이라고 합니다.
실수 영역에선 **수렴구간**(interval of convergence)
복소수 영역에선 **수렴원판**(disc of convergence)라고 구분하기도 합니다.

## 테일러 급수
**테일러 급수**(Taylor series) 또는 **테일러 전개**(Taylor expansion)는 도함수들의 한 점에서 계산된 항의 무한합으로 해석함수를 나타냅니다.
복잡한 함수를 다루기 쉬운 다항함수로 바꿔줌으로써, 정적분의 값을 근사적으로 구할 수 있습니다.

매끄러운 함수(Smooth function) $f:\mathbb{R} \rightarrow \mathbb{R}$ 및 실수 $a \in \mathbb{R}$
(또는, 복소수계의 정칙함수)이 주어졌을 때,
$f$의 테일러 급수는 다음과 같이 정의됩니다.

$$
\huge
f(x)=\sum_{n=0}^{\infty}{\color{red}{f^{(n)}(x_0) \over n!}}(x-{\color{blue} x_0})^n
$$

여기에서 $\color{red}{f^{(n)}(x_0)}$는 $f$의 $x_0$에서 $n$계 도함수를 말합니다.
특히 0계 도함수는 원래 함수 자신입니다.

테일러 급수는 오차를 가지고 있습니다.

$$
\huge
\sum_{\color{green}k=0}^{\color{green}n}{f^{(k)}(x_0) \over k!}(x-x_0)^k + \color{green}{R_{n+1}(x)}
$$

마지막 항인 $\color{green}{R_{n+1}(x)}$dmf $f$의 **나머지 항** 또는 **절단오차**라고 합니다.
$[x_0,x]$ 또는 $[x,x_0]$에 속하는 적당한 실수 b에 대해서 다음과 같이 표현됩니다.

$$
\huge
{R_{n+1}(x)} = {f^{\color{green}(n+1)}({\color{green}b}) \over \color{green}(n+1)!}(x-x_0)^{\color{green}n+1}
$$

이 오차가 0으로 원래 함수로 수렴하는 경우 **해석 함수**라고 합니다.

### 테일러 전개

다항식이 아닌 함수를 테일러 급수로 만들어 봅시다.

$$
f(x)=e^x
$$

$e^x$를 무한개의 항을 가진 다항식으로 가정하면,
$$
e^x=a_0+a_1x+a_2x+a_3x+a_4x+...
$$


## 매클로린 급수
$x_0=0$일 때의 테일러 급수를 **매클로린 급수**라고 합니다.

$$
\huge
f(x)=\sum_{n=0}^{\infty}{f^{(n)}({\color{green} 0}) \over n!}x^n
$$

모든 다항식에서 매클로린 급수는 다항식 자기 자신이 됩니다.

## 이항급수

복소수 $a \in \mathbb C$가 주어졌을 때, 이항급수는

## 실생활
조수주기
jpeg(joint photographic experts group), mpeg(moving picture experts group)
DCT(descrete cosine transform), IDCT

양자화(quantization)
색변환(RGB->YCbCr)
block splitting (nxn -> 8x8*m)
DCT
양자화 테이블
zigzag scanning
run-length encoding
huffman coding

## References
[[wiki]멱급수](https://ko.wikipedia.org/wiki/멱급수)  
[[wiki]테일러 급수](https://ko.wikipedia.org/wiki/테일러_급수)  
[[wiki]매클로린 급수](https://ko.wikipedia.org/wiki/매클로린_급수)  
[[wiki]이항 급수](https://ko.wikipedia.org/wiki/이항_급수)  
https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=mindo1103&logNo=90103327556
https://www.jezzamon.com/fourier/
https://studyfield.tistory.com/742

<!--
https://web.archive.org/web/20060821030321/http://f-cpu.seul.org/whygee/dct_fc0/dct_fc0.html
-->