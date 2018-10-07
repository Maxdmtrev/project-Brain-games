import game from '..';
import getRandomNum from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".\n';
const minValue = 1;
const maxValue = 100;
const isEvenNum = num => (num % 2 === 0);

const gameData = () => {
  const question = getRandomNum(minValue, maxValue);
  const answer = isEvenNum(question) ? 'yes' : 'no';
  return {
    question, answer,
  };
};

export default () => game(description, gameData);
