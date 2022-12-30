---
authors:
- jwher
description: Seven Concurrency Models in Seven Weeks - Chapter2 Day3
slug: concurrency-models-4
tags:
- tech
- distributed computing
- java
title: 7가지 동시성 모델(스레드와 락) 거인의 어깨 위에서
---

[![concurrency](giant.jpeg)](/posts/concurrency-models-4)  
*이 글은 Paul Butcher의 Seven Concurrency Models in Seven Weeks을 읽고 작성했습니다*  

Nanos gigantum humeris insidentes
<!--truncate-->

## Day 3: On the Shoulders of Giants

[Day2](/posts/concurrency-models-3)에서 `java.util.concurrent`가 포함하는
광범위하고, 고성능에, 완전히 디버그된 동시성 데이터 구조와 유용성이 강화된 락을 다뤘습니다.
오늘은 자체 해결책을 만드는 것보다 이를 사용하는게 더 좋다는것을 보일 것입니다.

### Thread-Creation Redux

[day1](/posts/concurrency-models-3)에서는 어떻게 스레드를 시작하는지 보았습니다.
하지만 스레드를 직접 만들어서 제대로 작동하게 되는 경우는 드뭅니다.
여기 어떤것을 보내던 메아리(echo)치는 서버가 있습니다.

```java {25-27}
public class EchoServer {

    public static void main(String[] args) throws IOException {
        class ConnectionHandler implements Runnable {
            InputStream in; OutputStream out;
            ConnectionHandler(Socket socket) throws IOException {
                in = socket.getInputStream();
                out = socket.getOutputStream();
            }

            public void run() {
                try {
                    int n;
                    byte[] buffer = new byte[1024];
                    while((n = in.read(buffer)) != -1) {
                        out.write(buffer, 0, n);
                        out.flush();
                    }
                } catch (IOException e) {}
            }
        }

        ServerSocket server = new ServerSocket(4567);
        while (true) {
>           Socket socket = server.accept();
>           Thread handler = new Thread(new ConnectionHandler(socket));
>           handler.start();
        }
    }
}
```

강조된 라인은 들어오는 연결을 수락하고 새 스레드를 만들어 처리하는 일반적인 패턴을 따릅니다.
이것은 잘 작동하나 몇가지 문제를 겪습니다.
첫째로 스레드 생성이 싸지만, 공짜는 아닙니다. 이 디자인은 매 연결마다 값을 치를 겁니다.
둘째로 연결 만큼 커넥션을 생성합니다. 커넥션이 처리될 수 있는 양보다 빠르게 들어오면 스레드가 증가할 것이고 서버는 멈추거나 고장날 것입니다.
이는 Denial-of-Service(DoS) 공격에 완전히 열려있습니다.

스레드 풀을 사용해서 문제를 해결할 수 있습니다.
```java
int threadPoolSize = Runtime.getRuntime().availableProcessors() * 2;
ExecutorService executor = Executors.newFixedThreadPool(threadPoolSize);
while (true) {
    Socket socket = server.accept();
    executor.execute(new ConnectionHandler(socket));
}
```

이 코드는 가능한 프로세스의 두배의 스레드를 생성합니다.
`execute()`요청이 한 순간에 더 많이 들어온다면 스레드가 사용가능할때까지 큐에 들어갈 것입니다.
이 뜻이 연결마다 생성되는 스레드의 오버헤드에 손해를 입지 않는게 아닙니다.
그러나 서버가 높은 부하에서 동작 가능한 것을 보장합니다.
(모든 요청이 빠르게 처리되기 충분하지 않겠지만, 적어도 몇은 처리될 것입니다)

### Copy on Write

작성중
