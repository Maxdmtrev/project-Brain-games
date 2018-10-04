import readlineSync from 'readline-sync';
import { getRandomNum, isEvenNum } from './func';

const minValue = 1;
const maxValue = 100;
const countAttempts = 3;

const makeEvent = () => {
  console.log('Welcome to Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  let i = 0;
  for (i; i < countAttempts; i += 1) {
    const question = getRandomNum(minValue, maxValue);
    console.log(`Question: ${question}`);
    const answer = isEvenNum(question) ? 'yes' : 'no';
    const userAnswer = readlineSync.question('Your answer: ');
    if (answer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
  if (i === countAttempts) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default makeEvent;
