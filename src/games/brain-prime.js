import greeting from '../cli.js';
import {
  getRoundsQuantity, askQuestion, getRandomInteger, getUserAnswer, getWinMessage, getRoundResult,
} from '../index.js';

const getRightAnswer = (targetNum) => {
  let isPrime = true;

  for (let i = 2; i < Math.sqrt(targetNum); i += 1) {
    if (targetNum % i === 0) {
      isPrime = false;
    }
  }

  return isPrime ? 'yes' : 'no';
};

const isPrime = () => {
  const userName = greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let roundsForWin = getRoundsQuantity();
  let isSucceed = true;

  do {
    roundsForWin -= 1;
    const targetNum = getRandomInteger();

    askQuestion(targetNum);
    const userAnswer = getUserAnswer();
    const rightAnswer = getRightAnswer(targetNum);

    isSucceed = getRoundResult(userAnswer, rightAnswer, userName);
  } while (isSucceed && roundsForWin !== 0);

  if (isSucceed) {
    getWinMessage(userName);
  }
};

export default isPrime;
