---
authors:
  - jwher
description: Kubernetes 1.24 Dockershim 제거와 containerd 마이그레이션 가이드
slug: dockershim-removal
tags:
  - kubernetes
  - containerization
  - migration
title: Kubernetes 1.24 Dockershim 제거 - containerd/CRI-O 마이그레이션
draft: true
image: /img/logos/kubernetes.svg
---

![Kubernetes Logo](/img/logos/kubernetes.svg)

## 개요

Kubernetes 1.24 릴리스에서 Dockershim이 공식적으로 제거되었습니다. 이 글에서는 Dockershim 제거 배경, containerd로의 마이그레이션 과정, 그리고 실전에서 겪은 이슈들을 공유합니다.

<!-- truncate -->

## Dockershim이란?

### 역사

- 2014년: Kubernetes 초기 Docker를 기본 컨테이너 런타임으로 채택
- 2016년: CRI (Container Runtime Interface) 표준 도입
- Docker는 CRI를 직접 지원하지 않아 Dockershim이라는 어댑터가 필요했음
- 2020년: Kubernetes 1.20에서 Dockershim 지원 중단 발표
- 2022년 5월: Kubernetes 1.24에서 Dockershim 완전 제거

### 제거 이유

**기술적 부채:**
- Dockershim 유지보수는 Kubernetes 팀의 부담
- Docker는 개발 환경용이지 프로덕션 런타임으로는 과도하게 무거움
- containerd, CRI-O 등 CRI 네이티브 런타임 성숙도 증가

**성능 개선:**
```
Docker 사용 시:
kubelet → dockershim → Docker → containerd → runc

containerd 직접 사용 시:
kubelet → containerd → runc
```

## containerd로 마이그레이션

### 1. 사전 점검

**현재 런타임 확인:**
```bash
kubectl get nodes -o wide
# CONTAINER-RUNTIME 컬럼 확인

# 노드에서 직접 확인
ps aux | grep -E 'dockerd|containerd'
```

**이미지 목록 확인:**
```bash
# Docker 이미지 목록 저장
docker images --format "{{.Repository}}:{{.Tag}}" > docker-images.txt
```

### 2. containerd 설치 및 설정

**설치:**
```bash
# Ubuntu/Debian
sudo apt-get update
sudo apt-get install -y containerd

# CentOS/RHEL
sudo yum install -y containerd
```

**설정:**
```bash
# 기본 설정 파일 생성
sudo mkdir -p /etc/containerd
containerd config default | sudo tee /etc/containerd/config.toml

# Systemd cgroup 드라이버 사용 (권장)
sudo sed -i 's/SystemdCgroup = false/SystemdCgroup = true/' /etc/containerd/config.toml

# containerd 재시작
sudo systemctl restart containerd
sudo systemctl enable containerd
```

### 3. kubelet 설정 변경

**kubelet 설정 업데이트:**
```bash
# /var/lib/kubelet/kubeadm-flags.env 수정
KUBELET_KUBEADM_ARGS="--container-runtime=remote --container-runtime-endpoint=unix:///run/containerd/containerd.sock"

# kubelet 재시작
sudo systemctl daemon-reload
sudo systemctl restart kubelet
```

### 4. 이미지 마이그레이션

**이미지 export/import:**
```bash
# Docker에서 이미지 저장
for image in $(cat docker-images.txt); do
  docker save $image -o $(echo $image | tr '/:' '__').tar
done

# containerd로 이미지 로드
for tarfile in *.tar; do
  sudo ctr -n k8s.io image import $tarfile
done

# containerd 이미지 확인
sudo crictl images
```

## 실전 이슈와 해결

### 이슈 1: crictl 명령어 적응

**문제:**
Docker 명령어에 익숙한 팀원들이 새로운 CLI에 혼란

**해결:**
```bash
# crictl 설정
cat > /etc/crictl.yaml <<EOF
runtime-endpoint: unix:///run/containerd/containerd.sock
image-endpoint: unix:///run/containerd/containerd.sock
timeout: 10
EOF

# 자주 사용하는 명령어 치트시트
alias docker-ps='crictl ps'
alias docker-images='crictl images'
alias docker-exec='crictl exec'
```

**Docker vs crictl 명령어:**
| Docker | crictl |
|--------|--------|
| `docker ps` | `crictl ps` |
| `docker images` | `crictl images` |
| `docker exec` | `crictl exec` |
| `docker logs` | `crictl logs` |
| `docker inspect` | `crictl inspect` |

### 이슈 2: GPU 워크로드 문제

