/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
Sommiamo i due numeri.
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
Dichiariamo chi ha vinto. */

/* STRUMENTI:
- prompt
- math.random
- function
- if
 */

const chooseUserNumber = parseInt(
  prompt("Scegli un numero da 1 a 5  [dispari/pari]")
);
console.log(chooseUserNumber);

function numeroRandomPC() {
  var risultato = Math.floor(Math.random() * 6);
  console.log(risultato);
  return risultato;
}

const generatePc = numeroRandomPC();
console.log(generatePc);

// somma

function addizione(n1, n2) {
  var risultato = n1 + n2;
  return risultato;
}

// Invocare la funzione

var somma = addizione(chooseUserNumber, generatePc);
console.log(somma);
