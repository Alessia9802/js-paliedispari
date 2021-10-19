// Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma

/* STRUMENTI:
- prompt
- function
- if
 */

//prompt
const user = prompt("inserisci una parola");
console.log(user);

const letters = "";
const splits = user.split("");

console.log(splits);

//funzione

function invertiParola(user) {
  var strInversa = user.split("").reverse().join("");
  return strInversa;
}

var parolaInversa = invertiParola(user);

if (user == parolaInversa) {
  console.log("la parola è palindroma");
} else {
  console.log("la parola non è palindroma");
}
