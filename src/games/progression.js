import game from '..';
import getRandomNum from '../utils';

const description = 'What number is missing in this progression?\n';
const minValue = 0;
const maxValue = 10;
const length = 10;

const getProgression = () => {
  const divers = getRandomNum(minValue, maxValue);
  const step = getRandomNum(1, length);
  let changedValue = divers;
  const getFollowingValue = () => {
    changedValue += step;
    return changedValue;
  };

  return [divers, ...Array.from({ length: 9 }, getFollowingValue)];
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
