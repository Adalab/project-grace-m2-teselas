'use strict';

//Rellenar la tarjeta con los datos del input (name y job)
const inputName = document.querySelector('.field__fill-name');
const inputJob = document.querySelector('.field__fill-job');
const name = document.querySelector('.name__card');
const job = document.querySelector('.job__card');

function fillName(event) {
    name.innerHTML = event.currentTarget.value;
}

function fillJob(event) {
    job.innerHTML = event.currentTarget.value;
}

inputName.addEventListener('keyup', fillName);
inputJob.addEventListener('keyup', fillJob);

//Hacer las paletas de colores interactivas
//definir y declarar clases y constantes
const radio1 = document.querySelector('.radio__palette1');
const radio2 = document.querySelector('.radio__palette2');
const radio3 = document.querySelector('.radio__palette3');

const selectedRadio = document.querySelector('.card__box');

//handler: asociarlas
function changeColor (event){
  selectedRadio.classList.remove('palette1');
  selectedRadio.classList.remove('palette2');
  selectedRadio.classList.remove('palette3');

  selectedRadio.classList.add(event.currentTarget.value);
}

//listener
radio1.addEventListener('click',changeColor);
radio2.addEventListener('click',changeColor);
radio3.addEventListener('click',changeColor);

const titleForm = document.querySelectorAll('.js__title--form');

function ShowOrHide(event) {

    if (event.currentTarget.classList.contains('design__title')) {
        document.querySelector('.design__form').classList.toggle('drop-down');

        console.log(document.querySelector('.design__form'));

    } else if (event.currentTarget.classList.contains('fill__title')) {
        document.querySelector('.fill__form').classList.toggle('drop-down');

        console.log(document.querySelector('.fill__form'));

    } else if (event.currentTarget.classList.contains('share__title')) {
        document.querySelector('.share__form').classList.toggle('drop-down');
    }
}

for (const buttonForm of titleForm) {
    buttonForm.addEventListener('click', ShowOrHide);
}

