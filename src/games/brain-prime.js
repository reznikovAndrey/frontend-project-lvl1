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
  isPrime,
  isUserSucceed,
} from '../index.js';

const gameIsPrime = () => {
  const userName = greetAndGetUserName();

  const gameName = gameIsPrime.name;
  displayGameRules(gameName);

  let roundsForWin = ROUNDS_QUANTITY;
  let success;

  do {
    roundsForWin -= 1;
    const num = getRandomInteger();
    askQuestion(num);

    const expectedAnswer = isPrime(num) ? 'yes' : 'no';
    const userAnswer = getUserAnswer();

    success = isUserSucceed(userAnswer, expectedAnswer);
    displayMessageAfterRoundEnd(userAnswer, expectedAnswer);
  } while (roundsForWin > 0 && success);

  displayMessageAfterGameEnd(success, userName);
};

export default gameIsPrime;
