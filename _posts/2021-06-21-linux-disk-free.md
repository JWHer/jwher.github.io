---
layout: post
title: "linux disk free"
subtitle: "디스크 정리하기"
cover-img: /assets/img/cover.svg
thumbnail-img: https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/hard-drive-internal.jpg
share-img: https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/hard-drive-internal.jpg
tags: [tech, linux]
comments: true

date: 2021-06-21 17:50:00 
---

<!-- image repository: https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/ -->

![Alt](https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/hard-drive-internal.jpg "hard-drive-internal")  
*디스크 정리하기*  


# 목차
* [디스크 정리하기](#디스크-정리하기)

<br/>

## 디스크 정리하기  

업무중인데 서버가 갑자기 작동을 안해 당황해본적 있으신가요? :sweat:  

> 공포의 메시지 :fearful:  
> ```shell
> No space left on device
> ```

![Alt](https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/%EB%B6%88%ED%8E%B8.jpg "불편")

저도 오늘 겪어서 짧게 문서 남깁니다!

### 뭐부터 해야돼?

사실 디스크 용량부족 원인은 case-by-case 일 겁니다. :smile:  
한번 확인해봅시다  

```shell
$ df
Filesystem      1K-blocks      Used  Available Use% Mounted on
udev            131824004         0  131824004   0% /dev
tmpfs            26373680   2734536   23639144  11% /run
/dev/sda1          523248      8036     515212   2% /boot/efi
/dev/sda2       102687672  80998168   16430240  84% /var
/dev/sda3       681956080 221976732  425268208  35% /home
tmpfs           131868400       988  131867412   1% /dev/shm
tmpfs                5120         0       5120   0% /run/lock
tmpfs           131868400         0  131868400   0% /sys/fs/cgroup
/dev/loop3          56832     56832          0 100% /snap/core18/1997
/dev/loop5          72192     72192          0 100% /snap/lxd/19647
/dev/loop6          69248     69248          0 100% /snap/lxd/20326
```
*삭제 전 상황을 캡쳐 못했습니다:cry: 완전히 똑같진 않지만 이런 상황이었습니다*

얼핏 보니 snap이라는 것이 할당된 디스크의 100%를 사용하고 있군요!  

### snapd
snap이라, 솔직히 처음 들어봤습니다.
그래도 가만히 있을 순 없죠! 문제를 빨리 해결하기 위해 googling을 해봅시다.

[snap 패키지 사용하기](https://snowdeer.github.io/linux/2018/01/22/ubuntu-16p04-using-snap-package/)  
역시 Google입니다. 빠르게 정보를 찾아보니 "다양한 리눅스 배포판에서 Universal Package를 사용하기 위한 툴"
이라고 하네요. 좀더 명확이 알면 좋겠으나 현재로써는 필요 없다고 판단됩니다. 작업이 급하니 지워볼까요?

```shell
$ sudo apt autoremove --purge snapd
```

### apt

앞서 snap을 보니 우분투 패키지 매니저인 apt(advanced packaging tool)의 캐시도 많을 것이란 생각이 드네요!  
```shell
$ sudo apt-get autoclean
```

### docker

저의 경우에는 ```/var```밑의 docker layer도 많은 용량을 차지했습니다.  
```shell
$ docker system prune -a --volumes
WARNING! This will remove:
        - all stopped containers
        - all networks not used by at least one container
        - all volumes not used by at least one container
        - all images without at least one container associated to them
        - all build cache
Are you sure you want to continue? [y/N]
```
위의 메시지처럼 멈춘 컨테이너, 사용하지 않는 네트워크 인터페이스, 사용하지 않는 볼륨, 사용하지 않는 image,
**build cache**를 전부 삭제합니다.

### 결과는?

```shell
$ df
Filesystem     1K-blocks     Used Available Use% Mounted on
udev            10103724        0  10103724   0% /dev
tmpfs            2025764     3732   2022032   1% /run
/dev/sda1      102685624 21775456  75651008  23% /
tmpfs           10128800        0  10128800   0% /dev/shm
tmpfs               5120        4      5116   1% /run/lock
tmpfs           10128800        0  10128800   0% /sys/fs/cgroup
tmpfs            2025760       20   2025740   1% /run/user/1000
```
디스크가 넉넉해졌군요!  

![Alt](https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/%ED%8E%B8%EC%95%88.jpg "편안")

이 방법이 모두에게 통하진 않겠지만, 해결의 실마리가 되었으면 좋겠습니다.

<br/>

### Reference  
www.google.com

## - JWHer  
좋은 글을 쓰고 싶습니다.

<!-- update log -->
<!--
본문에 추가할 내용을 적는다.
-->
