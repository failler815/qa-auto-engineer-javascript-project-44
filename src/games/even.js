import { randomNumber, runGame } from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (number) => number % 2 === 0;

export const evenFunction = () => {
  const randomNumberInt = randomNumber(0, 10);
  const question = randomNumberInt;
  const correctAnswer = isEven(randomNumberInt) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const even = () => runGame(description, evenFunction);
export default even;
