---
authors:
  - jwher
description: 'K8s tip: Rollback'
tags:
  - kubernetes
  - deployment
  - quick-reference
title: K8S Tip Rollback
date: '2022-06-02'
---

<!--truncate-->

<!-- image repository: https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/ -->

![Alt](https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/kubernetes.png "kubernetes")

*쿠버네티스 배포 롤백하기*  

# 목차
* [개념](#개념)
* [배포 롤백하기](#배포-롤백하기)

<br/>

## 개념
디플로이먼트는 파드와 레플리카셋에 대한 선언적 업데이트를 제공합니다. 😵  

혹시, 디플로이먼트, 파드, 레플리카셋을 처음 들어보셨나요?
[이글][/docs/infrastructure/kubernetes/welcome-to-kubernetes/welcome-to-kubernetes] 을 먼저 읽는 걸 추천합니다!  

그래도 어려우니 조금 풀어서 볼까요?  
사용자는 디플로이먼트로 파드의 의도하는 상태를 설명하고, 디플로이먼트 [컨트롤러](https://kubernetes.io/ko/docs/concepts/architecture/controller/)
는 현재 상태에서 의도하는 상태로 변경해줍니다.
또한 새 레플리카셋을 생성한 디플로이먼트를 관리해주는데요,
디플로이먼트의 템플릿(.spec.template)이 변경될 경우 디플로이먼트 롤아웃이 작동(trigger)되어
롤백지점을 생성해 주는 역할도 합니다.
<br/>

## 배포 롤백하기

### 롤아웃 기록 확인

어떤 버전으로 롤백을 해야 할까요?
먼저 디플로이먼트의 롤아웃 기록을 확인해 봅시다.  
저는 현재 개발중인 visualization 디플로이먼트를 확인해 볼려고 합니다.  
*디플로이먼트가 없으신 분은 예제 요청하시면 추가하겠습니다*  
```shell
$ kubectl rollout history deploy/ml-pipeline-newvis -n kubeflow

REVISION  CHANGE-CAUSE
1         <none>
```

어라? 아무 내용도 없습니다!  

```CHANGE-CAUSE```는 디플로이먼트 주석인 ```kubernetes.io/change-cause```에서
복사되는데요, 다음 방법으로 메시지를 작성할 수 있습니다.
* ```annotate```로 작성: ```kubectl annotate deploy/${deploy_name} kubernetes.io/change-cause="변경내용"```
* ```--record``` 플래그 추가
* 수동으로 리소스 메니페스트 편집

가만이 있을 수 없겠죠, 직접 해봅시다.
```shell
# annotate 명령어로 작성
$ kubectl annotate deploy/ml-pipeline-newvis -n kubeflow kubernetes.io/change-cause="첫 배포"
deployment.apps/ml-pipeline-newvis annotated

# 확인해 봅시다
$ kubectl rollout history deploy/ml-pipeline-newvis -n kubeflow  deployment.apps/ml-pipeline-newvis
REVISION  CHANGE-CAUSE
1         첫 배포
```
  
  
```shell
# --record 플래그 사용
$ kubectl edit deploy/ml-pipeline-newvis -n kubeflow --record
deployment.apps/ml-pipeline-newvis

# 확인해 봅시다
$ kubectl rollout history deploy/ml-pipeline-newvis -n kubeflow  deployment.apps/ml-pipeline-newvis
REVISION  CHANGE-CAUSE
1         첫 배포
2         kubectl edit deploy/ml-pipeline-newvis --namespace=kubeflow --record=true
```
  
  
```shell
# 수동 편집은 yaml의 kubernetes.io/change-cause을 직접 수정해 주면 됩니다
```
  
  
수정 버전의 세부 정보를 보려면 다음과 같이 합니다.
```shell
$ kubectl rollout history deploy/ml-pipeline-newvis -n kubeflow --revision=1
deployment.apps/ml-pipeline-newvis with revision #1
Pod Template:
  Labels:       app=ml-pipeline-newvis
        pod-template-hash=5d754d989b
  Annotations:  kubernetes.io/change-cause: 첫 배포
  Containers:
   ml-pipeline-newvis:
    Image:      jwher/new-vis:v1.2
    Port:       5000/TCP
    Host Port:  0/TCP
    Environment:        <none>
    Mounts:     <none>
  Volumes:      <none>
```
<br/>

### 롤백하기

어떤 버전으로 롤백할 지 결정했나요? 롤백은 다음과 같이 합니다.
```shell
$ kubectl rollout undo deploy/ml-pipeline-newvis -n kubeflow

# --to-revision 플래그로 버전을 지정할 수 있습니다
$ kubectl rollout undo deploy/ml-pipeline-newvis -n kubeflow --to-revision=2
```
  
  
롤백에 성공했는지 확인해 봅시다.
```shell
$ kubectl get deploy/ml-pipeline-newvis -n kubeflow
NAME                 READY   UP-TO-DATE   AVAILABLE   AGE
ml-pipeline-newvis   1/1     1            1           18h
```
1개중 1개의 파드가 준비되어 있고(READY) 최신이며(UP-TO-DATE)
사용가능한 레플리카는 1개(AVAILABLE) 입니다.
완벽합니다! :relaxed:

<br/>

## Tips

[쿠버네티스란?](/docs/infrastructure/kubernetes/welcome-to-kubernetes)

<br/>

### Reference  

[[공식]디플로이먼트](https://kubernetes.io/ko/docs/concepts/workloads/controllers/deployment/)


<!-- update log -->
<!--
본문에 추가할 내용을 적는다.
-->
