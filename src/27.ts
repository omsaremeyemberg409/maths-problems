import sys
from sympy import symbols, solve
x = symbols('x')
eq1 = 2*x**3 - 5*x + 3
eq2 = x**4 - 7*x**2 + 10
solutions = solve((eq1, eq2), (x))
print(solutions)
