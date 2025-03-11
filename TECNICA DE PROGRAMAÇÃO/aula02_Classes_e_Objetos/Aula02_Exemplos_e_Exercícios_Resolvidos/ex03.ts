class Aleatorio {
    get(): number {
        return Math.floor(Math.random() * 100 + 1);
    }
}

const numero = new Aleatorio();

for(let x = 1;x<6;x++){
    console.log(numero.get());
}
