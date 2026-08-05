---
sidebar_position: 10
authors:
- jwher
description: 외부 문서 검색을 결합해 LLM의 지식을 확장하는 RAG 기법
tags:
- deep learning
- nlp
- rag
- llm
- retrieval
title: "RAG: Retrieval-Augmented Generation"
---

# RAG

> Lewis et al., 2020 — [arXiv:2005.11401](https://arxiv.org/abs/2005.11401)

## 핵심 아이디어

LLM의 파라미터에 저장된 지식 외에, **외부 문서를 실시간 검색**해 답변 생성에 활용:

```
질문 → Retriever → 관련 문서 top-k 검색
              ↓
질문 + 문서 → Generator (LLM) → 최종 답변
```

## 구성 요소

| 구성 | 역할 |
|------|------|
| **Retriever** | Dense Passage Retrieval (DPR) 등으로 관련 문서 검색 |
| **Generator** | seq2seq 또는 decoder-only LLM으로 답변 생성 |
| **Vector DB** | 문서 임베딩 저장 (FAISS, Pinecone 등) |

## Fine-tuning vs RAG

| | Fine-tuning | RAG |
|--|-------------|-----|
| 지식 업데이트 | 재학습 필요 | DB 업데이트만으로 가능 |
| 비용 | 높음 | 낮음 |
| 출처 추적 | 어려움 | 가능 |

## 의의

LLM 할루시네이션 감소 및 최신 지식 활용의 실용적 해법. 기업 AI 서비스의 핵심 패턴.
