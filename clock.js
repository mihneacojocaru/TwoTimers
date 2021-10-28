var start = document.getElementById('start');
var reset = document.getElementById('reset');

var h = document.getElementById("hours");
var m = document.getElementById("minutes");
var s = document.getElementById("seconds");


var startTimer = null;

start.addEventListener('click', () => {

    function startInterval(){
        startTimer = setInterval(() => {
            timer();
        }, 1000);
    }
    startInterval();
})

reset.addEventListener('click', () => {
    h.value = 0;
    m.value = 0;
    s.value = 0;
    
    stopInterval();
})

function timer(){
    if(h.value == 0 && m.value == 0 && s.value == 0){
        h.value = 0;
        m.value = 0;
        s.value = 0;
    } else if(s.value != 0){
        s.value--;
    } else if(m.value != 0 && s.value == 0){
        s.value = 59;
        m.value--;
    } else if(h.value != 0 && m.value == 0){
        m.value = 60;
        h.value--;
    }
    return;
}


function stopInterval() {
    clearInterval(startTimer);
}