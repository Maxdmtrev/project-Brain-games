import game from '..';
import getRandomNum from '../utils';
import { getProgression } from '../math';

const description = 'What number is missing in this progression?\n';
const minValue = 0;
const maxValue = 10;
const length = 10;

const gameData = () => {
  const first = getRandomNum(minValue, maxValue);
  const step = getRandomNum(1, length);
  const progression = getProgression(length, first, step);
  const hideElementIndex = getRandomNum(0, length - 1);
  const question = progression.map((element, index) => (index === hideElementIndex ? '..' : element)).join(' ');
  const answer = `${progression[hideElementIndex]}`;
  return {
    question, answer,
  };
};

export default () => game(description, gameData);
