
"use strict"

alert ("Привіт, це гра, де потрібно вгадати число від 1 до 10");

let readyToPlay = confirm ("Готові почати гру?");

if (readyToPlay){
    alert ("Давайте грати!");
} else {
    alert ("Шкода, що ви вирішили не грати. Можливо, наступного разу!");
}

const randomNumber = Math.floor(Math.random() * 10) + 1;
const userGuess = prompt("Спробуйте вгадати число від 1 до 10");
const guess = Number(userGuess);

if (!isNaN(guess) && guess === randomNumber){
alert(`Вітаю! Ви вгадали число ${guess}!`);
} else {
    alert(`На жаль, ви не вгадали. Правильне число було: ${randomNumber}`);
}