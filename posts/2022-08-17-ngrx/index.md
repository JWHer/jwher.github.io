---
authors:
- jwher
description: NGRX
slug: ngrx
tags:
- web
- typescript
title: NGRX 반응형 웹을 위한 상태 관리
draft: true
---

[![ngrx](ngrx.svg)](/posts/ngrx)  
*NGRX 반응형 웹을 위한 상태 관리*

<!--truncate-->

## ngrx

ngrx는 앵귤러를 위한 반응형 웹을 만들기 위한 프레임워크입니다.
상태(state) 관리, 사이드 이펙트의 격리(isolation), 엔티티 콜렉션 관리, 라우터 바인딩, 코드 생성,
개발자 도구 지원을 통해 많은 다른 타입의 앱을 만들때 개발자 경험을 향상시킵니다.

핵심 원칙은 다음과 같습니다.
* 상태는 하나의 불변하는(immutable) 데이터 구조입니다
* 컴포넌트는 격리되어 처리되는 사이드 이펙트에 책임을 위임(delegate)합니다
* 타입스크립트를 사용해 타입 안정성을 추구합니다
* 액션(actions)과 상태(state)는 직렬화(serializable) 가능해 상태를 저장하고, 압축 해제(rehydrated), 재현가능하게 만듭니다
* 반응형 웹을 만들기 위한 함수형 프로그래밍을 추구합니다
* 기능(functionality) 검증을 위해 간단한 테스팅 전략을 제공합니다

포함된 패키지는 다음과 같습니다

상태(State)
* [스토어(Store)](#store): RxJS에서 제공하는 앵귤러 앱을 위한 상태 관리 방법입니다. Redux에서 영감을 얻었습니다
  * [액션(Actions)](#actions)은 컴포넌트와 서비스에서 전달(dispathed)되는 독립적인 이벤트입니다
  * [리듀서(Reducers)](#reducers)는 현재 상태와 가장 마지막에 수행된 액션으로 새로운 상태를 계산하는 순수 함수입니다
  * [셀렉터(Selectors)](#selectors)는 상태의 일부를 선택하고(select), 파생하고(derive), 조합하는(compose) 순수 함수입니다
* [이펙트(Effects)](#effects): 스토어를 위한 사이드 이펙트 모델입니다
* 라우터 스토어: 앵귤러 라우터와 스토어간 바인딩입니다
* 엔티티(Entity): 기록된 콜렉션을 관리하기 위한 엔티티 상태입니다
* ComponentStore: local/component 상태를 관리하기 위한 독립 라이브러리 입니다.

데이터
* Data: 엔티티 데이터 관리를 위해 간소화된 확장입니다.

개발자 도구  
* [Store Devtools](#store-devtools)
* Schematics: 앵귤러에서 NgRx 라이브러리를 사용하기 위한 비계(Scaffolding)입니다
* ESLint Plugin

![ngrx-state-management-lifecycle](state-management-lifecycle.png)

## 구현
설명만으로는 직관적으로 이해가 안되니, 직접 해 봅시다.

actions:		ng g @ngrx/schematics:action state/${name}/${name} --defaults  
effects:		ng g @ngrx/schematics:effect state/${name}/${name} --skip-tests --module state/${name}/${name}.store.module.ts --defaults  
facade:		    -  
model:			-  
reducer:		ng g @ngrx/schematics:reducer state/${name}/${name} --skip-tests --defaults  
selector:		ng g @ngrx/schematics:selector state/${name}/${name} --skip-tests  
store.module:	ng g m state/${name}/${name}.store --flat  

## Store

### Actions
### Reducers
### Selectors
### Store Devtools

## Effects

이펙트는 RxJS에서 작동하는 스토어용 사이드 이펙트 모델입니다.
이펙트는 스트림(stream)을 사용하여 네트워크 요청, 웹 소켓 메시지, 시간 기반 이벤트
같은 외부 상호 작용의 상태를 줄이기(reduce) 위한 새로운 액션 소스를 제공합니다.

## References
[[공식]What is NgRx](https://ngrx.io/docs)  
