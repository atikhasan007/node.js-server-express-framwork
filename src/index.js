/*

1.Title : Uptime Monitoring Application 
2.Description : A restful api to monitor up or down time of user defined links 

3.Author : md atik hasan 
4.Date : 19/12/24

*/





// dependencies 
const { copyFileSync } = require('fs');
const http = require('http');
const url = require('url');

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
app.handleRequest = (req, res) => {
    //request handling
    //get the url and parse it 
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    console.log(trimmedPath);





    //response handle
    res.end('hello world programmer');
}



//start the server 
 app.createServer();







