/*

1.Title : Basic Node app example
2.Description : Simple Node application that prints random quotes at 
one-second intervals.

3.Author : md atik hasan 
4.Date : 19/12/24

*/

// Dependencies 
const mathLibrary = require('./lib/math');
const quotesLibrary = require('./lib/quotes');

// App object - module scaffolding
const App = {};

// Configuration 
App.config = {
    timeBetweenQuotes: 1000, // 1 second interval
};

// Function that prints a random quote 
App.printAQuote = function () {
    // Get all the quotes
    const allQuotes = quotesLibrary.allQuotes();

    // Get the length of the quotes
    const numberOfQuotes = allQuotes.length;

    // Pick a random number between 1 and the number of quotes
    const randomNumber = mathLibrary.getRandomNumber(1, numberOfQuotes);

    // Get the quote at that position in the array (adjust for zero-based index)
    const selectedQuote = allQuotes[randomNumber - 1];

    // Print the quote to the console
    console.log(selectedQuote);
};

// Function that loops indefinitely, calling the printAQuote function
App.indefiniteLoop = function () {
    setInterval(App.printAQuote, App.config.timeBetweenQuotes);
};

// Start the loop
App.indefiniteLoop();
