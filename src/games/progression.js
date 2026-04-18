import getRandomNumber from '../utils.js';

function generateProgression() {
  const length = getRandomNumber(5, 10);
  const start = getRandomNumber(1, 50);
  const step = getRandomNumber(2, 10);

  const progression = [];
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step);
  }

  const hiddenIndex = getRandomNumber(0, length - 1);
  const correctAnswer = String(progression[hiddenIndex]);

  progression[hiddenIndex] = '..';

  const question = progression.join(' ');

  return {
    question,
    correctAnswer,
  };
}

export default {
  rules: 'What number is missing in the progression?',
  generateRound: generateProgression,
}