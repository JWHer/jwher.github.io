---
title: 데이터 스트리밍 알고리즘
description: 대규모 데이터 처리를 위한 스트리밍 모델과 알고리즘
---

## Large Data Restrictions and Models

문제
- Cannot even read the whole data
sub-linear time algorithm

- Cannot afford storing all the data
streaming algorithm

- Single Processor does not suffice
Map-Reduce algorithms

큰 데이터셋에서 하고싶은 것.
검색, 관련 데이터 찾기


## 방법

Streaming Model

### Streaming Model

Huge data set (does not fit into the main memory)
• Only sequential access to the data
    • One pass
    • Few passes (the data is stored somewhere else)
• Use little memory
    • Sublinear in input parameters
    • Sublinear in the input size
• Solve the problem (approximately)

Parameters of Interest:
1. Memory usage
2. Number of passes
3. Approximation Factor
4. (Sometimes) query/update time 

Restrictions
- Approximation
- Randomization

랜덤에서 발생하는 문제를 해소하기 위한 법
Analyze expectation
Concentration: But also this happens with a good probability

다음 부등식을 알아야 함.
• Markov
• Chebychev
• Chernoff/Hoeffding

예제: Distinct Element Problem
a stream of 𝑛 numbers from 𝑚 입력에서, 구분되는(고유한) 원소 개수 찾기

Trivial solution : min(𝑚, 𝑛 log 𝑚 )
• Keep a counter for each of the 𝑚 elements, space: 𝑚 bits.
• Keep everyone in the stream, space: 𝑛 log 𝑚

더 나은 방법을 찾기 위한 조건 약화
• Approximate (up to a factor of 1 + 𝜖)
• Randomized (with probability 1 − 𝛿)

Distinct Element를 벡터롤 두고(예 - [0,1,2,3,4,5,6,7,8,9] 인덱스로 값이 등장했는지 카운팅)

DE를 D(확률) 로 근사 가능하면, 여러번 시도해 추정가능
추정값이 더 작게 나오는 DE≥D(1+ϵ)면 yes, 반대면 no

Simpler version: Decision problem where given 𝐷, identify
• YES case: DE ≥ 𝐷(1 + 𝜖)
• NO case: DE < 𝐷(1 − 𝜖)

Sample each of 𝑚 coordinate with problem 1/D
각 아이템의 좌표(값) i를 1/D 로 샘플링해서 집합 S에 추가.

1. 여러 개의 임계값 𝐷𝑖 = (1+𝜖)^𝑖
D_i=(1+ϵ)^i (i = 0, 1, 2, …)에 대해 위 결정 문제 알고리즘 수행.

2. 각 D_i에 대해 YES/NO 판단.

3. YES에서 NO로 바뀌는 첫 D_i를 찾음
→ 이때의 D_i가 DE의 근사값.

