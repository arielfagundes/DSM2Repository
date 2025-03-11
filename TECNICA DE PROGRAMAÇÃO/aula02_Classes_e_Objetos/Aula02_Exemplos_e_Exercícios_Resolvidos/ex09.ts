class Numero {
    nros: number[] = [];

    add(nro: number): void {
        //adiciona o nro no final do array
        this.nros.push(nro);
    }

    sum(): number {
        let s = 0;
        for (let i = 0; i < this.nros.length; i++) {
            s += this.nros[i];
        }
        return s;
    }

    max() {
        let maior = this.nros[0];
        for (let i = 0; i < this.nros.length; i++) {
            if (this.nros[i] > maior) {
                maior = this.nros[i];
            }
//            console.log("maior= ",maior,"| i= ",i,"| nros[",i,"]= ",this.nros[i]) // Teste de Mesa
        }
        return maior;
    }
}

const num = new Numero();

num.add(8);
num.add(2);
num.add(9);
num.add(4);
num.add(5);

console.log("Somatório: ",num.sum());
console.log("Maior....: ",num.max());





