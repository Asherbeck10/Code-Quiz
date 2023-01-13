let divQuestion=document.getElementById("questions")



divQuestion.classList.remove("hide")


let questionTitle=document.getElementById("question-title");
let questionChoices=document.getElementById("choices");
let questionBtn=document.createElement("button");

for (let i = 0; i < 4; i++) {
    questionBtn=document.createElement("button");                       //adding question button 
    questionChoices.appendChild(questionBtn);;
    
};

    

//question 1/10
questionTitle.textContent="Inside which HTML Element do we put the JavaScript?";
questionChoices.children[0].textContent="<script>";
questionChoices.children[1].textContent="<scripting>";
questionChoices.children[2].textContent="<javascript>";
questionChoices.children[3].textContent="<js>";


//question 2/10
questionTitle.textContent="Where is the correct place to insert a JavaScript?"
questionBtn.textContent="The <head> section";
questionBtn.textContent="The <body> section";
questionBtn.textContent="All are correct>";
questionBtn.textContent="<js>"


//question 3/10
questionTitle.textContent="What is the correct syntax for referring to an external script called xxx.js?";
questionBtn.textContent="<script name=\"xxx.js\'>";
questionBtn.textContent="<scrip href=\"xxx.js\">";
questionBtn.textContent="<script src=\"xxx.js\">";

//question 4/10
questionTitle.textContent="How do you create a function in JavaScript?";
questionBtn.textContent="function:myFunction()";
questionBtn.textContent="function=myFunction()";
questionBtn.textContent="function myFunction()";

//question 5/10
questionTitle.textContent="How do you call a function named myFunction";
questionBtn.textContent="myFunction()";
questionBtn.textContent="call function myFunction()";
questionBtn.textContent="call myFunction()";

//question 6/10
questionTitle.textContent="How to write an IF statement in JavaScript?";
questionBtn.textContent="if i=5";
questionBtn.textContent="if i==5 then";
questionBtn.textContent="if i=5 then";
questionBtn.textContent="if(i==5)";

//question 7/10
questionTitle.textContent="How to write an IF statement for executing some code if \"i\" in not equal to 5?";
questionBtn.textContent="if(i<>5)";
questionBtn.textContent="if i<>5";;
questionBtn.textContent="if(i!=5)";
questionBtn.textContent="if i=!5 then";

//question 8/10
questionTitle.textContent="How does a FOR loop start";
questionBtn.textContent="for(i=0;i<=5;i++}";
questionBtn.textContent="for i-1 to 5";
questionBtn.textContent="for(i=0;i<=5)";
questionBtn.textContent="for(i<=5;i++";

//question 9/10
questionTitle.textContent="How can you add a comment in a JavaScript?";
questionBtn.textContent="//This is a comment";
questionBtn.textContent="'This is a comment";
questionBtn.textContent="<!--This is a comment-->";

//question 10/10
questionTitle.textContent="How do you declare a JavaScript variable?";
questionBtn.textContent="let myName;";

questionBtn.textContent="variable myName;";

questionBtn.textContent="v myName;";

