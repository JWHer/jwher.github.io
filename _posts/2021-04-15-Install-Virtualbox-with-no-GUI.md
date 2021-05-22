---
layout: post
title: "Install Virtualbox with no GUI"
subtitle: "linux 서버에 virtual box 환경 세팅하기"
cover-img: /_posts/images/virtualbox.jpg
thumbnail-img: /_posts/images/virtualbox.jpg
date: 2021-04-15 11:50:00 
categories: virtualbox, linux, rdp
---

<!-- image repository: https://raw.githubusercontent.com/JWHer/jwher.github.io/main/_posts/images/ -->
![Alt](https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/virtualbox.jpg "virtualbox")  
*linux 서버에 virtual box 환경 세팅하기*  

리눅스 서버에 virtualbox로 가상 환경을 구성해야 했다.  
ssh console 명령어로 vm을 실행시켜 보자!

# 목차
* [Preflight](#Preflight)
* 가상 머신 생성하기
* virtualbox extension pack 설치
* 네트워크 설정과 RDP

## Preflight

oracle virtualbox의 설치  
vm을 사용하기 위해선 vbox나 vmware가 필요하다:D

```shell
# 설치에 관해서 자세한 설명은 하지 않겠다.
# https://www.virtualbox.org/wiki/Downloads
$ sudo apt-get install virtualbox

# 설치가 되었으면, 확인해 보자
$ vboxmanage --version
```

<br/>

## 가상 머신 생성하기

먼저 설치 가능한 OS Type을 확인해야 한다.  
```shell
$ vboxmanage list ostypes

... 전략 ...
ID:          Ubuntu
Description: Ubuntu (32-bit)
Family ID:   Linux
Family Desc: Linux
64 bit:      false

ID:          Ubuntu_64
Description: Ubuntu (64-bit)
Family ID:   Linux
Family Desc: Linux
64 bit:      true
... 후략 ...
```
<br/>

Ubuntu 18.04 LTS를 설치할 것이므로 ubuntu_64를 확인한다.  
확인이 끝났으면 가상 머신을 생성해 주자.  
```shell
# --register 옵션을 사용해 등록까지 마쳐주자
# 여러 설정을 해줄 수 있지만, 추후에 modifyvm 명령어로 수정한다
$ vboxmanage createvm --name "your awesome vm" --register

Virtual machine 'your awesome vm' is created and registered.
UUID: 9a846e25-5227-4824-b396-2174264cb232
Settings file: '/some/path/your awesome vm.vbox'


# 만일 --register를 사용하지 않았다면, 명령어를 한번 더 입력해야 한다
$ vboxmanage registervm "/some/path/your awesome vm.vbox"

# virtualbox는 user마다 사용환경이 분리되어 있어 sudo를 사용하면 생성한 vm이 보이지 않는다
# (어떻게 알았냐고? 알고싶지 않았다...)
```
<br/>

가상 머신 등록을 마쳤으면 여려 spec을 설정해 주자
```shell
# --ostype 위에서 확인한 type을 입력한다
# --cpus 사용할 cpu 크기를 설정한다
# --memory 사용할 메모리를 설정한다 (MB)
# --vram 비디오 메모리를 설정한다 (MB)
# --mouse usbtablet으로 설정하면 mstsc에서 마우스 통합을 사용할 수 있다
# --x2apic on --ioapic on
#  Advanced Programmable Interrupt Controller, on을 설정해야 guest machine에서 cpu를 온전히 잡는다
# --pae on/off Physical Address Extension 메모리 4GB 이상일 때 사용한다
$ vboxmanage modifyvm "your awesome vm" --ostype ubuntu_64 --cpus 8 --memory 20480 --vram 16 --mouse usbtablet

# 설정은 다음 명령어로 확인할 수 있다.
$ vboxmanage showvminfo "your awesome vm"

Name:                        your awesome vm
Groups:                      /
Guest OS:                    Ubuntu (64-bit)
UUID:                        570ea192-d2ed-4ebd-91e9-b8d98e0498e6
... 생략 ...
```
<br/>

마지막으로 storage와 dvddrive를 설정해 주자
```shell
# --filename 생성할 이미지 이름. 경로를 지정하지 않으면 작업공간에 생기니 주의
# --size 사용할 storage 크기 (MB)
# --format 포멧 설정 (default VDI)
# --variant 동적할당 Standard 정적할당 Fixed
$ vboxmanage createmedium disk --filename "awesome storage.vdi" --size 20240 --format VDI --variant fix 

# storage controller를 추가해 준다
$ vboxmanage storagectl "your awesome vm" --name "SATA" --add sata --portcount 1

# 생성한 컨트롤러에 이미지를 연결한다
$ vboxmanage storageattach "your awesome vm" --storagectl "SATA" --port 0 --device 0 --type hdd --medium "awesome storage.vdi"


# 부팅에 사용할 iso 파일을 연결할 dvddrive를 설정해 주자
# 먼저 storage contoller를 추가해 준다
$ vboxmanage storagectl "your awesome vm" --name "IDE" --add ide

# 생성한 컨트롤러와 iso 파일을 vm에 연결해 준다
$ vboxmanage storageattach "your awesome vm" --storagectl "IDE" --port 1 --device 0 --type dvddrive --medium "ubuntu.iso"
```
<br/>

## virtualbox extension pack 설치
길고 긴 설정 끝에 vm을 시작하려는데,  
어라? ssh에서 vm에 os install을 어떻게 진행하지?  

ubuntu server버전으로 headless(No gui, console)로 할 수 있을까 생각해봤지만,  
마침 이미지 버전도 GUI이고 화면을 사용해 install을 하기로 했다!  
(솔직이 GUI가 편하잖아)

GUI를 원격으로 보여주려면 virtualbox extension pack이 설치되어야 한다.

```shell
# https://www.virtualbox.org/wiki/Downloads에서 버전에 맞는 extension pack을 받는다
$ wget -O "확장팩 이름" "url"

$ sudo vboxmanage extpack install "확장팩 이름"
```
<br/>

이제 vm이 GUI를 실행시켜 주도록 설정하고 실행시킨다
```shell
$ vboxmanage modifyvm "your awesome vm" --vrde on --vrdeport "port number" --vrdemulticon on

$ vboxheadless --startvm "your awesome vm"

Oracle VM VirtualBox Headless Interface 6.0.20
(C) 2008-2020 Oracle Corporation
All rights reserved.

VRDE server is listening on port 5031.

# 아래 명령어로 실행시킬 수 있으나 포트번호가 나오지 않는다
$ vboxmanage startvm "your awesome vm" --vboxheadless

# 또한, vboxheadless 옵션을 주지 않으면 다음과 같은 에러가 난다
Waiting for VM "your awesome vm" to power on...
VBoxManage: error: The virtual machine 'your awesome vm' has terminated unexpectedly during startup because of signal 6
VBoxManage: error: Details: code NS_ERROR_FAILURE (0x80004005), component MachineWrap, interface IMachine
```

<br/>

## 네트워크 설정과 RDP
필자는 VM이 사설망과 연결되어야 했기에 네트워크 어댑터를 설정해 주었다.  
별도로 네트워크 세팅이 필요 없으면 건너뛰어도 된다. (기본적으로 NAT로 설정되어 있다)

```shell
# nat과 bridge를 둘 다 사용하기 위해 다음과 같이 구성했다.
$ vboxmanage modifyvm "your awesome vm" --nic1 nat --nic2 bridged --bridgeadapter2 "host interface"
```
<br/>

### RDP(remote desktop protocol) 사용
*드디어 무중霧中을 빠져나와...*

![Alt](https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/mstsc.png "mstsc")    
원격 데스크톱 연결을 연다

![Alt](https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/mstsc-connection.png "mstsc-connection")   
호스트 컴퓨터의 ip와 vm 설정에 사용한 GUI 포트를 입력한다

![Alt](https://raw.githubusercontent.com/JWHer/jwher.github.io/master/_posts/images/mstsc-ubuntu.png "mstsc-ubuntu")   
자! 이제 그리웠던 GUI가 돌아왔다!   

<br/>

### Reference  
https://docs.oracle.com/en/virtualization/virtualbox/6.1/user/vboxmanage.html


## - JWHer  
좋은 글을 쓰고 싶습니다.

<!-- update log -->
<!--
본문에 추가할 내용을 적는다.
VBoxManage modifyvm "VM name" --natpf1 "guestssh,tcp,,2222,,22"
VBoxManage unregistervm --delete "Name of Virtual Machine"
참고
http://kimchki.blogspot.com/2018/07/virtualbox-command.html
블랙스크린
https://askubuntu.com/questions/162075/my-computer-boots-to-a-black-screen-what-options-do-i-have-to-fix-it
-->
