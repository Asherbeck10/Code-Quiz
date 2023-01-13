let questionTitle=document.getElementById("question-title");
let questionChoices=document.getElementById("choices");
let questionBtn=document.createElement("button");
function addBtn(params) {                          //adding question button function
    questionChoices.appendChild(questionBtn);
questionBtn=document.createElement("button")
    
}
    

//question 1/10
questionTitle.textContent="Inside which HTML Element do we put the JavaScript?"
questionBtn.textContent="<script>";
addBtn()
questionBtn.textContent="<scripting>"
addBtn()
questionBtn.textContent="<javascript>"
addBtn()
questionBtn.textContent="<js>"
addBtn()

