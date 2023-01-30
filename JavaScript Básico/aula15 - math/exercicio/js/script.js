const numero = Number(prompt('Digite um número:'));
const numeroDigitado = document.getElementById('numero-digitado');
const texto = document.getElementById('texto');

numeroDigitado.innerHTML = numero;

texto.innerHTML += `Raiz quadrada: <strong>${Math.sqrt(numero)}</strong> <br>`;
texto.innerHTML += `${numero} é inteiro? <strong>${Number.isInteger(numero)}</strong> <br>`;
texto.innerHTML += `É NaN? <strong>${Number.isNaN(numero)}</strong> <br>`;
texto.innerHTML += `Arredondando para baixo: <strong>${Math.floor(numero)}</strong> <br>`;
texto.innerHTML += `Arredondando para cima: <strong>${Math.ceil(numero)}</strong> <br>`;
texto.innerHTML += `Com duas casas decimais: <strong>${numero.toFixed(2)}</strong> <br>`;
