from sympy import symbols, solve

# Example problem: solve x^2 - 3x + 2 = 0
x = symbols('x')
equation = x**2 - 3*x + 2
solution = solve(equation, x)
print(solution)
