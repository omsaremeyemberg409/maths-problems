function getRandomMathProblem(): string {
  const operators = ["+", "-", "*", "/"];
  const numbers = [5, 10, 20];

  let problem = "";
  let answer = 0;

  for (let i = 0; i < 3; i++) {
    const operator = operators[Math.floor(Math.random() * operators.length)];
    const number = numbers[Math.floor(Math.random() * numbers.length)];

    problem += ` ${number} ${operator}`;
    answer += calculateAnswer(problem);
  }

  return `${problem} = ${answer}`;
}

function calculateAnswer(problem: string): number {
  const numbers = problem.split(" ");
  let answer = parseInt(numbers[0], 10);

  for (let i = 1; i < numbers.length; i++) {
    const operator = operators[i - 1];
    const number = parseInt(numbers[i], 10);
    answer = calculateAnswerForOperator(operator, answer, number);
  }

  return answer;
}

function calculateAnswerForOperator(operator: string, left: number, right: number): number {
  if (operator === "+") {
    return left + right;
  } else if (operator === "-") {
    return left - right;
  } else if (operator === "*") {
    return left * right;
  } else if (operator === "/") {
    return Math.floor(left / right);
  }
}
