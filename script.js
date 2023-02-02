var seconds = 00;
var tens = 00;
var minutes=00;
var appendMinute = document.getElementById("minutes")
var appendSeconds= document.getElementById("seconds");
var appendTens = document.getElementById("tens");
var startButton= document.getElementById("start");
var stopButton=document.getElementById("stop");
var resetButton=document.getElementById("reset");

var interval;



function startTime (){
    tens++; 
     
if(tens<9){
    appendTens.innerHTML="0"+tens;
    }
if(tens>9){
    appendTens.innerHTML=tens;

}
if(tens>99){
    seconds++;

    appendSeconds.innerHTML="0"+seconds;

    tens=0;
    appendTens.innerHTML='0'+0;
}

//


if(seconds>60){
    minutes++;
appendMinute.innerHTML= "0"+minutes;
seconds=0;
appendSeconds.innerHTML="0"+0;
}
if (minutes>9){
    appendMinute.innerHTML=minutes;
}


if(seconds>9){
    appendSeconds.innerHTML=seconds;

}


};
startButton.onclick=function (){
    interval=setInterval(startTime)

}
stopButton.onclick=function(){
    clearInterval(interval)
}
resetButton.onclick=function(){
    clearInterval(interval)
    seconds="00";
    tens="00";
    minutes="00";
    appendMinute.innerHTML=minutes;
    appendSeconds.innerHTML=seconds;
    appendTens.innerHTML=tens;
}
