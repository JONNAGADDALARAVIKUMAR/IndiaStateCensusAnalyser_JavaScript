const CensusAnalyzerClass = require('../main/IndiaStateAnalyser');

const FILE_PATH = 'C:\\Users\\Admin\\javaScript\\IndiaStateCensusProject\\resources\\IndiaStateCensusData.csv';
const WRONG_FILEPATH = 'C:\\Users\\Admin\\javaScript\\StateCensusProject\\resources\\IndiaStateCensusData.csv';
const INCORRECT_EXTENSION_FILEPATH = 'C:\\Users\\Admin\\javaScript\\IndiaStateCensusProject\\resources\\IndiaStateCensusData.json';
const FILE_PATH_DELIMITER = 'C:\\Users\\Admin\\javaScript\\IndiaStateCensusProject\\resources\\IndiaStateCensusDataDelimiter.csv';
const FILE_PATH_HEADER = 'C:\\Users\\Admin\\javaScript\\IndiaStateCensusProject\\resources\\IndiaStateCensusDataHeader.csv';
const FILE_PATH_STATE_CODES = 'C:\\Users\\Admin\\javaScript\\IndiaStateCensusProject\\resources\\IndiaStateCode.csv';

const censusAnalyzerClass = new CensusAnalyzerClass();

describe('testsForLoadIndiaStateCensusCSV', () => {
   
    //Happy Test Case
    test('This TestCase Pases When Return Value Equals to number of States', () => {
        return expect(censusAnalyzerClass.stateCensusFile(FILE_PATH)).resolves.toBe(29);
    })

    //Sad TestCase
    test('This TestCase Pases when Returned Exception is No Such File', () => {
        return expect(censusAnalyzerClass.stateCensusFile(WRONG_FILEPATH)).rejects.toThrow('No Such File');
    })

    //Sad TestCase
    test('This TestCase Pases when Returned Exception is Extension Incorrect', () => {
        return expect(censusAnalyzerClass.stateCensusFile(INCORRECT_EXTENSION_FILEPATH)).rejects.toThrow('Extension Incorrect');
    })

    //Sad TestCase
    test('This TestCase Pases when Returned Exception is Invalid Delimiter Arised', () => {
        return expect(censusAnalyzerClass.stateCensusFile(FILE_PATH_DELIMITER)).rejects.toThrow('Invalid Delimiter Arised');
    })

    //Sad TestCase
    test('This TestCase Pases when Returned Exception is Invalid Headers', () => {
        return expect(censusAnalyzerClass.stateCensusFile(FILE_PATH_HEADER)).rejects.toThrow('Invalid Headers');
    })

    //Happy Test Case
    test('This TestCase Pases When Return Value Equals to number of States, State Codes', () => {
        return expect(censusAnalyzerClass.stateCodeFile(FILE_PATH_STATE_CODES)).resolves.toBe(37);
    })

    //Sad TestCase
    test('This TestCase Pases when Returned Exception is No Such File, State Codes', () => {
        return expect(censusAnalyzerClass.stateCodeFile(WRONG_FILEPATH)).rejects.toThrow('No Such File');
    })

    //Sad TestCase
    test('This TestCase Pases when Returned Exception is Extension Incorrect, State Codes', () => {
        return expect(censusAnalyzerClass.stateCodeFile(INCORRECT_EXTENSION_FILEPATH)).rejects.toThrow('Extension Incorrect');
    })
})