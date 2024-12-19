/*

1.Title : Basic Node app example
2.Description : simple node application that print random quotes per 
second interval.

3.Author : md atik hasan 
4.Date : 19/12/24


*/



//dependency 
 const fs = require('fs');

 //Quotes object - module scaffolding
 const quotes = {};

 //Get all the quotes and return them to the user 

 quotes.allQuotes = function allQuotes(){

    // read the text file containing the quotes 
    const fileContents = fs.readFileSync(`${__dirname}/quotes.txt`,'utf-8');

    //Turn the string into an array
    const arrayOfQuotes = fileContents.split(/\r?\n/);

    //return the array 
    return arrayOfQuotes;
 }