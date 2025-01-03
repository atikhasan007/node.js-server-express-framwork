//dependency 
const fs = require('fs');
const path = require('path');


const lib = {};


// base directory of the data folder data save korbo
lib.basedir = path.join(__dirname, '/../.data/');

//write data to file
lib.create = (dir, file, data, callback) =>{
    //open file for writing
    fs.open(lib.basedir+dir+'/'+file+'.json', 'wx', (err , fileDescriptor)=>{
        if(!err && fileDescriptor){
            //convert data to String
            const stringData = JSON.stringify(data);

            //write data to file and then close it
            fs.writeFile(fileDescriptor, stringData, (err2)=>{
                if(!err2){
                    fs.close(fileDescriptor, function(err3){
                        if(!err3){
                            callback(false);

                        }
                        else{
                            callback('error closing the new file');

                        }
                    })

                }else{
                    callback('Error writing to new file!');
                }
            })

        }else{
            callback(' not create new file , it may already exists!');
        }
    })
}


//read data from file 
lib.read = (dir, file, callback) =>{
    fs.readFile(`${lib.basedir + dir}/${file}.json`,'utf8', (err,data)=>{
        callback(err, data);
    });
};


//update existing file
lib.update = (dir, file, data, callback) => {
    //file open for writing
    fs.open(`${lib.basedir + dir}/${file}.json`, 'r+', (err, fileDescriptor)=>{
        if(!err && fileDescriptor){
            //convert the data to string
            const stringData = JSON.stringify(data);

            //truncate the file
            fs.ftruncate(fileDescriptor, (err1)=>{
                if(!err1){
                    //write to the file and close it
                    fs.writeFile(fileDescriptor, stringData, (err2)=>{
                    if(!err2){
                        //close the file
                        fs.close(fileDescriptor, (err3) =>{
                            if(!err3){
                               callback(false);
                            }else{
                                callback('error closing file!');

                            }
                        });

                    }
                    else{
                        callback('Error writing to file!');
                    }


                });
                 }
                else{
                    callback('error truncating file!');
                }
            })

        }else{
            callback(`Error updating. File may not exist`);
        }
    })

}



//delete existing files
lib.delete = (dir, file,callback) =>{
    //unlink file
    fs.unlink(`${lib.basedir + dir}/${file}.json`, (err)=>{
        if(!err){
            callback(false);
        }
        else{
            callback(`error deleting file`);
        }
    })
}

module.exports = lib;