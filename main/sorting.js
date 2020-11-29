const CensusAnalyzer = require('../main/IndiaStateAnalyser');
const Analyser = new CensusAnalyzer();
const fs = require('fs')

class Sorting {
    stateSorter = (filePath) => {
        return new Promise(function(resolve) {
            Analyser.stateCensusLoader(filePath)
            .then(states => {
                states.sort((first,second) => (first.State.toUpperCase() < second.State.toUpperCase()) ? -1 : 1);
                writeDataIntoJson(states, 'C:\\Users\\Admin\\javaScript\\IndiaStateCensusProject\\resources\\sortedStates.json');
                resolve(states);
            })
        })
    }
    stateCodeSorter = (filePath) => {
        
    }
}
const writeDataIntoJson = (states, filePath) => {
    fs.writeFile(filePath, JSON.stringify(states, null, 2), err => {
        // Checking for errors
    if (err) throw err;})
}
module.exports = Sorting;