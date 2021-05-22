---
layout: post
title: "Install Docker"
subtitle: "천리길도 한걸음씩"
cover-img: /_posts/images/docker.png
thumbnail-img: /_posts/images/docker.png
tags: [kubernetes, docker]

date: 2021-04-13 11:50:00 
---

![Alt](https://raw.githubusercontent.com/JWHer/jwher.github.io/main/_posts/images/docker.png "docker")  
*천리길도 한걸음씩*  

# 목차
* [Preflight](#Preflight)
* docker 설치


## Preflight  
도커를 설치하기 전에 환경을 점검해 보자.

#### OS
* Ubuntu Focal 20.04 (LTS)
* Ubuntu Bionic 18.04 (LTS)
* Ubuntu Xenial 16.04 (LTS)
* CentOS는 추후 작성하겠다(ㅎㅎ;)

#### Storage Driver
* overlay2
* aufs
* btrfs

#### Architecture
* x86_64
* amd64
* arm64

## docker 설치

1. 이전 버전 확인 & 제거  

    이미 도커가 설치되어 있다면, 다시 설치할 필요가 없을 것이다 :D
    ```shell
    $ sudo apt-get remove docker docker-engine docker.io containerd runc
    ```

<br/>
  
2. 레포지토리 설정  

    도커를 설치하고 업데이트 하기 위해 필요한 repository 위치를 설정해 주어야 한다.  
    repository 위치를 설정해 주기 위해 필요한 기본 라이브러리를 먼저 설치해 주자
    ```shell
     $ sudo apt-get update
     
     $ sudo apt-get install \
        apt-transport-https \
        ca-certificates \
        curl \
        gnupg \
        lsb-release
    ```
    *apt가 HTTPS를 통해 repository를 사용할 수 있게 해준다*
      
    <br/>
      
    도커의 official GPG key를 추가한다.  
    ```shell
    $ curl -fsSL https://download.docker.com/linux/ubuntu/gpg \
    | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
    ```
   
    <br/>

    다음 명령어로 stable repository를 추가해준다. nightly나 test repository를 사용하기 위해서는 ```stable``` 다음에
   ```nightly```, ```test```를 추가한다.
   ```shell
   # amd64 버전
   
   $ echo \
   "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
    ```
    
<br/>

3. 도커 설치  
    repository를 추가했으니 ```apt```를 업데이트 하고 설치한다.
   ```shell
    $ sudo apt-get update
    $ sudo apt-get install docker-ce docker-ce-cli containerd.io
   ```
   
   <br/>
   
   특정 버전을 설치하기 위해선 다음과 같이 한다.  
   <br/>
   a. repo에서 가능한 버전을 리스트
   ```shell
    $ apt-cache madison docker-ce
   
    docker-ce | 5:20.10.6-3-0-ubuntu-focal | https://download.docker.com/linux/ubuntu focal/stable amd64 Packages
    docker-ce | 5:20.10.5-3-0-ubuntu-focal | https://download.docker.com/linux/ubuntu focal/stable amd64 Packages
    docker-ce | 5:20.10.4-3-0-ubuntu-focal | https://download.docker.com/linux/ubuntu focal/stable amd64 Packages
    ... 생략 ...
   ```
   <br/>
   
   b. ```VERSION_STRING```을 사용하여 특정 버전을 설치한다.
   ```shell
    $ sudo apt-get install docker-ce=<VERSION_STRING> docker-ce-cli=<VERSION_STRING> containerd.io
   ```
   <br/>

   설치가 완료되었으면 확인해 보자!  
   ```shell
    $ sudo docker run hello-world
   
      Unable to find image 'hello-world:latest' locally
      latest: Pulling from library/hello-world
      b8dfde127a29: Pull complete 
      Digest: sha256:308866a43596e83578c7dfa15e27a73011bdd402185a84c5cd7f32a88b501a24
      Status: Downloaded newer image for hello-world:latest
      
      Hello from Docker!
      This message shows that your installation appears to be working correctly.
      
      To generate this message, Docker took the following steps:
       1. The Docker client contacted the Docker daemon.
       2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
          (amd64)
       3. The Docker daemon created a new container from that image which runs the
          executable that produces the output you are currently reading.
       4. The Docker daemon streamed that output to the Docker client, which sent it
          to your terminal.
      
      To try something more ambitious, you can run an Ubuntu container with:
       $ docker run -it ubuntu bash
      
      Share images, automate workflows, and more with a free Docker ID:
       https://hub.docker.com/
      
      For more examples and ideas, visit:
       https://docs.docker.com/get-started/
   ```
<br/>

## Tips  
도커 실행 권한을 추가해 superuser를 사용하지 않을 수 있다  
```shell
 $ sudo usermod -aG docker $USER
 $ sudo service docker restart
```

<br/>

도커에서 사용하지 않는 컨테이너/이미지를 정리하는 방법
```shell
$ docker rm $(docker ps --filter status=exited -q)

$ docker image prune -a
```

<br/>

### Reference  
https://docs.docker.com/engine/install/ubuntu/


## - JWHer  
좋은 글을 쓰고 싶습니다.

<!-- update log -->
