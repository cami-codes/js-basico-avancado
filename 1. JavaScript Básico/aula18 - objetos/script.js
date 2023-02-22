// const array = [1, 2, 3];
// array.push(4); // ----- <<<<<
// array[0] = 'Luiz'; // ----- <<<<< dessa forma eu estou apenas alterando os elementos do array, então consigo fazer isso mesmo que seja const

// array = 'Outra' // isso não posso fazer.
// console.log(array);

// ARRAY: [] (COLCHETES) |||||||||| OBJETO: {} (CHAVES)
// const pessoa1 = {
//     nome: 'Camila',
//     sobrenome: 'Martins',
//     idade: 22
// };

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);
// console.log(pessoa1.idade);

// FUNÇÃO PARA CRIAR UMA PESSOA SEM TER A NECESSIDADE DE CRIAR UM OBJETO GIGANTESCO
function criarPessoa(nome, sobrenome, idade) { // quando eu crio isso na função, o nome é parametro
    return { nome, sobrenome, idade};
}

// const pessoa1 = criarPessoa('Camila', 'Martins', 22); // quando eu envio isso, o nome é argumento. então estou enviando esses argumento para os parametros
// const pessoa2 = criarPessoa('Hellen', 'Menezes', 21);
// const pessoa3 = criarPessoa('Luiz', 'Miranda', 30);

// console.log(pessoa1);
// console.log(pessoa2);
// console.log(pessoa3);


// UM OBJETO TAMBÉM PODE TER MÉTODOS
const pessoa = {
    nome: 'Camila',
    sobrenome: 'Martins',
    idade: 22,

    fala() {
        // console.log('Olá mundo!');
        console.log(`A minha idade atual é... ${this.idade}`); // this = esse objeto NESTE contexto (escopo)
    },

    incrementaIdade() {
        this.idade++;
    }
}

pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();