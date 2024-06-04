import { randomNumber, mainFunctions } from "../index.js";

const description = "Find the greatest common divisor of given numbers.";
const isNod = (firstCase, secondCase) => {
  if (firstCase === 0 || secondCase === 0) {
    return firstCase + secondCase;
  } else if (firstCase > secondCase) {
    return isNod(firstCase - secondCase, secondCase);
  } else {
    return isNod(firstCase, secondCase - firstCase);
  }
};

export const findNOD = () => {
  const firstNumber = randomNumber(0, 10);
  const secondNumber = randomNumber(0, 10);
  const correctAnswer = isNod(firstNumber, secondNumber).toString();
  const question = `${firstNumber} ${secondNumber}`;
  return { correctAnswer, question };
};

const nod = () => mainFunctions(description, findNOD);
export default nod;

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
