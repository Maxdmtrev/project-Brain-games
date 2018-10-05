import game from '..';
import getRandomNum from '../utils';

const description = 'What number is missing in this progression?\n';
const minValue = 1;
const maxValue = 20;
const length = 10;

const getProgression = (progresLength) => {
  const divers = getRandomNum(minValue, maxValue);
  const result = [];
  for (let i = 0; i < progresLength; i += 1) {
    result.push(i * divers);
  }
  return result;
};

const gameData = () => {
  const progression = getProgression(length);
  const randomIndex = getRandomNum(0, length - 1);
  const copyProgression = progression.slice();
  copyProgression[randomIndex] = '..';
  const question = copyProgression.join(' ');
  const answer = `${progression[randomIndex]}`;
  return {
    question, answer,
  };
};

export default () => game(description, gameData);
