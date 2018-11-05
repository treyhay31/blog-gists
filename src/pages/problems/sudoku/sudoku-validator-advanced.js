const SudokuValidator = require('./sudoku-validator');

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
		return [
			...board[i + 0].slice(0, 3),
			...board[i + 1].slice(0, 3),
			...board[i + 2].slice(0, 3)
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