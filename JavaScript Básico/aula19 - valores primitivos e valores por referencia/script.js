/*
* Primitivos (imutáveis - não podemos modificar eles): string, number, boolean, undefined, null (bigint, symbol)

* Referência (mutável) - Passados por referência: array, object, function

*/

// ~~~~~~~~~~~~ TIPO MUTÁVEL ~~~~~~~~~~~~ //
let a = [1, 2, 3];
let b = a; // Passado por referência. Não é uma cópia pois não é um tipo primitivo. B agora aponta para o mesmo local que A aponta na memória
console.log(a, b);

a.push(4); // A e B vão ter o mesmo valor, independente se eu só tiver adicionado no A, já que eles apontam para o mesmo local na memória
console.log(a, b);

b.pop();
console.log(a, b);

// Se por algum motivo eu quiser copiar o valor de A pra B por exemplo, seria dessa forma:
let _a = [1, 2, 3];
let _b = [..._a]; // O valor de A foi copiado para b, então o valor de B é totalmente independente !!!SPREAD!!!




// ~~~~~~~~~~~~ TIPO IMUTÁVEL ~~~~~~~~~~~~ //
// Com isso não estou alterando o valor, só troquei os dois.
// let nome = 'Camila';
// nome = 'Hellen';
// console.log(nome);

// let nome = 'Camila';
// nome[0] = 'M'; // isso não faz nada, pois a string é imutável
// console.log(nome[0]);

// let a = 'A';
// let b = a; // Cópia
// console.log(a, b);

// a = 'Outra coisa'; // Alterando o valor de A, não vai acontecer nada com a variável B, pois B é somente uma cópia
// console.log(a, b);
