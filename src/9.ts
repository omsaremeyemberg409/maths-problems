import { Random } from "random";

const randomMathProblem = () => {
  const num1 = Random.nextInt(1, 10);
  const num2 = Random.nextInt(1, 10);
  let answer = num1 + num2;
  if (Random.bool()) {
    answer *= -1;
  }
  return `${num1} ${Random.choice(["+", "-"])} ${num2} = ${answer}`;
};
