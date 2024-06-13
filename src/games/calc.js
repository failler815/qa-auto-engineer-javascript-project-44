import { randomNumber, runGame } from '../index.js';

const description = 'What is the result of the expression?';

const calculateOperation = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

export const expansionResult = () => {
  const randomNumber1 = randomNumber(0, 3);
  const randomNumber2 = randomNumber(0, 3);
  const operators = ['+', '-', '*'];
  const randomOperator = operators[randomNumber(0, operators.length)];
  const randomOperation = calculateOperation(
    randomNumber1,
    randomNumber2,
    randomOperator
  );
  const correctAnswer = randomOperation.toString();
  const question = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
  return { correctAnswer, question };
};
const calc = () => runGame(description, expansionResult);
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
