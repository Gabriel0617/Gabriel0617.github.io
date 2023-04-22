const btnClick = document.getElementById('clickable');
btnClick.addEventListener('click', changePosition);

const pageHeader = document.getElementById('pageHeader');
let clickCounter = 0;
let timerBegin;
let timerEnd;
let finalTime;


function changePosition(event){
    const targetBtn = event.target;
    clickCounter++;
    if(clickCounter < 5){
        if(clickCounter < 2){
            timerBegin = Date.now();
        }
    pageHeader.style.display = 'none';
    targetBtn.style.top = String(randomIntFromInterval(0, 800)) + 'px';
    targetBtn.style.left = String(randomIntFromInterval(0, 1300)) + 'px';
    }else if(clickCounter == 5){
        targetBtn.style.left = '650px';
        targetBtn.style.top = '600px';
        timerEnd = Date.now();
        finalTime = (timerEnd-timerBegin) / 1000;
        console.log(finalTime);
        pageHeader.style.display = 'block';
        pageHeader.textContent = 'It took you ' + String(finalTime) + " seconds";
        targetBtn.textContent = 'Reset';
        }else{
            clickCounter = 0;
            pageHeader.textContent = 'How fast can you click the button?';
            targetBtn.textContent = 'Click Me';
        }
    
}



function randomIntFromInterval(min, max){
    return Math.floor(Math.random() *  (max - min + 1) + min);
}

console.log();