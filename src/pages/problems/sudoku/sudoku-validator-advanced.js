const SudokuValidator = require('./sudoku-validator');
const {START, END} = require('./sudoku-constants');

class SudokuValidatorAdvanced extends SudokuValidator {
  constructor(props) {
		super(props);
	}

	indexChecker(i) {
		if (i > 8 || i < 0) throw new Error("Out of sudoku bounds!");
	}

	isValidRow(board, rowIndex) {
		this.indexChecker(rowIndex);
		
		return this.hasNoDuplicates(
			this.getRow(board, rowIndex));
	}

	isValidCol(board, colIndex) {
		this.indexChecker(colIndex);

		return this.hasNoDuplicates(
			this.getCol(board, colIndex)); 
	}

	isValidGrid(board, gridIndex) {
		this.indexChecker(gridIndex);

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
		const start = START[i];
		const end = start + 3;
		return [
			...board[start + 0].slice(start, end),
			...board[start + 1].slice(start, end),
			...board[start + 2].slice(start, end)
		];			
	}

	isNonZero(square) {
		return square !== 0;
	}

	hasNoDuplicates(arr) {
		const nonZeroSquares = arr.filter(this.isNonZero);
	
		const distinctSquares = new Set(nonZeroSquares);
		
		return nonZeroSquares.length === (distinctSquares.size) 
	}
};

module.exports = SudokuValidatorAdvanced;