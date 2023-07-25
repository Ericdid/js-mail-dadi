// lanciamo due dadi a 6 facce

const userDice = Math.floor(Math.random() * 12) + 1;

// // il computer lancia due dadi a 6 facce

const computerDice = Math.floor(Math.random() * 12) + 1;

console.log(userDice);
console.log(computerDice);

// SE il giocatore vince

if (userDice > computerDice) {
  alert("ha vinto il giocatore");
}

// ALTRIMENTI SE vince il computer
else if (computerDice > userDice) {
  alert("ha vinto il computer");
}

// ALTRIMENTI
else {
  alert("pareggio");
}
