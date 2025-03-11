class Operar {
    x?: number;
    y?: number;

    constructor(x?:number, y?:number){
        this.x = x;
        this.y = y;
    }

    somar(): number | undefined{
        if(this.x !== undefined && this.y !== undefined){
            return this.x + this.y;
        }
    }

}

const a1 = new Operar();
console.log("x + y:", a1.somar());
const b2 = new Operar(5);
console.log("x + y:", b2.somar());
const c3 = new Operar(5,3);
console.log("x + y:", c3.somar());