'use strict';

const input = document.querySelector('.input');
const icon = document.querySelector('.fa-plus-circle');
const content = document.querySelector('.content');

function inputList() {
    if(input.value === ''){
        alert("Please, enter list");
    } else {
        const list = document.createElement('div');
        list.innerHTML = `${input.value} <i class="fas fa-trash-alt"></i><br>`;
        content.appendChild(list);
        list.style.fontSize = "22px";
        list.style.color = "blue";
        list.style.fontWeight = 'bold';
        list.style.padding = "10px 10px 5px 10px";

        input.value = '';
    }
};

input.addEventListener('keydown', (event) => {
    if(event.keyCode === 13) {
        inputList();
    }
});

icon.addEventListener('click', inputList);





