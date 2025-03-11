function copiar(a: number[]){ //entrada
    let copia: number[] = []; //inicialização     T0
         // inicialização variável i
    for(let i:number=0; i < a.length; i++ ) { //
        copia.push(a[i]);
    }

    return copia;

}

// t0 são coisas que estão fora do laço ou iniciando, tal como number [] = [];
// n.t0 estão dentro do laço 

//complexidade exata -> C(n) = 4n + 3