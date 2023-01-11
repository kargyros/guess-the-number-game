/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/

let secretNum, guessList, isWinner //their type will change late so we use let. thats why we cannot use const and why they have not been declared

/*------------------------ Cached Element References ------------------------*/

const form = document.querySelector('form')
const guessInput = document.querySelector('#guess-input')
const guessesEl = document.querySelector('#prev-guesses')
const messageEl = document.querySelector('#message')
const resetButton = document.querySelector('#reset-button')
const prevGuessesMsg = document.querySelector('#prev-guesses-msg')

console.log(form, guessInput, guessesEl, messageEl, resetButton, prevGuessesMsg)
/*----------------------------- Event Listeners -----------------------------*/
form.addEventListener('reset', init)

form.addEventListener('submit', function(event) {
  event.preventDefault()
  if (!isWinner) {
    checkGuess(parseInt(guessInput.value))
  }
}) 


/*-------------------------------- Functions --------------------------------*/

init ()

function init(){
guessesEl.innerHTML = ''
messageEl.textContent = 'Please enter a guess between and 100!'
resetButton.setAttribute('hidden', true)
prevGuessesMsg.textContent = ''
guessList = []
isWinner = false
secretNum = Math.floor(Math.random() * 100 + 1)
console.log(secretNum) 
}
// console.log(secretNum) - just a sanity check to see if random number is being picked 

function checkGuess(guess) {
  // clear out the input for better UX
  guessInput.value = ''
  // Evaluate whether guess is valid   
    // is it within range?
   // is it a number?
  if (isNaN(guess) || guess < 1 || guess > 100) {
    renderError ('Whoops! Please enter a number between 1 and 100.')
    return
    // Check if we have a winner
  } else if (guess === secretNum) {
    isWinner = true
  }
  // add guess to guess list if non of the above conditions are met
  guessList.push(guess)
  //render
  render()
}


function renderError(){
console.log('renderError invoked')
console.log(guessList)
}

function render(){
  console.log('render invoked')
}