// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
let userWord;
let paliButtonDom = document.getElementById('paliButton');
paliButtonDom.addEventListener('click', function(){
    userWord = document.getElementById('userWord').value;
    if (paliChecker(userWord)){
        console.log('this word is plaindrome');
    } else {
        console.log('this word is not plaindrome');
    }
});


function paliChecker(randomWord){
    let splitWord = [];
    let backWord = '';
    for (let i = 0; i < randomWord.length; i++){
        splitWord.push(userWord.charAt(i));
    }
    splitWord.reverse();
    for (let i = 0; i < randomWord.length; i++){
        backWord += splitWord[i];
    }
    if (randomWord === backWord){
        return true;
    }
    return false;
}
