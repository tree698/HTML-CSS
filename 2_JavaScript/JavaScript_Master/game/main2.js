'use strict';

const CARROT_COUNT = 5;
const BUG_COUNT = 5;
const ITEM_SIZE = 80;
const GAME_DURATION_SEC = 5;


const gameField = document.querySelector('.game__field');
const fieldRect = gameField.getBoundingClientRect();
const gameBtn = document.querySelector('.game__button');
const gameTimer = document.querySelector('.game__timer');
const gameScore = document.querySelector('.game__score');

const popUp = document.querySelector('.pop-up');
const popUpRefresh = document.querySelector('.pop-up__refresh');
const popUpMessage = document.querySelector('.pop-up__message');

let started = false;
let timer = undefined;
let score = 0;


gameBtn.addEventListener('click', () => {
    if(started) {
        stopGame()
    }
    else {
        startGame()
    }
    started = !started;
});

popUpRefresh.addEventListener('click', () => {
    startGame()
    hidePopUpWithText()
})

gameField.addEventListener('click', onClickField);




function onClickField() {

}






function startGame() {
    initGame()
    showStopBtn()
    showTimerAndScore()
    startTimer()
};

function stopGame() {
    stopTimer()
    hideGameBtn()
    showPopUpWithText('REPLAY?')
};













function initGame() {
    gameField.innerHTML = ''
    gameScore.textContent = CARROT_COUNT;
    addItem('carrot', CARROT_COUNT, './img/carrot.png');
    addItem('bug', BUG_COUNT, './img/bug.png');
};

function addItem(className, count, itemPath) {
    const x1 = 0;
    const y1 = 0;
    const x2 = fieldRect.width - ITEM_SIZE;
    const y2 = fieldRect.height = ITEM_SIZE;
    for(let i = 1; i <= count; i ++) {
        const item = document.createElement('img');
        item.setAttribute('class', className);
        item.setAttribute('src', itemPath);
        item.style.position = 'absolute';
        gameField.appendChild(item);
        const x = randomNumber(x1, x2);
        const y = randomNumber(y1, y2);
        item.style.left = `${x}px`;
        item.style.top = `${y}px`
    }
};

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function showStopBtn() {
    const icon = document.querySelector('.fas');
    icon.classList.add('fa-stop');
    icon.classList.remove('fa-play');
}

function showTimerAndScore() {
    gameTimer.style.visibility = 'visible';
    gameScore.style.visibility = 'visible';
}

function startTimer() {
    let remainingTimeSec = GAME_DURATION_SEC;
    updateTime(remainingTimeSec);
    timer = setInterval(() => {
        if (remainingTimeSec <= 0) {
            clearInterval(timer);
            return;
        } 
        updateTime(--remainingTimeSec);
    }, 1000)
}

function updateTime(sec) {
    // let minute = parseInt(sec / 60); 
    const minutes = Math.floor(sec / 60);
    const second = sec % 60;
    gameTimer.innerHTML = `${minutes}:${second}`;
}


function stopTimer() {
    clearInterval(timer);
}

function hideGameBtn() {
    gameBtn.style.visibility = 'hidden';
}

function showPopUpWithText(text) {
    popUp.classList.remove('pop-up__hide');
    popUpMessage.textContent = text;
}

function hidePopUpWithText() {
    popUp.classList.add('pop-up__hide');
}











