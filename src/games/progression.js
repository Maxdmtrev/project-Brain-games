import game from '..';
import getRandomNum from '../utils';

const description = 'What number is missing in this progression?\n';
const minValue = 0;
const maxValue = 10;
const length = 10;
const first = getRandomNum(minValue, maxValue);
const step = getRandomNum(1, length);

const getProgression = (progresLength) => {
  const result = [];
  for (let i = 0; i < progresLength; i += 1) {
    result.push(first + step * i);
  }
  return result;
};

const gameData = () => {
  const progression = getProgression(length);
  const hideElementIndex = getRandomNum(0, length - 1);
  const copyProgression = progression.slice();
  copyProgression[hideElementIndex] = '..';
  const question = copyProgression.join(' ');
  const answer = `${progression[hideElementIndex]}`;
  return {
    question, answer,
  };
};

export default () => game(description, gameData);
