class Retangulo {
    base: number;
    altura: number;
    constructor(base: number, altura: number) {
        this.base = base;
        this.altura = altura;
    }
    area(): number {
        return this.base * this.altura;
    }
    perimetro(): number {
        return 2 * this.base + 2 * this.altura;
    }
}

const ret =  new Retangulo(2,3);

console.log("-- Retângulo --");
console.log("Base.....: "+ret.base);
console.log("Altura...: "+ret.altura);
console.log("Área.....: "+ret.area());
console.log("Perimêtro: "+ret.perimetro());