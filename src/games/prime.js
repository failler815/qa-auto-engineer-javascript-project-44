import { randomNumber, runGame } from '../index.js';

const description =
  'Answer "yes" if given number is prime. Otherwise answer "no".';

const isSimple = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= num - 1; i += 1) {
    if (num % i === 0) {
      return false;
    }
    return true;
  }
};

export const primeFunction = () => {
  const randomNumberInt = randomNumber(1, 10);
  const question = randomNumberInt;
  const correctAnswer = isSimple(randomNumberInt) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const prime = () => runGame(description, primeFunction);
export default prime;
