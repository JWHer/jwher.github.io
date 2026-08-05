---
authors:
  - jwher
description: 'Rust 기반 CLI 도구들의 부상 - ripgrep, exa, bat, fd 활용 가이드'
slug: rust-infrastructure-tools
tags:
  - rust
  - cli-tools
  - development
  - productivity
title: 'Rust 기반 인프라 도구 트렌드 - ripgrep, exa, bat 활용'
draft: true
image: /img/logos/rust.svg
---

![Rust Logo](/img/logos/rust.svg)

## 개요

최근 몇 년간 Rust로 작성된 CLI 도구들이 전통적인 Unix 도구들을 빠르게 대체하고 있습니다. 이 글에서는 주요 Rust 기반 도구들을 소개하고, 실제 개발 환경에 도입한 경험을 공유합니다.

<!-- truncate -->

## 왜 Rust 도구들인가?

### Rust의 장점

**성능:**
- Zero-cost abstractions
- 메모리 안전성을 유지하면서도 C/C++ 수준의 성능
- 멀티스레딩 최적화

**안정성:**
- 컴파일 타임 메모리 안전성 보장
- 크래시 없는 안정적인 실행

**개발자 경험:**
- 명확하고 도움이 되는 에러 메시지
- 훌륭한 패키지 관리자 (Cargo)
- 우수한 문서화

## 핵심 Rust CLI 도구들

### 1. ripgrep (rg) - 빠른 텍스트 검색

**전통 도구:** `grep`, `ag` (The Silver Searcher)

**설치:**
```bash
# macOS
brew install ripgrep

# Ubuntu/Debian
sudo apt install ripgrep

# Cargo
cargo install ripgrep
```

**주요 기능:**
```bash
# 기본 검색 (자동으로 .gitignore 존중)
rg "function"

# 특정 파일 타입만 검색
rg -t py "class"

# 대소문자 구분 없이 검색
rg -i "error"

# 컨텍스트 표시 (전후 3줄)
rg -C 3 "TODO"

# 숨김 파일도 검색
rg --hidden "api_key"

# 정규표현식
rg "fn \w+\(" -t rust
```

**성능 비교:**
```bash
# 큰 코드베이스에서 테스트 (Linux 커널 소스)
time grep -r "schedule" .     # ~2.5초
time ag "schedule" .          # ~0.8초
time rg "schedule" .          # ~0.3초
```

### 2. exa - 현대적인 ls 대체

**전통 도구:** `ls`

**설치:**
```bash
# macOS
brew install exa

# Ubuntu (22.04+)
sudo apt install exa

# Cargo
cargo install exa
```

**주요 기능:**
```bash
# 기본 사용 (컬러, 아이콘)
exa

# 상세 정보 (git 상태 포함)
exa -l --git

# 트리 뷰
exa --tree --level=2

# 파일 크기를 human-readable로
exa -lh

# 수정 시간 기준 정렬
exa -l --sort=modified

# 전체 메타데이터 표시
exa -l --header --git --extended
```

**alias 설정:**
```bash
# ~/.zshrc 또는 ~/.bashrc
alias ls='exa'
alias ll='exa -l --git --header'
alias la='exa -la --git'
alias tree='exa --tree'
```

### 3. bat - 구문 강조가 있는 cat

**전통 도구:** `cat`, `less`

**설치:**
```bash
# macOS
brew install bat

# Ubuntu/Debian
sudo apt install bat  # 명령어는 'batcat'

# Cargo
cargo install bat
```

**주요 기능:**
```bash
# 기본 사용 (자동 구문 강조)
bat file.rs

# 라인 번호 표시
bat -n file.py

# 특정 라인 범위만 표시
bat -r 10:30 file.js

# Git diff와 통합
git diff | bat

# 여러 파일 한 번에
bat src/*.rs

# 테마 변경
bat --theme="Monokai Extended" file.md

# Plain 모드 (cat처럼)
bat -p file.txt
```

**Git integration:**
```bash
# ~/.gitconfig
[core]
    pager = bat

[interactive]
    diffFilter = bat --paging=never
```

### 4. fd - 빠르고 사용하기 쉬운 find

**전통 도구:** `find`

**설치:**
```bash
# macOS
brew install fd

# Ubuntu/Debian
sudo apt install fd-find

# Cargo
cargo install fd-find
```

**주요 기능:**
```bash
# 파일 이름으로 검색
fd "config"

# 확장자로 검색
fd -e md

# 디렉토리만 검색
fd -t d "src"

# 숨김 파일 포함
fd -H "secret"

# 심볼릭 링크 따라가기
fd -L

# 실행 명령
fd -e jpg -x convert {} {.}.png
```

**비교:**
```bash
# find의 복잡한 구문
find . -type f -name "*.rs" -not -path "*/target/*"

# fd의 간결한 구문
fd -e rs
```

### 5. zoxide - 스마트 디렉토리 이동

**전통 도구:** `cd`, `autojump`

**설치:**
```bash
# macOS
brew install zoxide

# Ubuntu/Debian
sudo apt install zoxide

# Shell integration (zsh)
echo 'eval "$(zoxide init zsh)"' >> ~/.zshrc
```

