var km = parseInt(prompt("Inserisci i km da percorrere"));

var eta = parseInt(prompt("Inserisci la tua età"));

var prezzoKm = 0.2;

var prezzoBiglietto = prezzoKm * km;

// Se anni < 18, 20% discount

// Se anni >=65, 40% discount

if (eta < 18){
  var sconto = prezzoBiglietto * 0.2;
  prezzoBiglietto = prezzoBiglietto - sconto;
  console.log(sconto.toFixed(2));
} else if (eta >= 65 ) {
  var sconto = prezzoBiglietto * 0.4;
  prezzoBiglietto = prezzoBiglietto - sconto;
  console.log(sconto.toFixed(2));
}


document.getElementById('prezzo').innerHTML = "Il prezzo del tuo biglietto è di €" + prezzoBiglietto;
