'use strict';

/* if .card__gen-container was used in accordion variable, the card__answer-container will 
also make the accordion item to close. Hence, used .card__question so that card__answer-container
will not trigger the event and close the item. 
*/

const accordion = document.querySelectorAll('.card__question');

accordion.forEach((item) => {
item.addEventListener('click', function() {
    accordion.forEach((elem) => {
        if(elem.classList.contains('active')) {
            elem.classList.remove('active');
            
        } else if (elem === item) {
            elem.classList.add('active');
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
