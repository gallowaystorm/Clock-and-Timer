function clock(){
    const fullDate = new Date();
    var hour = fullDate.getHours();
    var minute = fullDate.getMinutes();
    var second = fullDate.getSeconds();

    if (hour < 10){
        hour = "0" + hour;
    }

    if (hour > 12){
        hour = "0" + (hour - 12);
    }
    
    if (minute < 10){
        minute = "0" + minute;
    }
    
    if (second < 10){
        second = "0" + second;
    }
    document.getElementById('hour').innerHTML = hour;
    document.getElementById('minute').innerHTML = ":" + minute;
    document.getElementById('second').innerHTML = ":" + second;
    
}

setInterval(clock, 100);

//timer-----------------------------------------------------------------

var thour_span = document.getElementById('thour');
var tminute_span = document.getElementById('tminute');
var tsecond_span = document.getElementById('tsecond');
const start_span = document.getElementById('start');
const stop_span = document.getElementById('stop');
const reset_span = document.getElementById('reset');
var interval;

//listen for clicks on start and stop

function clickListener(){
    start_span.addEventListener('click', function(){
        startTimer("start");
    })    
    stop_span.addEventListener('click', function(){
            stopTimer("stop");
    })
    reset_span.addEventListener('click', function(){
            resetTimer("reset");
    })
}

clickListener();

//start Timer

function startTimer(click){
 console.log(click);
 addSecond();
 addMinute();
 addHour();
}

//stop timer

function stopTimer(click){
 console.log(click);
 var stop = 1;
 addSecond(stop);
 addMinute(stop);
 addHour(stop);
}

//reset timer

function resetTimer(click){
 console.log(click);
 var stop = 1;
 addSecond(stop);
 addMinute(stop);
 addHour(stop);
 tsecond_span = 0;
 tminute_span = 0;
 thour_span = 0;
 document.getElementById('thour').innerHTML = "00";
 document.getElementById('tminute').innerHTML = ":00";
 document.getElementById('tsecond').innerHTML = ":00";
}

//add a second

function addSecond(action){ 
    tsecond_span = 0;

    //to stop
    if (action == 1){
        clearInterval(interval);
    } else {
        interval = setInterval(increment, 1000);
    }

    function increment(){
        tsecond_span++;
        if (tsecond_span < 10){
            tsecond_span = "0" + tsecond_span;
            }
        if (tsecond_span > 59){
            tsecond_span = 0;
            tsecond_span = "0" + tsecond_span;
        } 
        document.getElementById('tsecond').innerHTML = ":" + tsecond_span;
        }
}

//add a minute

function addMinute(action){ 
    tminute_span = 0;

    //to stop
    if (action == 1){
        clearInterval(interval);
    } else {
        setInterval(increment, 60000);
    }
    
    function increment(){
        tminute_span++;
        if (tminute_span < 10){
            tminute_span = "0" + tminute_span;
            }
        if (tminute_span > 59){
            tminute_span = 0;
            tminute_span = "0" + tminute_span;
        } 
        document.getElementById('tminute').innerHTML = ":" + tminute_span;
        }
}

//add an hour

function addHour(action){ 
    thour_span = 0;

    //to stop
    if (action == 1){
        clearInterval(interval);
    } else {
        setInterval(increment, (60000 * 60));
    }
    
    function increment(){
        thour_span++;
        if (thour_span < 10){
            thour_span = "0" + thour_span;
            }
        document.getElementById('thour').innerHTML = thour_span;
        }
}