'use strict';

const accordion = document.querySelectorAll('.card__gen-container');

accordion.forEach((item) => {
item.addEventListener('click', function() {
    accordion.forEach((elem) => {
        if(elem.classList.contains('active')) {
            elem.classList.toggle('active');
        } else if (elem === item) {
            elem.classList.toggle('active');
        }
    });
});
});

// for when you want to open multiple at a time

/* 
for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active');
    });
}
*/
