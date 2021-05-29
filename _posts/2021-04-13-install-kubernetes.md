---
layout: post
title: "Install kubernetes"
subtitle: "천리길도 한걸음씩"
cover-img: /assets/img/cover.svg
thumbnail-img: /assets/img/Kubernetes.svg
share-img: /assets/img/Kubernetes.svg
tags: [tech, kubernetes, docker, linux]
comments: true

date: 2021-04-13 11:50:00 
---

![Alt](https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/kubernetes.png "docker")  
*천리길도 한걸음씩*  
kubeadm을 사용하여 2개의 ubuntu vm간 클러스터를 구성하는 예제

# 목차
* [Preflight](#Preflight)
* kubernetes 설치

## Preflight  
쿠버네티스를 설치하기 전에 환경을 점검해 보자.

#### OS
* 데비안 배포판 (Ubuntu 20.04)
* 레드햇 배포판 (CentOS는 추후 작성하겠다(ㅎㅎ;))

#### Hardware spec
* 2 CPU 이상
* 2 GB 이상의 램
* 머신 전체 네트워크 연결

#### Software setting  
▶ [도커 설치][docker-install]  

<details>
<summary>도커 데몬 드라이버 변경</summary>
<div markdown="1">

도커 데몬 드라이버를 systemd로 변경해 준다.  

```shell
$ sudo vi /etc/docker/daemon.json

# 아래 내용으로 파일을 만들어 준다.
# exec-opts가 드라이버를 바꾸어주는 핵심이다.
{
  "exec-opts": ["native.cgroupdriver=systemd"],
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "100m"
  },
  "storage-driver": "overlay2"
}

# 또는 다음 명령어로 한번에 파일을 생성할 수 있다.
$ sudo cat > /etc/docker/daemon.json <<EOF
{
  "exec-opts": ["native.cgroupdriver=systemd"],
  "storage-driver": "overlay2"
}
EOF

# systemd에 경로를 만들어 주고 docker service를 재시작해준다
$ sudo mkdir -p /etc/systemd/system/docker.service.d
$ sudo systemctl daemon-reload
$ sudo systemctl restart docker
```
  
</div>
</details>

<details>
<summary>swap 비활성화(必)</summary>
<div markdown="1">

linux 스왑 메모리를 비활성화 해준다.  

```shell
$ sudo swapoff -a

# 다음 명령어는 시스템의 정지를 불러올 수 있다.
$ sudo sed -i '2s/^/#/' /etc/fstab

# 따라서, /ect/fstab을 열어 스왑메모리에 대한 줄만 주석 처리하자
$ sudo vi /etc/fstab

# /etc/fstab: static file system information.
#
# Use 'blkid' to print the universally unique identifier for a
# device; this may be used with UUID= as a more robust way to name devices
# that works even if disks are added and removed. See fstab(5).
#
# <file system> <mount point>   <type>  <options>       <dump>  <pass>
# / was on /dev/sda2 during installation
UUID=f33b74a8-d88b-4e05-aa01-86d51a883c53 /               ext4    errors=remount-ro 0       1
# /boot/efi was on /dev/sda1 during installation
UUID=9AD5-66E5  /boot/efi       vfat    umask=0077      0       1
#주석 /swapfile                                 none            swap    sw              0       0
```
  
</div>
</details>

<details>
<summary>방화벽(必) (firewalld)</summary>
<div markdown="1">

firewalld를 비활성화 시켜준다.  

```shell
# firewalld의 종료 방법
$ sudo systemctl stop firewalld
```
  
</div>
</details>

<details>
<summary>포트 개방 (iptables)</summary>  
<div markdown="1">

간혹 iptables에 이전 rule들이 남아있어 문제가 생긴다.  
(주로 kubernetes 재설치로 생긴 문제)  

```shell
# kubeadm join이 안될 시 iptables를 확인해 본다.

# iptables 조회
$ sudo iptables -L

# iptables 초기화(flush) 실행하기 전, backup을 하자
$ sudo iptables -F

```  
  
</div>
</details>

<br/>

## kubernetes 설치

<p>1. 네트워크 확인  </p>
kubernetes는 MAC과 product_uuid를 사용하여 클러스터의 노드를 식별한다.  
따라서, 네트워크 인터페이스의 MAC 주소가 고유한지 확인해야 한다.

```shell
$ ifconfig -a

# virtualbox NAT 네트워크로 머신 간 네트워크 어댑터를 설정해주었다.
 enp0s3: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
      inet 10.0.2.9  netmask 255.255.255.0  broadcast 10.0.2.255
      inet6 fe80::f80d:352b:ef2a:da26  prefixlen 64  scopeid 0x20<link>
      ether 08:00:27:62:15:3e  txqueuelen 1000  (Ethernet)
      RX packets 80558  bytes 120842058 (120.8 MB)
      RX errors 0  dropped 0  overruns 0  frame 0
      TX packets 6397  bytes 424385 (424.3 KB)
      TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
# 해당 내용을 보면 inet 10.0.2.9가 NAT 네트워크에서 ip 주소이고
# ether 08:00:27:62:15:3e가 맥 주소이다.

$ sudo cat /sys/class/dmi/id/product_uuid

f570f467-9980-1a47-b9c8-1933b3838dff
```
<br/>

또한, 노드간 통신이 가능한지 확인해야 한다.
```shell
# ping, curl ,telnet 등등
$ ping {ip-address}

PING 10.0.2.9 (10.0.2.9) 56(84) bytes of data.
64 bytes from 10.0.2.9: icmp_seq=1 ttl=64 time=0.777 ms
64 bytes from 10.0.2.9: icmp_seq=2 ttl=64 time=1.01 ms
64 bytes from 10.0.2.9: icmp_seq=3 ttl=64 time=1.01 ms
... 생략 ...
```
<br/>

<p>2. kubeadm, kubelet, kubectl 설치  </p>

쿠버네티스를 설치하고 업데이트 하기 위해 필요한 repository 위치를 설정해 주어야 한다.

repository 위치를 설정해 주기 위해 필요한 기본 라이브러리를 먼저 설치해 주자
```shell
$ sudo apt-get update
$ sudo apt-get install -y apt-transport-https ca-certificates curl
```
<br/>

구글 클라우드의 공개 사이닝 키를 다운로드 한다.
```shell
$ sudo curl -fsSLo /usr/share/keyrings/kubernetes-archive-keyring.gpg https://packages.cloud.google.com/apt/doc/apt-key.gpg
```
<br/>

쿠버네티스 ```apt``` 레포지토리를 추가한다.
```shell
$ echo "deb [signed-by=/usr/share/keyrings/kubernetes-archive-keyring.gpg] https://apt.kubernetes.io/ kubernetes-xenial master" \
| sudo tee /etc/apt/sources.list.d/kubernetes.list
```
<br/>

```apt``` 패키지 색인을 업데이트하고, kubelet, kubeadm, kubectl을 설치하고 해당 버전을 고정한다.
```shell
$ sudo apt-get update
$ sudo apt-get install -y kubelet kubeadm kubectl
$ sudo apt-mark hold kubelet kubeadm kubectl
```
<br/>
   
<p>3. 마스터 노드, 워커 노드 join  </p>
   
 a. 마스터 노드 설정  
 Container Network Interface로 [flannel][flannel-github]를 사용할 것이다.  
 flannel의 default cidr 네트워크를 구성할 것이기에 10.244.0.0/16을 사용하여 kubeadm을 init 시켜준다. 
<br/>  
 api 서버의 노출 주소는 Master 노드의 ip 주소를 적어주자
```shell
$ sudo kubeadm init --pod-network-cidr=10.244.0.0/16 --apiserver-advertise-address=10.0.2.9
    
 ... 생략 ...
 Your Kubernetes control-plane has initialized successfully!
     
  To start using your cluster, you need to run the following as a regular user:
  
    mkdir -p $HOME/.kube
    sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
    sudo chown $(id -u):$(id -g) $HOME/.kube/config
  
  Alternatively, if you are the root user, you can run:
   
    export KUBECONFIG=/etc/kubernetes/admin.conf
    
  You should now deploy a pod network to the cluster.
  Run "kubectl apply -f [podnetwork].yaml" with one of the options listed at:
    https://kubernetes.io/docs/concepts/cluster-administration/addons/
   
  Then you can join any number of worker nodes by running the following on each as root:
   
  kubeadm join 10.0.2.9:6443 --token zxdtkt.mi91c5sbky3ubp08 \
      --discovery-token-ca-cert-hash sha256:dc525e7dfce2d699346d6898814936f8276b4b821afa41933f2036ca70f5a04f 
```
<br/>  

 kubectl을 사용하기 위해 출력 결과대로 설정을 해주어야 한다
```shell
 $ mkdir -p $HOME/.kube
 $ sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
 $ sudo chown $(id -u):$(id -g) $HOME/.kube/config

 # 정상 설치가 되었는지 모든 cluster pod를 조회해 보자
 $ kubectl get pods -A
 
 NAMESPACE     NAME                               READY   STATUS    RESTARTS   AGE
 kube-system   coredns-558bd4d5db-nkcmg           0/1     Pending   0          6m47s
 kube-system   coredns-558bd4d5db-pnmll           0/1     Pending   0          6m47s
 kube-system   etcd-gpuadmin                      1/1     Running   0          6m54s
 kube-system   kube-apiserver-gpuadmin            1/1     Running   0          7m1s
 kube-system   kube-controller-manager-gpuadmin   1/1     Running   0          7m1s
 kube-system   kube-proxy-wj24j                   1/1     Running   0          6m47s
 kube-system   kube-scheduler-gpuadmin            1/1     Running   0          6m54s
```
<br/>  

 CNI 네트워크 에드온 Flannel을 배포하자
 ```shell
 $ kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml
 ```
<br/>

Flannel을 배포한 후 모든 pod를 조회하면 coredns가 동작하는 것을 볼 수 있다.
```shell
$ kubectl get pod -A

NAMESPACE     NAME                               READY   STATUS    RESTARTS   AGE
kube-system   coredns-558bd4d5db-nkcmg           1/1     Running   0          46m
kube-system   coredns-558bd4d5db-pnmll           1/1     Running   0          46m
kube-system   etcd-gpuadmin                      1/1     Running   0          46m
kube-system   kube-apiserver-gpuadmin            1/1     Running   0          46m
kube-system   kube-controller-manager-gpuadmin   1/1     Running   0          46m
kube-system   kube-flannel-ds-g4vxx              1/1     Running   0          70s
kube-system   kube-proxy-wj24j                   1/1     Running   0          46m
kube-system   kube-scheduler-gpuadmin            1/1     Running   0          46m
```

<br/>

 b. 워커 노드 설정  

   마스터 노드를 설정하며 kubeadm에서 나온 명령어가 있다.  
```shell
$ kubeadm join 10.0.2.9:6443 --token zxdtkt.mi91c5sbky3ubp08 \
      --discovery-token-ca-cert-hash sha256:dc525e7dfce2d699346d6898814936f8276b4b821afa41933f2036ca70f5a04f 
```

워커 노드에서 실행하면 join이 완료된다.
<br/>

마스터 노드에서 노드를 조회해 확인해 보자.  
```shell
$ kubectl get node
NAME       STATUS     ROLES                  AGE     VERSION
cwadmin    Ready      control-plane,master   2m41s   v1.21.0
gpuadmin   NotReady   <none>                 6s      v1.21.0

# 적당한 시간이 지나면 Ready로 바뀐다.

$ kubectl get node
NAME       STATUS   ROLES                  AGE     VERSION
cwadmin    Ready    control-plane,master   4m28s   v1.21.0
gpuadmin   Ready    <none>                 113s    v1.21.0
```

<br/>  

## Tips  
  a. worker 노드에서 kubectl 사용  
  보안 문제로 권장하진 않으나 admin.config를 복사해 worker에서 kubectl을 사용할 수 있다.  
  ```shell
# 앞서 kubeadm init때 얼핏 보았을 명령어이다

# worker 노드에서
$ mkdir -p $HOME/.kube

# master 노드에 다음 위치 파일을 worker 노드로 복사한다
# scp를 사용한다면 master 노드에서
$ scp /etc/kubernetes/admin.conf {user}@{ip}:{HOME}/.kube/config

# 권한 설정을 해준다
# worker 노드에서
sudo chown $(id -u):$(id -g) $HOME/.kube/config
  ```

  (인증서 발급으로 외부에서 API 서버 접속은 다음에 작성)

<br/>
  b. 토큰 재발급  
  kubeadm에서 생성된 토큰은 만료기간이 하루이다.  
  따라서 새롭게 노드를 추가할 상황이 온다면 토큰을 재발급 받아야 한다.  

  ```shell
# 토큰을 조회해 보자
$ kubeadm token list

TOKEN     TTL       EXPIRES   USAGES    DESCRIPTION      EXTRA GROUPS

# 아무 것도 조회되지 않으면 새로 만들어 주어야 한다
$ kubeadm token create

# ca cert hash를 얻기 위해 다음 명령어를 사용한다
$ openssl x509 -pubkey -in /etc/kubernetes/pki/ca.crt | openssl rsa -pubin -outform der 2>/dev/null | openssl dgst -sha256 -hex | sed 's/^.* //'

# 이제 TOKEN과 hash 값을 얻었으니 새롭게 노드를 join할 수 있다
# 새 worker 노드에서
$ kubeadm join {k8s API server ip}:{PORT 6443} --token {TOKEN} --discovery-token-ca-cert-hash sha256:{HASH}
  ```
  
## 끝
자, 이제 당신도 작고 귀여운 kubernetes를 가지고 있다.

### Reference  
[[공식]kubeadm 설치하기](https://kubernetes.io/ko/docs/setup/production-environment/tools/kubeadm/install-kubeadm/)    
[쿠버네티스(kubernetes) 설치 및 환경 구성하기](https://medium.com/finda-tech/overview-8d169b2a54ff)  
[쿠버네티스 노드 조인(Join)시 Token 값 확인](https://sarc.io/index.php/cloud/1383-join-token)    

[docker-install]: https://jwher.github.io/2021-04-13-install-docker/
[flannel-github]: https://github.com/flannel-io/flannel
## - JWHer  
좋은 글을 쓰고 싶습니다.

<!--
update log

trouble shoot
node notready(firewalld)
pleg not healthy
-->
