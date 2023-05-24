---
authors:
- jwher
description: 최대공약수와 최소공배수를 구하는 방법
slug: euclidean-algorithm
tags:
- math
- tech
title: 유클리드 호제법
---

[![euclid](/img/euclid.jpeg)](/posts/euclidean-algorithm)  
*최대공약수와 최소공배수를 구하는 방법*  

<!--truncate-->

유클리드 호제법은 2개의 자연수의 최대공약수를 구하는 알고리즘 중 하나입니다.
호제법互除法이라는 한자어에서 볼 수 있듯, 몫과 나머지를 서로(互) 나누어(除) 최대공약수를 구하는 알고리즘 입니다.

<br/>
<br/>
<br/>

### 정리

$a,b\in {\mathbb  {Z}}$이고, 
$a$를 $b$로 나눈 나머지가 $r$이라고 하자.
(여기서 $a\geq b$이고, $r$은 $0\leq r \lt b$인 정수.)

※ 피제수*a*와 제수*b*는 정수*Z*이고
피제수*a*는 제수*b*보다 크거나 같고, 나머지*r*는 0보다 크거나 같고 제수*b*보다 작다.

$a$와 $b$의 최대공약수를 $\left(a,b\right)$ 라고 하면, 다음이 성립한다.

$$
\left(a,b\right)=\left(b,r\right).
$$

※ 피제수*a* 제수*b*의 최대공약수는 제수*b*와 나머지*r*의 최대공약수와 같다.

<br/>
<br/>
<br/>

### 증명

$a,b\in {\mathbb  {Z}}$이고, $a\geq b$라고 하자.

그러면, $a=bq+ra=bq+r$을 만족하는 유일한 정수 $q,r$이 존재한다.
이때, $0\leq r \lt b$이다.

$\left(a,b\right)=d,a=d\alpha ,b=d\beta$라고 하자.
즉, $\alpha$와 $\beta$는 서로소이다.
$$
\begin{aligned}
&a=bq+r. \newline
&\Rightarrow d\alpha =d\beta q+r \newline
&\Rightarrow d|r.
\end{aligned}
$$
(즉, $r$은 $d$의 배수)

이제, $r=d\rho$.라고 하자.
여기서 $\beta$와 $\rho$가 서로소라면, $b(= d\beta)$와 $r(=d\rho)$의 최대 공약수도 $d$가 된다.

만약 $\left(\beta ,\rho \right)=d'>1$ (서로소가 아닌 수, 즉 다른 공약수를 가지는 수)라면,
$\beta =d'\beta ',\rho =d'\rho'$으로 두었을 때,
$$
\begin{aligned}
&a=bq+r. \newline
&\Rightarrow d\alpha =d\beta q+d\rho =dd'\beta 'q+dd'\rho '=dd'\left(\beta 'q+\rho '\right). \newline
&\Rightarrow \alpha =d'\left(\beta 'q+\rho '\right).
\end{aligned}
$$
이 되므로, $d'|\alpha$ 이다. (즉, $\alpha$는 $d'$의 배수)

즉, $d'|\alpha ,d'|\beta$가 되어 $\alpha$ 와 $\beta$는 서로소라는 것에 모순이다.
이는 $\left(\beta ,\rho \right)=d'>1$ 라는 가정에서 나타나는 모순이므로 $\left(\beta ,\rho \right)=1$ (즉, β와 p는 서로소)이다.

따라서 곧 $\left(b,r\right)=d$라는 것이다.

<br/>

※ *a*와 *b*의 최대공약수 *d*가 있다고 할때 dα = dβ + r이고, (α,β)=1 서로소이다.
따라서 *r*도 *d*의 배수여야 한다. *r=dρ*

이때 (β,ρ)>1 즉 다른 나누어지는 수 *d'*가 있다면 α,β가 서로소라는 가정에 모순이기에 (β,ρ)=1 서로소이다.
따라서 (dβ,dρ)=(b,r)=d=(a,b)이다.

<br/>
<br/>
<br/>

### 구현

그렇다면 프로그래밍 언어로 어떻게 구현할 수 있을까요?
먼저 큰 숫자의 최대공약수를 구하는 예제를 봅시다.
```
        a ＝ b × q   ＋ r
    78696 ＝ 19332×4 ＋ 1368
    19332 ＝ 1368×14 ＋ 180
     1368 ＝ 180×7 ＋ 108
      180 ＝ 108×1 ＋ 72
      108 ＝ 72×1 ＋ 36
       72 ＝ 36×2 ＋ 0
```

규칙을 찾으셨나요?

*a*와 *b*의 최대공약수는 상대적으로 작은 *b*와 *r*의 최대공약수와 같기 때문에
*b*와 *r*의 최대공약수를 찾을 때까지(나머지*r*이 0이 될때까지) 반복합니다.

나머지가 0으로 떨어질때까지 `gcd`를 재귀적으로 호출하는 방법으로 구현해봅시다!

```c++
// c/c++
int gcd(int a, int b) {
    return b ? gcd(b, a%b) : a;
}
```

유클리드 호제법을 bitwise shift를 사용해 더 빨리 계산하는 binary GCD 알고리즘도 있습니다!

<br/>
<br/>
<br/>

## References
[[wiki] 유클리드 호제법](https://ko.wikipedia.org/wiki/유클리드_호제법)
