import { math } from 'mathjs';

function getRandomProblem() {
  const num1 = math.randomInt(10);
  const num2 = math.randomInt(10);
  const operator = math.pick(['+', '-', '*', '/']);
  const answer = math[operator](num1, num2);

  return {
    question: `${num1} ${operator} ${num2}`,
    answer,
  };
}
