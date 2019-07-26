'use strict';


//inputs que reaccionen
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
//function fillJob
inputName.addEventListener ('keyup', fillName);
inputJob.addEventListener ('keyup', fillJob);
