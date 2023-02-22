form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso) {
        mostrarResultado('Peso inválido', false);
        return
    }

    if(!altura) {
        mostrarResultado('Altura inválida', false);
        return
    }

    const imc = calcularImc(peso, altura).toFixed(2);
    const nivelImc = classificacaoImc(imc);

    const msg = `Seu IMC é: ${imc} (${nivelImc}).`
    
    mostrarResultado(msg, true);

})

function classificacaoImc(imc) {
    const classificacoes = [
        'Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 2', 'Obesidade grau 3'
    ];

    if (imc < 18.5) {
        return classificacoes[0];
    } else if (imc > 18.5 && imc <= 24.9) {
        return classificacoes[1];
    } else if (imc >= 25 && imc <= 29.9) {
        return classificacoes[2];
    } else if (imc >= 30 && imc <= 39.9) {
        return classificacoes[3];
    } else if (imc > 40) {
        return classificacoes[4];
    }

}

function calcularImc(peso, altura) {
    return peso / (altura * altura);
}

function mostrarResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');

    if (isValid) {
        resultado.classList.add('resultado-valid');
    } else {
        resultado.classList.add('resultado-invalid');
    }

    resultado.innerHTML = msg;
}
