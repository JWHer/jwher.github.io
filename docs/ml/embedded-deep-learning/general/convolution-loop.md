---
title: 'Convolution Loop'
draft: true
---

## Convolution Loop

Input feature map = fH x fW x C
Filters = N x K x K x C
Output = (fH-K+1) x (fW-K+1) x N (stride=1, no input padding)

컴퓨터 비전 분야에서 많이 사용되는 CNN을 살펴봅시다.
Input feature map의 크기를 (fH, fW, C)
필터의 크기를 (K, K, C) 그리고 개수를 N개라고 하면,
출력으로 나오는 feature map은 (fH, fW, N) 입니다. (패딩 적용 시)

이때, 필터를 적용하는 연산(MAC, Multiply-accumulate operation)이 얼마나 수행되어야 할지 계산해 봅시다.

$ fH \time fW \time N \time ( K \time K \time C ) $

대략적인 크기를 fH, fW=10^2 N=10^3 K^2=10 C=10^2으로 잡았을 때,
output feature map을 얻기 위해 10^10번의 MAC 연산이 수행되어야 합니다.

한 클락에 MAC이 수행된다고 가정하면, 1GHz(=10^9) 코어가 10초간 계산해야 합니다. 어마어마한 시간입니다.

이 연산을 수행하는 코드를 한번 볼까요?
```c
for (n = 0; n < N; n++) {
    for (x = 0; x < fW; x++) {
        for (y = 0; y < fH; y++) {

            O[n][x][y] = B[n];	// add bias
            for (i=0; i < K; i++) {
                for (j=0; j < K; j++) {
                    for (k = 0; k < C; k++) {
                        O[n][x][y] += I[k][x+i][y+j] x W[k][i][j]
                    }
                }
            }
            O[n][x][y] = f(O[n][x][y] );  // activation
        }
    }
}
```

문제1 이 코드는 어떤 순서로 메모리에 접근하고 있나요?
문제2 NCHW 순서로 접근하도록 코드를 바꿀 수 있을까요?

이번엔 메모리를 생각해 봅시다. 이 연산을 수행하기 위해 메인 메모리에 몇번 접근해야 할까요? 계산을 하기 위해 Input feature map과 filter를 가져와야 합니다. 10억번의 MAC을 해야하는 것에 비하면 매우 적은 수입니다.