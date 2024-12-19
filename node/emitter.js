const fs = require('fs');
const ourRedStream = fs.createReadStream(`${__dirname}/myfile.txt`);
const ourWriteStream = fs.createWriteStream(`${__dirname}/output.txt`);


// ourRedStream.on('data', (chunk) =>{
//     ourWriteStream.write(chunk);
// });




ourRedStream.pipe(ourWriteStream);