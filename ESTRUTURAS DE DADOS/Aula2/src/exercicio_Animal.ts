import PromptSync = require("prompt-sync");



class Animal {
    nome: string;
    raca: string;
    idade: number;
    cor: string;

    constructor(nome:string, raca: string, idade: number, cor: string){
        this.nome = nome
        this.raca = raca;
        this.idade = idade;
        this.cor = cor;
    }

    action(valor: string){
        console.log(valor);
    }
}

const prompt = PromptSync();

const nome:string = prompt('Qual nome do seu animalzinho? ')
const raca:string = prompt(`Qual a raça do(a) ${nome}? `);
const idade:number = Number(prompt('Idade: '));
const cor:string = prompt('Cor: ');


const animal_1 = new Animal(nome, raca, idade, cor);
console.log(`${animal_1.nome} é da raça ${animal_1.raca}, tem ${animal_1.idade} ano(s) e é ${animal_1.cor}`);

console.log('Nome: ', typeof(animal_1.nome));
console.log('Raca: ' , typeof(animal_1.raca));
console.log('Idade: ', typeof(animal_1.idade));
console.log('Cor: ', typeof(animal_1.cor));

const acao:number = Number(prompt(`O que você gostaria que ${animal_1.nome} fizesse: Latisse(1) ou miasse?(2) `));

const result1:string = acao === 1 ? "au au au" : "miau miau miau"

animal_1.action(result1);