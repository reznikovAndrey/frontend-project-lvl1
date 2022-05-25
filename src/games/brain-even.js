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
  getRandomInteger,
  isEven,
  isUserSucceed,
} from '../index.js';

const gameIsEven = () => {
  greeting();

  const userName = getUserName();
  greetUser(userName);

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
