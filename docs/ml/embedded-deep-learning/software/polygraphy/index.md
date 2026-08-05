---
title: Debugging TensorRT Accuracy
description: Polygraphy 툴을 활용한 TensorRT 정확도 디버깅
draft: true
---

https://github.com/NVIDIA/TensorRT/blob/release/10.7/tools/Polygraphy/how-to/debug_accuracy.md

## 간헐적인가?
Intermittent Or Not?

## 레이어별로 확인
Is Layerwise An Option?

## 실패하는 서브그래프 추출
Extracting A Failing Subgraph

```bash
polygraphy inspect model deploy_files/dsvt_input_backbone.trt --plugins ../plugins/10.4.0-cuda11.8/libwindow_partition.so ../plugins/10.4.0-cuda11.8/libget_set.so --model-type engine
```
