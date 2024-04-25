

const bushes = document.querySelectorAll('.bush');
const scoreBoard = document.querySelector('.score');
const homers = document.querySelectorAll('.homer');
const start = document.querySelector('.start');
let lastHomer; 
let timeUp = false;
let score = 0; 


function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
};


function randomHomer(homers) {
    const idx = Math.floor(Math.random() * homers.length);
    const homer = homers[idx];  
    if (homer === lastHomer) {
        console.log('Same bush');
       return randomHomer(homers);
    }
    lastHomer = homer; 
        return homer;
};


function peep() {
    const time = randomTime(300, 1500);
    const homer = randomHomer(homers); 
    console.log(time, homer); 
    homer.classList.add('out');
        setTimeout(() => {
            homer.classList.remove('out');
            if (!timeUp) peep();
        }, time);
};


function startGame() {
    scoreBoard.textConent = 0; 
    timeUp = false; 
    score = 0; 
    peep();
    setTimeout(() => timeUp = true, 20000)
}


function startButton() {
    document.querySelector('.start').classList.add('rotate');
    setTimeout(() => {
        start.classList.remove('rotate');
    }, 21500)
};


function sound() {
    const audio = new Audio('./doh.mp3');
    audio.play(); 
};


function hit(e) {
    score ++;
    this.classList.remove('out');
    scoreBoard.textContent = score; 
};

homers.forEach(homer => homer.addEventListener('click', hit));