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