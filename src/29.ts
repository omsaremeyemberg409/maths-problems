import sympy as sp
from sympy import symbols

a, b = symbols('a b')
eq1 = 2*a - b + 3
eq2 = a**2 - b**2

solutions = sp.solve([eq1, eq2], (a, b))
print(solutions)
