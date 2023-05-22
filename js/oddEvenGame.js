// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

let evenOddButtonDom = document.getElementById('evenOddButton');
let oddBtnDom = document.getElementById('odd_choice');
let evenBtnDom = document.getElementById('even_choice');

let userSide;
let userNumber;

let firstFinger = document.getElementById('finger-1');
let secondFinger = document.getElementById('finger-2');
let thirdFinger = document.getElementById('finger-3');
let fourthFinger = document.getElementById('finger-4');
let fifthFinger = document.getElementById('finger-5');

let sideActivated = false;
let valueActivated = false;

let winnerBannerDom = document.getElementById('output');

oddBtnDom.addEventListener('click', function(){
    oddBtnDom.classList.add('active');
    evenBtnDom.classList.remove('active');
    userSide = true;
    sideActivated = true;
    activeBtn(sideActivated, valueActivated, evenOddButtonDom);
});

evenBtnDom.addEventListener('click', function(){
    evenBtnDom.classList.add('active');
    oddBtnDom.classList.remove('active');
    userSide = false;
    sideActivated = true;
    activeBtn(sideActivated, valueActivated, evenOddButtonDom);

});

firstFinger.addEventListener('click', function(){
    firstFinger.classList.add('active');
    secondFinger.classList.remove('active');
    thirdFinger.classList.remove('active');
    fourthFinger.classList.remove('active');
    fifthFinger.classList.remove('active');
    userNumber = 1;
    valueActivated = true;
    activeBtn(sideActivated, valueActivated, evenOddButtonDom);
});

secondFinger.addEventListener('click', function(){
    firstFinger.classList.remove('active');
    secondFinger.classList.add('active');
    thirdFinger.classList.remove('active');
    fourthFinger.classList.remove('active');
    fifthFinger.classList.remove('active');
    userNumber = 2;
    valueActivated = true;
    activeBtn(sideActivated, valueActivated, evenOddButtonDom);
});

thirdFinger.addEventListener('click', function(){
    firstFinger.classList.remove('active');
    secondFinger.classList.remove('active');
    thirdFinger.classList.add('active');
    fourthFinger.classList.remove('active');
    fifthFinger.classList.remove('active');
    userNumber = 3;
    valueActivated = true;
    activeBtn(sideActivated, valueActivated, evenOddButtonDom);
});

fourthFinger.addEventListener('click', function(){
    firstFinger.classList.remove('active');
    secondFinger.classList.remove('active');
    thirdFinger.classList.remove('active');
    fourthFinger.classList.add('active');
    fifthFinger.classList.remove('active');
    userNumber = 4;
    valueActivated = true;
    activeBtn(sideActivated, valueActivated, evenOddButtonDom);
});

fifthFinger.addEventListener('click', function(){
    firstFinger.classList.remove('active');
    secondFinger.classList.remove('active');
    thirdFinger.classList.remove('active');
    fourthFinger.classList.remove('active');
    fifthFinger.classList.add('active');
    userNumber = 5;
    valueActivated = true;
    activeBtn(sideActivated, valueActivated, evenOddButtonDom);
});

evenOddButtonDom.addEventListener('click', function(){
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
    console.log(botNumber);
    let sum = botNumber + userChoiceNumber;
    console.log(sum);
    if ((sum % 2 == 0 && evenOrOdd) || (sum % 2 != 0 && !evenOrOdd)){
        return true;
    }
    return false;
}

function activeBtn(firstValue, secondValue, disabledBtn){
    if (firstValue == true && secondValue == true){
    disabledBtn.removeAttribute('disabled');
    disabledBtn.classList.remove('disabled');
}
}



