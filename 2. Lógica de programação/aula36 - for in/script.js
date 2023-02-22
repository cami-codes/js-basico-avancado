// O For in -> lê os índices ou chaves do objeto
// um array de uma única dimensão (não tem outros arrays dentro dele) também são chamados de vetor
const frutas = ['Maçã', 'Banana', 'Uva'];
const pessoa = {
    nome: 'Camila',
    sobrenome: 'Martins',
    idade: 22
};

// console.log(pessoa['nome']);
// console.log(pessoa['sobrenome']);
// const chave = 'idade';
// console.log(pessoa[chave]);

// for (let i in frutas) {
//     console.log(frutas[i]);
// }

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]); // le as chaves
}

// i = index, indice
// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }