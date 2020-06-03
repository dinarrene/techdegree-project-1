/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 ***/

let quotes = [{
    quote: "Oh yes, the past can hurt. But you can either run from it, or learn from it.",
    source: "Rafiki",
    citation: "The Lion King",
    year: 1994
  },
  {
    quote: "At some point you’ve got to decide for yourself who you gonna be. Can’t let nobody make that decision for you.",
    source: "Juan",
    citation: "Moonlight",
    year: 2016
  },
  {
    quote: "Life moves pretty fast. If you don’t stop and look around once in a while, you could miss it.",
    source: "Ferris Bueller",
    citation: "Ferris Bueller's Day Off",
    year: 1986
  },
  {
    quote: "Every man dies, not every man really lives.",
    source: "William Wallace",
    citation: "Braveheart",
    year: 1995
  },
  {
    quote: "Get busy living, or get busy dying.",
    source: "Andy Dufresne",
    citation: "The Shawshank Redemption",
    year: 1994
  },
  {
    quote: "All we have to decide is what to do with the time that is given to us.",
    source: "Gandalf",
    citation: "Lord of the Rings: The Fellowship of the Ring",
    year: 2001
  },
  {
    quote: "Great men are not born great, they grow great.",
    source: "Mario Puzo",
    citation: "The Godfather",
    year: 1972
  },
  {
    quote: "Just keep swimming. Just keep swimming. Just keep swimming, swimming, swimming.",
    source: "Dory",
    citation: "Finding Nemo",
    // year: 2003
    tags: "Children's Animation"
  },
  {
    quote: "Nobody is gonna hit as hard as life, but it ain’t how hard you can hit. It’s how hard you can get hit and keep moving forward.",
    source: "Rocky Balboa",
    citation: "Rocky Balboa",
    year: 2006
  },
  {
    quote: "What we do in life echoes in eternity.",
    source: "Maximus Decimus Meridius",
    // citation: "Gladiator",
    year: 2000,
    tags: "Action & Adventure"
  },
]

let randNum;
let randNumRGB;
let quote;
let message = '';

/***
 * `getRandomQuote` function
 ***/
function randomRGB(){
  return Math.floor(Math.random() * 256);
}

function getRandomColor() {
  let color = `rgb(${randomRGB()},${randomRGB()},${randomRGB()})`;
  document.body.style.backgroundColor = color;
 }


/***
 * `getRandomQuote` function
 ***/

function getRandomQuote() {
  randNum = Math.floor(Math.random() * quotes.length);
  quote = quotes[randNum];
  message = `<p class="quote">${quote.quote}</p><p class="source">${quote.source}`;
  if (quote.citation) {
    message += `<span class="citation">${quote.citation}</span>`
  }
  if (quote.year) {
    message += `<span class="year">${quote.year}</span>`;
  }
  if (quote.tags) {
    message += `<span class="tags">${quote.tags}</span>`;
  }
  message += `</p>`;
}

/***
 * `printQuote` function
 ***/

function printQuote() {
  getRandomQuote();
  document.getElementById('quote-box').innerHTML = message;
}

printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

document.getElementById('load-quote').addEventListener("click", getRandomColor, false);