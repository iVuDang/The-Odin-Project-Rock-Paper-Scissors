/* ---------- A.SET UP OUR VARIABLES ---------- */
let playerScore = 0
let computerScore = 0
const buttons = document.querySelectorAll('.element-button')


/* ---------- B. DOM - BUTTON FUNCTIONALITIES ---------- */
// B1. Registers the click input to execute the function 'playRound'. References our const 'buttons'. 
buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})


// B2. Disables the buttons if function is called upon (in our playRound function)
function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}



/* ---------- C. SEGREGATED JAVASCRIPT FUNCTIONS - ONE FUNCTION ONE ACTION---------- */

// C1. Generate random CPU input 
function computerPlay(){
  const choices = ['fire', 'leaf', 'water'];
  let choicesIndex = Math.floor(Math.random() * choices.length); 
  
  return choices[choicesIndex];
};

console.log(computerPlay()); 
// fire || earth || water 



// C2. Executes game logic, conditions for user input to win vs. cpu random input
/* 
  1. playRound function pulls in (references) two other functions: computerPlay, disableButtons
  2. playRound function is then pulled into the DOM: button.addEventListener('click', function(){
          playRound(button.value)
*/

function playRound(playerSelection) {
    let computerSelection = computerPlay()
    let result = ""

    if (playerSelection == computerSelection) {
        result = '<br>You both harnessed ' + playerSelection
    } // ENDS if (playerSelection == computerSelection)
  
    else if ((playerSelection == 'water' && computerSelection == 'fire') ||
        (playerSelection == 'leaf' && computerSelection == 'water') ||
        (playerSelection == 'fire' && computerSelection == 'leaf')) {
            playerScore += 1
            result = '<br><b>You win: </b><br>' + playerSelection + ' beats ' + computerSelection
                
                // if statement within the execution of an outer if statement 
                if (playerScore == 5) {
                    result += '<br><br>Reload the page to train again.'
                    disableButtons()  // calls on function disableButtons()
                } // ENDS if (playerScore == 5)
    } // ENDS if ((playerSelection == 'fire' && computerSelection == 'water')
  
    else {
        computerScore += 1
        result = '<br><b>Defeat:</b> <br>' + computerSelection + ' beats ' + playerSelection

            if (computerScore == 5) {
                result += '<br><br>Reload the page to regain your honor.'
                disableButtons()  // function disableButtons()
            } // ENDS if (computerScore == 5)
    } // ENDS else 
    
    // calls our function 'function updateChoices(playerSelection, computerSelection)' to update the images within the execution of this function
    updateChoices(playerSelection, computerSelection); 
  
    // references our HTML <div id="result"> and updates the HTML content of the <div> element with what we assigned: result variable
    document.getElementById('result').innerHTML = result
  
    document.getElementById('result-playerscore').innerHTML = `<b>Player:</b><br> ${playerScore}`;
    document.getElementById('result-computerscore').innerHTML = `<b>Computer:</b><br> ${computerScore}`;

} // ENDS function playRound(playerSelection) 


// C3. Update images based on playerSelection and computerSelection - called into playRound function
function updateChoices(playerSelection, computerSelection) {
  // create variables to link to our HTML elements
  const playerElement = document.getElementById("player-element"); 
  const computerElement = document.getElementById("computer-element"); 
  // assigns classList property to our variables, than adds 'active' class to our classList 
  playerElement.classList.add("active");
  computerElement.classList.add("active"); 
  
  // creates a second set of variables to pull our button.value
  const playerElementClassName = `fa-${playerSelection}`
  const computerElementClassName = `fa-${computerSelection}`
  
  playerElement.classList = `fas ${playerElementClassName} active`;
  computerElement.classList = `fas ${computerElementClassName} active`;
  
}

