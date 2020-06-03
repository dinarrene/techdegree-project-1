/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/** 
 * Quotes array
 **/

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

/**
 * randomRGB function to create single random RGB value
 * function code from Treehouse lesson
 **/

function randomRGB(){
  return Math.floor(Math.random() * 256);
}

/**
 * getRandomColor function
 * generate random RGB value
 * apply value to <body> backgroundColor
 * rgb literal code from Treehouse lesson
 **/

function getRandomColor() {
  let color = `rgb(${randomRGB()},${randomRGB()},${randomRGB()})`;
  document.body.style.backgroundColor = color;
 }


/***
 * getRandomQuote function 
 * generate random number and use number to select object from quote array
 * saves template literal string in message variable
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
 * printQuote function
 * calls getRandomQuote function
 * inserts html string from getRandomQuote() into index file
 * DOM selector code provided by Treehouse
 ***/

function printQuote() {
  getRandomQuote();
  document.getElementById('quote-box').innerHTML = message;
}

printQuote();

/***
 * setInterval function 
 * calls printQuote and getRandomColor function at 5 second intervals to refresh color and quote block
 ***/

setInterval(function () {
  printQuote();
  getRandomColor();
}, 5000);

/***
 * eventListener code provide with starter files
 * listens for click button click event and calls printQuote and gerRandomColor functions
 ***/

document.getElementById('load-quote').addEventListener("click", () => {
  printQuote();
  getRandomColor();
}, false);