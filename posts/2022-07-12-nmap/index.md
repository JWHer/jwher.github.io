---
authors:
- jwher
description: nmap
slug: nmap
tags:
- tech
title: nmap
draft: true
---


*nmap*

<!--truncate-->

```
nmap 192.168.0.1/24

nmap -sS -O 192.168.0.249
```

## -s Scan Options

### -sT TCP

### -sS Stealth
2.1 TCP Half-Open Scan(=TCP SYN Scan)
서버에 SYN 패킷을 하나 보냄
서버로부터 SYN/ACK 응답이 오면 Listening 상태 (RST 패킷을 보내 접속을 끊음)
만약 서버에서 RST/ACK 응답이 오면 포트가 닫힌 상태

### -sP Ping

### -sU UDP

## -P Ping Options

### -PO
대상 호스트에 대한 ping 응답을 요청하지 않음 . log 기록과 filtering 을 피할 수 있다.

### -PT
일반적이 ICMP ping이 아닌 ACK 패킷으로 ping 을 보내고 RST 패킷으로 응답을 받는다.

### -PI
일반적인 ICMP ping 으로 방화벽이나 필터링에 의해 걸러진다.

### -PB
ping 을 할 때 ICMP ping 과 TCP ping을 동시에 이용한다.

### -PS
ping 을 할 때 ACK 패킷대신 SYN 패킷을 보내 스캔.

## Misc

### -O Operation System

### -p Port

### -D Decoy

### -o Output

## References
https://musclebear.tistory.com/105 [곰돌이의 데이터 기록부:티스토리]

