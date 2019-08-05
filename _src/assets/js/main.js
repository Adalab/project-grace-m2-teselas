'use strict';

//Rellenar la tarjeta con los datos del input (name y job)
const inputName = document.querySelector('.field__fill-name');
const inputJob = document.querySelector('.field__fill-job');
const name = document.querySelector('.name__card');
const job = document.querySelector('.job__card');

function fillName(event) {
    if (inputName.value.length === 0) {
        name.innerHTML = 'Nombre Apellido';
    } else {
        name.innerHTML = event.currentTarget.value;
    }
}

function fillJob(event) {
    if (inputJob.value.length === 0) {
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
const radio4 = document.querySelector('.radio__palette4');
const radio5 = document.querySelector('.radio__palette5');

// if (selectedRadio.classList.contains('palette1')) {

// }

const selectedRadio = document.querySelector('.card__box');

let selectedPalette = "palette1";
function changeColor(event) {
    selectedRadio.classList.remove('palette1');
    selectedRadio.classList.remove('palette2');
    selectedRadio.classList.remove('palette3');
    selectedRadio.classList.remove('palette4');
    selectedRadio.classList.remove('palette5');

    selectedRadio.classList.add(event.currentTarget.value);
    selectedPalette = event.currentTarget.value
}

radio1.addEventListener('click', changeColor);
radio2.addEventListener('click', changeColor);
radio3.addEventListener('click', changeColor);
radio4.addEventListener('click', changeColor);
radio5.addEventListener('click', changeColor);

//Drop-down
const titleForm = document.querySelectorAll('.js__title--form');

function ShowOrHide(event) {

    if (event.currentTarget.classList.contains('design__title')) {
        document.querySelector('.desing__form--container').classList.toggle('drop-down');
        document.querySelector('.design__title').classList.toggle('design__title2');
        //agregar y eliminar clases a los demas
        document.querySelector('.fill__form').classList.add('drop-down');
        document.querySelector('.share__form').classList.add('drop-down');
        document.querySelector('.fill__title').classList.remove('fill__title2');
        document.querySelector('.share__title').classList.remove('share__title2');


    } else if (event.currentTarget.classList.contains('fill__title')) {
        document.querySelector('.fill__form').classList.toggle('drop-down');
        document.querySelector('.fill__title').classList.toggle('fill__title2');

        //agregar y elimir clases a los demas
        document.querySelector('.share__form').classList.add('drop-down');
        document.querySelector('.desing__form--container').classList.add('drop-down');
        document.querySelector('.design__title').classList.remove('design__title2');
        document.querySelector('.share__title').classList.remove('share__title2');

    } else if (event.currentTarget.classList.contains('share__title')) {
        document.querySelector('.share__form').classList.toggle('drop-down');
        document.querySelector('.share__title').classList.toggle('share__title2');

        //agregar y elimir clases a los demas
        document.querySelector('.desing__form--container').classList.add('drop-down');
        document.querySelector('.design__title').classList.remove('design__title2');
        document.querySelector('.fill__form').classList.add('drop-down');
        document.querySelector('.fill__title').classList.remove('fill__title2');


    }
}

for (const buttonForm of titleForm) {
    buttonForm.addEventListener('click', ShowOrHide);
}



// Escribir en los inputs de redes sociales y que aparezcan los iconos correpondientes enlazados
//seleccionar y declarar constantes
const inputMail = document.querySelector('.input--email');
const inputPhone = document.querySelector('.input--phone');
const inputLinkedin = document.querySelector('.input--linkedin');
const inputGithub = document.querySelector('.input--github');

const linkMail = document.querySelector('.link__icon__card-mail');
const linkPhone = document.querySelector('.link__icon__card-phone');
const linkLinkedin = document.querySelector('.link__icon__card-linkedin');
const linkGithub = document.querySelector('.link__icon__card-github');

const iconMail = document.querySelector('.item2');
const iconPhone = document.querySelector('.item1');
const iconLinkedin = document.querySelector('.item3');
const iconGithub = document.querySelector('.item4');
//handler
function showMailIcon(event) {
    if (inputMail.value.length !== 0) {
        iconMail.classList.remove('supersecret');
        linkMail.href = 'mailto:' + inputMail.value;
    } else {
        iconMail.classList.add('supersecret');
    }
}

function showPhoneIcon(event) {
    if (inputPhone.value.length !== 0) {
        iconPhone.classList.remove('supersecret');
        linkPhone.href = 'tel:' + inputPhone.value;
    } else {
        iconPhone.classList.add('supersecret');
    }
}

function showLinkedinIcon(event) {
    if (inputLinkedin.value.length !== 0) {
        iconLinkedin.classList.remove('supersecret');
        linkLinkedin.href = 'https://www.linkedin.com/in/' + inputLinkedin.value;
    } else {
        iconLinkedin.classList.add('supersecret');
    }
}

function showGithubIcon(event) {
    if (inputGithub.value.length !== 0) {
        iconGithub.classList.remove('supersecret');
        linkGithub.href = 'https://github.com/' + inputGithub.value;
    } else {
        iconGithub.classList.add('supersecret');
    }
}
//listener
inputMail.addEventListener('keyup', showMailIcon);
inputPhone.addEventListener('keyup', showPhoneIcon);
inputLinkedin.addEventListener('keyup', showLinkedinIcon);
inputGithub.addEventListener('keyup', showGithubIcon);


//reset-btn

const btnReset = document.querySelector('.reset__button');


const defaultImage = document.querySelector('.js__profile-image');
defaultImage.style.backgroundImage = `url(${defaultUrlImage})`;

function resetmood(event) {
    defaultImage.style.backgroundImage = `url(${defaultUrlImage})`;
    profilePreview.style.backgroundImage = '';
    //colocar paleta por defecto
    selectedRadio.classList.remove('palette1');
    selectedRadio.classList.remove('palette2');
    selectedRadio.classList.remove('palette3');
    selectedRadio.classList.remove('palette4');
    selectedRadio.classList.remove('palette5');
    radio1.checked = true;
    selectedPalette = "palette1";

    //Que los campos del formulario esten vacios
    inputName.value = '';
    inputJob.value = '';
    name.innerHTML = 'Nombre Apellido';
    job.innerHTML = 'front-end developer';

    inputMail.value = '';
    inputPhone.value = '';
    inputLinkedin.value = '';
    inputGithub.value = '';

    iconMail.classList.add('supersecret');
    iconPhone.classList.add('supersecret');
    iconLinkedin.classList.add('supersecret');
    iconGithub.classList.add('supersecret');
}

btnReset.addEventListener('click', resetmood);

profileImage.style.backgroundImage = `url(${defaultUrlImage})`;

//Crear el botón para mandar la petición a la API
const btnCardCreation = document.querySelector('.create__button');

const userDefault = {
    "palette": 1,
    "name": "Nombre Apellidos",
    "job": "front-end developer",
    "phone": "",
    "email": "",
    "linkedin": "",
    "github": "",
    "photo": defaultUrlImage
}

// Éste se puede borrar ¿?
/* const userFilled = {
  "palette": 1,
  "name": "María García",
  "job": "Front-end developer",
  "phone": "+34 666666666",
  "email": "mariagar@example.com",
  "linkedin": "mariagar",
  "github": "mariagar",
  "photo": defaultUrlImage
} */

const form = document.querySelector('.create__card');

function notSend(event) {
    event.preventDefault();
}

function sendData(json) {
    const userFilled = {}
    userFilled.palette = selectedPalette.replace('palette', '');
    userFilled.name = inputName.value;
    userFilled.job = inputJob.value;
    userFilled.phone = inputPhone.value;
    userFilled.email = inputMail.value;
    userFilled.linkedin = inputLinkedin.value;
    userFilled.github = inputGithub.value;
    userFilled.photo = fr.result;

    fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
            method: 'POST',
            body: JSON.stringify(userFilled),
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => console.log(data))
}

form.addEventListener('submit', notSend)
btnCardCreation.addEventListener('click', sendData);

function checkData() {

    const userFilled = {}

    userFilled.palette = selectedPalette.replace('palette', '');
    userFilled.name = inputName.value;
    userFilled.job = inputJob.value;
    userFilled.phone = inputPhone.value;
    userFilled.email = inputMail.value;
    userFilled.linkedin = inputLinkedin.value;
    userFilled.github = inputGithub.value;
    userFilled.photo = defaultUrlImage;

    console.log(userFilled);
    console.log(inputName.value);
}
btnCardCreation.addEventListener('click', checkData);
