import greeting from '../cli.js';
import {
  getRandomInteger, askQuestion, getUserAnswer, getRoundsQuantity, getWinMessage, getRoundResult,
} from '../index.js';

const getRightAnswer = (targetNum) => {
  const isOdd = targetNum % 2;
  return isOdd ? 'no' : 'yes';
};

const isEven = () => {
  const userName = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

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

export default isEven;
