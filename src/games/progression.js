import { randomNumber, mainFunctions } from "../index.js";

const progressionLenght = 10;
const description = "What number is missing in the progression?";

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
  const correctAnswer = progression[randomDot].toString();
  progression[randomDot] = "..";
  const question = progression;
  return { question, correctAnswer };
};
const progression = () => mainFunctions(description, progressionFunction);
export default progression;
