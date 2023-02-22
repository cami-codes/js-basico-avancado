//            012345
// const nome = 'Camila';
const nome = ['Camila', 'Luiz', 'Henrique'];

// For clássico: Geralmente com iteráveis (array ou strings)
// For in: Retorna o índice ou chave (string, array ou objetos)
// For of: Retorna o valor em si (iteráveis, arrays ou strings)

// ----- for clássico ----- //
// for (let i = 0; i < nome.length; i++) {
//     console.log(nome[i])
// }

console.log('##############');

// ----- for in ----- //
for (let i in nome) {
    console.log(nome[i]);
}

console.log('##############');

// ----- for of ----- //
for (let valor of nome) {
    console.log(valor);
}

console.log('##############');

// ----- for each ----- //
nome.forEach(function(valor, indice, array) {
    console.log(valor, indice, array)
});