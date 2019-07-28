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

//Drop-down
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

// Escribir en los inputs de redes sociales y que aparezcan los iconos correpondientes enlazados
//seleccionar y declarar constantes
// const iconCard = document.querySelectorAll('.field__fill-icon');
// const iconPhone = document.querySelector('.li--card, .item1');
// const iconMail = document.querySelector('.li--card, .item2');
// const iconLinkedin = document.querySelector('.li--card, .item3');
// const iconGithub = document.querySelector('.li--card, .item4');

//handler
// function showIcon(event){
//   console.log(event.currentTarget.value);
//   const currentField = event.currentTarget;
//   if (currentField.classList.contains('input--email')){
//     if (currentField.value !== null) {
//       iconMail.href = 'mailto:' + currentField.value;
//       //que el icono se muestre
//     } if else {
//       //que el icono desaparezca
//     }
//   } else {}
// }

//listener
// for (const iconForm of iconCard) {
//   iconForm.addEventListener('keyup', showIcon);
// }


// Escribir en los inputs de redes sociales y que aparezcan los iconos correpondientes enlazados
//seleccionar y declarar constantes
const inputMail = document.querySelector('.input--email');
const inputPhone = document.querySelector('.input--phone');


const iconMail = document.querySelector('.item2');
//handler
function showIcon(event){
  if (inputMail.value.length !== 0){
    iconMail.classList.remove('supersecret');
  } else {
    iconMail.classList.add('supersecret');
  }
}

//listener
inputMail.addEventListener('keyup', showIcon);
