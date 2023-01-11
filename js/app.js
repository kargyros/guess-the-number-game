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
// console.log(secretNum) - just a sanity check to see if random number is being picked 
}