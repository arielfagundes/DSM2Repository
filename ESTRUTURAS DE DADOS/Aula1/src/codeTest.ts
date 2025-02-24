//EXEMPLO 1 TESTE

import PromptSync = require("prompt-sync")


type Cachorro = {
    raca: string,
    porte: string,
    pelagem: string,
    idade: number,
    nome: string

}

const cachorro_1: Cachorro = {
    raca: "Doberman",
    nome: "Alex",
    idade: 29,
    porte: "Medio",
    pelagem: "raspada"

}
console.log('')
console.log("EXEMPLO 1 TESTE:")

console.log(typeof(cachorro_1));
console.log(cachorro_1.raca);


//EXEMPLO 2 TESTE
console.log('')
console.log("EXEMPLO 2 TESTE:")



// biome-ignore lint/style/useConst: <explanation>
let a: number;
const b: number = 0;

a = b > 0 ? 1 : 3;

const c = a + b;

console.log(c);


//EXEMPLO 3 TESTE
console.log('')
console.log("EXEMPLO 3.a TESTE:")


const x : number[] = [3, 2, 5, 7, 9] 

x.forEach((valor, indice) => {

    console.log(`Índice: ${indice}: ${valor}`)

})

//segunda maneira de fazer passando uma função tratadora
console.log('')
console.log("EXEMPLO 3.b TESTE:")

x.forEach(tratador) 
function tratador(valor: number, indice: number){
   console.log(valor)
}


console.log('')
console.log("EXEMPLO 4 TESTE:")

type Endereco = {
    logradouro: string,
    numero: number,
    complemento: string,
    cidade: string,
    estado: string
}

type Pessoa = {
    nome: string,
    idade: number,
    endereco: Endereco,
    peso: number,
    altura: number
}

const pessoa_1: Pessoa = {
    nome: 'Ariel',
    idade: 29,
    endereco: {
        logradouro: 'Rua Fontinele', 
        numero: 208, 
        complemento: 'Apartamento 44 BL A', cidade: 'Jacareí',
        estado: 'SP'
    },
    altura: 174,
    peso: 85
}

//para propriedades
for(const p in pessoa_1){
    console.log(p)
}




console.log('')
console.log("EXEMPLO 5 TESTE:")



