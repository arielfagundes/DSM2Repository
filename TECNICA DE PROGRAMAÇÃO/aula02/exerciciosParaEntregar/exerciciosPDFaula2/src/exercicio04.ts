class Carro{

    marca: string = '';
    modelo: string = '';

    setMarca(marca: string): void{
        this.marca = marca;
    }

    setModelo(modelo: string): void{
        this.modelo = modelo;
    }

    print(): void{
        console.log(`${this.marca}: ${this.modelo}`)
    }
}

const modelo1 = new Carro();
modelo1.setMarca("VW");
modelo1.setModelo("Gol");
modelo1.print();

const modelo2 = new Carro();
modelo2.setMarca("Fiat");
modelo2.setModelo("Uno");
modelo2.print();
