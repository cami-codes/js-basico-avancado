// let a = 'A'; // B
// let b = 'B'; // C
// let c = 'C'; // A

// // desestruturação (como essas variáveis já existem, estou reatribuindo o valor delas aqui)

// const numeros = [b, c, a];
// [a, b, c] = numeros;

// console.log(a, b, c);

//               0       1     2     3     4     5     6     7     8
// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
// const primeiroNumero = numeros[0];
// console.log(primeiroNumero);

//          0               1               2           restante
// const [primeiroNumero, segundoNumero, terceiroNumero, ...resto ] = numeros;
// // ... rest operator (resto) | ... spread (espalhar, distribuir) só muda o contexto
// console.log(primeiroNumero, segundoNumero, terceiroNumero); 
// console.log(resto);

// const [um, , tres, , cinco, , sete] = numeros; // pulando os valores utilizando espaços vazios
// console.log(um, tres, cinco, sete);

// um array com outros arrays dentro
//                    0         1           2
//                 0  1  2    0  1  2    0  1  2
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
// para pegar o número 6 por exemplo:
// console.log(numeros[1][2]); 

// com desestruturação:
// pulei o índice 0, peguei o índice 1, pulei o indice 0 e 1 do segundo array (4, 5) e peguei o 6
// const [, [, , seis]] = numeros;
// console.log(seis)
 
// maneira mais simples:
const [lista1, lista2, lista3] = numeros;
console.log(lista3[1]); 