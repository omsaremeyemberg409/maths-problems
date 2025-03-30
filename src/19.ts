import random

def solve_math_problems():
    # Example solution for a common problem
    answer = "The sum of the first 100 natural numbers is: 5050"

    return answer

if __name__ == "__main__":
    random_problem = random.choice([f"Problem {i + 1}: ", f"\n{i}th Problem:", f"\n\n")]
    print(random_problem, solve_math_problems())
