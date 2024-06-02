import readlineSync from "readline-sync";
import { randomNumber, hello, mainFunctions } from "../index.js";

const userName = hello();
console.log("Find the greatest common divisor of given numbers.");
const nod = (firstCase, secondCase) => {
  if (firstCase === 0 || secondCase === 0) {
    return firstCase + secondCase;
  } else if (firstCase > secondCase) {
    return nod(firstCase - secondCase, secondCase);
  } else {
    return nod(firstCase, secondCase - firstCase);
  }
};

export const findNOD = () => {
  const firstNumber = randomNumber(0, 10);
  const secondNumber = randomNumber(0, 10);
  const correctAnswer = parseInt(nod(firstNumber, secondNumber));
  console.log(`Question: ${firstNumber} ${secondNumber}`);
  const yourAnswer = parseInt(readlineSync.question("Your answer: "));
  return { correctAnswer, yourAnswer };
};
mainFunctions(findNOD, userName);

/*
export const findNOD = () => {
  while (correct < 3 && uncorrect < 1) {
    const firstNumber = randomNumber();
    const secondNumber = randomNumber();
    const correctAnswer = nod(firstNumber, secondNumber);
    console.log(`Question: ${firstNumber} ${secondNumber}`);
    const yourAnswer = readlineSync.question("Your answer: ");
    if (parseInt(yourAnswer) === parseInt(nod(firstNumber, secondNumber))) {
      correct++;
      console.log("Correct!");
    } else {
      console.log(
        `'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      uncorrect++;
    }
  }
  if (correct === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
findNOD();
*/
