const CONSTANTS = require('./sudoku-constants');
const SudokuValidator = require('./sudoku-validator');

class SudokuValidatorAdvanced extends SudokuValidator {
  constructor(props) {
		super(props);

	}

	//... no dupes in row
		//... no dupes in col
			//... no dupes in grid
};



module.exports = SudokuValidatorAdvanced;