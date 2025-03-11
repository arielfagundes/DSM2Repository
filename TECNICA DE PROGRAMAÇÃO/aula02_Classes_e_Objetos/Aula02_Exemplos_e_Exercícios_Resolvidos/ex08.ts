class Point{
    x:number;
    y:number;
    n:string;

    constructor(x:number,y:number,n:string){
        this.x = x;
        this.y = y;
        this.n = n;
        console.log("Point: ",this.n,"x= ",this.x,"| y= ",this.y);
    }

    distance(ponto:Point): number{
        return Math.sqrt(Math.pow((ponto.x-this.x),2)+Math.pow((ponto.y-this.y),2));   
    }
}

class Rectangle{
    ie:Point;
    sd:Point;

    constructor(ie:Point,sd:Point){
        this.ie = ie;
        this.sd =sd;
    }

    area():number{
        const base:number = this.sd.x - this.ie.x;
        const altura:number = this.sd.y - this.ie.y;
        console.log("Base: ",base);
        console.log("Altura: ",altura);
        return base*altura;
    }
}

const sd = new Point(3,5,"sd");
const ie = new Point(1,2,"ie");

//observe que o construtor da classe Rectangle
//recebe dois objetos do tipo Point como parâmetro

const r = new Rectangle(ie,sd);

console.log("Área:", r.area());
