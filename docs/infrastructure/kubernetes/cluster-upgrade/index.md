---
title: Kubernetes 클러스터 업그레이드
description: Kubernetes 컨트롤 플레인과 워커 노드 업그레이드 절차
draft: true
---

1. Upgrade control plane

    마스터 노드 업데이트시 (master component down)

    - 워커 노드에서 실행중인 서비스는 사용가능 (No application downtime)
    - 클러스터 접근은 불가 (Management functionalities not available)
    - 하지만, controller manager와 scheduler가 중단되어 재시작은 안됨
    (Crashed Pods won't be rescheduled)
    - 마스터 노드가 두대 이상이면 가용성 확보(Upgrade each Node one by one)
2. Upgrade worker nodes

업그레이드할 컴포넌트 목록

- kube-apiserver
- controller-manager
- kube-scheduler
- kubelet
- kube-proxy
- kubectl

kubeadm(`etcd`, `coredns`) `weave-net`?

같은 버전이여야 하는가? 한번에 업그레이드 해야하는가?
