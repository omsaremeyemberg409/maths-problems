// Generate a random math problem
const num1 = Math.floor(Math.random() * 10);
const num2 = Math.floor(Math.random() * 10);
const operator = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)];
const answer = eval(`${num1} ${operator} ${num2}`);

// Display the problem and answer
console.log(`What is ${num1} ${operator} ${num2}?`);
console.log(`Answer: ${answer}`);
