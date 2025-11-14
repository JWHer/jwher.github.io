---
authors:
  - jwher
description: Docker Desktop 유료화 발표 이후 대안 탐색
slug: docker-desktop-alternatives
tags:
  - docker
  - containerization
  - news
  - alternatives
title: Docker Desktop 유료화 대응 - Podman과 Rancher Desktop
draft: true
---

![Docker Desktop](/img/logos/docker.svg)

## 개요

2021년 8월, Docker Inc.는 Docker Desktop의 라이선스 정책 변경을 발표했습니다. 250명 이상의 직원 또는 연 매출 $10M 이상의 기업은 유료 구독이 필요하게 되었습니다.

이 글에서는 Docker Desktop의 대안들을 살펴보고, 실제 마이그레이션 경험을 공유합니다.

<!-- truncate -->

## Docker Desktop 유료화 배경

### 라이선스 정책 변경 내용

2021년 8월 31일 발표:
- **무료 사용 가능**: 개인 사용자, 소규모 기업 (직원 250명 미만 & 매출 $10M 미만), 교육기관, 오픈소스 프로젝트
- **유료 구독 필요**: 대기업 및 중견 기업
- **유예 기간**: 2022년 1월 31일까지

### 영향받는 범위

Docker Desktop만 유료화되었고, Docker Engine(CLI, containerd 등) 자체는 여전히 오픈소스입니다.

**유료화 대상:**
- Docker Desktop for Mac
- Docker Desktop for Windows

**여전히 무료:**
- Docker CLI
- Docker Engine
- Docker Compose
- 리눅스에서의 Docker

## 대안 솔루션 비교

### 1. Podman

**특징:**
- Red Hat이 주도하는 오픈소스 프로젝트
- Daemonless 아키텍처 (보안상 이점)
- Docker CLI와 호환 가능한 명령어
- Rootless 컨테이너 지원

**장점:**
```bash
# Docker 명령어를 그대로 사용 가능
alias docker=podman

# Kubernetes YAML 생성
podman generate kube [container-name]
```

**단점:**
- Docker Compose 지원이 제한적 (podman-compose 별도 필요)
- 일부 Docker 기능 미지원
- macOS/Windows에서는 VM 필요

### 2. Rancher Desktop

**특징:**
- Rancher Labs가 개발한 오픈소스 데스크톱 애플리케이션
- containerd 또는 dockerd 백엔드 선택 가능
- Kubernetes 클러스터 내장 (k3s)
- GUI 제공

**장점:**
- Docker Desktop과 유사한 사용 경험
- Kubernetes 개발 환경 즉시 제공
- Windows, macOS, Linux 모두 지원
- Docker CLI 호환

**단점:**
- 메모리 사용량이 다소 높음
- 초기 설정이 다소 복잡할 수 있음

### 3. Lima + nerdctl (macOS/Linux)

**특징:**
- Lima: Linux Virtual Machines on macOS
- nerdctl: Docker 호환 containerd CLI

**장점:**
- 경량화된 솔루션
- containerd 네이티브 사용
- Docker Compose 지원 (nerdctl compose)

**단점:**
- GUI 미제공
- 초기 학습 곡선

### 4. Colima (macOS/Linux)

**특징:**
- Lima 기반의 간소화된 컨테이너 런타임
- Docker & Kubernetes 지원

**장점:**
- 설치 및 설정이 간단
- 리소스 사용 최적화
- Docker Desktop과 유사한 워크플로우

## 실제 마이그레이션 경험

### Rancher Desktop으로 전환

우리 팀은 Rancher Desktop을 선택했습니다.

**선택 이유:**
1. Docker CLI 완전 호환
2. 기존 Docker Compose 파일 그대로 사용
3. Kubernetes 개발 환경 통합
4. GUI로 인한 낮은 진입 장벽

### 설치 과정 (macOS)

```bash
# Homebrew로 설치
brew install rancher-desktop

# 또는 공식 사이트에서 다운로드
# https://rancherdesktop.io/
```

**초기 설정:**
1. Container Runtime 선택: dockerd (Moby) 선택
2. Kubernetes 버전 선택
3. 메모리/CPU 할당

### 마이그레이션 체크리스트

- [ ] Docker Desktop 완전 제거
- [ ] Rancher Desktop 설치
- [ ] 기존 이미지 export/import
  ```bash
  # Docker Desktop에서 이미지 저장
  docker save -o images.tar image1 image2 ...

  # Rancher Desktop에서 로드
  docker load -i images.tar
  ```
- [ ] Docker Compose 파일 동작 확인
- [ ] 로컬 개발 환경 테스트
- [ ] CI/CD 파이프라인 영향 확인

## 각 도구별 추천 사용 사례

### Podman 추천 대상
- 리눅스 서버 환경
- 보안에 민감한 조직
- Red Hat 생태계 사용자

### Rancher Desktop 추천 대상
- Kubernetes 개발자
- Docker Desktop에서 쉽게 마이그레이션하려는 팀
- GUI 선호

### Colima 추천 대상
- macOS/Linux 개발자
- 경량화된 솔루션 선호
- CLI 익숙한 사용자

## 결론

Docker Desktop 유료화는 아쉽지만, 다양한 오픈소스 대안들이 존재합니다.

**우리의 선택:**
- 개발 환경: Rancher Desktop
- CI/CD: 여전히 Docker Engine (Linux)
- 프로덕션: Kubernetes (containerd)

**전환 시 고려사항:**
- 팀의 기술 스택
- 기존 워크플로우와의 호환성
- 학습 곡선
- 장기적인 유지보수성

## 참고 자료

- [Docker Desktop 라이선스 발표](https://www.docker.com/blog/updating-product-subscriptions/)
- [Podman 공식 문서](https://podman.io/)
- [Rancher Desktop GitHub](https://github.com/rancher-sandbox/rancher-desktop)
- [Colima GitHub](https://github.com/abiosoft/colima)

---

*이 글은 2021년 12월 작성되었으며, 당시의 상황과 경험을 바탕으로 합니다. 최신 정보는 각 프로젝트의 공식 문서를 참고하세요.*
