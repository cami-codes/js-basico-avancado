function cronometro() {
const relogio = document.querySelector(".relogio");

function getTimeFromSeconds(segundos) {
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "UTC",
  });
}

let segundos = 0;
let timer;

function start() {
  timer = setInterval(function () {
    segundos++;
    relogio.innerHTML = getTimeFromSeconds(segundos);
  }, 1000);
}

// melhorando os eventos
document.addEventListener("click", function (e) {
  const el = e.target;

  if (el.classList.contains("iniciar")) {
    relogio.classList.remove("pausado");
    clearInterval(timer);
    start();
  }

  if (el.classList.contains("pausar")) {
    clearInterval(timer);
    relogio.classList.add("pausado");
  }

  if (el.classList.contains("zerar")) {
    clearInterval(timer);
    segundos = 0;
    relogio.classList.remove("pausado");
    relogio.innerHTML = "00:00:00";
  }
});

//  pegar um botãom por vez pode ser problemático, pq poderia ter muitos botões  //

// iniciar.addEventListener('click', function(event) {
//   relogio.classList.remove('pausado');
//   clearInterval(timer);
//   start();
// })

// pausar.addEventListener('click', function(event) {
//   clearInterval(timer);
//   relogio.classList.add('pausado');
// })

// zerar.addEventListener('click', function(event) {
//   clearInterval(timer);
//   segundos = 0;
//   relogio.innerHTML = '00:00:00';
// });
}

cronometro();