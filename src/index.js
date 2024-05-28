import readlineSync from 'readline-sync';
export const randomNumber = () => Math.round(Math.random()* 100);

export const hello = () => {
    console.log(`Welcome to the Brain Games!`);
    const name = readlineSync.question('May I have your name?: ');
    console.log(`Hello, ${name}!`);
    return name;
};


/*
export const short = () => {
while (correct < 3 && uncorrect < 1)
if (yourAnswer === correctAnswer) {
    correct++;
    console.log('Correct!')
} else {
    uncorrect++ 
    console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`) ;
}
if (correct === 3) {console.log(`Congratulations, ${userName}!`)}
};
*/