/*
Descrizione
Il computer deve generare 16 numeri casuali (bombe) tra 1 e 100.
I numeri non possono essere duplicati
In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L'utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati (bombe), la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
La partita termina quando il giocatore inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito.
BONUS: (da fare solo se funziona tutto il resto)
all'inizio il software richiede anche una difficoltà all'utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 =>  tra 1 e 80
con difficoltà 2 => tra 1 e 50
*/

//VARIABILI
var size = 10; // grandezza del campo di gioco
var bombe = 5; //numero di bombe
var numPc = 0; //numero generato dal pc
var numUtente = 0; //numeri inseriti dall'utente
var campoBombe = []; //numeri bombe in gioco
var campoGioco = []; //numeri in gioco

//LOOP CREAZIONE BOMBE DEL PC
for (var i = 0; i < bombe;) {
  numPc = random(1 , size);
  if (! campoBombe.includes(numPc) ) {
    campoBombe.push(numPc);
    i++;
  }
}
console.log(campoBombe);

//LOOP GIOCO
var c = 0;
while ( ( c < (size - bombe) ) && (! campoBombe.includes(campoGioco.pop() ) ) ) {
  var numUtente = parseInt( prompt('Inserisci un numero tra 1 e 100') );
  if (! campoGioco.includes(numUtente) ) {
    campoGioco.push(numUtente);
    c++;
  }
  else {
    alert('Hai gia\' inserito questo numero');
  }
}
console.log(campoGioco);

//RISULTATO PARTITA
alert('Il tuo punteggio è : ' + (c - 1) + ' su un massimo di : ' + (size - bombe) );


//UTILITY
/**FUNZIONE NUMERI RANDOM
 *@@ param1 {min} range minimo
 *@@ param2 {max} range massimo
 */
function random(min , max) {
  return Math.floor( Math.random() * (max - min + 1) ) + min;
}
