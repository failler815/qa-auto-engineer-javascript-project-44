import readlineSync from "readline-sync";
export const randomNumber = (minRange, maxRange) => {
  const randomNumber = Math.floor(
    Math.random() * (maxRange - minRange) + minRange
  );
  return randomNumber;
};

export const mainFunctions = (description, generateRound) => {
  console.log(`Welcome to the Brain Games!`);
  const name = readlineSync.question("May I have your name?: ");
  console.log(`Hello, ${name}!`);

  console.log(description);

  let correct = 0;
  let uncorrect = 0;
  while (correct < 3 && uncorrect < 1) {
    const rand = generateRound();
    const { question, correctAnswer } = rand;
    console.log(`Question: ${question}`);
    const yourAnswer = readlineSync.question("Your answer: ");
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
      console.log(`Congratulations, ${name}!`);
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
