import { randomNumber, runGame } from "../index.js";

const progressionLenght = 10;
const description = "What number is missing in the progression?";

const makeProgression = () => {
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
  const progression = makeProgression();
  const randomDot = randomNumber(0, progressionLenght);
  const correctAnswer = progression[randomDot].toString();
  progression[randomDot] = "..";
  const question = progression;
  return { question, correctAnswer };
};
const progression = () => runGame(description, progressionFunction);
export default progression;
