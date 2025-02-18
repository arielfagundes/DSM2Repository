class Retangulo {
    base: number;
    altura: number;

    constructor(base: number, altura: number){
        this.base = base;
        this.altura = altura;
    }

    area(): number {
        return this.base * this.altura
    }

    perimetro(): number {
        return 2 * this.base + 2 * this.altura;
    }
}

const area = new Retangulo(2, 3);
const areaEscrita = area.area();
console.log(`Área: ${areaEscrita}`);

const perimetro = new Retangulo(2, 3);
const areaPerimetro = perimetro.perimetro();
console.log(`Perímetro: ${areaPerimetro}`);