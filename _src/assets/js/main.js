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
//clases y constantes

//handler: asociarlas
//listener
