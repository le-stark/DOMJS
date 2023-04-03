'use strict';
//Initialize the game
let min = 0;
let max = 0;
randomNum(); //Generate range
let result = 0;
result = Math.floor(Math.random() * (max - min +1) + min); //generate result
console.log(result);
const between = document.querySelector(".between");
between.textContent = `Between ${min} and ${max}`;
let score = document.querySelector(".score"); //generate score
let pScore = 0;
score.value = 0;
let count = 10;
let highscoreText = document.querySelector(".highscore");
let hscore = 0;
const message = document.querySelector(".message");
const resultNum = document.querySelector(".number")


pressCheck();
pressAgain();

function pressCheck(){
    const btnCheck = document.querySelector(".check");
    btnCheck.addEventListener('click', () => {
        getInput();
        count -= 1;
        console.log(count);
        if (count === 0) {
            recordHighscore(pScore); //record highscore
            resultNum.textContent = result;
            setTimeout(() => {
                reset(); //out of chance
            }, 5000)
        }
        
    })
}
function pressAgain(){
    const btnAgain = document.querySelector(".again")
    btnAgain.addEventListener('click', () => {
        reset();
    })
}

function getInput(){
    const inputNum = document.querySelector(".guess");
    console.log(inputNum.value);
    if(inputNum.value >= min && inputNum.value <= max){
        if (inputNum.value == result){
            message.textContent = "Valid";
            pScore += 20;
            score.textContent = pScore;
            changeNum();
        } else {
            message.textContent = "Invalid";
        }
    } else{
        message.textContent = "Invalid";
    }
}

function randomNum(){
    min = Math.floor(Math.random() * 101);
    max = Math.floor(Math.random() * 101);
    if(min > max){
        let temp = max;
        max = min;
        min = temp;
    }
}

function reset(){
    message.textContent = "Start guessing...";
    score.textContent = 0;
    count = 10;
    pScore = 0;
    resultNum.textContent = "?";
    changeNum();
}

function changeNum(){
    randomNum();
    result = Math.floor(Math.random() * (max - min +1) + min); //generate result
    between.textContent = `Between ${min} and ${max}`;
}

function recordHighscore(pScore){
    if (hscore < pScore){
        hscore = pScore;
        highscoreText.textContent = hscore;
    }
}
