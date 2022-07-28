'use strict';


// document.querySelector(".message").textContent = "Number is correct!🥳 "
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".number").textContent = 19;
// document.querySelector(".score").textContent = 9;

// document.querySelector(".guess").value = 4;
// console.log(document.querySelector(".guess").value);

document.querySelector(".check").addEventListener("click", function() {
    const guess = Number(document.querySelector(".guess").value);
 console.log(guess,typeof guess);

 if (!guess) {
    document.querySelector(".message").textContent = 
    "🙅‍♀️ No number given!";
 }
});