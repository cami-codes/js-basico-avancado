function saudacao(nome) {
    return `Bom dia ${nome}!`;
    // console.log('Olá!') // isso não retorna nada, só mostra na tela, pra retornar só com o return;
}

// const variavel = saudacao('Camila');
// console.log(variavel);

function soma(num1, num2) {
    const resultado = num1 + num2;
    return resultado;
}

// console.log(soma(5, 5));

function soma(x = 1, y = 1) { // posso definir um valor padrão caso o parametro não seja passado;
    const resultado = x + y;
    return resultado; // a função acaba assim que lê o return
}

// console.log(soma(2));

// outra forma de declarar uma função
// calcular a raiz quadrada
const raiz = function (n) {
    this.n = 5
    return n ** 0.5;
}

// console.log(raiz(9));

// aero function
const raizQuadrada = (n) => {
    return n ** 0.5;
}

// essa mesma função de forma simplificada:a
const raizQuadradaSimplificada = n => n ** 0.5;

console.log(raizQuadradaSimplificada(9));