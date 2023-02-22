function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

function funcaoDoInterval() {
    console.log(mostraHora());
}

// seta um intervalo de tempo para que uma função seja executada
// setInterval(funcaoDoInterval, 1000); // no primeiro parametro passei a funçao por referencia (sem os parenteses, ou seja, sem executar a função)

// modo mais comum de fazer com função anonima:

const timer = setInterval(function () {
    console.log(mostraHora());
}, 1000);

// o setTimeout só é executada uma vez, após um determinado momento.
// aqui o setTimeout foi utilizado para parar o setInterval
setTimeout(function () { 
    clearInterval(timer);
}, 3000);

setTimeout(function () {
    console.log('Olá mundo!');
}, 5000);