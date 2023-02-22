const dados = [
  { tag: 'h1', nome: 'Camila', sobrenome: 'Martins', idade: 22 },
  { tag: 'h2', nome: 'Maria', sobrenome: 'Silva', idade: 48 },
  { tag: 'h3', nome: 'João', sobrenome: 'Pedro', idade: 67 },
  { tag: 'h4', nome: 'Marília', sobrenome: 'Santos', idade: 35 },
  { tag: 'h5', nome: 'Pedro', sobrenome: 'Augusto', idade: 21 },
  { tag: 'h6', nome: 'Hellen', sobrenome: 'Menezes', idade: 20 },
]

const container = document.querySelector('.container'); 
const div = document.createElement('div');

for (let i = 0; i < dados.length; i++) {
  const { tag, nome, sobrenome, idade } = dados[i];

  // pego as tags q devem ser criadas
  let criarTag = document.createElement(tag);

  // coloco o texto dentro dessa tag
  criarTag.innerText = `${nome} ${sobrenome}, ${idade} anos`;

  // crio essa tag dentro da div q criei lá em cima
  div.appendChild(criarTag);

}

// coloco essa div dentro do container q já existe
container.appendChild(div);

// ~~~~~~~~~~~ praticando mais ~~~~~~~~~~~ //
// const dados = [
//   { tag: 'h1', nome: 'Camila' },
//   { tag: 'h2', nome: 'Luiz' }
// ]

// pegando o container que já existe no meu html
// const container = document.querySelector('.container');

// // criando uma div
// const div = document.createElement('div');

// for (let i = 0; i < dados.length; i++) {
//   desestruturação do objeto pegando a tag e o nome
//   const { tag, nome } = dados[i];
  
//   cria as tags de acordo com o objeto (no caso o h1 e o h2)
//   const criaTag = document.createElement(tag);

//   insere o nome dentro das respectivas tags
//   criaTag.innerText = nome;

//   insere essa tag dentro da div q criei
//   div.appendChild(criaTag);

// }

// insere a div dentro do container
// container.appendChild(div);