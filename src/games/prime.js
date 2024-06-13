import { randomNumber, runGame } from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isSimple = (number) => {
  for (let a = 2; a < number; a += 1) {
    if (number % a === 0) {
      return false;
    }
  }
  return true;
};


export const primeFunction = () => {
  const randomNumberInt = randomNumber(2, 10);
  const question = randomNumberInt;
  const correctAnswer = isSimple(randomNumberInt) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const prime = () => runGame(description, primeFunction);
export default prime;
