'use strict';

const input = document.querySelector('.input');
const icon = document.querySelector('.fa-plus-circle');
const content = document.querySelector('.content');






input.addEventListener('keydown', (event) => {
    if(event.keyCode === 13) {
        makingList();
    }
});

icon.addEventListener('click', makingList);

function makingList() {
    const list = document.createElement('h2')
    list.textContent = input.value;
    content.appendChild(list);
};




