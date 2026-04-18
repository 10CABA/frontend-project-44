import getRandomNumber from '../utils.js';

function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function generateRound() {
  const number = getRandomNumber(1, 100);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return {
    question: String(number),
    correctAnswer,
  };
}

export default {
  rules: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  generateRound,
}
