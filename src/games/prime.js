import readlineSync from "readline-sync";
import { randomNumber, hello, mainFunctions } from "../index.js";

const userName = hello();

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const isSimple = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= num - 1; i += 1)
    if (num % i === 0) {
      return false;
    }
  return true;
};

export const primeFunction = () => {
  const randomNumberInt = randomNumber(1, 10);
  console.log(`Question: ${randomNumberInt}`);
  const correctAnswer = isSimple(randomNumberInt) ? "yes" : "no";
  const yourAnswer = readlineSync.question("Your answer: ");
  return { yourAnswer, correctAnswer };
};

mainFunctions(primeFunction, userName);
