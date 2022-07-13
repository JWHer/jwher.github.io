---
authors:
- jwher
description: 다양한 멱급수
slug: power-series
tags:
- tech
title: Power series
draft: true
---

![power series](power-series-formula.png)
*Power series*

<!--truncate-->


$$
I = \int_0^{2\pi} \sin(x)\,dx
$$

Let $f\colon[a,b]\to\R$ be Riemann integrable. Let $F\colon[a,b]\to\R$ be
$F(x)=\int_{a}^{x} f(t)\,dt$. Then $F$ is continuous, and at all $x$ such that
$f$ is continuous at $x$, $F$ is differentiable at $x$ with $F'(x)=f(x)$.

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
https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=mindo1103&logNo=90103327556
https://www.jezzamon.com/fourier/
https://studyfield.tistory.com/742

<!--
https://web.archive.org/web/20060821030321/http://f-cpu.seul.org/whygee/dct_fc0/dct_fc0.html
-->