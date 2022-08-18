---
authors:
- jwher
description: NGRX
slug: ngrx
tags:
- web
- typescript
title: NGRX 반응형 웹을 위한 상태 관리
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
  * [액션(Actions)](#actions)은 컴포넌트와 서비스에서 전달(dispathed)되는 고유한 이벤트입니다
  * [리듀서(Reducers)](#reducers)는 현재 상태와 가장 마지막에 수행된 액션으로 새로운 상태를 계산하는 순수 함수입니다
  * [셀렉터(Selectors)](#selectors)는 상태의 일부를 선택하고(select), 파생하고(derive), 조합하는(compose) 순수 함수입니다
* [이펙트(Effects)](#effects): 스토어를 위한 사이드 이펙트 모델입니다
* 라우터 스토어: 앵귤러 라우터와 스토어간 바인딩입니다
* 엔티티(Entity): 기록된 콜렉션을 관리하기 위한 엔티티 상태입니다
* ComponentStore: local/component 상태를 관리하기 위한 독립 라이브러리 입니다.

<!--
NgRx store를 사용해야 하는 이유 5가지를 **SHARI**라고 부릅니다.
* Shared: 많은 컴포넌트와 서비스에서 공유될 수 있는 상태를 제공합니다
* Hydrated: 지속적이고 복원가능(rehydrate)한 외부 저장소 상태를 제공합니다
* Available: 경로에 다시 접근할 때 사용 가능한 상태를 제공합니다
* Retrieved: 접근할 때 사이드 이펙트 처리가 필요한 상태 관리를 제공합니다
* Impacted: 다른 소스의 액션에 따른 상태 변화를 제공합니다
-->

데이터
* Data: 엔티티 데이터 관리를 위해 간소화된 확장입니다.

개발자 도구  
* [Store Devtools](#store-devtools)
* Schematics: 앵귤러에서 NgRx 라이브러리를 사용하기 위한 비계(Scaffolding)입니다
* ESLint Plugin

![ngrx-state-management-lifecycle](state-management-lifecycle.png)

## 구현

*여기에서는 큰 규모에 적합한 계층적으로 구조화된 스토어를 설명합니다.*
*공식 [가이드](https://ngrx.io/guide/store/walkthrough)를 따라해 보는것도 좋습니다*

설명만으로는 직관적으로 이해가 안되니, 직접 해 봅시다.
대표적으로 다음과 같은 폴더 구조를 가집니다.
```
src
└app
  ├components
  ├service
  └store
    └<name>
      ├<name>.actions.ts
      ├<name>.effects.ts
      ├<name>.model.ts
      ├<name>.reducer.ts
      ├<name>.selector.ts
      ├<name>.store.module.ts
      └index.ts
    index.ts
    root-store.module.ts
```
* components는 사용자에게 보여질 페이지 모음입니다
* service는 실제 api endpoint를 호출하는 코드입니다
* store는 ngrx 스토어 모음입니다
* model은 ngrx에 없지만 store의 type을 지정하기 위해 추가한 인터페이스입니다

<br/>

<details>
<summary>취향에 따라</summary>

규모가 작은 앱에서는 다음 구조를 가지기도 합니다.  
[What is the best structure for app using ngrx?](https://stackoverflow.com/a/38560992)
```
src
└app
  ├components
  ├service
  └store
    ├actions
    ├effects
    ├models
    ├reducers
    └selectors
    index.ts
```
</details>

여기에서는 상단에 기술된 구조로 작성합니다.

## Store

직접 스토어를 생성해 볼까요?  
```
export name='storeName'

# store.module
ng g m store/${name}/${name}.store --flat
# actions
ng g @ngrx/schematics:action store/${name}/${name} --defaults  
# effects
ng g @ngrx/schematics:effect store/${name}/${name} --skip-tests --module store/${name}/${name}.store.module.ts --defaults  
# reducer
ng g @ngrx/schematics:reducer store/${name}/${name} --skip-tests --defaults  
# selector
ng g @ngrx/schematics:selector store/${name}/${name} --skip-tests  

# model은 직접 생성합니다
```

여기에서는 `name=user` 로 user 정보에 대한 스토어를 만들어 보겠습니다.  

### Model

`src/app/store/user/user.model.ts`
```javascript
export interface UserCreate {
    name: string;
    user_id: string;
    user_pw: string;
}

export interface UserUpdate {
    name: string;
    user_id: string;
    user_pw: string;
}

export interface User {
    id: string;
    name: string;
    user_id: string;
    user_pw: string;
    updated: Date;
    created: Date;
}
```

각각 `post` `put` `read`에 필요한 인터페이스를 만들었습니다.
(`delete`는 따로 만들지 않았습니다.)

### Actions

액션은 스토어에 작용할 수 있는 고유한 이벤트입니다.  

`src/app/store/user/user.actions.ts` 일부
```javascript
import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { User, UserCreate, UserUpdate } from './user.model'

export const loadUser = createAction(
    '[User/API] Load User',
    props<{ id: string }>()
);
export const loadUserSuccess = createAction(
    '[User/API] Load User Success',
    props<{ user: User }>()
);
export const loadUserFailure = createAction(
    '[User/API] Load User Failure'
);

... 후략 ...
```

user를 불러오는 액션 `loadUser`를 만듭니다.  

사이드 이펙트 처리를 위한 success, failure 액션도 만들어 줍시다.

<details>
<summary>전체 코드</summary>

CRUD에 대응하는 액션을 전부 만들어 줍시다.  

```javascript
import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { User, UserCreate, UserUpdate } from './user.model'

export const loadUser = createAction(
    '[User/API] Load User',
    props<{ id: string }>()
);
export const loadUserSuccess = createAction(
    '[User/API] Load User Success',
    props<{ user: User }>()
);
export const loadUserFailure = createAction(
    '[User/API] Load User Failure'
);

export const createUser = createAction(
    '[User/API] Create User',
    props<{ create: UserCreate }>()
);
export const createUserSuccess = createAction(
    '[User/API] Create User Success',
    props<{ user: User }>()
);
export const createUserFailure = createAction(
    '[User/API] Create User Failure'
);

export const updateUser = createAction(
    '[User/API] Update User',
    props<{ id: string; update: UserUpdate }>()
);
export const updateUserSuccess = createAction(
    '[User/API] Update User Success',
    props<{ user: Update<User> }>()
);
export const updateUserFailure = createAction(
    '[User/API] Update User Failure'
);

export const deleteUser = createAction(
    '[User/API] Delete User',
    props<{ id: string }>()
);
export const deleteUserSuccess = createAction(
    '[User/API] Delete User Success',
    props<{ user: User }>()
);
export const deleteUserFailure = createAction(
    '[User/API] Delete User Failure'
);
```
</details>
<br/>

### Reducers

현재 상태와 마지막에 실행된 액션으로 새로운 상태를 만들어 줍니다.

`src/app/store/user/user.reducer.ts` import 부분  

```javascript
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';
import { User } from './user.model';
```

user.actions.ts와 user.model.ts를 가져옵니다.

<br/>

`src/app/store/user/user.reducer.ts` adapter 부분  

```javascript
export const userFeatureKey = 'user';

export interface State extends EntityState<User> {

}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState: State = adapter.getInitialState({

});
```

`User` 인터페이스에 EntityState를 만들고, 추가적으로 필요한 엔티티를 작성할 수 있는 상태(State)를 만들어 줍니다.
이 엔티티 상태를 변경할 수 있는 `User`에 대한 EntityAdapter를 만들고,
초기 상태를 가져옵니다.

<br/>

`src/app/store/user/user.reducer.ts` reducer 부분  

```javascript
export const reducer = createReducer(
    initialState,
    on(UserActions.loadUserSuccess, (state, action) =>
        adapter.setOne(action.user, state)
    ),
    on(UserActions.createUserSuccess, (state, action) =>
        adapter.addOne(action.user, state)
    ),
    on(UserActions.updateUserSuccess, (state, action) =>
        adapter.updateOne(action.user, state)
    ),
    on(UserActions.deleteUserSuccess, (state, action) =>
        adapter.removeOne(action.user.id, state)
    )
);
```
리듀서는 initialState와 action 발생시 수행할 작업을 기술합니다.
앞에서 작성한 액션 중 성공했을때만 상태를 바꿀 것이기 때문에 다음과 같이 작성해줍니다.

<br/>

`src/app/store/user/user.reducer.ts` getSelectors 부분  

```javascript
export const { selectIds, selectEntities, selectAll, selectTotal }
    = adapter.getSelectors();
```
셀렉터에서 상태를 접근할 수 있게 export 해 줍니다.

<br/>
<details>
<summary>전체 코드</summary>

```javascript
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';
import { User } from './user.model';


export const userFeatureKey = 'user';

export interface State extends EntityState<User> {

}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState: State = adapter.getInitialState({

});

export const reducer = createReducer(
    initialState,
    on(UserActions.loadUsersSuccess, (state, action) =>
        adapter.setAll(action.users, state)
    ),

    on(UserActions.loadUserSuccess, (state, action) =>
        adapter.setOne(action.user, state)
    ),

    on(UserActions.createUserSuccess, (state, action) =>
        adapter.addOne(action.user, state)
    ),

    on(UserActions.updateUserSuccess, (state, action) =>
        adapter.updateOne(action.user, state)
    ),

    on(UserActions.deleteUserSuccess, (state, action) =>
        adapter.removeOne(action.user.id, state)
    )
);

export const { selectIds, selectEntities, selectAll, selectTotal }
    = adapter.getSelectors();

```
</details>
<br/>

### Selectors

상태를 선택, 파생, 조합하는 부분입니다. sql query와 비슷한 개념으로 볼 수 있습니다.

`src/app/store/user/user.selectors.ts`  

```javascript
import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromUser from './user.reducer';
import { UserState } from '.';

export const getUserState = createFeatureSelector<UserState.State>(
    fromUser.userFeatureKey
);

export const selectAllUsers = createSelector(
    getUserState,
    fromUser.selectAll
);

export const getAdminUsers = createSelector(
    selectAllUsers,
    (users) => users.find((user) => user.name == "admin" )
);
```

자바스크립트의 배열 메스드 `map` `filter` `find` `reduce` 를 사용하거나,
조건문 삽입, 다른 외부 셀럭터와 조합할 수 있습니다.

<br/>

### Store Devtools

파일을 생성했으면 모듈에 등록해 주어야됩니다.  

`src/app/store/user/user.store.module.ts`  

```javascript
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import * as fromUser from './user.reducer';
import { UserEffects } from './user.effects';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forFeature(fromUser.userFeatureKey, fromUser.reducer),
        EffectsModule.forFeature([UserEffects])
    ]
})
export class UserStoreModule { }
```

`src/app/store/index.ts`  

```javascript
import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { UserState } from "./User";

export interface RootState {
    Users: UserState.State;
};

export const reducers: ActionReducerMap<RootState> = {
    Users: UserState.reducer,
};

export const metaReducers: MetaReducer<RootState>[] = [];
```

`src/app/store/root-store.module.ts`  

```javascript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers, metaReducers } from './index';
import { UserStoreModule } from './user';
import { UserEffects } from './user/user.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([UserEffects, ]),

    UserStoreModule,
  ]
})
export class RootStoreModule { }
```

여기에서, StoreDevtoolsModule.instrument()를 import 해주어야 debugging이 가능합니다.

<br/>

## Effects

이펙트는 RxJS에서 작동하는 스토어용 사이드 이펙트 모델입니다.
이펙트는 스트림(stream)을 사용하여 네트워크 요청, 웹 소켓 메시지, 시간 기반 이벤트
같은 외부 상호 작용의 상태를 줄이기(reduce) 위한 새로운 액션 소스를 제공합니다.

`src/app/store/user/user.effects.ts` 일부  
```javascript
import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';

@Injectable()
export class UserEffects {
    constructor(
        private actions$: Actions,
        private UserService: UserService,
    ) { }

    loadUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UserActions.loadUser),
            mergeMap(({ id }) =>
                this.userService.loadUser(id).pipe(
                    map((data) => UserActions.loadUserSuccess({ user: data })),
                    catchError((error) => UserActions.loadUserFailure)
                ))
        )
    );
... 후략 ...
}
```

`loadUser` 액션이 불리면,
`mergeMap`으로 userService에서 실제 API endpoint를 호출합니다.
이때 `pipe`로 성공하는 경우 `loadUserSuccess` 액션을 부르고,
에러 발생 시 `loadUserFailure` 액션을 실행시킵니다.

이런 구현으로, 격리된 이펙트에서 스토어 사이드 이펙트를 처리하는 책임을 지게 됩니다.

<details>
<summary>전체 코드</summary>

```javascript
import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';

@Injectable()
export class UserEffects {
    constructor(
        private actions$: Actions,
        private UserService: UserService,
    ) { }

    loadUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UserActions.loadUser),
            mergeMap(({ id }) =>
                this.userService.loadUser(id).pipe(
                    map((data) => UserActions.loadUserSuccess({ user: data })),
                    catchError((error) => UserActions.loadUserFailure)
                ))
        )
    );

    createUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UserActions.createUser),
            mergeMap(({ create }) =>
                this.userService.createUser(create).pipe(
                    map((data) => UserActions.createUserSuccess({ user: data })),
                    catchError((error) => UserActions.createUserFailure)
                ))
        )
    );

    updateUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UserActions.updateUser),
            mergeMap(({ id, update }) =>
                this.userService.updateUser(id, update).pipe(
                    map((data) => UserActions.updateUserSuccess({ user: data })),
                    catchError((error) => UserActions.updateUserFailure)
                ))
        )
    );

    deleteUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UserActions.deleteUser),
            mergeMap(({ id }) =>
                this.userService.deleteUser(id).pipe(
                    map((data) => UserActions.deleteUserSuccess({ user: data })),
                    catchError((error) => UserActions.deleteUserFailure)
                ))
        )
    );
}
```

</details>
<br/>

## References
[[공식]What is NgRx](https://ngrx.io/docs)  
[[공식]Tutorial](https://ngrx.io/guide/store/walkthrough)
