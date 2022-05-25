export const getRandomInteger = (min = 1, max = 100) => {
  const num = min + Math.random() * (max - min);
  return Math.floor(num);
};

export const getRandomOpeartion = () => {
  const operations = ['+', '-', '*'];
  const idx = getRandomInteger(0, 3);
  return operations[idx];
};

export const getExpressionResult = (num1, num2, operation) => {
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

export const getProgression = () => {
  const progressionLength = getRandomInteger(5, 10);
  const progressionStep = getRandomInteger();
  const progression = [getRandomInteger(0, 100)];

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(progression[i] + progressionStep);
  }

  return progression;
};

export const getGreatestCommonDivisor = (num1, num2) => {
  if (num1 === 0) {
    return num2;
  }
  return getGreatestCommonDivisor(num2 % num1, num1);
};

export const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

export const isEven = (num) => {
  const isOdd = num % 2;
  return isOdd ? 'no' : 'yes';
};
