---
authors:
- jwher
description: 쿠버네티스에 Harbor 설치하기
slug: install-harbor
tags:
  - kubernetes
  - registry
  - installation
  - tutorial
title: Install Harbor
---

![harbor](/img/logos/harbor-stacked-black.svg)
*쿠버네티스에 Harbor 설치하기*  
<!--truncate-->

# 목차
* [요구사항](#요구사항)
* [하버 설치](#하버-설치)
* [헬름차트로 배포](#헬름차트로-배포)
* [문제 해결](#문제-해결)

<br/>

## 요구사항
* 최소사양: 2 CPU/4GB 메모리/40GB 디스크
* 권장사양: 4 CPU/8GB 메모리/160GB 디스크
* 도커, 도커-컴포즈, (option)OpenSSL
* (또는) 쿠버네티스 클러스터

## 하버 설치

이 글은 [쿠버네티스](https://jwher.github.io/welcome-to-kubernetes)
에서 [헬름](https://jwher.github.io/install-helm) 을 사용한
하버 배포와 문제 해결을 주로 다룹니다.  
[바로가기](#헬름차트로-배포)  

아래는 도커 컴포즈를 사용한 하버 설치 방법을 *간단히* 기술했습니다.
읽어 보시면 하버 구조파악에 도움이 될 것입니다!

> ![Alt](https://raw.githubusercontent.com/JWHer/jwher.github.io/master/assets/img/not-america-but-heaven.jpg "not-america-but-heaven")  
> ~~간단히가 아니라 대충이겠지!~~

### 하버 인스톨러 다운로드

<!-- https://goharbor.io/docs/2.2.0/install-config/download-installer/ -->

1. [하버 릴리즈 페이지](https://github.com/goharbor/harbor/releases) 에서 오프라인/온라인 인스톨러를 받습니다.  

```shell
# 21.07.21 최신 버전 기준
$ wget https://github.com/goharbor/harbor/releases/download/v2.3.0/harbor-offline-installer-v2.3.0.tgz
```
<br/>

2. (선택) 검증하기

정상적인 설치 파일인지 검증해볼 수 있습니다.  
```shell
# *.asc 파일을 위해 퍼블릭 키를 얻습니다
$ gpg --keyserver hkps://keyserver.ubuntu.com --receive-keys 644FF454C0B4115C
gpg: /home/cwadmin/.gnupg/trustdb.gpg: trustdb created
gpg: key 644FF454C0B4115C: public key "Harbor-sign (The key for signing Harbor build) <jiangd@vmware.com>" imported
gpg: Total number processed: 1
gpg:               imported: 1
```

```public key "Harbor-sign (The key for signing Harbor build) <jiangd@vmware.com>" imported```
를 확인해야 합니다.
<br/>

```shell
# *.asc를 이용해 검증합니다
# 온라인 인스톨러
$ gpg -v --keyserver hkps://keyserver.ubuntu.com --verify harbor-online-installer-version.tgz.asc
# 오프라인 인스톨러
$ gpg -v --keyserver hkps://keyserver.ubuntu.com --verify harbor-offline-installer-version.tgz.asc
gpg: assuming signed data in 'harbor-offline-installer-v2.2.3.tgz'
gpg: Signature made 2021년 07월 05일 (월)
gpg:                using RSA key 7722D168DAEC457806C96FF9644FF454C0B4115C
gpg: using pgp trust model
gpg: Good signature from "Harbor-sign (The key for signing Harbor build) <jiangd@vmware.com>" [unknown]
gpg: WARNING: This key is not certified with a trusted signature!
gpg:          There is no indication that the signature belongs to the owner.
Primary key fingerprint: 7722 D168 DAEC 4578 06C9  6FF9 644F F454 C0B4 115C
gpg: binary signature, digest algorithm SHA512, key algorithm rsa4096
```

```Good signature from "Harbor-sign (The key for signing Harbor build) <jiangd@vmware.com>" [unknown]```
를 확인해야 합니다.

<br/>

3. tar 풀기

```shell
$ tar xzvf harbor-[online/offline]-installer-[version].tgz
```

[이 글](https://jwher.github.io/install-tar.gz) 에서 tar 파일을 자세히 다루고 있습니다.

<br/>

### SSL

안타깝지만 일정에 치여서 다루지 않겠습니다.  

간단히 설명 드리자면 https를 위한 SSL/TLS 인증서를 발급받는 절차입니다.
외부 도메인이 있다면 [Let's Encript](https://letsencrypt.org/ko/)
에서 무료로 인증서를 발급받을 수 있습니다.  
내부적으로 사용한다면 [OpenSSL](https://www.openssl.org/) 을 사용하여 인증서를 생성합니다.  

[[공식]Configure HTTPS Access to Harbor](https://goharbor.io/docs/2.3.0/install-config/configure-https/)  

<br/>

### TLS 설정

내부 TLS 설정을 다룹니다.  
[[공식]Configure Internal TLS](https://goharbor.io/docs/2.3.0/install-config/configure-internal-tls/)  

<br/>

### YML 설정

하버를 커스터마이징 할 수 있는 ```harbor.yml``` 파일의 설정을 다룹니다.  
[[공식]Configure the Harbor YML File](https://goharbor.io/docs/2.3.0/install-config/configure-yml-file/)  

<br/>

### 인스톨러 스크립트 실행

하버는 다음 설정으로 설치할 수 있습니다.
* 하버만
* [Notary](https://github.com/theupdateframework/notary) 와 하버
* [Trivy](https://github.com/aquasecurity/trivy) 와 하버
* (helm)[ChartMuseum](https://github.com/helm/chartmuseum) 와 하버
* 위의 세개 중 두개나 전부 설치하기

<p align="center">
<img src="/assets/img/install-harbor/harbor-arch.png"/>
</p>

*Notary: 서버와 클라이언트 사이에 삼자로 신뢰할 수 있는 통신을 만들어 줍니다(CNCF)*    
*Trivy: 이미지의 취약점을 찾습니다*

각각의 설정은 다음 플래그를 이용합니다.
* ```Notary```: --with-notary
* ```Trivy```: --with-trivy
* ```ChartMuseum```: --with-chartmuseum

쉘 스크립트를 실행할 때 여러 권한이 필요합니다. ```sudo```로 권한을 부여해 줍시다.
```shell
$ sudo ./install.sh [flags]
```

<br/>

### CLI

Harbor API v2.0을 사용하는 간단한 CLI 명령어를 테스트 할 수 있습니다.  
```shell
# 이미지 목록 확인
$ curl -X GET http://[$id:$passwd@]${endpoint}:5000/v2/_catalog
$ curl -u "$id:$pw"
{"repositories":["ubuntu"]}

$ curl -X GET http://[$id:$passwd@]${endpoint}:5000/v2/${repository}/tags/list
{"name":"ubuntu","tags":["18.04"]}
```

축하드립니다!🎉 설치에 성공하셨군요!

<br/>

## 헬름차트로 배포

요구사항
* 쿠버네티스 1.10+
* 헬름 2.8.0+
* [쿠버네티스 활용 지식](https://jwher.github.io/kubernetes-usage)
* PostgreSQL 능력자
* Redis 능력자
* PVC와 외부 오브젝트 스토리지 능력자  

~~사실 지식은 필요 없어도 됩니다~~

헬름차트가 없다면 [이 글](https://jwher.github.io/install-helm) 을 보고 설치할 수 있습니다.

### 차트 다운받기

```shell
$ helm repo add harbor https://helm.goharbor.io
"harbor" has been added to your repositories

$ helm fetch harbor/harbor --untar
```
⚠*주의 helm repo는 계정마다 관리됩니다. sudo를 사용해 fetch 할 때 주의하세요*  

<br/>

### 설정하기

레포지토리를 받은 폴더에 ```values.yaml``` 파일이 있습니다.
이 파일을 수정하거나, 배포 명령어에 ```--set```플래그를 지정해 값을 변경할 수 있습니다.  

해당 파일에도 주석이 잘 적혀있습니다만,
공식 사이트를 확인해 보는 것도 좋을 것입니다. 😁  
[[공식]Configuration](https://goharbor.io/docs/2.3.0/install-config/harbor-ha-helm/#configuration)

주요 플래그  
* ```externalURL```: FQDN(Fully Qualified Domain Name)입니다.
```http``` 프로토콜을 사용해도 ```https```로 작성하세요.
```80```이나 ```443```이 아닌 포트로 노출된다면, 포트를 명시해 주세요.  

* ```expose.tls.enabled```: TLS 사용여부를 설정합니다.(```ture```/```false```)

* ```expose.ingress.hosts.core/notary```:
포트를 제외한 노출 url을 작성합니다. ```*```와 같은 wildcard를 사용할 수 있고, ip 형식일 수 없습니다.
[무료 와일드카드 DNS](https://jwher.github.io/free-wildcard-dns)  

* ```persistence.enabled```: 삭제시 pv 처리 방법을 설정합니다.(```ture```/```false```) 

* ```harborAdminPassword```: 관리자(```admin```) 계정의 비밀번호를 설정합니다. 기본값은 ```Harbor12345```입니다

<br/>

### 배포하기

다음 명령어로 쿠버네티스에 배포할 수 있습니다.

```shell
# (Helm2) helm install --name $name $chart $flags
$ helm install --name my-release chart/path/ --set key=value

# (Helm3) helm install $name $chart $flags
$ helm install --namespace harbor harbor-v1 .
```

<br/>

헬름으로 배포하면 아래 pvc가 생성됩니다.
각각에 맞는 적절한 pv를 생성해 줍시다.  
```shell
$ kubectl get pvc -n harbor -o custom-columns=NAME:.metadata.name,STORAGE:.spec.resources.requests.storage
NAME                            STORAGE
data-harbor-redis-0             1GB
data-harbor-trivy-0             5GB
database-data-harbor-database-0 1GB
harbor-chartmuseum              5GB
harbor-jobservice               1GB
harbor-registry                 5GB
```

총 18GB를 필요로 하지만
[요구사항](#요구사항) 에 맞게 저는 레지스트리에 160GB를 할당했습니다.  
<details markdown="1">
  <summary>pv.yaml</summary>
  
  ```yaml
  apiVersion: v1
kind: PersistentVolume
metadata:
  name: harbor-redis
spec:
  accessModes:
  - ReadWriteOnce
  capacity:
    storage: 1Gi
  claimRef:
    name: data-harbor-redis-0
    namespace: harbor
  local:
    path: /var/lib/docker/volumes/harbor/redis
  nodeAffinity:
    required:
      nodeSelectorTerms:
      - matchExpressions:
        - key: kubernetes.io/hostname
          operator: In
          values:
          - cwdev07
  persistentVolumeReclaimPolicy: Retain
  storageClassName: local-storage
  volumeMode: Filesystem
---
apiVersion: v1
kind: PersistentVolume
metadata:
  name: harbor-trivy
spec:
  accessModes:
  - ReadWriteOnce
  capacity:
    storage: 5Gi
  claimRef:
    name: data-harbor-trivy-0
    namespace: harbor
  local:
    path: /var/lib/docker/volumes/harbor/trivy
  nodeAffinity:
    required:
      nodeSelectorTerms:
      - matchExpressions:
        - key: kubernetes.io/hostname
          operator: In
          values:
          - cwdev07
  persistentVolumeReclaimPolicy: Retain
  storageClassName: local-storage
  volumeMode: Filesystem
---
apiVersion: v1
kind: PersistentVolume
metadata:
  name: harbor-database
spec:
  accessModes:
  - ReadWriteOnce
  capacity:
    storage: 1Gi
  claimRef:
    name: database-data-harbor-database-0
    namespace: harbor
  local:
    path: /var/lib/docker/volumes/harbor/database
  nodeAffinity:
    required:
      nodeSelectorTerms:
      - matchExpressions:
        - key: kubernetes.io/hostname
          operator: In
          values:
          - cwdev07
  persistentVolumeReclaimPolicy: Retain
  storageClassName: local-storage
  volumeMode: Filesystem
---
apiVersion: v1
kind: PersistentVolume
metadata:
  name: harbor-chartmuseum
spec:
  accessModes:
  - ReadWriteOnce
  capacity:
    storage: 5Gi
  claimRef:
    name: harbor-chartmuseum
    namespace: harbor
  local:
    path: /var/lib/docker/volumes/harbor/chartmuseum
  nodeAffinity:
    required:
      nodeSelectorTerms:
      - matchExpressions:
        - key: kubernetes.io/hostname
          operator: In
          values:
          - cwdev07
  persistentVolumeReclaimPolicy: Retain
  storageClassName: local-storage
  volumeMode: Filesystem
---
apiVersion: v1
kind: PersistentVolume
metadata:
  name: harbor-jobservice
spec:
  accessModes:
  - ReadWriteOnce
  capacity:
    storage: 1Gi
  claimRef:
    name: harbor-jobservice
    namespace: harbor
  local:
    path: /var/lib/docker/volumes/harbor/jobservice
  nodeAffinity:
    required:
      nodeSelectorTerms:
      - matchExpressions:
        - key: kubernetes.io/hostname
          operator: In
          values:
          - cwdev07
  persistentVolumeReclaimPolicy: Retain
  storageClassName: local-storage
  volumeMode: Filesystem
---
apiVersion: v1
kind: PersistentVolume
metadata:
  name: harbor-registry
spec:
  accessModes:
  - ReadWriteOnce
  capacity:
    storage: 160Gi
  claimRef:
    name: harbor-registry
    namespace: harbor
  local:
    path: /var/lib/docker/volumes/harbor/registry
  nodeAffinity:
    required:
      nodeSelectorTerms:
      - matchExpressions:
        - key: kubernetes.io/hostname
          operator: In
          values:
          - cwdev07
  persistentVolumeReclaimPolicy: Retain
  storageClassName: local-storage
  volumeMode: Filesystem
  ```
</details>

### 서비스 노출

pv 생성까지 완료하면 파드들이 정상적으로 실행됩니다.
이후 지정한 노출 방식(```expose.type```)에 따라 서비스 설정을 합니다.
예를 들어 ```ingress```는 ingress controller를 쿠버네티스에 배포해야 합니다.  
[ingress-nginx](https://kubernetes.github.io/ingress-nginx/deploy/#bare-metal)

완료되면 설정한 ```externalURL```로 접속해 봅시다!

<p align="center">
<img src="/assets/img/install-harbor/harbor-portal.png"/>
</p>

헬름 차트로 값을 변경하지 않고 배포하셨다면,
하버 포탈의 관리자 id/pw는 다음과 같습니다.

* ```id```: admin
* ```password```: Harbor12345

자, 이제 당신도 개인 도커 레지스트리를 가지고 있습니다!

<br/>

## 문제 해결



### 1. 로그인이 안되요

```Invalid user name or password``` 에러가 뜨며 로그인이 안됩니다.  
당황하지 말고 브라우저 개발자 도구 (chrome ```F12```)를 눌러서 확인해 봅시다. 

### a: 405 Method Not Allowed

```NodePort```, ```ClusterIP```, ```LoadBalancer```로 노출할 때
api 서버와 연동이 안되어 발생하는 문제로 생각됩니다.  
```ingress```를 살펴볼까요?
```yaml
... 전략 ...
spec:
  rules:
  - host: { 도메인 이름 }
    http:
      paths:
      - backend:
          serviceName: harbor-v1-portal
          servicePort: 80
        path: /
      - backend:
          serviceName: harbor-v1-core
          servicePort: 80
        path: /api/
      - backend:
          serviceName: harbor-v1-core
          servicePort: 80
        path: /service/
      - backend:
          serviceName: harbor-v1-core
          servicePort: 80
        path: /v2
      - backend:
          serviceName: harbor-v1-core
          servicePort: 80
        path: /chartrepo/
      - backend:
          serviceName: harbor-v1-core
          servicePort: 80
        path: /c/
... 후략 ...
```

```/```는 ui서버(portal),
```/api/```, ```/service/```, ```/v2```, ```/chartrepo/```, ```/c/```는
core로 연결(proxy)되고 있습니다.
nginx 서비스가 실행중인지, 설정이 잘 되었는지 확인해 보시면 되겠습니다.   

### b: 403 Forbidden

잘못된 프로토콜(```http```)로 접근했을 가능성이 큽니다.
인증서를 따로 설정해 주지 않으셨더라도, ```https```로 접근해야 합니다.
<br/>

### 2. 접속이 안되요(404 Not Found)

ingress를 사용하셨다면 host를 제거합시다(주석처리).
```shell
$ kubectl edit ingress $harbor-ingress

... 전략 ...
spec:
  rules:
  #- host: { 도메인 이름 }
  - http:
... 후략 ...
```

[호롤리한 하루](https://gruuuuu.github.io/cloud/k8s-service/)  
<details>
<summary>TMI</summary>
<div markdown="1">

대학 동기인데, 저와 비슷한 일을 하는 걸 보니 신기하네요.  
~~사실 친하지도 않고 안면식도 있을지 모릅니다~~  
저는 실무적인 일을 많이 하는데, 이론적인 공부를 탄탄히 쌓아가는 걸 보면 부럽습니다.
</div>
</details>

### 3. docker login이 안되요

### a: unsupported protocol scheme ""
```shell
$ docker login ${endpoint}
Error response from daemon: Get ${endpoint\}/v2/: Get ${endpoint}/service/token?account=apannwitz&client_id=docker&offline_token=true&service=harbor-registry: unsupported protocol scheme ""
```

인증서를 사용하지 않을 때 **서버**에서 발생하는 문제입니다.  
```http``` 프로토콜을 사용하더라도 ```externalURL```은 ```https```로 작성해야 합니다.  

```shell
$ helm upgrade -n harbor ${release-name} . --set externalURL=https://${endpoint}
```

[[깃헙]Set protocol of URL as "http"](https://github.com/goharbor/harbor/issues/7418)    

<br/>

### b: x509 certificate
```shell
$ docker login ${endpoint}
Error response from daemon: Get ${endpoint}/v2/: x509: certificate is valid for ingress.local, not ${endpoint}
```

마찬가지로 인증서를 사용하지 않을 때 **로컬**에서 발생하는 문제입니다.  
docker의 ```daemon.json```을 수정하고 재시작 합니다. (/etc/docker/daemon.json)

```json
{
  ... 전략 ...
  
  "insecure-registries": ["your-registry-addr"],
  
  ... 후략 ...
}
```

데몬 재시작 명령어
```shell
$ systemctl restart docker
# 또는
$ service docker restart
```

[[공식]Connecting to Harbor via HTTP](https://goharbor.io/docs/2.0.0/install-config/run-installer-script/#connect-http)  
[[깃헙]CNCF distribution](https://github.com/distribution/distribution/issues/1874#issuecomment-237194314) *무려 800 이상의 반응이...*  
[[stackoverflow]Can not pull/push images after update docker to 1.12](https://stackoverflow.com/a/38716311)  

<br/>

### c: dial tcp 443 connect connection refused
```shell
$ docker login ${endpoint}
Error response from daemon: Get https://${url}:${port}/v2/: Get https://${url}/service/token?account=harbor_registry_user&client_id=docker&offline_token=true&service=harbor-registry: connect: connection refused
# 또는
Error response from daemon: login attempt to http://${url}:${port}/v2/ failed with status: 400 Bad Request
# 또는
Error response from daemon: Get https://${url}/v2/: dial tcp ${url}:443: connect: connection refused
```

첫번째 경우는 ```harbor-core```에서 발생하는 문제입니다.  
```/v2/```에서 ```externalURL```로 ```/service/``` api를 호출하는데,
port가 지정되어 있지 않으면 https 프로토콜의 기본값 443번으로 연결됩니다.

```shell
$ helm upgrade -n harbor ${release-name} . --set externalURL=https://${url\}:${port}
```

두번째로 ```/v2/```에서 400 Bad Request가 발생한다면 ingress의 호스트 문제일 가능성이 큽니다.
[2. 접속이 안되요(404 Not Found)](#2-접속이-안되요404-not-found) 를 참고해 호스트를 제거합니다.

세번째로 ```/v2/```에서 바로 connection refused가 발생한다면,
```docker login ${endpoint}```에서 포트를 누락시켰을 가능성이 큽니다.

[[깃헙]Not able to connect to harbor repo](https://github.com/goharbor/harbor/issues/6896#issuecomment-462046107)  

<br/>

### 4. push/pull 이 안되요

```shell
$ docker push ${endpoint}/${repository}/${image-name}:${tag}
Error response from daemon: Get ${endpoint}/v2/: http: server gave HTTP response to HTTPS client
```

이 역시 인증서를 사용하지 않았을 때 **로컬**에서 생기는 문제입니다.  
~~이쯤되면 그냥 인증서 쓰고 말자~~  
[b: x509 certificate](#b-x509-certificate) 를 참고해
로컬 도커의 ```daemon.json```을 수정해 줍시다.

[[stackoverflow]Docker repository server gave HTTP response to HTTPS client](https://stackoverflow.com/questions/49674004/docker-repository-server-gave-http-response-to-https-client/54190375)


## Tips

6월 25일 도입을 결정했으나, 시기를 계속 늦춰
만 한달이 지난 7월 19일부터 작업을 했습니다.
설치와 배포는 생각보다 빠르게 됬네요:)

### Reference  

[[공식]Harbor Installation and Configuration](https://goharbor.io/docs/2.2.0/install-config/)  
[[공식]Deploying Harbor with High Availability via Helm](https://goharbor.io/docs/2.2.0/install-config/harbor-ha-helm/)  


<!-- update log -->
<!--
본문에 추가할 내용을 적는다.
하버 개념
자세한 설명 https://ruzickap.github.io/k8s-harbor/part-04/#install-harbor-using-helm
-->
