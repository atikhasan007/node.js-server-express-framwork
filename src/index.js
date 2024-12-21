/*

1.Title : Uptime Monitoring Application 
2.Description : A restful api to monitor up or down time of user defined links 

3.Author : md atik hasan 
4.Date : 19/12/24

*/




// dependencies 
const { copyFileSync } = require('fs');
const http = require('http');
const { buffer } = require('stream/consumers');
const {handleRequest} =require('../helpers/handleReqRes')
//app object  - module scaffolding
const app = {}

//configuration
app.config = {
    prot: 3000
};

//crete server 
app.createServer = () =>{
    const server = http.createServer(app.handleRequest);
    server.listen(app.config.prot, () =>{
        console.log(`listening to port ${app.config.prot}`)
    }) 
}


//handle request response
app.handleRequest  =  handleRequest;


//start the server 
 app.createServer();







