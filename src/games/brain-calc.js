import greeting from '../cli.js';
import {
  getRoundsQuantity, getRandomInteger, askQuestion, getUserAnswer, getRoundResult, getWinMessage,
} from '../index.js';

const getRandomOpeartion = () => {
  const operations = ['+', '-', '*'];
  const idx = getRandomInteger(0, 3);
  return operations[idx];
};

const askQuestionAndGetExpressionResult = (num1, num2) => {
  const operation = getRandomOpeartion();

  askQuestion(`${num1} ${operation} ${num2}`);

  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const calc = () => {
  const userName = greeting();
  console.log('What is the result of the expression?');

  let roundsForWin = getRoundsQuantity();
  let isSucceed = true;

  do {
    roundsForWin -= 1;
    const num1 = getRandomInteger();
    const num2 = getRandomInteger();

    const rightAnswer = askQuestionAndGetExpressionResult(num1, num2);
    const userAnswer = getUserAnswer();

    isSucceed = getRoundResult(userAnswer, rightAnswer, userName);
  } while (isSucceed && roundsForWin !== 0);

  if (isSucceed) {
    getWinMessage(userName);
  }
};

export default calc;
