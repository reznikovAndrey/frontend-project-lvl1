import greeting from '../cli.js';
import {
  askQuestion, getRandomInteger, getRoundsQuantity, getUserAnswer, getWinMessage, getRoundResult,
} from '../index.js';

const getGreatestCommonDivisor = (num1, num2) => {
  if (num1 === 0) {
    return num2;
  }
  return getGreatestCommonDivisor(num2 % num1, num1);
};

const gcd = () => {
  const userName = greeting();
  console.log('Find the greatest common divisor of given numbers.');

  let roundsForWin = getRoundsQuantity();
  let isSucceed = true;

  do {
    roundsForWin -= 1;
    const num1 = getRandomInteger(1, 100);
    const num2 = getRandomInteger(1, 100);

    askQuestion(`${num1} ${num2}`);
    const userAnswer = getUserAnswer();
    const rightAnswer = getGreatestCommonDivisor(num1, num2);

    isSucceed = getRoundResult(userAnswer, rightAnswer, userName);
  } while (isSucceed && roundsForWin !== 0);

  if (isSucceed) {
    getWinMessage(userName);
  }
};

export default gcd;
