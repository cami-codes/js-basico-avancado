//  O while é mais utilizado quando não sabemos quando tal coisa vai terminar, então o while é usado enquanto uma condição for verdadeira  //

// let i = 0;
// const nome = 'Camila'

// // while (i <= 10) {
// //     console.log(i);
// //     i++; // se não colocar isso, vai rodar infinitamente pq 0 sempre vai ser menor do que 10
// // }

// while (i < nome.length) {
//     console.log(nome[i]);
//     i++;
// }

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
// let rand = random(min, max);
let rand = 10;

while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
}

console.log('######');

// o do while vai executar o código primeiro e depois checar a condição
// o do while executa pelo menos uma vez sempre

do {
    rand = random(min, max);
    console.log(rand);
} while (rand !== 10);