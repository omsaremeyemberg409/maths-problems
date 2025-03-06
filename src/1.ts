// Generating a random math problem between 1 and 10 for a student to solve
var num1 = Math.floor(Math.random() * 10) + 1;
var num2 = Math.floor(Math.random() * 10) + 1;
var answer = num1 + num2;
console.log("What is " + num1 + " + " + num2 + "?");
console.log("Answer: " + answer);
