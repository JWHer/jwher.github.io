---
authors:
- jwher
description: minIO 오브젝트 스토리지
slug: minio
tags:
- tech
- kubeflow
- kubernetes
title: Minio
---

<!--truncate-->

<!-- image repository: https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/ -->

![Alt](https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/minio.svg "minio")  
*High Performance, Kubernetes Native Object Storage*  


# 목차
* [minIO](#minIO)

<br/>

## minIO  

*minIO 어떻게 읽지?*  
저는 처음 봤을 때 이 생각이 먼저 들었는데요:laughing: minimum IO 라는 뜻인가? 라고 생각해 보았지만,
*미-니-오*라고 읽습니다

미니오는 쿠버네티스 네이티브 오브젝트 스토리지입니다.
혹시 쿠버네티스를 처음 들어보신다면 [이글](https://jwher.github.io/2021-04-12-welcome-to-kubernetes/)
을 먼저 읽어보면 좋겠습니다.  

공식 사이트에서는 다음과 같이 미니오를 설명하고 있습니다.  
미니오는 아마존 S3 호환 표준입니다.
**아마존 S3**는 전세계 오브젝트 스토리지 **사실상** 표준이고, 미니오는 처음으로 API 도입한 것들 중 하나이고
처음으로 S3 select 지원을 했습니다.
마이크로소프트 아주르를 포함한 750개 이상의 조직에서 미니오 S3 게이트웨이를 사용하며 나머지 산업체를 합한 것 이상으로 큽니다.

<details>
<summary>원문</summary>
<div markdown="1">
The defacto standard for Amazon S3 compatibility.
Amazon’s S3 API is the defacto standard in the object storage world.
MinIO is the defacto standard for S3 compatibility and was one of the first to adopt the API and the first to add support for S3 Select.
More than 750 organizations, including Microsoft Azure, use MinIO’s S3 Gateway - more than the rest of the industry combined.
</div>
</details>

설명이 S3 일색이네요... S3를 써보신 멋쟁이들은 바로 이해하셨죠?
~~저는 S3가 뭔지 몰랐어요~~  

### Amazon S3

S3는 Simple Storage Service, 아마존에서 제공하는 **인터넷 스토리지 서비스**입니다.
S3는 단순성, 견고성에 초점을 두고 개발되었습니다. 공식 홈에서 소개하는 S3의 장점은 다음과 같습니다.

* 한 파일 최대 5TB 크기 데이터들을 무한정으로 저장할 수 있습니다. ~~전체 서버가 가득 차면?~~
* 데이터를 중복/분산 저장해 복구가 가능합니다. 
* 엑세스 권한을 통해 데이터가 무단으로 액세스되지 않도록 보호합니다.
* REST 인터페이스를 지원합니다.

*버킷, 객체(object)등 용어는 [공식설명](https://docs.aws.amazon.com/ko_kr/AmazonS3/latest/userguide/Welcome.html) 을 참고해주세요*

공식 설명엔 없지만 사용자 입장에서 가장 큰 강점은
트래픽과 디스크 사이즈에 대한 고민을 없에주기 때문이라고 생각합니다.
보통 운영하는 시스템 규모가 커지고 트래픽이 증가하면
크게는 저장소 설계를 다시 하는 등 시스템적 작업이 필요한데
이 부분을 아마존이 해결해 주는 것이죠:D

<div align="center" markdown="1">

![Alt](https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/money.jpg "money")  
*물론 돈을 받고요...*
</div>

설명이 있으니 어떻게 구현했는지 궁금하네요:smile:
하지만 S3는 아마존에서 제공하기에 어떻게 구현되었는지 알수가 없습니다(혹시 저만 모르나요).
사용자는 아마존에서 제공하는 인터페이스만 볼 수 있죠.
RAIDS, HDFS 처럼 분산 시스템으로 설계됬을 것 같다는 추측만 할 뿐입니다.

### 미니오

자 다시 우리의 미니오로 돌아왔습니다. 미니오는 쿠버네티스에서 사용하고,
저는 onpremise로 쿠버네티스를 운영하기 때문에 미니오는 살펴볼 수 있죠. 

```shell
$ kubectl get pvc -n kubeflow
NAME             STATUS   VOLUME     CAPACITY   ACCESS MODES   STORAGECLASS   AGE
minio-pvc        Bound    minio-pv   20Gi       RWO                           66d

$ kubectl get pv
NAME       CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS     CLAIM                          STORAGECLASS    REASON   AGE
minio-pv   20Gi       RWO            Retain           Bound      kubeflow/minio-pvc             local-storage            66d

$ kubectl get pv minio-pv -o yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: minio-pv
  selfLink: /api/v1/persistentvolumes/minio-pv
spec:
  accessModes:
  - ReadWriteOnce
  capacity:
    storage: 20Gi
  local:
    path: /mnt/minio
  nodeAffinity:
    required:
      nodeSelectorTerms:
      - matchExpressions:
        - key: kubernetes.io/hostname
          operator: In
          values:
          - slaveNode
  persistentVolumeReclaimPolicy: Retain
  storageClassName: local-storage
  volumeMode: Filesystem
```

저는 미니오의 pv를 [selector](https://jwher.github.io/2021-06-14-k8s-tip-nodeselector/) 를 사용하여 원하는 노드에 배치시켜놨습니다.
해당 노드에 마운트된 폴더를 볼까요?

```shell
$ cd mnt/minio/minio
/mnt/minio/minio$ ls
mlpipeline  test
```

![Alt](https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/minio-bucket.png "minio bucket")

놀랍게도 bucket과 object가 파일시스템으로 저장되고 있음을 확인했습니다.
이 부분에서 저는 미니오가 S3 호환 인터페이스이지 S3처럼 분산저장소는 아니라는 생각이 들었습니다.

*(구현을 더 자세히 알아보고 싶지만 시간이 없습니다ㅜㅜ 잘 아시는 분 태클 환영합니다)*

<br/>

## Tips

이번 글에서 minIO를 알아봤는데요,
활용하는 방법에 대해서 [다음 글](https://jwher.github.io/2021-06-21-kubeflow-visualization-2/) 에서 다루니 궁금하신 분은 더 읽어보시는 것도 좋을 것 같습니다.

### Reference  
[[공식]min.io](https://min.io)  
[[공식]Amazon S3이란 무엇인가요?](https://docs.aws.amazon.com/ko_kr/AmazonS3/latest/userguide/Welcome.html)


<!-- update log -->
<!--
본문에 추가할 내용을 적는다.
-->
