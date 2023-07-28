'use strict';


// const message = document.querySelector(".message").textContent;
// console.log(message);


// document.querySelector(".message").textContent = "Correct Number 👩";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 999;
// document.querySelector(".guess").value = 1;

let answerNumber = Math.trunc(Math.random() * 20) +1;
let score = 20;
let highScore = 0;
console.log(answerNumber);

const displayMessage = function(content){
    document.querySelector(".message").textContent = content;
}
const displayScore = function(score){
    document.querySelector(".score").textContent = score;
}
const compareScore = function (content) {  
    if(score > 0){
        displayMessage(content);
        score--;
        displayScore(score);
    }    
    if(score == 0)
        displayMessage("You lose the game👮‍♂️");
}

const clickButton = document.querySelector(".check").addEventListener("click", (e)=>{
    const guess = Number(document.querySelector(".guess").value);
    if(!guess){
        displayMessage("No Number!👮‍♂️");
        return;
    }
    if(score == 0) {
        return;
    }
    if(guess > answerNumber){
        compareScore("too high");
    }
    else if(guess < answerNumber){
        compareScore("too low");
    }
    else{
        if(score > highScore){
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }
        displayMessage("Correct👍");
        document.querySelector("body").style.backgroundColor="#60b347";
        document.querySelector(".number").style.width="30rem";
        document.querySelector(".number").textContent=answerNumber;
    }
});

document.querySelector(".again").addEventListener("click", (e)=>{
    displayMessage("Start guessing...");
    document.querySelector("body").style.backgroundColor="#222";
    document.querySelector(".number").style.width="15rem";
    document.querySelector(".number").textContent="?";
    // document.querySelector(".label-highscore").textContent="0";
    document.querySelector(".guess").value = "";
    score = 20;
    displayScore(score);
    answerNumber = Math.trunc(Math.random() * 20) +1;
    console.log(answerNumber);
})