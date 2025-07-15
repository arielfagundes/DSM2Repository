import * as readline from 'readline';

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function classificar(nome: string, categoria:string, salario: number): void{

    switch(categoria){
        case "A":
        case "C":
        case "F":
        case "H":
            const novoSalario:number = salario + (salario * 10) / 100;
            console.log(`${nome} passará a receber ${novoSalario}, aumentando seu salário em 10%`);
            break;
        case "B":
        case "D":
        case "E":
        case "I":
        case "J":
        case "T":
            const novoSalario2:number = salario + (salario * 15) / 100;
            console.log(`${nome} passará a receber ${novoSalario2}, aumentando seu salário em 15%`);
            break;
        case "K":
        case "R":
            const novoSalario3:number = salario + (salario * 25) / 100;
            console.log(`${nome} passará a receber ${novoSalario3}, aumentando seu salário em 25%`);
            break;
        case "L":
        case "M":
        case "N":
        case "O":
        case "P":
        case "Q":
        case "S":
            const novoSalario4:number = salario + (salario * 35) / 100;
            console.log(`${nome} passará a receber ${novoSalario4}, aumentando seu salário em 35%`);
            break;
        default:
            const novoSalario5:number = salario + (salario * 50) / 100;
            console.log(`${nome} passará a receber ${novoSalario5}, aumentando seu salário em 50%`);    
    }
    leitor.close();
}

leitor.question("Digite seu nome: ", function(input1: string) {
    leitor.question("Agora sua categoria: ", function(input2: string) {
        leitor.question("Digite seu salário: ", function(input3: string) {

    const num = Number(input3);
    const categoria = input2.toLocaleUpperCase;

    classificar(input1, input2, num);

        });
    });
});