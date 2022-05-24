import greeting from '../cli.js';
import {
  getRoundsQuantity, getRandomInteger, askQuestion, getUserAnswer, getWinMessage, getRoundResult,
} from '../index.js';

const askQuestionAndGetRightResult = () => {
  const progressionLength = getRandomInteger(5, 10);
  const progressionStep = getRandomInteger(1, 100);
  const progression = [getRandomInteger(0, 100)];

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(progression[i] + progressionStep);
  }

  const targetIdx = getRandomInteger(0, progressionLength + 1);
  const result = progression[targetIdx];
  progression[targetIdx] = '..';

  askQuestion(progression.join(' '));

  return result;
};

const progression = () => {
  const userName = greeting();
  console.log('What number is missing in the progression?');

  let roundsForWin = getRoundsQuantity();
  let isSucceed = true;

  do {
    roundsForWin -= 1;
    const rightAnswer = askQuestionAndGetRightResult();
    const userAnswer = getUserAnswer();

    isSucceed = getRoundResult(userAnswer, rightAnswer, userName);
  } while (isSucceed && roundsForWin !== 0);

  if (isSucceed) {
    getWinMessage(userName);
  }
};

export default progression;
