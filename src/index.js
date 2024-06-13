import readlineSync from "readline-sync";
export const randomNumber = (minRange, maxRange) => {
  const randomNumber = Math.floor(
    Math.random() * (maxRange - minRange) + minRange
  );
  return randomNumber;
};

export const runGame = (description, generateRound) => {
  console.log(`Welcome to the Brain Games!`);
  const name = readlineSync.question("May I have your name?: ");
  console.log(`Hello, ${name}!`);

  console.log(description);

  for (let i = 0; i < 3; i += 1) {
    const rand = generateRound();
    const { question, correctAnswer } = rand;
    console.log(`Question: ${question}`);
    const yourAnswer = readlineSync.question("Your answer: ");
    if (correctAnswer === yourAnswer) {
      console.log("Correct!");
    } else {
      console.log(
        `'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
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
};ыz
*/
