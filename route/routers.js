/*
1.Title : Routes
2.Description : Application Routes
3.Author : md Atik Hasan 
4.Date : 22/12/24
*/


//dependencies
const {sampleHandler } = require('../handlers/routeHandler/sampleHandler');


const routes = {
    'sample' : sampleHandler,

}

module.exports  = routes;