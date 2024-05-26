import readlineSync from 'readline-sync';
export const randomNumber = () => Math.round(Math.random()* 100);

export const hello = () => {
    console.log(`Welcome to the Brain Games!`);
    const name = readlineSync.question('May I have your name?: ');
    console.log(`Hello, ${name}!`);
    return name;
};