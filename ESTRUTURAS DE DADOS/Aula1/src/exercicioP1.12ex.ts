
export function maior(a: number, b: number):string{
    
    if(a <= b){
        return `${a} é menor ou igual a ${b}`;
    // biome-ignore lint/style/noUselessElse: <explanation>
    }else{
        return `${a} é maior que ${b}`;
    }
}





