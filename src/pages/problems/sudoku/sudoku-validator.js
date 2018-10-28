const CONSTANTS = require('./sudoku-constants');

class SudokuValidator {
  // -- GAME --
  isValidGame(game) {
    return game.length === CONSTANTS.VALID.GAME.LENGTH;    
  }

  // -- BOARD --
  isValidBoard(board) {
    return this.isValidBoardLength(board.length);    
  }

  isValidBoardLength(len) {
    return len === CONSTANTS.VALID.BOARD.LENGTH;
  }

  // -- GRID --
  isValidGrid(grid) {
    return this.isValidGridLength(grid.length) && 
      grid.every(square => this.isValidSquare(square));
  }
    
  isValidGridLength(len) {
    return len === CONSTANTS.VALID.GRID.LENGTH;
  }

  // -- SQUARE --
  isValidSquare(square) {
    return Number.isInteger(square) && 
      square >= CONSTANTS.VALID.SQUARE.MIN && 
      square <= CONSTANTS.VALID.SQUARE.MAX;
  }    
};

module.exports = SudokuValidator;