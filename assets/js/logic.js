let divQuestion = document.getElementById("questions")
let questionTitle = document.getElementById("question-title");
let questionChoices = document.getElementById("choices");
let questionBtn = document.createElement("button");
let endScreen=document.getElementById("end-screen")
let startBtn=document.getElementById("start");
let startScreen=document.getElementById("start-screen");
let quizTimer=document.getElementById("time")
//stat of quiz
let timer=100

startBtn.addEventListener("click", function (event) {

    if (event.target.matches("button")) {
        divQuestion.classList.replace("hide","active");
        startScreen.classList.add("hide");
        timeScore()
        
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
        console.log("wrong");
       timer-=10 ;
           
    }
    if (currentQuestion < 9) {
        currentQuestion++;
        rightAnswer = rendering();
        //end of quiz
    }else{
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
    divQuestion.classList.replace("active","hide");
    endScreen.classList.replace("hide","active");   
    clearInterval(intervalId)
}

// timer function
let intervalId=0
function timeScore(params) {
    intervalId=setInterval(function(){
        timer--
        quizTimer.innerHTML=timer
        if (timer<=0) {
            
            endOfQuiz()
           
            
        }
        

    },1000)
    
   
}



