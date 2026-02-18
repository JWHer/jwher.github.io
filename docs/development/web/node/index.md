---
sidebar_position: 3
description: Node.js - JavaScript runtime built on Chrome's V8 engine
---

# Node.js

Node.js는 Chrome V8 JavaScript 엔진으로 빌드된 JavaScript 런타임 환경입니다. 서버 사이드 애플리케이션 개발에 사용됩니다.

## 특징

### 비동기 I/O

Node.js는 이벤트 기반 비차단(non-blocking) I/O 모델을 사용합니다.

```javascript
const fs = require('fs');

// 비동기 읽기
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

### 단일 스레드 이벤트 루프

하나의 스레드에서 여러 요청을 효율적으로 처리합니다.

### NPM (Node Package Manager)

세계 최대의 오픈 소스 라이브러리 생태계를 제공합니다.

```bash
npm install express
npm run start
```

## 주요 사용 사례

### 웹 서버

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000);
```

### API 서버

RESTful API, GraphQL 서버 구축에 적합합니다.

### 실시간 애플리케이션

WebSocket을 활용한 채팅, 알림 시스템 등에 사용됩니다.

### 마이크로서비스

경량화된 서비스 구축에 유리합니다.

## 인기 프레임워크

- **Express.js**: 미니멀 웹 프레임워크
- **NestJS**: TypeScript 기반 프레임워크
- **Fastify**: 고성능 웹 프레임워크
- **Koa.js**: Express 팀이 만든 차세대 프레임워크

## 참고 자료

- [Node.js 공식 문서](https://nodejs.org/)
- [NPM Registry](https://www.npmjs.com/)
