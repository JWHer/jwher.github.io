---
authors:
- jwher
description: 블로그 업데이트
slug: update-blog
tags:
- blog
- update
title: Update Blog
---

<!--truncate-->

<!-- image repository: https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/ -->
![Alt](https://raw.githubusercontent.com/JWHer/jwher.github.io/master/assets/img/Jekyll.png "Jekyll")  
*Jekyll 블로그 사용하기*  

# 목차
* Jekyll
* Disqus를 사용해 댓글 만들어 주기
* Search console 사용하기

## Jekyll 

*지킬 박사와 하이드씨를 읽어 본 적이 있는가?*

지킬은 소설속의 박사로 선과 악을 분리하는 약을 만든다. 하지만, 여기에서 다루는 Jekyll과 아직까지는
어떤 연관성도 찾지 못했다...  

Jekyll은 [Ruby on Rails](https://ko.wikipedia.org/wiki/%EB%A3%A8%EB%B9%84_%EC%98%A8_%EB%A0%88%EC%9D%BC%EC%A6%88)
프레임워크에서 동작하는 정적 사이트 라이브러리이다. 따라서 Ruby 특징을 갖추고 있다.  

공식 사이트에선 다음과 같은 장점을 소개한다.
* 심플함
* 정적
* 블로그 지향적

### 심플함  
ROR 프레임워크를 사용하기 때문에 애자일하게(빠르게) 개발할 수 있다는 장점을 지닌다.  

### 정적  
마크다운(.md), Liquid, HTML&CSS를 넣으면 바로 사이트를 완성할 수 있다.

### 블로그 지향적
고유주소, 카테고리, 페이지, 포스트, 사용자 레이아웃 등 기능이 이미 포함되어 있다.  

Ruby로 직접 개발한다면 다음 같이 할 수 있다.  
```shell
# Ruby gem을 통해 설치한다
$ gem install jekyll bundler
$ jekyll new {blog}
$ cd {blog}

$ bundle exec jekyll serve
# http://localhost:4000 에서 확인할 수 있다.
```

### 직접 해보자!
*3초면 된다!*

사실 위와 같은 장점과 함께 Github Pages로 **무료 호스팅** 이 된다는 점이
Jekyll 선택에 가장 큰 영향을 미쳤다.  

최근엔 한국에서도 워드프레스를 많이 사용하고, 네이버 블로그 등 플랫폼은 많으나
좀더 자유로운 환경을 찾았던 것 같다.  
직접 개발하기엔 시간과 비용이 부족했고, Jekyll이 적합했다.

Ruby에 대한 이해가 부족했지만, 
서버 호스팅, 도메인 비용과 웹 사이트를 직접 개발한다고 생각하면...  
Ruby 지식 부족으로 인한 시행착오 끝에 2021.05.23일 블로그를 리뉴얼했다.   

소개는 이만 줄이고 바로 만들어보자.  
*(github 아이디가 없지는 않겠지...?)*

1. [깃헙 토픽](https://github.com/topics/jekyll) 에 가서 마음에 드는 테마를 고르자.
  ![Alt](https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/github-jekyll.png "github-jekyll")  
  *다양한 테마를 바로 사용할 수 있다*

2. 마음에 드는 테마를 fork 한다.
  ![Alt](https://raw.githubusercontent.com/JWHer/jwher.github.io/master/assets/img/install-steps.gif "install-steps")
  *본 블로그에 사용한 beautiful-jekyll*

3. Settings에서 레포지토리를 Rename 한다.
  Github Pages 호스팅을 위해 {yourusername}.github.io로 이름이 바뀌어야 한다.

4. 레포지토리의 _config.yml을 수정한다.
  각각의 테마마다 형식이 다르다. 소개하는대로 수정해 주자.

<br/>

자! 이제 {yourusername}.github.io에 접속하면 당신의 블로그가 있다!  
글을 추가하려면 _post 밑에 {yyyy-mm-dd-name}.md 파일을 작성해 주면 된다.  
(md파일과 깃헙 등의 사전 지식이 있다고 가정하여 작성하였다. 설명이 부족하다면 Reference를 참조하자)

<br/>

## Disqus를 사용해 댓글 만들어 주기 
*정적이네...*

Jekyll의 단점이라면, 블로그 접속자와 소통이 어렵다는 것이다.  
시간을 쪼개서 포스팅을 하다 보니 자세하게 글을 작성하지 못하는데,
다른 사람에겐 어떤 부분이 어렵고 설명이 필요한지 몰라 답답했다.

따라서 소셜 계정으로 댓글을 서비스 해주는 Disqus를 추가하기로 했다!

### 직접 해 보자!
1. https://disqus.com/ 에 가서 구글계정의 소셜로그인으로 가입한다.
2. Get Started 버튼을 누른다.
3. I want to install Disqus on my site를 선택한다.
4. 설정 페이지가 나오면 Website Name을 지정해 주고 Create Site 버튼을 누른다.  
   *Website Name을 기억하자*  
5. Let's get started를 누르면 What platform is your site on?에서 Jekyll을 선택한다.  
6. 설정을 마치고 Configure 버튼을 누른다.  
   *Setup Complete! 페이지가 나오면 완료된 것이다.*  
7. 이제 {yourusername}.github.io 저장소 안에 있는 _config.yaml 파일을 열어서 편집한다.  
disqus: 구문을 찾아서 다음과 같은 식으로 수정해 준다.  
disqus: "Website Name"  
*혹시나 Disqus를 지원하지 않는 테마이면...*  
8. {yourusername}.github.io 페이지를 확인헤서 잘 반영되었는지 본다.  
테마에 따라 post header에 ```comments: true``` 등을 추가해야 할 수 있다.

<br/>

## Search console 사용하기
*아무도 주소를 모르는 집*

(나중에 추가하겠다 ㅜㅜ)  
robots.txt  
sitemap.xml  
https://search.google.com/search-console

### 여기까지 오다니
어찌어찌 해서 내가 원하는 blog를 작성할 수 있게 되었다.  
다른 분들이 먼저 좋은 귿을 작성해 주셔서 감사하다:)

<br/>

### Reference  
[[공식]Jekyll](http://jekyllrb-ko.github.io/)  
[Github에 Beautiful-jekyll을 구축하는 순서 설명](https://dymaxionkim.github.io/beautiful-jekyll/2017-01-10-make-blog/)



<!-- update log -->
<!--
본문에 추가할 내용을 적는다.
사진 추가
-->