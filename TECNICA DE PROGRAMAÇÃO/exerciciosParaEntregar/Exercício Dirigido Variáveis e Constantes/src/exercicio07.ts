const eleitores: number = 10234;

const votosBrancos: number = 2420;
const votosNulos: number = 3080;
const votosValidos: number = eleitores - votosBrancos - votosNulos;

//EXECUÇÃO
const porcentagemVB: number = (votosBrancos / eleitores) * 100;
const porcentagemVN: number = (votosNulos / eleitores) * 100;
const porcentagemVV: number = (votosValidos / eleitores) * 100;

console.log(`A porcentagem dos votos Brancos é: ${porcentagemVB.toFixed(2)}%`);
console.log(`A porcentagem dos votos Nulos é: ${porcentagemVN.toFixed(2)}%`);
console.log(`A porcentagem dos votos Válidos é: ${porcentagemVV.toFixed(2)}%`);





