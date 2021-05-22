---
title: "Inatall tar.gz"
subtitle: "가끔은 예측하지 못한 결과에 대비해야 할 수도..."
cover-img: /assets/img/prepared.jpg
thumbnail-img: /assets/img/gzip.png
tags: [tech, linux]
comments: true

date: 2021-05-10 17:50:00 
---

<!-- image repository: https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/ -->
![Alt](https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/gzip.png "gnuzip")  
*가끔은 예측하지 못한 결과에 대비해야 할 수도...*  

# 목차
* [GNU Zip](#Preflight)
* Tape Archive
* 직접 설치해보기
* 심볼릭 링크 만들기

## GNU Zip 

#### GNU Zip이란?
*zip은 많이 봤는데...*

줄여서 gzip, .gz 포맷으로 사용되는 free software이다.  
1992년 10월 31일에 처음 공개되었으며 
Jean-loup Gailly와 Mark Adler가 만들었다고 한다. 

<br/>

## Tape Archive

줄여서 .tar 포맷으로 사용되는 posix 표준이다.  
초기 유닉스 시대에 테입 백업 용도로 개발되었으나,
현재는 많은 파일을 디렉토리 구조, 파일 속성들을 보존하면서 하나의 큰 파일로 묶는 데 주로 사용된다.

<br/>

#### Advanced Packaging Tool이 있는데 왜?

사실 리눅스(debian)를 사용하면 대부분 apt 명령어를 사용해서 프로그램을 설치한다.  
하지만 apt repository에 등록되지 않은 프로그램을 사용하거나,
특정한 버전이 필요할 때, 인터넷 연결이 없을 때, **apt가 고장났을 때** .deb(.rpm) 파일이나
.gz파일을 사용하여 패키지 설치를 할 필요가 있다.

<br/>

## 직접 설치해보기

#### Node를 설치해 보자

여러가지 설치하려는 프로그램이 있겠으나 node를 예시로 한다.

1. node pakcage 리스트 확인  
    
   노드는 https://www.nodejs.org/download/release/ 에 패키지 다운로드 목록을 제공한다.
   ![Alt](https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/packagelist_node.png "패키지 목록")
   
   <br/>

2. 파일 다운로드  

   설치파일을 받는 방법은 다양하겠으나(wget, scp, docker cp...) wget을 사용하였다.  
   필요한 다운로드 url을 복사하자  
   ![Alt](https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/packagelinkcopy_node.png "패키지 목록")
   
   <br/>
   
   ```shell
   # 복사한 링크를 붙여넣는다
   $ wget https://nodejs.org/download/release/latest-v12.x/node-v12.22.1-linux-x64.tar.gz
   
   --2021-05-10 05:39:45--  https://nodejs.org/download/release/latest-v12.x/node-v12.22.1-linux-x64.tar.gz
   Resolving nodejs.org (nodejs.org)... 104.20.22.46, 104.20.23.46, 2606:4700:10::6814:162e, ...
   Connecting to nodejs.org (nodejs.org)|104.20.22.46|:443... connected.
   HTTP request sent, awaiting response... 200 OK
   Length: 23138380 (22M) [application/gzip]
   Saving to: 'node-v12.22.1-linux-x64.tar.gz'
   
   node-v12.22.1-linux-x64.tar.gz                              100%[========================================================================================================================================>]  22.07M  7.88MB/s    in 2.8s
   
   2021-05-10 05:39:48 (7.88 MB/s) - 'node-v12.22.1-linux-x64.tar.gz' saved [23138380/23138380]
   ```
   
<br/>

#### 설치

   다음과 같이 설치한다
   ```shell
   $ tar -zxvf {some-tar.gz}
   ```

   z : gzip 압축 풀기
   x : tar 파일 추출
   v : verbose
   f : 파일 이름 지정

## 심볼릭 링크 만들기

   *설치했는데 실행이 안된다?*

   실행파일은 대부분 /bin, /usr/bin 폴더 밑에 존재하고 경로는 $PATH로 관리된다.
   (windows 환경변수와 유사하다)  
   apt를 사용하여 설치하면 실행경로를 알아셔 연결해주나, 직접 설치해주면 실행파일 경로를 연결해 주어야
   간편하게 프로그램을 사용할 수 있다.
   
   $PATH에 실행파일 위치를 지정해 주고, 쉘 시작시 경로를 지정해 줄 수 있으나  
   좀더 elegance? 한 방법을 써 보자

   ```shell
   $ ln -s {full/path/to/origin} /bin/{origin}
   
   /node/node-v12.22.1-linux-x64/bin# ln -s $PWD/node /bin/node
   /node/node-v12.22.1-linux-x64/bin# ln -s $PWD/npm /bin/npm
   
   # 확인해보자
   $ cd ~
   $ node -v && npm -v
   
   v12.22.1
   6.14.12
   ```

### Reference  
https://ko.wikipedia.org/wiki/Gzip
https://ko.wikipedia.org/wiki/Tar_(%ED%8C%8C%EC%9D%BC_%ED%8F%AC%EB%A7%B7)

## - JWHer  
좋은 글을 쓰고 싶습니다.

<!-- update log -->
<!--
본문에 추가할 내용을 적는다.
-->