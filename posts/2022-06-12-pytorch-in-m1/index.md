---
authors:
- jwher
description: M1 맥에서 pytorch GPU 가속 사용해보기
slug: pytorch-in-m1
tags:
- tech
title: Pytorch in M1
---

설치와 사용방법만 보시고 싶은 분은 [공식 발표](#공식-발표) 단락을 봐주세요!

## Pytorch

> 이 글을 읽는 분이라면, pytorch가 뭔지 모르시는 분은 없을 것이라 생각합니다만 🤣

파이토치는 오픈소스 머신 러닝 프레임워크로
제품 개발 연구를 빠르게 하기 위한 방법입니다.

머신 러닝 특성상 많은 선형대수학 연산을 하게 됩니다.

## GPU 가속

Hardware Accelation이란 특정한 소프트웨어 작업을 general-purpose CPU 보다 빠르게 작업하기 위해 만들어 졌습니다.

GPU가 그렇죠, 근데 GPU에서 그래픽 작업만 하드웨어 가속을 할 수 있는 게 아닙니다.

역으로 General-purpose on GPU, GPGPU 기술이 있습니다.

대표적인 GPU hardware 제조사 nvidia는 Compute Unified Device Architecture, CUDA를 지원합니다.

이 가속은 AI와 딥러닝을 빠르게 해 주었습니다. GPU 가격을 폭등시킬 정도로요!

## ARM

그렇다면 맥북은 Nvidia GPU를 쓸까요?
답은 이젠 **아니요** 입니다.

애플은 Mac을 Apple silicon으로 전환한다는 계획을 발표합니다.
[Apple announces Mac transition to Apple silicon](https://www.apple.com/newsroom/2020/06/apple-announces-mac-transition-to-apple-silicon/)
M1은 Advanced RISC Machine으로 설계되었습니다.
여러 장점이 있다고 합니다.

그렇다면, Mac에서 머신러닝을 하는건 불가능 할까요?

## 공식 발표

[Official Blog](https://pytorch.org/blog/introducing-accelerated-pytorch-training-on-mac/)
에 따르면, pytorch 개발팀은 애플 Metal engineering 팀과 함께 Mac GPU 가속 파이토치 학습을 도입했습니다.
이는 apple의 Metal Performance Shaders 를 backend로 해 구현되었습니다.

<!-- In collaboration with the Metal engineering team at Apple, we are excited to announce support for GPU-accelerated PyTorch training on Mac.
Accelerated GPU training is enabled using Apple’s Metal Performance Shaders (MPS) as a backend for PyTorch. -->

이는 CPU로 연산을 할 때 보다 최소 5%에서 20% 정도의 성능 향상을 보인다고 보고되었습니다.

![pytorch-m1](./pytorch-m1.gif)

## 설치해보기

하지만 진짜 그런지 확인해 봐야겠죠?

```
The MPS backend is supported on MacOS 12.3+.Current OS version can be queried using `sw_vers`
```
안타깝게도 12.3+

```
jwher@jwherui-MacBookPro ~ % sw_vers
ProductName:	macOS
ProductVersion:	12.2.1
BuildVersion:	21D62

jwher@jwherui-MacBookPro ~ % sw_vers
ProductName:	macOS
ProductVersion:	12.4
BuildVersion:	21F79
```

requirements.txt
```
certifi==2022.5.18.1
charset-normalizer==2.0.12
cycler==0.11.0
fonttools==4.33.3
idna==3.3
joblib==1.1.0
kiwisolver==1.4.2
matplotlib==3.5.2
numpy==1.23.0rc3
packaging==21.3
Pillow==9.1.1
pyparsing==3.0.9
python-dateutil==2.8.2
pytz==2022.1
requests==2.28.0
scikit-learn==1.1.1
scipy==1.8.1
six==1.16.0
sklearn==0.0
threadpoolctl==3.1.0
torch==1.13.0.dev20220611
torchaudio==0.14.0.dev20220603
torchvision==0.14.0.dev20220609
tqdm==4.64.0
typing_extensions==4.2.0
urllib3==1.26.9
```

## 테스트

torchvision 사용

<details>
<summary>Full Script</summary>

```
if __name__ == "__main__":

    import platform, torch
    # /Users/jwher/miniconda3/envs/py39_native/bin/python
    print(platform.platform())

    CPU= True
    device = "cpu" if CPU else torch.device("mps")
    print("Device is : {}".format(device))

    class CFG:
        lr = 0.001
        train_batch_size = 4
        total_epochs = 1
        num_classes = 10
        input_shape = (224,224)

    # Important to fix random seed
    torch.manual_seed(1)
    np.random.seed(1)

    from torch.utils.data import TensorDataset
    from torch.utils.data import DataLoader
    import torchvision
    from torchvision import datasets, transforms
    from torchvision.transforms import ToTensor

    image_path = "./data/"
    mnist_dataset = torchvision.datasets.MNIST(
        image_path, 'train', download=False,
        transform=transforms.Compose(
            [transforms.Resize(CFG.input_shape), transforms.Grayscale(3),ToTensor()]
        )
    )
    trainset_1 = torch.utils.data.Subset(mnist_dataset, list(range(1000)))
    mnist_loader  = DataLoader(trainset_1,batch_size=CFG.train_batch_size,shuffle=True,num_workers=4)
    x_batch, y_batch = (next(iter(mnist_loader)))

    import torchvision.models as models
    import torch.nn as nn
    import time, numpy as np
    from tqdm import tqdm

    class MODELS:
        vgg16_model = models.vgg16(pretrained=True)
        alexnet = models.alexnet(pretrained=True)
        resnet_18 = models.resnet18(pretrained=True)
        mobilenet_v2 = models.mobilenet_v2(pretrained=True)
        efficientnet_b0 = models.efficientnet_b0(pretrained=True)
        squeezenet = models.squeezenet1_0(pretrained=True)

        vgg16_model.classifier[6] = nn.Linear(vgg16_model.classifier[6].in_features,CFG.num_classes)
        alexnet.classifier[6] = nn.Linear(alexnet.classifier[6].in_features,CFG.num_classes)
        resnet_18.fc = nn.Linear(resnet_18.fc.in_features,CFG.num_classes)
        mobilenet_v2.classifier[1] = nn.Linear(mobilenet_v2.classifier[1].in_features,CFG.num_classes)
        efficientnet_b0.classifier[1] = nn.Linear(efficientnet_b0.classifier[1].in_features,CFG.num_classes)
        squeezenet.classifier[1] = nn.Linear(squeezenet.classifier[1].in_channels,CFG.num_classes)

    def train(model_name,model,train_dl,n_epochs=CFG.total_epochs):
        '''
        call train_one_epoch:
        we will take average time taken to train per epoch for a max of 5 epochs
        '''
        loss_fn = nn.CrossEntropyLoss()
        optimizer = torch.optim.Adam(model.parameters(),lr=CFG.lr)
        average_time = []
        for epoch in range(n_epochs):
            start_time = time.time()
            print(f"Epoch {epoch} -->")
            pbar = tqdm(enumerate(train_dl), total=len(train_dl), desc='Train : '+model_name)
            for step, (x_batch, y_batch) in pbar:   
                x_batch = x_batch.to(device)
                y_batch = y_batch.to(device)
                pred = model(x_batch)[:,0]
                loss = loss_fn(pred,y_batch.float())
                loss.backward()
                optimizer.step()
                optimizer.zero_grad()
            end_time = time.time() - start_time
            average_time.append(end_time)
        return np.mean(average_time)

    model_dict = {
        'vgg16_model' : MODELS.vgg16_model, 
        'alexnet' : MODELS.alexnet, 
        'resnet_18' : MODELS.resnet_18, 
        'mobilenet_v2' : MODELS.mobilenet_v2, 
        'efficientnet_b0' : MODELS.efficientnet_b0, 
        # 'squeezenet' : MODELS.squeezenet, 
    }

    time_calc = {}
    for model_name,model in model_dict.items():
        print("Model name is : {}".format(model_name))
        print("-----------------------------------------")
        model_epoch_avg_time = train(model_name,model.to(device),mnist_loader)
        time_calc[model_name] = model_epoch_avg_time

    print("Time result with device={}".format(device))
    for key, value in time_calc.items():
        print(f"{key}: {value}")
```

</details>

```
Time result with device=mps
vgg16_model: 36.275963306427
alexnet: 10.713558197021484
resnet_18: 18.608237743377686
mobilenet_v2: 45.10530471801758
efficientnet_b0: 75.51856923103333
```

```
Time result with device=cpu
vgg16_model: 188.27877402305603
alexnet: 35.99792671203613
resnet_18: 42.05255889892578
mobilenet_v2: 223.11423015594482
efficientnet_b0: 256.45679998397827
```

### References
[Pytorch training on m1 air gpu](https://abhishekbose550.medium.com/pytorch-training-on-m1-air-gpu-c534558acf1e)
