// try {
//     console.log(naoExisto);
// } catch (e) {
//     let naoExisto = 'agora existo';
//     console.log(naoExisto);
// }

function soma (x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser números');
    }

    return x + y;
}

try {
    console.log(soma(1, 5));
    console.log(soma('a', 5));

} catch (e) {
    console.log(e); // não é recomendado mostrar o erro pro usuário
}