---
authors:
- jwher
description: M1 맥에서 pytorch GPU 가속 사용해보기
slug: pytorch-in-m1
tags:
- tech
title: Pytorch in M1
---

## Pytorch

## GPU 가속

## ARM

## 공식 발표

[Official Blog](https://pytorch.org/blog/introducing-accelerated-pytorch-training-on-mac/)

In collaboration with the Metal engineering team at Apple, we are excited to announce support for GPU-accelerated PyTorch training on Mac.
Accelerated GPU training is enabled using Apple’s Metal Performance Shaders (MPS) as a backend for PyTorch.

![pytorch-m1](./pytorch-m1.gif)

## 설치해보기

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