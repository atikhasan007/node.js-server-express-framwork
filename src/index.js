/*

1.Title : Uptime Monitoring Application 
2.Description : A restful api to monitor up or down time of user defined links 

3.Author : md atik hasan 
4.Date : 19/12/24

*/





// dependencies 
const http = require('http');

//app object  - module scaffolding
const app = {}

//configuration
app.config = {};

//crete server 
app.createServer = () =>{
    const server = http.createServer(handleRequest);
}


//handle request response
app.handleRequest = (req, res) => {
    //response handle
    res.end('hello world');
}

