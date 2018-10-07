import game from '..';
import getRandomNum from '../utils';
import { getGcd } from '../math';

const description = 'Find the greatest common divisor of given numbers.\n';
const minValue = 1;
const maxValue = 20;

const gameData = () => {
  const arg1 = getRandomNum(minValue, maxValue);
  const arg2 = getRandomNum(minValue, maxValue);
  const question = `${arg1} ${arg2}`;
  const answer = getGcd(arg1, arg2);
  return {
    question, answer: `${answer}`,
  };
};
export default () => game(description, gameData);
