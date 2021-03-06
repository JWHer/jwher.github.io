---
authors:
- jwher
description: 'Envoy proxy: 대규모 서비스를 위한 L7 프록시'
slug: envoy
tags:
- tech
- kubernetes
- istio
title: Envoy
---

![envoy-proxy](/img/logos/envoy-proxy.svg)
*대규모 서비스를 위한 L7 프록시*  
<!--truncate-->

# 목차
* [Proxy](#proxy)
* [Envoy](#envoy)
* [실습](#실습)

## Proxy

프록시는 다른 네트워크 서비스에 간접적으로 접속할 수 있게 해 주는 애플리케이션을 말합니다.
프록시를 사용해 다음 목적을 달성할 수 있습니다.
* 보안
* IP 우회
* 캐시 사용 [(구글 글로벌 캐시)](https://netmanias.com/ko/post/blog/5457/dns-google-google-global-cache-kt-ott-video-streaming-youtube/google-global-cache-ggc-work-flow-for-youtube-part-1-kt-case)
* 접근 정책 사용
* 사용률 기록

프록시는 크게 세 종류로 나눕니다.
* 포워드 프록시  
일반적인 프록시를 말합니다. 네트워크상에 어느 위치에 있을 수 있고, 
주로 캐싱 목적으로 사용합니다.
* 리버스 프록시  
서버쪽에서 사용되는 프록시로 서버 자원을 보호합니다.
http로 서브되는 원본 서버를 **숨길 수 있고**, TLS 인증을 추가할 수 있습니다.
또한, 로드밸런싱과 캐시 등을 사용할 수 있습니다.
* 오픈 프록시  
IP 우회와 인터넷 속도가 느린 곳에서 캐시를 위해 사용합니다.
  
프록시는 대개 TCP/IP L4 레이어로 작동했습니다.
하지만 MSA에서 URL이나 HTTP header를 이용한 복잡한 라우팅을 요구하며,
L7 라우팅이 필요하게 됬습니다.

## Envoy
L4 라우팅은 IP와 Port 정보로 이루어집니다. 하지만 전체 요청을 읽고 파싱해야 하는 L7는 조금 느릴 수 밖에 없습니다.
Envoy(舊Lyft)는 MSA가 요구하는 L7 라우팅, 네트워크 투명성, 쉬운 문제 파악을 위해 등장했습니다.
이는 다음으로 구현됩니다.

### Out of Process Architecture
모든 Envoy는 각 애플리케이션 마다 함께 실행됩니다.
각 애플리케이션은 로컬호스트 Envoy와 통신하며 네트워크 토폴로지를 인식하지 못하는,
즉 투명성(transparent)를 지원합니다.

이는 기존 proxy에 비해 두가지 이점을 지닙니다.
* 다양한 언어 지원 Java, C++, Go, PHP, Python
* 업그레이드와 배포의 투명화

### L3/L4 필터
플러그형 체인 필터는 서로 다른 TCP/UDP 프록시를 수행할 수 있게 작성되었습니다.
필터는 이미 TCP, UDP, HTTP, Redis, MongoDB, Postgres 와 TLS 인증을 지원하도록 작성됬습니다.

### L7 필터
버퍼링, 속도 제한, 라우팅 등 HTTP 연결 관리 서브시스템 기능을 사용할 수 있습니다.
L7 트래픽에 대한 깊은 가시성으로 MongoDB, DynamoDB 등에 wire 레벨의 가시성을 제공합니다.

### 다양한 프로토콜 지원
HTTP/2, gRPC 프로토콜을 최고 수준으로 지원합니다.  
[RFC7540(HTTP/2)](https://www.ietf.org/rfc/rfc7540.html)  

<br/>

## 실습
Envoy를 실행해 보는 다양한 방법이 있으나, 가장 간단하다고 생각되는 도커 이미지로 해봅시다.
```shell
$ docker pull envoyproxy/envoy-dev:21df5e8676a0f705709f0b3ed90fc2dbbd63cfc5
$ docker run --rm envoyproxy/envoy-dev:21df5e8676a0f705709f0b3ed90fc2dbbd63cfc5 --version

envoy  version: 21df5e8676a0f705709f0b3ed90fc2dbbd63cfc5/1.20.0-dev/Clean/RELEASE/BoringSSL

$ docker run --rm -d -p 10000:10000 envoyproxy/envoy-distroless-dev:21df5e8676a0f705709f0b3ed90fc2dbbd63cfc5
```

http://localhost:10000 으로 접속하면 envoy 공식 홈페이지로 라우팅 됩니다.
이는 `envoy.yaml` 로 설정할 수 있습니다.
    
<br/>

## Tips

Istio는 envoy의 강력한 프록시 기능을 이용해 쿠버네티스에 프로그램 가능한 애플리케이션 인식 레이어를 구축합니다.

위의 실습을 해보면, envoy 설정파일을 수정해도 실행시간에 동적으로 라우팅이 변경되지 않는 걸 알 수 있습니다.
Istio는 설정이 바뀌면 sidecar로 inject 된 envoy 컨테이너를 재생성하는 것이 아닌가 추측해 봅니다.  
[Istio](https://jwher.github.io/istio)  

(Nginx 글을 언젠가 작성하겠습니다)  

### Reference  

[[위키]프록시 서버](https://ko.wikipedia.org/wiki/%ED%94%84%EB%A1%9D%EC%8B%9C_%EC%84%9C%EB%B2%84)  
[[공식]Envoy Proxy](https://www.envoyproxy.io/)  
[[조대협]Envoy Proxy](https://bcho.tistory.com/1253)  
[[공식]Install envoy using docker](https://www.envoyproxy.io/docs/envoy/latest/start/install#install-envoy-using-docker)  


<!-- update log -->
<!--
본문에 추가할 내용을 적는다.
구글캐시서버 https://www.clien.net/service/board/lecture/12089144

https://gruuuuu.github.io/cloud/envoy-proxy/
https://zetawiki.com/wiki/Envoy_%ED%94%84%EB%A1%9D%EC%8B%9C
https://www.popit.kr/%EB%82%98%EB%A7%8C-%EB%AA%A8%EB%A5%B4%EA%B3%A0-%EC%9E%88%EB%8D%98-http2/
-->
