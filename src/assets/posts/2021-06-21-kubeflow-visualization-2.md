
<!-- more -->

<!-- image repository: https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/ -->

![Alt](https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/engineering.jpg "engineering")  
*Event Driven Architecture 구현*  


# 목차
* [이전 이야기](#이전-이야기)
* [시각화 대상 선정](#시각화-대상-선정)
* [스토리지 선정](#스토리지-선정)
* [Message Queue 선정](#Message-Queue-선정)

<br/>

## 이전 이야기

[이전글](https://jwher.github.io/2021-06-08-kubeflow-visualization-1/)  
저는 MLOps를 위해 kubeflow를 도입해 사용하고 있습니다.
운영자가 필요 없도록 CI/CD의 버튼 수준의 자동화를 구현하려고 하는데요,
중간 파이프라인의 진행 상황을 명확하게 관찰할 수 있도록
진행 상황 **실시간 시각화**를 개발하려고 합니다.

## 시각화 대상 선정

어떤 내용을 실시간으로 보여줄 지 정해야겠죠? ~~사실 설계단계에서 해야합니다~~  

기존 visualization artifact는
confusion matrix(csv),
Markdown(inline, file, url),
ROC(csv),
Table(csv),
Tensorboard(file?),
Web app(static html)을 지원했습니다.  
[[공식]Visualize Results in the Pipelines UI](https://v1-2-branch.kubeflow.org/docs/components/pipelines/sdk/output-viewer/)

저는 기존 기능과 호환을 위해 csv, html 형식을 지원하고
추가적으로 텍스트, 이미지, 진행상황(텍스트), 사용자 코드 실행을 지원하려고 합니다. 


## 스토리지 선정

파이프라인 단계에서 생성되는 파일을 저장할 공간이 필요합니다.
기존 visualization artifact는 [minIO](https://jwher.github.io/2021-06-16-minio/) 의 mlpipeline 버킷에 저장됬는데요,
마찬가지로 같은 스토리지를 사용해 호환성을 높이려고 합니다.

## Message Queue 선정  

Message Queue는 EDA의 필수 구성요소라 할 수 있죠.
minIO는 S3 호환 표준으로 객체(object)가 버킷에서 발생시키는 알람을 통해 모니터링 할 수 있습니다.
메시지 큐로는 Kafka를 선택했는데요,
사내에서(~~도움을 받진 못했지만~~) Hadoop을 많이 사용하고 있기 때문에
하둡 에코시스템의 kafka가 장점을 지닌다 생각했습니다.
또한, 전체 시스템 로그수집/분석으로 사용하는 ELK스택과 연동도 고려하면 더더욱 kafka였습니다.

### kafka 배포

kafka를 모르신다면 앞으로 작성할 [이글](/404) 을 참고하시면 좋을 것 같습니다. ~~없는데 어떻게~~  

쿠버네티스에 카프카를 배포해야 사용할 수 있겠죠?
카프카를 사용하기 위해 zookeeper, 편하게 사용하기 위해 kafka manager가 필요합니다.
<details>
<summary>kafka.yaml</summary>
<div markdown="1">

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  namespace: kubeflow
  name: kafka
  labels:
    app: kafka
spec:
  replicas: 1
  selector:
    matchLabels:
      app: kafka
  template:
    metadata:
      labels:
        app: kafka
    spec:
      containers:
      - name: zookeeper
        image: zookeeper
        imagePullPolicy: IfNotPresent
        ports:
        - containerPort: 2181
          protocol: TCP
        env:
        - name: ZOO_MY_ID
          value: "1"

      - name: kafka
        image: wurstmeister/kafka
        imagePullPolicy: IfNotPresent
        ports:
        - containerPort: 9092
          protocol: TCP
        env:
        - name: KAFKA_ADVERTISED_HOST_NAME
          value: "localhost"
        - name: KAFKA_ZOOKEEPER_CONNECT
          value: "localhost:2181"

      - name: kafka-manager
        image: kafkamanager/kafka-manager
        imagePullPolicy: IfNotPresent
        ports:
        - containerPort: 9000
          protocol: TCP
        env:
        - name: ZK_HOSTS
          value: "localhost:2181"
        - name: APPLICATION_SECRET
          value: "random-secret"
---
apiVersion: v1
kind: Service
metadata:
  namespace: kubeflow
  name: kafka-service
  labels:
    app: kafka
spec:
  type: ClusterIP
  selector:
    app: kafka
  ports:
      # 기본적으로 그리고 편의상 `targetPort` 는 `port` 필드와 동일한 값으로 설정합니다.
    - name: http
      port: 9092
      targetPort: 9092
      #nodePort: 30007
---
apiVersion: v1
kind: Service
metadata:
  namespace: kubeflow
  name: kafka-manager-service
  labels:
    app: kafka
spec:
  type: ClusterIP
  selector:
    app: kafka
  ports:
    - name: http
      port: 9000
      targetPort: 9000
```
</div>
</details>

배포를 했다면 카프카 클러스터를 추가해 줘야겠죠!
커맨드라인을 사용해도 되나 시간상 빠르게 사용할 수 있는 CMAK kafka manager를 사용합시다. (야후? 추후 상세히 작성하겠습니다)

Add Cluster를 눌러줍니다  
<image src="https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/kafka-cluster.png" style="height: 40vmin;"/>

<br/>

minio 문서에 따르면 0.9버전이 호환된다고 합니다.  
(MinIO requires Kafka version 0.10 or 0.9. Internally MinIO uses the Shopify/sarama library and so has the same version compatibility as provided by this library.)  
<image src="https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/kafka-cluster-add.png" style="height: 40vmin;"/>

<br/>

클러스터를 생성했으면 Topic을 만들어줍시다.  
<image src="https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/kafka-topic.png" style="height: 40vmin;"/>

<br/>

이름은 mlpipeline으로 하겠습니다.  
<image src="https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/kafka-topic-add.png" style="height: 40vmin;"/>

### notification config

이젠 kafka와 minio를 연결시켜야 합니다.

커맨드라인으로 설정할 수도 있고 ```~/.minio/config.json```을 추가해
kafka에 minIO 이벤트를 publish 할 수 있습니다.

```shell
$ vi config.json
```

생성해준 카프카의 주소와 토픽을 설정해 줍시다.
```json
"kafka": {
    "1": {
        "enable": true,
        "brokers": ["10.111.188.42:9092"],
        "topic": "mlpipeline"
    }
}
```

설정을 저장한 후 컨테이너를 재시작 시켜주세요  

<br/>

### minio python 라이브러리

minIO python API를 제공합니다.
flask를 사용해 개발하기 편하겠군요!

```python
from minio import Minio

client = Minio(
        'ip:port',
        access_key='access',
        secret_key='secret',
        secure=False
    )

# 연결 테스트
print(client.list_buckets())
```

notification config를 설정해 주어야 합니다
```python
from minio.notificationconfig import NotificationConfig, QueueConfig, PrefixFilterRule

noti_config = NotificationConfig(
            queue_config_list=[
                QueueConfig(
                    "arn:minio:sqs::1:kafka",
                    ['s3:ObjectCreated:*', 's3:ObjectRemoved:*', 's3:ObjectAccessed:*'],
                    config_id="whatever not conflict",
                    # prefix_filter_rule=PrefixFilterRule("1"),
                )
            ]
        )

client.set_bucket_notification('bucket name', noti_config)
```

QueueConfig 의미는 다음과 같습니다.
* arn:minio:sqs::1:amqp  
arn:{type}:{protocol}:{region}:{account-id}:{function}:{function-name}  
ARN: Amazon Resource Number  
SQS: Simple Queue Service  
amqp: Advanced Message Queuing Protocol  
* events  
수신할 이벤트 목록입니다
* config_id  
설정 아이디입니다
* prefix_filter_rule  
파일 앞의 이름을 필터링합니다
* suffix_filter_rule  
파일 뒤의 이름을 필터링합니다.

<br/>

이벤트 리슨은 다음과 같이 합니다.
```python
events = client.listen_bucket_notification(
        'bucket name', prefix='', suffix='', events=['s3:ObjectCreated:*', 's3:ObjectRemoved:*', 's3:ObjectAccessed:*'])

```
   
이때 ```events```는 제너레이터 타입입니다.
```python
for event in events:
    print(type(event))
    print(event)

<class 'dict'>
{'Records': [{'eventVersion': '2.0', 'eventSource': 'minio:s3', 'awsRegion': '', 'eventTime': '2021-06-23T09:23:29Z', 'eventName': 's3:ObjectCreated:Put', 'userIdentity': {'principalId': 'minio'}, 'requestParameters': {'accessKey': 'minio', 'region': '', 'sourceIPAddress': '127.0.0.1'}, 'responseElements': {'x-amz-request-id': '168B2BC399599AFD', 'x-minio-deployment-id': 'abf9f200-cda5-4c7a-b16a-ce6baa64123e', 'x-minio-origin-endpoint': 'http://ip:9000'}, 's3': {'s3SchemaVersion': '1.0', 'configurationId': 'Config', 'bucket': {'name': 'test', 'ownerIdentity': {'principalId': 'minio'}, 'arn': 'arn:aws:s3:::test'}, 'object': {'key': 'input.jpg', 'size': 209222, 'eTag': '64575f26c680e43a076cb4907080a091-1', 'contentType': 'image/jpeg', 'userMetadata': {'content-type': 'image/jpeg'}, 'versionId': '1', 'sequencer': '168B2BC399BBFFC8'}}, 'source': {'host': '127.0.0.1', 'port': '', 'userAgent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36'}}]}
{'key': 'input.jpg', 'size': 209222, 'eTag': '64575f26c680e43a076cb4907080a091-1', 'contentType': 'image/jpeg', 'userMetadata': {'content-type': 'image/jpeg'}, 'versionId': '1', 'sequencer': '168B2BC399BBFFC8'}
```
설정에 따라 객체가 생성, 삭제, 접근 이벤트마다 dict 타입의 ```event```를 수신할 수 있습니다!

<br/>

## Tips

시간이 부족해서 다음에 더 잘 작성하겠습니다...

### Reference  

[[공식]kubeflow output viewer](https://v1-2-branch.kubeflow.org/docs/components/pipelines/sdk/output-viewer/#web-app)  
[[공식]python client api reference](https://docs.min.io/docs/python-client-api-reference.html)
[Minio bucket notification guide](https://programmersought.com/article/56446127239/)  
[[공식]Publish MinIO events via Kafka](https://docs.min.io/docs/minio-bucket-notification-guide.html#apache-kafka)  
[AWS의 ARN 이해하기](https://medium.com/harrythegreat/aws%EC%9D%98-arn-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-8c20d0ccbbfd)


## - JWHer  
좋은 글을 쓰고 싶습니다.

<!-- update log -->
<!--
각 구절 사진 추가
-->
