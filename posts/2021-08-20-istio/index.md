---
authors:
- jwher
description: 'Istio: 서비스 메시'
slug: istio
tags:
- tech
- kubernetes
- docker
- istio
title: Istio
---

![istio](/img/logos/istio.svg)
*Istio 서비스 메시*  
<!--truncate-->

# 목차
* [서비스 메시](#서비스-메시)
* [Istio](#istio)
* [Envoy](#envoy)

## 서비스 메시

최신 애플리케이션은 분산된 [마이크로서비스](https://microservices.io/) 모음으로 설계되고,
각 마이크로서비스 모음은 나눌 수 있는(discrete) 비즈니스 기능을 수행합니다.(MSA)
**서비스 메시**는 MSA를 구현하는데 사용하는 소프트웨어와 이를 생성할 때 사용하는 보안,
네트워크 도메인을 모두 말합니다.

쿠버네티스와 같은 분산 시스템에서 시스템 크기와 복잡성이 증가함에 따라 관리가 어려워집니다.
관리가 필요한 대상으로 탐색(discovery), 로드밸런싱, 재해복구(failure recovery), 모니터링이 포함됩니다.
또한, 서비스 메시는 A/B 테스트, 카나리아(canary) 배포, 성능 제한(rate limit), 암호화,
종단(end to end) 인증 방법도 제공합니다.

## Istio

Istio(이스티오)는 오픈 소스 서비스 메시입니다.  

> <p align="center">
> <img src="/assets/img/istio/sail.jpeg"/><br/>
> 그리스어로 <a href="https://istio.io/latest/about/faq/">항해</a>를 뜻합니다</p>

이스티오는 서비스 보호, 연결, 모니터링에 균일하고 효율적인 방법을 제공합니다.
이스티오는 서비스 코드 변경이 거의 또는 전혀 없이 로드벨런싱, 잊능, 모니터링 기능을 수행할 수 있습니다.
컨트롤 플레인 주요 기능은 다음과 같습니다.

* TLS 암호화를 통한 서비스 대 서비스 통신
* HTTP, gRPC, WebSocket 및 TCP 트래픽에 대한 자동 로드밸런싱
* 다양한 라우팅 규칙, 재시도, 장애극복(failovers), 결함 주입 테스트(fault injection)를 통한 세밀한(fine-grained) 제어
* 접근 제어, 성능 제한과 쿼터를 지원하는 플러그형 정책 레이어와 Configuration API
* 자동화된 메트릭, 로그, 클러스터 송수신을 포함한 모든 내부 트래픽의 추적

이스티오는 확장성을 고려해 설계되었으며 배포에 필요한 다양한 요구를 처리할 수 있습니다.
클러스터에 배포된 애플리케이션을 메시에 추가하거나 메시를 다른 클러스터로 확장하거나
쿠버네티스 외부에서 실행되는 VM 또는 기타 엔드포인트를 연결할 수 있습니다.

### 작동원리

이스티오는 데이터 플레인과 컨트롤 플레인 두 요소로 이루어집니다.

데이터 플레인은 두 서비스간의 통신(communication)을 의미합니다.
서비스 메시 없이 네트워크는 트래픽이 보내졌는지, 어떤 종류였는지, 누가 어디로 보내는지 알 수 없습니다.
서비스 메시는 모든 네트워크 트래픽을 가로채기 위해 프록시를 사용합니다.
이스티오는 각 서비스와 함께 배포되는 Envoy 프록시를 사용하고 있습니다.

컨트롤 플레인은 원하는 구성과 서비스 뷰, 프록시 서버의 동적 프로그래밍, 환경 변화에 따른 규칙 업데이트를 수행합니다.

<p align="center">
<img src="/assets/img/istio/istio-plane.png"/>
</p>


<details markdown="1">
<summary>TMI</summary>

실제로 쿠버네티스 파드에 자동으로 sidecar가 inject 됩니다.
이를 방지하기 위해서는 다음과 같이 설정해야 합니다.
```yaml
annotations:
  sidecar.istio.io/inject: "false"
```
</details>

## Tips

[쿠버네티스](https://jwher.github.io/welcome-to-kubernetes), [노마드](https://www.nomadproject.io/), 콘솔(?)에서 사용가능 합니다.
여기에서는 쿠버네티스로 가정하고 설명합니다.

[Envoy proxy](https://jwher.github.io/envoy)

### Reference  

[[공식]service mesh](https://istio.io/latest/about/service-mesh/)  
[[조대협]Istio #1 - 마이크로 서비스와 서비스 매쉬](https://bcho.tistory.com/1293)  
[[IBM]What is Istio?](https://www.youtube.com/watch?v=1iyFq2VaL5Y)  


<!-- update log -->
<!--
본문에 추가할 내용을 적는다.

마이크로 서비스 아키텍쳐 패턴 글
https://bcho.tistory.com/1367 (응용)
-->
