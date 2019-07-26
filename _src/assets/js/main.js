'use strict';

const titleForm = document.querySelectorAll('.js__title--form');

/* const title2 = document.querySelector('.t--2');
const title3 = document.querySelector('.t--3'); */

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

/* titleForm.addEventListener('click', ShowOrHide); */
/* title2.addEventListener('click', ShowOrHide);
title3.addEventListener('click', ShowOrHide); */

for (const buttonForm of titleForm) {
    buttonForm.addEventListener('click', ShowOrHide);
}
