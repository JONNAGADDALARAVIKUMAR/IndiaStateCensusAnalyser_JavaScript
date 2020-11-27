const fs = require('fs')
const csv = require('csv-parser');
const path = require('path');

//Reading CSV file and Storing in an Array
const readCsvFile = (filePath) => {
    const states = [];
    return new Promise(function(resolve, reject) {
        var ext = path.extname(filePath);
        if(ext != '.csv') {   
            reject(new Error('Extension Incorrect'));
        }
        else if(!fs.existsSync(filePath)) {
            reject(new Error('No Such File'));
        } else {     
            fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (row) => {
                const stateData = {
                    State: row.State,
                    Population: row.Population,
                    AreaInSqKm: row.AreaInSqKm,
                    DensityPerSqKm: row.DensityPerSqKm
                }   
                    states.push(stateData); 
            })
        
            .on('end', () => {
                resolve(states.length)
            })
        }
    })
}
module.exports = readCsvFile;