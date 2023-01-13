// let divQuestion=document.getElementById("questions")



// divQuestion.classList.remove("hide")


let questionTitle=document.getElementById("question-title");
let questionChoices=document.getElementById("choices");
let questionBtn=document.createElement("button");

for (let i = 0; i < 4; i++) {
    questionBtn=document.createElement("button");                       //adding question button 
    questionChoices.appendChild(questionBtn);;
    
};
//question 1/10
function questionOne(){
    questionTitle.textContent="Inside which HTML Element do we put the JavaScript?";
    questionChoices.children[0].textContent="<script>";
    questionChoices.children[1].textContent="<scripting>";
    questionChoices.children[2].textContent="<javascript>";
    questionChoices.children[3].textContent="<js>";
return "<script>"};

    //question 2/10
function questionTwo(){
    questionTitle.textContent="Where is the correct place to insert a JavaScript?"
    questionChoices.children[0].textContent="The <head> section";
    questionChoices.children[1].textContent="The <body> section";
    questionChoices.children[2].textContent="The <header> section";
    questionChoices.children[3].textContent="Both <head> and <body> section";};

//question 3/10
function questionThree(){
        questionTitle.textContent="What is the correct syntax for referring to an external script called xxx.js?";
        questionChoices.children[0].textContent="<script name=\"xxx.js\'>";
        questionChoices.children[1].textContent="<scrip href=\"xxx.js\">";
        questionChoices.children[2].textContent="<script src=\"xxx.js\">";
        questionChoices.children[3].textContent="All is correct";}

//question 4/10
function questionFour(){
    questionTitle.textContent="How do you create a function in JavaScript?";
    questionChoices.children[0].textContent="function:myFunction()";
    questionChoices.children[1].textContent="function=myFunction()";
    questionChoices.children[2].textContent="function myFunction()";
    questionChoices.children[3].textContent="all is correct";};

//question 5/10
function questionFive(){
    questionTitle.textContent="How do you call a function named myFunction";
    questionChoices.children[0].textContent="myFunction()";
    questionChoices.children[1].textContent="call function myFunction()";
    questionChoices.children[2].textContent="call myFunction()";
    questionChoices.children[3].textContent="All is correct";}
    
    //question 6/10
  function questionSix(){
    questionTitle.textContent="How to write an IF statement in JavaScript?";
    questionChoices.children[0].textContent="if i=5";
    questionChoices.children[1].textContent="if i==5 then";
    questionChoices.children[2].textContent="if i=5 then";
    questionChoices.children[3].textContent="if(i==5)";};
    
    //question 7/10
    function questionSeven(){
    questionTitle.textContent="How to write an IF statement for executing some code if \"i\" in not equal to 5?";
    questionChoices.children[0].textContent="if(i<>5)";
    questionChoices.children[1].textContent="if i<>5";;
    questionChoices.children[2].textContent="if(i!=5)";
    questionChoices.children[3].textContent="if i=!5 then";};
    
    //question 8/10
    function questionEight(){
    questionTitle.textContent="How does a FOR loop start";
    questionChoices.children[0].textContent="for(i=0;i<=5;i++}";
    questionChoices.children[1].textContent="for i-1 to 5";
    questionChoices.children[2].textContent="for(i=0;i<=5)";
    questionChoices.children[3].textContent="for(i<=5;i++)";};
    
    //question 9/10
   function  questionNine(){
    questionTitle.textContent="How can you add a comment in a JavaScript?";
    questionChoices.children[0].textContent="//This is a comment";
    questionChoices.children[1].textContent="'This is a comment";
    questionChoices.children[2].textContent="<!--This is a comment-->";
    questionChoices.children[3].textContent="All is correct";}
    
    //question 10/10
    function questionTen(){
    questionTitle.textContent="How do you declare a JavaScript variable?";
    questionChoices.children[0].textContent="let myName;";
    questionChoices.children[1].textContent="variable myName;";
    questionChoices.children[2].textContent="v myName;";
    questionChoices.children[3].textContent="All is correct";}

    
    
     
let questions={

questionOne:questionOne,questionTwo:questionTwo,questionThree:questionThree,questionFour:questionFour,questionFive:questionFive,questionSix:questionSix,questionSeven:questionSeven,questionEight:questionEight,questionNine:questionNine,questionTen:questionTen
};


let questionsArray=Object.keys(questions);











