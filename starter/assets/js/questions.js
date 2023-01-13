let divQuestion=document.getElementById("questions")



divQuestion.classList.remove("hide")


let questionTitle=document.getElementById("question-title");
let questionChoices=document.getElementById("choices");
let questionBtn=document.createElement("button");
function addBtn(params) {                          //adding question button function
    questionChoices.appendChild(questionBtn);
questionBtn=document.createElement("button");
    
};
    

//question 1/10
questionTitle.textContent="Inside which HTML Element do we put the JavaScript?";
questionBtn.textContent="<script>";
addBtn();
questionBtn.textContent="<scripting>";
addBtn();
questionBtn.textContent="<javascript>";
addBtn();
questionBtn.textContent="<js>";
addBtn();

//question 2/10
questionTitle.textContent="Where is the correct place to insert a JavaScript?"
questionBtn.textContent="The <head> section";
addBtn();
questionBtn.textContent="The <body> section";
addBtn();
questionBtn.textContent="All are correct>";
addBtn();
//questionBtn.textContent="<js>"
//addBtn()

//question 3/10
questionTitle.textContent="What is the correct syntax for referring to an external script called xxx.js?";
questionBtn.textContent="<script name=\"xxx.js\'>";
addBtn()
questionBtn.textContent="<scrip href=\"xxx.js\">";
addBtn()
questionBtn.textContent="<script src=\"xxx.js\">";
addBtn()
//questionBtn.textContent="<js>"
//addBtn()

//question 4/10
questionTitle.textContent="How do you create a function in JavaScript?";
questionBtn.textContent="function:myFunction()";
addBtn()
questionBtn.textContent="function=myFunction()";
addBtn()
questionBtn.textContent="function myFunction()";
addBtn()
// questionBtn.textContent="<js>"
// addBtn()

//question 5/10
questionTitle.textContent="How do you call a function named myFunction";
questionBtn.textContent="myFunction()";
addBtn()
questionBtn.textContent="call function myFunction()";
addBtn()
questionBtn.textContent="call myFunction()";
addBtn()
// questionBtn.textContent="<js>"
// addBtn()

//question 6/10
questionTitle.textContent="How to write an IF statement in JavaScript?";
questionBtn.textContent="if i=5";
addBtn();
questionBtn.textContent="if i==5 then";
addBtn();
questionBtn.textContent="if i=5 then";
addBtn();
questionBtn.textContent="if(i==5)";
addBtn();

//question 7/10
questionTitle.textContent="How to write an IF statement for executing some code if \"i\" in not equal to 5?";
questionBtn.textContent="if(i<>5)";
addBtn();
questionBtn.textContent="if i<>5";;
addBtn();
questionBtn.textContent="if(i!=5)";
addBtn();
questionBtn.textContent="if i=!5 then";
addBtn();

//question 8/10
questionTitle.textContent="How does a FOR loop start";
questionBtn.textContent="for(i=0;i<=5;i++}";
addBtn();
questionBtn.textContent="for i-1 to 5";
addBtn();
questionBtn.textContent="for(i=0;i<=5)";
addBtn();
questionBtn.textContent="for(i<=5;i++";
addBtn();

//question 9/10
questionTitle.textContent="How can you add a comment in a JavaScript?";
questionBtn.textContent="//This is a comment";
addBtn();
questionBtn.textContent="'This is a comment";
addBtn();
questionBtn.textContent="<!--This is a comment-->";
addBtn();
// questionBtn.textContent="<js>"
// addBtn()

//question 10/10
questionTitle.textContent="How do you declare a JavaScript variable?";
questionBtn.textContent="let myName;";
addBtn();
questionBtn.textContent="variable myName;";
addBtn();
questionBtn.textContent="v myName;";
addBtn();
// questionBtn.textContent="<js>"
// addBtn()
