
class Questao {
    enunciado: string;
    valor: number;

    constructor(enunciado: string, valor: number){
        this.enunciado = enunciado;
        this.valor = valor;
    }

    print(): void{
        console.log(`A questão: "${this.enunciado}" tem o valor de: ${this.valor}`)
    }

}

const questao = new Questao("O que é um array?", 0.5);
questao.print();
