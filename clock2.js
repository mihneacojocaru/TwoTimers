const hoursEl = document.getElementById("hours2");
const minutesEl = document.getElementById("minutes2");
const secondsEl = document.getElementById("seconds2")

const btnStart = document.querySelector('.btn-start-resume');
const btnPause = document.querySelector('.btn-pause');
const btnStop = document.querySelector('.btn-stop');
const btnReset = document.querySelector('.btn-reset');

let interval;
let pause = false;
let totalSeconds = 0;
let totalSecondsBackup = 0;

init();

function init() {
    btnPause.style.display = 'none';
    btnStop.style.display = 'none';
    btnReset.style.display = 'none';


    btnStart.addEventListener('click', () => {
        const hours = parseInt(hoursEl.value);
        const minutes = parseInt(minutesEl.value);
        const seconds = parseInt(secondsEl.value);

        totalSecondsBackup = hours * 3600 + minutes * 60 + seconds;
        totalSeconds = hours * 3600 + minutes * 60 + seconds;
        if (totalSeconds < 0) {
            return;
        }

        startTimer();

        btnPause.style.display = 'inline-block';
        btnStop.style.display = 'inline-block';
        btnReset.style.display = 'inline-block';
        btnStart.style.display = 'none';
    });

    btnPause.addEventListener('click', () => {
        pause = !pause;
        if (pause) {
            btnPause.innerText = 'Resume';
        } else {
            btnPause.innerText = 'Pause';
        }
    });

    btnStop.addEventListener('click', () => {
        stopTimer();
        totalSeconds = totalSecondsBackup;
        pause = false;
        updateInputs();

        btnPause.style.display = 'none';
        btnStop.style.display = 'none';
        btnReset.style.display = 'none';
        btnStart.style.display = '';
    });

    btnReset.addEventListener('click', () => {
        totalSeconds = totalSecondsBackup;
        updateInputs();
    });
}

function startTimer() {
    interval = setInterval(() => {

        if (pause) return;
        totalSeconds--;
        updateInputs();

        if (totalSeconds <= 0) {
            stopTimer();
        }
    }, 1000);
}

function stopTimer() {
    interval = clearInterval(interval);
}

function updateInputs() {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    hoursEl.value = hours;
    minutesEl.value = minutes;
    secondsEl.value = seconds;
}