import * as readline from 'readline';

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function classificar(letra: string): void{

    switch(letra){
        case "a":
        case "e":
        case "i":
        case "o":
        case "u": 
            console.log("Sua letra é uma vogal");
            break;
        default:
            console.log("Sua letra é uma consoante");
    }
    leitor.close();
}

leitor.question("Digite uma letra: ", function(input1: string) {
  
    classificar(input1)

});
    