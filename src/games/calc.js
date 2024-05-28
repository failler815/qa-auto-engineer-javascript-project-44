import readlineSync from 'readline-sync';
import { randomNumber,hello } from '../index.js';

const userName = hello();
console.log('What is the result of the expression?');

let correct = 0;
let uncorrect = 0;

export const expansionResult = () =>{
while (correct < 3 && uncorrect < 1) {
    const operators = ['+','-','*'];
    const randomNumber1 =randomNumber();
    const randomNumber2 =randomNumber();
    const randomOperator = operators[Math.floor(Math.random() * operators.length)];
    const randomOperation = `${randomNumber1} ${randomOperator} ${randomNumber2}`
    const correctAnswer = eval(randomOperation);
    console.log(`question: ${randomOperation}`);
    const yourAnswer = readlineSync.question('Your answer: ');
if (parseInt(result) === parseInt(yourAnswer)) {
    console.log('Correct!'); 
    correct++ 
} else {
console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`) ;
uncorrect++  
}
}
if (correct === 3) {console.log(`Congratulations, ${userName}!`)};
};

