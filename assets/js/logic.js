//DOM variables
let divQuestion = document.getElementById("questions")
let questionTitle = document.getElementById("question-title");
let questionChoices = document.getElementById("choices");
let questionBtn = document.createElement("button");
let endScreen = document.getElementById("end-screen")
let startBtn = document.getElementById("start");
let startScreen = document.getElementById("start-screen");
let quizTimer = document.getElementById("time")
let finalScore = document.getElementById("final-score")
let submit = document.getElementById("submit")
let initial = document.getElementById("initials")




//stat of quiz
let timer = 100

startBtn.addEventListener("click", function (event) {

    if (event.target.matches("button")) {
        divQuestion.classList.replace("hide", "active");
        startScreen.classList.add("hide");
        timeScore()


    }
})


//adding question button amd attribute
for (let i = 0; i < 4; i++) {
    questionBtn = document.createElement("button");        //creating button element              
    let questionChoice = questionChoices.appendChild(questionBtn);
    questionChoice.setAttribute("data-index", i);

};



// Array of functions
let questionsArray = Object.keys(questions);

let currentQuestion = 0




rendering()

//lister  
questionChoices.addEventListener("click", function (event) {

    if (event.target.matches("button")) {
        let buttonIndex = event.target.getAttribute("data-index");
        userAnswer = questionChoices.children[buttonIndex].textContent;
        
    }

    //answer check
    {
        rightAnswer = rendering()



    } if (rightAnswer === userAnswer) {
        // message.textContent="correct";

    } else {
        // message.textContent="wrong";
        timer -= 10;

    }

    if (currentQuestion < 9) {
        currentQuestion++;
        ;
        rightAnswer = rendering();

        //end of quiz
    } else {
        endOfQuiz()

    }


});
//rendering Answer and questions function
function rendering(params) {
    let rightAnswer = window[questionsArray[currentQuestion]]();
    return rightAnswer
}
//end of quiz function
function endOfQuiz(params) {
    divQuestion.classList.replace("active", "hide");
    endScreen.classList.replace("hide", "active");
    clearInterval(intervalId)
}

// timer function
let intervalId = 0
function timeScore(params) {
    intervalId = setInterval(function () {
        timer--
        quizTimer.innerHTML = timer
        finalScore.innerHTML = timer
        submitScore.splice(0, 1, timer)
        if (timer <= 0) {

            endOfQuiz()


        }


    }, 1000)


}

//##submitting score and initials##

let submitScore = []
let highScore = []

submit.addEventListener("click", function (event) {
    event.preventDefault();

    let initialText = initial.value.trim();

    // Return from function early if submitted todoText is blank
    if (initialText === "") {
        return;
    }

    // Add new todoText to initial array, clear the input
    submitScore.push(initialText);
    

    highScore = JSON.parse(localStorage.getItem("scores")) || [0, "AA"]
    if (highScore[0] < submitScore[0]) {
        localStorage.setItem("scores", JSON.stringify(submitScore));
    }
    window.location = ("highscores.html")


});


