'use strict';

// document.querySelector(".message").textContent = "Number is correct!🥳 "
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".number").textContent = 19;
// document.querySelector(".score").textContent = 9;

// document.querySelector(".guess").value = 4;
// console.log(document.querySelector(".guess").value);
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '🙅‍♀️ No number given!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Number is correct!🥳 ';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high ⬆️';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game 😭';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low ⬇️';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game 😭';
      document.querySelector('.score').textContent = 0;
    }
  }
});
