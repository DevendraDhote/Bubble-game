var bottom = document.querySelector('#bottom');
var timerelem = document.querySelector('#timer');
var click = document.querySelector('#click');
var scoreelem = document.querySelector('#score');
var modal = document.querySelector('#modal');
var allscore = document.querySelector('#allscore');


var score = 0;
var randomnum;
var timer = 60;
var temp = ``;

function body(){
    for(i = 0; i <=97; i++){
        var guessnum = Math.floor(Math.random()*10);
        temp += `<div id="bubble">${guessnum}</div>`
    }
    
    bottom.innerHTML = temp;
}

function TimerFunc(){
    setInterval(() => {
        if(timer === -1){
            clearInterval()
            bottom.innerHTML = "";
            modal.style.display = 'initial';
            allscore.textContent = `Your overall Score is : ${score}`;
        }
        else{
            timerelem.textContent = timer--;
        }
    }, 1000);
}

function Clicked(){
    randomnum = Math.floor(Math.random()*10)
    click.textContent = randomnum;
}

// function IncreaseScore(){
//     score = score + 10;
//     scoreelem.textContent = score;
// }

bottom.addEventListener('click', function(dets){
    var Clickedbubble = dets.target.textContent;
    if(randomnum == Clickedbubble ){
        score = score + 10;
        scoreelem.textContent = score;
        Clicked();
        bottom.innerHTML = "";
        temp = ``;
        body();
   }  
});

Clicked();
TimerFunc();
body();
