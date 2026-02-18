---
sidebar_position: 2
description: React - A JavaScript library for building user interfaces
---

# React

React는 Facebook(Meta)에서 개발한 사용자 인터페이스 구축을 위한 JavaScript 라이브러리입니다.

## 핵심 개념

### 컴포넌트 (Components)

React 애플리케이션은 독립적이고 재사용 가능한 컴포넌트로 구성됩니다.

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

### JSX (JavaScript XML)

JavaScript 코드 안에서 HTML과 유사한 문법을 사용할 수 있습니다.

```jsx
const element = <h1>Hello, world!</h1>;
```

### State와 Props

- **Props**: 부모 컴포넌트로부터 전달받는 읽기 전용 데이터
- **State**: 컴포넌트 내부에서 관리하는 가변 데이터

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

### Hooks

함수형 컴포넌트에서 상태와 생명주기 기능을 사용할 수 있게 해주는 함수입니다.

- `useState`: 상태 관리
- `useEffect`: 부수 효과 처리
- `useContext`: Context API 사용
- `useMemo`, `useCallback`: 성능 최적화

## 생태계

- **React Router**: 라우팅
- **Redux / Zustand**: 상태 관리
- **Next.js**: 프레임워크 (SSR, SSG)
- **React Query**: 서버 상태 관리

## 참고 자료

- [React 공식 문서](https://react.dev/)
- [React Hooks 가이드](https://react.dev/reference/react)
