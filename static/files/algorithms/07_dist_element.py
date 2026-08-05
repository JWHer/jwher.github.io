import numpy as np
import hashlib

class KMVSketchFinal:
    def __init__(self, k):
        self.k = k
        self.seen = set()
        self.hashes = []

    def _hash(self, x):
        h = hashlib.sha256(str(x).encode()).digest()
        return int.from_bytes(h, 'big') / 2**256  # Normalize to [0, 1]

    def add(self, x):
        if x in self.seen:
            return
        self.seen.add(x)
        h = self._hash(x)
        if len(self.hashes) < self.k:
            self.hashes.append(h)
            self.hashes.sort()
        elif h < self.hashes[-1]:
            self.hashes[-1] = h
            self.hashes.sort()

    def merge(self, other):
        for x in other.seen:
            self.add(x)

    def estimate_f0(self):
        if len(self.hashes) < self.k:
            return len(self.hashes)
        return (self.k - 1) / self.hashes[-1]


# Step 1: Alice와 Bob의 이진 벡터 생성
n = 10000
x = np.random.randint(0, 2, n)
y = np.random.randint(0, 2, n)

# Step 2: Sketch 크기 설정 (epsilon = 0.1 → O(1/ε²))
epsilon = 0.1
k = int(1 / epsilon**2)

# Step 3: Alice와 Bob 각각 sketch 생성
sketch_x = KMVSketchFinal(k)
sketch_y = KMVSketchFinal(k)

for i in range(n):
    if x[i] == 1:
        sketch_x.add(i)
    if y[i] == 1:
        sketch_y.add(i)

# Step 4: Sketch 병합 (중복 제거 포함)
sketch_x.merge(sketch_y)

# Step 5: F₀ 근사 후 Hamming 거리 추정
f0_est = sketch_x.estimate_f0()
dx = np.sum(x)
dy = np.sum(y)
hamming_est = int(2 * f0_est - dx - dy)
hamming_true = int(np.sum(x != y))

print(hamming_est, hamming_true, abs(hamming_est - hamming_true))
