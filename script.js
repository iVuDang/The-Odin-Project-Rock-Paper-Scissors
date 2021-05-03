// 3. begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!

function computerPlay(){
    const compOutputs = ['rock', 'paper', 'scissors'];
    let compRandom = Math.floor(Math.random() * compOutputs.length);
  
    return compOutputs[compRandom];
  }
  
  console.log(computerPlay());
  
  
  // Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
  // Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
  
  function checkWinner(playerSelection, computerSelection){  
    computerSelection = computerPlay();                // pulls function computerPlay
    playerSelection = playerSelection.toLowerCase();  // Link this to alert 
  
    let result = '';
    
    switch(true){
      case computerSelection === playerSelection:
        result = 'tie'
        break;
  
      case (playerSelection === 'rock' && computerSelection === 'scissors'):
      case (playerSelection === 'paper' && computerSelection === 'rock'):
      case (playerSelection === 'scissors' && computerSelection === 'paper'):
        result = 'win'
        break;
  
      default:
        result = 'lose'
        break; 
    } 
    return [result, playerSelection, computerSelection];
  }
  
  console.log(checkWinner('ROCK',));
  
  
  // 6.Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
  
  // GLOBAL VARIABLES 
  let maxRounds = 5;
  let playerCount = 0;
  let compCount = 0; 
  
  
  function playRound(playerMove) {                              // pulls our playerInput prompt
    let winnerResult = '';
    winnerResult = checkWinner(playerMove, computerPlay());    // pulls function checkWinner and our prompt 
    
    if (winnerResult[0] === 'win' && maxRounds > 0) {   // the output of our function [result, playerSelection, computerSelection], hence, 0 index returns our result
      playerCount += 1;
      maxRounds -= 1; 
      console.log('You Win');
      
        } else if (winnerResult[0] === 'lose' && maxRounds > 0) {
          compCount += 1;
          maxRounds -= 1; 
          console.log('You Lose')
          
        } else if (winnerResult[0] === 'tie' && maxRounds > 0){
          maxRounds -= 1; 
          console.log('Tie')
    
        } else {
          console.log('F5 to Start a New Game')
        }
    
    return [playerCount, compCount, maxRounds, winnerResult];
    }
  
  
  
  // 6.3 Use prompt() to get input from the user. 
  let playerInput = prompt("Input either rock, paper or scissors");
  
  console.log(playRound(playerInput));
  console.log(playRound(playerInput));
  