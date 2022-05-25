export const ROUNDS_QUANTITY = 3;
const HIDDEN_VALUE = '..';
const OPERATIONS = ['+', '-', '*'];

export const getRandomInteger = (min = 0, max = 100) => {
  const num = min + Math.random() * (max - min);
  return Math.floor(num);
};

export const isUserSucceed = (userAnswer, expectedAnswer) => userAnswer === expectedAnswer;

export const isEven = (num) => num % 2 === 0;

export const getExpression = () => {
  const idx = getRandomInteger(0, OPERATIONS.length);

  const operation = OPERATIONS[idx];
  const num1 = getRandomInteger();
  const num2 = getRandomInteger();

  return `${num1} ${operation} ${num2}`;
};

export const getExpressionResult = (expression) => {
  const expressionArr = expression.split(' ').map((el) => {
    if (OPERATIONS.includes(el)) {
      return el;
    }
    return +el;
  });
  const [num1, operation, num2] = expressionArr;

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

export const convertUserAnswerToNumber = (userAnswer) => {
  const parsedNum = parseInt(userAnswer, 10);
  const result = Number.isNaN(parsedNum) ? userAnswer : parsedNum;
  return result;
};

export const getGreatestCommonDivisor = (num1, num2) => {
  if (num1 === 0) {
    return num2;
  }
  return getGreatestCommonDivisor(num2 % num1, num1);
};

export const isPrime = (num) => {
  if (num === 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export const getProgression = () => {
  const progressionLength = getRandomInteger(5, 10);
  const progressionStep = getRandomInteger();
  const progression = [getRandomInteger()];

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(progression[i] + progressionStep);
  }

  return progression.join(' ');
};

export const getProgressionWithHiddenNumber = (progression) => {
  const progressionArr = progression.split(' ');
  const hiddenIdx = getRandomInteger(0, progressionArr.length);
  progressionArr[hiddenIdx] = HIDDEN_VALUE;
  return progressionArr.join(' ');
};

export const getProgressionHiddenNumber = (progression) => {
  const progressionArr = progression.split(' ').map((el) => {
    if (el === HIDDEN_VALUE) {
      return el;
    }
    return +el;
  });
  const hiddenIdx = progressionArr.indexOf(HIDDEN_VALUE);

  const lastIdx = progressionArr.length - 1;

  switch (hiddenIdx) {
    case 0: {
      const step = progressionArr[lastIdx] - progressionArr[lastIdx - 1];
      return progressionArr[1] - step;
    }
    case lastIdx: {
      const step = progressionArr[1] - progressionArr[0];
      return progressionArr[lastIdx - 1] + step;
    }
    default: {
      const beforeEl = progressionArr[hiddenIdx - 1];
      const afterEl = progressionArr[hiddenIdx + 1];
      const targetEl = (beforeEl + afterEl) / 2;
      return targetEl;
    }
  }
};
