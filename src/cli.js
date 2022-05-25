import { question } from 'readline-sync';

export const greeting = () => console.log('Welcome to the Brain Games!');

export const getUserName = () => {
  const userName = question('May I have your name? ');
  return userName;
};

export const greetUser = (userName) => console.log(`Hello, ${userName}!`);

export const getUserAnswer = () => {
  const userAnswer = question('Your answer: ');
  return userAnswer;
};

export const displayGameRules = (gameName) => {
  switch (gameName) {
    case 'gameIsEven':
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      break;
    case 'gameCalculation':
      console.log('What is the result of the expression?');
      break;
    case 'gameGreatestCommonDivisor':
      console.log('Find the greatest common divisor of given numbers.');
      break;
    case 'gameIsPrime':
      console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
      break;
    case 'gameProgression':
      console.log('What number is missing in the progression?');
      break;
    default:
      break;
  }
};

export const askQuestion = (questionBody) => console.log(`Question: ${questionBody}`);

export const displayMessageAfterRoundEnd = (userAnswer, expectedAnswer) => {
  if (userAnswer === expectedAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
  }
};

export const displayMessageAfterGameEnd = (isGameSuccessful, userName) => {
  if (isGameSuccessful) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};
