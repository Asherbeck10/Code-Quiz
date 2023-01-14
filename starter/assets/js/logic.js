let divQuestion=document.getElementById("questions")
let questionTitle=document.getElementById("question-title");
let questionChoices=document.getElementById("choices");
let questionBtn=document.createElement("button");

 //adding question button amd attribute
for (let i = 0; i < 4; i++) {
    questionBtn=document.createElement("button");        //creating button element              
    let questionChoice=questionChoices.appendChild(questionBtn);
    questionChoice.setAttribute("data-index", i);
    
};

divQuestion.classList.remove("hide")

// Array of functions
let questionsArray=Object.keys(questions);




for (let i = 0; i < questionsArray.length; i++) {
        let rightAnswer=window[questionsArray[i]]();
        questionChoices.addEventListener("click",function(event){
        if (event.target.matches("button")) {
            let buttonIndex = event.target.getAttribute("data-index");
            userAnswer=questionChoices.children[buttonIndex].textContent
            console.log(userAnswer)
             }
            
        if (rightAnswer===userAnswer) {
            console.log("well done")
        }else{
            console.log("wrong answer")
        }
    });
   

    }



