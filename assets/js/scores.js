
//creating li element
let storedScore = JSON.parse(localStorage.getItem("scores"));
let highScorer = document.getElementById("highscores");
let liElement = document.createElement("li");
let highScores = highScorer.appendChild(liElement);
highScores.textContent = storedScore[1] + "-" + storedScore[0];

let clearHighScoreBtn = document.getElementById("clear");
clearHighScoreBtn.addEventListener("click", function (event) {
    if (event.target.matches("button")) {
        localStorage.setItem("scores", JSON.stringify([0, "AA"]));
        highScores.textContent = ""


    }



})
