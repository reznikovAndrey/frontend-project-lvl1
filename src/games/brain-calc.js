import { gamePreparation, gameFlow, gameEnd } from '../index.js';

const gameCalculation = () => {
  gamePreparation(gameCalculation.name);
  const success = gameFlow(gameCalculation.name);
  gameEnd(success);
};

export default gameCalculation;
