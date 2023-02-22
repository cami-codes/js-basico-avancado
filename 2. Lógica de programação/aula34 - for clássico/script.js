// console.log('Linha 0');
// console.log('Linha 1');
// console.log('Linha 2');
// console.log('Linha 3');
// console.log('Linha 4');
// console.log('Linha 5');

// criar e inicializar a variável; uma condição: onde esse laço vai parar, nesse caso é o 5; a cada volta no laço, incrementa 1
// for (let i = 0; i <= 5; i++) {
//     console.log('Linha ' + i);
// }

// for (let i = 0; i <= 500; i += 10) { // de 10 em 10
//     console.log('Linha ' + i);
// }

// for (let i = 500; i >= 400; i -= 10) { // decrementando
//     console.log('Linha ' + i);
// }

// verificar numeros pares
// for (let i = 0; i <= 10; i++) {
//     // if (i % 2 == 0) {
//     //     console.log(`${i} é par`)
//     // } 
//     const par = i % 2 === 0 ? 'par' : 'ímpar';
//     console.log(i, par)
// }

const frutas = ['Maçã', 'Banana', 'Uva'];
frutas.push('Pêra');
frutas.push('Morango');

for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i} =`, frutas[i]);
}