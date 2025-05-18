from sympy import symbols, Eq, solve

x = symbols('x')
equation = Eq(x**2 + 3*x - 4, 0)
solution = solve(equation, x)

print(solution)
