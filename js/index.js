var timer = document.getElementById("timer"),
    text = document.getElementById("text"),
    onoff = document.getElementById("onoff"),
    resetbtn = document.getElementById("reset"),
    anima = document.getElementById("anima"),
    sessionPlus = document.getElementById("session-plus"),
    sessionText = document.getElementById("session-text"),
    sessionMinus = document.getElementById("session-minus"),
    breakPlus = document.getElementById("break-plus"),
    breakText = document.getElementById("break-text"),
    breakMinus = document.getElementById("break-minus");
var countDown = null, a = 25, b = 5, c = 0, leftSeconds= a*60; 
var pace = parseFloat( (1500 / (a*60) ).toFixed(2) ); 
var i=0, isSession = true; 

onoff.onclick = function(){ 
    if(!countDown){
      countDown = setInterval(myTimer, 1000);
      text.innerHTML = "Click to pause";
    }else{
      clearInterval(countDown);
      countDown = null;
      text.innerHTML = "Click to start";
    }  
}

resetbtn.onclick = function() {    
  clearInterval(countDown);
  a=25; b=5; leftSeconds = a*60;
  pace = parseFloat( (1500 / (a*60) ).toFixed(2) );
  i=0;
  sessionOrbreak = true;
  timer.innerHTML = "25:00";
  anima.style.strokeDashoffset = "0";
  sessionText.innerHTML = "25";
  breakText.innerHTML= "5";
}

sessionPlus.onclick = function(){
  a = a + 1;
  if(a >= 60){ alert("Wrong input"); a = 60;}
  sessionText.innerHTML = a;
  timer.innerHTML = (a < 10? "0" : "") + a + ":00";
  leftSeconds = a*60;
  pace = parseFloat( (1500 / (a*60) ).toFixed(2) );
  i=0;
} 
sessionMinus.onclick = function(){
  a = a - 1;
  if(a <= 0){ alert("Wrong input"); a=0;}
  sessionText.innerHTML = a; 
  timer.innerHTML = (a < 10? "0" : "") + a + ":00";
  leftSeconds = a*60;
  pace = parseFloat( (1500 / (a*60) ).toFixed(2) ); 
  i=0;
} 

breakPlus.onclick = function(){ 
  b = b + 1;
  if(b >= 60){ alert("Wrong input"); b = 60;}
  breakText.innerHTML = b;
} 
breakMinus.onclick = function(){ 
  b = b - 1;
  if(b <= 0){alert("Wrong input"); b=0;}
  breakText.innerHTML = b;
} 

function showTime(x){
  var mins = Math.floor(x / 60);
  var secs = x % 60;    
  var ret = (mins < 10 ? "0" : "") + mins + ":" + (secs < 10 ? "0" : "") + secs;
  return ret;
}

function myTimer(){           
    i+=1;
    leftSeconds-=1;
    var mins = Math.floor(leftSeconds / 60);
    var secs = leftSeconds % 60;   
    var ret = (mins < 10 ? "0" : "") + mins + ":" + (secs < 10 ? "0" : "") + secs;
  
   timer.innerHTML = ret;
   anima.style.strokeDashoffset = (i*pace).toFixed(0);
   if(leftSeconds <= 0){ 
           if(isSession===true){
                isSession = false;
                leftSeconds = b*60;
                i=0;
                text.innerHTML = "Take a break";
                anima.style.stroke = "#c62663";
                pace = parseFloat( (1500 / (b*60) ).toFixed(2) );
           }else{
                isSession = true;
                leftSeconds = a*60;
                i=0;
                text.innerHTML = "keep working";
                anima.style.stroke = "#f7d7d9";
                pace = parseFloat( (1500 / (a*60) ).toFixed(2) );
           }
    }
}