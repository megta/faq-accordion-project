'use strict';

const accordion = document.querySelectorAll('card__gen-container');

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', () => {
        this.classList.toggle('active');
    });
}

