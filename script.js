// First create a random return value of either rock, paper , or scissors for the computers choice.

function computerPlay() {
   let items = ['rock', 'paper', 'scissors'];
   let computerPlay = items[Math.floor(Math.random() * items.length)];
   return computerPlay;
}

// Next, create a prompt window to ask the player for their own choice.

function playerPlay() {
   let playerChoice = prompt('rock paper or scissors?');
   playerChoice.toLowerCase();
   return playerChoice;
}

// Create variables to store the results of each choice. These are to be used later.

// Make sure that the player can type a case-insensitive input by automatically lowering the case when the program reads their input.
let computerChoice = "";
let playerChoice = "";

// Now create a function which pits the computers choice against the players and then compare in order to give a result for the round.

let computer = 0;
let player = 0;

function playRound(computerChoice, playerChoice) {
   if (computerChoice == 'rock' && playerChoice == 'scissors') {
      return 'computer wins!';
   }
   if (computerChoice == 'paper' && playerChoice == 'rock') {
      return 'computer wins!';
   }
   if (computerChoice == 'scissors' && playerChoice == 'paper') {
      return 'computer wins!';
   }
   if (computerChoice == 'paper' && playerChoice == 'scissors' || computerChoice == 'scissors' && playerChoice == 'rock' || computerChoice == 'rock' && playerChoice == 'paper'){
      return 'player wins!';
   }
   if (computerChoice == 'rock' && playerChoice == 'rock') {
      return 'tie!';
   }
   if (computerChoice == 'paper' && playerChoice == 'paper') {
      return 'tie!';
   }
   if (computerChoice == 'scissors' && playerChoice == 'scissors') {
      return 'tie!';
   }
}

// Create variables which act as counters for the score of both opponents.

function playGame() {
   for (let i = 0; i < 5; i++) {
      computerChoice = computerPlay();
      playerChoice = playerPlay();
      playRound(computerChoice, playerChoice);
      result = playRound(computerChoice, playerChoice);
      if (result == 'player wins!') {
         player++;
      }
      else if (result == 'computer wins!'){
         computer++;
      } 
   }
   if (computer > player) {
      return 'computer wins game!';
   }
   else if (player > computer) {
      return 'player wins game!';
   }
   else 
      return 'tie!'
}

let match = playGame();



console.log(computerChoice);
console.log(result);
console.log(computer);
console.log(player);
console.log(match);
