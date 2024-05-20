import readlineSync from 'readline-sync';
import name from "../src/cli.js" ;
console.log(`Hello, ${name}!`); 
console.log('What is the result of the expression?');

let correct = 0;
let uncorrect = 0;

const expansionResult = () =>{
while (correct < 3 && uncorrect < 1) {
    const operators = ['+','-','*'];
    const randomNumber1 =(Math.round(Math.random()* 10));
    const randomNumber2 =(Math.round(Math.random()* 10));
    const randomOperator = operators[Math.floor(Math.random() * operators.length)];
    const randomOperation = `${randomNumber1} ${randomOperator} ${randomNumber2}`
    const result = eval(randomOperation);
    console.log(`question: ${randomOperation}`);
    const yourAnswer = readlineSync.question('Your answer: ');
if (parseInt(result) === parseInt(yourAnswer)) {
    console.log('Correct!'); 
    correct++ 
} else {
console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${eval(randomOperation)}'.`) ;
uncorrect++  
}
}
if (correct === 3) {console.log(`Congratulations, ${name}!`)};
};

expansionResult();
