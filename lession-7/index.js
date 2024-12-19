/*

1.Title : Basic Node app example
2.Description : simple node application that print random quotes per 
second interval.

3.Author : md atik hasan 
4.Date : 19/12/24


*/


//Dependencies 
const mathLibrary = require('./lib/math');
const quotesLibrary = require('./lib/quotes');


//App object - module scaffolding
const App = {};


// Configuration 
app.config = {
    timeBetweenQuotes: 1000,
}


//function that prints a random quote 
app.printAQuote = function printAQuote(){
    //get all the quotes
    const allQuotes = quotesLibrary.allQuotes();

    //get the length of the quotes
    const numberOfQuotes = allQuotes.length;

    //Pick a random number between 1 and the number of quotes
    const randomNumber = mathLibrary.getRandomNumber(1,numberOfQuotes);


    //get the quote at that position in the array (minus one )
    const selectedQuote = allQuotes[randomNumber - 1];

    //print the quote to the console
    console.log(selectedQuote);
};



//function that loops indefinitely , calling the printAQuote function as it goes
app.indefiniteLoop = function indefiniteLoop(){
    //create the interval , using the config variable defined above 
    setInterval(app.printAQuote, app.config.timeBetweenQuotes);

}

//Invoke the loop
app.indefiniteLoop();