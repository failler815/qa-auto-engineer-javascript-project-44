import readlineSync from 'readline-sync';
import name from "../src/cli.js" ;

console.log(`Hello, ${name}!`); 
console.log('Answer "yes" if the number is even, otherwise answer "no"');


const isEven = (number) => number % 2 === 0;


const getQuestionAndAnswer = () => {
let correct = 0;
let uncorrect = 0;

while (correct < 3 && uncorrect < 1) {
const randomNumberInt = (Math.round(Math.random()* 100));
console.log(`Question: ${randomNumberInt}`);
const yourAnswer = readlineSync.question('Your answer: ');
if ((isEven(randomNumberInt) && yourAnswer === 'yes') || (!isEven(randomNumberInt) && yourAnswer === 'no'))
    {
    console.log('Correct!');
    correct++;
} else {
    console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${isEven(randomNumberInt) ? 'yes' : 'no'}'.`);
uncorrect++ 
}
}
if (correct === 3) {console.log(`Congratulations, ${name}!`)};
};
getQuestionAndAnswer();






