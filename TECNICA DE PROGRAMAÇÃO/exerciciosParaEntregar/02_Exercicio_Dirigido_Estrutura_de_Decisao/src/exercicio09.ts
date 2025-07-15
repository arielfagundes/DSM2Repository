import * as readline from 'readline';

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function classificar(numero: number): void{

    switch(numero){
        case 1:
            console.log("JANEIRO");
            break;
        case 2:
            console.log("FEVEREIRO");
            break;
        case 3:
            console.log("MARÇO");
            break;
        case 4:
            console.log("ABRIL");
            break;
        case 5: 
            console.log("MAIO");
            break;
        case 6:
            console.log("JUNHO");
            break;
        case 7:
            console.log("JULHO");
            break;
        case 8:
            console.log("AGOSTO");
            break;
        case 9:
            console.log("SETEMBRO");
            break;
        case 10:
            console.log("OUTUBRO");
            break;
        case 11:
            console.log("NOVEMBRO");
            break;
        default:
            console.log("DEZEMBRO");
    }
    leitor.close();
}

leitor.question("Digite um número para representar um mês do ano: ", function(input1: string) {
    const num = Number(input1);

    classificar(num)

});


