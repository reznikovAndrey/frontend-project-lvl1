import {
  greeting,
  getUserName,
  greetUser,
  gameIntro,
  askQuestion,
  getUserAnswer,
  messageAfterSuccessRound,
  messageAfterUnseccessRound,
  winMessage,
  loseMessage,
} from './cli.js';
import {
  getRandomInteger,
  isEven,
  getRandomOpeartion,
  getExpressionResult,
  getGreatestCommonDivisor,
  isPrime,
  getProgression,
} from './utils.js';

// round quantity constant
const ROUNDS = 3;

// shared for index.js functions
let userName;

export const gamePreparation = (gameName) => {
  greeting();
  userName = getUserName();
  greetUser(userName);
  gameIntro(gameName);
};

export const gameFlow = (gameName) => {
  let roundsBeforeWin = ROUNDS;
  let rightAnswer;

  do {
    roundsBeforeWin -= 1;

    switch (gameName) {
      case 'gameIsEven': {
        const num1 = getRandomInteger();
        askQuestion(num1);
        rightAnswer = isEven(num1);
        break;
      }
      case 'gameCalculation': {
        const num1 = getRandomInteger();
        const num2 = getRandomInteger();
        const operation = getRandomOpeartion();
        askQuestion(`${num1} ${operation} ${num2}`);
        rightAnswer = getExpressionResult(num1, num2, operation);
        break;
      }
      case 'gameGreatestCommonDivisor': {
        const num1 = getRandomInteger();
        const num2 = getRandomInteger();
        askQuestion(`${num1} ${num2}`);
        rightAnswer = getGreatestCommonDivisor(num1, num2);
        break;
      }
      case 'gameIsPrime': {
        const num1 = getRandomInteger();
        askQuestion(num1);
        rightAnswer = isPrime(num1);
        break;
      }
      case 'gameProgression': {
        const progression = getProgression();
        const hideIdx = getRandomInteger(0, progression.length + 1);
        rightAnswer = progression[hideIdx];
        progression[hideIdx] = '..';
        askQuestion(progression.join(' '));
        break;
      }
      default:
        break;
    }

    const userAnswer = getUserAnswer();
    if (userAnswer !== rightAnswer) {
      messageAfterUnseccessRound(userAnswer, rightAnswer);
      return false;
    }

    messageAfterSuccessRound();
  } while (roundsBeforeWin > 0);

  return true;
};

export const gameEnd = (success) => {
  if (success) {
    winMessage(userName);
  } else {
    loseMessage(userName);
  }
};
