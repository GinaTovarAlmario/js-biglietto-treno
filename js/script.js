/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e
 l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio,
secondo queste regole:
1.il prezzo del biglietto è definito in base ai km (0.21 € al km)
2.va applicato uno sconto del 20% per i minorenni
3.va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali,
per indicare centesimi sul prezzo). 
Bonus
1.Stampare il prezzo finale sulla pagina invece che in console
2.Aggiungere, sempre in pagina, altre informazioni, come il prezzo prima dello sconto e l'età e il chilometraggio indicati dall'utente
3.Abbellire col CSS
*/

/*
1 Definisco una variabile per lo sconto
2 Definisco una variabile che mi calcola il prezzo per km
3 Chiedo all'utente il numero di km che vorrebbe percorrere
4 Chiedo l'età all'utente
5 Controllo se utente ha diritto ad uno sconto
    in base all'età
5 Calcolo il prezzo del viaggio tenendo conto dell'eventuale sconto
6- Stampo il risultato
*/
// primo controllo i collegamenti
console.log('Js ok');

// Fase preparatoria
let discount;
let message = "";
let finalMessage;
const resultElement = document.getElementById('result');
// Fase di raccolta dati
const kmChoice = parseInt(prompt("Quanti kilometri vorresti percorrere?", "10"));
const age =prompt("Quanti anni hai?", "17");

console.log(kmChoice);
console.log(age);

// Fase di lavorazione dati
let ticketPrice = (0.21 * kmChoice);

if (age > 65 ) {
    // sconto del 40%
    discount = 0.4;
    message = ("Complimenti! Hai diritto ad uno socnto del 40%");
}else if ( age < 18 ){
    // socnto del 20%
    discount = 0.2;
    message = ("Complimenti! Hai diritto ad uno sconto del 20%");
} else {
    // prezzo full
    discount = 0;
}
// mi serve il risultato con due decimali
let finalPrice = (ticketPrice * (1 - discount)).toFixed(2) + " €";
// Fase di preparazione output
finalMessage = `Il prezzo finale del tuo biglietto è ${finalPrice}`;
console.log(message , finalMessage);
resultElement.innerHTML = message + "<br>"+ finalMessage;
