class Aleatorio {

get(): number {
    return Math.floor(Math.random() * 100 + 1);
}

}

const sorteio = new Aleatorio();

let i:number;

for(i = 0; i < 5; i++){
    console.log(sorteio.get());
}
