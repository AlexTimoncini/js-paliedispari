// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
let userWord;
let paliButtonDom = document.getElementById('paliButton');
paliButtonDom.addEventListener('click', function(){
    userWord = document.getElementById('userWord').value;
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
