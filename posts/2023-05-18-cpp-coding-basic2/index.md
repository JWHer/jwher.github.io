---
authors:
- jwher
description: C/C++ 재활 훈련
slug: cpp-coding-basic2
tags:
- code
- programmers
title: 코딩 기초 트레이닝2
---

[![programmers](/img/logos/programmers.png)](/posts/cpp-coding-basic2)  
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

# Day2

## 1. 덧셈식 출력하기

두 정수 a, b가 주어질 때 다음과 같은 형태의 계산식을 출력하는 코드를 작성해 보세요.

입력1
```
4 5
```

출력1
```
4 + 5 = 9
```

```c++
#include <stdio.h>

int main(void) {
    int a;
    int b;
    scanf("%d %d", &a, &b);
    printf("%d + %d = %d", a, b, a + b);
    return 0;
}
```

<br/>
<br/>
<br/>

## 2. 문자열 붙여서 출력하기

두 개의 문자열 str1, str2가 공백으로 구분되어 입력으로 주어집니다.
입출력 예와 같이 str1과 str2을 이어서 출력하는 코드를 작성해 보세요.

입력1
```
apple pen
```

출력1
```
applepen
```

```c++
#include <stdio.h>
#define LEN_INPUT1 11
#define LEN_INPUT2 11

int main(void) {
    char s1[LEN_INPUT1];
    char s2[LEN_INPUT2];
    scanf("%s %s", s1, s2);
    printf("%s%s", s1, s2);

    return 0;
}
```

<br/>
<br/>
<br/>

## 3. 문자열 돌리기

문자열 str이 주어집니다.
문자열을 시계방향으로 90도 돌려서 아래 입출력 예와 같이 출력하는 코드를 작성해 보세요.

입력1
```
abcde
```

출력1
```
a
b
c
d
e
```

```c++
#include <stdio.h>
#define LEN_INPUT 11

int main(void) {
    char s1[LEN_INPUT];
    scanf("%s", s1);
    int len = strlen(s1);
    for(int i=0; i<len; i++){
        printf("%c\n", s1[i]);
    }
    
    
    return 0;
}

```

### character array vs string

문자열을 표시하기 위해 character array를 썼습니다.
하지만 이것은 여러 문제를 가져옵니다.

첫째, character array는 정확한 데이터 타입이 아닙니다.
특히 ascii로 이루어진 character array는 정수 배열과 다를게 없습니다.

둘째, character array를 처리하기 위해 표준화된 연산자가 없습니다.
예를들어, `int a = 1 + 2;`는 가능하나 `char* a = '1' + '2';`는 안됩니다.

셋째, 배열 경계를 쉽게 넘을 수 있고 안정성에 문제가 됩니다.
배열 끝에 `\0`을 누락하기라도 하면, 문자열의 끝을 정상적으로 알 수 없습니다.

`string`은 C++의 built-in data type이 아닙니다.
`string`은 class object로 하나의 type처럼 존재합니다.
이는 character array가 가지는 문제를 해결할 수 있습니다.

물론 character array도 장점이 있습니다.
정해진 길이의 정보가 같은 공간에 있기 때문에 빠르게 엑세스 가능합니다.
(컴퓨터 속도가 매우 빨라진 현재는 거의 의미 없는 장점입니다.)

<br/>
<br/>
<br/>

## 4. 홀짝 구분하기

자연수 n이 입력으로 주어졌을 때 만약 n이 짝수이면 "n is even"을, 홀수이면 "n is odd"를 출력하는 코드를 작성해 보세요.

입력1
```
100
```

출력1
```
100 is even
```

```c++
#include <stdio.h>

int main(void) {
    int a;
    scanf("%d", &a);
    if (a%2==0) printf("%d is even", a);   
    else printf("%d is odd", a);

    return 0;
}
```


<br/>
<br/>
<br/>

## 5. 문자열 겹쳐쓰기

문자열 my_string, overwrite_string과 정수 s가 주어집니다. 문자열 my_string의 인덱스 s부터 overwrite_string의 길이만큼을 문자열 overwrite_string으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.

제한사항
* my_string와 overwrite_string은 숫자와 알파벳으로 이루어져 있습니다.
* 1 ≤ overwrite_string의 길이 ≤ my_string의 길이 ≤ 1,000
* 0 ≤ s ≤ my_string의 길이 - overwrite_string의 길이

| my_string        | overwrite_string | s | result           |
|------------------|------------------|---|------------------|
| "He11oWor1d"     | "lloWorl"        | 2 | "HelloWorld"     |
| "Program29b8UYP" | "merS123"        | 7 | "ProgrammerS123" |

```c++
#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

char* solution(const char* my_string, const char* overwrite_string, int s) {
    int answer_len = strlen(my_string);
    int e = s + strlen(overwrite_string);

    // 주어진 조건에 따라 s가 my_string - overwrite_string 보다 작으므로
    // 정답 문자열 길이는 my_string과 같습니다.
    char* answer = (char*) malloc((answer_len+1) * sizeof(char));
    // 문자열을 바로 strcpy 함수로 복사해 둘 수 있으나
    // 굳이 배열 순회와 할당을 중복해 할 필요 없습니다

    int i;
    for(i=0; i<answer_len; i++) {
        if (i<s || e<=i ) answer[i] = my_string[i];
        else answer[i] = overwrite_string[i-s];
    }
    // 문자열 배열의 끝을 표시해줍니다.
    answer[i] = '\0';
    
    return answer;
}
```

### malloc

`malloc`은 memory allocation을 하는 함수입니다.

`malloc()`은 size bytes를 할당하고, 할당된 메모리의 포인터를 반환합니다.
**메모리는 초기화 되지 않습니다.** size가 0일 경우 NULL을 반환합니다.
또는 나중에 `free()`에 성공적으로 전달 될 수 있는 unique 포인터 값을 반환합니다.

`free()` 함수는 `malloc()`, `calloc()`, `realloc()`후에 반드시 호출되어야 합니다.
포인터가 NULL인 경우 아무 연산도 하지 않습니다. `free()` 함수는 아무 값도 반환하지 않습니다.

이 문제에서는 주어지는 입력이 const이기 때문에, 변형된 문자열을 리턴하기 위하여 새 배열을 만들고 필요한 길이 만큼 동적 할당을 합니다.
