class Filme {
    titulo: string;
    duracao: number;

    constructor(titulo: string, duracao: number){
        this.titulo = titulo;
        this.duracao = duracao;
    }

    print(): void {
        console.log(`O filme ${this.titulo} possui ${this.duracao}`)
    }
}

const title = new Filme("De volta para o futuro", 116);
title.print();

const title2 = new Filme("Matrix", 136);
title2.print();



