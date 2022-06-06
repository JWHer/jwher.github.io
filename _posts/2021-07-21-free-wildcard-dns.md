---
layout: post

title: "무료 와일드카드 DNS"
thumbnail-img: /assets/img/joker.jpg
categories:
- dev  
- short  
excerpt: |
  개발과 테스트에 필요한 사이트
date: 2021-07-21 11:50:00

aside: true
feature_text: |
  # Wildcard DNS
feature_image: "/assets/img/bamboos.jpg"
comments: true
---

<!-- more -->

<p align="center">
<img src="/assets/img/joker.jpg" style="height: 40vh; object-fit:cover;"/>
</p>

*무료 와일드카드 DNS*  

# 목차
* [소개](#소개)

## 소개

개발 및 테스트할 때는 무료 와일드 카드 DNS 테스트 사이트 중 하나를 사용하도록 기본 도메인을 변경합니다.

* [nip.io](https://nip.io)
* [xip.io](http://xip.io/) *(21.07.21작동하지 않음)*
* [sslip.io](https://sslip.io/)

### 사용법

단순히 포함된 ip로 연결해 줍니다.
```http request
https://192.168.1.30.nip.io

http://127.0.0.1.nip.io:8080
```
   
<br/>

## Tips

이 블로그에서 가장 짧은 글이 될 것 같습니다.  
저 스스로 정확한 사용처를 이해하고 있는지 의문입니다.  
~~알려주세요~~

### Reference  

[[GKE]와일드 카드 DNS의 대안 선택](https://cloud.google.com/run/docs/gke/default-domain?hl=ko#choose_an_alternative_for_wildcard_dns)

## - JWHer  
좋은 글을 쓰고 싶습니다.

<!-- update log -->
<!--
본문에 추가할 내용을 적는다.
-->