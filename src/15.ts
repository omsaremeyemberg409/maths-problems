import sympy
from sympy import symbols, solve

# Define variables
x = symbols('x')

# Example equation: 2*x^3 + 5*x - 7 = 0
equation = 2*x**3 + 5*x - 7

solution = solve(equation, x)
solution
