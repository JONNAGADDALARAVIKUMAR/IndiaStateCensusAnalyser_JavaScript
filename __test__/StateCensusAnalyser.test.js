const CensusAnalyzer = require('../main/IndiaStateAnalyser');
const checkFileType = require('../main/NoSuchFileInvalidExtension');
const Sorting = require('../main/sorting');
'use strict'
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
    test('ThisTestCasePasesWhenReturnValueEqualstonumberofStates', () => {
        return analyzer.stateCensusLoader(FILE_PATH).then(states => expect(states.length).toBe(29))
    })

    //Sad TestCase
    test('This TestCase Pases when Returned Exception is No Such File', () => {
        return checkFileType(WRONG_FILEPATH).catch(error => expect(error.message).toBe('No Such File'));
    })

    //Sad TestCase
    test('This TestCase Pases when Returned Exception is Extension Incorrect', () => {
        return checkFileType(INCORRECT_EXTENSION_FILEPATH).catch(error => expect(error.message).toBe('Extension Incorrect'));
    })

    //Sad TestCase
    test('This TestCase Pases when Returned Exception is Invalid Delimiter Arised', () => {
        return analyzer.stateCensusLoader(FILE_PATH_DELIMITER).catch(error => expect(error.message).toBe('Invalid Delimiter Arised'));
    })

    //Sad TestCase
    test('This TestCase Pases when Returned Exception is Invalid Headers', () => {
        return analyzer.stateCensusLoader(FILE_PATH_HEADER).catch(error => expect(error.message).toBe('Invalid Headers'));
    })

    //Happy Test Case
    test('This TestCase Pases When Return Value Equals to number of States State Codes', () => {
        return analyzer.stateCodeLoader(FILE_PATH_STATE_CODES).then(states => expect(states.length).toBe(37));
    })

    //Sad TestCase
    test('This TestCase Pases when Returned Exception is No Such File State Codes', () => {
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
    test('This TestCase Pases when Returned Array first and Last States are matched', () => {
        const sorting = new Sorting();
        return sorting.stateSorter(FILE_PATH).then(sortedArray => {
            expect(sortedArray[0].State).toBe('Andhra Pradesh');
            expect(sortedArray[28].State).toBe('West Bengal');
        });
    })
})