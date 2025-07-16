let startTime, updatedTime, difference, tInterval;
let running = false;

const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');

function startTimer() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(updateTime, 1000);
        running = true;
        startStopBtn.textContent = 'Stop';
    } else {
        clearInterval(tInterval);
        running = false;
        startStopBtn.textContent = 'Start';
    }
}

function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(num) {
    return num < 10 ? '0' + num : num;
}

function resetTimer() {
    clearInterval(tInterval);
    running = false;
    display.textContent = '00:00:00';
    startStopBtn.textContent = 'Start';
}

startStopBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);

        document.getElementById('colorChangerBtn').addEventListener('click', function() {
            const display = document.getElementById('display');
            const colors = ['red', 'green', 'blue', 'orange', 'purple'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            display.style.color = randomColor;
        });