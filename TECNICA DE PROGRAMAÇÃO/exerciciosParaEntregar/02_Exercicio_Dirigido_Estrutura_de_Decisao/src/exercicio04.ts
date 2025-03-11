var readline = require('readline');
var resp = "";
var leitor = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

leitor.question("Digite sua idade em anos: ", function(answer:number) {

 var resp = answer;

 if (resp <= 10) {
    console.log("CRIANÇA")
 }else if(resp <= 13){
    console.log("PRÉ-ADOLESCENTE")
 }else if(resp <= 17){
    console.log("ADOLESCENTE")
 }else if(resp <= 59){
    console.log("ADULTO")
 }else if(resp >= 60){
    console.log("IDOSO")
 }else{
    console.log("{ERROR} Entre com um número!");
 }

 leitor.close();

});


