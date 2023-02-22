const paragrafos = document.querySelector('.paragrafos');
const todosParagrafos = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);

for (let p of todosParagrafos) {
    p.style.color = 'white';
    p.style.backgroundColor = backgroundColorBody;
    console.log(p);
}