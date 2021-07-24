'use strick';

const startBtn = document.querySelector('.start_btn');
const playIcon = createPlayIcon('fas fa-caret-right');
playIcon.style.fontSize = '55px';
playIcon.style.paddingLeft = '7px';

const bgMusic = document.querySelector('.bg');
const number = document.querySelector('.number');
const time = document.querySelector('.time');
time.textContent = '00:00';

const carrotSrc = '/2_JavaScript/JavaScript_Master/game/img/carrot.png'
const bugSrc = '/2_JavaScript/JavaScript_Master/game/img/bug.png'
const clickArea = document.querySelector('.click_area');

let clickedBug = false;
let redoFlag = false;

const carrotPullMusic = document.querySelector('.carrot_pull');
const lostMusic = document.querySelector('.alert');
const winMusic = document.querySelector('.game_win');

const gameOver = document.querySelector('.game_over');


function onPlay() {
    if(redoFlag === true) {
        return;
    } else {
        const replacedPlayIcon = createPlayIcon('fa-stop');
        startBtn.replaceChild(replacedPlayIcon, playIcon);
        replacedPlayIcon.style.fontSize = '27px';
        replacedPlayIcon.style.marginLeft = '2px';
        replacedPlayIcon.style.background = '#000';
    }

    bgMusic.play();
    number.textContent = Math.floor(Math.random() * 10 + 1);
    setTime('00', 10);

    for (let i = 1; i <= number.textContent; i++) {
       createItem('carrot', carrotSrc);
       createItem('bug', bugSrc);
    }
};

function createPlayIcon(src) {
    const playIcon = document.createElement('i');
    playIcon.setAttribute('class', src);
    startBtn.appendChild(playIcon); 
    return playIcon;
};

function setTime(minute, second) {
    let timer = setInterval(function() {
        time.textContent = `${minute}:${second}`;
        if (second <= 0) {
            clearInterval(timer);
            endOfGame('lost', 'YOU LOST');
        } else if(number.textContent == 0) {
            clearInterval(timer);
            endOfGame('win', 'YOU WON');
        } 
        else if(clickedBug === true) {
            clearInterval(timer);
            bgMusic.pause();
        } 
        second -= 1;
    }, 1000);
    return timer;
};

let id = 0;
function createItem(name, src) {
    const item = document.createElement('img');
    item.setAttribute('class', name);
    item.setAttribute('src', src);
    item.setAttribute('data-id', id);
    item.style.cursor = 'pointer';
    clickArea.appendChild(item);
    clickArea.style.position = 'relative';
    item.style.position = 'absolute';
    item.style.top = Math.floor(Math.random() * 130 + 1) + 'px' ;
    item.style.left = Math.floor(Math.random() * 800 + 1) + 'px';
    id++;
    return item;
}

function clickCarrot(id) {
    carrotPullMusic.play()
    if(number.textContent === '0') {
        carrotPullMusic.pause();
        return;
    } else {
        number.textContent -= 1;
    }
    const toBeDeleted = document.querySelector(`.carrot[data-id="${id}"]`);
    toBeDeleted.remove();
}

function clickBug(id) {
    endOfGame('lost', 'YOU LOST');
}

function endOfGame(winOrLost, text) {
    startBtn.style.opacity = 0;
    gameOver.style.backgroundColor = 'rgba(0,0,0,0.4)';
    bgMusic.pause();
    if(winOrLost === 'win'){
        winMusic.play();
    } else {
        lostMusic.play()
    }

    let redo = document.createElement('i');
    redo.innerHTML = `<i class="fas fa-redo-alt"></i><br>${text}`;
    gameOver.appendChild(redo);
    redo.addEventListener('click', () => {
        startBtn.style.opacity = 1;
        redoFlag = true;
        redo.remove();
        gameOver.remove();
        // onPlay();
        location.reload();
    });
}

startBtn.addEventListener('click', onPlay, false);
clickArea.addEventListener(('click'), event => {
    const id =event.target.dataset.id;
    if(id % 2 === 0) {
        clickCarrot(id);
    } else if(id % 2 === 1) {
        clickedBug = true;
        clickBug(id);
    }
})



