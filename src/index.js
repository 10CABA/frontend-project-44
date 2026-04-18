import readlineSync from 'readline-sync';
import greeting from './cli.js';

const runGame = (game) => {
  const name = greeting();
  console.log(game.rules);

  let roundsWon = 0;
  const totalRounds = 3;

  while (roundsWon < totalRounds) {
    const { question, correctAnswer } = game.generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      roundsWon++;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default runGame