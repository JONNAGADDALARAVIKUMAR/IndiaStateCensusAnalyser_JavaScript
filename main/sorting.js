const CensusAnalyzer = require('../main/IndiaStateAnalyser');
const Analyser = new CensusAnalyzer();
const fs = require('fs')

class Sorting {
    stateSorter = (filePath) => {
        return new Promise(function(resolve) {
            Analyser.stateCensusLoaderForSorting(filePath)
            .then(states => {
                states.sort((first,second) => (first.State.toUpperCase() < second.State.toUpperCase()) ? -1 : 1);
                writeDataIntoJson(states, 'C:\\Users\\Admin\\javaScript\\IndiaStateCensusProject\\resources\\sortedStates.json');
                resolve(states);
            })
        })
    }
    stateCodeSorter = (filePath) => {
        return new Promise(function(resolve) {
            Analyser.stateCodeLoader(filePath)
            .then(states => {
                states.sort((first,second) => (first.StateCode < second.StateCode) ? -1 : 1);
                writeDataIntoJson(states, 'C:\\Users\\Admin\\javaScript\\IndiaStateCensusProject\\resources\\sortedStateCodes.json');
                resolve(states);
            })
        })
    }

    PopulationSorter = (filePath) => {
        return new Promise(function(resolve) {
            Analyser.stateCensusLoaderForSorting(filePath)
            .then(states => {
                states.sort((first,second) => (second.Population - first.Population));
                writeDataIntoJson(states, 'C:\\Users\\Admin\\javaScript\\IndiaStateCensusProject\\resources\\sortByPopulation.json');
                resolve(states);
            })
        })
    }
    densitySorter = (filePath) => {
        return new Promise(function(resolve) {
            Analyser.stateCensusLoaderForSorting(filePath)
            .then(states => {
                states.sort((first,second) => (second.DensityPerSqKm - first.DensityPerSqKm));
                writeDataIntoJson(states, 'C:\\Users\\Admin\\javaScript\\IndiaStateCensusProject\\resources\\sortedByDensity.json');
                resolve(states);
            })
        })
    }

    areaSorter = (filePath) => {
        return new Promise(function(resolve) {
            Analyser.stateCensusLoaderForSorting(filePath)
            .then(states => {
                states.sort((first,second) => (second.AreaInSqKm - first.AreaInSqKm));
                writeDataIntoJson(states, 'C:\\Users\\Admin\\javaScript\\IndiaStateCensusProject\\resources\\sortedByArea.json');
                resolve(states);
            })
        })
    }
}
const writeDataIntoJson = (states, filePath) => {
    fs.writeFile(filePath, JSON.stringify(states, null, 2), err => {
        // Checking for errors
    if (err) throw err;})
}
module.exports = Sorting;