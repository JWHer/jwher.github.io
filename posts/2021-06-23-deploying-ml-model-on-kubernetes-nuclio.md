---
layout: post

title: "쿠버네티스 누클리오에 ML 모델 배포하기"
redirect_from:
  - /2021-06-23-deploying-ml-model-on-kubernetes-nuclio/
thumbnail-img: /assets/img/nuclio-superman.png
categories:
- tech
- kubernetes
- docker
- nuclio
excerpt: |
  서버리스 함수로 ML 모델 배포
date: 2021-06-23 23:50:00 

aside: true
feature_text: |
  # Deploying ML model on kubernetes nuclio
feature_image: "/assets/img/bamboos.jpg"
comments: true
---

<!-- image repository: https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/ -->

![Alt](https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/nuclio-superman.png "nuclio superman")  
*쿠버네티스 누클리오에 ML 모델 배포하기*  

# 목차
* [nuctl](#nuctl)
* [누클리오 설치](#누클리오-설치)
* [모델 배포하기](#모델-배포하기)

<!-- more -->
<br/>

## nuctl

누클리오를 처음 들어보신다면 [이 글][nuclio]
을 먼저 읽는걸 추천드립니다.
본 글은 쿠버네티스 위에서 누클리오를 사용하는 법을 다룹니다.
(도커도 별반 다르지 않습니다)

nuclio control, nuctl은 누클리오 커맨드 라인 인터페이스로 누클리오 기능에 접근할 수 있게 해줍니다.

### 요구사항
* kubernetes cluster
* (또는) [docker][docker]


### 바이너리 설치하기

누클리오 최신 release 버전은 [https://github.com/nuclio/nuclio/releases](https://github.com/nuclio/nuclio/releases)
에서 제공하고 있습니다.

CLI를 통해 다운받는 법은 다음과 같습니다.  
```shell
# 21.06.25 최신 버전
$ wget https://github.com/nuclio/nuclio/releases/download/1.6.11/nuctl-1.6.11-linux-amd64
$ chmod +x nuctl-1.6.11-linux-amd64

# 또는 다음 명령어로 받을 수 있습니다
$ curl -s https://api.github.com/repos/nuclio/nuclio/releases/latest \
			| grep -i "browser_download_url.*nuctl.*$(uname)" \
			| cut -d : -f 2,3 \
			| tr -d \" \
			| wget -O nuctl -qi - && chmod +x nuctl
```

어디에서나 사용할 수 있게 환경변수를 등록하거나, /bin 폴더에 링크를 만들어 줍니다.
```shell
$ export $PATH=$PATH:$PWD/nuctl-1.6.11-linux-amd64

# 또는
$ ln -s {full/path/to/origin} /bin/{origin}
```

확인해 봅시다
```shell
$ ./nuctl-1.6.11-linux-amd64
Nuclio command-line interface

Usage:
  nuctl [command]

Available Commands:
  build       Build a function
  create      Create resources
  delete      Delete resources
  deploy      Build and deploy a function, or deploy from an existing image
  export      Export functions or projects
  get         Display resource information
  help        Help about any command
  import      Import functions or projects
  invoke      Invoke a function
  update      Update resources
  version     Display the version number of the nuctl CLI

Flags:
  -h, --help                help for nuctl
  -k, --kubeconfig string   Path to a Kubernetes configuration file (admin.conf)
  -n, --namespace string    Namespace
      --platform string     Platform identifier - "kube", "local", or "auto" (default "auto")
  -v, --verbose             Verbose output

Use "nuctl [command] --help" for more information about a command.
```

<br/>

## 누클리오 설치

쿠버네티스 위에 누클리오를 설치하는 법을 다룹니다.

### 요구사항

* 쿠버네티스 v1.7 이상 클러스터
* 도커 레지스트리에 대한 자격증명(credentials)
* Nuclio CLI

### 누클리오 설치하기

쿠버네티스 CLI[(kubectl)][kubectl] 을 사용하여 설치합니다.
쿠버네티스 컨트롤이 없으시거나 사용법이 익숙하지 않으신 분은 [링크][kubectl]를 참고해 주세요.
도커 위에서 누클리오를 사용하실 분은 [docker 설치][docker]와 
[[공식]Getting Started with Nuclio on Docker](https://nuclio.io/docs/latest/setup/docker/getting-started-docker/)
를 참고해 주세요.

<p>1. 누클리오 네임스페이스를 생성해 줍니다.</p>

모든 리소스는 "nuclio" 네임스페이스에 생성됩니다.
RBAC 또한 네임스페이스에 따라 생성되니 정확한 네임스페이스를 사용하는걸 추천합니다.
```shell
$ kubectl create namespace nuclio
```
<br/>
<p>2. 레지스트리 시크릿을 만들어 줍니다.</p>

프라이빗 레지스트리가 없으신 분은 도커 허브 레지스트리를 사용하시면 됩니다.
도커 허브의 레지스트리는 registry.hub.docker.com 또는 docker.io 입니다.
```shell
$ read -s mypassword
<enter your password>

$ kubectl create secret docker-registry registry-credentials \
    --namespace nuclio \
    --docker-username <username> \
    --docker-password $mypassword \
    --docker-server <URL> \
    --docker-email ignored@nuclio.io

$ unset mypassword
```
<br/>
<p>3. RBAC 롤을 생성해 줍니다.</p>

다음 명령어를 수행하기 전에 해당 [파일 내용](https://raw.githubusercontent.com/nuclio/nuclio/master/hack/k8s/resources/nuclio-rbac.yaml) 을 꼭 확인합시다.
맹목적으로 명령어를 실행하지 않는 습관(뜨끔:flushed:)을 들이는 것이 좋습니다.
```shell
$ kubectl apply -f https://raw.githubusercontent.com/nuclio/nuclio/master/hack/k8s/resources/nuclio-rbac.yaml
```
<br/>
<p>4. 누클리오를 쿠버네티스 클러스터에 배포합니다.</p>

```shell
$ kubectl apply -f https://raw.githubusercontent.com/nuclio/nuclio/master/hack/k8s/resources/nuclio.yaml

# 배포 후 확인해 봅시다
$ kubectl get pods --namespace nuclio
NAME                                           READY   STATUS             RESTARTS   AGE
nuclio-controller-56b4f69b49-2gbpk             1/1     Running            0          3d23h
nuclio-dashboard-584689f894-mg8qq              1/1     Running            0          3d23h
```

<br/>
<p>5. 누클리오 대쉬보드 포트를 포워딩 합니다.</p>

```shell
$ kubectl port-forward -n nuclio $(kubectl get pods -n nuclio -l nuclio.io/app=dashboard -o jsonpath='{.items[0].metadata.name}') 8070:8070

# 명령어가 길고 복잡합니다
# 쿠버네티스를 잘 이해하셨거나 kubectl 글을 읽어보셨다면 간단하게 사용할 수 있습니다
$ kubectl port-forward svc/nuclio-dashboard -n nuclio 8070:8070 --address=0.0.0.0
```

<br/>

이제 브라우저에서 누클리오 대쉬보드를 확인할 수 있습니다!  
![Alt](https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/nuclio-dashboard.png "nuclio dashboard")

<br/>

## 모델 배포하기

자! 드디어 ML 모델 배포입니다.
[누클리오 구조][nuclio]를 이해하고 배포해야 각종 오류 원인을 이해할 수 있습니다.
꼭 먼저 읽어보시는걸 권장합니다.

저는 function 작성과 도커파일을 사용하는 방법을 혼합해 배포하였습니다.
사용한 모델은 [Alphapose](https://jwher.github.io/2021-05-24-alphapose/) 로 keypoint detection 모델입니다.

누클리오를 성공적으로 설치하셨다면 function을 작성해 클러스터에 배포할 수 있습니다.
지원되는 런타임(Go, Python, NodeJS)은 두 인자를 받는 엔트리 포인트를 가집니다.
* Context: 함수 호출시 상태를 관리하는 객체입니다. 로거, 데이터 바인딩, 유저 정의 데이터가 포함됩니다.
* Event: 함수를 트리거한 이벤트 정보를 포함한 객체입니다. body, headers, trigger information을 포함합니다.

> ![Alt](https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/nervous.png "nervous")  
> 긴장하고 출발합시다!

<p>1. 파이썬 코드 작성</p>

ML 모델이 파이썬으로 작성되었고 능숙한 언어이기에 파이썬을 사용하겠습니다.
ModelHandler 클래스와 handle 함수가 정의되어야 합니다 (이름은 달라도 됩니다)  

*당연히 모델마다 구현이 다릅니다 Alphapose 코드가 필요하시면 github에 공개하겠습니다*
<details>
<summary>model_handler.py</summary>
<div markdown="1">

```python
class ModelHandler:
    def __init__(self):
        args = argparse.Namespace(...)
        cfg = update_config(args.cfg)
        
        # Load pose model

        ... 중략 ...

    def handle(self, im_name, image):
        runtime_profile = {
            'dt': [],
            'pt': [],
            'pn': []
        }
        pose = None
        try:
            start_time = getTime()
            with torch.no_grad():
                (inps, orig_img, im_name, boxes, scores, ids, cropped_boxes) = self.det_loader.process(im_name, image).read()
                
                ... 중략 ...

            if self.args.profile:
                print(
                    'det time: {dt:.4f} | pose time: {pt:.4f} | post processing: {pn:.4f}'.format(
                        dt=np.mean(runtime_profile['dt']), pt=np.mean(runtime_profile['pt']), pn=np.mean(runtime_profile['pn']))
                )
            print('===========================> Finish Model Running.')
        except Exception as e:
            exc_type, exc_obj, exc_tb = sys.exc_info()
            print(repr(e), f'line: {exc_tb.tb_lineno}')
            print('An error as above occurs when processing the images, please check it')
            pass
        except KeyboardInterrupt:
            print('===========================> Finish Model Running.')

        if pose is None:
            return ['error']

        return write_json([pose])
```
</div>
</details>

init_context() 함수에는 상태를 유지할(비용이 비싼) 객체를 생성해 줍니다.
저는 ML 모델 객체를 생성해 주었습니다.  
엔트리 포인트로 사용할 handler()함수를 정의해 줍니다. (이름은 달라도 됩니다)
앞서 언급한 것처럼 context와 event를 인자로 받습니다.
<details>
<summary>main.py</summary>
<div markdown="1">

```python
import json
import base64
import numpy as np

from PIL import Image
import io
from model_handler import ModelHandler

def init_context(context):
    context.logger.info("Init context...  0%")

    # Read the DL model
    model = ModelHandler()
    setattr(context.user_data, 'model', model)

    context.logger.info("Init context...100%")

def handler(context, event):
    context.logger.info("Run alphapose model")
    data = event.body

    imagename = 'name' # data["imagename"]
    buf = io.BytesIO(base64.b64decode(data["image"].encode('utf-8')))
    # threshold = float(data.get("threshold", 0.5))
    image = Image.open(buf)

    # PIL to CV2
    cvimg = np.array(image)
    cvimg = cvimg[:,:,::-1].copy()

    results = context.user_data.model.handle(imagename, cvimg)

    return context.Response(body=json.dumps(results), headers={},
        content_type='application/json', status_code=200)
```
</div>
</details>
<br/>
<p>2. function.yml 작성</p>

누클리오 배포 설정을 담은 yaml 파일을 작성해 줍니다.
저는 Alphapose가 동작할 수 있는 환경을 docker image로 미리 구성해 사용했습니다.

*yaml 파일도 당연히 내용이 다릅니다 문법만 참고해 주세요*
<details>
<summary>function.yaml</summary>
<div markdown="1">

```yaml
metadata:
  name: alphapose
  namespace: cvat       # 누클리오 대쉬보드의 프로젝트 이름입니다
  annotations:
    name: ALPHAPOSE
    type: detector
    framework: custom
    spec: |
      [
        {"id": 1, "name": "nose"},
        {"id": 2, "name": "left_eye"},
        {"id": 3, "name": "right_eye"},
        {"id": 4, "name": "left_ear"},
        {"id": 5, "name": "right_ear"},
        {"id": 6, "name": "left_shoulder"},
        {"id": 7, "name": "right_shoulder"},
        {"id": 8, "name": "left_elbow"},
        {"id": 9, "name": "right_elbow"},
        {"id": 10, "name": "left_wrist"},
        {"id": 11, "name": "right_wrist"},
        {"id": 12, "name": "left_hip"},
        {"id": 13, "name": "right_hip"},
        {"id": 14, "name": "left_knee"},
        {"id": 15, "name": "right_knee"},
        {"id": 16, "name": "left_ankle"},
	{"id": 17, "name": "right_ankle"}
      ]

spec:
  description: Keypoint detection
  runtime: 'python:3.6'
  handler: main:handler
  eventTimeout: 30s
  env:
    - name: NUCLIO_PYTHON_EXE_PATH
      value: /root/miniconda3/envs/alphapose/bin/python

  build:
    image: jwher/alphapose:nuclio
    baseImage: jwher/alphapose:v1

    directives:
      preCopy:
        - kind: USER
          value: root
        - kind: WORKDIR
          value: /Alphapose

      postCopy:
        - kind: RUN
          value: echo "works well"


  nodeSelector:
    gpu: "true"

  triggers:
    myHttpTrigger:
      maxWorkers: 2
      kind: 'http'
      workerAvailabilityTimeoutMilliseconds: 10000
      attributes:
        maxRequestBodySize: 33554432 # 32MB

  platform:
    attributes:
      restartPolicy:
        name: always
        maximumRetryCount: 3
      mountMode: volume
```
</div>
</details>
<br/>
<p>3. 배포하기</p>

앞서 작성한 main.py, model_handler.py, function.yml을 같은 디렉토리에 위치시킵니다.
```shell
$ nuctl deploy --project-name cvat -n nuclio --path . --platform kube -r docker.io --http-trigger-service-type NodePort
```
```nuctl -h```를 통해 플래그 정보를 확인할 수 있습니다.  
사용한 플래그의 의미는 다음과 같습니다.
* `--project-name` : 프로젝트 이름, 누클리오 대쉬보드에서 확인 가능한 이름입니다
* `-n`, `--namespace` : 쿠버네티스 네임스페이스, nuclio 고정입니다
* `-p`, `--path` : function.yml 파일이 위치한 디렉토리
* `--platform` : 사용하는 플랫폼입니다. local: 도커 kube: 쿠버네티스
* `-r` `--registry` : 도커 이미지 레포지토리입니다.
* `--http-trigger-service-type` : 쿠버네티스에서 serviceType을 정해줍니다.
NodePort를 사용해 클러스터 외부에서도 접속 가능하게 설정했습니다.


배포가 잘 되었는지 확인해 봅니다.
```shell
$ kubectl get pods --namespace nuclio
NAME                                           READY   STATUS             RESTARTS   AGE
nuclio-alphapose-78d76bd9b7-px7f4              1/1     Running            0          3d23h
nuclio-controller-56b4f69b49-2gbpk             1/1     Running            0          3d23h
nuclio-dashboard-584689f894-mg8qq              1/1     Running            0          3d23h
```

대쉬보드 UI에서도 확인할 수 있습니다!  
![Alt](https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/nuclio-alphapose.png "nuclio alphapose")

<br/>

## Tips

오늘은 맥주한잔 해야겠네요 :blush:

### Reference  
  
[[공식]Getting Started with Nuclio on Kubernetes](https://nuclio.io/docs/latest/setup/k8s/getting-started-k8s/)  
[[공식]The Nuclio CLI](https://nuclio.io/docs/latest/reference/nuctl/nuctl/)  
[[공식]Deploying Functions](https://nuclio.io/docs/latest/tasks/deploying-functions/)  
[[공식]Deploying Functions from a Dockerfile](https://nuclio.io/docs/latest/tasks/deploy-functions-from-dockerfile/)

[nuclio]: https://jwher.github.io/2021-06-02-nuclio/
[kubectl]: https://jwher.github.io/2021-05-28-kubernetes-usage/
[docker]: https://jwher.github.io/2021-04-13-install-docker/

## - JWHer  
좋은 글을 쓰고 싶습니다.

<!-- update log -->
<!--
본문에 추가할 내용을 적는다.
-->
