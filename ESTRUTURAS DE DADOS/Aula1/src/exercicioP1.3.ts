import * as prompt_sync from 'prompt-sync';

const prompt = prompt_sync();

const num1: number = Number(prompt('Número 1: '));
const num2: number = Number(prompt('Número 2: '));

function maior(a: number, b: number){
    return a > b? a : b;
}

console.log(`O maior número entre ${num1} e ${num2} é: `,  maior(num1, num2));
