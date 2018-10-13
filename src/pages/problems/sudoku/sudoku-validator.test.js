const SudokuValidator = require('./sudoku-validator');
const data = require('./sudoku-fake-data');
const { emptyGame, multiBoardGame } = data;

const sudoku = new SudokuValidator();

describe('Games', () => {
  
  describe('Valid', () => {
    it('should take in a single board', () => {
      expect(sudoku.isValidGame(emptyGame)).toBe(true);
    });
  });

  describe('Invalid', () => {
    it('should not take in multiple boards', () => {
      expect(sudoku.isValidGame(multiBoardGame)).toBe(false);
    });
  });
});

describe('Boards', () => {
  const [ emptyBoard ] = emptyGame; 
  
  describe('Valid', () => {
    it('should have a total of 9 grids', () => {
      expect(sudoku.isValidBoard(emptyBoard)).toBe(true);
    });
  });

  describe('Invalid', () => {
    const boardWithExtraGrid = [[], ...emptyBoard];
    
    it('should not accept a board with more than 9 grids', () => {
      expect(sudoku.isValidBoard(boardWithExtraGrid)).toBe(false);
    });
    
    it('should not accept a board with less than 9 grids', () => {
      expect(sudoku.isValidBoard(emptyBoard.filter((g, idx) => idx > 0))).toBe(false);
    });
  });
});

describe('Grids', () => {
  
  describe('Valid', () => {
    const grid = [1,2,3, 4,5,6, 7,8,9];
    it('should have a total of 9 squares', () => {
      expect(sudoku.isValidGrid(grid)).toBe(true);
    });
  });

  describe('Invalid', () => {
    it('should not accept a grid of more than 9 squares', () => {
      expect(sudoku.isValidGrid([1,2,3,4,5,6,7,8,9,10])).toBe(false);
    });
    it('should not accept a grid of less than 9 squares', () => {
      expect(sudoku.isValidGrid([1,2,3])).toBe(false);
    });
  });
});

describe('Squares', () => {
  
  describe('Valid', () => {
    it('should accept numbers 0 - 9', () => {
      expect(sudoku.isValidSquare(0)).toBe(true);
      expect(sudoku.isValidSquare(1)).toBe(true);
      expect(sudoku.isValidSquare(2)).toBe(true);
      expect(sudoku.isValidSquare(3)).toBe(true);
      expect(sudoku.isValidSquare(4)).toBe(true);
      expect(sudoku.isValidSquare(5)).toBe(true);
      expect(sudoku.isValidSquare(6)).toBe(true);
      expect(sudoku.isValidSquare(7)).toBe(true);
      expect(sudoku.isValidSquare(8)).toBe(true);
      expect(sudoku.isValidSquare(9)).toBe(true);
    });
  });

  describe('Invalid', () => {
    it('should not accept a non numeric', () => {
      expect(sudoku.isValidSquare('a')).toBe(false);
      expect(sudoku.isValidSquare({})).toBe(false);
      expect(sudoku.isValidSquare(undefined)).toBe(false);
    });
    it('should not accept anything below 0', () => {
      expect(sudoku.isValidSquare(-1)).toBe(false);
    });
    it('should not accept anything below 0', () => {
      expect(sudoku.isValidSquare(10)).toBe(false);
    });
  });
});