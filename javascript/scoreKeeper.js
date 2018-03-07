var numInput = document.querySelector('input'),
  p1Button = document.querySelector('#p1'),
  p1Display = document.querySelector('#p1Display'),
  p2Button = document.querySelector('#p2'),
  p2Display = document.querySelector('#p2Display'),
  resetButton = document.querySelector('#reset'),
  scoreToWin = document.querySelector('p span');

var gameOver = false,
  p1Score = 0,
  p2Score = 0,
  winningScore = 5;

var resetFunc = function resetFunc () {
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p1Display.classList.remove('winner');
  p2Display.textContent = p2Score;
  p2Display.classList.remove('winner');
  gameOver = false;
};

p1Button.addEventListener('click', () => {
  if (!gameOver) {
    p1Score++;
    if (p1Score === winningScore) {
      p1Display.classList.add('winner');
      gameOver = true;
    }
    p1Display.textContent = p1Score;
  }
});

p2Button.addEventListener('click', () => {
  if (!gameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      p2Display.classList.add('winner');
      gameOver = true;
    }
    p2Display.textContent = p2Score;
  }
});

resetButton.addEventListener('click', () => {
  resetFunc();
});

numInput.addEventListener('change', () => {
  scoreToWin.textContent = numInput.valueAsNumber;
  winningScore = numInput.valueAsNumber;
  resetFunc();
});
