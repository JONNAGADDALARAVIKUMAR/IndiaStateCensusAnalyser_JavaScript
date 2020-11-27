const fs = require('fs')
const csv = require('csv-parser');
const path = require('path');

//Reading CSV file and Storing in an Array
const readCsvFile = (filePath) => {
    const states = [];
    return new Promise(function(resolve) {
              
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
    })
}
module.exports = readCsvFile;