import * as prompt_sync from 'prompt-sync';

const prompt = prompt_sync();

const num1: number = Number(prompt('Número 1: '));
const num2: number = Number(prompt('Número 2: '));

function maior(a: number, b: number){
    /* USANDO IF/ELSE
    if(a <= b){
        return `${a} é menor ou igual a ${b}`;
    // biome-ignore lint/style/noUselessElse: <explanation>
    }else{
        return `${a} é maior que ${b}`;
    }
    */ //USANDO SWITCH CASE
    switch(a <= b){
        case true: 
            console.log(`${a} é menor ou igual a ${b}`);
            break;
        case false: 
            console.log(`${a} é maior que ${b}`);
            break;
        default:
            break;
    }
}

console.log(maior(num1, num2));

