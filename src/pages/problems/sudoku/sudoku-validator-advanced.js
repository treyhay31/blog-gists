const CONSTANTS = require('./sudoku-constants');
const SudokuValidator = require('./sudoku-validator');

const isDuplicate = false;
const getDupeChecker = () => [
	isDuplicate,
	isDuplicate,
	isDuplicate,
	isDuplicate,
	isDuplicate,
	isDuplicate,
	isDuplicate,
	isDuplicate,
	isDuplicate,
];

class SudokuValidatorAdvanced extends SudokuValidator {
  	constructor(props) {
		super(props);
	}

	isNonZero(square) {
		return square !== 0;
	}

	isValidRow(row) {
		const nonZeroSquares = row.filter(this.isNonZero);
		const distinctSquares =  new Set(nonZeroSquares);
		
		return nonZeroSquares.length === (distinctSquares.size) 
	}

	//... no dupes in col

	//... no dupes in grid
};

module.exports = SudokuValidatorAdvanced;