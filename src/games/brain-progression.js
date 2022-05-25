import { gamePreparation, gameFlow, gameEnd } from '../index.js';

const gameProgression = () => {
  gamePreparation(gameProgression.name);
  const success = gameFlow(gameProgression.name);
  gameEnd(success);
};

export default gameProgression;
