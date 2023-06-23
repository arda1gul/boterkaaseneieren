console.log("Game Loaded")

document.querySelector(".submitName").onclick = function() {
    let playerOne = document.querySelector(".name").value;
    document.querySelector(".naam").innerHTML = `Welkom ${playerOne}`
}

document.querySelector(".submit").onclick = function() {
    let playerTwo = document.querySelector(".speler2").value;
    document.querySelector(".naamTwee").innerHTML = `Welkom ${playerTwo}`
    window.location.href = "game.html"
}


document.querySelector(".speler1").innerHTML = `${playerOne}`
document.querySelector(".speler2").innerHTML = `${playerTwo}`
