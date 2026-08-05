---
title: 앱을 도커 컨테이너로 만들기
description: 간단한 리눅스 기반 웹 앱을 컨테이너화하는 방법
draft: true
---

![the docker image](/img/logos/docker.svg)
*Containerizing an app*
*이 글은 [Nigel Poulton](https://www.docker.com/captains/nigel-poulton/)의 Docker Deep Dive를 읽고 작성되었습니다*

도커는 전부 애플리케이션과 그걸 컨테이너에서 돌리는 것에 대해 이야기합니다.

한 애플리케이션을 구성해 컨테이너로 실행시키는 것은 "컨테이너화(containerizing)"라는 절차를 거칩니다.

이 글에서, 간단한 리눅스 기반 웹 앱을 컨테이너화 하는 절차를 해봅니다.
만약 리눅스 도커 환경이 없다면, [*Play With Docker*](https://labs.play-with-docker.com/)를 무료로 사용할 수 있습니다.

# The TLDR

컨테이너는 앱을 빌드하고 적재하고 실행하는것을 간단하게 하는 것입니다.

앱을 컨테이너화 하는 절차는 다음과 같습니다.

1. 애플리케이션 코드와 종속성을 확인합니다.
2. 앱의 종속성, 실행 방법을 기술한 *Dockerfile*을 만듭니다.
3. *Dockerfile*을 `docker image build` 명령어에 제공합니다.
4. (옵션) 레지스트리에 새 이미지를 올립니다
5. 이미지로부터 컨테이너를 실행합니다.

앱이 한번 컨테이너화 되면(컨테이너 이미지로 만듬), 컨테이너를 공유하고 실행할 준비가 된 것입니다.
