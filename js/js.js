var randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

var guesses = document.querySelector(' .guesses');
var lastResult = document.querySelector(' .lastResult');
var lowOrHi = document.querySelector(' .lowOrHi');
var guessMessageWrapper = document.querySelector('.guessMessageWrapper')
var tiltedSquare = document.querySelector('.tiltedSquare')
var shake = document.querySelector('.shake')

var guessSubmit = document.querySelector(' .guessSubmit');
var guessField = document.querySelector(' .guessField');

guessSubmit.addEventListener('click', checkGuess);

console.log(guessField.value);

var guessCount = 1;
var resetButton;

function checkGuess() {
  var userGuess = Number(guessField.value);
  guessMessageWrapper.style.display = 'block';
  if (guessCount === 1 ) {
    guesses.textContent = 'Previous guesses: ';
  }
  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent = 'Great! You got it right!';
    lastResult.style.backgroundColour = 'green';
    party.confetti(this)
    lowOrHi.textContent = ' ';
    guessMessageWrapper.classList.add('right');
    tiltedSquare.classList.add('right');
    setGameOver();
  } else if (guessCount === 10){
    lastResult.textContent = 'Game Over 😔'
    lastResult.style.color = 'white'
    lowOrHi.textContent = '';
    setGameOver();
  } else {
    /*
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColour = 'red';
    */
    if (userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!';
      shakeFuntion()

    } else if (userGuess > randomNumber) {
        lowOrHi.textContent = 'Last guess was too high!';
        shakeFuntion()
    }
  }

  guessCount++;
  guessField.value = '';
  guessField.focus();
}

function shakeFuntion() {
      // restart animation
      guessMessageWrapper.classList.add('shake');
      setTimeout(function() {
        guessMessageWrapper.classList.remove('shake');
      }, 820);
  }


function setGameOver() {

  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.className = 'submit relativePosition userField submitHover';
  var submitButton = document.getElementById('submitButton') ;
  submitButton.classList.remove('submitHover');
  resetButton.textContent = 'Start new game';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame)

  var buttonsWrapper = document.getElementById( 'buttonsWrapper' );
  buttonsWrapper.appendChild( resetButton );

}

function resetGame() {
  guessCount = 1;

  var resetParas = document.querySelectorAll('.resultParas p');
  for (var i = 0 ; i < resetParas.length ; i++){
    resetParas[1].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);
  guessSubmit.className = 'submit relativePosition userField submitHover';

  guessMessageWrapper.style.display = 'none';
  guessMessageWrapper.classList.remove('right');
  tiltedSquare.classList.remove('right');
  lastResult.textContent = '';

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();
  guesses.textContent = '';

  lastResult.style.backgroundColour = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log(randomNumber);
}
