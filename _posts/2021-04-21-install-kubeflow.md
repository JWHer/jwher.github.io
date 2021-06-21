---
layout: post
title: "Install kubeflow"
subtitle: "쿠브플로우를 설치하는 다양한 방법"
cover-img: /assets/img/Kubeflow.gif
thumbnail-img: /assets/img/kubeflow.svg
share-img: /assets/img/kubeflow.svg
tags: [tech, kubeflow, kubernetes, linux]
comments: true

date: 2021-04-21 11:50:00 
---
 
<!-- image repository: https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/ -->
<p align="center">
<img src="https://raw.githubusercontent.com/JWHer/jwher.github.io/master/assets/img/kubeflow.svg" style="height: 40vmin;" />  
</p>

*쿠브플로우를 설치하는 다양한 방법*  

# 목차
* [Preflight](#Preflight)
* [Linux Machine](#Linux-Machine)
* [Window Machine](#Window-Machine)
* [Virtual Machine](#Virtual-Machine)
* [Kind](#Kind)

<br/>

## Preflight

[쿠브플로우 역할](https://jwher.github.io/2021-06-19-welcome-to-kubeflow/) 을 정확히 이해하고 목적에 맞는 배포판을 설치하는 것을 추천합니다.

GCP, AWS에서 SaaS로 쿠버네티스-쿠브플로우를 사용할 수 있는 것으로 알고있습니다.
[GKE](https://cloud.google.com/kubernetes-engine) [EKS](https://aws.amazon.com/ko/eks/)  
클라우드를 적극 활용중이거나 충분한 스펙의 하드웨어가 없다면 추천드립니다!

이 글에서는 다양한 쿠브플로우를 on-premise 환경에 직접 설치하는 방법을 설명합니다.  
~~사실, 쿠버네티스 클러스터만 갖추어져 있으면 설치방법은 대부분 동일합니다.~~

### 주의사항
* 현재(2021.05.23) github release는 1.2 버전입니다. 하지만 공식 doc이 1.3 버전으로 바뀌었습니다.
* 공식 문서가 굉장히 낡았고 업데이트가 잘 안 되어 있습니다. 1.3으로 버전을 바꾸고 오래된 항목을 삭제한듯 보입니다.
* 본 글은 현재 최신인 1.2 버전의 설치를 다루고 있습니다. [링크](https://v1-2-branch.kubeflow.org/)  


### requirements
*아래 설치 방법들 중 최소 요구사항입니다*
* kubernetes
* A minimum of 0.6 CPU in cluster  
* 10GB 이상의 노드 저장 공간

<br/>

## Linux Machine

가장 일반적인 구성방식입니다.
다른 설치법의 기본이 되니 참고해주세요 :grinning:  

kfctl과 kustomize를 이용한 설치 방법을 설명합니다.  
여기에선 다중 사용자의 인증기능을 제공하는 dex 버전을 사용했습니다.   
[[공식]istio](https://v1-2-branch.kubeflow.org/docs/started/k8s/kfctl-k8s-istio/)  
[[공식]dex](https://v1-2-branch.kubeflow.org/docs/started/k8s/kfctl-istio-dex/)

### requirments
* kubernetes master node
* 4 CPU 이상
* 50GB 이상 디스크
* 12GB 이상 메모리

### 설치

쿠버네티스가 없으신 분은 [이글](https://jwher.github.io/2021-04-13-install-kubernetes/) 설치법을 참고해주세요.  
아! 호환되는 kubernetes 버전을 꼭 확인해주세요. :blush:  

<!--
![Alt](https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/kubeflow-version-matrix.png "kubeflow-version-matrix")
-->

<!--
<style>
.kubeversion tr:nth-child(2) td {
    background-color: #BBDEFB;
}
.kubeversion tr:nth-child(2) td:nth-child(6) {
    background-color: inherit;
}
</style>
-->

| 쿠버네티스 버전 | 쿠브플로우0.4 | 쿠브플로우0.5 | 쿠브플로우0.6 | 쿠브플로우0.7 | 쿠브플로우1.0    | 쿠브플로우1.1    | 쿠브플로우1.2    |
|-----------------|---------------|---------------|---------------|---------------|------------------|------------------|------------------|
| 1.11            | **호환**      | **호환**      | 호환 안됨     | 호환 안됨     | 호환 안됨        | 호환 안됨        | 호환 안됨        |
| 1.12            | **호환**      | **호환**      | 호환 안됨     | 호환 안됨     | 호환 안됨        | 호환 안됨        | 호환 안됨        |
| 1.13            | **호환**      | **호환**      | 호환 안됨     | 호환 안됨     | 호환 안됨        | 호환 안됨        | 호환 안됨        |
| 1.14            | **호환**      | **호환**      | **호환**      | **호환**      | **호환**         | **호환**         | **호환**         |
| 1.15            | 호환 안됨     | **호환**      | **호환**      | **호환**      | **호환**         | **호환**         | **호환**         |
| 1.16            | 호환 안됨     | 호환 안됨     | 호환 안됨     | 호환 안됨     | **호환**         | **호환**         | **호환**         |
| 1.17            | 호환 안됨     | 호환 안됨     | 호환 안됨     | 호환 안됨     | 알려진 문제 없음 | 알려진 문제 없음 | 알려진 문제 없음 |
| 1.18            | 호환 안됨     | 호환 안됨     | 호환 안됨     | 호환 안됨     | 알려진 문제 없음 | 알려진 문제 없음 | 알려진 문제 없음 |
| 1.19            | 호환 안됨     | 호환 안됨     | 호환 안됨     | 호환 안됨     | 알려진 문제 없음 | 알려진 문제 없음 | 알려진 문제 없음 |
| 1.20            | 호환 안됨     | 호환 안됨     | 호환 안됨     | 호환 안됨     | 알려진 문제 없음 | 알려진 문제 없음 | 알려진 문제 없음 |


[참조](https://v1-2-branch.kubeflow.org/docs/started/k8s/overview/)
*알려진 문제가 없다고 하지만 쿠버네티스1.2-쿠브플로우1.2 버전은 여러 오류가 발생합니다* :sweat:  
*쿠버네티스 1.16 버전을 사용하는 것을 권장합니다*  

*쿠브플로우 0.6 이후 버전부터 kustomize를 사용합니다*  
*따라서 쿠브플로우 0.6 이상 버전을 권장합니다*  

<br/>

<p> 1. 필요한 파일을 받기 위해 wget을 설치합니다.(curl을 사용해도 됩니다)</p>

 ```shell
 $ apt-get update
 $ apt-get install wget
```

<p> 2. kfctl을 설치합니다.</p>

kfctl은 쿠브플로우 컴포넌트를 배포하기 위한 커멘드라인 툴입니다.  
쿠버네티스 커맨드라인 툴인 kubectl을 생각해보면 쉽겠죠?
```shell
# https://github.com/kubeflow/kfctl/releases 에서 kfctl 최신 버전을 확인합니다
$ wget https://github.com/kubeflow/kfctl/releases/download/v1.2.0/kfctl_v1.2.0-0-gbc038f9_linux.tar.gz

# tar 파일을 풀어줍니다
$ tar -xvf kfctl_{tag}_{platform}.tar.gz

# Export path
$ export PATH=$PATH:$PWD
$ export PATH=$PATH:{kfctl_path}
```

<p> 3. 쿠브플로우를 설치합니다</p>

```shell
# 설치 yaml을 저장합니다
$ wget https://raw.githubusercontent.com/kubeflow/manifests/v1.2-branch/kfdef/kfctl_istio_dex.v1.2.0.yaml

$ kfctl apply -V -f {config_file}

...생략...
INFO[0285] Successfully applied application kfserving    filename="kustomize/kustomize.go:291"
INFO[0285] Applied the configuration Successfully!       filename="cmd/apply.go:75"
```

(가끔 pv를 직접 생성해 줘야 하는 문제가 있습니다. 나중에 작성하겠습니다.)

<br/>

## Window Machine
<img src="https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/Windows.svg" style="height: 40vmin;" />  

고사양의 개인 PC가 있고, 쿠브플로우를 체험해 보고 싶다면 추천합니다.

### requirments
* docker desktop
* kubernetes

Docker desktop에 kubernetes를 활성화 시킵니다. (micro k8s를 사용합니다)  
(이미지 추가)
kubernetes 저사양 node 등에 맞춰 다양한 버전이 있습니다. [다음](https://www.reddit.com/r/kubernetes/comments/be0415/k3s_minikube_or_microk8s/)
에서 여러 kubernetes에 차이점을 잘 설명하고 있습니다.

(자료가 없어져 다음에 작성하겠습니다. kfctl을 사용해 linux 버전과 같은 방법으로 설치합니다)  
configuration을 환경에 맞게 수정해 주어야 합니다. 다음 [블로그](https://sidepun.ch/entry/Kubeflow-%EC%84%A4%EC%B9%98-WSL2-Ubuntu-Docker-Desktop)
에서 잘 설명해 주셔서 참고 부탁드립니다 :sweat:
   
<br/>

## Virtual Machine

Virtual Machine을 호스팅 할 수 있는 고사양의 PC/Server가 있고
다른 애플리케이션과 충돌, 쿠버네티스 버전 관리, 테스트 서버 운영이 필요하다면 추천합니다.

### requirements
* kubernetes 구성 능력

VM 또한 쿠버네티스의 노드로 구성 가능합니다. VM을 통해 kubernetes cluster를 구성한다면
Linux에서 kfctl을 사용한 쿠브플로우 설치 방법과 같습니다.  

클러스터간 통신이 되게 네트워크를 구성만 유의해 줍시다. :wink:  
[virtualbox vm 생성](https://jwher.github.io/2021-04-15-Install-Virtualbox-with-no-GUI/)
   
### 번외: miniKF
<img src="https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/minikf.png" style="height: 40vmin;" />  

miniKF를 통해 간편히 설치할 수 있습니다.
한개의 VM 단일 노드 쿠버네티스에서 작동하는 쿠브플로우로
그나마 일반적인 PC에서 쿠브플로우를 학습용으로 사용해 볼 수 있습니다.  
[공식 문서](https://www.kubeflow.org/docs/distributions/minikf/minikf-vagrant/)

### requirements
* 12GB RAM  
* 2 CPUs  
* 50GB disk space  
* Linux, macOS, Windows
* Virtualbox/Vagrant

Virtualbox/Vagrant를 사용하여 잘 구성된 kubeflow 클러스터 vm을 실행시킵니다.
편하고, 잘 동작하는 쿠브플로우를 빠르게 구성할 수 있는 장점이 있으나
VM 환경이 같는 한계, 현재 지원이 종료된 문제가 있습니다.

<p>1. virtualbox/vagrant가 설치된 환경을 준비합니다</p>

<p>2. vagrant를 사용하여 arrikto/minikf VM을 구동시킵니다. </p>

```shell
> vagrant init arrikto/minikf
> vagrant up
```
몇 번 종료될 때가 있습니다. 당황하지 말고 vagrant up을 다시 실행시키면 됩니다.  
계속 실패할 경우 cache 파일을 전부 삭제하고 다시 시도합니다.  

설치가 완료되면 http://10.10.10.10에서 kubeflow를 사용할 수 있습니다.
*참 쉽죠?*   

<br/>

## Kind
<img src="https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/kind.png" style="height: 40vmin;" />  

쿠버네티스의 한 버전인 Kubernetes in Docker를 사용하여 쿠브플로우를 설치합니다.
Docker Image로 된 쿠버네티스로 단일 노드 쿠버네티스를 빠르게 구성하고자 하면 추천합니다.  

이 글에선 Windows 환경의 docker desktop에서 설치하는 방법을 소개합니다.  
~~사실 쿠버네티스 클러스터 구성이 더 깁니다~~

#### requirements
* docker가 설치된 컴퓨터

<p>1. Install Kind</p>  

OS에 맞게 설치합니다

 ```shell
# On Linux
$ curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.10.0/kind-linux-amd64
$ chmod +x ./kind

# On Mac
~ curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.10.0/kind-darwin-amd64
# or
~ brew install kind

# On Windows
> curl.exe -Lo kind-windows-amd64.exe https://kind.sigs.k8s.io/dl/v0.10.0/kind-windows-amd64
# or
> choco install kind
 ```

<p>2. 쿠버네티스 클러스터 생성</p>  

클러스터 생성 시 쿠브플로우를 사용할 것이므로 port-forwarding을 해주어야 합니다.  
다음 yaml을 작성합니다.  
(세부적인 ingress 설정은 [[공식]Ingress](https://kind.sigs.k8s.io/docs/user/ingress)  참고합시다)
 ```yaml
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
nodes:
- role: control-plane
  # port forward 80 on the host to 80 on this node
  extraPortMappings:
  - containerPort: 31380
    hostPort: 31380
    # optional: set the bind address on the host
    # 0.0.0.0 is the current default
    listenAddress: "0.0.0.0"
    # optional: set the protocol to one of TCP, UDP, SCTP.
    # TCP is the default
    protocol: TCP
 ```

<br/>  
클러스터를 생성합니다.

 ```shell
> kind create cluster
# or
> kind create cluster --config {config}.yaml

   Creating cluster "kind" ...
 • Ensuring node image (kindest/node:v1.20.2) 🖼  ...
 ✓ Ensuring node image (kindest/node:v1.20.2) 🖼
 • Preparing nodes 📦   ...
 ✓ Preparing nodes 📦
 • Writing configuration 📜  ...
 ✓ Writing configuration 📜
 • Starting control-plane 🕹️  ...
 ✓ Starting control-plane 🕹️
 • Installing CNI 🔌  ...
 ✓ Installing CNI 🔌
 • Installing StorageClass 💾  ...
 ✓ Installing StorageClass 💾
Set kubectl context to "kind-kind"
You can now use your cluster with:

kubectl cluster-info --context kind-kind

Have a question, bug, or feature request? Let us know! https://kind.sigs.k8s.io/#community 🙂
 ```

<p>3. Access Cluster</p>

쿠버네티스 노드 쉘에 접속합니다.
 ```shell
# 디폴트 쉘이 bash가 아니면
# /bin/bash

$ kubectl --version
  
Client Version: version.Info{Major:"1", Minor:"20", GitVersion:"v1.20.2", GitCommit:"faecb196815e248d3ecfb03c680a4507229c2a56", GitTreeState:"clean", BuildDate:"2021-01-21T01:10:43Z", GoVersion:"go1.15.5", Compiler:"gc", Platform:"linux/amd64"}
The connection to the server localhost:8080 was refused - did you specify the right host or port?
 
# conf 파일을 복사해 주면 kubectl을 이용할 수 있습니다
$ mkdir -p $HOME/.kube
$ cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
$ chown $(id -u):$(id -g) $HOME/.kube/config

$ kubectl --version

Client Version: version.Info{Major:"1", Minor:"20", GitVersion:"v1.20.2", GitCommit:"faecb196815e248d3ecfb03c680a4507229c2a56", GitTreeState:"clean", BuildDate:"2021-01-21T01:10:43Z", GoVersion:"go1.15.5", Compiler:"gc", Platform:"linux/amd64"}
Server Version: version.Info{Major:"1", Minor:"20", GitVersion:"v1.20.2", GitCommit:"faecb196815e248d3ecfb03c680a4507229c2a56", GitTreeState:"clean", BuildDate:"2021-01-21T01:11:42Z", GoVersion:"go1.15.5", Compiler:"gc", Platform:"linux/amd64"}
 ```  

<br/>
쿠버네티스 클러스터를 확인합니다. 

 ```shell
$ kubectl get node

NAME                 STATUS   ROLES                  AGE   VERSION
kind-control-plane   Ready    control-plane,master   23m   v1.20.2

$ kubectl get pod -A

NAMESPACE            NAME                                         READY   STATUS    RESTARTS   AGE
kube-system          coredns-74ff55c5b-jwwg7                      1/1     Running   0          23m
kube-system          coredns-74ff55c5b-v4l25                      1/1     Running   0          23m
kube-system          etcd-kind-control-plane                      1/1     Running   0          23m
kube-system          kindnet-fqkvr                                1/1     Running   0          23m
kube-system          kube-apiserver-kind-control-plane            1/1     Running   0          23m
kube-system          kube-controller-manager-kind-control-plane   1/1     Running   0          23m
kube-system          kube-proxy-hq6qz                             1/1     Running   0          23m
kube-system          kube-scheduler-kind-control-plane            1/1     Running   0          23m
local-path-storage   local-path-provisioner-78776bfc44-pv9gw      1/1     Running   0          23m
 ```

<p>4. Install kubeflow</p>

쿠브플로우를 설치하기 위해 kfctl과 kustomize를 이용합니다.
linux에서 쿠브플로우를 설치하는 방법과 동일합니다.

필요한 파일을 받기 위해 wget을 설치합니다.(curl을 사용해도 됩니다)
 ```shell
 $ apt-get update
 $ apt-get install wget
```

```shell
# https://github.com/kubeflow/kfctl/releases 에서 kfctl 최신 버전을 확인합니다
$ wget https://github.com/kubeflow/kfctl/releases/download/v1.2.0/kfctl_v1.2.0-0-gbc038f9_linux.tar.gz

# tar 파일을 풀어줍니다
$ tar -xvf kfctl_{tag}_{platform}.tar.gz

# Export path
$ export PATH=$PATH:$PWD
$ export PATH=$PATH:{kfctl_path}
```

쿠브플로우를 설치합니다
```shell
# 설치 yaml을 저장합니다
$ wget https://raw.githubusercontent.com/kubeflow/manifests/v1.2-branch/kfdef/kfctl_istio_dex.v1.2.0.yaml

$ kfctl apply -V -f {config_file}

...생략...
INFO[0285] Successfully applied application kfserving    filename="kustomize/kustomize.go:291"
INFO[0285] Applied the configuration Successfully!       filename="cmd/apply.go:75"
```

<br/>  

<p>5. 설치 완료 후 쿠브플로우를 확인해 봅니다.</p>

 ```shell
$ kubectl get ns

NAME                 STATUS   AGE
auth                 Active   101s
cert-manager         Active   6m17s
default              Active   45m
istio-system         Active   6m16s
knative-serving      Active   95s
kube-node-lease      Active   45m
kube-public          Active   45m
kube-system          Active   45m
kubeflow             Active   6m17s
local-path-storage   Active   45m

# 볼륨도 맵핑이 잘 되었나 확인합니다
$ kubectl get pvc -A

NAMESPACE      NAME              STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS   AGE
istio-system   authservice-pvc   Bound    pvc-48952a53-882e-436b-8396-97cee94acf28   10Gi       RWO            standard       4m31s
kubeflow       katib-mysql       Bound    pvc-9afd9ddf-3f1e-4b05-9fac-2cd56af6393a   10Gi       RWO            standard       4m28s
kubeflow       metadata-mysql    Bound    pvc-0f0e907b-7786-42bb-bc40-1b784ac6cddb   10Gi       RWO            standard       4m28s
kubeflow       minio-pvc         Bound    pvc-1d18caf0-08e6-44d8-b366-223e67dee1e5   20Gi       RWO            standard       4m28s
kubeflow       mysql-pv-claim    Bound    pvc-c4dbe4b2-6a39-467f-a0be-5f54ff45054d   20Gi       RWO            standard       4m28s
 ```
설치 후 pod 생성까지 시간이 좀 걸리니 기다려야 합니다 :)

<br/>

### Reference  
    
[[공식]Documentation](https://v1-2-branch.kubeflow.org/docs/)  
[[공식]Kind](https://kind.sigs.k8s.io/)


## - JWHer  
좋은 글을 쓰고 싶습니다.

<!-- update log -->
<!--
사진 추가(중요!)
-->
