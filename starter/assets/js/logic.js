let divQuestion=document.getElementById("questions")
divQuestion.classList.remove("hide")
let x="<script>"
let rightAnswer=window[questionsArray[0]]()

//let rightAnswer=window[questionsArray[9]]()
if (x===rightAnswer) {
    console.log("well done")
    
}
