
let container = document.getElementById('time');
let start_button = document.getElementById('start_button');
let stope_button = document.getElementById('stope_button');
let minute = document.getElementById('minute');
let second = document.getElementById('second');

let seconds = 25;
let minuts = 0;
let timer = null;
let isRuning = false;
// hna ghandir chek wach wach seconde wla minutes a9l mn 10 
function chekedData() {
    minute.textContent = minuts < 10 ? "0" + minuts : minuts;
    second.textContent = seconds < 10 ? "0" + seconds : seconds;
}

function StartTime() {

    if (isRuning)
        return;

    isRuning = true;
    container.style.color = 'green';

    timer = setInterval(() => {
        seconds--;

        if (seconds === 60) {
            seconds = 0;
            // minuts++;
        }

        chekedData();

        if (seconds === 15) {
            container.style.color = 'red';
            pauseForFiveseconde();

        }
        if (seconds === 0) {
            clearInterval(timer);
            container.style.color = 'white';
            alert('the time is over');
        }
    }, 1000);
}
// bach ikmal mn nafs lblasa
function pauseForFiveseconde() {
    clearInterval(timer);
    isRuning = false;
    setTimeout(() => {
        StartTime();
    }, 5000);
}

//  function start
start_button.onclick = function () {

    container.style.color = 'green';
    StartTime();


};
stope_button.onclick = function () {
    container.style.color = 'red';
    clearInterval(timer);
    isRuning = false;
}
export { };
