const SudokuValidator = require('./sudoku-validator');

class SudokuValidatorAdvanced extends SudokuValidator {
  	constructor(props) {
		super(props);
	}

	isValidRow(board, rowIndex) {
		return this.hasNoDuplicates(
			this.getRow(board, rowIndex));
	}

	isValidCol(board, colIndex) {
		return this.hasNoDuplicates(
			this.getCol(board, colIndex)); 
	}

	isValidGrid(board, gridIndex) {
		return this.hasNoDuplicates(
			this.getGrid(board, gridIndex));
	}

	getRow(board, i) {
		return board[i];
	}
	
	getCol(board, i) {
		return board.map(row => row[i]);
	}

	getGrid(board, i) {
		return [
			...board[i].slice(),
			...board[i].slice(),
			...board[i].slice()
		];			
	}

	isNonZero(square) {
		return square !== 0;
	}

	hasNoDuplicates(arr) {
		const nonZeroSquares = arr.filter(this.isNonZero);
	
		const distinctSquares =  new Set(nonZeroSquares);
		
		return nonZeroSquares.length === (distinctSquares.size) 
	}
};

module.exports = SudokuValidatorAdvanced;