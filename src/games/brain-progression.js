import {
  greeting,
  getUserName,
  greetUser,
  displayGameRules,
  askQuestion,
  getUserAnswer,
  displayMessageAfterRoundEnd,
  displayMessageAfterGameEnd,
} from '../cli.js';
import {
  ROUNDS_QUANTITY,
  convertUserAnswerToNumber,
  isUserSucceed,
  getProgression,
  getProgressionHiddenNumber,
  getProgressionWithHiddenNumber,
} from '../index.js';

const gameProgression = () => {
  greeting();

  const userName = getUserName();
  greetUser(userName);

  const gameName = gameProgression.name;
  displayGameRules(gameName);

  let roundsForWin = ROUNDS_QUANTITY;
  let success;

  do {
    roundsForWin -= 1;
    const progression = getProgression();
    const question = getProgressionWithHiddenNumber(progression);
    askQuestion(question);

    const expectedAnswer = getProgressionHiddenNumber(question);
    const rawUserAnswer = getUserAnswer();
    const userAnswer = convertUserAnswerToNumber(rawUserAnswer);

    success = isUserSucceed(userAnswer, expectedAnswer);
    displayMessageAfterRoundEnd(userAnswer, expectedAnswer);
  } while (roundsForWin > 0 && success);

  displayMessageAfterGameEnd(success, userName);
};

export default gameProgression;
