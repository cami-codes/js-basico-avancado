const h1 = document.querySelector("#h1");

const data = new Date();


function mostrarDataString() {
  const data = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: '2-digit',
    minute: '2-digit'
  };

  return `${data.toLocaleDateString("pt-BR", options)}`;
}

h1.innerHTML = mostrarDataString();

