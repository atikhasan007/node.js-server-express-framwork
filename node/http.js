const http = require('http');
//create new server
const server = http.createServer((req, res)=>{

    if(req.url === '/'){

    
res.write('hello programmer');
res.write('How are you doing');
res.end();
    } else if(req.url==='/about'){
        res.write("This is about us page ");
        res.end();
    }

    else {
        res.write('Not found');
        res.end();
    }

});//server object akte eventemmiter event loop on hoye jay sere deu na 



server.listen(3000)
console.log('listening on prot 3000');
