'use strict';

// document.querySelector(".message").textContent = "Number is correct!🥳 "
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".number").textContent = 19;
// document.querySelector(".score").textContent = 9;

// document.querySelector(".guess").value = 4;
// console.log(document.querySelector(".guess").value);
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '🙅‍♀️ No number given!';
    displayMessage('🙅‍♀️ No number given!');
    //Whent the player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Number is correct!🥳 ';
    displayMessage("Number is correct!🥳");
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    // document.querySelector("body").style.width = "1rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
    //   document.querySelector('.message').textContent =
    //     guess > secretNumber ? 'Too high ⬆️' : 'Too low ⬇️';
    displayMessage(guess > secretNumber ? 'Too high ⬆️' : 'Too low ⬇️');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
    //   document.querySelector('.message').textContent = 'You lost the game 😭';
    displayMessage("You lost the game 😭");
      document.querySelector('body').style.backgroundColor = '#00ff00';
      document.querySelector('.score').textContent = 0;
    }
  }

  //When guess is too low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too low ⬇️';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game 😭';
  //       document.querySelector('body').style.backgroundColor = '#00ff00';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
  // });

  document.querySelector('.again').addEventListener('click', function () {
    let score = 20;
    document.querySelector('.score').textContent = score;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = ' ';

    // document.querySelector('.message').textContent = 'Start Playing..💯';
    displayMessage("Start Playing..💯");
    document.querySelector('body').style.backgroundColor = '#222';
    //   document.querySelector('body').style.width = '10rem';
  });
});
