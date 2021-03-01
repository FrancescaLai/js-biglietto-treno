var km = parseInt(prompt("Inserisci i km da percorrere"));

var eta = parseInt(prompt("Inserisci la tua età"));

var prezzoKm = 0.2;

var prezzoBiglietto = prezzoKm * km;

document.getElementById('prezzo').innerHTML = "Il prezzo del tuo biglietto è di €" + prezzoBiglietto;
