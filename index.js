var firstPlayerDice = Math.floor((Math.random() * 6) + 1);
var secondPlayerDice = Math.floor((Math.random() * 6) + 1);

if (firstPlayerDice == 1) {
    document.querySelector(".img1").src = "images/dice1.png"
} else if (firstPlayerDice == 2) {
    document.querySelector(".img1").src = "images/dice2.png"
} else if (firstPlayerDice == 3) {
    document.querySelector(".img1").src = "images/dice3.png"
} else if (firstPlayerDice == 4) {
    document.querySelector(".img1").src = "images/dice4.png"
} else if (firstPlayerDice == 5) {
    document.querySelector(".img1").src = "images/dice5.png"
} else if (firstPlayerDice == 6) {
    document.querySelector(".img1").src = "images/dice6.png"
}


/* SECOND PLAYER */

if (secondPlayerDice == 1) {
    document.querySelector(".img2").src = "images/dice1.png"
} else if (secondPlayerDice == 2) {
    document.querySelector(".img2").src = "images/dice2.png"
} else if (secondPlayerDice == 3) {
    document.querySelector(".img2").src = "images/dice3.png"
} else if (secondPlayerDice == 4) {
    document.querySelector(".img2").src = "images/dice4.png"
} else if (secondPlayerDice == 5) {
    document.querySelector(".img2").src = "images/dice5.png"
} else if (secondPlayerDice == 6) {
    document.querySelector(".img2").src = "images/dice6.png"
}



if (firstPlayerDice > secondPlayerDice) {
    document.querySelector(".container h1").innerHTML = "Player 1 Wins";
    document.querySelector(".player1").className="fas fa-check dice fa-5x player1"
    document.querySelector(".player1").style.color="green";

} else if (firstPlayerDice < secondPlayerDice) {
    document.querySelector(".container h1").innerHTML = "Player 2 Wins";
    document.querySelector(".player2").className="fas fa-check dice fa-5x player2"
    document.querySelector(".player2").style.color="green";
} else if (firstPlayerDice == secondPlayerDice) {
    document.querySelector(".container h1").innerHTML = "DRAW";
}
