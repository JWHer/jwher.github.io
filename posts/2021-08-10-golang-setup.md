---
layout: post

title: "고(Golang) 개발환경 구축하기"
thumbnail-img: /assets/logos/Go.svg
categories:
- dev
- short
excerpt: |
  고 아직도 안써봤어?
date: 2021-08-10 17:50:00

aside: true
feature_text: |
  # Setup Go
feature_image: "/assets/img/bamboos.jpg"
comments: true
---

<p align="center">
<img src="/assets/logos/Go.svg" style="max-height: 40vh;"/>
</p>

*고(Golang) 개발환경 구축하기*  

# 목차
* [고 설치하기](#고-설치하기)
* [IDE 구성하기](#ide-구성하기)
* [프로젝트 생성](#프로젝트-생성)

<!-- more -->

## 고 설치하기

### 설치파일
[공식 사이트](https://golang.org/doc/install) 에서 최신 버전의 고를 다운받을 수 있습니다.  

### 커맨드라인

```shell
# windows
> choco install golang

# ubuntu debian
$ apt install golang-go

# mac
$ brew install golang
```

설치를 완료하고 확인해 봅시다.
```shell
> go version
go version go1.16.7 windows/amd64
```

<br/>

## IDE 구성하기

### Visual Studio Code

<p align="center">
<img src="/assets/logos/vscode.svg" style="max-height: 40vh;"/>
</p>

범용적으로 사용하는 IDE 입니다.
다른 언어와 함께 통합 개발이 편합니다.
확장 탭에서 고언어 확장을 설치해 줍니다.

<br/>

### Lite IDE

<p align="center">
<img src="/assets/logos/lite-ide.jpg" style="max-height: 40vh;"/>
</p>

고 전용으로 나온 IDE 입니다.
고를 위해 만들어져 디테일한 편리함이 있습니다.

[[공식]Lite IDE](http://liteide.org/en/)

이 밖에도 JetBrain 등 다양한 IDE가 있습니다.  
   
<br/>

## 프로젝트 생성

### GOPATH
Go 언어의 `import`를 보면 조금 특이합니다.
```
import (
    "context"
    "fmt"
    "log"

    "google.golang.org/grpc"
    "google.golang.org/grpc/credentials"
)
```
인터넷에 있는 소스 코드를 받아와서 바로 사용하고 있습니다.
그렇다면 이 소스코드는 어디에 저장될까요?

고언어 프로젝트를 생성하면 `bin`, `pkg`, `src` 디렉토리를 생성합니다.
각각의 디렉토리 역할은 다음과 같습니다.
* `bin`: 컴파일된 실행파일(바이너리)이 생성되는 디렉토리입니다.
* `pkg`: 패키지를 컴파일한 라이브러리 파일이 생성되는 디렉토리입니다.
`{운영체제}_{아키텍처}` 형식으로 디렉토리를 생성합니다. *예) `linux_amd64`*
* `src`: 작성한 소스파일과 인터넷에서 다운로드한 소스 파일이 저장되는 디렉토리입니다.
~~왜 제거에는 없죠?~~
  
다운로드 소스 파일은 `%USERPROFILE%\go` 경로에 저장되는 것으로 보입니다.(Windows)
  
프로젝트를 생성했다면, 프로젝트 디렉토리 경로로 `GOPATH`를 설정해야 합니다.
윈도우에서는 `제어판`->`시스템 및 보안`->`시스템`->`고급 시스템 설정`->`고급`->`환경 변수`
에서 설정할 수 있습니다. CLI를 사용해도 됩니다.

```shell
# linux/mac
$ export GOPATH=${project_pwd}

# 다음 명령어로 확인합니다
$ go env
```
여기서 `GOROOT`는 빌트인 패키지 저장 위치입니다.
`C:\Program Files\Go`

<br/>

### Go modules

당연하게도 `import`한 인터넷 소스를 다운받지 않고 빌드/실행하면 오류가 발생합니다.
패키지 관리를 위한 `go.mod` 파일 생성과 소스 다운로드를 하려면, 다음 명령어를 사용합니다.  

```shell
> go mod init ${project}
go: creating new go.mod: module "project"
go: to add module requirements and sums:
        go mod tidy
        
> go mod tidy
go: finding module for package google.golang.org/grpc/credentials
go: finding module for package google.golang.org/grpc
go: found google.golang.org/grpc in google.golang.org/grpc v1.39.1
go: found google.golang.org/grpc/credentials in google.golang.org/grpc v1.39.1
```

*`go.mod` 파일을 만드는 것이 [필수](https://blog.golang.org/using-go-modules) 가 되었습니다.*  
*Go modules are the future of dependency management in Go*
    
<br/>

## Tips

학생일 때 `GOPATH`로 참 헤맸습니다.

### Reference  

[[공식]고 설치](https://golang.org/doc/install)  
[가장 빨리 만나는 Go 언어](http://pyrasis.com/book/GoForTheReallyImpatient/Unit03)  
[[공식]Go modules](https://blog.golang.org/using-go-modules)

## - JWHer  
좋은 글을 쓰고 싶습니다.

<!-- update log -->
<!--
본문에 추가할 내용을 적는다.
-->