import {
  askQuestion,
  displayGameRules,
  displayMessageAfterGameEnd,
  displayMessageAfterRoundEnd,
  getUserAnswer,
  greetAndGetUserName,
} from '../cli.js';
import {
  ROUNDS_QUANTITY,
  getRandomInteger,
  isEven,
  isUserSucceed,
} from '../index.js';

const gameIsEven = () => {
  const userName = greetAndGetUserName();

  const gameName = gameIsEven.name;
  displayGameRules(gameName);

  let roundsForWin = ROUNDS_QUANTITY;
  let success;

  do {
    roundsForWin -= 1;
    const num = getRandomInteger();
    askQuestion(num);

    const expectedAnswer = isEven(num) ? 'yes' : 'no';
    const userAnswer = getUserAnswer();

    success = isUserSucceed(userAnswer, expectedAnswer);
    displayMessageAfterRoundEnd(userAnswer, expectedAnswer);
  } while (roundsForWin > 0 && success);

  displayMessageAfterGameEnd(success, userName);
};

export default gameIsEven;
