---
authors:
- jwher
description: C/C++ 재활 훈련
slug: cpp-coding-basic1
tags:
- code
- programmers
title: 코딩 기초 트레이닝1
---

[![programmers](/img/logos/programmers.png)](/posts/cpp-coding-basic1)  
*프로그래머스 코딩 기초 트레이닝 해설 - C/C++*  

<!--truncate-->

이 글은 파이썬과 같은 하나의 언어에 익숙하다는 전제하에 작성합니다.  

필자는 파이썬을 너무 많이 쓰다 보니, C stdlib 함수를 전부 잊어버렸습니다.
설명을 곁들여 차근차근 배워봅시다!

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

# Day1

## 1. 문자열 출력하기

문자열 str이 주어질 때, str을 출력하는 코드를 작성해 보세요.

```c++
#include <stdio.h>
#define LEN_INPUT 1000001

int main(void) {
    char s1[LEN_INPUT];
    scanf("%s", s1);
    printf("%s", s1);

    return 0;
}
```

<br/>
<br/>
<br/>

### scanf

scanf는 stdio 헤더파일에 있는 함수로 posix(portable operating system interface)에 포함됩니다.
[리눅스 메뉴얼 페이지](https://man7.org/linux/man-pages/man3/scanf.3.html)

scanf는 표시된 format에 입력을 스캔합니다.

예를들어 "%s"는 공백이 없는 문자(character) 시퀀스를 매칭합니다.
다음에 오는 포인터(s1)는 자동으로 추가되는 null byte ('\0')로 끝나고 입력 시퀀스를 가질 수 있을 만큼 긴 문자 배열의 처음이여야 합니다.

성공하면, 이 함수는 성공적으로 매칭되고 할당된 입력 항목의 수를 반환합니다. 초기 매칭에 실패한 경우 제공된 것보다 적거나 0일 수 있습니다.

첫번째 성공적인 변환이나 매칭 실패가 일어나기 전에 입력 끝에 도달하면 EOF가 반환됩니다.
읽기 오류시에도 EOF가 반환되고, 스트림에 대한 오류를 표시하기 위해 errno가 설정됩니다.

<br/>
<br/>
<br/>

### printf

printf 또한 stdio 헤더파일에 있는 함수입니다.
[리눅스 메뉴얼 페이지](https://man7.org/linux/man-pages/man3/printf.3.html)

printf는 표시된 format에 따른 출력을 생성합니다.

예를 들어 "%s"의 경우 l 수정자가 앞에 없으면, 문자 배열에 대한 포인터인 const char* 일 것으로 예상합니다.
배열 문자는 null byte '\0'까지 기록됩니다(출력에 포함되지 않습니다).
정밀도가 지정되면 지정된 숫자 이상은 쓰지 않습니다. 정밀도가 주어지면 null byte가 있을 필요가 없습니다.
정밀도가 지정되지 않거나 배열 크기보다 크면 null byte가 필요합니다.

l 수정자가 있으면, wide 문자 배열에 대한 포인터인 const wchar*로 예상합니다.

성공적으로 반환하면, 쓴 문자 수를 반환합니다(null byte 제외).

snprintf(), vsnprintf() 함수는 size 바이트 이상을 쓰지 않습니다(null byte 포함).
이 제한으로 출력이 잘린 경우, 반환 값은 충분한 공간이 있을 때 기록될 문자 수(null byte 제외) 입니다.
따라서 size 이상 반환 값은 출력이 잘렸다는 것을 의미합니다.

출력 에러에 도달하면, 음수가 반환됩니다.

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

## 2. a와 b 출력하기

정수 a와 b가 주어집니다. 각 수를 입력받아 입출력 예와 같은 형식으로 출력하는 코드를 작성해 보세요.

입력1
```
4 5
```

출력1
```
a = 4
b = 5
```

```c++
#include <stdio.h>

int main(void) {
    int a;
    int b;
    scanf("%d %d", &a, &b);
    printf("a = %d\n", a);
    printf("b = %d\n", b);
    return 0;
}
```

<br/>
<br/>
<br/>

### 개행문자
carriage return(CR)과 line feed(LF)가 물리적인 타자기와 프린터로부터 상속받았습니다.
`\n`은 line feed(한줄씩 인쇄)를, `\r`은 carriage return(줄 끝에서 시작으로 돌아감)을 의미합니다.
따라서 개행 문자는 장치마다 조금씩 달랐습니다. 유니코드는 여러 글자를 모두 줄바꿈 문자로 정의하고 있습니다.

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

## 3. 문자열 반복해서 출력하기

문자열 str과 정수 n이 주어집니다.
str이 n번 반복된 문자열을 만들어 출력하는 코드를 작성해 보세요.

입력1
```
string 5
```

출력1
```
stringstringstringstringstring
```

```c++
#include <stdio.h>
#define LEN_INPUT 11

int main(void) {
    char s1[LEN_INPUT];
    int a;
    scanf("%s %d", s1, &a);
    for(int i=0; i<a; i++)
        printf("%s", s1);
    return 0;
}
```

<br/>
<br/>
<br/>

### for문

for는 세 부분으로 이루어 집니다. for(초기화 문; 조건문; 루프문)
세 부분 다 옵셔널로 작성하지 않아도 작동합니다. 조건문이 작성되지 않았을 때 true로 간주합니다.
따라서  `break` `return` `goto`로만 for body 밖으로 나갈 수 있습니다.

`continue`는 루프문이 실행되게 합니다. `break`는 루프문이 실행되지 않고 for body를 나갑니다.

```c++
for( ; ; )
```
다음 문장은 무한루프를 만들기 위해 사용됩니다.

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

## 4. 대소문자 바꿔서 출력하기

영어 알파벳으로 이루어진 문자열 str이 주어집니다. 각 알파벳을 대문자는 소문자로 소문자는 대문자로 변환해서 출력하는 코드를 작성해 보세요.

입력1
```
aBcDeFg
```

출력1
```
AbCdEfG
```

```c++
#include <stdio.h>
#define LEN_INPUT 10

int main(void) {
    char s1[LEN_INPUT];
    scanf("%s", s1);
    int len = strlen(s1);
    
    for(int i=0; i<len; i++){
        if (isupper(s1[i])) s1[i] = tolower(s1[i]);
        else if(islower(s1[i])) s1[i] = toupper(s1[i]);
    }
    printf("%s", s1);

    return 0;
}

```

<br/>
<br/>
<br/>

### strlen

strlen(const char *s)은 null byte ('\0')을 제외한 포인터 s가 가리키는 문자열의 길이를 계산합니다.

s가 가리키는 문자열 바이트 수를 반환합니다.

<br/>
<br/>
<br/>

### 대소문자
대소문자를 구분하는 방법은 여러가지가 있습니다.

하나는, ASCII 순서를 이용해(유니코드도 이어받았습니다) 확인하는 것입니다.
```c++
// 65~90이면 대문자입니다
int big_a   = 'A' // 65
int big_z   = 'Z' // 90

// 97~122면 소문자입니다
int small_a = 'a' // 97
int small_z = 'z' // 122
```

다음과 같이 대소문자로 변환할 수 있습니다.
```c++
int offset = 'a' - 'A'; // 32

if(isupper(c)) c += offset;
if(islower(c)) c -= offset;
```

다른 방법은 ctype에 `tolower`/`toupper` 함수를 사용하는 것입니다.

<br/>
<br/>
<br/>

## 5. 특수문자 출력하기

다음과 같이 출력하도록 코드를 작성해 주세요.

출력예시
```
!@#$%^&*(\'"<>?:;
```

```c++
#include <stdio.h>

int main(void) {
    printf("!@#$%^&*(\\'\"<>?:;");
    return 0;
}

```

### Escape character

일부 문자는 제어를 위해 예약되어 있습니다. 예를 들어 `'`는 문자나 문자열을 나타내기 위한 글자입니다.
이를 표시하기 위해 이스케이프 문자 `\`를 사용합니다.
`\` 스스로도 제어 문자를 시작하는 문자로 예약되어있어 문자로 출력하기 위해서 `\\`로 작성하여야 합니다.

<br/>
<br/>
<br/>

<!-- 
## 2. 대문자로 바꾸기

```c++
#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

// 파라미터로 주어지는 문자열은 const로 주어집니다.
char* solution(const char* myString) {
    // 파이썬은 str 클래스가 제공되고, len 함수가 있습니다.
    // 하지만 c++에서는 (string이 있지만,) char 배열로 나타냅니다.
    // 문자열 복사를 위해 길이를 알아봅시다!
    int len = strlen(myString);
    // printf("%d", len);       // 2.1 출력?

    // 원하는 크기의 char 배열을 만들기 위해,
    // char 포인터에, 필요한 길이만큼 memory alloc으로 동적 할당을 합니다.
    // 문자열 배열의 끝을 표현하기 위해 길이보다 1 크게 할당합니다.
    char* answer = (char*) malloc((len + 1) * sizeof(char));
    // 문자열은 strcpy 함수로 복사 가능하나, 대문자로 만들어야 하므로
    for(int i=0; i<len; i++) {
        answer[i] = toupper(myString[i])
    }
    // 문자열 배열의 끝을 표시해줍니다.
    answer[len] = '\0';
    // printf("%s", answer);    // 2.2 출력?
    
    return answer;
}
```

<details>
<summary>Primitive Type</summary>
파이썬은 모든 것이 객체입니다.
따라서 클래스 메소드가 있고, type.method() 호출이 익숙합니다.
예) 'abc'.upper()

하지만 C++는 다릅니다. 나중에는 구조체, 클래스를 정의하겠지만
원시 타입은 메서드가 정의되어 있지 않습니다. 따라서 stdlib에 정의된 함수를 타입에 맞게 잘 호출해야 합니다.
예) toupper('a')

</details> -->
