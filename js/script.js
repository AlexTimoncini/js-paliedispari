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
    for (let i = 0; i < randomWord.length; i++){
        if (randomWord[i] != randomWord[randomWord.length - 1 - i]){
            return false;
        }
    }
    return true;
}

function alreadyTakenChecker(pickedArray, pickedWord){
    for (let i = 0; i < pickedArray.length; i++){
        if (pickedArray[i] === pickedWord){
            return true;
        }
    }
    return false
}