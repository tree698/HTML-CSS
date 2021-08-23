'use strict';

const vertical = document.querySelector('.vertical');
const horizontal = document.querySelector('.horizontal');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

// // target 요소의 size 정보를 가져온다 element.getBoundingClientRect()
// const targetRect = target.getBoundingClientRect();
// console.log(targetRect);

// const targetHalfWidth = targetRect.width / 2;
// const targetHalfHeight = targetRect.height / 2;

// document.addEventListener('mousemove', (event) => {
//     var x = event.clientX
//     var y = event.clientY
//     console.log(`${x} ${y}`);

//     // 성능 개선 전
//     // vertical.style.left = `${x}px`;
//     // horizontal.style.top = `${y}px`;
//     // target.style.left = `${x}px`;
//     // target.style.top = `${y}px`;
//     // tag.style.left = `${x}px`;
//     // tag.style.top = `${y}px`;
//     // tag.innerHTML = `${x}px, ${y}px`;


//     // 성능개선 후 
//     vertical.style.transform = `translateX(${x}px)`;
//     horizontal.style.transform = `translateY(${y}px)`;
//     target.style.transform = `translate(${x - targetHalfWidth}px, ${y - targetHalfHeight}px)`;
//     tag.style.transform = `translate(${x + 20}px, ${y + 20}px)`;
//     tag.innerHTML = `${x}px, ${y}px`

// });




// load가 모두 실행된 뒤 getBoundClientRect()가 작동하도록 함 
// 그렇지 않으면 처음에 target 위치가 잘못될 수 있다 => load가 된 뒤에는 정상으로 됨
addEventListener('load', () => {
    const targetRect = target.getBoundingClientRect();
    const targetHalfWidth = targetRect.width / 2;
    const targetHalfHeight = targetRect.height / 2;

    document.addEventListener('mousemove', (event) => {
        var x = event.clientX
        var y = event.clientY

        vertical.style.transform = `translateX(${x}px)`;
        horizontal.style.transform = `translateY(${y}px)`;
        target.style.transform = `translate(${x - targetHalfWidth}px, ${y - targetHalfHeight}px)`;
        // css에서 margin을 주어도 된다
        tag.style.transform = `translate(${x + 20}px, ${y + 20}px)`;
        tag.innerHTML = `${x}px, ${y}px`
    });
});
