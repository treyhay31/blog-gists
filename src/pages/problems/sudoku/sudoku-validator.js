const CONSTANTS = require('./sudoku-constants');

class SudokuValidator {
  isValidGame(game) {
    return game.length === CONSTANTS.VALID.GAME.LENGTH;    
  }

  isValidBoard(board) {
    return this.isValidBoardLength(board.length);    
  }

  isValidBoardLength(len) {
    return len === CONSTANTS.VALID.BOARD.LENGTH;
  }

  isValidGrid(grid) {
    return this.isValidGridLength(grid.length) && 
      grid.every(square => this.isValidSquare(square));
  }
    
  isValidGridLength(len) {
    return len === CONSTANTS.VALID.GRID.LENGTH;
  }

  isValidSquare(square) {
    return Number.isInteger(square) && 
      square >= CONSTANTS.VALID.SQUARE.MIN && 
      square <= CONSTANTS.VALID.SQUARE.MAX;
  }    
};

module.exports = SudokuValidator;