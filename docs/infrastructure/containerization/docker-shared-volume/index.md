---
authors:
- jwher
description: 도커 컨테이너와 공유 볼륨
tags:
  - docker
  - containerization
  - storage
  - quick-reference
title: Docker Shared Volume
---

![docker](/img/logos/docker.svg)
*도커 컨테이너와 공유 볼륨 권한 문제 해결*  
<!--truncate-->

# 목차
* [리눅스 사용자와 그룹](#리눅스-사용자와-그룹)
* [컨테이너 실습](#컨테이너-실습)
* [공유 볼륨](#공유-볼륨)

## 리눅스 사용자와 그룹  

리눅스 커널은 `uid`, `gid` 공간을 관리합니다.
이 정보는 커널 레벨의 syscall 요청에 권한이 있는지 판단하는데 사용됩니다.  
[[위키]파일 시스템 권한](https://ko.wikipedia.org/wiki/%ED%8C%8C%EC%9D%BC_%EC%8B%9C%EC%8A%A4%ED%85%9C_%EA%B6%8C%ED%95%9C)

> vi로 write 권한이 없는 파일을 편집할 때
> `Warning: Changing a readonly file`를 보신적이 있나요? 

도커 컨테이너를 호스트 서버에서 실행하면 하나의 커널을 공유합니다.
컨테이너화의 가장 큰 장점으로 격리된 프로세스가 커널을 공유해 **빠르다**는 것이죠.
*(도커에 대한 자세한 내용은 [이글](https://jwher.github.io/welcome-to-docker) 을 보면 도움이 될 것입니다!)*
😋

이 글에선 여러 실습을 통해 호스트와 컨테이너의 `uid` 관리 방법을 알아봅니다.
해결방법만 찾으신다면 [공유 볼륨](#공유-볼륨)으로 넘어가주세요:)

<br/>

## 컨테이너 실습

하나의 커널을 공유한다는 말은, 컨테이너에서 동작하는 `uid`와 `gid` 또한 한 커널에서 관리되고 있음을 뜻합니다.
그렇다면, 컨테이너를 실행시키면 호스트의 어떤 사용자로 실행이 될까요?  
⚠ *주의! 이 실습은 WSL(OSX)에서 진행하기 어렵습니다.(root uid 문제)*

<br/>

### 실습1  

컨테이너 하나를 실행시켜 봅시다
```shell
$ docker run -d ubuntu:latest sleep infinity
Unable to find image 'ubuntu:latest' locally
latest: Pulling from library/ubuntu
e3f93fd10ed7fe7fa402150fe94fa7235b55d68d12a021a0b5a8427af36e3a8b
```
호스트의 프로세스를 조회해 봅시다
```shell
$ ps aux | grep "sleep infinity"
USER         PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root     3924499  0.0  0.0   2516   592 ?        Ss   11:26   0:00 sleep infinity
```
컨테이너를 실행할 때, 어떠한 root 권한을 주지 않았지만 sleep infinity 프로세스는 root 사용자로 실행되었습니다.
컨테이너 내부에서 해당 프로세스의 ppid를 조회해 보아도 0번, 즉 root 사용자가 실행한 프로세스로 조회됩니다.✨  

<br/>

### 실습2

호스트 계정의 `uid`를 확인해 봅시다.  
```shell
$ echo $UID
1000
```
(필요하면 새로운 리눅스 계정을 추가해 줍시다.)

같은 `uid`를 사용해 명령을 실행할 **이미지**를 만들어줍니다.
```dockerfile
FROM ubuntu:latest
RUN groupadd containeruser
RUN useradd -r -u 1000 -g containeruser containeruser
USER containeruser
CMD ["sleep", "infinity"]
```

빌드하고 실행해 확인해 봅시다.
```shell
$ docker build -t test .
[+] Building 1.5s (7/7) FINISHED
... 생략 ...

$ docker run -d test
ebea1fe7c62de99b9747ea3830cb2b734c4e79907dd9b7b1eb2adf6dce2f9791
$ ps aux | grep "sleep infinity"
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
jwher     4891  0.0  0.0   2508   588 ?        Ss   07:09   0:00 sleep infinity

$ docker exec -it ebea /bin/bash
containeruser@ebea1fe7c62d:/$ ps aux | grep "sleep infinity"
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
contain+     1  0.0  0.0   2508   588 ?        Ss   07:09   0:00 sleep infinity
```

컨테이너는 `uid` 1000의 `containeruser` 사용자로 실행했습니다.
하지만 이미지 빌드과정에서 만든 `containeruser`는 호스트에 존재하지 않습니다.
이때, 호스트에서 프로세스를 실행시키는 `uid`는
도커 **이미지**가 알고있는 사용자의 `uid` 1000 입니다.
따라서, 호스트에서 실행중인 프로세스를 조회하면 `uid` 1000에 해당하는 사용자 `jwher`가 맵핑됩니다.

이 실습에서 중요한 점은 컨테이너 사용자 `containeruser`는 호스트의 `jwher`의 권한을 갖는 것입니다.
호스트에서 `jwher`에 권한을 부여하면 `containeruser`에게도 같은 권한이 부여됩니다.❤️  

*다시 말해 `uid` 1000이 중요한 것이지 **이름**이 중요한 것이 아닙니다*

<details markdown="1">
<summary>/etc/passwd</summary>

`실습2` 컨테이너를 잠시 살펴볼까요?
```shell
containeruser@ebea1fe7c62d:/$ cat /etc/passwd | grep containeruser
containeruser:x:1000:1000::/home/containeruser:/bin/sh
```
</details>

<br/>

### 실습3

도커 런타임 옵션으로 uid를 지정해 실행해 봅시다.
```shell
$ docker run -d --user 1000 ubuntu:latest sleep infinity
19fd5efdc631f3f102ab5bd2b4759dba228f9f8c14a85a15362d7dc5ca25200b

$ ps aux | grep "sleep infinity"
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
jwher     6073  0.0  0.0   2508   584 ?        Ss   07:26   0:00 sleep infinity

$ docker exec -it 19fd /bin/bash
I have no name!@19fd5efdc631:/$ ps aux | grep "sleep infinity"
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
1000         1  0.0  0.0   2508   584 ?        Ss   07:26   0:00 sleep infinity
```

신기하게도 컨테이너 사용자가 `I have no name!`으로 나타납니다.😆
이는 /etc/passwd 파일에 uid 1000이 존재하지 않기 때문입니다.
따라서 bash 쉘이 `I have no name!`을 표시하고 있습니다.

이 실습에서 중요한 점은 런타임 옵션으로 컨테이너를 만들면 Dockerfile의 값을 오버라이드한다는 것입니다.  

`실습2`에서 만든 이미지를 다시 사용해 봅시다
```shell
$ docker run --user 0 -d test
9306686a63a954bdfa62b162dedb486ba5162f270b5d01b1057aeb9130695bb5

$ ps aux | grep "sleep infinity"
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root   1535053  0.4  0.0   2516   584 ?        Ss   16:47   0:00 sleep infinity

$ docker exec -it 9306 /bin/bash
root@9306686a63a9:/# ps aux | grep "sleep infinity"
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root         1  0.0  0.0   2516   584 ?        Ss   07:47   0:00 sleep infinity
```
uid 0의 `root`로 오버라이드 된 것을 확인할 수 있습니다!🔥  

<br/>

<div align="center">

# Fix
어려워요...

</div>

<br/>

### 정리
위의 실습을 정리하면 다음과 같습니다.
1. 컨테이너 프로세스가 (호스트에)알려진 uid로 실행중이면, 호스트에서 uid를 사용하여 간단하게 접근제한을 할 수 있습니다.  
1. 더 좋은 방법은 알려진 uid(또는 username)를 런타임에 `--user` 플래그를 사용하는 것입니다.
1. 하지만 컨테이너와 호스트의 uid가 맵핑될 때, 각각의 사용자가 다르게 보일 수 있습니다.

<br/>

## 공유 볼륨

저는 ELK 스택을 컨테이너로 실행시키는 중 `logstash.db` 파일을 작성하지 못하는 문제를 겪었습니다.:sweat:
마운트된 볼륨의 권한을 확인해 봅시다.

```shell
$ cd /var/lib/docker/volumes

# Windows
> \\wsl$\docker-desktop-data\version-pack-data\community\docker\volumes

# WSL 
# /mnt/wsl/docker-desktop-data 하위에 있습니다 해당 경로에 마운트해줍니다
$ sudo mount -t drvfs '\\wsl$\docker-desktop-data' /mnt/wsl/docker-desktop-data
$ cd /mnt/wsl/docker-desktop-data/version-pack-data/community/docker/volumes

# 확인해봅시다
$ ls -l
total 8
drwxrwxr-x  7 root root   93  8월  9 18:23 data
drwx------ 20   70 root 4096  8월  1 21:10 db
drwxrwxrwx  4 root root   33  7월 26 18:13 events
drwxrwxr-x  3 root root   78  7월 23 16:43 keys
drwxrwxrwx  3 root root 4096  8월  2 09:10 logs
```

리눅스 파일 권한은 `r` read, `w` write, `x` execute 쌍으로 구분됩니다.
순서대로 `4`, `2`, `1`비트로 표현하기도 합니다. 
3쌍이 존재하며 각각 `owner`, `group`, `other` 사용자의 권한을 나타냅니다.  

제가 쓰고자 하려는 `logstash.db` 파일은 `data` 폴더 아래에 있습니다.
하지만 `other` 사용자는 쓰기 권한이 없네요. 바꿔줍시다.

```shell
$ sudo chmod 777 data
```

<br/>

<div align="center">

# Fix
흠! 하나 해결했군요!

</div>

<br/>

### 끝?

하지만 도커 공유 볼륨을 호스트 권한으로 관리하는 것은 여러 문제를 발생시킵니다.
예를들어, 호스트에 존재하지 않는 `uid`, `gid`로 권한을 준다면 문제가 발생합니다.
근본적인 해결 방법으로 "데이터 전용 컨테이너"를 사용하도록 조언합니다.

~~위의 방법은 땜빵이라는 것이죠~~

[[공식]Use volumes](https://docs.docker.com/storage/volumes/)  
[Why Docker Data Containers are Good](https://medium.com/@ramangupta/why-docker-data-containers-are-good-589b3c6c749e)  

<br/>

## Tips

마찬가지로, 쿠버네티스 로컬 persistent volume 또한
적절한 [파일시스템 권한](https://ko.wikipedia.org/wiki/%ED%8C%8C%EC%9D%BC_%EC%8B%9C%EC%8A%A4%ED%85%9C_%EA%B6%8C%ED%95%9C) 이 있어야 합니다.  

### Reference  

[Understanding how uid and gid work in Docker containers](https://medium.com/@mccode/understanding-how-uid-and-gid-work-in-docker-containers-c37a01d01cf)    
[[깃헙]WSL2 where is docker volume location?](https://github.com/microsoft/WSL/discussions/4176#discussioncomment-264961)  



<!-- update log -->
<!--
본문에 추가할 내용을 적는다.
https://sweethoneybee.tistory.com/28  
-->
