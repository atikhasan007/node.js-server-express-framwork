/*

1.Title : Basic Node app example
2.Description : Library to handle mathematical operations.

3.Author : md atik hasan 
4.Date : 19/12/24

*/

// Math object - Module scaffolding
const math = {};

// Get a random integer between two integers (inclusive)
math.getRandomNumber = function (min, max) {
    let minimum = typeof min === 'number' ? min : 0;
    let maximum = typeof max === 'number' ? max : 0;
    return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
};

// Export the library
module.exports = math;
