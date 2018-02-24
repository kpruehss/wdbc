const p1Button = document.querySelector('#p1');
const p2Button = document.querySelector('#p2');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const reset = document.getElementById('reset');
const scoreSelect = document.getElementById('scoreSelect');
const winScore = document.querySelector('#winScore');
var p1Score = 0;
var p2Score = 0;

p1Button.addEventListener('click', function() {
  p1Score++;
  p1Display.textContent = p1Score;
});

p2Button = addEventListener('click', function() {
  p2Score++;
  p2Display.textContent = p2Score;
});

reset = addEventListener('click', function() {
  p1Display.textContent = 0;
  p1Score = 0;
  p2Display.textContent = 0;
  p2Score = 0;
});

winScore = scoreSelect.value;
