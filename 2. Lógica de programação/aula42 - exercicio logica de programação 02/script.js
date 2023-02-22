/*
    * Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number),.
    * Retorne true se a imagem estiver no modo paisagem
*/

function ePaisagem (largura, altura) {

    let paisagem = false;

    if (largura > altura) {
       return paisagem = true
    }

    return paisagem;
}

console.log(ePaisagem(300, 500));

// ternário
function ePaisagemTernario (largura, altura) {
    // ele já retornaria true ou false, então não precisa desse ? true : false
    return largura > altura;
}

console.log(ePaisagemTernario(500, 400));

// aero function 
const ePaisagemAero = (largura, altura) => largura > altura;

console.log(ePaisagemAero(600, 500));