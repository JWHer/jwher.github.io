import random
import math

class MorrisCounter:
    def __init__(self):
        self.X = 0  # log-scale counter
        self.alpha = 2

    def update(self):
        if random.random() < 1 / (self.alpha ** self.X):
            self.X += 1

    def estimate(self):
        return (self.alpha ** self.X - 1) / (self.alpha - 1)

def run_single_experiment(num_events):
    counter = MorrisCounter()
    for _ in range(num_events):
        counter.update()
    estimate = counter.estimate()
    print(f"True count: {num_events}, Estimated count: {estimate:.2f}, Error: {abs(estimate - num_events):.2f}")

def run_multiple_experiments(num_events, num_trials=1000):
    estimates = []
    for _ in range(num_trials):
        counter = MorrisCounter()
        for _ in range(num_events):
            counter.update()
        estimates.append(counter.estimate())
    
    avg_estimate = sum(estimates) / num_trials
    print(f"True count: {num_events}")
    print(f"Average estimate over {num_trials} trials: {avg_estimate:.2f}")
    print(f"Expected error: {abs(avg_estimate - num_events):.2f}")

if __name__ == "__main__":
    # 단일 예시
    # run_single_experiment(1000000)

    # 평균 성능 보기
    run_multiple_experiments(1000, num_trials=1000)
