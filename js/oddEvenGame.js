// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

let evenOddButtonDom = document.getElementById('evenOddButton');
let oddBtnDom = document.getElementById('odd_choice');
let evenBtnDom = document.getElementById('even_choice');
let userSide;
let winnerBannerDom = document.getElementById('output');
console.log('ciao');

oddBtnDom.addEventListener('click', function(){
    oddBtnDom.classList.add('active');
    evenBtnDom.classList.remove('active');
    evenOddButtonDom.removeAttribute('disabled');
    evenOddButtonDom.classList.remove('disabled');
    userSide = true;
});

evenBtnDom.addEventListener('click', function(){
    evenBtnDom.classList.add('active');
    oddBtnDom.classList.remove('active');
    evenOddButtonDom.removeAttribute('disabled');
    evenOddButtonDom.classList.remove('disabled');
    userSide = false;
});

evenOddButtonDom.addEventListener('click', function(){
    let userNumber = parseInt(document.getElementById('userNumber').value);
    if (evenOddChecker(userNumber, userSide)){
        winnerBannerDom.innerHTML = 'Ez Win per nulla sudata-';
        winnerBannerDom.classList.add('winner');
        winnerBannerDom.classList.remove('loser');
    } else { 
        winnerBannerDom.innerHTML = 'This is totally scripted -_-';
        winnerBannerDom.classList.remove('winner');
        winnerBannerDom.classList.add('loser');
    }

});

function randomNumber(min, max){
    return Math.floor(Math.random() * max) + min;
}

function evenOddChecker(userChoiceNumber, evenOrOdd){
    let botNumber = randomNumber(1, 5);
    let sum = botNumber + userChoiceNumber;
    if ((sum % 2 == 0 && evenOrOdd) || (sum % 2 != 0 && !evenOrOdd)){
        return true;
    }
    return false;
}



