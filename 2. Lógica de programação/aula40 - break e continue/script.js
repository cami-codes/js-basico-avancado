const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// funciona com todos os for's e também com while e do while
for (let numero of numeros) {

    if (numero === 2) {
        console.log('Pulei o número 2');
        continue; // continue continua para a próxima iteração
    }
    
    if (numero === 7) {
        console.log('7 encontrado, saindo...');
        break; // break sai do laço
    }
    
    console.log(numero);
     
}

// exemplo com while:
// let i = 0;
// while (i < numeros.length) {
//     let numero = numeros[i];

//     if (numero === 2) {
//         console.log('Pulei o número 2');
//         i++;
//         continue;
//     }

//     console.log(numero);

//     if (numero === 7) {
//         console.log('7 encontrado, saindo...');
//         i++;
//         break;
//     }

//     i++;
// }

// exemplo com do-while 
let i = 0;
do {
    let numero = numeros[i];

    if (numero === 2 ) {
        console.log('Pulei o número 2');
        i++;
        continue;
    }

    console.log(numero);

    if (numero === 7) {
        console.log('7 encontrado, saindo...');
        i++;
        break;
    }

    i++;
    
} while (i < numeros.length);