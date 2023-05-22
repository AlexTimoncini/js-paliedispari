// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
let paliButtonDom = document.getElementById('paliButton');
paliButtonDom.addEventListener('click', function(){
    let userWord = document.getElementById('userWord').value;
    if (paliChecker(userWord)){
        console.log('this word is palindrome');
    } else {
        console.log('this word is not palindrome');
    }
});

function paliChecker(randomWord){
    let splitWord = [];
    let reverseSplitWord = [];
    let backWord = '';
    for (let i = 0; i < randomWord.length; i++){
        splitWord.push(randomWord.charAt(i));
    }
    while (splitWord.length > 0){
        reverseSplitWord.push(splitWord.pop());
    }
    for (let i = 0; i < randomWord.length; i++){
        backWord += reverseSplitWord[i];
    }
    if (randomWord.toLowerCase() === backWord.toLowerCase()){
        return true;
    }
    return false;
}

// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

let evenOddButtonDom = document.getElementById('evenOddButton');
let oddBtnDom = document.getElementById('odd_choice');
let evenBtnDom = document.getElementById('even_choice');
let userSide;

oddBtnDom.addEventListener('click', function(){
    oddBtnDom.classList.add('active');
    evenBtnDom.classList.remove('active');
    evenOddButton.removeAttribute('disabled');
    userSide = true;
});

evenBtnDom.addEventListener('click', function(){
    evenBtnDom.classList.add('active');
    oddBtnDom.classList.remove('active');
    evenOddButton.removeAttribute('disabled');
    userSide = false;

});

evenOddButtonDom.addEventListener('click', function(){
    let userNumber = parseInt(document.getElementById('userNumber').value);
    if (evenOddChecker(userNumber, userSide)){
        console.log('Ez Win');
    } else {
        console.log('This is scripted')
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



