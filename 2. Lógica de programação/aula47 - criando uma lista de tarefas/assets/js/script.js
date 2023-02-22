const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLista() {
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return; 
        criaTarefa(inputTarefa.value);
    }
});

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus(); // foca no input
}

function criaTarefa(textoInput) {
    const li = criaLista();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

function criaBotaoApagar(li) {
    li.innerText += ' ';
    const btnApagar = document.createElement('button');
    btnApagar.innerText = 'Apagar';
    btnApagar.setAttribute('class', 'apagar');
    btnApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(btnApagar);
}

btnTarefa.addEventListener('click', function () {
    if (!inputTarefa.value) return; 
    criaTarefa(inputTarefa.value);
})

document.addEventListener('click', function(e) {
    const el = e.target;
    
    if (el.classList.contains('apagar')) {
       el.parentElement.remove();
       salvarTarefas();
    }
});

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas); // cria uma string do array convertida para JSON em string(?)
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas); // converte as tarefas de volta para um array
    
    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }

}

adicionaTarefasSalvas();