const SudokuValidatorAdvanced = require('./sudoku-validator-advanced');
const data = require('./sudoku-fake-data');
const { emptyGame, multiBoardGame } = data;

const sudoku = new SudokuValidatorAdvanced();

describe('Rows', () => {
  describe('Valid', () => {
    it('should not have any duplicates', () => {
      expect(sudoku.isValidRow([1,2,3,4,5,6,7,8,9])).toBe(true);
    });
	});
	describe('Invalid', () => {
    it('should return false if there are duplicates', () => {
      expect(sudoku.isValidRow([1,1,3,4,5,6,7,8,9])).toBe(false);
    });
  });
});