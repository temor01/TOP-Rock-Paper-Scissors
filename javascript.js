// Rock Paper Scissors for TOP project.

// Testing to see if our files are properly linked.
console.log("Hello World");

// Storing game choices in an array
var answers = ["Rock", "Paper", "Scissors"];

// Now we're going to make a program that asks our computer to randomly choose one of the answers
// We will start by creating a function called 'getComputerChoice', and run a quick test on it
function getComputerChoice() {
    let choice = answers[(Math.floor(Math.random() * answers.length))];
    console.log(choice);
}


// We'll go ahead and create 'getHumanChoice' function.
// Obviously, it'll take the human player's choice
function getHumanChoice() {
    let choice = prompt("Please enter 1 for 'Rock';\nPlease enter 2 for 'Paper';\nPlease enter 3 for 'Scissors': ");
    
    if (choice == 1) {
        console.log('Rock');
    } else if (choice == 2) {
        console.log('Paper');
    } else if (choice == 3) {
        console.log('Scissors');
    } else console.log('Wrong Choice!');
}
