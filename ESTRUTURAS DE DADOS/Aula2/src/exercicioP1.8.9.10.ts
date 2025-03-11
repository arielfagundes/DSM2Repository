//EXERCÍCIO 8
console.log('DE 1 A 100 múltiplos DE 3 - OPÇÃO 1:')

for(let i = 1; i < 100; i += 3){
    console.log(i);
}


console.log('DE 1 A 100 múltiplos DE 3 - OPÇÃO 2:')
for(let i = 1; i < 101; i++){
    if (i % 3 === 0) {
        console.log(`O número ${i} é divisível por 3...`)
    }
}



//EXERCÍCIO 9
let i:number;
i = 100

while(i > 0){
    if (i % 3 === 0) {
        console.log(`O número ${i} é divisível por 3`)
    }
    i--;
}

//EXERCÍCIO 10
do{
    if (i % 3 === 0) {
        console.log(i)
    }
    i--;
}while(i > 0)
