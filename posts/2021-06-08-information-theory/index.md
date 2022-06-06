---
authors:
- jwher
description: 정보 이론
slug: information-theory
tags:
- math
- ml
title: Information Theory
---

<!--truncate-->

<!-- image repository: https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/ -->
![Alt](https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/card.jpg "card")  
*정보 이론*  

<details>
<summary> TMI </summary>
<div markdown="1">

이 글은 이전에 작성한 제 포스트를 재구성했습니다.(~~가장 인기있던 포스트~~)  
네이버에 정보이론을 검색해보니 EBS에서 쉽게 설명한 자료가 있네요.  
[[중2 확률의 계산]정보이론의 아버지, 클로드 섀넌](https://blog.naver.com/ebsmath1/222051905808)
</div>
</details>

# 목차
* 엔트로피란?
* 엔트로피의 계산
* 결정트리에서
* 통신에서

## 엔트로피란?  

> 플레잉 카드(playing card), 혹은 트럼프(trump)는 스페이드, 다이아몬드, 하트, 클로버 각각 13장씩,
> 한벌에 총 52장의 카드로 이루어졌다.  
> 
> 한 세트의 잘 섞인 플레잉 카드가 있다고 하자  
> 
> 당신은 스페이드 에이스 한 장을 가지고 있다. 다음에 한 장을 뽑는다면 어떤 카드인지 예측할 수 있는가?  
> 반대로, 스페이드 에이스를 제외한 51장의 카드를 가지고 있다. 다음에 뽑을 한 장이 어떤 카드인지 예측할 수 있는가?

정보 이론은 정보(데이터)를 정량화 하기 위해 만들어졌다.
앞선 예제에서 보듯, 많은 정보를 알수록 새롭게 알 수 있는 정보가 적어진다.
즉 높은 확률 또는 자주 일어나는 일일수록 적은 정보로 표현 가능하다.
> 동음이의어도 많은 사전 정보(=문맥)을 가지면 특정 단어로 유추 가능하다  

임의의 변수에 대한 **엔트로피**는 변수에서 일어날 수 있는 가능한 정보, 사건, 불확실성의 평균값을 말한다.
(the entropy of a random variable is the average level of "information", "surprise", or "uncertainty" inherent in the variable's possible outcomes.)  

이 글에서 다루는 엔트로피는 정보 엔트로피로 저장 또는 통신에 사용되는 평균적인 비트 수로 표현된다.

<!-- 열역학을 배웠거나, 우주에 관심이 많은 사람은 흔히 엔트로피가 증가한다 -->

정보 엔트로피는 벨 연구소의 클로드 섀넌이 발표한 논문에서 도입된 개념이다.
따라서 정보 엔트로피를 Shannon entropy, S로 표시하기도 한다.  
![Alt](https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/information-theory-claudeshannon.jpg "claudeshannon")  
*Claude Shannon, 1948. A Mathematical Theory of Communication*

<br/>

## 엔트로피의 계산

다음과 같은 원소 집합을 가정하자.

    M = {m1, m2, ... , mn}

여기에서 특정한 원소 mi의 발생 확률을 p(mi)라고 하면 예상되는 정보량 I(M)은

    I(mi) = log2(1/p(mi)) = -log2(p(mi))

이다. [증명](https://en.wikipedia.org/wiki/Entropy_(information_theory)#Characterization)  
확률분포의 역수를 취하는 형태로, 낮은 확률일 수록 높은 정보량을 가짐을 보여준다.  

> 알파벳 집합 M = {a, b, ... , z} 에서 특정한 알파벳 mi가 나올 정보량은  
> I(mi) = log2(1/1/26) = log2(26) = 4.7004...  
> 즉, 5개의 비트로 모든 알파멧의 등장 확률을 표현할 수 있다. (2^5=32>26)

전체 집합이 가지는 엔트로피 E(M)은

    E(M) = sum(p(mi)*I(mi)) = sum(-p(mi)*log2(p(mi)))

로 (일어날 확률)*(정보량)의 합이다.

>![Alt](https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/dice.jpg "dice")  
> 주사위 집합 M = {1, 2, ... , 6} 에서 상황별 엔트로피를 살펴보자  
> 
> 주사위 각 숫자에 한명씩 배팅한 경우  
>   M = {1, 2, 3, 4, 5, 6} => p(mi)=1/6  
>   E(M) = 6*(-1/6 * log2(1/6)) = 2.5850...
> 
> 주사위 1에 배팅한 경우(1 or 나머지)  
>   M = {H(1), L(2, 3, 4, 5, 6)} => p(H) = 1/6, p(L) = 5/6  
>   E(M) = (-1/6 * log2(1/6)) + (-5/6 * log2(5/6)) = 0.1957...
> 
> 짝수에 배팅한 경우(2,4,6 or 1,3,5)  
>   M = {H(2, 4, 6), L(1, 3, 5)} => p(H) = 1/2, p(L) = 1/2  
>   E(M) = (-1/2 * log2(1/2)) + (-1/2 * log2(1/2)) = 1
> 
> 1~6중 하나라도 나오는 경우  
>   M = {H(1, 2, 3, 4, 5, 6)} => P(H) = 6/6  
>   E(M) = (-1*log2(1)) = 0

## 결정트리에서

고전적인 인공지능 기법에서 결정 트리(Decision Tree)의 탐색 순서에도 사용된다.  
결정 트리의 성능은 tree node 조회 횟수외 직결되기 때문에,
정보량이 가장 적은(가장 확실한 결과) node를 우선적으로 선택해야 할 것이다.  
(추후 작성)

## 통신에서

정보이론은 통신에서 먼저 연구된 분야인 만큼 전자 통신에서 압축, 오류 감지에도 유용하게 사용된다.    

데이터링크 계층에서 사용되는 해밍 코드, BCH 등 checksum bit 또한 정보이론을 기반으로 설계되었다.  
(추후 작성)

<!-- 
해밍 BCH 리드뮬러  
화성탐사선 매리너 9호(mariner9) 리드 뮬러 부호  
공개키 암호화  
https://horizon.kias.re.kr/7937/ 
-->

### Reference  
[[위키]정보 이론](https://ko.wikipedia.org/wiki/%EC%A0%95%EB%B3%B4_%EC%9D%B4%EB%A1%A0)



<!-- update log -->
<!--
본문에 추가할 내용을 적는다.
-->
