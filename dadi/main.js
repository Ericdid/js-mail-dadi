// lanciamo due dadi a 6 facce

function player1() {
  return 1 + Math.floor(Math.random() * 12);
}

console.log(player1());

// il computer lancia due dadi a 6 facce

function player2() {
  return 1 + Math.floor(Math.random() * 12);
}

console.log(player2());
