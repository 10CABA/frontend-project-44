import getRandomNumber from '../utils.js';

const isEven = (num) => num % 2 === 0;

function generateRound() {
  const randomNumber = getRandomNumber(1, 100);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

  return {
    question: String(randomNumber),
    correctAnswer,
  };
}

export default {
  rules: 'Answer "yes" if the number is even, otherwise answer "no".',
  generateRound,
}