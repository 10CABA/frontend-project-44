import getRandomNumber from '../utils.js';

function generateProgression() {
  const length = getRandomNumber(5, 10); // Длина прогрессии от 5 до 10
  const start = getRandomNumber(1, 50);  // Начальное число
  const step = getRandomNumber(2, 10);   // Шаг прогрессии
  
  // Создаем массив прогрессии
  const progression = [];
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step);
  }
  
  // Выбираем случайную позицию для скрытого элемента
  const hiddenIndex = getRandomNumber(0, length - 1);
  const correctAnswer = String(progression[hiddenIndex]);
  
  // Заменяем элемент на ".."
  progression[hiddenIndex] = '..';
  
  // Формируем вопрос (объединяем через пробел)
  const question = progression.join(' ');
  
  return {
    question: question,
    correctAnswer: correctAnswer,
  };
}

const gameRules = 'What number is missing in the progression?';

export default {
  rules: gameRules,
  generateRound: generateProgression,
};
