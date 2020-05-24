var interval = 0;
var milliseconds = 0;
var seconds = 0;
var minutes = 0;


function start() {
    clearInterval(interval)
    interval = setInterval(startTimer, 10);
}

function stop() {
    clearInterval(interval);
}

function reset() {
    clearInterval(interval);
    document.getElementById("milliseconds").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
}

function startTimer() {
    milliseconds++;

    if(milliseconds < 9){
        document.getElementById("milliseconds").innerHTML = "0" + milliseconds;
    }

    if(milliseconds > 9) {
        document.getElementById("milliseconds").innerHTML = milliseconds;
    }

    if(milliseconds == 99){
        milliseconds = 0;
        seconds++;

        if(seconds < 9){
            document
            .getElementById("seconds").innerHTML = "0" + seconds;
        }
        if(seconds > 9) {
            document.getElementById("seconds").innerHTML = seconds;
        }
    }

    if(seconds == 59){
        seconds = 0;
        minutes++;

        if (minutes < 9){
            document
            .getElementById("minutes").innerHTML = "0" + minutes;
        }

        if (minutes > 9){
            document
            .getElementById("minutes").innerHTML = minutes;
        }
    }
}