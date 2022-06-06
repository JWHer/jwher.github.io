---
authors:
- jwher
description: 'K8s tip: PersistentVolume terminating'
slug: k8s-tip-pv-terminating
tags:
- tech
- kubernetes
- short
title: K8S Tip Pv Terminating
---

![kubernetes](/img/logos/kubernetes.svg)
*쿠버네티스 PV 삭제하기*  
<!--truncate-->

# 목차
* [PV 삭제하기](#pv-삭제하기)

## PV 삭제하기

오늘도 인프라 관리에 골머리를 앓고 있는 당신, persistent volume이 지워지지 않는 현상을 발견한다.  
```shell
$ kubectl get pv
NAME                 CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS        CLAIM                                       STORAGECLASS    REASON   AGE
harbor-chartmuseum   5Gi        RWO            Retain           Terminating   harbor/chartmuseum                          local-storage            6d8h
harbor-database      1Gi        RWO            Retain           Terminating   harbor/database                             local-storage            6d8h
harbor-jobservice    1Gi        RWO            Retain           Terminating   harbor/jobservice                           local-storage            6d8h
harbor-redis         1Gi        RWO            Retain           Terminating   harbor/redis                                local-storage            6d8h
harbor-registry      160Gi      RWO            Retain           Terminating   harbor/registry                             local-storage            6d8h
harbor-trivy         5Gi        RWO            Retain           Terminating   harbor/trivy                                local-storage            6d8h
```
   
이는 존재하지 않는 persistent volume claim에 binding 되어 있어 발생한다.  

```shell
$ kubectl edit pv harbor-database
... 전략 ...
claimRef:
  name: data-harbor-redis-0
  # 이하 해당하는 항목을 전부 삭제한다.
... 후략 ...
```

Zombie claim을 지워주면 바로 사라지게 된다!

<p align="center">
<img src="/assets/img/doby-is-free.png"/>
</p>

<br/>

## Tips

오늘도 한고비 넘겼네요 :sweat:  
~~사실 이 문제는 완전히 삭제되길 기다리지 못해서 발생했을 가능성이 높습니다~~  
~~*이미 알고있었다고예?*~~

### Reference

www.google.com


<!-- update log -->
<!--
본문에 추가할 내용을 적는다.
-->
