let inpuDir = { x: 0, y: 0 };
let speed = 10;
let score = 0;
const foodSound = new Audio('music/food.mp3');
let lastpainttime = 0;
let flag = 1;
let cnt = 0;

let snakearr = [
    { x: 10, y: 4 }

];
let gover = 0;
// snakearr = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) };

food = { x: 6, y: 7 };
// if (snakearr[0].y === food.y && snakearr[0].x === food.x) {
//     food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) };
// }

const winningMessageElement = document.getElementById('winningMessage')
const restartButton = document.getElementById('restartButton')
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
const overMessageElement = document.getElementById('overMessage')
const overButton = document.getElementById('overButton')
const overMessageTextElement = document.querySelector('[data-over-message-text]')
restartButton.addEventListener('click', flagen);
function flagen() {
    flag = 1;
}
overButton.addEventListener('click', flagged);
function flagged() {
    score = 0;
    scoreBox.innerHTML = '<h1>Score: ' + score + '</h1>'
    overMessageElement.classList.remove('show')
}
function main(ctime) {
    window.requestAnimationFrame(main);
    if ((ctime - lastpainttime) / 1000 < 1 / speed) {
        return;
    }
    lastpainttime = ctime;
    gameEngine();
}
function isCollide(snake) {
    for (let i = 1; i < snakearr.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            return true;
        }
    }
    if (snake[0].x >= 18 || snake[0].x <= 0 || snake[0].y >= 18 || snake[0].y <= 0) {
        return true;
    }
    return false;
}
function myFunction() {
    return;
}
function foodgenerate() {
    food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) };
}
function gameEngine() {
    if (isCollide(snakearr)) {
        gover = 1;
        speed = 10;
        overMessageElement.classList.add('show');
        overMessageTextElement.innerHTML = '<center>Game Over</center>Your score: ' + score;
        snakearr = [
            { x: 10, y: 4 }
        ];
        inpuDir = { x: 0, y: 0 };
    }
    if (flag) {
        if (snakearr[0].y === food.y && snakearr[0].x === food.x) {
            foodSound.play();
            score++;
            scoreBox.innerHTML = '<h1>Score: ' + score + '</h1>';
            snakearr.unshift({
                x: snakearr[0].x + inpuDir.x, y: snakearr[0].y + inpuDir.y
            });
            a = 2;
            b = 16;
            foodgenerate();
            snakearr.forEach((e, index) => {
                if (e.x === food.x && e.y === food.y) {
                    foodgenerate();
                }
            });
        }
        for (let i = snakearr.length - 2; i >= 0; i--) {
            snakearr[i + 1] = { ...snakearr[i] };
        }
        snakearr[0].x += inpuDir.x;
        snakearr[0].y += inpuDir.y;
        board.innerHTML = "";
        snakearr.forEach((e, index) => {
            snakeElement = document.createElement('div');
            snakeElement.style.gridRowStart = e.y;
            snakeElement.style.gridColumnStart = e.x;
            if (index == 0) {
                snakeElement.classList.add('head');
            }
            else {
                snakeElement.classList.add('snake');
            }
            board.appendChild(snakeElement);
        });
        foodElement = document.createElement('div');
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumnStart = food.x;
        foodElement.classList.add('food');
        board.appendChild(foodElement);
        winningMessageElement.classList.remove('show')
    }
    else {
        winningMessageTextElement.innerText = 'Game Paused';
        winningMessageElement.classList.add('show');
    }
}
window.requestAnimationFrame(main);
window.addEventListener('keydown', e => {
    if (e.key === "ArrowUp" && inpuDir.y != 1) {
        inpuDir.x = 0;
        inpuDir.y = -1;
    }
    else if (e.key === "ArrowDown" && inpuDir.y != -1) {
        inpuDir.x = 0;
        inpuDir.y = 1;
    }
    else if (e.key === "ArrowRight" && inpuDir.x != -1) {
        inpuDir.x = 1;
        inpuDir.y = 0;
    }
    else if (e.key === "ArrowLeft" && inpuDir.x != 1) {
        inpuDir.x = -1;
        inpuDir.y = 0;
        // console.log("1 is pressed");
    }
    else if (e.key === " ") {
        if (gover === 1) {
            flagged();
            gover = 0;
        }
        else {
            if (cnt % 2 === 0) {
                myFunction();
                flag = 0;
            }
            else {
                flag = 1;
            }
            cnt = cnt + 1;
        }
    }
});
