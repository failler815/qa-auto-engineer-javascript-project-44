import readlineSync from "readline-sync";
export const randomNumber = (minRange, maxRange) => {
  const randomNumber = Math.floor(
    Math.random() * (maxRange - minRange) + minRange
  );
  return randomNumber;
};

export const hello = () => {
  console.log(`Welcome to the Brain Games!`);
  const name = readlineSync.question("May I have your name?: ");
  console.log(`Hello, ${name}!`);
  return name;
};

export const mainFunctions = (fn, userName) => {
  let correct = 0;
  let uncorrect = 0;
  while (correct < 3 && uncorrect < 1) {
    const { yourAnswer, correctAnswer } = fn();
    if (correctAnswer === yourAnswer) {
      console.log("Correct!");
      correct++;
    } else {
      console.log(
        `'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      uncorrect++;
    }
    if (correct === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

/*
export const getQuestionAndAnswer = (randomFunction) => {
while (correct < 3 && uncorrect < 1) {
console.log(`Question: ${randomNumberInt}`);
const yourAnswer = readlineSync.question('Your answer: ');
if (yourAnswer === correctAnswer) {
    correct++;
    console.log('Correct!')
} else {
    uncorrect++ 
    console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`) ;
}
if (correct === 3) {console.log(`Congratulations, ${userName}!`)}
};
};
*/
