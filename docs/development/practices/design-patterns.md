---
sidebar_position: 3
description: Software Design Patterns - Reusable Solutions
---

# 디자인 패턴 (Design Patterns)

디자인 패턴은 소프트웨어 설계에서 자주 발생하는 문제들에 대한 재사용 가능한 해결책입니다.

## 생성 패턴 (Creational Patterns)

객체 생성 메커니즘을 다루며, 상황에 적합한 방식으로 객체를 생성합니다.

- **Singleton**: 클래스의 인스턴스가 하나만 생성되도록 보장
- **Factory Method**: 객체 생성 인터페이스를 정의하고 서브클래스가 구현
- **Abstract Factory**: 관련된 객체들의 패밀리를 생성
- **Builder**: 복잡한 객체의 생성 과정을 단계별로 분리
- **Prototype**: 기존 객체를 복제하여 새 객체 생성

## 구조 패턴 (Structural Patterns)

클래스나 객체를 조합하여 더 큰 구조를 만드는 패턴입니다.

- **Adapter**: 호환되지 않는 인터페이스를 변환
- **Bridge**: 추상화와 구현을 분리
- **Composite**: 트리 구조로 객체를 구성
- **Decorator**: 객체에 동적으로 책임을 추가
- **Facade**: 복잡한 서브시스템에 간단한 인터페이스 제공
- **Proxy**: 다른 객체에 대한 대리자 역할

## 행위 패턴 (Behavioral Patterns)

객체 간의 알고리즘과 책임 분배를 다루는 패턴입니다.

- **Observer**: 객체 상태 변화를 구독자에게 통지
- **Strategy**: 알고리즘을 캡슐화하고 교체 가능하게 만듦
- **Command**: 요청을 객체로 캡슐화
- **State**: 객체의 상태에 따라 행위 변경
- **Template Method**: 알고리즘의 골격을 정의하고 일부 단계를 서브클래스에서 구현

## 참고 자료

- [Refactoring Guru - Design Patterns](https://refactoring.guru/design-patterns)
- Gang of Four (GoF) - "Design Patterns: Elements of Reusable Object-Oriented Software"
