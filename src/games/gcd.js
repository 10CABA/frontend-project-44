import getRandomNumber from '../utils.js';

function findGCD(a, b) {
  let num1 = a;
  let num2 = b;

  while (num2 !== 0) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }

  return num1;
}

function generateRound() {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);

  const question = `${num1} ${num2}`;
  const correctAnswer = String(findGCD(num1, num2));

  return {
    question,
    correctAnswer,
  };
}

export default {
  rules: 'Find the greatest common divisor of given numbers.',
  generateRound,
}