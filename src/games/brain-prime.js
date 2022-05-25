import { gamePreparation, gameFlow, gameEnd } from '../index.js';

const gameIsPrime = () => {
  gamePreparation(gameIsPrime.name);
  const success = gameFlow(gameIsPrime.name);
  gameEnd(success);
};

export default gameIsPrime;
