let startBtn = document.querySelector('#start');
let pauseBtn = document.querySelector('#pause');
let stopBtn = document.querySelector('#stop');
let stopWatch = document.querySelector('#stopwatch');
let lapBtn = document.querySelector('#laps');
let ulDiv = document.querySelector('#lap');
let sec =0;
let min =0;
let ms =0;
let timer;

startBtn.addEventListener('click', startClock);
pauseBtn.addEventListener('click', pause);
stopBtn.addEventListener('click', reset);
lapBtn.addEventListener('click', laps);
lapBtn.disabled = true;
stopBtn.disabled = true;
pauseBtn.disabled = true;


//funtions
function startClock(){
    lapBtn.disabled = false;
    stopBtn.disabled = false;
    pauseBtn.disabled = false;
    startBtn.disabled = true;
    if(!timer){
    timer = setInterval(run, 10);
    }
}
function run(){
    stopWatch.textContent = (min<10 ? "0"+ min:min) + ":" + (sec<10 ? "0" + sec : sec) + ":" + (ms<10 ? "0" + ms : ms);
    ms++;
    if(ms==100){
        ms =0;
        sec++;
    }
    if(sec==60){
        sec=0;
        min++;
    }
}
function pause(){
    clearInterval(timer);
    timer = false;
    if(pauseBtn.textContent=='PAUSE'){
    pauseBtn.textContent = 'CONTINUE';
    
    }
    else{
        pauseBtn.textContent = 'PAUSE';
        startClock();
    }
}
function reset(){
    if(pauseBtn.textContent=='CONTINUE'){
        pauseBtn.textContent = 'PAUSE';    
    }
    sec =0;
    min =0;
    ms= 0;
    stopWatch.textContent = (min<10 ? "0"+ min:min) + ":" + (sec<10 ? "0" + sec : sec) + ":" + (ms<10 ? "0" + ms : ms);
    clearInterval(timer);
    timer = false;
    stopBtn.disabled = true;
    pauseBtn.disabled = true;
    startBtn.disabled = false;
    lapBtn.disabled = true;

}
function laps(){
   
    let node = document.createElement('li');
    node.textContent = (min<10 ? "0"+ min:min) + ":" + (sec<10 ? "0" + sec : sec) + ":" + (ms<10 ? "0" + ms : ms);
    ulDiv.appendChild(node);
}