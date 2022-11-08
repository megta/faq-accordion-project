'use strict';

// make accordion items open one at a time


const accordion = document.querySelectorAll('.card__gen-container');

/*
for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active');
    });
}
*/

accordion.forEach((item) => {
item.addEventListener('click', function() {
    accordion.forEach((elem) => {
        if(elem.classList.contains('active')) {
            elem.classList.toggle('active');
        } else if(elem === item) {
            elem.classList.toggle('active');
        }
    });
});
});
