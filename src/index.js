import readlineSync from 'readline-sync';
export const randomNumber = (minRange, maxRange) => {
  const randomNumber = Math.floor(
    Math.random() * (maxRange - minRange) + minRange
  );
  return randomNumber;
};

export const runGame = (description, generateRound) => {
  console.log(`Welcome to the Brain Games!`);
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);

  console.log(description);

  for (let i = 0; i < 3; i += 1) {
    const { question, correctAnswer } = generateRound();
    console.log(`Question: ${question}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === yourAnswer) {
      console.log('Correct!');
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
