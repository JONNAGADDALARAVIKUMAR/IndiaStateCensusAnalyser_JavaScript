const path = require('path');
const fs = require('fs')
const Exceptions = require('./Exceptions');
const exception = new Exceptions();

const checkFileType = (filePath) => {
    return new Promise(function(resolve, reject) {
        var ext = path.extname(filePath);
        if(ext != '.csv') {   
            reject(new Error(exception.exceptions.extension));
        }
        if(!fs.existsSync(filePath)) {
            reject(new Error(exception.exceptions.noFile));
        }
    })
}
module.exports = checkFileType;
