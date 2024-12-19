const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res)=>{
    
    const myReadStream = fs.createReadStream(__dirname + '/myfile.txt', 'utf-8')
    myReadStream.pipe(res);
     
});
server.listen(3000)
console.log('listening on prot 3000');
 
