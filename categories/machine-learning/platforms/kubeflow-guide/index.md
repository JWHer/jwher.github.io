---
authors:
- jwher
description: 쿠브플로우 가이드
slug: kubeflow-guide
tags:
  - machine-learning
  - mlops
  - kubeflow
  - tutorial
title: Kubeflow Guide
---

![kubeflow](/img/logos/kubeflow.svg)
*쿠브플로우 파이프라인 사용 가이드*  
<!--truncate-->

# 목차
* [웹 UI](#웹-ui)
* [파이프라인 만들기](#파이프라인-만들기)

## 웹 UI

쿠브플로우가 없으면 [이글](https://jwher.github.io/install-kubeflow)
을 보고 설치할 수 있습니다. 😄

### 컴포넌트
*쿠브플로우를 구성하는 논리 요소*

[[공식]Components](https://www.kubeflow.org/docs/components/)

### 사용하기

*UI는 버전에 따라 다를 수 있습니다.*

쿠브플로우는 빠르게 사용해 볼 수 있는 샘플을 제공합니다.
이번 샘플은 파이썬 연산을 포함하지만, ML 워크로드는 제공하지 않습니다.

1. 좌측 탭의 `Pipelines`에서 `[Tutorial] Data passing in python components`를 클릭합니다.  
*`[Demo] XGBoost - Iterative model training`으로 ML 컴포넌트 샘플을 사용해 볼 수 있습니다.*

<!-- ![Alt](/assets/img/kubeflow-guide/step1.png "step1")   -->
  

2. `experiment`를 한번도 생성한 적이 없다면, `Create experiment`를 클릭해 만듭니다.
생성한 적이 있다면, `Create run`을 클릭합니다.
   
<!-- ![Alt](/assets/img/kubeflow-guide/step2.png "step2")   -->

3. 파이프라인 생성에 필요한 값을 입력합니다. 이 샘플은 필요한 모든 값을 기본으로 제공합니다.
입력을 완료했다면 `start`를 눌러 파이프라인을 실행합니다.  
*사진은 `Default`라는 이름의 `experiment`를 사용했습니다.*  
   
<!-- ![Alt](/assets/img/kubeflow-guide/step3.png "step3")   -->

4. 좌측 탭의 `Experiments`을 누릅니다. 지정한 `experiment`이름을 클릭하면 `Runs` 목록이 나옵니다.
입력한 `Run` 이름을 클릭합니다.    
*구버전은 좌측 탭의 `Runs`가 존재하기도 합니다*
   
<!-- ![Alt](/assets/img/kubeflow-guide/step4.png "step4")   -->

5. 그래프를 확인할 수 있습니다. 그래프의 각 컴포넌트를 클릭해 실행결과를 확인합니다.

<!-- ![Alt](/assets/img/kubeflow-guide/step5.png "step5") -->

<br/>

## 파이프라인 만들기

[[공식]Introduction to the Pipelines SDK](https://www.kubeflow.org/docs/components/pipelines/sdk/sdk-overview/)  

### kfp 설치

* 파이썬 3.5 이상
* 가상환경(conda) 권장

```shell
$ pip3 install kfp --upgrade
```

가상환경이 아니라면 권한 오류가 발생할 수 있습니다. `--user` 플래그를 사용합니다.

```shell
$ pip3 install kfp --upgrade --user
```

이 명령어는 `~/.local/bin`에 인스톨하는 명령어입니다.
이는 몇 리눅스 배포(우분투)에서 `PATH` 환경변수로 등록하지 않습니다.
따라서 `~/.local/bin` 경로를 `.bashrc` 파일에 등록해주어야 합니다.

```shell
export PATH=$PATH:~/.local/bin
```

### 생성과정

1. 존재하는 코드
2. 도커 이미지
3. `kfp.dsl.ContainerOP`
4. `kfp.dsl.pipeline`
5. `.yaml`
6. 웹 UI 또는 `kfp.Client.run_pipeline`로 실행

<!-- ![Alt](/assets/img/kubeflow-guide/pipelines-sdk.svg "pipelines sdk")   -->

### 예제
*시간이 부족해 요청하시면 설명하겠습니다.*  

```python
import kfp
import kfp.components as comp
from kfp import dsl

def print_op(name, msg):
    """Print a message"""

    return dsl.ContainerOp(
        name=name,
        image='alpine:3.6',
        command=['echo', msg],
    )

@dsl.pipeline(
    name='Pipeline v1',
    description=
    """execute whatever you want
    """
)
def pipeline(**kwargs):
    # 메타데이터는 중괄호로 가져옵니다
    # 예) {{pod.name}}

    pr = print_op("print", "hello world!")

    pr2 = print_op("print2", "have a nice day!")
    pr2.after(pr)

if __name__ == '__main__':
    saveName = 'test.yaml'
    
    kfp.compiler.Compiler().compile(pipeline, saveName)
    print("done")
```

[[공식]kfp package](https://kubeflow-pipelines.readthedocs.io/en/latest/source/kfp.html)  

<!--
https://lsjsj92.tistory.com/589  
https://www.kangwoo.kr/2020/03/28/kubeflow-pipelines-dsl-%ec%9d%b4%ed%95%b4%ed%95%98%ea%b8%b0-1/
-->

<!--
## katib?
https://www.kangwoo.kr/2020/03/20/kubeflow-katib-%EC%86%8C%EA%B0%9C/ 
-->

<br/>

## Tips

Jupyter notebook과 연동해 쉽게(?) 사용할 수 있습니다.

### Reference  

[[공식]Documentation](https://www.kubeflow.org/docs/)  
[[공식]Install the Kubeflow Pipelines SDK](https://www.kubeflow.org/docs/components/pipelines/sdk/install-sdk/)  


<!-- update log -->
<!--
본문에 추가할 내용을 적는다.
-->