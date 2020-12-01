const fs = require('fs')
const csv = require('csv-parser');

const  states = [];

//Reading CSV file and Storing in an Array
class CensusAnalyzer {
    stateCensusLoader(filePath) {
        const states = [];
        return new Promise(function(resolve, reject) {   
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
                resolve(states)
            })
        })
    }
    
    stateCodeLoader(filePath) {
        const statecodeData = [];
        return new Promise(function(resolve, reject) { 
            fs.createReadStream(filePath)
            .pipe(csv())
            .on('headers', (Header) => {
                if( Header[0] != 'SrNo' || Header[1] != 'StateName' || 
                    Header[2] != 'TIN' || Header[3] != 'StateCode') {
                        reject(new Error('Invalid Headers'));
                }
            })
            .on('data', (row) => {
                if(row.SrNo == undefined || row.StateName == undefined || 
                    row.TIN == undefined || row.StateCode == undefined) {
                        reject(new Error('Invalid Delimiter Arised'));
                } else {
                    const stateData = {
                        SrNo: row.SrNo,
                        StateName: row.StateName,
                        TIN: row.TIN,
                        StateCode: row.StateCode
                    }
                    statecodeData.push(stateData); 
                }
            })
            .on('end', () => {
                resolve(statecodeData)
            })
        })
    }

    stateCensusLoaderForSorting(filePath) {
        return new Promise(function(resolve) {  
            if(states.length == 0) {
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
                    resolve(states)
                })
            } else {
                resolve(states)
            }
        })
    }    
}
module.exports = CensusAnalyzer;