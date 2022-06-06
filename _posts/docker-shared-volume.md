---
layout: post

title: "도커 컨테이너와 공유 볼륨"  
thumbnail-img: /assets/img/docker.png  
categories:
- tech
- docker
- linux
excerpt: |
  도커, 어디까지 알고있니?  
date: 2021-08-05 11:50:00

aside: true
feature_text: |
  # Docker Container and Shared Volume
feature_image: "/assets/img/bamboos.jpg"
comments: true
---

<!-- more -->

<p align="center">
<img src="/assets/img/docker.png" style="max-height: 40vh;"/>
</p>

*도커 컨테이너와 공유 볼륨 권한 문제 해결*  

# 목차
* [리눅스 사용자와 그룹](#리눅스-사용자와-그룹)
* [컨테이너 실행](#컨테이너-실행)
* [공유 볼륨](#공유-볼륨)

## 리눅스 사용자와 그룹  

리눅스 커널은 uid와 gid 공간을 관리할 의무를 집니다.

도커는 커널을 공유하며 자원을 격리
호스트의 어떤 사용자로 실행이 될까요?  
도커에 대한 자세한 내용은 [이글](https://jwher.github.io/welcome-to-docker) 을 보면 도움이 될 것입니다!  

<br/>

## 컨테이너 실행

<br/>

## 공유 볼륨

wsl 경로  
\\wsl$\docker-desktop-data\version-pack-data\community\docker\volumes
   
<br/>

## Tips

마찬가지로, 쿠버네티스 로컬 persistent volume 또한
적절한 [파일시스템 권한](https://ko.wikipedia.org/wiki/%ED%8C%8C%EC%9D%BC_%EC%8B%9C%EC%8A%A4%ED%85%9C_%EA%B6%8C%ED%95%9C) 이 있어야 합니다.  

### Reference  
https://sweethoneybee.tistory.com/28  
https://medium.com/@mccode/understanding-how-uid-and-gid-work-in-docker-containers-c37a01d01cf  
https://github.com/microsoft/WSL/discussions/4176#discussioncomment-264961


## - JWHer  
좋은 글을 쓰고 싶습니다.

<!-- update log -->
<!--
본문에 추가할 내용을 적는다.
-->