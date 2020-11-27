const fs = require('fs')
const csv = require('csv-parser');
const path = require('path');

//Reading CSV file and Storing in an Array
class CensusAnalyzerClass {
    stateCensusFile(filePath) {
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
                .on('headers', (Header) => {
                    if( Header[0] != 'State' || Header[1] != 'Population' || 
                        Header[2] != 'AreaInSqKm' || Header[3] != 'DensityPerSqKm') {
                            reject(new Error('Invalid Headers'));
                    }
                })
                .on('data', (row) => {
                    if(row.State == undefined || row.Population == undefined || 
                        row.AreaInSqKm == undefined || row.DensityPerSqKm == undefined) {
                            reject(new Error('Invalid Delimiter Arised'));
                    } else {
                        const stateData = {
                            State: row.State,
                            Population: row.Population,
                            AreaInSqKm: row.AreaInSqKm,
                            DensityPerSqKm: row.DensityPerSqKm
                        }
                        states.push(stateData);
                    }  
                })
                .on('end', () => {
                    resolve(states.length)
                })
            }
        })
    }

    stateCodeFile(filePath) {
        const statecodeData = [];
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
                    if(row.SrNo == undefined || row.StateName == undefined || 
                        row.TIN == undefined || row.StateCode == undefined) {
                            reject(new Error('Invalid Delimiter Arised'));
                    } else {
                        const stateData = {
                            SrNo: row.SrNo,
                            StateName: row.State,
                            TIN: row.TIN,
                            StateCode: row.StateCode
                    }
                    statecodeData.push(stateData); 
                }
                })
            
                .on('end', () => {
                    resolve(statecodeData.length)
                })
            }
        })
    }
}
module.exports = CensusAnalyzerClass;