**사용법:**
```bash
# 방문 기록 학습
cd /path/to/project
cd /path/to/another/project

# 나중에 부분 이름만으로 이동
z proj     # /path/to/project로 이동 (가장 자주 방문)
z ano      # /path/to/another/project

# 대화형 선택
zi proj    # 여러 매칭이 있으면 선택 메뉴 표시
```

### 6. starship - 크로스 쉘 프롬프트

**전통 도구:** oh-my-zsh, powerlevel10k

**설치:**
```bash
# macOS
brew install starship

# Shell integration (zsh)
echo 'eval "$(starship init zsh)"' >> ~/.zshrc
```

**특징:**
- Git 브랜치, 상태 자동 표시
- 프로그래밍 언어 버전 표시 (Node, Python, Rust 등)
- 명령 실행 시간 표시
- 커스터마이징 가능한 설정

**설정 예시:**
```toml
# ~/.config/starship.toml
[character]
success_symbol = "[➜](bold green)"
error_symbol = "[✗](bold red)"

[git_branch]
symbol = "🌱 "

[nodejs]
format = "via [⬢ $version](bold green) "
```

### 7. dust - 직관적인 du

**전통 도구:** `du`

**설치:**
```bash
brew install dust
```

**사용법:**
```bash
# 현재 디렉토리 디스크 사용량
dust

# 특정 디렉토리
dust /var/log

# 깊이 제한
dust -d 2
```

## 성능 벤치마크

우리 팀의 모노레포 (약 50만 줄 코드)에서 측정:

| 작업 | 전통 도구 | Rust 도구 | 개선 |
|------|----------|----------|------|
| 텍스트 검색 | `grep -r` 2.1s | `rg` 0.28s | **7.5배** |
| 파일 찾기 | `find` 1.8s | `fd` 0.19s | **9.5배** |
| 디렉토리 나열 | `ls -la` 0.15s | `exa -la` 0.12s | **1.25배** |

## 팀 도입 전략

### 1단계: 개인 사용자 파일럿 (1주)

```bash
# 시험 설치 스크립트 작성
#!/bin/bash
brew install ripgrep exa bat fd zoxide starship dust
```

### 2단계: Alias로 점진적 전환 (2주)

```bash
# ~/.zshrc
alias grep='rg'
alias find='fd'
alias cat='bat'
alias ls='exa'
```

### 3단계: 팀 전체 도입

**개발 환경 설정 리포지토리 생성:**
```bash
# dotfiles/.zshrc
# 팀 공용 alias 및 설정
alias grep='rg'
alias ls='exa -l --git --header'
alias cat='bat'
...
```

**문서화:**
- 치트시트 작성 (Confluence)
- 짧은 데모 세션 (10분)
- FAQ 정리

### 4단계: CI/CD에도 통합

```yaml
# .github/workflows/ci.yml
- name: Install Rust tools
  run: |
    cargo install ripgrep fd-find

- name: Fast code search
  run: rg "TODO|FIXME" || true
```

## 주의사항 및 한계

### 호환성 이슈

**스크립트 호환성:**
```bash
# 일부 스크립트는 GNU grep의 특정 옵션에 의존
grep -P "regex"  # Perl regex - rg는 다른 구문 사용
```

**해결:**
```bash
# 스크립트에서는 명시적으로 GNU 도구 사용
/usr/bin/grep -P "regex"
```

### 학습 곡선

- 팀원들이 새로운 옵션 익히는 시간 필요
- 치트시트와 페어 프로그래밍으로 해결

### 의존성 관리

```dockerfile
# Dockerfile에서 Rust 도구 설치
FROM ubuntu:22.04

RUN apt-get update && apt-get install -y \
    ripgrep \
    fd-find \
    bat \
    && rm -rf /var/lib/apt/lists/*
```

## 권장 시작 패키지

**최소 필수:**
1. ripgrep (가장 큰 생산성 향상)
2. bat (코드 리뷰 시 유용)

**표준 패키지:**
1. ripgrep
2. bat
3. exa
4. fd

**고급 패키지:**
1. 표준 패키지 +
2. zoxide
3. starship
4. dust

## 결론

Rust 기반 CLI 도구들은 단순한 성능 개선을 넘어, 더 나은 개발자 경험을 제공합니다.

**우리 팀의 변화:**
- 평균 검색 시간 70% 단축
- 터미널 사용 만족도 증가
- 신입 개발자 온보딩 시간 감소

**추천:**
- 개인부터 시작해서 점진적으로 팀 전체로 확대
- Alias 설정으로 기존 워크플로우 유지
- 문서화와 교육에 투자

## 참고 자료

- [ripgrep GitHub](https://github.com/BurntSushi/ripgrep)
- [exa GitHub](https://github.com/ogham/exa)
- [bat GitHub](https://github.com/sharkdp/bat)
- [fd GitHub](https://github.com/sharkdp/fd)
- [zoxide GitHub](https://github.com/ajeetdsouza/zoxide)
- [starship](https://starship.rs/)
- [Modern Unix tools](https://github.com/ibraheemdev/modern-unix)

---

*이 글은 2023년 11월 작성되었으며, 6개월간의 팀 도입 경험을 바탕으로 합니다.*
