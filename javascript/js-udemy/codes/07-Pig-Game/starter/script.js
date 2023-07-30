'use strict';

const diceImg = document.querySelector(".dice");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const player0Score = document.querySelector("#score--0");
const player1Score = document.querySelector("#score--1");
const player0CurrentScore = document.querySelector("#current--0");
const player1CurrentScore = document.querySelector("#current--1");
const newGameBtn = document.querySelector(".btn--new");
const rollDiceBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");
let activePlayer = player0;
let isGameOver = false;
const totalScore = [0,0];

const generateDiceNumber = function () {  
    return Math.trunc(Math.random() * 6) + 1;
}

const inital = function () {  
    isGameOver = false;
    activePlayer = 0;
    player0.classList.remove("player--winner");
    player1.classList.remove("player--winner");
    diceImg.classList.add("hidden");
    player0.classList.add("player--active");
    player1.classList.remove("player--active");
    player0Score.textContent = 0;
    player1Score.textContent = 0;
    player0CurrentScore.textContent = 0;
    player1CurrentScore.textContent = 0;
    totalScore[0] = 0;
    totalScore[1] = 0;
}

const checkWinner = function (score) {
    if(score >= 100){
        if(activePlayer === 0){
            player0.classList.remove("player--active");
            player0.classList.add("player--winner");
        }
        else{
            player1.classList.remove("player--active");
            player1.classList.add("player--winner");
        }
        isGameOver = true;
    }
    return isGameOver;
}

const switchPlayer = function () {  
    if(activePlayer === 0){
        activePlayer = 1;
        player0CurrentScore.textContent = 0;
        player0.classList.remove("player--active");
        player1.classList.add("player--active");
    }
    else{
        player1CurrentScore.textContent = 0;
        activePlayer = 0;
        player0.classList.add("player--active");
        player1.classList.remove("player--active");
    }
}

inital();

newGameBtn.addEventListener("click",inital);
rollDiceBtn.addEventListener("click", ()=>{
    if(isGameOver) 
        return;
    const dicNumber = generateDiceNumber();
    diceImg.classList.remove("hidden");
    diceImg.src = `dice-${dicNumber}.png`;
    if(dicNumber === 1){
        switchPlayer();
    }
    else{
        if(activePlayer === 0){
            player0CurrentScore.textContent = Number(player0CurrentScore.textContent) + dicNumber;
        }
        else{
            player1CurrentScore.textContent = Number(player1CurrentScore.textContent) + dicNumber;
        }
    }
})

holdBtn.addEventListener("click",()=>{
    if(isGameOver) 
        return;
    if(activePlayer === 0){
        totalScore[0] += Number(player0CurrentScore.textContent);
        player0Score.textContent = totalScore[0];
        if(checkWinner(totalScore[0]))
            return;
    }
    else{
        totalScore[1] += Number(player1CurrentScore.textContent);
        player1Score.textContent = totalScore[1];
        if(checkWinner(totalScore[1]))
            return;
    }
    switchPlayer();
});