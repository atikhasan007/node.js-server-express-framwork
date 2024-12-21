/*
1.Title : not found handler
2.Description: 404 not found  handler
3.Author : md atik hasan 
4.Date : 22/12/24
*/


//module scaffolding
const handler = {};

handler.notfoundHandler = (requestProperties, callback) =>{


    callback(404,{
        message:'your requested url was not found',

    })
};


module.exports = handler;
