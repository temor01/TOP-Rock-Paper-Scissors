// Rock Paper Scissors for TOP project.

// Testing to see if our files are properly linked.
console.log("Hello World");

// Storing game choices in an array
var answers = ["Rock", "Paper", "Scissors"];

// Now we're going to make a program that asks our computer to randomly choose one of the answers
// We will start by creating a function called 'getComputerChoice', and run a quick test on it
function getComputerChoice() {
    let choice = answers[(Math.floor(Math.random() * answers.length))];
    return choice;
}


// We'll go ahead and create 'getHumanChoice' function.
// Obviously, it'll take the human player's choice
function getHumanChoice() {
    let choice = prompt("Please enter 1 for 'Rock';\nPlease enter 2 for 'Paper';\nPlease enter 3 for 'Scissors': ");
    
    if (choice == 1) {
        result = 'Rock';
    } else if (choice == 2) {
        result = 'Paper';
    } else if (choice == 3) {
        result = 'Scissors';
    } else result = 'Wrong Choice!';

    return result;
}

// We will create two new global variables to store human and computer score, both initially set at 0
var humanScore = 0;
var computerScore = 0;

// We'll go ahead and create a function that will let us play the game.
function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("Tie");
    } else {
        console.log("Nobody wins!");
    }
}

// linking our latest variable to user input and computer choice
humanChoice = getHumanChoice();
computerChoice = getComputerChoice();

// testing to make sure we get the correct result
console.log(humanChoice);
console.log(computerChoice);

// calling the function to see the final result
playRound(humanChoice, computerChoice);