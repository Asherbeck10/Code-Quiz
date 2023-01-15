//##submitting score and initials##

let submitScore=[]
let highScore=[]

submit.addEventListener("click", function(event) {
    event.preventDefault();

    let initialText = initial.value.trim();
  
    // Return from function early if submitted todoText is blank
    if (initialText === "") {
      return;
    }
  
    // Add new todoText to initial array, clear the input
    submitScore.push(initialText);
    console.log(submitScore)
    highScore=JSON.parse(localStorage.getItem("scores"))
    if (highScore[0]<submitScore[0]) {
        localStorage.setItem("scores", JSON.stringify(submitScore));

        
    }
    
    initial.value = "";
    finalScore.textContent="";
    window.location =("highscores.html")
  
   
  });


