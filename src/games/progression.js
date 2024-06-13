import { randomNumber, runGame } from '../index.js';

const progressionLenght = 10;
const description = 'What number is missing in the progression?';

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
  const randomDotIndex = randomNumber(0, progressionLenght);
  const hiddenElement = progression[randomDotIndex];
  progression[randomDotIndex] = '..';
  const question = progression.join(' ');
  const correctAnswer = hiddenElement.toString();
  return { question, correctAnswer };
};
const progression = () => runGame(description, progressionFunction);
export default progression;
