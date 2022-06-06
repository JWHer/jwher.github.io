---
layout: post

title: "자주쓰는 쿠버네티스 명령어"
redirect_from:
  - /2021-05-28-kubernetes-usage/
thumbnail-img: /assets/img/Kubernetes.svg
categories:
- tech
- kubernetes
excerpt: |
  당신에게 필요한 실전 명령어
date: 2021-05-28 17:50:00 

aside: true
feature_text: |
  # Kubernetes usage
feature_image: "/assets/img/bamboos.jpg"
comments: true
---

<!-- more -->

<!-- image repository: https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/ -->
![Alt](https://raw.githubusercontent.com/JWHer/jwher.github.io/master/assets/img/Kubernetes.svg "kubernetes")  
*쿠버네티스 사용하기*  

# 목차
* [kubectl 설치](kubectl-설치)
* [명령어](명령어)

## kubectl 설치  

설마 kubectl이 없을까요...?  
쿠버네티스를 처음 접하신다면 쿠버네티스 구조를 다룬 [이글](https://jwher.github.io/welcome-to-kubernetes)
먼저 보시는걸 추천합니다.

### requirements

* linux
* kubernetes cluster

### 바이너리 설치
<details markdown="1" open>

<p>1. 바이너리 파일을 다운로드 합니다.</p>

```shell
# 다음 명령으로 최신 kubectl을 다운받습니다
$ curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"

# kubectl은 kubernetes 클러스터와 마이너 버전 차이만 연동 가능합니다
# 예를 들어, v1.21 kubectl은 v1.20, v1.21, v1.22 클러스터와 연동될 수 있습니다
# version을 수정해 특정 버전을 다운받을 수 있습니다
$ curl -LO https://dl.k8s.io/release/{version}/bin/linux/amd64/kubectl

# (선택사항) sha256 체크섬 검증
$ curl -LO "https://dl.k8s.io/{version}/bin/linux/amd64/kubectl.sha256"
$ echo "$(<kubectl.sha256) kubectl" | sha256sum --check

kubectl: OK # 성공시

```

<p>2. 바이너리 파일을 설치합니다.</p>  

```shell
# 설치하기, 바이너리 파일을 이동하는 것 처럼 보입니다
$ sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl

# root 권한이 없어도 ~/.local/bin에 설치할 수 있습니다
$ mkdir -p ~/.local/bin/kubectl
$ mv ./kubectl ~/.local/bin/kubectl
# 그리고 ~/.local/bin/kubectl을 $PATH에 추가해줍니다
$ export $PATH=$PATH:~/.local/bin/kubectl

# 확인해봅시다
$ kubectl cluster-info

Kubernetes master is running at https://server-name:port
KubeDNS is running at https://server-name:port/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy

To further debug and diagnose cluster problems, use 'kubectl cluster-info dump'.

# 실패시 나오는 메시지입니다
The connection to the server <server-name:port> was refused - did you specify the right host or port?
# kubernetes 클러스터와 연결이 안되거나 config 파일에 문제가 있습니다
```

<br/>
</details>

### 패키지 관리자 설치
<details markdown="1" open>

apt나 yum으로 관리되게 설치할 수 있습니다.  

#### 데비안

1. `apt` 인덱스 업데이트와 필요한 패키지를 설치합니다.
```shell
$ sudo apt-get update
$ sudo apt-get install -y apt-transport-https ca-certificates curl
```

2. 구글 클라우드의 퍼블릭 사이닝 키를 다운받습니다.
```shell
$ sudo curl -fsSLo /usr/share/keyrings/kubernetes-archive-keyring.gpg https://packages.cloud.google.com/apt/doc/apt-key.gpg
```

3. 쿠버네티스 `apt` 레프지토리를 추가합니다.
```shell
$ echo "deb [signed-by=/usr/share/keyrings/kubernetes-archive-keyring.gpg] https://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee /etc/apt/sources.list.d/kubernetes.list
```

4. `apt` 인덱스 업데이트 후 kubectl을 설치합니다.
```shell
$ sudo apt-get update
$ sudo apt-get install -y kubectl
```

#### 레드햇
yum 레포지토리에 추가 후 설치합니다.
```shell
cat <<EOF > /etc/yum.repos.d/kubernetes.repo
[kubernetes]
name=Kubernetes
baseurl=https://packages.cloud.google.com/yum/repos/kubernetes-el7-x86_64
enabled=1
gpgcheck=1
repo_gpgcheck=1
gpgkey=https://packages.cloud.google.com/yum/doc/yum-key.gpg https://packages.cloud.google.com/yum/doc/rpm-package-key.gpg
EOF
yum install -y kubectl
```
   
<br/>
</details>

### 다른 패키지 관리자
<details markdown="1" open>

*직접 해보지 않았습니다*

#### snap
우분투일때
```shell
$ snap install kubectl --classic
$ kubectl version --client
```

#### brew
maybe mac...
```shell
$ brew install kubectl
$ kubectl version --client
```
<br/>
</details>

## 명령어
*cheat sheet*  
도커 명령어와 유사한 명령어가 많습니다.

### 조회
<details markdown="1" open>

#### 버전 조회
가볍게 시작해봅시다
```shell
$ kubectl version 

Client Version: version.Info{Major:"1", Minor:"16", GitVersion:"v1.16.0", GitCommit:"2bd9643cee5b3b3a5ecbd3af49d09018f0773c77", GitTreeState:"clean", BuildDate:"2019-09-18T14:36:53Z", GoVersion:"go1.12.9", Compiler:"gc", Platform:"linux/amd64"}
Server Version: version.Info{Major:"1", Minor:"16", GitVersion:"v1.16.15", GitCommit:"2adc8d7091e89b6e3ca8d048140618ec89b39369", GitTreeState:"clean", BuildDate:"2020-09-02T11:31:21Z", GoVersion:"go1.13.15", Compiler:"gc", Platform:"linux/amd64"}
```
<br/>

#### 노드 조회
```shell
$ kubectl get node
NAME        STATUS   ROLES    AGE   VERSION
gpuslave    Ready    <none>   34d   v1.16.0
master      Ready    master   41d   v1.16.0
slave       Ready    <none>   41d   v1.16.0
```
<br/>

#### 노드 라벨 조회
```shell
$ kubectl get nodes –-show-labels

NAME       STATUS   ROLES    AGE   VERSION    LABELS
master     Ready    master   37d   v1.16.15   beta.kubernetes.io/arch=amd64,beta.kubernetes.io/os=linux,kubernetes.io/hostname=master,kubernetes.io/os=linux,node-role.kubernetes.io/master=,type=master
```
<br/>

#### namespace 조회
```shell
$ kubectl get namespace
$ kubectl get ns

NAME                   STATUS   AGE
default                Active   41d
istio-system           Active   41d
kube-node-lease        Active   41d
kube-public            Active   41d
kube-system            Active   41d
nuclio                 Active   6d8h
```
<br/>

#### 리소스 종류 조회
어떤 resource를 공부해야 할지 궁금하다면?  
*주의: 해당 출력은 깁니다. less나 다른 명령어 조합을 추천합니다*
```shell
# 간단하지만 도움이 되는
$ kubectl api-resources
```
<br/>

#### 리소스 조회
리소스/커스텀 리소스 목록을 조회합니다.
`all`을 사용해 존재하는 모든 리소스를 조회할 수 있습니다.
```shell
$ kubectl get {pod|deployment|replicationcontroller|service|all|...} [-n namespace]

# 파드 조회
NAME                                  READY   STATUS    RESTARTS   AGE
my-pod                                1/1     Running   0          28h
```

`wide`를 사용해 자세한 내용을 출력할 수 있습니다.
```shell
$ kubectl get {resource} -o wide

# 파드 조회
NAME                                  READY   STATUS    RESTARTS   AGE   IP             NODE      NOMINATED NODE   READINESS GATES
my-pod                                1/1     Running   0          28h   10.244.0.109   worker    <none>           <none>
```

`json` 파일이나 `yaml` 파일로 출력할 수 있습니다.
```shell
$ kubectl get {resource} -o {json|yaml}
```

확인하고 싶은 필드만 필터링 할 수 있습니다. 🍎
```shell
$ kubectl get {resource} -o custom-columns={NAME:json.path,NAME:json.path,CONTAINERS:.spec.containers[*].name...}
```
<br/>

#### 리소스
```shell
$ kubectl get nodes –-show-labels
```
<br/>

#### 자원 사용량 조회
heapster가 설치되어 있어야 합니다.
```shell
$ kubectl top node {nodename}
```
<br/>

#### 로그 확인
```shell
$ kubectl logs {resource}/{name} [-n {namespace}] [-c {container}]
```

리소스 생성에 문제가 있을 때는 쿠버네티스 로그만 확인할 수 있습니다
```shell
$ kubectl describe {resource}/{name} [-n {namespace}]
```
<br/>
</details>
<hr/>

### 생성
<details markdown="1" open>

#### 파일을 통한 리소스 생성
```shell
$ kubectl apply -f {file.yaml}
```

간단한 deploy는 스트림으로 생성하기도 합니다
```shell
$ kubectl apply -f -<<EOF
> ...
> EOF
```
<br/>

#### 서비스 생성
존재하는 deploy/pod를 서비스로 노출할 수 있습니다.
```shell
$ kubectl expose {deploy/pod}/{name} [--name servicename] [--type ClusterIP|LoadBalancer|NodePort]
```
<br/>
</details>
<hr/>

### 네트워크
<details markdown="1" open>

#### k8s api 서비스 사용
프록시 실행 명령어 입니다.
```shell
$ kubectl proxy
# example
# http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/{URI}
```
<br/>

#### 포트포워딩
간단히 테스트 할 수 있어 자주 사용합니다
```shell
$ kubectl port-forward {resource/name} {port from:port to} [-n {namespace}] [--address={ip}]

# 백그라운드에 계속 유지시키고 싶으면  
$ nohup kubectl port-forward {args} > /dev/null &
```
<br/>

#### 파일복사
호스트 -> 게스트
```shell
$ kubectl cp {host/path} [{namespace}/]{podname}:{guest/path} [-c {container}]
```

게스트 -> 호스트
```shell
$ kubectl cp [{namespace}/]{podname}:{guest/path} [-c {container}] {host/path}
```
<br/>
</details>
<hr/>

### 문제 확인
<details markdown="1" open>

#### 컨테이너 접속
컨테이너를 직접 확인해봅시다
```shell
$ kubectl exec -it {podname} [-n {namespace}] [-c {container}] -- /bin/sh
```

다른 명령어를 실행시켜도 됩니다
```shell
$ kubectl exec {resource}/{name} -- {command}
```

쉘이 실행중이면 attach 명령어를 사용할 수 있습니다
```shell
$ kubectl attach {podname} [-n {namespace}] [-c {container}]
```

*`kubectl`을 사용하지 않고 해당 컨테이너가 실행되고 있는 노드에서 docker 명령어를 사용할 수도 있습니다*  
<br/>
</details>
<hr/>

### 수정/삭제
<details markdown="1" open>

⚠*주의: 백업 수단을 만들고 진행하세요*  
변경 전 ```kubectl get {resource} -o yaml > {resource}.yaml```등의 명령어로 백업하고 진행합니다.  
<br/>

#### 리소스 재시작
```shell
$ kubectl rollout restart {resource}/{name} [-n {namespace}] 
```

리소스 삭제 후 재생성
```shell
$ kubectl get {resource}/{name} [-n {namespace}] -o yaml | kubectl replace --force -f-
```
<br/>

#### 리소스 롤백
[롤백](https://jwher.github.io/k8s-tip-rollback)  

롤아웃 기록 확인
```shell
$ kubectl rollout history {resource}/{name} [-n {namespace}]

REVISION  CHANGE-CAUSE
1         <none>
```

롤백
```shell
$ kubectl rollout undo {resource}/{name} [-n {namespace}] [--to-revision={revision}]
```
<br/>

#### 리소스 강제 삭제
```shell
$ kubectl delete {resource}/{name} [-n {namespace}]  --grace-period=0 -force
$ kubectl patch {resource}/{name} [-n {namespace}] -p '{"metadata": {"finalizers": null}}'
```
<br/>

#### 모든 리소스 삭제
```shell
$ kubectl delete all --all -n {namespace}
```
<br/>

#### 편집

시스템 기본 에디터를 사용합니다(확인 필요)
```shell
$ kubectl edit {resource}/{name} [-n {namespace}] 
```

환경변수로 에디터 선택이 가능합니다
```shell
$ KUBE_EDITOR="nano" kubectl edit {resource}/{name} [-n {namespace}] 
```
<br/>

#### 노드 라벨 설정
```shell
$ kubectl label nodes {node} key={value}
```
<br/>

#### 노드 지정
[노드셀렉터](https://jwher.github.io/k8s-tip-nodeselector)

```shell
$ kubectl edit {resource}/{name} [-n {namespace}] 
#spec>nodeSelector>key=value 값을 설정합니다.
```
<br/>

#### 노드 제거
```shell
$ kubectl drain {nodename} --delete-local-data --force --ignore-daemonsets
# 제거가 잘 되면 status가 Evit로 표시됩니다
```
<br/>
</details>
<hr/>

### 응용
<details markdown="1" open>

#### Running 상태가 아닌 pod 삭제
```shell
$ kubectl delete pod [-n {namespace}] $(kubectl get pod [-n {namespace}] --field-selector=status.phase!=Running -o=custom-columns='':metadata.name)
```
<br/>
</details>
<hr/>

## Tips

개념 이해에 도움이 되는 글입니다
[쿠버네티스 개념](https://jwher.github.io/2021-04-12-welcome-to-kubernetes/)  
(작성 예정: kubernetes architecture)

### Reference  
[[공식]리눅스에 kubectl 설치 및 설정](https://kubernetes.io/ko/docs/tasks/tools/install-kubectl-linux/#install-using-native-package-management)  
[[공식]kubectl-commands](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands)  
[[공식]kubectl 치트 시트](https://kubernetes.io/ko/docs/reference/kubectl/cheatsheet/)


## - JWHer  
좋은 글을 쓰고 싶습니다.

<!-- update log -->
<!--
본문에 추가할 내용을 적는다.
-->
