---
authors:
- jwher
description: UUID 범용 고유 식별자
slug: uuid
tags:
- tech
- linux
- virtualbox
- short
title: Uuid
---

<!--truncate-->

<!-- image repository: https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/ -->

![Alt](https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/ticket.png "ticket")  
*범용 고유 식별자*  

# 목차
* [범용 고유 식별자](#범용-고유-식별자)
* [사용하는 언어와 시스템](#사용하는-언어와-시스템)

<br/>

## 범용 고유 식별자
   
*60D5892F-de60-421a-be12-07da5eafb067 이렇게 생긴 문자열을 본적 있나요?*

네트워크, 특히 분산 컴퓨팅에서 서로를 구분하기 위한 **이름**은 매우 중요합니다.
각각의 객체에 고유한 이름을 주려면 어떻게 해야 할까요?

> 음... 해쉬값을 주면 되나요?

얼핏 생각나는 고유한 이름으로 해쉬가 있습니다.
하지만 인터페이스를 통해 다른 시스템과 통신할 때 어떤 **해쉬**를 계산해 알려줄까요?

다행히 정의된 표준이 있습니다!

범용 고유 식별자 UUID: Universally Unique IDentifier는 [개방 소프트웨어 재단](https://ko.wikipedia.org/wiki/%EA%B0%9C%EB%B0%A9_%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%EC%9E%AC%EB%8B%A8)
에서 분산 컴퓨팅 환경의 일부로 만든 식별자 표준입니다.
36개의 16진수 문자를 8-4-4-4-12 로 만들고, 각 그룹이 의미하는 내용은 다음과 같습니다.

|                이름                | 길이 (hex) |                            내용                            |
|:----------------------------------|:----------------|:----------------------------------------------------------|
| time_low                           | 8                | 시간의 low 32비트를 부여하는 정수                          |
| time_mid                           | 4                | 시간의 middle 16비트를 부여하는 정수                       |
| time_hi_and_version                | 4                | 최상위 비트에서 4비트 "version", 그리고 시간의 high 12비트 |
| clock_seq_hi_and_res clock_seq_low | 4                | 최상위 비트에서 1-3비트, 그리고 13-15비트 클럭 시퀀스      |
| node                               | 12               | 48비트 노드 id                                             |

하이픈을 제외한 16진수 32개를 조합하므로 2^4*32=2^128  
=340,282,366,920,938,463,463,374,607,431,768,211,456개의 UUID를 만들 수 있습니다!

<br/>

## 사용하는 언어와 시스템

저는 항상 컴퓨터가 언어와 객체를 어떻게 구분하는가 궁금했는데요,
이렇게 많은 언어와 시스템이 UUID를 사용합니다!

### 언어
* 액션스크립트
* C
* C++
* 얼랭(Erlang)
* 해스켈(Haskell)
* 자바(Java)
* 자바스크립트(JavaScript)
* 펄(Perl)
* PHP
* 파이썬(Python)
* 루비(Ruby)
  
### OS
* OS X
* 유닉스(Unix)
* 유닉스 기반 OS (linux...)

### 데이터베이스
* MySQL
* 오라클 데이터베이스(Oracle Database)
* PostgreSQL
  
### 프레임워크
* 닷넷 프레임워크(.NET)
* Openstack

<details>
<summary>처음보는것들</summary>
<div markdown="1">

### 위키백과에 나오지만...
아시는 분들은 알려주시면 감사하겠습니다!

* 아파치 Solr
* Caché 오브젝트스크립트
* CakePHP
* 코코아/카본 (OS X)
* 코드기어 라드 스튜디오 (델파이/C++빌더)
* 코드퓨전
* 커먼 리스프(lisp)
* CouchDB
* D
* 에펠
* 파이어버드 서버
* 프리 파스칼 & 라자루스 IDE
* Haxe
* KohanaPHP
* Lasso
* 루아
* OCaml
* 프로그레스 오픈에지 ABL
* 레볼루션/RunRev
* SAP 비즈니스오브젝트 데이터 서비스
* Tcl

</div>
</details>

<br/>

## Tips

이 글은 한국어 위키백과를 많이 참고해 작성했습니다.

### Reference

[[위키]범용 고유 식별자](https://ko.wikipedia.org/wiki/%EB%B2%94%EC%9A%A9_%EA%B3%A0%EC%9C%A0_%EC%8B%9D%EB%B3%84%EC%9E%90)


<!-- update log -->
<!--
본문에 추가할 내용을 적는다.
-->