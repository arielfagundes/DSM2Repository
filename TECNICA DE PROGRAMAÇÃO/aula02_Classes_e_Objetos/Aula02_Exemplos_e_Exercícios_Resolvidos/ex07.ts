class Ponto{
    x:number;
    y:number;
    n:string;

    constructor(x:number,y:number,n:string){
        this.x = x;
        this.y = y;
        this.n = n;
        console.log("10- Ponto: ",this.n,"x= ",this.x,"| y= ",this.y);
    }

    distancia(ponto:Ponto): number{
        return Math.sqrt(Math.pow((ponto.x-this.x),2)+Math.pow((ponto.y-this.y),2));   
    }
}

const ponto1 = new Ponto(3,5,"ponto1");
const ponto2 = new Ponto(1,2,"ponto2");

console.log("\nPonto2 x= ",ponto2.x);
console.log("Ponto2 y= ",ponto2.y);

//observe que passamos como parâmetro um objeto do tipo Ponto

console.log("\nDistância:", ponto1.distancia(ponto2));

console.log(ponto1.x);