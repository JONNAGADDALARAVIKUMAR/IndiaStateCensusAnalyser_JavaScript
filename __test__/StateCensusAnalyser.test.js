const readCsvFile = require('../main/IndiaStateAnalyser');

const FILE_PATH = 'C:\\Users\\Admin\\javaScript\\IndiaStateCensusProject\\resources\\IndiaStateCensusData.csv';

//Happy Test Case
test('This TestCase Pases When Return Value Equals to number of States', () => {
    readCsvFile(FILE_PATH)
    .then(function(count) {
        expect(count).toBe(29);
    })    
})