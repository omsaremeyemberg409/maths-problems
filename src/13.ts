function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const problem1 = () => {
  const num1 = getRandomNumber(0, 10);
  const num2 = getRandomNumber(0, 10);
  return `What is ${num1} x ${num2}`;
};

const problem2 = () => {
  const num1 = getRandomNumber(1, 5);
  const num2 = getRandomNumber(1, 5);
  return `What is the sum of ${num1} and ${num2}`;
};

const problem3 = () => {
  const num1 = getRandomNumber(0, 10);
  const num2 = getRandomNumber(0, 10);
  return `What is ${num1} + ${num2}`;
};

const problem4 = () => {
  const num1 = getRandomNumber(1, 10);
  const num2 = getRandomNumber(1, 10);
  return `What is the product of ${num1} and ${num2}`;
};

const problem5 = () => {
  const num1 = getRandomNumber(0, 10);
  const num2 = getRandomNumber(0, 10);
  return `What is ${num1} - ${num2}`;
};

const problem6 = () => {
  const num1 = getRandomNumber(1, 10);
  const num2 = getRandomNumber(1, 10);
  return `What is the difference between ${num1} and ${num2}`;
};

export {
  problem1,
  problem2,
  problem3,
  problem4,
  problem5,
  problem6,
};
