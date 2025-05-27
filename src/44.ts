from sympy import symbols, solve

x = symbols('x')
equation = x**2 - 3*x + 1
solution = solve(equation, x)
solution
