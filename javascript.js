// Rock Paper Scissors for TOP project.

// Testing to see if our files are properly linked.
console.log("Hello World");

// Storing game choices in an array
var answers = ["Rock", "Paper", "Scissors"];

// Now we're going to make a program that asks our computer to randomly choose one of the answers
// We will start by creating a function called 'getComputerChoice', and run a quick test on it
function getComputerChoice() {
    choice = answers[(Math.floor(Math.random() * answers.length))];
    console.log(choice);
}
