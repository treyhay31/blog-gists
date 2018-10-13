const CONSTANTS = {
  VALID: {
    GAME: { LENGTH: 1 },
    GRID: { LENGTH: 9 },
    BOARD: { LENGTH: 9 },
    SQUARE: { MAX: 9, MIN: 0 }
  }
};

// -- GAME --
const isValidGame = (game) => 
  game.length === CONSTANTS.VALID.GAME.LENGTH;

// -- BOARD --
const isValidBoard = (board) => 
  isValidBoardLength(board.length);

const isValidBoardLength = (len) => 
  len === CONSTANTS.VALID.BOARD.LENGTH;

// -- GRID --
const isValidGrid = (grid) => 
  isValidGridLength(grid.length) && 
  grid.every(square => isValidSquare(square));

const isValidGridLength = (len) => 
  len === CONSTANTS.VALID.GRID.LENGTH;

// -- SQUARE --
const isValidSquare = (square) => 
  Number.isInteger(square) && 
  square >= CONSTANTS.VALID.SQUARE.MIN && 
  square <= CONSTANTS.VALID.SQUARE.MAX;

module.exports = {
  isValidGame,
  isValidBoard,
  isValidGrid,
  isValidSquare
};