---
authors:
- jwher
description: Nmap 네트워크 스캐너 사용법과 옵션 가이드
slug: nmap
tags:
- network
- security
- tools
- linux
title: Nmap - 네트워크 스캐닝 도구 완전 가이드
---

[![nmap](nmap.png)](/posts/nmap)
*Network Mapper - 네트워크 탐색 및 보안 감사 도구*

<!--truncate-->

## Nmap이란?

Nmap(Network Mapper)은 네트워크 탐색과 보안 감사를 위한 오픈소스 도구입니다. 1997년 Gordon Lyon(Fyodor)이 개발했으며, 네트워크 관리자와 보안 전문가들이 가장 많이 사용하는 도구 중 하나입니다.

**주요 용도:**
- 네트워크 호스트 탐색
- 열린 포트 확인
- 실행 중인 서비스 식별
- 운영체제 탐지
- 보안 취약점 스캔

## 설치

```bash
# Ubuntu/Debian
sudo apt-get install nmap

# CentOS/RHEL
sudo yum install nmap

# macOS
brew install nmap
```

## 기본 사용법

### 단일 호스트 스캔

```bash
# 기본 스캔
nmap 192.168.0.1

# 특정 포트 스캔
nmap -p 80,443 192.168.0.1

# 포트 범위 스캔
nmap -p 1-1000 192.168.0.1
```

### 네트워크 범위 스캔

```bash
# 서브넷 전체 스캔
nmap 192.168.0.1/24

# IP 범위 스캔
nmap 192.168.0.1-100

# 여러 호스트 스캔
nmap 192.168.0.1 192.168.0.2 192.168.0.3
```

## 스캔 옵션 (-s)

### -sT: TCP Connect 스캔

전체 TCP 연결을 수행하는 기본 스캔 방식입니다.

```bash
nmap -sT 192.168.0.1
```

**특징:**
- 가장 신뢰성 높음
- 로그에 기록됨 (눈에 띔)
- Root 권한 불필요

### -sS: TCP SYN 스캔 (Stealth Scan)

Half-open 스캔으로 연결을 완료하지 않습니다.

```bash
sudo nmap -sS 192.168.0.249
```

**동작 방식:**
1. 서버에 SYN 패킷 전송
2. 서버로부터 SYN/ACK 응답이 오면 포트 열림 (RST 패킷으로 연결 종료)
3. 서버에서 RST/ACK 응답이 오면 포트 닫힘

**특징:**
- 빠르고 효율적
- 로그 기록 가능성 낮음
- Root 권한 필요

### -sU: UDP 스캔

UDP 포트를 스캔합니다.

```bash
sudo nmap -sU 192.168.0.1
```

**특징:**
- 느림 (UDP는 연결 없는 프로토콜)
- DNS, SNMP 등 UDP 서비스 탐지

### -sP: Ping 스캔

호스트가 활성화되어 있는지만 확인합니다.

```bash
nmap -sP 192.168.0.1/24
```

## Ping 옵션 (-P)

### -Pn (구 -P0): Ping 생략

대상 호스트에 대한 ping 응답을 요청하지 않습니다. 로그 기록과 필터링을 피할 수 있습니다.

```bash
nmap -Pn 192.168.0.1
```

**사용 시나리오:**
- 방화벽이 ICMP를 차단하는 경우
- 포트 스캔에만 집중할 때

### -PS: TCP SYN Ping

ping을 할 때 ACK 패킷 대신 SYN 패킷을 보내 스캔합니다.

```bash
nmap -PS22,80,443 192.168.0.1
```

### -PA (구 -PT): TCP ACK Ping

일반적인 ICMP ping이 아닌 ACK 패킷으로 ping을 보내고 RST 패킷으로 응답을 받습니다.

```bash
nmap -PA80 192.168.0.1
```

### -PI: ICMP Ping

일반적인 ICMP ping으로 방화벽이나 필터링에 의해 걸러질 수 있습니다.

```bash
nmap -PI 192.168.0.1
```

### -PB: Ping Both

ping을 할 때 ICMP ping과 TCP ping을 동시에 이용합니다.

