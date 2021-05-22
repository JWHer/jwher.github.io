---
layout: post
title: "Install kubeflow"
subtitle: "kubeflow를 설치하는 다양한 방법"
cover-img: /assets/img/cover.svg
thumbnail-img: /assets/img/kubeflow.svg
tags: [tech, kubeflow, kubernetes, linux]
comments: true

date: 2021-04-21 11:50:00 
---
 
<!-- image repository: https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/ -->
![Alt](https://raw.githubusercontent.com/JWHer/jwher.github.io/master/assets/img/kubeflow.svg "kubeflow")  
*kubeflow를 설치하는 다양한 방법*  

# 목차
* [Preflight](#Preflight)
* [Linux Machine](#Linux-Machine)
* Window Machine
* Virtual Machine
* Kind

## Preflight

### Overview
DevOps라는 단어를 들어본 적이 있는가?  
이전에 소프트웨어를 개발해 배포하고 관리하는 것은 Engineer의 몫이였다.  

하지만, 수많은 서버에 배포/관리 작업은 *힘들다*  
특히나 이미 동작중인 소프트웨어의 버전을 업데이트 하거나, 무정지로 작동해야 할 때, 심지어는 오류로 인한
Rollback 상황까지 생각하면...
> 정신 나갈 것 같애!

<br/>
ML Production flow는 일반적으로 다음 단계를 거친다.

1. Project setup  
2. Data pipeline  
3. Modeling & training  
4. Serving

수요가 높아진 AI/ML에 DevOps 개념을 적용해 MLOps라는 이름으로 위의 단계의 배포/관리를 지원하는
다양한 workflow가 등장하고 있다.

현재 Airflow 등 다양한 workflow 플랫폼이 있고, 확연한 우위를 점한 것은 없어 보인다.  
![Alt](https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/workflow-compare.png "workflow-compare")  
luigi와 Argo는 각각 다른 것들이 더 유명해 특정하기 쉽지 않다.

![Alt](https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/workflow-rank.png "workflow-rank")  
특이하게 한국에서 kubeflow에 대한 관심이 높다.

여러 workflow에 대한 비교가 [여기][workflow]에 잘 살명되어 있다.

kubeflow는 kubernetes 상에서 돌아가는 workflow이다. 다양한 시스템에서 동작하는 다양한 버전이 존재한다.  
GCP에서 SaaS로 사용할 수 있는 kubeflow가 있으나,
이 글에서는 다양한 kubeflow를 on premise에 직접 설치하는 방법을 설명한다.  

! 현재(2021.05.23) github release는 1.2 버전이다. 하지만 공식 doc이 1.3 버전으로 바뀌었다.  
! 본 글은 현재 최신인 1.2 버전의 설치를 다룬다. [링크](https://v1-2-branch.kubeflow.org/)  
! 공식 문서가 굉장히 낡았고 업데이트가 잘 안되어 있다. 1.3으로 버전을 바꾸고 오래된 항목을 아예 삭제한 듯

### requirements
* kubernetes
* A minimum of 0.6 CPU in cluster  
* 10 GB이상의 노드 저장 공간

## Linux Machine

가장 일반적인 구성방식이다.  
kfctl과 kustomize를 이용한 설치 방법을 설명한다.  

### requirments
* kubernetes master node
* CLI

### 설치

호환되는 kubernetes 버전을 꼭 확인하자.  
![Alt](https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/kubeflow-version-matrix.png "kubeflow-version-matrix")  
*no known issues라지만, kubernetes 1.2/kubeflow 1.2 버전은 여러 오류가 발생한다... 
(이미 설치했다면 유감이다.)*  
*kubernetes 1.16 버전을 사용하는 것을 권장한다*

[공식 문서](https://v1-2-branch.kubeflow.org/docs/started/k8s/kfctl-k8s-istio/)  
[dex포함](https://v1-2-branch.kubeflow.org/docs/started/k8s/kfctl-istio-dex/)  
여기에선 다중 사용자의 인증기능을 제공하는 dex 버전을 사용했다.  

 ```shell
 # 필요한 파일을 받기 위해 wget을 설치한다
 $ apt-get update
 $ apt-get install wget

 # https://github.com/kubeflow/kfctl/releases 에서 kfctl
 $ wget https://github.com/kubeflow/kfctl/releases/download/v1.2.0/kfctl_v1.2.0-0-gbc038f9_linux.tar.gz

 # tar 파일을 풀어준다
 $ tar -xvf kfctl_{tag}_{platform}.tar.gz

 # Export path
 $ export PATH=$PATH:$PWD
 $ export PATH=$PATH:{kfctl_path}

 # 설치 yaml을 받아준다
 $ wget https://raw.githubusercontent.com/kubeflow/manifests/v1.2-branch/kfdef/kfctl_istio_dex.v1.2.0.yaml
 
 $ kfctl apply -V -f {config_file}.yaml

 ...생략...
 INFO[0285] Successfully applied application kfserving    filename="kustomize/kustomize.go:291"
 INFO[0285] Applied the configuration Successfully!       filename="cmd/apply.go:75"
 ```

(가끔 pv를 직접 생성해 줘야 하는 문제가 있다. 나중에 작성하겠다.)
<br/>

## Window Machine

### requirments
* docker desktop
* kubernetes

Docker desktop에 kubernetes를 활성화 시키자. (micro k8s가 구동된다)  
kubernetes 저사양 node 등에 맞춰 다양한 버전이 있다. [다음](https://www.reddit.com/r/kubernetes/comments/be0415/k3s_minikube_or_microk8s/)
에서 여러 kubernetes에 차이점을 잘 설명한다.

(자료가 없어져 다음에 작성하겠다. kubectl을 사용해 linux 버전과 같은 방법으로 설치한다)  
configuration을 환경에 맞게 수정해 주어야 한다. 다음 [블로그](https://sidepun.ch/entry/Kubeflow-%EC%84%A4%EC%B9%98-WSL2-Ubuntu-Docker-Desktop)
에서 잘 설명해 주셔 잠시 힘을 빌리겠다...
   
<br/>

## Virtual Machine

### requirements
* kubernetes

node로 사용할 vm을 생성해 주고 kubernetes cluster를 구성해 줬다면,
Linux에서 설치 방법과 동일하다.    
클러스터간 통신이 되게 네트워크를 구성해 주면 된다.  
[virtualbox vm 생성](https://jwher.github.io/2021-04-15-Install-Virtualbox-with-no-GUI/)
   
### 번외

miniKF를 통해 간편히 설치할 수 있다.

### requirements
* 12GB RAM  
* 2 CPUs  
* 50GB disk space  
* Linux, macOS, Windows
* Virtualbox/Vagrant

Virtualbox/Vagrant를 사용하여 잘 구성된 kubeflow 클러스터 vm을 실행시킨다.
편하고, 잘 동작한다는 장점이 있으나 VM 환경이 같는 한계, 지원 종료의 문제가 있다.
학습용으로 사용하기 적당하다.  

[공식 문서](https://www.kubeflow.org/docs/distributions/minikf/minikf-vagrant/)

```shell
# Window 환경에서
> vagrant init arrikto/minikf
> vagrant up

# 몇 번 종료될 때가 있다. vagrant up을 다시 실행시키면 된다.
# 계속 실패할 경우 cache 파일을 전부 삭제하기 다시 시도한다.

# 설치가 완료되면 http://10.10.10.10에서 kubeflow를 사용할 수 있다.
```
   
<br/>

## Kind

Kubernetes in Docker  
https://kind.sigs.k8s.io/

#### 준비물

* docker가 설치된 컴퓨터
* CLI

Windows 환경의 docker desktop에서 설치하는 방법을 소개한다.  
1. Install Kind  
    OS 버전에 맞게 설치한다
   
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
   
2. Create Cluster
    
    클러스터 생성 시 kubeflow를 사용할 것이므로 port-forwarding을 해주어야 한다.
   
    ```shell
    # 다음 yaml을 작성해 준다
    # 세부적인 ingress 설정은 https://kind.sigs.k8s.io/docs/user/ingress 을 참고한다
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
    클러스터를 생성해 준다.

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
   
3. Access Cluster

    ![Alt]()

    CLI에 접속한다.  

    ```shell
    # 디폴트 쉘이 bash가 아니다
    # /bin/bash
   
    $ kubectl --version
     
    Client Version: version.Info{Major:"1", Minor:"20", GitVersion:"v1.20.2", GitCommit:"faecb196815e248d3ecfb03c680a4507229c2a56", GitTreeState:"clean", BuildDate:"2021-01-21T01:10:43Z", GoVersion:"go1.15.5", Compiler:"gc", Platform:"linux/amd64"}
    The connection to the server localhost:8080 was refused - did you specify the right host or port?
    
    # conf 파일을 복사해 주면 정상적으로 이용이 가능하다
    $ mkdir -p $HOME/.kube
    $ cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
    $ chown $(id -u):$(id -g) $HOME/.kube/config
   
    $ kubectl --version
   
    Client Version: version.Info{Major:"1", Minor:"20", GitVersion:"v1.20.2", GitCommit:"faecb196815e248d3ecfb03c680a4507229c2a56", GitTreeState:"clean", BuildDate:"2021-01-21T01:10:43Z", GoVersion:"go1.15.5", Compiler:"gc", Platform:"linux/amd64"}
    Server Version: version.Info{Major:"1", Minor:"20", GitVersion:"v1.20.2", GitCommit:"faecb196815e248d3ecfb03c680a4507229c2a56", GitTreeState:"clean", BuildDate:"2021-01-21T01:11:42Z", GoVersion:"go1.15.5", Compiler:"gc", Platform:"linux/amd64"}
    ```  
   
    <br/>
    확인 

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
   
4. Install kubeflow  
    쿠브플로우를 설치하기 위해 kfctl과 kustomize를 이용한다.
   
    ```shell
    # 필요한 파일을 받기 위해 wget을 설치한다
    $ apt-get update
    $ apt-get install wget
   
    # https://github.com/kubeflow/kfctl/releases 에서 kfctl
    $ wget https://github.com/kubeflow/kfctl/releases/download/v1.2.0/kfctl_v1.2.0-0-gbc038f9_linux.tar.gz
   
    # tar 파일을 풀어준다
    $ tar -xvf kfctl_{tag}_{platform}.tar.gz
   
    # Export path
    $ export PATH=$PATH:$PWD
    $ export PATH=$PATH:{kfctl_path}
   
    # 설치 yaml을 받아준다
    $ wget https://raw.githubusercontent.com/kubeflow/manifests/v1.2-branch/kfdef/kfctl_istio_dex.v1.2.0.yaml
    
    $ kfctl apply -V -f {config_file}.yaml
   
    ...생략...
    INFO[0285] Successfully applied application kfserving    filename="kustomize/kustomize.go:291"
    INFO[0285] Applied the configuration Successfully!       filename="cmd/apply.go:75"
    ```
   
    <br/>  

    설치 완료 후 kubeflow를 확인해 보자

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
   
    # 볼륨도 맵핑이 잘 되었나 확인한다
    $ kubectl get pvc -A
   
    NAMESPACE      NAME              STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS   AGE
    istio-system   authservice-pvc   Bound    pvc-48952a53-882e-436b-8396-97cee94acf28   10Gi       RWO            standard       4m31s
    kubeflow       katib-mysql       Bound    pvc-9afd9ddf-3f1e-4b05-9fac-2cd56af6393a   10Gi       RWO            standard       4m28s
    kubeflow       metadata-mysql    Bound    pvc-0f0e907b-7786-42bb-bc40-1b784ac6cddb   10Gi       RWO            standard       4m28s
    kubeflow       minio-pvc         Bound    pvc-1d18caf0-08e6-44d8-b366-223e67dee1e5   20Gi       RWO            standard       4m28s
    kubeflow       mysql-pv-claim    Bound    pvc-c4dbe4b2-6a39-467f-a0be-5f54ff45054d   20Gi       RWO            standard       4m28s
    ```
   설치 후 pod 생성까지 시간이 좀 걸리니 기다려야 한다 :)

<br/>

### Reference  
https://huyenchip.com/2020/06/22/mlops.html  

[workflow]: https://www.datarevenue.com/en-blog/airflow-vs-luigi-vs-argo-vs-mlflow-vs-kubeflow


## - JWHer  
좋은 글을 쓰고 싶습니다.

<!-- update log -->
<!--
본문에 추가할 내용을 적는다.
-->