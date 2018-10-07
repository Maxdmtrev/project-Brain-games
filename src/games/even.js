import game from '..';
import getRandomNum from '../utils';
import { isEvenNum } from '../math';

const description = 'Answer "yes" if number even otherwise answer "no".\n';
const minValue = 1;
const maxValue = 100;

const gameData = () => {
  const question = getRandomNum(minValue, maxValue);
  const answer = isEvenNum(question) ? 'yes' : 'no';
  return {
    question, answer,
  };
};

export default () => game(description, gameData);
