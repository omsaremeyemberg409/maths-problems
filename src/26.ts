import numpy as np

def calculate_factorial(n):
    """
    Calculate factorial of n.
    
    Parameters:
    n (int): The number to calculate the factorial of.
    
    Returns:
    int: The factorial of n.
    """
    return np.factorial(n)

# Example usage and output
result = calculate_factorial(5)
print(result)  # Output will be different based on the value of n

