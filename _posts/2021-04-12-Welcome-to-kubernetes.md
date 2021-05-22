---
layout: post
title: "Welcome to kubernetes!"
subtitle: "kubernetes의 세계에 오신 걸 환영합니다"
cover-img: /_posts/images/img.png
thumbnail-img: /_posts/images/kubernetes.png
categories: [kubernetes, docker]

date: 2021-04-12 23:50:00 
---

![Alt](https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/kubernetes.png "kubernetes")  
*kubernetes의 세계에 오신 걸 환영합니다!*  

# 목차
* docker는 들어봤겠지?
* kubernetes의 필요성
* kubernetes 개념

## docker는 들어봤겠지?

docker를 모르고 kubernetes를 먼저 알게 된 사람은 *<u>거의</u>* 없을 것이라고 생각하지만,  
여기서 다시 한번 정리해보자.

*옛날 옛날에 ...*

>
> ![Alt](https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/server.png "server")  
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

![Alt](https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/container.png "container")
<br/>  
<br/>  

## kubernetes의 필요성

>
> ![Alt](https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/server-multiple.png "multiple server")  
> docker를 알게된 당신. 덕분에 사업은 번창해 수십대의 서버를 운영하게 되었다.  
> 하지만 어느 날 서버 한대가 고장났고, 당신은 어쩔 수 없이 새벽에 회사에 출근하게 되었다.

운영자가 아무리 날고 기어도, *고장난* 서버가 스스로 고쳐지게 할 순 없다.  
하지만 실제 운영중에 소프트웨어, 커널 시스템, 물리적 오류로 서버는 빈번하게 고장난다.  
또한, 다수 서버에서 배포작업은 *어렵고* 운영자가 단순 노동자로 변하게 한다.  

<br/>  

>
> <image src="https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/container-collapse.jpg" width="40%"/> <image src="https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/container-good.jpg" width="50%"/>
> 
> 어느 배에서 일해야 하는가?

하지만 운영자를 위한 개발자들이 있었으니,  
kubernetes는 컨테이너화된 어플리케이션을 자동으로 배포, 스케일링 및 관리해주는 오픈소스 시스템이다.

## kubernetes 개념

### 선언적 구성 *declarative configuration*

선언, 宣言 이란?  
'널리 펴서 말하는 것' 이다

kubernetes는 구조화된 YAML, JSON 파일으로 운영자가 원하는 상태를 선언하여 구성한다.  
이상적인 상태를 유지하기 위해 현재 상태를 관찰하고, 스스로 수정과 복구를 한다. 

이전까지 운영자가 원하는 상태로 배포를 하기 위해서 여러 명령어를 작성했던 것과 대비된다. 

<br/>

학부에서 프로그래밍 언어 과목을 잘 들은 사람은,  
haskell, Erlang과 같은 함수형, Prolog와 같은 논리형 언어의 패러다임을 선언적 언어라 부름을 기억할 것이다.  
좀더 친숙한 C, Java, python이 명령적(imperative) 언어로 분류되는 것을 생각하면, 이해가 쉬울 것이다.  

명령적 언어는 내가 원하는 상태로 만드는 *과정*을 작성하지만, 선언적 언어는 원하는 *상태*를 작성한다.

<br/>

### 암시적/동적 그룹화

일상속에서 접하기 쉬운 그룹은 *목록*으로 구성되어 있다.  
> 카카오톡 채팅방은 정해진 목록으로 참가자 그룹을 인식한다.

새롭게 보드게임 동아리 채팅방을 만들려고 하면 *목록*을 작성해 주어야 한다.  
이를 명시적/정적 그룹화라고 한다.
<br/>

다른 상황을 생각해 보자.  
고등학교 체육시간, 갑작스럽게 축구를 하게 되어 반을 두 팀으로 나누게 되었다.
> 출석번호 홀수는 왼쪽, 짝수는 오른쪽 팀이야!  

다른 반이 축구팀에 합류해도 어느 그룹에 들어갈지 알 수 있다!
이를 암시적/동적 그룹화라고 한다.

kubernetes는 label을 사용하여 그룹을 암시적으로 표현한다.  


<br/>  

## kubernetes 설계 원칙

### Unix 철학

### Api 기반 상호 작용

<br/>

선언적 구성과 암시적/동적 그룹화라는 개념으로 설계된 쿠버네티스는 운영자에게 *유용한* 기능을 제공하게 된다.  
(다음 시간에! architecture)


<br/>

### Reference  



## - JWHer  
좋은 글을 쓰고 싶습니다.


[container-definition]: https://cloud.kt.com/portal/user-guide/education-eduadvanced-edu_adv_2

<!--
You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

```python
def print_hi(name):
  print("hello", name)
print_hi('Tom')
```

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
-->
