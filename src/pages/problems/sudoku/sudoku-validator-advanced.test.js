const SudokuValidatorAdvanced = require('./sudoku-validator-advanced');
const data = require('./sudoku-fake-data');
const { validBoard } = data;
const CONSTANTS = require('./sudoku-constants');
const { ROWS, COLS, GRIDS } = CONSTANTS;

const sudoku = new SudokuValidatorAdvanced();

describe('Duplicate Validation', () => {
  describe('Valid', () => {
    it('should return true if no duplicates', () => {
      expect(sudoku.hasNoDuplicates([1,2,3,4,5,6,7,8,9])).toBe(true);
    });
    it('should return true if only duplicates are zero', () => {
      expect(sudoku.hasNoDuplicates([0,0,0,0,5,6,7,8,9])).toBe(true);
    });
	});
	describe('Invalid', () => {
    it('should return false if there are duplicates', () => {
      expect(sudoku.hasNoDuplicates([1,1,3,4,5,6,7,8,9])).toBe(false);
    });
  });
});

describe('Getting Data', () => {
  describe('Valid', () => {
    it('should return the first row of data', () => {
      const expectedRow = validBoard[0];
      const actualRow = sudoku.getRow(validBoard, ROWS.FIRST);

      actualRow.map((row, i) => expect(row).toBe(expectedRow[i]));
    });
    it('should return the last column of data', () => {
      const expectedCol = validBoard.map(row => row[COLS.NINTH]);
      const actualCol = sudoku.getCol(validBoard, COLS.NINTH)
      
      actualCol.map((col, i) => expect(col).toBe(expectedCol[i]));
    });
    it('should return the top left grid of data', () => {
      const expectedGrid = [
        validBoard[0][0],validBoard[0][1],validBoard[0][2],
        validBoard[1][0],validBoard[1][1],validBoard[1][2],
        validBoard[2][0],validBoard[2][1],validBoard[2][2],
      ];
      const actualGrid = sudoku.getGrid(validBoard, GRIDS.TOP_LEFT);

      actualGrid.map((grid, i) => expect(grid).toBe(expectedGrid[i]));
    });
    it('should return the middle grid of data', () => {
      const expectedGrid = [
        validBoard[3][3],validBoard[3][4],validBoard[3][5],
        validBoard[4][3],validBoard[4][4],validBoard[4][5],
        validBoard[5][3],validBoard[5][4],validBoard[5][5],
      ];
      const actualGrid = sudoku.getGrid(validBoard, GRIDS.MID_CENTER);

      actualGrid.map((grid, i) => expect(grid).toBe(expectedGrid[i]));
    });
    it('should return the bottom right grid of data', () => {
      const expectedGrid = [
        validBoard[6][6],validBoard[6][7],validBoard[6][8],
        validBoard[7][6],validBoard[7][7],validBoard[7][8],
        validBoard[8][6],validBoard[8][7],validBoard[8][8],
      ];
      const actualGrid = sudoku.getGrid(validBoard, GRIDS.BOT_RIGHT);

      actualGrid.map((grid, i) => expect(grid).toBe(expectedGrid[i]));
    });
	});
	describe('Retrieving value outside of range', () => {
    test('should throw exception', () => {
      expect(() => {
        sudoku.isValidRow(validBoard, 19);
      }).toThrow();
    });
  });
});