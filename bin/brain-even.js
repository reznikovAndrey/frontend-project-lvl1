#!/usr/bin/env node

import { question } from 'readline-sync';

import greeting from '../src/cli.js';

const getRandomInteger = (min, max) => {
  const num = min + Math.random() * (max - min);
  return Math.floor(num);
};

const getRightAnswer = (targetNum) => {
  const isOdd = targetNum % 2;
  return isOdd ? 'no' : 'yes';
};

const game = () => {
  const userName = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const roundsQuantity = 3;

  for (let i = 1; i <= roundsQuantity; i += 1) {
    const targetNum = getRandomInteger(0, 100);
    console.log('Question:', targetNum);

    const userAnswer = question('Your answer: ');
    const rightAnswer = getRightAnswer(targetNum);

    if (userAnswer !== rightAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.
          Let's try again, ${userName}!`,
      );
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

game();
