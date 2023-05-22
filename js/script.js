// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
let paliButtonDom = document.getElementById('paliButton');
let wordOutputDom = document.getElementById('words_output');
let userWord = document.getElementById('userWord');
let wordList = [];
let score = 0;
let scoreDom = document.getElementById('score');

paliButtonDom.addEventListener('click', function(){
    if (paliChecker(userWord.value) && !alreadyTakenChecker(wordList, userWord.value)){
        let liElementDom = document.createElement('li');
        liElementDom.append(userWord.value);
        wordOutputDom.appendChild(liElementDom);
        userWord.classList.add('right');
        userWord.classList.remove('wrong');
        wordList.push(userWord.value);
        score += parseInt(scoreCalc(userWord.value));
        scoreDom.innerHTML = score;
    } else if (!paliChecker(userWord.value)){
        console.log('this word is not palindrome');
        userWord.classList.remove('right');
        userWord.classList.add('wrong');
    } else {
        console.log('this word is already taken');
        userWord.classList.remove('right');
        userWord.classList.add('wrong');
    }
    userWord.value = '';
});

function scoreCalc(rigthWord){
    let finalScore = 0;
    finalScore += (rigthWord.length * 1000) + 100;
    return finalScore;
}

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

function alreadyTakenChecker(pickedArray, pickedWord){
    for (let i = 0; i < pickedArray.length; i++){
        if (pickedArray[i] === pickedWord){
            return true;
        }
    }
    return false
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
let winnerBannerDom = document.getElementById('output');

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
        winnerBannerDom.innerHTML = 'Ez Win per nulla sudata';
        winnerBannerDom.classList.add('winner');
        winnerBannerDom.classList.remove('loser');
    } else { 
        winnerBannerDom.innerHTML = 'This is totally scripted';
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



