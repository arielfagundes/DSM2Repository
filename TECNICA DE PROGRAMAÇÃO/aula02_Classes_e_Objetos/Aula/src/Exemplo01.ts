class Pessoa {
    nome:string;
    idade:number;

    constructor(a:string, b:number){
    this.nome = a;
    this.idade = b;
    }

    imprimir(msg: string){
    console.log(`${this.nome} possui ${this.idade} anos e come ${msg}`);
    }

}
    const x = new Pessoa("Ana",18); //new -> Operador de instanciamento, ele inicia o objeto   // x -> Objeto;
    const y = new Pessoa("Pedro",20);
    x.imprimir("Churrasco...");
    y.imprimir("Frango...");
    

