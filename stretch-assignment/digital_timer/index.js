const timerLength = 10000;
const timerInter = 10;
let count = 0

const timer = setInterval(update, 10);
setTimeout(stop, 10000);
function stop(){
    clearInterval(timer); 
    document.querySelectorAll(".digit").forEach(i => i.style.color = "red");
}

function timeLeft(){
    count++;
    return  timerLength - (count * timerInter);
}

function update(){
    const left = timeLeft();
    if(left > 10000){
        document.querySelector("#secondTens").innerText = 1;
    }
    else{
        document.querySelector("#secondTens").innerText = 0;
    }
    if(left > 1000){
        document.querySelector("#secondOnes").innerText = Math.floor(left / 1000);
    }
    else{
        document.querySelector("#secondOnes").innerText = 0;
    }
    if(left > 100){
        document.querySelector("#msHundreds").innerText = Math.floor(left/100) % 10;
    }
    else{
        document.querySelector("#msHundreds").innerText = 0;
    }
    document.querySelector("#msTens").innerText = Math.floor(left/10) % 10;

}
