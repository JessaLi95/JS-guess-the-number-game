'use strict';
let serectNumber = Math.trunc(Math.random() * 20) + 1;
console.log(serectNumber);
let score = 20;
let highScore = 0;
const displayMessage = message =>
  (document.querySelector('.message').textContent = message);
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //   When thre is no input
  if (!guess) {
    displayMessage('⛔️ No number!');
    // When the player wins
  } else if (guess === serectNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = serectNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // When the player is wrong
  } else if (guess !== serectNumber) {
    if (score > 1) {
      displayMessage(guess > serectNumber ? '📈 Too high!' : '📉 Too low!');
    }
    score--;
    document.querySelector('.score').textContent = score;
    // When the player is out of score
  } else {
    displayMessage('💀 Game Over!');
    document.querySelector('.score').textContent = 0;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  serectNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(serectNumber);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
});
