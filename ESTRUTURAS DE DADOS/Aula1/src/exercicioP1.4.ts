import PromptSync = require("prompt-sync");

const alfabeto: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const prompt = PromptSync();

// const parar:number = 5;


const letraR: string = prompt('Digite uma letra: ');

for(let i = 0; i < alfabeto.length; i++){

    if(letraR.length > 1){

        console.log('Escreva uma única letra válida');

    } if(letraR === alfabeto[i]) {

        if(letraR === 'a'){

            console.log(`A letra ${letraR} está na posição ${i + 1}. Antes não há nenhum letra e a letra depois é: ${alfabeto[i+1]}`);

        } else if (letraR === 'z') {

            console.log(`A letra ${letraR} está na posição ${i + 1}. Antes está a letra ${alfabeto[i-1]} e não há letra depois.`);

        }else{

            console.log(`A letra ${letraR} está na posição ${i + 1}. Antes está a letra ${alfabeto[i-1]} e a letra depois é: ${alfabeto[i+1]}`);

        }
    }
}



    



