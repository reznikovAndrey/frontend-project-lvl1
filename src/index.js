import { question } from 'readline-sync';

export const getRandomInteger = (min = 0, max = 100) => {
  const num = min + Math.random() * (max - min);
  return Math.floor(num);
};

export const askQuestion = (questionText) => {
  console.log('Question:', questionText);
};

export const getUserAnswer = () => {
  const userAnswer = question('Your answer: ');
  return userAnswer;
};

export const getRoundsQuantity = (roundsQuantity = 3) => roundsQuantity;

export const getRoundResult = (userAnswer, rightAnswer, userName) => {
  if (userAnswer !== rightAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
  } else {
    console.log('Correct!');
  }
  return userAnswer === rightAnswer;
};

export const getWinMessage = (userName) => console.log(`Congratulations, ${userName}!`);
