import numpy as np

# 입력. j 인덱스는 1부터 시작
x = [0, 1, 0, 1, 1, 0]
j = 3
n = len(x)

# Alice가 생성한 S1
S1 = [2 * (i+1) + x[i] for i in range(n)]

# Bob이 생성한 S2
S2 = [0] * (n - j) + [2 * n + 2] * (j - 1)

# 합치고 median 구하기
stream = S1 + S2
median = int(np.median(stream))

# 결과 유도: median = 2j + x[j] → x[j] = median - 2j
xj_recovered = median - 2 * j
print(f"Recovered x[{j}] = {xj_recovered} (real: {x[j-1]})")
