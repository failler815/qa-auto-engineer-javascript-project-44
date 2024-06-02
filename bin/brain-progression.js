import readlineSync from "readline-sync";
import { randomNumber, hello, mainFunctions } from "../src/index.js";

const userName = hello();

const progressionLenght = 10;
console.log("What number is missing in the progression?");

const ProgressionAr = () => {
  let progressionNum = randomNumber(0, 50);
  const step = randomNumber(2, 4);
  const progression = [];

  for (let i = 0; i < progressionLenght; i += 1) {
    progression.push(progressionNum);
    progressionNum += step;
  }
  return progression;
};

export const progressionFunction = () => {
  const progression = ProgressionAr();
  const randomDot = randomNumber(0, progressionLenght);
  const correctAnswer = progression[randomDot];
  progression[randomDot] = "..";
  console.log(`question: ${progression}`);
  const yourAnswer = parseInt(readlineSync.question("Your answer: "));
  return { yourAnswer, correctAnswer };
};
mainFunctions(progressionFunction, userName);
