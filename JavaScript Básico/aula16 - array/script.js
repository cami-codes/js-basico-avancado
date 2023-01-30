//               0        1         2           3      4
const alunos = ['João', 'Camila', 'Luiz']; // Luiza, Eduardo
// alunos[0] = 'Eduardo'; // Altera
// alunos[3] = 'Hellen'; // Adiciona - Forma não viável, pq assim eu preciso saber o tamanho do array

// alunos.push('Hellen'); // Adiciona no final

// alunos.unshift('Luiza'); // Adiciona no começo (indice 0)

// const removido = alunos.pop(); // Remove o último elemento do array
// console.log(removido)

// alunos.shift(); // Remove o primeiro elemento do array

// delete alunos[1]; // Remove o elemento e fica vazio

alunos.push('Luiza');
alunos.push('Eduardo');

// console.log(typeof alunos);
// console.log(alunos instanceof Array);
// console.log(alunos.slice(0, 3)); // do 0 ao 2, pq o último elemento não é incluido
// console.log(alunos.slice(0, -1)); // Usa o tamanho em si do array - o número negativo q eu informar