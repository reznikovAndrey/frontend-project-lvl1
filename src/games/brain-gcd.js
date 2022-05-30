import {
  askQuestion,
  displayGameRules,
  displayMessageAfterGameEnd,
  displayMessageAfterRoundEnd,
  getUserAnswer,
  greetAndSetUserName,
} from '../cli.js';
import {
  ROUNDS_QUANTITY,
  convertUserAnswerToNumber,
  getGreatestCommonDivisor,
  getRandomInteger,
  isUserSucceed,
} from '../index.js';

const gameGreatestCommonDivisor = () => {
  const userName = greetAndSetUserName();

  const gameName = gameGreatestCommonDivisor.name;
  displayGameRules(gameName);

  let roundsForWin = ROUNDS_QUANTITY;
  let success;

  do {
    roundsForWin -= 1;
    const num1 = getRandomInteger(1, 100);
    const num2 = getRandomInteger(1, 100);
    askQuestion(`${num1} ${num2}`);

    const expectedAnswer = getGreatestCommonDivisor(num1, num2);
    const rawUserAnswer = getUserAnswer();
    const userAnswer = convertUserAnswerToNumber(rawUserAnswer);

    success = isUserSucceed(userAnswer, expectedAnswer);
    displayMessageAfterRoundEnd(userAnswer, expectedAnswer);
  } while (roundsForWin > 0 && success);

  displayMessageAfterGameEnd(success, userName);
};

export default gameGreatestCommonDivisor;
