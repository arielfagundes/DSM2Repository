import * as prompt_sync from 'prompt-sync';

const prompt = prompt_sync();

const nome: string = (prompt("Qual seu nome?"));

switch (nome){
    case "Ariel":
        console.log("Correto!")
        break;
    case "Marcos":
        console.log("Errado!")
        break;
    case "Fulano":
        console.log("Errado!")
        break;
    default:
        console.log("Seu nome não foi encontrado!")
}
