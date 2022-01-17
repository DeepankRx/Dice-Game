function result() {
    let firstDieImage = document.getElementById("die_1");
    let secondDieImage = document.getElementById("die_2");
    let firstRandomNumber = Math.random();
    firstRandomNumber = firstRandomNumber * 6;
    firstRandomNumber = Math.floor(firstRandomNumber) + 1;
    let secondRandomNumber = Math.random();
    secondRandomNumber = secondRandomNumber * 6;
    secondRandomNumber = Math.floor(secondRandomNumber) + 1;
    if (firstRandomNumber == 1) {
        firstDieImage.src = "images/dice1.png";
    } else if (firstRandomNumber == 2) {
        firstDieImage.src = "images/dice2.png";
    } else if (firstRandomNumber == 3) {
        firstDieImage.src = "images/dice3.png";
    } else if (firstRandomNumber == 4) {
        firstDieImage.src = "images/dice4.png";
    } else if (firstRandomNumber == 5) {
        firstDieImage.src = "images/dice5.png";
    } else if (firstRandomNumber == 6) {
        firstDieImage.src = "images/dice6.png";
    }
    if (secondRandomNumber == 1) {
        secondDieImage.src = "images/dice1.png";
    } else if (secondRandomNumber == 2) {
        secondDieImage.src = "images/dice2.png";
    } else if (secondRandomNumber == 3) {
        secondDieImage.src = "images/dice3.png";
    } else if (secondRandomNumber == 4) {
        secondDieImage.src = "images/dice4.png";
    } else if (secondRandomNumber == 5) {
        secondDieImage.src = "images/dice5.png";
    } else if (secondRandomNumber == 6) {
        secondDieImage.src = "images/dice6.png";
    }
    if (firstRandomNumber > secondRandomNumber) {
        let winner = document.getElementById("winner_announcement");
        winner.innerHTML = "🚩Player 1 Wins";
        winner.style.fontSize = "100px";
    } else if (firstRandomNumber < secondRandomNumber) {
        let winner = document.getElementById("winner_announcement");
        winner.innerHTML = "Player 2 Wins 🚩";
        winner.style.fontSize = "100px";
    } else {
        let winner = document.getElementById("winner_announcement");
        winner.innerHTML = "Draw";
        winner.style.fontSize = "100px";
    }
}

let refresh = document.getElementById("winner_announcement");
refresh.addEventListener("click", function () {
    result();
});
document.addEventListener("keypress", function () {
    result();

});