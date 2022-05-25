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
  isPrime,
  isUserSucceed,
} from '../index.js';

const gameIsPrime = () => {
  greeting();

  const userName = getUserName();
  greetUser(userName);

  const gameName = gameIsPrime.name;
  displayGameRules(gameName);

  let roundsForWin = ROUNDS_QUANTITY;
  let success;

  do {
    roundsForWin -= 1;
    const num = getRandomInteger(1, 10);
    askQuestion(num);

    const expectedAnswer = isPrime(num) ? 'yes' : 'no';
    const userAnswer = getUserAnswer();

    success = isUserSucceed(userAnswer, expectedAnswer);
    displayMessageAfterRoundEnd(userAnswer, expectedAnswer);
  } while (roundsForWin > 0 && success);

  displayMessageAfterGameEnd(success, userName);
};

export default gameIsPrime;
