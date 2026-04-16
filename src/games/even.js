import getRandomNumber from '../utils.js';

function isEven(num) {
  return num % 2 === 0;
}

function generateRound() {
  const randomNumber = getRandomNumber(1, 100);
  let correctAnswer;
  
  if (isEven(randomNumber)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  
  return {
    question: String(randomNumber),
    correctAnswer: correctAnswer,
  };
}

export default {
  rules: 'Answer "yes" if the number is even, otherwise answer "no".',
  generateRound: generateRound,
};
