const n1: number = 7.5;
const n2: number = 2;
const n3: number = 9.2;

const media: number = (n1 + n2 + n3) / 3;

console.log(`Sua Média Escolar é: ${Number(media.toFixed(2))}`);

if (media > 6) {
    console.log("VOCÊ ESTÁ APROVADO!");
} else {
    console.log("VOCÊ ESTÁ REPROVADO!");
}

