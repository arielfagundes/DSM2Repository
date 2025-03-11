var readline = require('readline');
var resp = "";
var leitor = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

leitor.question("Digite a quantidade de votos brancos: ", function(brancos: number) {
    leitor.question("Digite a quantidade de votos nulos: ", function(nulos: number) {
        leitor.question("Digite a quantidade de votos válidos: ", function(validos: number) {

    brancos = Number(brancos);
    nulos = Number(nulos);
    validos = Number(validos);

    const somaG: number = brancos + nulos + validos;
    const somaBN: number = brancos + nulos;
    const parc: number = (somaBN / somaG) * 100;

    if(parc >= 10){
        console.log("PREFEITO ELEITO!")
    }else{
        console.log("PREFEITO NÃO FOI ELEITO!")
    }

    leitor.close();

        });
    });
});




   
    
   
    
