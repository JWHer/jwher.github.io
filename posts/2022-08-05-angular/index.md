---
authors:
- jwher
description: 앵귤러 시작하기
slug: angular
tags:
- web
- typescript
title: 앵귤러 시작하기
draft: true
---

[![angular](angular.svg)](/posts/angular)  
*앵귤러 시작하기*

<!--truncate-->

## 앵귤러란?

## 요구사항

다음 항목에 대한 기본적인 이해가 필요합니다!
* HTML
* JavaScript
* TypeScript

## 시작하기

```bash
$ ng new tx_webapp
```

```
? Would you like to add Angular routing? (y/N) y
```

```
? Which stylesheet format would you like to use? (Use arrow keys)
❯ CSS 
  SCSS   [ https://sass-lang.com/documentation/syntax#scss                ] 
  Sass   [ https://sass-lang.com/documentation/syntax#the-indented-syntax ] 
  Less   [ http://lesscss.org                                             ]
```

## Rx/js

actions:		ng g @ngrx/schematics:action state/<name>/<name> --defaults
effects:		ng g @ngrx/schematics:effect state/<name>/<name> --skip-tests --module state/<name>/<name>.store.module.ts --defaults
facade:		    -
model:			-
reducer:		ng g @ngrx/schematics:reducer state/<name>/<name> --skip-tests --defaults
selector:		ng g @ngrx/schematics:selector state/<name>/<name> --skip-tests
store.module:	ng g m state/<name>/<name>.store --flat

## Reference

[[공식]Setting up the local environment and workspace](https://angular.io/guide/setup-local)
