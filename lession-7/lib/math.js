/*

1.Title : Basic Node app example
2.Description : simple node application that print random quotes per 
second interval.

3.Author : md atik hasan 
4.Date : 19/12/24


*/



// Math object - Module scaffolding
const math = {};

//get a random integer between two integers
//Inspired by : 

math.getRandomNumber = function getRandomNumber(min, max){
    let minimum = min;
    let maximum  = max;

    minimum = typeof minimum === 'number' ? minimum : 0;
    maximum = typeof maximum === 'number' ? maximum : 0;
    return Math.floor(Math.random() * (maximum - minimum +1) + min);

}



//export the library 
module.exports = math;