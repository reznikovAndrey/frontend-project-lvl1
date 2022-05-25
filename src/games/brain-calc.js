import {
  askQuestion,
  displayGameRules,
  displayMessageAfterGameEnd,
  displayMessageAfterRoundEnd,
  getUserAnswer,
  getUserName,
  greeting,
  greetUser,
} from '../cli.js';
import {
  ROUNDS_QUANTITY,
  convertUserAnswerToNumber,
  getExpression,
  getExpressionResult,
  isUserSucceed,
} from '../index.js';

const gameCalculation = () => {
  greeting();

  const userName = getUserName();
  greetUser(userName);

  const gameName = gameCalculation.name;
  displayGameRules(gameName);

  let roundsForWin = ROUNDS_QUANTITY;
  let success;

  do {
    roundsForWin -= 1;
    const expression = getExpression();
    askQuestion(expression);

    const expectedAnswer = getExpressionResult(expression);
    const rawUserAnswer = getUserAnswer();
    const userAnswer = convertUserAnswerToNumber(rawUserAnswer);

    success = isUserSucceed(userAnswer, expectedAnswer);
    displayMessageAfterRoundEnd(userAnswer, expectedAnswer);
  } while (roundsForWin > 0 && success);

  displayMessageAfterGameEnd(success, userName);
};

export default gameCalculation;
