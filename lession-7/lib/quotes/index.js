/*

1.Title : Basic Node app example
2.Description : Library to manage and fetch quotes from a file.

3.Author : md atik hasan 
4.Date : 19/12/24

*/

// Dependency
const fs = require('fs'); // File system module

// Quotes object - module scaffolding
const quotes = {};

// Get all the quotes and return them to the user
quotes.allQuotes = function () {
    // Read the text file containing the quotes
    const fileContents = fs.readFileSync(`${__dirname}/quotes.txt`, 'utf-8');

    // Turn the string into an array by splitting at line breaks
    const arrayOfQuotes = fileContents.split(/\r?\n/);

    // Return the array
    return arrayOfQuotes;
};

// Export the module
module.exports = quotes;
