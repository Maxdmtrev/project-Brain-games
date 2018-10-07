import game from '..';
import getRandomNum from '../utils';
import { isPrime } from '../math';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minValue = 1;
const maxValue = 100;

const gameData = () => {
  const question = getRandomNum(minValue, maxValue);
  const answer = isPrime(question) ? 'yes' : 'no';
  return {
    question, answer,
  };
};

export default () => game(description, gameData);
