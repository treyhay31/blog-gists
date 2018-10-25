const CONSTANTS = require('./sudoku-constants');
const SudokuValidator = require('./sudoku-validator');

class SudokuValidatorAdvanced extends SudokuValidator {
  constructor(props) {
		super(props);

	}

	isValidRow(row) {
		const dupeChecker = new Set();
		row.map(r => dupeChecker.has(r))
	}
	//... no dupes in row
		//... no dupes in col
			//... no dupes in grid
};



module.exports = SudokuValidatorAdvanced;