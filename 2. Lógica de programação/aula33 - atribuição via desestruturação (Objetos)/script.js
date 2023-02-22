const pessoa = {
    nome: 'Camila',
    sobrenome: 'Martins',
    idade: 22,
    endereco: {
        rua: 'Av Brasil',
        numero: '320'
    }
}

// para pegar por exemplo o nome da pessoa, a maneira mais fácil é usar o .
// console.log(pessoa.nome);

// mas se eu quiser jogar isso em uma variável com atribuição normal:
// const nome = pessoa.nome;
// console.log(nome);

// atribuição com desestruturação
// const { nome, sobrenome, idade } = pessoa;
// console.log(nome, sobrenome, idade);

// se por exemplo 'nome' não existir, eu posso setar um valor padrão pra ele, exemplo:
// const { nome = 'Nome padrão', sobrenome} = pessoa;
// console.log(nome, sobrenome);

// posso modificar o nome da variável, exemplo: mudar a variável nome pra outra coisa
// const { nome: teste, sobrenome } = pessoa;
// console.log(teste, sobrenome);

// pegar os valores dentro do objeto endereco:
// const { endereco: { rua, numero }, 
//         endereco } = pessoa;
// console.log(rua, numero, endereco);

// pegar o resto com rest operator
const { nome, ...resto } = pessoa;
console.log(resto);