import game from '..';
import getRandomNum from '../utils';

const description = 'Is this number prime?';
const minValue = 1;
const maxValue = 100;
const isPrime = (num) => {
  if (num <= 1) return false;
  const numSqrt = Math.sqrt(num);
  for (let i = 2; i <= numSqrt; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const gameData = () => {
  const question = getRandomNum(minValue, maxValue);
  const answer = isPrime(question) ? 'yes' : 'no';
  return {
    question, answer,
  };
};

export default () => game(description, gameData);
