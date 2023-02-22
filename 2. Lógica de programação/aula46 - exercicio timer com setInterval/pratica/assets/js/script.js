function cronometro () {
const relogio = document.querySelector(".relogio");

function pegarSegundos(segundos) {
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "UTC",
  });
}

let segundos = 0;
let timer;

function iniciar () {
    timer = setInterval(function () {
        segundos++;
        relogio.innerHTML = pegarSegundos(segundos)
    }, 1000);
}

document.addEventListener('click', function (e) {
    const el = e.target;

    if (el.classList.contains('iniciar')) {
        clearInterval(timer);
        relogio.classList.remove('pausado');
        iniciar();
    }

    if (el.classList.contains('pausar')) {
        clearInterval(timer);
        relogio.classList.add('pausado');
    }

    if (el.classList.contains('zerar')) {
        clearInterval(timer);
        segundos = 0;
        relogio.classList.remove('pausado');
        relogio.innerHTML = '00:00:00';
    }
})

}

cronometro();