```bash
nmap -PB 192.168.0.1
```

## 고급 옵션

### -O: 운영체제 탐지

```bash
sudo nmap -O 192.168.0.249
```

TCP/IP 스택 핑거프린팅으로 OS를 추정합니다.

### -sV: 서비스 버전 탐지

```bash
nmap -sV 192.168.0.1
```

열린 포트의 서비스와 버전을 탐지합니다.

### -p: 포트 지정

```bash
# 특정 포트
nmap -p 80 192.168.0.1

# 여러 포트
nmap -p 22,80,443 192.168.0.1

# 포트 범위
nmap -p 1-1000 192.168.0.1

# 모든 포트
nmap -p- 192.168.0.1
```

### -A: 공격적 스캔

OS 탐지, 버전 탐지, 스크립트 스캐닝, traceroute를 모두 수행합니다.

```bash
sudo nmap -A 192.168.0.1
```

### -D: Decoy (미끼)

여러 IP에서 스캔하는 것처럼 위장합니다.

```bash
nmap -D 192.168.0.100,192.168.0.101,ME 192.168.0.1
```

### -T: 타이밍 템플릿

스캔 속도를 조절합니다 (0-5).

```bash
# 매우 느림 (IDS 회피)
nmap -T0 192.168.0.1

# 빠름 (일반적 사용)
nmap -T4 192.168.0.1

# 매우 빠름 (빠른 네트워크)
nmap -T5 192.168.0.1
```

## 출력 옵션 (-o)

### 표준 출력

```bash
# 일반 출력
nmap -oN scan.txt 192.168.0.1

# XML 출력
nmap -oX scan.xml 192.168.0.1

# Grepable 출력
nmap -oG scan.grep 192.168.0.1

# 모든 형식 출력
nmap -oA scan 192.168.0.1
```

## 실전 예제

### 웹 서버 스캔

```bash
# 웹 서버 포트와 서비스 확인
nmap -p 80,443 -sV 192.168.0.1
```

### 전체 네트워크 스캔

```bash
# 활성 호스트 찾고 주요 포트 스캔
nmap -sS -T4 -p 22,80,443,3306,3389 192.168.0.0/24
```

### 취약점 스캔

```bash
# NSE 스크립트로 취약점 스캔
nmap --script vuln 192.168.0.1
```

## Nmap Scripting Engine (NSE)

### 스크립트 카테고리

```bash
# 기본 스크립트 실행
nmap -sC 192.168.0.1

# 특정 카테고리 스크립트
nmap --script=auth 192.168.0.1

# 특정 스크립트 실행
nmap --script=http-title 192.168.0.1
```

**주요 카테고리:**
- `auth`: 인증 우회 시도
- `brute`: 브루트포스 공격
- `discovery`: 정보 수집
- `exploit`: 취약점 공격
- `vuln`: 취약점 탐지

## 주의사항

### 법적 문제

**허가 없는 스캔은 불법입니다!**

- 자신의 네트워크만 스캔
- 테스트 환경 사용
- 보안 감사 시 사전 승인 필요

### 윤리적 사용

```bash
# 좋은 예: 자신의 서버 점검
nmap -sV my-server.com

# 나쁜 예: 무단 스캔
# nmap -A random-company.com  # 하지 마세요!
```

## 참고 자료

**공식 문서:**
- [Nmap 공식 웹사이트](https://nmap.org/)
- [Nmap 공식 가이드](https://nmap.org/book/man.html)
- [NSE 스크립트 라이브러리](https://nmap.org/nsedoc/)

**학습 자료:**
- [Nmap Tutorial](https://www.cyberciti.biz/security/nmap-command-examples-tutorials/)
- [Nmap Cheat Sheet](https://www.stationx.net/nmap-cheat-sheet/)
- [곰돌이의 데이터 기록부 - Nmap 가이드](https://musclebear.tistory.com/105)

---

*Nmap은 강력한 도구입니다. 책임감 있게 사용하세요. 허가 없이 타인의 네트워크를 스캔하는 것은 법적 문제를 일으킬 수 있습니다.*
