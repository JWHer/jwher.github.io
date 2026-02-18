---
authors:
- jwher
description: Install Kubeflow
tags:
  - machine-learning
  - mlops
  - kubeflow
  - installation
  - tutorial
title: 쿠브플로우를 설치하는 다양한 방법
---


![kubeflow](/img/logos/kubeflow.svg)

*쿠브플로우를 설치하는 다양한 방법*
<!--truncate-->

# 목차
* [요구사항](#요구사항)
* [Linux Machine](#linux-machine)
* [Window Machine](#window-machine)
* [Virtual Machine](#virtual-machine)
* [Kind](#kind)

<br/>

## 요구사항

<br/>

### 쿠브플로우에 대한 이해

쿠브플로우 또는 쿠베플로우(kubeflow)라고도 불리는데요,
[쿠브플로우 역할](/docs/machine-learning/platforms/welcome-to-kubeflow) 을 정확히 이해하고 목적에 맞는 배포판을 설치하는 것을 추천합니다.

GCP, AWS에서 SaaS로 쿠버네티스-쿠브플로우를 사용할 수 있습니다.
클라우드를 적극 활용중이거나 충분한 스펙의 하드웨어가 없다면 추천드립니다!  
[GKE](https://cloud.google.com/kubernetes-engine) [EKS](https://aws.amazon.com/ko/eks/)  

이 글에서는 다양한 쿠브플로우를 on-premise 환경에 직접 설치하는 방법을 설명합니다.  

~~사실, 쿠버네티스 클러스터만 갖추어져 있으면 설치방법은 대부분 동일합니다.~~  
[나에게 필요한 쿠버네티스 설치하기](/docs/infrastructure/kubernetes/install-kubernetes)

진짜 아무것도 모르겠고, 더 공부하기도 싫다면 추천하는 방법입니다.  
[miniKF](#번외-minikf)

### 주의사항
* 현재(2021.05.23) github release는 1.2 버전입니다. 하지만 공식 doc이 1.3 버전으로 바뀌었습니다.
* 공식 문서가 굉장히 낡았고 업데이트가 잘 안 되어 있습니다. 1.3으로 버전을 바꾸고 오래된 항목을 삭제한듯 보입니다.
* 본 글은 현재 최신인 1.2 버전의 설치를 다루고 있습니다. [링크](https://v1-2-branch.kubeflow.org/)  


### 최소사양
*아래 설치 방법들 중 최소 요구사항입니다*
* kubernetes
* A minimum of 0.6 CPU in cluster  
* 10GB 이상의 노드 저장 공간

<br/>

## Linux Machine

![linux](/img/logos/linux.svg)

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

쿠버네티스가 없으신 분은 [이글](/docs/infrastructure/kubernetes/install-kubernetes) 설치법을 참고해주세요.  
*호환되는 kubernetes 버전을 꼭 확인해주세요.* :blush:  

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

1. 필요한 파일을 받기 위해 wget을 설치합니다.(curl을 사용해도 됩니다)

 ```shell
 $ apt-get update
 $ apt-get install wget
```

2. kfctl을 설치합니다.

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

3. 쿠브플로우를 설치합니다

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
![windows](/img/logos/windows.svg)

고사양의 개인 PC가 있고, 쿠브플로우를 체험해 보고 싶다면 추천합니다.

### requirments
* docker desktop
* kubernetes

kubernetes 저사양 node 등에 맞춰 다양한 버전이 있습니다. [이글](/docs/infrastructure/kubernetes/install-kubernetes)
에서 여러 kubernetes에 차이점을 잘 설명하고 있습니다.
[Docker desktop](https://jwher.github.io/2021-04-13-install-docker/#windows-docker-%EC%84%A4%EC%B9%98)에
kubernetes를 활성화 시킵니다. (현재 micro k8s를 사용합니다)  

쿠버네티스 클러스터를 구성하셨다면 kfctl을 사용해 linux 버전과 같은 방법으로 설치합니다.  

(커맨드라인 입력 자료가 없어져 요청주시면 다시 작성하겠습니다.)  

configuration을 환경에 맞게 수정해 주어야 합니다. 다음 [블로그](https://sidepun.ch/entry/Kubeflow-%EC%84%A4%EC%B9%98-WSL2-Ubuntu-Docker-Desktop)
에서 잘 설명해 주셔서 참고 부탁드립니다 :sweat:
   
<br/>

## Virtual Machine
![virtualbox](/img/logos/virtualbox.svg)

Virtual Machine을 호스팅 할 수 있는 고사양의 PC/Server가 있고
다른 애플리케이션과 충돌, 쿠버네티스 버전 관리, 테스트 서버 운영이 필요하다면 추천합니다.

### requirements
* kubernetes 구성 능력

VM 또한 쿠버네티스의 노드로 구성 가능합니다. VM을 통해 kubernetes cluster를 구성한다면
Linux에서 kfctl을 사용한 쿠브플로우 설치 방법과 같습니다.  

클러스터간 통신이 되게 네트워크를 구성만 유의해 줍시다. :wink:  
[virtualbox vm 생성](https://jwher.github.io/2021-04-15-Install-Virtualbox-with-no-GUI/)
   
## 번외: miniKF
![minikf](/img/logos/minikf.svg)

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

1. virtualbox/vagrant가 설치된 환경을 준비합니다

2. vagrant를 사용하여 arrikto/minikf VM을 구동시킵니다. 

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
![kind](/img/logos/kind.svg)

쿠버네티스의 한 버전인 Kubernetes in Docker를 사용하여 쿠브플로우를 설치합니다.
Docker Image로 된 쿠버네티스로 단일 노드 쿠버네티스를 빠르게 구성하고자 하면 추천합니다.  

이 글에선 Windows 환경의 WSL2 ubuntu에서 설치하는 방법을 소개합니다.  

#### requirements
* docker가 설치된 컴퓨터

1. Kind 설치  

[Kind 설치](https://jwher.github.io/2021-04-13-install-kubernetes/#kind-%EC%84%A4%EC%B9%98) 를 참고해
쿠버네티스 클러스터를 생성해 주세요.

2. Install kubeflow

쿠브플로우를 설치하기 위해 kfctl과 kustomize를 이용합니다.
linux에서 쿠브플로우를 설치하는 방법과 동일합니다.

필요한 파일을 받기 위해 wget을 설치합니다.(curl을 사용해도 됩니다)
 ```shell
 $ apt-get update
 $ apt-get install wget
```
<br/>

kfctl을 설치합니다.
```shell
# https://github.com/kubeflow/kfctl/releases 에서 kfctl 최신 버전을 확인합니다
$ wget https://github.com/kubeflow/kfctl/releases/download/v1.2.0/kfctl_v1.2.0-0-gbc038f9_linux.tar.gz

# tar 파일을 풀어줍니다
$ tar -xvf kfctl_{tag}_{platform}.tar.gz

# Export path
$ export PATH=$PATH:$PWD
$ export PATH=$PATH:{kfctl_path}
```
<br/>

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
3. 설치 완료 후 쿠브플로우를 확인해 봅니다.

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

## Tips

### 삭제  
쿠브플로우 설치시 종종 파드가 crash나 pending 상태에서 멈춥니다. 😭  
일반적인 오류가 아닐 때 재설치를 위해 삭제해야 합니다.  

```shell
$ kfctl delete -f ${CONFIG_FILE}
```

하지만 모든 쿠브플로우 리소스가 쿠버네티스에서 삭제되지 않습니다.
여러가지 CRD: Custom Resource Define이 남아있죠.

쿠버네티스에 대한 이해가 부족하시다면
가장 효과적인 방법은 쿠버네티스 클러스터의 재설치입니다...  
[쿠버네티스 사용하기](https://jwher.github.io/2021-05-28-kubernetes-usage/)  

이전에 당근마켓 기술블로그에서 쿠브플로우 애로 관련 글을 봤었는데 없어진 듯 하네요...
[당근](https://medium.com/daangn/%EB%94%A5%EB%9F%AC%EB%8B%9D-%EC%B6%94%EC%B2%9C-%EC%8B%9C%EC%8A%A4%ED%85%9C-in-production-fa623877e56a)  
쿠버네티스를 다루는 회사
[두다지](https://github.com/mojokb/kubeflow-book/blob/master/uninstall/kubeflow-uninstall.txt)  
여러 팀들이 동일하게 겪은 문제라 생각하니 마음이 한결 편해지는 것 같습니다:D

<br/>

## Reference  
    
[[공식]Documentation](https://v1-2-branch.kubeflow.org/docs/)  
[[공식]Kind](https://kind.sigs.k8s.io/)



<!-- update log -->
<!--
사진 추가(중요!)
-->
