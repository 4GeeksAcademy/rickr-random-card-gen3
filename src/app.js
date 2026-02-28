import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  
  // build the card generator logic

  // Build value and suit arrays
  const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  const suits = ['♠', '♥', '♣', '♦'];

  // Generate random numbers from array lengths to select a value and suit
  let randomValue = Math.floor(Math.random() * values.length);
  let randomSuit = Math.floor(Math.random() * suits.length);
  

  // Grab the html elements needed to inject suit and value into the DOM
  let htmlTopSuitElement = document.querySelector('.top-suit');
  let htmlValueElement = document.querySelector('.value');
  let htmlBottomSuitElement = document.querySelector('.bottom-suit');

  htmlTopSuitElement.innerHTML = suits[randomSuit];
  htmlValueElement.innerHTML = values[randomValue];
  htmlBottomSuitElement.innerHTML = suits[randomSuit];


  // generate correct suit color (heart, diamond = red; spade, club = black)
  if (suits[randomSuit] === '♥' || suits[randomSuit] === '♦') {
    // add some dynamic red color styling to the heart or diamond
    htmlTopSuitElement.style.color = 'red';
    htmlBottomSuitElement.style.color = 'red';
  }

};
