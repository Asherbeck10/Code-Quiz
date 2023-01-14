let divQuestion = document.getElementById("questions")
let questionTitle = document.getElementById("question-title");
let questionChoices = document.getElementById("choices");
let questionBtn = document.createElement("button");
let endScreen=document.getElementById("end-screen")
let startBtn=document.getElementById("start");
let startScreen=document.getElementById("start-screen");

//stat of quiz
startBtn.addEventListener("click", function (event) {

    if (event.target.matches("button")) {
        divQuestion.classList.replace("hide","active");
        startScreen.classList.add("hide");
    }})


//adding question button amd attribute
for (let i = 0; i < 4; i++) {
    questionBtn = document.createElement("button");        //creating button element              
    let questionChoice = questionChoices.appendChild(questionBtn);
    questionChoice.setAttribute("data-index", i);

};


// Array of functions
let questionsArray = Object.keys(questions);

let currentQuestion = 0
function rendering(params) {
    let rightAnswer = window[questionsArray[currentQuestion]](); //Rendering Answer and questions
    return rightAnswer
}

rendering()

//lister  
questionChoices.addEventListener("click", function (event) {

    if (event.target.matches("button")) {
        let buttonIndex = event.target.getAttribute("data-index");
        userAnswer = questionChoices.children[buttonIndex].textContent; 
        console.log(userAnswer);
    }
   
 //answer check
    {
        rightAnswer = rendering()

        console.log(currentQuestion)

    } if (rightAnswer === userAnswer) {

        console.log("well done")

    } else {
        console.log("wrong")
    }
    if (currentQuestion < 9) {
        currentQuestion++;
        rightAnswer = rendering();
        
    }else{
         divQuestion.classList.replace("active","hide");
         endScreen.classList.replace("hide","active")   //and quiz
    }


});






