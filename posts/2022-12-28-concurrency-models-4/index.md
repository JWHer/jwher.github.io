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

[day1](/posts/concurrency-models-2#the-perils-of-alien-methods)에서 동시성 프로그램에서 어떻게 리스너를 안전하게 부를 수 있는지 살펴봤습니다.
`updateProgress()`를 변경해 방어적인 복사를 했던 것을 상기해봅시다. [code](/posts/concurrency-models-2#the-perils-of-alien-methods)
자바 표준 라이브러리가 제공하는 더 세런되고 준비된 `CopyOnWriteArrayList` 해결책이 있습니다.

```java
private CopyOnWriteArrayList<ProgressListener> listeners;

public void addListener(ProgressListener listener) {
    listeners.add(listener);
}
public void removeListener(ProgressListener listener) {
    listeners.remove(listener);
}
private void updateProgress(int n) {
    for (ProgressListener listener: listeners)
        listener.onProgress(n);
}
```

이름에서 알 수 있다시피. `CopyOnWriteArrayList`는 이전 방어적 복사 전략을 처음부터 뒤집습니다.
리스트를 순회하기 전에 복사본을 만드는 대신에, 변경사항이 있으면 복사합니다.
존재하는 이터레이터는 이전 복사본을 계속 참조할 것입니다.
이는 많은 사용사례에서 적절한 접근 방법이 아니지만 여기에선 적합한 방법입니다.

첫째로 결과물이 매우 명확하고 간결한 코드를 만든다는 것입니다.
사실 `listeners`의 정의와 별개로 day1에서 단순하게 만든 스레드 안전하지 않은 버전과 동일합니다.
둘째로 `updateProgress()`이 호출될 때마다 복사할 필요가 없고, `listeners` 만 수정하면 되어 더 효과적입니다.

<details>
<summary>How Large Should My Thread Pool Be?</summary>

스레드의 적절한 크기는 실행하는 하드웨어,
IO나 CPU bound 어떤 것에 관련 있는지,
기계가 어떤 것을 같은 시간에 실행시키는지,
기타 다른 요인들에 따라 다릅니다.

그렇지만, 좋은 경험 법칙은 계산 집약적인 작업의 경우 사용 가능한 코어와 거의 같은 수의 스레드를 갖는 것입니다.
더 많은 숫자가 IO 집약적인 작업에서 적절할 수 있습니다.

이 경험 첩칙을 너머, 실제적인 부하 테스트를 하는것이 최선일 것입니다.

</details>

### A Complete Program

현재까지 격리된 독립적인 도구를 살펴봤습니다.
다시 상기하자면, 작지만 현실적인 문제를 해결하려고 합니다.
위키피디아에서 가장 많이 사용되는 단어가 무엇일까요?

이는 찾기 쉬울 것입니다. XML 덤프를 다운로드 받아 단어수를 세는 프로그램을 만듭니다.
덤프 크기가 40GiB정도 되어 좀 걸리겠지만, 병렬화를 통해 속도를 높일 수 있을 것입니다.

베이스라인을 시작합시다.
첫 10만장에서 단어를 세는 sequential 프로그램은 얼마나 걸릴까요?

```java
public class WordCount {
    private static final HashMap<String, Integer> counts =
        new HashMap<String, Integer>();

    public static void main(String[] args) throws Exception {
        Iterable<Page> pages = new Pages(100000, "enwiki.xml");
        for(Page page: pages) {
            Iterable<String> words = new Words(page.getText());
            for (String word: words)
                countWord(word);
        }
    }

    private static void countWord(String word) {
        Integer currentCount = counts.get(word);
        if (currentCount == null)
            counts.put(word, 1);
        else
            counts.put(word, currentCount + 1);
  }
}
```

저자의 맥북 프로에선 105초 미만으로 걸립니다.

병렬 버전을 어디에서 시작하면 될까요? 메인 루프에서 각 순회마다 두 작업을 합니다.
처음엔 XML에서 `Page`를 파싱하고, 텍스트에서 단어를 셉니다.

*producer-comsumer* 패턴은 이 문제를 해결하기 위한 고전적인 패턴입니다.
한 스레드가 값을 만들고 소비하는 대신, producer와 consumer 두 스레드를 만듭니다.

여기에 producer를 구현한 `Parser`가 있습니다.

```java {10-12}
class Parser implements Runnable {
    private BlockingQueue<Page> queue;

    public Parser(BlockingQueue<Page> queue) {
        this.queue = queue;
    }

    public void run() {
        try {
>           Iterable<Page> pages = new Pages(100000, "enwiki.xml");
>           for (Page page: pages)
>               queue.put(page);
        } catch (Exception e) { e.printStackTrace(); }
    }
}
```

`run()` 메서드는 이전의 sequential 해결책으로 이루어진 외부 루프를 포함합니다.
대신 새로 파싱된 페이지의 단어를 세는 대신에 큐의 꼬리에 넣습니다.

여기 대응하는 consumer가 있습니다.

```java {13,17-19}
class Counter implements Runnable {
    private BlockingQueue<Page> queue;
    private Map<String, Integer> counts;

    public Counter(BlockingQueue<Page> queue, Map<String, Integer> counts) {
        this.queue = queue;
        this.counts = counts;
    }

    public void run() {
        try {
            while(true) {
>               Page page = queue.take();
                if (page.isPoisonPill())
                    break;

>               Iterable<String> words = new Words(page.getText());
>               for (String word: words)
>                   countWord(word);
            }
        } catch (Exception e) { e.printStackTrace(); }
    }
}
```

작성중
