const CensusAnalyzer = require('../main/IndiaStateAnalyser');
const checkFileType = require('../main/NoSuchFileInvalidExtension');

const FILE_PATH = 'C:\\Users\\Admin\\javaScript\\IndiaStateCensusProject\\resources\\IndiaStateCensusData.csv';
const WRONG_FILEPATH = 'C:\\Users\\Admin\\javaScript\\StateCensusProject\\resources\\IndiaStateCensusData.csv';
const INCORRECT_EXTENSION_FILEPATH = 'C:\\Users\\Admin\\javaScript\\IndiaStateCensusProject\\resources\\IndiaStateCensusData.json';
const FILE_PATH_DELIMITER = 'C:\\Users\\Admin\\javaScript\\IndiaStateCensusProject\\resources\\IndiaStateCensusDataDelimiter.csv';
const FILE_PATH_HEADER = 'C:\\Users\\Admin\\javaScript\\IndiaStateCensusProject\\resources\\IndiaStateCensusDataHeader.csv';
const FILE_PATH_STATE_CODES = 'C:\\Users\\Admin\\javaScript\\IndiaStateCensusProject\\resources\\IndiaStateCode.csv';
const FILE_PATH_DELIMITER_STATE = 'C:\\Users\\Admin\\javaScript\\IndiaStateCensusProject\\resources\\IndiaStateCodeDelimiter.csv';
const FILE_PATH_HEADER_STATE = 'C:\\Users\\Admin\\javaScript\\IndiaStateCensusProject\\resources\\IndiaStateCodeHeader.csv';

const analyzer = new CensusAnalyzer();

describe('testsForLoadIndiaStateCensusCSV', () => {
   
    //Happy Test Case
    test('This TestCase Pases When Return Value Equals to number of States', () => {
        return expect(analyzer.stateCensusLoader(FILE_PATH)).resolves.toBe(29);
    })

    //Sad TestCase
    test('This TestCase Pases when Returned Exception is No Such File', () => {
        return expect(checkFileType(WRONG_FILEPATH)).rejects.toThrow('No Such File');
    })

    //Sad TestCase
    test('This TestCase Pases when Returned Exception is Extension Incorrect', () => {
        return expect(checkFileType(INCORRECT_EXTENSION_FILEPATH)).rejects.toThrow('Extension Incorrect');
    })

    //Sad TestCase
    test('This TestCase Pases when Returned Exception is Invalid Delimiter Arised', () => {
        return expect(analyzer.stateCensusLoader(FILE_PATH_DELIMITER)).rejects.toThrow('Invalid Delimiter Arised');
    })

    //Sad TestCase
    test('This TestCase Pases when Returned Exception is Invalid Headers', () => {
        return expect(analyzer.stateCensusLoader(FILE_PATH_HEADER)).rejects.toThrow('Invalid Headers');
    })

    //Happy Test Case
    test('This TestCase Pases When Return Value Equals to number of States, State Codes', () => {
        return expect(analyzer.stateCodeLoader(FILE_PATH_STATE_CODES)).resolves.toBe(37);
    })

    //Sad TestCase
    test('This TestCase Pases when Returned Exception is No Such File, State Codes', () => {
        return expect(checkFileType(WRONG_FILEPATH)).rejects.toThrow('No Such File');
    })

    //Sad TestCase
    test('This TestCase Pases when Returned Exception is Extension Incorrect, State Codes', () => {
        return expect(checkFileType(INCORRECT_EXTENSION_FILEPATH)).rejects.toThrow('Extension Incorrect');
    })

    //Sad TestCase
    test('This TestCase Pases when Returned Exception is Invalid Delimiter Arised, State Codes', () => {
        return expect(analyzer.stateCodeLoader(FILE_PATH_DELIMITER_STATE)).rejects.toThrow('Invalid Delimiter Arised');
    })

    //Sad TestCase
    test('This TestCase Pases when Returned Exception is Invalid Headers', () => {
        return expect(analyzer.stateCodeLoader(FILE_PATH_HEADER_STATE)).rejects.toThrow('Invalid Headers');
    })
})