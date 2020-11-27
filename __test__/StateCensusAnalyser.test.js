const readCsvFile = require('../main/IndiaStateAnalyser');

const FILE_PATH = 'C:\\Users\\Admin\\javaScript\\IndiaStateCensusProject\\resources\\IndiaStateCensusData.csv';
const WRONG_FILEPATH = 'C:\\Users\\Admin\\javaScript\\StateCensusProject\\resources\\IndiaStateCensusData.csv';

//Happy Test Case
test('This TestCase Pases When Return Value Equals to number of States', () => {
    readCsvFile(FILE_PATH)
    .then(function(count) {
        expect(count).toBe(29);
    })    
})

//Sad TestCase
test('This TestCase Pases when Returned Exception is No Such File', () => {
    readCsvFile(WRONG_FILEPATH)
    .catch(function(error) {
        expect(error.message).toBe('No Such File');
    })   
})