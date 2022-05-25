import { gamePreparation, gameFlow, gameEnd } from '../index.js';

const gameGreatestCommonDivisor = () => {
  gamePreparation(gameGreatestCommonDivisor.name);
  const success = gameFlow(gameGreatestCommonDivisor.name);
  gameEnd(success);
};

export default gameGreatestCommonDivisor;
