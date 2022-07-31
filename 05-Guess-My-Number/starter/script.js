'use strict';

// document.querySelector(".message").textContent = "Number is correct!🥳 "
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".number").textContent = 19;
// document.querySelector(".score").textContent = 9;

// document.querySelector(".guess").value = 4;
// console.log(document.querySelector(".guess").value);
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '🙅‍♀️ No number given!';
    //Whent the player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Number is correct!🥳 ';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    // document.querySelector("body").style.width = "1rem";
    //When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high ⬆️';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game 😭';
      document.querySelector('.score').textContent = 0;
    }
    //When guess is too low
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

document.querySelector('.again').addEventListener('click', function () {
  let score = 20;
  document.querySelector('.score').textContent = score;
  let secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ' ';

  document.querySelector('.message').textContent = 'Start Playing..💯';
  document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('body').style.width = '10rem';
});
