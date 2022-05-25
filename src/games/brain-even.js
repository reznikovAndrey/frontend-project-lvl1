import { gamePreparation, gameFlow, gameEnd } from '../index.js';

const gameIsEven = () => {
  gamePreparation(gameIsEven.name);
  const success = gameFlow(gameIsEven.name);
  gameEnd(success);
};

export default gameIsEven;
