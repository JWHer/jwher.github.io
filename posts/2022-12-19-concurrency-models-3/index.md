---
authors:
- jwher
description: Seven Concurrency Models in Seven Weeks 3
slug: concurrency-models-3
tags:
- tech
- distributed computing
- java
title: 7가지 동시성 모델 3(개선된 락)
---

![concurrency](icing.jpeg)  
*이 글은 Paul Butcher의 Seven Concurrency Models in Seven Weeks을 읽고 작성했습니다*  

Declaring a method as synchronized is just syntactic sugar for surrounding the method’s body
<!--truncate-->

## Day 2: Beyond Intrinsic Locks

자바 5는 `java.util.concurrent`를 도입하며 모든것이 바뀌었습니다.
이번에는 향상된 락 메커니즘이 제공하는 것을 살펴 보겠습니다.

고유 락은 편리하지만 제한되었습니다.
* 고유 락을 얻기 위해 블락된 스레드를 인터럽트할 수 있는 방법이 없습니다
* 고유 락을 요구하는 동안 시간제한을 할 수 있는 방법이 없습니다.
* 고유 락을 요구하는 방법은 `synchronized` 한 방법 뿐입니다. 이 뜻은 락 점유와 해제가 같은 메소드에서 수행되어야 하고 엄격하게 중첩되야 합니다.

`ReentrantLock`은 명확한 락과 언락 메소드를 `synchronized` 대신 제공하면서 이런 제한을 넘을 수 있게 해줍니다.
어떻게 고유 락을 개선할지 보기 전에, 어떻게 `ReentrantLock`이 `synchronized`를 대체하는지 살펴봅시다.

```java
Lock lock = new ReentrantLock();
lock.lock();
try {
    «use shared resources»
} finally {
    lock.unlock();
}
```
`try ... finally` 구문은 언제나 락이 해제되도록 보장하는 좋은 예제입니다.

### Interruptible Locking
작성중
