// inserisci email
const user = prompt("inserisci email utente");

//lista email consentite
const email = ["marco@email.it", "luca@email.it", "paolo@email.it"];

console.log(email[0]);
console.log(email[1]);
console.log(email[2]);
//valori esistenti
if (user === email[(0, 1, 2)]) {
  console.log("bentornato");
}
//valori non esistenti
else if (user != email) {
  console.log("utente inesistente");
}