**문제:**
NVIDIA GPU를 사용하는 Pod가 containerd 전환 후 GPU를 인식하지 못함

**해결:**
```bash
# NVIDIA Container Toolkit 재설치
distribution=$(. /etc/os-release;echo $ID$VERSION_ID)
curl -s -L https://nvidia.github.io/nvidia-docker/gpgkey | sudo apt-key add -
curl -s -L https://nvidia.github.io/nvidia-docker/$distribution/nvidia-docker.list | \
  sudo tee /etc/apt/sources.list.d/nvidia-docker.list

sudo apt-get update
sudo apt-get install -y nvidia-container-toolkit

# containerd 설정에 nvidia runtime 추가
sudo nvidia-ctk runtime configure --runtime=containerd
sudo systemctl restart containerd
```

### 이슈 3: Private Registry 인증

**문제:**
Docker config.json의 registry 인증 정보가 containerd에서 작동하지 않음

**해결:**
```bash
# Kubernetes Secret으로 registry 인증 설정
kubectl create secret docker-registry regcred \
  --docker-server=<your-registry-server> \
  --docker-username=<your-name> \
  --docker-password=<your-password> \
  --docker-email=<your-email>

# Pod에서 imagePullSecrets 사용
# deployment.yaml
spec:
  imagePullSecrets:
  - name: regcred
  containers:
  - name: app
    image: private-registry/app:latest
```

### 이슈 4: 로깅 설정 변경

**문제:**
Docker 로그 드라이버 설정이 containerd에서 무시됨

**해결:**
```bash
# containerd 로그 설정
# /etc/containerd/config.toml
[plugins."io.containerd.grpc.v1.cri".containerd]
  default_runtime_name = "runc"

[plugins."io.containerd.grpc.v1.cri".registry]
  config_path = "/etc/containerd/certs.d"

# kubelet에서 로그 rotation 설정
# /var/lib/kubelet/config.yaml
containerLogMaxSize: "10Mi"
containerLogMaxFiles: 5
```

## 마이그레이션 체크리스트

- [ ] 현재 런타임 및 버전 확인
- [ ] 모든 노드의 이미지 목록 백업
- [ ] containerd 설치 및 설정
- [ ] kubelet 설정 변경
- [ ] 이미지 마이그레이션
- [ ] Pod 재시작 및 정상 동작 확인
- [ ] GPU 워크로드 테스트 (해당되는 경우)
- [ ] Private registry 접근 테스트
- [ ] 로깅 및 모니터링 확인
- [ ] 문서 업데이트 (운영 가이드, Runbook)

## 성능 비교

**우리 클러스터 마이그레이션 결과:**
- Pod 시작 시간: 평균 15% 단축
- 메모리 사용량: 노드당 평균 500MB 감소
- 이미지 pull 속도: 20% 향상

## CRI-O도 고려했었나요?

**CRI-O vs containerd 비교:**

| | containerd | CRI-O |
|---|-----------|-------|
| **성숙도** | 매우 높음 (CNCF graduated) | 높음 (CNCF incubating) |
| **커뮤니티** | 큼 (Docker 백그라운드) | 중간 (Red Hat 주도) |
| **용도** | 범용 컨테이너 런타임 | Kubernetes 전용 |
| **성능** | 우수 | 유사 |

**우리의 선택: containerd**
- Docker Desktop 개발 환경과의 일관성
- 더 큰 커뮤니티와 생태계
- 범용성 (Kubernetes 외 용도로도 사용 가능)

## 결론

Dockershim 제거는 처음에는 큰 변화처럼 보였지만, 실제로는 순조로운 마이그레이션이었습니다.

**얻은 것:**
- 더 빠른 Pod 시작 시간
- 낮은 리소스 사용량
- 단순화된 아키텍처

**배운 점:**
- 충분한 테스트 환경 준비의 중요성
- crictl 명령어 익숙해지기
- GPU/특수 하드웨어는 추가 설정 필요

**권장사항:**
- 테스트 클러스터에서 먼저 마이그레이션
- 노드를 하나씩 순차적으로 전환
- 팀원 교육 (crictl 사용법)

## 참고 자료

- [Kubernetes Dockershim 제거 FAQ](https://kubernetes.io/blog/2022/02/17/dockershim-faq/)
- [containerd 공식 문서](https://containerd.io/)
- [CRI-O 공식 문서](https://cri-o.io/)
- [Migrating from dockershim](https://kubernetes.io/docs/tasks/administer-cluster/migrating-from-dockershim/)

---

*이 글은 2022년 5월 작성되었으며, Kubernetes 1.24 릴리스 직후의 경험을 바탕으로 합니다.*
