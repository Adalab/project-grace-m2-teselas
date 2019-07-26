'use strict';

//Rellenar la tarjeta con los datos del input (name y job)
const inputName = document.querySelector('.field__fill-name');
const inputJob = document.querySelector('.field__fill-job');
const name = document.querySelector('.name__card');
const job = document.querySelector('.job__card');

function fillName (event) {
  name.innerHTML = event.currentTarget.value;
}
function fillJob (event) {
  job.innerHTML = event.currentTarget.value;
}

inputName.addEventListener ('keyup', fillName);
inputJob.addEventListener ('keyup', fillJob);

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
