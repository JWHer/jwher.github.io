
<!-- more -->

<p align="center">
<img src="/assets/img/Kubernetes.svg" style="max-height: 40vh;"/>
</p>

*컨테이너 설정 데이터를 관리하는 방법*  

# 목차
* [컨피그맵](#컨피그맵)
* [예제](#예제)

## 컨피그맵

간단한(?) 프로그램을 만들어 보신 분은 환경 변수를 코드라인에 직접(inline) 적기보다,
실행시간 파라미터나 파일에서 읽도록 설계해본 경험이 있을 것입니다.

> <p align="center">
> <img src="/assets/img/fool.gif" style="max-height: 40vh;"/><br/>
> 워드 파일을 열때, 워드프로세서 코드에서 파일 이름을 수정하고, 빌드하고,
> 다시 실행하는 과정을 거쳐야 한다면 정말 끔직할 것입니다.
> </p>

컨테이너 이미지 또한 환경별 구성을 분리해 이식성을 높입니다.
*(런타임 파라미터나 공유 볼륨을 사용해서요)*
그렇다면 이 "구성 데이터"는 어디에 저장해야 할까요?
게다가 쿠버네티스 환경이라면요!😵

쿠버네티스에선 컨피그맵(ConfigMap)을 사용해 구성 데이터를 저장합니다.
컨피그맵은 키-값 쌍으로 기밀이 아닌 데이터를 저장하는 데 사용하는 API 오브젝트입니다.
하지만, 컨피그맵에 저장된 데이터는 1MB를 초과할 수 없습니다.
더 큰 설정을 저장하려면, [Persistent Volume](https://kubernetes.io/ko/docs/concepts/storage/persistent-volumes/) 을 사용하거나 DB,
Fileserver 또는 [Object Storage](https://jwher.github.io/minio) 를 사용할 수 있습니다. 

<br/>

## 예제

간단한 키/값 컨피그맵입니다.
```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: someapp-config
data:
  cluster-name: ""
  clusterDomain: cluster.local
  istio-namespace: istio-system
```
<br/>

이 컨피그맵을 사용하는 디플로이먼트(파드)를 살펴볼까요?
```yaml
kind: Deployment
metadata:
  name: ml-pipeline-ui
  namespace: kubeflow
spec:
  replicas: 1
  template:
    metadata:
    spec:
      containers:
      - env:
        - name: CLUSTER_DOMAIN
          valueFrom:
            configMapKeyRef:
              key: clusterDomain    # 가져올 키
              name: someapp-config  # 컨피그맵 이름
        - name: ISTIO_NAMESPACE
          valueFrom:
            configMapKeyRef:
              key: istio-namespace
              name: someapp-config
        name: someapp
        volumeMounts:
        - mountPath: /config
          name: config-volume       #
          readOnly: true
      # 파드 레벨에서 볼륨(config-volume)을 설정하고, 마운트한다
      volumes:
      - name: config-volume         #
        configMap:
          name: someapp-config      # 컨피그맵 이름
```

자, 이제 컨피그맵을 수정해 컨테이너 설정을 변경할 수 있습니다! 😊

<br/>

## Tips

기밀을 유지해야 하는 데이터는 [`secret`](https://kubernetes.io/ko/docs/concepts/configuration/secret/)
을 사용합니다.  
(언젠가 글을 작성하겠습니다)

PV와 삭제에 관련된 글입니다.  
[Persistent Volume](https://jwher.github.io/k8s-tip-pv-terminating)

### Reference  

[[공식]컨피그맵(ConfigMap)](https://kubernetes.io/ko/docs/concepts/configuration/configmap/)  

## - JWHer  
좋은 글을 쓰고 싶습니다.

<!-- update log -->
<!--
본문에 추가할 내용을 적는다.
-->
