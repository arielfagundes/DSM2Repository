

class Numero {
    nros: number[] = [];

    //class sem constructor

    add(nro: number): void {

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

        //iteração com início em 0 desnecessário
        for (let i = 1; i < this.nros.length; i++) {

            if (this.nros[i] > maior) {
            maior = this.nros[i];
            }
        }
    return maior;
    }
}

const novosNumeros = new Numero();

for(let i = 0; i < 5; i++){
    novosNumeros.add(Math.floor(Math.random() * 100));
    console.log(novosNumeros)
}

console.log(`Somatório: ${novosNumeros.sum()}`);
console.log(`Somatório: ${novosNumeros.max()}`);


