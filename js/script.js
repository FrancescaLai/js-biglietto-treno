/* Chiedi all'utente il numero di km che vuole percorrere e l'età.

Sulla base di queste info calcola il prezzo totale del viaggio.

Il prezzo del biglietto è definito in base ai km(0.21€ al km), ma va applicato
uno sconto del 20% per i minorenni e del 49% per gli over 65. */

//1. Chiedo i km da percorrere
var km = parseInt(prompt("Inserisca i km da percorrere"));
// Validazione sui km
if ( isNaN(km)) {
  alert("Per favore, inserisca un valore numerico");
  var km = parseInt(prompt("Inserisca i km da percorrere"));
}

// 2. Chiedo l'età
var eta = parseInt(prompt("Inserisca l'età"));
// Validazione sull'età
if ( isNaN(eta)) {
  alert('Per favore, inserisca l\'età');
  var eta = parseInt(prompt("Inserisca l'età"));
}
// 3. Calcolo il prezzo del biglietto
var prezzoKm = 0.2;
var prezzoBiglietto = prezzoKm * km;

// Se età < 18, 20% discount , se età >=65, 40% discount
if ( isNaN(km) || isNaN(eta)) {
    alert("I dati inseriti non risultano corretti");
    prezzoBiglietto = "Non è stato possibile calcolare il prezzo del biglietto";
} else if (eta < 18) {
    var sconto = prezzoBiglietto * 0.2;
    prezzoBiglietto = prezzoBiglietto - sconto;
    prezzoBiglietto = "Ha diritto alla tariffa agevolata Under18, il prezzo del suo biglietto è di: " + prezzoBiglietto.toFixed(2) + "€";
    document.getElementById('prezzo').innerHTML = prezzoBiglietto;
} else if (eta >= 65) {
    var sconto = prezzoBiglietto * 0.4;
    prezzoBiglietto = prezzoBiglietto - sconto;
    prezzoBiglietto = "Ha diritto alla tariffa Over65, il prezzo del suo biglietto è di: " + prezzoBiglietto.toFixed(2);
    document.getElementById('prezzo').innerHTML = prezzoBiglietto;
} else {
    prezzoBiglietto = "Il prezzo del suo biglietto è di: " +prezzoBiglietto.toFixed(2);
    document.getElementById('prezzo').innerHTML = prezzoBiglietto;
}


// console.log("Il prezzo del tuo biglietto è di €" + prezzoBiglietto);
