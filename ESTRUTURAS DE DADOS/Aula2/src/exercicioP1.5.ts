import * as prompt_sync from 'prompt-sync';

const prompt = prompt_sync();

const palavra1:string = prompt('Digite uma palvra: ').toLocaleLowerCase();

const palavra2:string = prompt('Digite outra palavra: ').toLocaleLowerCase();


function comp(p1:string, p2:string) {

    const menorPalavra = Math.min(p1.length, p2.length);

    for(let i = 0; i < menorPalavra; i++){

        const charCode1:number = p1.charCodeAt(i);
        const charCode2:number = p1.charCodeAt(i);
    
        if(charCode1 < charCode2){
            return charCode1;

        }if (charCode1 > charCode2){
            return charCode2;
        }
    }

    return p1.length <= p2.length ? p1 : p2;
}
const result = comp(palavra1, palavra2);
console.log(result)







