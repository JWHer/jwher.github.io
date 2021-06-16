---
layout: post
title: "kubernetes usage"
subtitle: "쿠버네티스 사용하기"
cover-img: /assets/img/cover.svg
thumbnail-img: /assets/img/Kubernetes.svg
share-img: /assets/img/Kubernetes.svg
tags: [tech, kubernetes, docker]
comments: true

date: 2021-05-28 17:50:00 
---

<!-- image repository: https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/ -->
![Alt](https://raw.githubusercontent.com/JWHer/jwher.github.io/master/assets/img/Kubernetes.svg "kubernetes")  
*쿠버네티스 사용하기*  

# 목차
* kubectl 설치
* 명령어

## kubectl 설치  

설마 kubectl이 없을까요...?

### requirements

* linux
* kubernetes cluster

### 바이너리 설치

바이너리 다운로드  
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

바이너리 파일 설치  
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

### APT 설치

하단 reference를 참고해주세요:blush: 시간이 나면 작성하겠습니다.
   
<br/>

## 명령어
*cheat sheet*  
도커 명령어와 유사한 명령어가 많습니다.

### 조회 명령어
```shell
# 가볍게 시작해봅시다
$ kubectl version 

Client Version: version.Info{Major:"1", Minor:"16", GitVersion:"v1.16.0", GitCommit:"2bd9643cee5b3b3a5ecbd3af49d09018f0773c77", GitTreeState:"clean", BuildDate:"2019-09-18T14:36:53Z", GoVersion:"go1.12.9", Compiler:"gc", Platform:"linux/amd64"}
Server Version: version.Info{Major:"1", Minor:"16", GitVersion:"v1.16.15", GitCommit:"2adc8d7091e89b6e3ca8d048140618ec89b39369", GitTreeState:"clean", BuildDate:"2020-09-02T11:31:21Z", GoVersion:"go1.13.15", Compiler:"gc", Platform:"linux/amd64"}

# 노드 조회
$ kubectl get node
NAME        STATUS   ROLES    AGE   VERSION
gpuslave    Ready    <none>   34d   v1.16.0
master      Ready    master   41d   v1.16.0
slave       Ready    <none>   41d   v1.16.0

# namespace 조회
$ kubectl get namespace
$ kubectl get ns

NAME                   STATUS   AGE
default                Active   41d
istio-system           Active   41d
kube-node-lease        Active   41d
kube-public            Active   41d
kube-system            Active   41d
nuclio                 Active   6d8h

# 리소스 조회
$ kubectl get {pod|deployment|replicationcontroller|service|...}

# 자원 사용량 조회
$ kubectl top node [{name}]
```

<br/>

### [TL;DR](#간단한-서비스)  
*주의: 해당 섹션은 무지 깁니다. 위의 링크를 눌러 넘어가세요*

어떤 resource를 공부해야 할지 궁금하다면?
```shell
# 간단하지만 도움이 되는
$ kubectl api-resources

NAME                              SHORTNAMES          APIGROUP                           NAMESPACED   KIND
bindings                                                                                 true         Binding
componentstatuses                 cs                                                     false        ComponentStatus
configmaps                        cm                                                     true         ConfigMap
endpoints                         ep                                                     true         Endpoints
events                            ev                                                     true         Event
limitranges                       limits                                                 true         LimitRange
namespaces                        ns                                                     false        Namespace
nodes                             no                                                     false        Node
persistentvolumeclaims            pvc                                                    true         PersistentVolumeClaim
persistentvolumes                 pv                                                     false        PersistentVolume
pods                              po                                                     true         Pod
podtemplates                                                                             true         PodTemplate
replicationcontrollers            rc                                                     true         ReplicationController
resourcequotas                    quota                                                  true         ResourceQuota
secrets                                                                                  true         Secret
serviceaccounts                   sa                                                     true         ServiceAccount
services                          svc                                                    true         Service
adapters                                              config.istio.io                    true         adapter
attributemanifests                                    config.istio.io                    true         attributemanifest
handlers                                              config.istio.io                    true         handler
httpapispecbindings                                   config.istio.io                    true         HTTPAPISpecBinding
httpapispecs                                          config.istio.io                    true         HTTPAPISpec
instances                                             config.istio.io                    true         instance
quotaspecbindings                                     config.istio.io                    true         QuotaSpecBinding
quotaspecs                                            config.istio.io                    true         QuotaSpec
rules                                                 config.istio.io                    true         rule
templates                                             config.istio.io                    true         template
destinationrules                  dr                  networking.istio.io                true         DestinationRule
envoyfilters                                          networking.istio.io                true         EnvoyFilter
gateways                          gw                  networking.istio.io                true         Gateway
serviceentries                    se                  networking.istio.io                true         ServiceEntry
sidecars                                              networking.istio.io                true         Sidecar
virtualservices                   vs                  networking.istio.io                true         VirtualService
ingresses                         ing                 networking.k8s.io                  true         Ingress
networkpolicies                   netpol              networking.k8s.io                  true         NetworkPolicy
runtimeclasses                                        node.k8s.io                        false        RuntimeClass
nuclioapigateways                                     nuclio.io                          true         NuclioAPIGateway
nucliofunctionevents                                  nuclio.io                          true         NuclioFunctionEvent
nucliofunctions                                       nuclio.io                          true         NuclioFunction
nuclioprojects                                        nuclio.io                          true         NuclioProject
clusterrolebindings                                   rbac.authorization.k8s.io          false        ClusterRoleBinding
clusterroles                                          rbac.authorization.k8s.io          false        ClusterRole
rolebindings                                          rbac.authorization.k8s.io          true         RoleBinding
roles                                                 rbac.authorization.k8s.io          true         Role
authorizationpolicies                                 rbac.istio.io                      true         AuthorizationPolicy
clusterrbacconfigs                                    rbac.istio.io                      false        ClusterRbacConfig
rbacconfigs                                           rbac.istio.io                      true         RbacConfig
servicerolebindings                                   rbac.istio.io                      true         ServiceRoleBinding
serviceroles                                          rbac.istio.io                      true         ServiceRole
priorityclasses                   pc                  scheduling.k8s.io                  false        PriorityClass
csidrivers                                            storage.k8s.io                     false        CSIDriver
csinodes                                              storage.k8s.io                     false        CSINode
storageclasses                    sc                  storage.k8s.io                     false        StorageClass
volumeattachments                                     storage.k8s.io                     false        VolumeAttachment
... 일부 생략 ...
```

### 간단한 서비스
```shell
# 기본중에 기본
$ kubectl apply -f {file.yaml}

# 간단한 deploy는 스트림으로 생성하기도 합니다
$ kubectl apply -f -<<EOF
> ...
> EOF

# k8s api를 통해 서비스를 이용할 수 있습니다  
$ kubectl proxy
# example
# http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/{URI}

# 포트포워딩
$ kubectl port-forward {resource/name} {port from:port to} [-n {namespace}] [--address={ip}]
# 바로 연결할수 있어 자주 사용합니다
# 백그라운드에 계속 유지시키고 싶으면  
$ nohup kubectl port-forward {args} > /dev/null &

```

### 문제 확인
```shell
# 컨테이너를 직접 확인해봅시다
$ kubectl exec -it {podname} [-n {namespace}] [-c {container}] -- /bin/sh
# 다른 명령어를 실행시켜도 됩니다
$ kubectl exec {resource}/{name} -- {command}
# 쉘이 실행중이라면 attach 명령어를 사용할 수 있습니다
$ kubectl attach {podname} [-n {namespace}] [-c {container}]
# 해당 컨테이너가 실행되고 있는 노드에서 docker 명령어를 사용할 수도 있습니다

# 로그 확인
$ kubectl logs {resource}/{name} [-n {namespace}] [-c {container}]

# 쿠버네티스 로그 확인
# 리소스 생성에 문제가 있을 때, 확인합니다
$ kubectl describe {resource}/{name} [-n {namespace}]

# 리소스 정보 확인
$ kubectl get {resource} -o yaml [-n {namespace}]

# 컨테이너 리스트 확인
# custom-columns를 사용해 편하게 조회할 수 있습니다
$ kubectl get pod/{name} -n {namespace} -o=custom-columns=NameSpace:.metadata.namespace,NAME:.metadata.name,CONTAINERS:.spec.containers[*].name
```

### 문제 해결
*주의: 백업 수단을 만들고 진행하세요*  
변경 전 ```kubectl get {resource} -o yaml > {resource}.yaml```등의 명령어로 백업하고 진행합니다.  

```shell
# 리소스 재시작
$ kubectl rollout restart {resource}/{name} [-n {namespace}] 

# 리소스 삭제 후 재시작
$ kubectl get {resource}/{name} [-n {namespace}] -o yaml | kubectl replace --force -f-

# 리소스 강제 삭제
$ kubectl delete {resource}/{name} [-n {namespace}]  --grace-period=0 -force
$ kubectl patch {resource}/{name} [-n {namespace}] -p '{"metadata": {"finalizers": null}}'

# 모든 리소스 삭제
$ kubectl delete all --all -n {namespace}

# 편집
# vi로 편집 / 시스템 기본 에디터를 사용하는지 확인이 필요합니다
$ kubectl edit {resource}/{name} [-n {namespace}] 
# 환경변수로 에디터 선택이 가능합니다
$ KUBE_EDITOR="nano" kubectl edit {resource}/{name} [-n {namespace}] 

# 노드 라벨 설정
# spec>nodeSelector>key=value 로 worker 지정
$ kubectl label nodes {node} key={value}
# 라벨 조회
#$ kubectl get nodes –-show-labels
 
# 노드 안전하게 제거
$ kubectl drain {nodename} --delete-local-data --force --ignore-daemonsets
# 제거가 잘 되면 status가 Evit로 표시됩니다
```

### 응용
```shell
# pending 상태의 pods 삭제
$ kubectl delete pod [-n {namespace}] $(kubectl get pod -A --field-selector=status.phase=Pending -o=custom-columns='':metadata.name)
```

### 기타
```shell
# 파일 복사
# 호스트 -> 게스트
$ kubectl cp {host/path} [{namespace}/]{podname}:{guest/path} [-c {container}]
# 게스트 -> 호스트
$ kubectl cp [{namespace}/]{podname}:{guest/path} [-c {container}] {host/path}
```

<br/>

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
