
const peso: number = 85;
const altura: number = 1.74;

const imc: number = peso / (altura**2);

console.log(`IMC real: ${imc}`);
console.log(`IMC arredondado: ${Math.floor(imc)}`);

