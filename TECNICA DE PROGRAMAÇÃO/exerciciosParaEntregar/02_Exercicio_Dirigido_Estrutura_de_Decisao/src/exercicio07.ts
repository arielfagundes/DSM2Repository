import * as readline from 'readline';

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function classificar(ladoUm: number, ladoDois: number, ladoTres: number): void{

    if(ladoUm < ladoDois + ladoTres && ladoDois < ladoUm + ladoTres && ladoTres < ladoUm + ladoDois){
        if(ladoUm === ladoDois && ladoUm === ladoTres){
    
            console.log("Suas medidas formam um Triângulo Equilátero!");
    
        }else if(ladoUm === ladoDois || ladoUm === ladoTres || ladoDois === ladoTres){
            
            console.log("Suas medidas formam um Triângulo Isósceles");
    
        }else{
            
            console.log("Suas medidas formam um Triângulo Escaleno");
    
        }
    }else{
        console.log("Suas medidas não formam um triângulo")
    }
    leitor.close();
}

leitor.question("1° LADO: ", function(input1: string) {
    leitor.question("2° LADO: ", function(input2: string) {
        leitor.question("3° LADO: ", function(input3: string) {

    const ladoUm = Number(input1);
    const ladoDois = Number(input2);
    const ladoTres = Number(input3);

    classificar(ladoUm, ladoDois, ladoTres)


        });
    });
});





