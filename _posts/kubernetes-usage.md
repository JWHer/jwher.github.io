---
layout: post
title: "kubernetes usage"
subtitle: "쿠버네티스 사용하기"
cover-img: /assets/img/cover.svg
thumbnail-img: /assets/img/kubernetes.svg
share-img: /assets/img/kubernetes.jpg
tags: [tech, kubernetes, docker]
comments: true

date: 2021-05-26 17:50:00 
---

<!-- image repository: https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/ -->
![Alt](https://raw.githubusercontent.com/JWHer/jwher.github.io/master/assets/img/Kubernetes.svg "kubernetes")  
*쿠버네티스 사용하기*  

# 목차
* kubectl 설치
* 명령어

## kubectl 설치  

본 글은 linux에서 kubectl을 설치하는 방법을 다룬다.

### requirements

* linux
* kubernetes cluster

### 바이너리 설치

바이너리 다운로드  
```shell
# 다음 명령으로 최신 kubectl을 다운받는다
$ curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"

# kubectl은 kubernetes 클러스터와 마이너 버전 차이만 연동 가능하다
# 예를 들어, v1.21 kubectl은 v1.20, v1.21, v1.22 클러스터와 연동될 수 있다
# version을 수정해 특정 버전을 다운받을 수 있다
$ curl -LO https://dl.k8s.io/release/{version}/bin/linux/amd64/kubectl

# (선택사항) sha256 체크섬 검증
$ curl -LO "https://dl.k8s.io/{version}/bin/linux/amd64/kubectl.sha256"
$ echo "$(<kubectl.sha256) kubectl" | sha256sum --check

kubectl: OK # 성공시
```

바이너리 파일 설치  
```shell
# 설치하기, 사실 이동하기와 다를 바 없다
$ sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl

# root 권한이 없어도 ~/.local/bin에 설치할 수 있다
$ mkdir -p ~/.local/bin/kubectl
$ mv ./kubectl ~/.local/bin/kubectl
# 그리고 ~/.local/bin/kubectl을 $PATH에 추가

# 확인해보자
$ kubectl cluster-info

Kubernetes master is running at https://server-name:port
KubeDNS is running at https://server-name:port/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy

To further debug and diagnose cluster problems, use 'kubectl cluster-info dump'.

# 실패시
The connection to the server <server-name:port> was refused - did you specify the right host or port?
# kubernetes 클러스터와 연결이 안되거나 config 파일에 문제가 있다
```

### APT 설치

하단 reference 참고. 필요하면 작성하겠다.
   
<br/>

## 명령어
*cheat sheet*

### 조회 명령어
```shell
# 가볍게 시작하자
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
```

<br/>

### TL;DR

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
```

### 간단한 서비스
```shell
# 기본중에 기본
$ kubectl apply -f {file.yaml}

# 간단한 deploy는 스트림으로 생성하기도 한다
$ kubectl apply -f -<<EOF
> ...
> EOF

# k8s api를 통해 서비스를 이용할 수 있다
$ kubectl proxy
# example
# http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/{URI}

# 포트포워딩
$ kubectl port-forward {resource/name} -n {namespace} {port from:port to} {--address=ip}
# 바로 연결할수 있어 주로 사용하게 된다
# 백그라운드에 계속 유지시키고 싶으면
$ nohup kubectl port-forward {args} > /dev/null

```

<br/>

## Tips

h2로 작성

### Reference  
[https://kubernetes.io/ko/docs/tasks/tools/install-kubectl-linux/#install-using-native-package-management](https://kubernetes.io/ko/docs/tasks/tools/install-kubectl-linux/#install-using-native-package-management)
[https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands)


## - JWHer  
좋은 글을 쓰고 싶습니다.

<!-- update log -->
<!--
본문에 추가할 내용을 적는다.
-->