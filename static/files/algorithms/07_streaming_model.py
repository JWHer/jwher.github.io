import random
import math

# ------------------------
# 1. Trivial 방법 (정확하게 계산)
# ------------------------
def trivial_distinct_count(stream):
    return len(set(stream))


# ------------------------
# 2. Sampling 기반 Decision Algorithm
# ------------------------
def decision_algorithm(stream, D, epsilon=0.5, k=50):
    m = max(stream) + 1  # 전체 가능한 값 개수 (좌표 수)
    
    C = 0  # all-zero 샘플 횟수
    for _ in range(k):
        S = [i for i in range(m) if random.random() < 1 / D]  # 확률적으로 좌표 샘플
        has_nonzero = any(val in S for val in set(stream))   # 하나라도 등장했는지 검사
        if not has_nonzero:
            C += 1  # all-zero 샘플
    if C < k / math.e:
        return "YES (DE >= D·(1+ε))"
    else:
        return "NO (DE < D·(1−ε))"


# ------------------------
# 테스트용 예시 데이터
# ------------------------
def generate_stream(n=100, num_distinct=10, value_range=100):
    distinct_values = random.sample(range(value_range), num_distinct)
    return [random.choice(distinct_values) for _ in range(n)]


# ------------------------
# 실행
# ------------------------
if __name__ == "__main__":
    # random.seed(42)
    
    # 스트림 생성
    stream = generate_stream(n=100, num_distinct=15, value_range=100)
    
    # 정확한 DE
    exact_DE = trivial_distinct_count(stream)
    print(f"Trivial 정확한 Distinct Elements 개수: {exact_DE}")

    # Threshold D 설정
    epsilon = 0.5
    D = 10  # 가설 threshold
    result = decision_algorithm(stream, D=D, epsilon=epsilon, k=50)
    print(f"Decision Algorithm (D={D}, ε={epsilon}): {result}")
