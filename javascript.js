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


// We'll make a new function that determines who wins
// The variables in this function are going to be switched based on the player
// This just makes it easy and simple, instead having all the code sitting at one function
function winner(humanChoice, computerChoice) {
    if (humanChoice == 'Rock' & computerChoice == 'Scissors') {
        return 'Rock Wins!';
    } else if (humanChoice == 'Paper' & computerChoice == 'Rock') {
        return 'Paper Wins!';
    } else if (humanChoice == 'Scissors' & computerChoice == 'Paper') {
        return 'Scissors Wins!';
    } else {
        return 'Nobody Wins!';
    }
}


// We'll go ahead and create a function that will let us play the game.
function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("Tie");
    } else if (winner(humanChoice, computerChoice) != 'Nobody Wins!') {
        console.log("Human Wins!");
        humanScore = +1;
    } else  if (winner(computerChoice, humanChoice) != 'Nobody Wins!') {
        console.log("Computer Wins!");
        computerScore = +1;
    } else console.log("Nobody Wins!");
}


// linking our latest variable to user input and computer choice
humanChoice = getHumanChoice();
computerChoice = getComputerChoice();

// Declaring the winner!
console.log("Human Choice: " + humanChoice);
console.log("Computer Choice: " + computerChoice);

// calling the function to see the final result
playRound(humanChoice, computerChoice);

// We'll go ahead and try to fetch the scores
console.log("Human Score: " + humanScore);
console.log("Computer Score: " + computerScore);