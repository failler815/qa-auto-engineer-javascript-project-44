import { randomNumber, mainFunctions } from "../index.js";

const description = "What is the result of the expression?";

export const expansionResult = () => {
  const operators = ["+", "-", "*"];
  const randomNumber1 = randomNumber(0, 10);
  const randomNumber2 = randomNumber(0, 10);
  const randomOperator =
    operators[Math.floor(Math.random() * operators.length)];
  const randomOperation = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
  const correctAnswer = eval(randomOperation).toString();
  const question = randomOperation;
  return { correctAnswer, question };
};
const calc = () => mainFunctions(description, expansionResult);
export default calc;

/*
    while (correct < 3 && uncorrect < 1) {
    const operators = ["+", "-", "*"];
    const randomNumber1 = randomNumber();
    const randomNumber2 = randomNumber();
    const randomOperator =
      operators[Math.floor(Math.random() * operators.length)];
    const randomOperation = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
    const correctAnswer = eval(randomOperation);
    console.log(`question: ${randomOperation}`);
    const yourAnswer = readlineSync.question("Your answer: ");
    if (parseInt(correctAnswer) === parseInt(yourAnswer)) {
      console.log("Correct!");
      correct++;
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
expansionResult();
*/
