class Circulo{
    raio: number;

    constructor(raio:number){
        this.raio = raio;
    }

    area(){
        const ar = Math.PI * (this.raio * this.raio);
        return ar
    }

    perimetro(){
        const per = 2 * Math.PI * this.raio; 
        return per
    }
}

const circulo = new Circulo(5);
console.log("Área:", circulo.area());
console.log("Perímetro:", circulo.perimetro());

