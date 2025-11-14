---
sidebar_position: 5
description: OpenVINO - Intel's toolkit for deep learning inference optimization
---

# OpenVINO

OpenVINO (Open Visual Inference and Neural Network Optimization)는 Intel이 개발한 딥러닝 추론 최적화 툴킷입니다.

## 주요 기능

### 모델 최적화

다양한 딥러닝 프레임워크의 모델을 Intel 하드웨어에 최적화합니다.

**지원 프레임워크:**
- TensorFlow
- PyTorch
- ONNX
- Caffe
- MXNet

### 추론 엔진

최적화된 모델을 CPU, GPU, VPU, FPGA에서 빠르게 실행합니다.

```python
from openvino.runtime import Core

# Core 생성
core = Core()

# 모델 로드
model = core.read_model("model.xml")
compiled_model = core.compile_model(model, "CPU")

# 추론 실행
output = compiled_model([input_data])
```

## 워크플로우

### 1. 모델 변환

```bash
# PyTorch 모델을 OpenVINO IR로 변환
mo --input_model model.pth --output_dir ./output
```

### 2. 모델 최적화 (선택)

```bash
# Post-training quantization
pot -c config.json
```

### 3. 추론 실행

```python
import openvino as ov

core = ov.Core()
model = core.read_model("model.xml")
compiled = core.compile_model(model, "CPU")
result = compiled(input_tensor)
```

## 성능 최적화

### 양자화 (Quantization)

FP32 → INT8 변환으로 추론 속도 향상 및 모델 크기 감소

### 동적 배칭

여러 입력을 배치로 처리하여 처리량 증가

### 스트림 실행

병렬 추론 스트림으로 처리량 최대화

## 사용 사례

- **엣지 디바이스**: 임베디드 시스템에서의 실시간 추론
- **서버 배포**: 데이터센터에서의 대규모 추론
- **컴퓨터 비전**: 객체 감지, 세그멘테이션, 분류

## 지원 하드웨어

- Intel CPU (Core, Xeon)
- Intel integrated GPU
- Intel Movidius VPU
- Intel FPGA

## 참고 자료

- [OpenVINO 공식 문서](https://docs.openvino.ai/)
- [OpenVINO Model Zoo](https://github.com/openvinotoolkit/open_model_zoo)
