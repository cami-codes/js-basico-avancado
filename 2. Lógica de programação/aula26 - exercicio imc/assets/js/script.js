// evento submit
const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        mostrarResultado('Peso inválido', false);
        return;
    } 

    if (!altura) {
        mostrarResultado('Altura inválido', false);
        return;
    } 

    const imc = getImc(peso, altura);
    const nivelImc = classificacaoImc(imc);
    
    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    mostrarResultado(msg, true);
    
})

function classificacaoImc(imc) {
    let classificacao = '';

    if (imc < 18.5) {
        return classificacao = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
        return classificacao = 'Peso normal';
    } else if (imc >= 25 && imc <= 29.9) {
        return classificacao = 'Sobrepeso';
    } else if (imc >= 30 && imc <= 39.9) {
        return classificacao = 'Obesidade grau 2';
    } else if (imc > 40) {
        return classificacao = 'Obesidade grau 3';
    }
    return classificacao;
}

function getImc (peso, altura) {
    const imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function criarParagrafo() {
    const p = document.createElement('p');
    return p;
}

function mostrarResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criarParagrafo();

    if (isValid) {
        p.classList.add('resultado-valid');
    } else {
        p.classList.add('resultado-invalid');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}
