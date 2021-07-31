

const timer = document.getElementById('stopwatch');
const  startTimer = document.getElementById('startTimer');
const  stopTimer = document.getElementById('stopTimer');
const  resetTimer  = document.getElementById('resetTimer');
var hr = prompt("please Enter your hour");
var min = prompt("Please Enter your Minutes")
var sec = prompt("Please Enter your Second");

var stopTime = true;
var showtimer = () => {
         if (stopTime == true ) {
                stopTime = false; 
                timerCyle();      
                        
         }
}
var stopwatch = () => {
   if (stopTime == false) {
       stopTime = true
   }    
}
function timerCyle() {
    if (stopTime == false ) {
        
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);
     sec = sec - 1
     
    if (sec == 0  ) {
     min = min - 1
       sec = 59;
    }
      
    
       
    if(sec == -1 ||  min == -1  || hr == -1  ){
        timer.innerHTML =   "00:00:00";
        stopTime = true;
        sec = 0;
        min = 0;
        hr = 0;
    }
    
    
    if(sec < 10 || sec == 0  ){
        sec = '0' + sec
    }
    if(min < 10 || min == 0 ){
           min = '0' + min 
    }
    if (hr < 10 || hr == 0 ) {
         hr = '0'  + hr
    }
   
    timer.innerHTML = sec + ':' + min + ':' + hr
    setTimeout("timerCyle()" , 1000);

}
}

var allResettimer = () => {
    timer.innerHTML =   "00:00:00";
    stopTime = true;
    sec = 0;
    min = 0;
    hr = 0;
}

startTimer.addEventListener('click' , () => showtimer() );
stopTimer.addEventListener('click' , () => stopwatch() );
resetTimer.addEventListener('click' , () => allResettimer() );