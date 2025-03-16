  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 10) + 1;
  }
  
  const mathProblems = {
    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
    multiply: (x, y) => x * y,
    divide: (x, y) => x / y,
  };
  
  const generateRandomMathProblem = () => {
    const operation = mathProblems[generateRandomNumber()];
    const x = generateRandomNumber();
    const y = generateRandomNumber();
    return `${operation(x, y)}`;
  }
  
  console.log(generateRandomMathProblem());