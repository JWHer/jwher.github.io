
<!-- more -->

<p align="center">
<img src="/assets/img/github.svg" style="width: 40vmin;"/>
</p>

*깃허브 이슈로 협업하기*  

# 목차
* [이슈](#이슈)
* [템플릿](#템플릿)
* [머지요청](#머지요청)
* [마일스톤](#마일스톤)
<!-- * [Iteration](#iteration) -->

## 이슈

### Git
**깃** 은 지옥에서 온 정보 관리자 입니다.

> <p align="center">
> <img src="https://t1.daumcdn.net/cfile/tistory/2158293455F6709717" style="filter: grayscale(100%); height: 40vmin" />
> </p>
> 
> Initial revision of "git", the information manager from hell  
> ─ Linus Torvalds

농담이 아니라, 리눅스 창시자이기도 한 리누스 토발즈가 **깃**을
처음 소개하며 한 [말](https://github.com/git/git/commit/e83c5163316f89bfbde7d9ab23ca2e25604af290) 입니다.
깃이 없을 땐 얼마나 지옥같은 코드 관리를 했는지 느껴지네요.  

깃은 크게 버전 관리, 백업, 협업을 목표로 하고 있습니다.
본 글은 깃의 버전 관리와 백업 기능을 이해하는 독자를 위해 작성했습니다.

### Issue

본론으로 돌아와 볼까요,  
깃허브(깃랩)는 지옥같은 코드 관리만 해주지 않습니다.
이슈 추적 시스템(ITS: Issue Tracking System)으로 개발자간의 협업을 돕죠

<p align="center">
<img src="/assets/img/github-issue/issue.png" style="height: 40vmin; object-fit:cover;"/>
</p>

*이 버튼을 본 적이 있나요?*

개발자간 idea, work, bug(problem)을 다루기 위해 깃허브(깃랩)은 **이슈**를  사용합니다.
세부적인 목표사항은 다음과 같습니다.
* 아이디어 구현에 관한 논의
* 작업 진행상황 추적
* 기능 제안 수락, 질문, 요청 지원 또는 버그 보고
* 정교한 코드 구현

이슈를 등록하기 위해 보통 다음 단게를 거칩니다.
* 이슈 탭을 눌러 엽니다(open).
* 해당 문제, 상황을 재현할 수 있는 최대한 많은 정보(context)를 제공합니다.
* 해당 환경 정보(버전, os 등) 관련이 있다고 생각하는 모든 정보를 제공합니다.  

이슈를 등록하게 되면 보통 다음 단계를 거칩니다.
* 프로젝트 팀(혹은 매니저)이 라벨(label)과 담당자(assign)를 지정합니다.
* 담당자가 최대한 빨리 답변하기 위해 노력합니다.
* 해결이 되거나 오랜 기간 답변이 없다면, 이슈는 닫힙니다(closed).

이제 개발자들과 쉽게 소통할 수 있습니다!  

하지만 쉬운 만큼 문제가 따르죠,
다른 개발자들과 열심히 소통하던 당신은 도통 이해할 수 없는 이슈를 보게 됩니다.  

<br/>

## 템플릿

프로젝트의 핵심 개발자와 관리자는 이슈의 오남용을 막기 위해 template을 만들었습니다.
깃헙에서는 ```.github```, 깃랩에서는 ```.gitlab``` 폴더 밑에 이슈 템플릿을 작성합니다.
마크다운 파일(.md)로 작성된 템플릿은 어떠한 정보를 포함해야 하는지 명시할 수 있습니다.

<p align="center">
<img src="/assets/img/github-issue/template-gitlab.png" style="height: 40vmin; object-fit:cover;"/>
</p>

*깃랩에서 템플릿을 사용해 이슈를 작성하는 모습*

백문이 불여일견, 예시를 하나 봅시다
```markdown
<!--bug_report.md-->
---
name: Bug report
about: Report a bug you've encountered
title: "[Bug]: Please add a title"
labels: bug
assignees: ''

---

## Summary
어떤 버그인지 명확하고 간결한 서술

## To Reproduce
해당 버그를 재현하기 위한 단계:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

## Expected behaviour
왜 일어났는지에 대한 명확하고 간결한 서술

## Screenshots
가능하다면 문제를 해결하기 적합한 스크린샷 첨부

## Environment
- 파이선 버전: [e.g. 3.8.0]
- 우분투 버전: [e.g. 20.04LTS]

## Browser(s)
 - Browser [e.g. chrome, safari]
 - Version [e.g. 22]

## Additional context
위에 해당되지 않은 항목 기술
e.g. 이슈 #397과 유사한 증상입니다.

/label ~버그 ~문제
/cc @jwher
/assign @jwher
```

내용은 각각의 프로젝트 마다 다를 것입니다.
하지만 공통되는 지정어도 있습니다.  

눈치 빠르신 분은 찾으셨나요?  
인스타그램이나 페이스북을 많이 사용하셨으면 더 찾기 쉬우셨을 겁니다.  

* ```@mentions```: 해당 ID를 가진 사람에게 알림을 보냅니다.  
* ```#reference```: ```#9999```처럼 숫자로 사용합니다. 다른 이슈를 참조합니다.
* ```/cc```: Carbon Copy의 줄임말로 참조를 뜻합니다. 뒤에 ```멘션```을 붙입니다.
* ```/assign```: 뒤에 ```멘션```을 붙여 담당자를 지정합니다.
* ```/milestone```: 애자일 스프린트 시간 설정 기능입니다. 뒤에 ```%"마일스톤"```을 붙입니다.
* ```/label```: 다양한 이슈를 관리하기 위해 ```~라벨```을 붙입니다. 여러개를 지정할 수 있습니다.
* ```/due```: 목표일을 지정합니다. 뒤에 ```yyyy-mm-dd```을 붙입니다.

<br/>

## 머지요청

문제를 해결했다면 반영해야죠. 이슈의 큰 기능 중 하나는 ```merge``` 입니다.  
해결한 문제를 merge request 하면, 프로젝트 관리자가 메인(마스터) 브랜치와 병합하게 됩니다.  

<br/>

## 마일스톤

마일스톤을 알기 위해선 **애자일 방법론**을 먼저 알아야 하는데요,
간단히 말하자면 짧은 개발주기를 여러번 가지는 개발법입니다.  

마일스톤은 개발 기간을 설정하고, 목표에 도달할 때 까지 이슈를 관리해 줍니다.
프로젝트 관리자는 마일스톤을 통해 이슈와 머지 요청을 쉽게 추적할 수 있습니다.

또한, 마일스톤이 애자일 스프린트 주기이기 때문에 Release 로 사용할 수 있습니다.

[comment]: <> (## Iteration)

[comment]: <> (앞서 설명하지 않은 syntax가 있었는데요, ```/iteration```입니다.)

[comment]: <> (Iteration은 이슈를 반복하게 됩니다.  )

<br/>

## Tips

자! 이제 당신은 이슈로 협업/프로젝트를 관리할 수 있습니다!

*질문: ITS가 깃에 종속적인지, 깃허브 기능인지 아시는분은 알려주세요*  
*질문: template는 전부 .md 형식일까요?*

입문자를 위해 깃 아키텍처와 워크플로우를 다룬 글을 작성해야겠습니다.

### Reference  

[[위키]깃허브](https://ko.wikipedia.org/wiki/%EA%B9%83%ED%97%88%EB%B8%8C)  
[[깃랩]Issues](https://docs.gitlab.com/ee/user/project/issues/)  
[[깃헙]Mastering Issues](https://guides.github.com/features/issues/)  

## - JWHer  
좋은 글을 쓰고 싶습니다.

<!-- update log -->
<!--
본문에 추가할 내용을 적는다.
-->
