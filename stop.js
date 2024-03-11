display=document.getElementById("display")
startTime=0
elapsedTime=0
running=false
timer;
function start(){
    if(!running){
        startTime=Date.now()-elapsedTime
        timer=setInterval(update,10)
        running=true
    }
}

function stop(){
       clearInterval(timer);
       elapsedTime=Date.now()-startTime;
       running=false

}
function reset(){
    clearInterval(timer);
    elapsedTime=0
    startTime=0
    running=false
    display.textContent='00:00:00:00'
}
function update(){
    const currentTime=Date.now();
    elapsedTime=currentTime-startTime;

    let hours=Math.floor(elapsedTime/(1000*60*60)).toString().padStart(2,0);
    let minutes=Math.floor(elapsedTime/(1000*60)).toString().padStart(2,0);
    let seconds = Math.floor(elapsedTime/1000%60).toString().padStart(2,0);
    let miliseconds=Math.floor(elapsedTime%1000/10).toString().padStart(2,0);

      display.textContent=`${hours}:${minutes}:${seconds}:${miliseconds}`

}

document.addEventListener('keydown',(event)=>{
    event.preventDefault();
    if(event.key===' '){
        if(running===false){
            start();
        }
        else if(running===true){
            stop();
        }
    }
    else if(event.key==='r'){
         reset();
    }
})
