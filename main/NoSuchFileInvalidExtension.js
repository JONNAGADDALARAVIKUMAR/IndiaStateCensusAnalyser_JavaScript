const path = require('path');
const fs = require('fs')
const checkFileType = (filePath) => {
    return new Promise(function(resolve, reject) {
        var ext = path.extname(filePath);
        if(ext != '.csv') {   
            reject(new Error('Extension Incorrect'));
        }
        if(!fs.existsSync(filePath)) {
            reject(new Error('No Such File'));
        }
    })
}
module.exports = checkFileType;
