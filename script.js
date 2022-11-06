'use strict';

// why loop on .card__gen-container instead of .card__question?


const accordion = document.querySelectorAll('.card__gen-container');

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active');
    });
}

