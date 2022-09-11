---
authors:
- jwher
description: 오래걸리는 작업 API 설계
slug: api-design-for-long-jobs
tags:
- web
title: 오래걸리는 작업 API 설계
---

[![api](api.png)](/posts/api-design-for-long-jobs)  
*오래걸리는 작업 API 설계*

<!--truncate-->

## 문제점
API를 개발하다 보면, 백그라운드에서 오랜 작업이 걸리는 것들이 있습니다.
특히, AI를 API로 제공할때 많이 발생하게 됩니다.
~~(가장 크게 실패했다고 느낀 점입니다)~~

REST는 요청이 수초 안에 끝나기 때문에, 동기적(synchronous)인 API에 적합한 부분이 있습니다. 작업에 시간이 더 걸린다면, 애플리케이션이 연결 상태를 유지한채 작업이 끝날때가지 멈춰(block)있는 것은 좋은 해결방법이 아닙니다.
연결이 지속되면 전체 서비스와 로드벨런서 자원을 계속 사용하게 되고, 네트워크 환경에 따라 연결이 끊길 가능성이 높아집니다.
(연결이 끊기면 사용자는 같은 요청을 또 보내겠죠!)

타이크(Tyk)라는 API 관리 플랫폼 회사에 좋은 글이 있어 각색하였습니다.

## 예제
*타이크 社의 예제를 각색했습니다*  
벌크 인퍼런스 API 요청을 가정해봅시다.
```
[POST] /v1/inference/bulk
[
    {...},
    {...},
    {...},
]
```

API 서버는 빨리(수초 이내에) 끝나지 않을 것을 압니다.
따라서, `202 Accepted` 상태를 반환합니다.
```
HTTP/1.1 202 Accepted
Location: https://api.example.com/v1/inference/jobs/3971
```

`202 Accepted`는 사용자의 요청이 정상적이였으나, 서버가 즉시 응답할 수 없다는 것을 의미합니다.
여기에 `Location` 헤더가 추가되어 `GET` 요청으로 결과를 확일할 수 있는 URL을 제공합니다.

<br/>
<br/>

사용자는 제공된 URL을 폴링하여 작업이 끝났는지 확인합니다.
```
[GET] /v1/inference/jobs/3971
```

작업이 진행중이라면 사용자는 status가 `InProgress`(또는 정의된 status값)인 응답을 받습니다.
```
HTTP/1.1 200 OK

{
    "jobId": "3971",
    "status": "InProgress",
    "percentComplete": "25",
    "suggestedNextPollTime": "2018-10-02T11:00:00.00Z",
    "estimatedCompletionTime": "2018-10-02T14:00:00.00Z"
}
```

작업이 완료되었다면 사용자는 status가 `Completed`인 응답을 받습니다.
```
HTTP/1.1 200 OK

{
    "jobId": "3971",
    "status": "Completed",
    "completionTime": "2018-10-02T14:00:00.00Z",
    "_links": {
      { "rel":"results", "https://api.example.com/v1/inference/jobs/3971/results" },
      ...
    }
}
```

<br/>

## 폴링을 사용하지 않는 방법
* 작업이 완료되었을때 알려줄(`POST`) **웹훅**을 사용합니다
  - 사용자의 부담이 커질 수 있지만, 작업이 끝날때까지 폴링하는 것을 방지할 수 있습니다
* **Server Sent Event(SSE)**나 **웹소켓**을 사용합니다

<br/>

## 결론?
이전까지는 오래걸리는 작업에 대한 반응형 웹을 백엔드에서 지원해주려면 SSE나 웹소켓을 사용해야 한다고 생각했습니다.

하지만 FE개발자에게 좋은 방법만은 아니였다는(특히 웹소켓을 IE같은 구형 브라우저까지 고민해야 했다면!) 것을 경험적으로 느끼고 있었습니다.

폴링을 포함한 다양한 상태 모니터링 방법을 제공해 **천사같은 백엔드 개발자**가 되어보는건 어떨까요?

~~*물론 그런건 세상에 없습니다*~~

<br/>

## References
[API design guidance: long running background jobs](https://tyk.io/blog/api-design-guidance-long-running-background-jobs/)
