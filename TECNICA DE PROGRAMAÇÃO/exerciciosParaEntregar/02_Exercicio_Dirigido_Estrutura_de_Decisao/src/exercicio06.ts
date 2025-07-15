var readline = require('readline');
var resp = "";
var leitor = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

leitor.question("Digite seu salário: ", function(salario: number) {
    

    salario = Number(salario);

    if(salario <= 650){

        const novoSalario: number = salario + (salario * 10)/100;
        console.log(`Seu novo salário com o reajuste de 10% é: ${novoSalario}`);

    }else{
        const novoSalario: number = salario + (salario * 5)/100;
        console.log(`Seu novo salário com o reajuste de 5% é: ${novoSalario}`);
    }

    leitor.close();
});

