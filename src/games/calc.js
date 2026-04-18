import getRandomNumber from '../utils.js';

function getRandomOperation() {
  const operations = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operations.length);
  return operations[randomIndex];
}

function calculate(num1, num2, operation) {
  if (operation === '+') {
    return num1 + num2;
  } else if (operation === '-') {
    return num1 - num2;
  } else if (operation === '*') {
    return num1 * num2;
  }
}

function generateRound() {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const operation = getRandomOperation();

  const question = `${num1} ${operation} ${num2}`;
  const correctAnswer = String(calculate(num1, num2, operation));

  return {
    question,
    correctAnswer,
  };
}

export default {
  rules: 'What is the result of the expression?',
  generateRound,
}