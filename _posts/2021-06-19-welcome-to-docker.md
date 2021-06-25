---
layout: post
title: "Welcome to docker"
subtitle: "docker는 들어봤겠지?"
cover-img: /assets/img/cover.svg
thumbnail-img: /assets/img/docker.svg
share-img: /assets/img/docker.svg
tags: [tech, docker]
comments: true

date: 2021-06-19 23:50:00 
---

<!-- image repository: https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/ -->
![Alt](https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/docker.png "docker")  
*docker는 들어봤겠지?*  

# 목차
* [docker](#docker)

## docker

docker

*옛날 옛날에 ...*

> <div align="center">
> <image src="https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/server.png" style="height: 40vmin;"/>
> </div>
> 전공 지식과 열정만으로 사업을 시작한 당신. 자금 부족으로 서버 하나에 여러 어플리케이션을 동작시키고 있었다.  
> 몇날 밤을 새며 까다로운 고객의 요구사항을 맞춘 당신. 두근거리는 마음으로 배포 버튼을 누르는데...  
> 아뿔사! 서드파티 앱과 충돌을 일으키며 서버가 죽고 말았다.

수많은 개발자가 함께 일하는 환경이나, 오픈소스를 많이 활용하는 곳에서 여러 어플리케이션의 환경을 맞춰주는 것은 *어렵다*  
각각의 독립적인 하드웨어 환경을 구축해 주는것에도 비용적인 한계가 있다.

따라서 배포와 운영을 하는 Engineer들은 생각한다. 각 어플리케이션마다 *독립적*인 환경을 만들 순 없을까?  
이런 고충을 해결하기 위해 나온 프로세스 격리 기술이 docker이다. 

<!--실행 정보를 담고 있는 image, 실행중인 image instance를 container라 부른다.  -->
격리된 공간에서 프로세스가 동작하는 기술을 [container][container-definition], container의 실행 정보를 image라고 한다.  
docker container는 호스트의 커널을 공유해 VM보다 매우 빠르다는 장점이 있다.  
> ![Alt](https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/container_evolution.svg "container_evolution")
> 이전에도 가상화 기술은 존재했다.  

이렇게 여러 개발자 그룹, 혹은 오픈소스를 사용해 작은 서비스 어플리케이션으로 이루어진 아키텍처를
Micro Service Architecture(MSA) 라고 한다. 이와 반대로 하나로 통합된 아키텍처를 Monolithic 아키텍처라 한다.

> <div align="center">
> <image src="https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/container.png" style="height: 40vmin;"/>
> </div>
> 다양한 크기의 짐이 규격화된 container에 담겨 유통 혁명을 일으켰다.   

<br/>  
<br/>  

## Tips

주말에 작성해 보려고 했는데 욕심이 과했습니다. 빨리 마저 작성해겠습니다...

### Reference  
https://www.google.com


## - JWHer  
좋은 글을 쓰고 싶습니다.

<!-- update log -->
<!--
본문에 추가할 내용을 적는다.
-->

