import PromptSync from "prompt-sync";

const prompt = PromptSync();

class Numbers {
    num1: number;
    num2: number;
    num3: number;

    constructor(one: number, two: number, three: number){
        this.num1 = one;
        this.num2 = two;
        this.num3 = three;
    }

    imprimir(msg: string){
        console.log(`The sum of ${this.num1} + ${this.num2} + ${this.num3} is: ${this.num1 + this.num2 + this.num3}. ${msg}.`)
    }
}

const a = Number(prompt('Escreva o primeiro número: '));
const b = Number(prompt('Escreva o segundo número: '));
const c = Number(prompt('Escreva o terceiro número: '));

const xy = new Numbers(a, b, c); //new -> Operador de instanciamento, ele inicia o objeto   // xy -> Objeto;
const yx = new Numbers(1, 1, 3); //new -> Operador de instanciamento, ele inicia o objeto   // xy -> Objeto;

xy.imprimir("It's over");
yx.imprimir("It's over");



