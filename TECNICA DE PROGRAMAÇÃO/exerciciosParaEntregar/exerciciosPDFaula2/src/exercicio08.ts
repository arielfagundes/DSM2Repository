
class Point {
    x: number;
    y: number;

    constructor(x:number, y: number){
        this.x = x;
        this.y = y;
    }

    distance(ponto: Point){
        const dx = ponto.x - this.x;
        const dy = ponto.y - this.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}

class Rectangle{
    inferiorEsquerdo: Point;
    superiorDireito: Point;

    constructor(ie: Point, sd: Point){
        this.inferiorEsquerdo = ie;
        this.superiorDireito = sd;
    }

    area(){
        const base = this.superiorDireito.x - this.inferiorEsquerdo.x;
        const altura = this.superiorDireito.y - this.inferiorEsquerdo.y;
        
        const ar = (base * altura)

        return ar;
    }
    
}

const ie = new Point(1,2);
const sd = new Point(3,5);

const r = new Rectangle(ie, sd);
console.log("Área:", r.area());
