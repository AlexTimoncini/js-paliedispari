// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

let userWord = prompt('Inserisci una parola per verificare se sia palindroma o meno');

console.log(paliChecker(userWord));

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