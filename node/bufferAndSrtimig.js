const http = require('http');
//create new server
const server = http.createServer((req, res)=>{

    if(req.url === '/'){

    
                res.write('<html><head><title>From</title></head></html>');
                res.write('<body><form method="post" action="/process"> <input name="message"/></form></body>');
                res.end();


    } else if(req.url==='/process' && req.method==="POST"){
        
        req.on('data',(chunk)=>{
            console.log(chunk.toString());
        })

        res.write("thank you for submitted ");
        res.end();

       
    }

    else {
        res.write('Not found');
        res.end();
    }

});



server.listen(3000)
console.log('listening on prot 3000');




// const fs = require('fs');
// const ourReadStream = fs.createReadStream(`${__dirname}/myfile.txt`,'utf8');
// ourReadStream.on('data', (data)=>{
//   console.log(data);
// })
// console.log("hello");