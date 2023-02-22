//  Escreva uma função que recebe 2 números e retorne o maior deles  //

function maior(num1, num2) {
  if (num1 > num2) {
    return num1;
  } // se a primeira condição for verdadeira, o return vai ser executado e vai sair da função, então não preciso do else.
  return num2;
}

// console.log(maior(14, 10));

function maiorTernario(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

console.log(maiorTernario(140, 1000));

// aero function
const maxAero = (x, y) => x > y ? x : y;
console.log(maxAero(10, 20));
