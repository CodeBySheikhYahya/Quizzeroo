#! /usr/bin/env node

// Quiz System
// The app will show the students multiple choice questions and promt the user to reply. In the end it will show the students the result of the quiz.

import inquirer from "inquirer";

console.log("Welcome to the Quiz System!");
console.log("Please answer the following questions:");
console.log("for winning you need to get 5 scores");

let scores=0;
const questions = await inquirer.prompt([
    {
        name:"Question1",
        message: "What symbol is used to declare a variable in JavaScript? ",
        type:"list",
        choices:["var", "let", "const"]

}
])

if(questions.Question1==="var"){
    console.log("Correct")
    scores++;
} else {console.log("Incorrect")}

const questions2 = await inquirer.prompt([
    {
        name:"Question2",
        message: "What does HTML stand for?",
        type:"list",
        choices:["HyperText Markup Language", "HyperText Markup Link", "HyperText Markup List"]

}
])

if(questions2.Question2==="HyperText Markup Language"){
    console.log("Correct")
    scores++;
} else {console.log("Incorrect")}

const questions3 = await inquirer.prompt([
    {
        name:"Question3",
        message: "How do you comment a single line of code in Python?",
        type:"list",
        choices:["//", "/*", "#"]

}
])

        
        if(questions3.Question3==="#"){
    console.log("Correct")
    scores++;
} else {console.log("Incorrect")}

const questions4 = await inquirer.prompt([
    {
        name:"Question4",
        message: "What tag is used to create a heading in HTML?",
        type:"list",
        choices:[ "<h1>", "<p>", "<h2>"]

}
])

        
        if(questions4.Question4==="<h1>"){
    console.log("Correct")
    scores++;
} else {console.log("Incorrect")}

const questions5 = await inquirer.prompt([
    {
        name:"Question5",
        message: "What does the term DRY stand for in programming?",
        type:"list",
        choices:[ "Don't Repeat Yourself", "Do Repeat Yourself", "Don't Repeat Your code"]

}
])

        
        if(questions5.Question5==="Don't Repeat Yourself"){
    console.log("Correct")
    scores++;
} else {console.log("Incorrect")}


const questions6 = await inquirer.prompt([
    {
        name:"Question6",
        message: "What is the purpose of an API in programming?",
        type:"list",
        choices:["To define data access methods for software components", "To define data access methods for software components", "To define data access methods for software components"]

}
])

        
        if(questions6.Question6==="To define data access methods for software components"){
    console.log("Correct")
    scores++;
} else {console.log("Incorrect")}

const questions7 = await inquirer.prompt([
    {
        name:"Question7",
        message: "Which of the following is NOT a valid data type in most programming languages?",
        type:"list",
        choices:["Boolean", "String", "Character"]

}
])

        
        if(questions7.Question7==="Character"){
    console.log("Correct")
    scores++;
} else {console.log("Incorrect")}



const questions8 = await inquirer.prompt([
    {
        name:"Question8",
        message: "What is the difference between a function and a method in programming?",
        type:"list",
        choices:["Functions are standalone, methods belong to objects", "Functions belong to objects, methods are standalone", "Functions and methods are the same thing"]

}
])

        
        if(questions8.Question8==="Functions are standalone, methods belong to objects"){
    console.log("Correct")
    scores++;
} else {console.log("Incorrect")}


// OUtput condition

if(scores>=5){
    console.log("Congratulations! You have won the quiz!")
    console.log(`your score is ${scores}`)
}
else{console.log("You have lost the quiz!")
    console.log(`your score is ${scores}`)
}
