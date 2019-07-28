'use strict';

//Rellenar la tarjeta con los datos del input (name y job)
const inputName = document.querySelector('.field__fill-name');
const inputJob = document.querySelector('.field__fill-job');
const name = document.querySelector('.name__card');
const job = document.querySelector('.job__card');

function fillName(event) {
  if (inputName.value.length === 0){
    name.innerHTML = 'Nombre Apellido';
  } else if (inputName.value.length >= 15){
    name.innerHTML = 'Max De 15 Caracteres';
  }else {
      name.innerHTML = event.currentTarget.value;
  }
}
function fillJob(event) {
  if (inputJob.value.length === 0){
    job.innerHTML = 'front-end developer';
  } else {
    job.innerHTML = event.currentTarget.value;
  }
}

inputName.addEventListener('keyup', fillName);
inputJob.addEventListener('keyup', fillJob);

//Hacer las paletas de colores interactivas
const radio1 = document.querySelector('.radio__palette1');
const radio2 = document.querySelector('.radio__palette2');
const radio3 = document.querySelector('.radio__palette3');

const selectedRadio = document.querySelector('.card__box');

function changeColor (event){
  selectedRadio.classList.remove('palette1');
  selectedRadio.classList.remove('palette2');
  selectedRadio.classList.remove('palette3');
  selectedRadio.classList.add(event.currentTarget.value);
}

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
const inputLinkedin = document.querySelector ('.input--linkedin');
const inputGithub = document.querySelector ('.input--github');

const linkMail = document.querySelector('.link__icon__card-mail');
const linkPhone = document.querySelector('.link__icon__card-phone');
const linkLinkedin = document.querySelector('.link__icon__card-linkedin');
const linkGithub = document.querySelector('.link__icon__card-github');

const iconMail = document.querySelector('.item2');
const iconPhone = document.querySelector('.item1');
const iconLinkedin = document.querySelector('.item3');
const iconGithub = document.querySelector('.item4');
//handler
function showMailIcon(event){
  if (inputMail.value.length !== 0){
    iconMail.classList.remove('supersecret');
    linkMail.href = 'mailto:' + inputMail.value;
  } else {
    iconMail.classList.add('supersecret');
  }
}
function showPhoneIcon(event){
  if (inputPhone.value.length !== 0){
    iconPhone.classList.remove('supersecret');
  } else {
    iconPhone.classList.add('supersecret');
  }
}
function showLinkedinIcon(event){
  if (inputLinkedin.value.length !== 0){
    iconLinkedin.classList.remove('supersecret');
    linkLinkedin.href = inputLinkedin.value;
  } else {
    iconLinkedin.classList.add('supersecret');
  }
}
function showGithubIcon(event){
  if (inputGithub.value.length !== 0){
    iconGithub.classList.remove('supersecret');
    linkGithub.href = inputGithub.value;
  } else {
    iconGithub.classList.add('supersecret');
  }
}
//listener
inputMail.addEventListener('keyup', showMailIcon);
inputPhone.addEventListener('keyup', showPhoneIcon);
inputLinkedin.addEventListener('keyup', showLinkedinIcon);
inputGithub.addEventListener('keyup', showGithubIcon);
