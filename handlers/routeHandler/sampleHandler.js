/*
1.Title : Sample handler
2.Description: sample handler
3.Author : md atik hasan 
4.Date : 22/12/24
*/


//module scaffolding
const handler = {};

handler.sampleHandler = (requestProperties, callback) =>{
    console.log(requestProperties);
    callback(200, {
        message:'This is a sample url',

    });
};


module.exports = handler;
