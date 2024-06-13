import { randomNumber, runGame } from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (number) => number % 2 === 0;

export const evenFunction = () => {
  const randomNumberInt = randomNumber(0, 10);
  const question = randomNumberInt;
  const correctAnswer = isEven(randomNumberInt) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const even = () => runGame(description, evenFunction);
export default even;

/*
 const getQuestionAndAnswer = () => {
    let correct = 0;
    let uncorrect = 0;
    while (correct < 3 && uncorrect < 1) {
        const randomNumberInt = randomNumber();
        console.log(`Question: ${randomNumberInt}`);
        const yourAnswer = readlineSync.question('Your answer: ');
        const correctAnswer = isEven(randomNumberInt) ? 'yes': 'no';
        if (correctAnswer === yourAnswer)  {
            console.log('Correct!');
            correct++;
        } else {
            console.log(`'${yourAnswer}' is wrong answer ;(. 
                Correct answer was '${correctAnswer}'.`);
            uncorrect++;
    }
    if (correct === 3) {console.log(`Congratulations, ${userName}!`);
    }
};
};
getQuestionAndAnswer();
*/

/*
сonst mainFunction = () => {
    const randomNumberInt = randomNumber();
    const correctAnswer = isEven(randomNumberInt) ? 'yes': 'no';
    return [randomNumberInt,correctAnswer]
    };
*/
