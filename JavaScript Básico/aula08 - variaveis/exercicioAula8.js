//  Imprimir: Luiz Otávio Miranda tem 30 anos, pesa 84 kg tem 1.8 de altura e seu imc é de 25.92592592592592

const nome = "Luiz Otávio";
const idade = 30;
const peso = 84;
const altura = 1.80;

let imc = peso / (altura * altura);
let anoNascimento = (2023 - idade);

console.log(nome + ' tem ' + idade + 'anos, pesa ' + peso + 'kg ' + 'tem ' + altura + ' de altura e seu imc é de ' + imc);
console.log(anoNascimento)
