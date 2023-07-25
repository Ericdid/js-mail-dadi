// inserisci email
const user = prompt("inserisci email utente");

//lista email consentite
const email = ["marco@email.it", "luca@email.it", "paolo@email.it"];

//valori esistenti
if (user == email) {
  console.log("bentornato");
}
// valori non esistenti
else {
  console.log("utente inesistente");
}
