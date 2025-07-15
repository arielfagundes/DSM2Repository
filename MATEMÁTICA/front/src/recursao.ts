function fatorial(n: number) {
    if (n === 0) return 1;

    let fat = 1;
    let count = 1;
  
    while (count <= n) {
      fat *= count;
      count++;
    }
    return fat;
}

// recursão é muito ruim pra memória, ele chama a função várias vezes e cria várias variáveis.
function fatorial_r(n: number): any { //Algoritmo mais fácil de entender, mas pior pra memória, pior desempenho.
    if (n == 0 || n == 1) {
      return 1; // CASO BASE
    } else {
      return n * fatorial_r(n - 1); // CLÁUSULA INDUTIVA
    }                               
}
  console.log(fatorial(2)); 
  console.log(fatorial_r(2)); 
  console.log(fatorial(3)); 
  console.log(fatorial_r(3)); 
  console.log(fatorial(4)); 
  console.log(fatorial_r(4)); 
  