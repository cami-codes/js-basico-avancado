function meuEscopo() {
  const form = document.querySelector("#form");
  const resultado = document.querySelector("#resultado");
  const pessoas = [];

  function recebeEventoForm(evento) {
    evento.preventDefault();
    const nome = form.querySelector("#nome");
    const sobrenome = form.querySelector("#sobrenome");
    const peso = form.querySelector("#peso");
    const altura = form.querySelector("#altura");

    const dados = {
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value,
    };

    pessoas.push(dados);

    resultado.innerHTML += `<br> ${dados.nome} ${dados.sobrenome} ${dados.peso} ${dados.altura}`;
  
    console.log(pessoas);
  }

  form.addEventListener("submit", recebeEventoForm);
}

meuEscopo();
