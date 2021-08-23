'use strict';



// const target = document.querySelector('img');

// target.addEventListener('click', (event) => {
//     console.log(`page: ${event.pageX}, ${event.pageY}`);
//     console.log(`${event.movementX}`);
// });


function targetMovement(event) {
    var x = event.movementX
    var y = event.movementY

    const target = document.querySelector('img');
    target.style.position = 'x';


}
window.addEventListener('mousemove', targetMovement);



// 마우스가 움직이는 좌표값으로 이동 
// event? click? 
// (API) 마우스 좌표값
// (API) 이미지 이동 

// function logMovement(event) {
//     log.innerText = `movement: ${event.movementX}, ${event.movementY}\n${log.innerText}`;
//   }
  
// const log = document.getElementById('log');
// document.addEventListener('mousemove', logMovement);